const mongoose = require('mongoose');

const loiSchema = new mongoose.Schema({
  // --- From Step 1: Business Info ---
  ownerName: { type: String, required: true },
  storeName: { type: String, required: true },
  businessType: { type: String, required: true },
  gstin: { type: String, required: true, unique: true },
  pan: { type: String },
  storeAddress: { type: String, required: true },
  cityMarketArea: { type: String, required: true },
  state: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  alternatePhone: { type: String },

  // --- From Step 2: Pain-Point Validation ---
  inventoryManagement: { type: String, required: true },
  complianceIssues: { type: String, required: true },
  loanDifficulty: { type: String, required: true },
  wantsInstantLoans: { type: String, required: true },
  digitalPaymentsFrequency: { type: String, required: true },
  joinPilot: { type: String, required: true },

  // --- From Step 3: Finalize & Submit ---
  signatureFullName: { type: String, required: true },
  signatureConfirmation: { type: Boolean, required: true },
  
  // Fields for Base64 file upload
  verificationFile: { type: String }, // To store the Base64 string
  verificationFileName: { type: String },
  verificationFileType: { type: String },
  companyLogo: { type: String, default: null }, // For the company logo

  // --- Server-generated fields ---
  loiReference: { type: String, required: true, unique: true },
  certificateId: { type: String, required: true, unique: true },
  status: { type: String, default: 'pending' }, // e.g., pending, reviewing, approved
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const LOI = mongoose.model('LOI', loiSchema);

module.exports = LOI;