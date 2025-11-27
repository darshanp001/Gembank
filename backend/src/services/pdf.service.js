const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

/**
 * Generates a PDF buffer for the Letter of Interest.
 * @param {object} loiData - The LOI data from the database.
 * @returns {Promise<Buffer>} A promise that resolves with the PDF buffer.
 */
const generateLOIPDF = (loiData) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50 });
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });
    doc.on('error', (err) => {
      reject(err);
    });

    // --- PDF Content ---

    // Generate a unique Certificate ID
    const certificateId = `GEM-EP-${Date.now().toString().slice(-6)}`;

    // Format the date from the timestamp
    const dateIssued = new Date(loiData.createdAt).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });

    // Certificate Title
    doc
      .font('Helvetica-Bold')
      .fontSize(18)
      .text('GEMBANK EARLY PARTNER CERTIFICATE', { align: 'center' });
    doc.moveDown(2);

    // Body Text
    doc.font('Helvetica').fontSize(12).text('This is to certify that:', { align: 'center' });
    doc.moveDown(1.5);

    // Recipient Details
    doc
      .font('Helvetica-Bold')
      .fontSize(16)
      .text(`${loiData.storeName} – ${loiData.ownerName}`, { align: 'center' });
    doc.moveDown(0.5);
    doc.font('Helvetica').fontSize(12).text(`Located at ${loiData.storeAddress},`, { align: 'center' });
    doc.moveDown(2);

    // Statement
    doc.fontSize(12).text('has officially expressed interest in joining the GEMBank Pilot Program and is recognized as an Early Partner in GEMBank’s 2025 rollout.', { align: 'center', indent: 30, lineGap: 4 });
    doc.moveDown(3);

    // Footer
    doc.text(`Certificate ID: ${certificateId}`, { align: 'left' });
    doc.text(`Date Issued: ${dateIssued}`, { align: 'right' });
    doc.moveDown(2);

    doc.font('Helvetica-Bold').fontSize(10).text('GEMBank – India’s Financial OS for the Jewellery Industry', { align: 'center' });

    // --- End of PDF Content ---

    doc.end();
  });
};

/**
 * Saves a PDF buffer to the uploads directory.
 * @param {Buffer} pdfBuffer - The PDF buffer to save.
 * @param {string} loiReference - The LOI reference number for the filename.
 * @returns {Promise<string>} A promise that resolves with the public URL of the saved PDF.
 */
const savePDF = (pdfBuffer, loiReference) => {
  return new Promise((resolve, reject) => {
    const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const pdfFileName = `${loiReference}.pdf`;
    const pdfPath = path.join(uploadsDir, pdfFileName);
    const pdfUrl = `/uploads/${pdfFileName}`;

    fs.writeFile(pdfPath, pdfBuffer, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(pdfUrl);
    });
  });
};

module.exports = { generateLOIPDF, savePDF };