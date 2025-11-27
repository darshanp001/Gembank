const LOI = require('../models/LOI.model');
const { generateLOIPDF, savePDF } = require('../services/pdf.service');
const { sendLOIEmail } = require('../services/email.service');
const { encrypt } = require('../services/encryption.service');

/**
 * Submit Letter of Interest
 * @route POST /api/loi/submit
 * @access Public (with rate limiting)
 */
exports.submitLOI = async (req, res) => {
  console.log("Backend: Received a submission request.");
  try {
    const formData = req.body;
    console.log("Backend: Received form data:", formData);
    if (req.file) {
      console.log("Backend: Received file:", req.file.filename);
    }

    // Validate required fields
    if (!formData.ownerName || !formData.storeName || !formData.gstin || !formData.email || !formData.phone) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Generate unique LOI reference number
    const loiReference = `LOI-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // Prepare the data for saving
    const dataToSave = {
      ...formData,
      loiReference,
      companyLogo: formData.companyLogo || null, // Explicitly include the company logo
    };

    if (req.file) {
      dataToSave.verificationFilePath = req.file.path;
    }

    const newLoi = new LOI(dataToSave);
    const savedLoi = await newLoi.save();

    console.log('✅ LOI saved to MongoDB:', savedLoi);

    // Generate and save the PDF document
    const pdfBuffer = await generateLOIPDF(savedLoi);
    const pdfUrl = await savePDF(pdfBuffer, savedLoi.loiReference); // Correctly await the async function

    // Update the LOI document with the path to the generated PDF
    savedLoi.loiDocumentUrl = pdfUrl;
    await savedLoi.save();

    // Confirmation email sending is disabled for now
    // await sendLOIEmail(savedLoi.email, savedLoi, pdfUrl);

    res.status(201).json({
      success: true,
      message: 'LOI submitted successfully',
      data: {
        loiReference: savedLoi.loiReference,
        submittedAt: savedLoi.createdAt,
        pdfUrl: pdfUrl, // Send the public URL of the PDF to the frontend
      }
    });

  } catch (error) {
    console.error('❌ LOI Submission Error:', error);
    
    // Handle duplicate key error for GSTIN
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: 'An LOI with this GSTIN already exists.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to submit LOI. Please try again.',
      error: process.env.NODE_ENV === 'development' ? error.message : 'An internal server error occurred.'
    });
  }
};

/**
 * Get LOI by reference number
 * @route GET /api/loi/:reference
 * @access Private (Admin only)
 */
exports.getLOIByReference = async (req, res) => {
  try {
    const { reference } = req.params;

    const loi = await LOI.findOne({ loiReference: reference });

    if (!loi) {
      return res.status(404).json({
        success: false,
        message: 'LOI not found'
      });
    }

    // Decrypt sensitive data for admin view
    const decryptedLOI = {
      ...loi.toObject(),
      contactInfo: {
        ...loi.contactInfo,
        phone: decrypt(loi.contactInfo.phone),
        alternatePhone: loi.contactInfo.alternatePhone ? decrypt(loi.contactInfo.alternatePhone) : null
      },
      businessInfo: {
        ...loi.businessInfo,
        gstin: loi.businessInfo.gstin ? decrypt(loi.businessInfo.gstin) : null
      },
      compliance: {
        ...loi.compliance,
        panCard: decrypt(loi.compliance.panCard)
      }
    };

    res.status(200).json({
      success: true,
      data: decryptedLOI
    });

  } catch (error) {
    console.error('Get LOI Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve LOI'
    });
  }
};

/**
 * Get all LOIs with filters
 * @route GET /api/loi/admin/list
 * @access Private (Admin only)
 */
exports.getAllLOIs = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      status,
      businessType,
      annualTurnover,
      sortBy = 'submittedAt',
      sortOrder = 'desc'
    } = req.query;

    const query = {};

    if (status) query.status = status;
    if (businessType) query['businessInfo.businessType'] = businessType;
    if (annualTurnover) query['businessMetrics.annualTurnover'] = annualTurnover;

    const skip = (page - 1) * limit;

    const lois = await LOI.find(query)
      .sort({ [sortBy]: sortOrder === 'desc' ? -1 : 1 })
      .skip(skip)
      .limit(parseInt(limit))
      .select('-contactInfo.phone -businessInfo.gstin -compliance.panCard'); // Exclude sensitive data from list view

    const total = await LOI.countDocuments(query);

    res.status(200).json({
      success: true,
      data: {
        lois,
        pagination: {
          currentPage: parseInt(page),
          totalPages: Math.ceil(total / limit),
          totalItems: total,
          itemsPerPage: parseInt(limit)
        }
      }
    });

  } catch (error) {
    console.error('Get All LOIs Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve LOIs'
    });
  }
};

/**
 * Update LOI status
 * @route PATCH /api/loi/:reference/status
 * @access Private (Admin only)
 */
exports.updateLOIStatus = async (req, res) => {
  try {
    const { reference } = req.params;
    const { status, adminNotes } = req.body;

    const validStatuses = ['pending', 'reviewing', 'approved', 'rejected', 'contacted'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value'
      });
    }

    const loi = await LOI.findOneAndUpdate(
      { loiReference: reference },
      {
        status,
        adminNotes,
        lastUpdated: new Date()
      },
      { new: true }
    );

    if (!loi) {
      return res.status(404).json({
        success: false,
        message: 'LOI not found'
      });
    }

    // Send status update email to applicant
    if (status === 'approved' || status === 'rejected') {
      // await sendStatusUpdateEmail(loi.contactInfo.email, status, loi.businessInfo.businessName);
    }

    res.status(200).json({
      success: true,
      message: 'LOI status updated successfully',
      data: loi
    });

  } catch (error) {
    console.error('Update LOI Status Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update LOI status'
    });
  }
};

/**
 * Get LOI statistics
 * @route GET /api/loi/admin/stats
 * @access Private (Admin only)
 */
exports.getLOIStats = async (req, res) => {
  try {
    const totalLOIs = await LOI.countDocuments();
    
    const statusBreakdown = await LOI.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    const businessTypeBreakdown = await LOI.aggregate([
      {
        $group: {
          _id: '$businessInfo.businessType',
          count: { $sum: 1 }
        }
      }
    ]);

    const turnoverBreakdown = await LOI.aggregate([
      {
        $group: {
          _id: '$businessMetrics.annualTurnover',
          count: { $sum: 1 }
        }
      }
    ]);

    const recentLOIs = await LOI.find()
      .sort({ submittedAt: -1 })
      .limit(5)
      .select('loiReference businessInfo.businessName contactInfo.email status submittedAt');

    res.status(200).json({
      success: true,
      data: {
        totalLOIs,
        statusBreakdown,
        businessTypeBreakdown,
        turnoverBreakdown,
        recentLOIs
      }
    });

  } catch (error) {
    console.error('Get LOI Stats Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve statistics'
    });
  }
};