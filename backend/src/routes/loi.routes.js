const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { submitLOI } = require('../controllers/loi.controller');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    // Create a unique filename to avoid overwrites
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `verification-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Define the route for submitting the LOI
router.route('/submit').post(upload.single('verificationFile'), submitLOI);

module.exports = router;