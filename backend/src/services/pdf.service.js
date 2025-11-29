const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

/**
 * Generates a styled PDF buffer for the Letter of Interest.
 * @param {object} loiData - The LOI data from the database.
 * @returns {Promise<Buffer>} A promise that resolves with the PDF buffer.
 */
const generateLOIPDF = (loiData) => {
  return new Promise((resolve, reject) => {
    // 1. Setup Document: Landscape A4
    const doc = new PDFDocument({
      layout: 'landscape',
      size: 'A4',
      margin: 0
    });

    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfBuffer = Buffer.concat(buffers);
      resolve(pdfBuffer);
    });
    doc.on('error', (err) => {
      reject(err);
    });

    // --- DESIGN CONSTANTS ---
    const colors = {
      background: '#FDF8E4', // Cream/Ivory
      gold: '#C5A059',
      goldLight: '#EAC985',
      darkBlue: '#102A43',
      grey: '#555555',
      black: '#000000'
    };

    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;
    const centerX = pageWidth / 2;

    // --- 1. BACKGROUND ---
    doc.rect(0, 0, pageWidth, pageHeight).fill(colors.background);

    // --- 2. WATERMARK (Center Shield) ---
    // We assume you have the shield logo as 'demo.jpg'
    const logoPath = path.join(__dirname, 'demo.jpg'); 
    if (fs.existsSync(logoPath)) {
        const logoWidth = 400;
        doc.save();
        doc.opacity(0.06); // Very faint
        doc.image(logoPath, (pageWidth - logoWidth) / 2, (pageHeight - logoWidth) / 2, { 
            width: logoWidth, align: 'center' 
        });
        doc.restore();
    }

    // --- 3. BORDERS ---
    // Thick Gold Outer
    doc.rect(20, 20, pageWidth - 40, pageHeight - 40).lineWidth(3).stroke(colors.gold);
    // Thin Blue Inner
    doc.rect(25, 25, pageWidth - 50, pageHeight - 50).lineWidth(1).stroke(colors.darkBlue);

    // --- 4. TOP HEADER (Star + Text) ---
    const headerLogoPath = path.join(__dirname, '..', '..', '..', 'frontend', 'src', 'assets', 'images', 'star.png');
    if (fs.existsSync(headerLogoPath)) {
        // Position logo in the top-left area
        doc.image(headerLogoPath, 50, 45, { width: 50 });
    }

    // Position text to the right of the logo
    doc.font('Times-Roman').fontSize(24).fillColor(colors.black)
       .text('EARLY PARTNER CERTIFICATE', 110, 50, { align: 'left' });
    doc.fontSize(10).font('Helvetica-Oblique').fillColor(colors.grey)
       .text('(Official Partner Documentation)', 112, 78, { align: 'left' });

    // Separator Line
    doc.moveTo(40, 110).lineTo(pageWidth - 40, 110).lineWidth(0.5).stroke(colors.grey);

    // --- 5. MAIN CERTIFICATE CONTENT ---

    doc.moveDown(3); // Adjust space after new header

    // Main Title
    doc.font('Helvetica-Bold').fontSize(22).fillColor(colors.darkBlue)
       .text('GEMBANK EARLY PARTNER CERTIFICATE', 0, doc.y, { align: 'center', letterSpacing: 1 });

    doc.moveDown(1);
    doc.font('Helvetica').fontSize(12).fillColor(colors.black)
       .text('This is to certify that:', { align: 'center' });

    doc.moveDown(1);

    // Recipient Name (Hero)
    doc.font('Times-Bold').fontSize(30).fillColor(colors.black)
       .text(`${loiData.storeName} – ${loiData.ownerName}`, { align: 'center' });

    // Address
    doc.moveDown(0.5);
    doc.font('Times-Roman').fontSize(14).fillColor(colors.black)
       .text(`Located at ${loiData.storeAddress}`, { align: 'center' });

    // Body Block
    doc.moveDown(1.5); // Reduced space
    
    // --- Rich Text Body with Bolded Parts ---
    // We have to handle the centering and font switching manually for mixed styles.
    const regularFont = 'Helvetica';
    const bodyFontSize = 13;
    const bodyWidth = pageWidth - 300; // Define the width of the paragraph block
    const bodyX = (pageWidth - bodyWidth) / 2; // Calculate the starting X for perfect centering
    const bodyOptions = { lineGap: 5, width: bodyWidth }; // Remove align: 'center' to let text flow

    // Position the text block using the calculated X coordinate
    doc.font(regularFont).fontSize(bodyFontSize);
    doc.text('has officially expressed interest in joining the ', bodyX, doc.y, { continued: true, ...bodyOptions });
    doc.font('Helvetica-Bold').text('GEMBank Pilot Program', { continued: true });
    doc.font(regularFont).text(' and is recognized as an ', { continued: true });
    doc.font('Helvetica-Bold').text('Early Partner', { continued: true });
    doc.font(regularFont).text(' in GEMBank’s 2025 rollout.', { continued: true });
    
    // --- 6. FOOTER & SEAL ---

    const bottomY = pageHeight - 100;

    // Certificate Details (Left)
    doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.black);
    const dateIssued = new Date(loiData.createdAt).toLocaleDateString('en-IN', {
      day: '2-digit', month: 'long', year: 'numeric'
    });


    doc.text(`Certificate ID: ${loiData.certificateId}`, 50 - 260, bottomY, { align: 'left' });
    doc.text(`Date Issued: ${dateIssued}`, 50, bottomY + 15, { align: 'left' });

    doc.fontSize(10).fillColor(colors.darkBlue)
       .text('GEMBank – India’s Financial OS for the Jewellery Industry', 50, bottomY + 50, { align: 'left' });

    // --- 7. GENERATE GOLD SEAL (Bottom Right) ---
    // Draw the seal dynamically so you don't need an image file
    const sealX = pageWidth - 100;
    const sealY = pageHeight - 100;

    doc.save();
    doc.translate(sealX, sealY);
    
    // Draw Spiky Edge
    drawStar(doc, 0, 0, 30, 50, 45, colors.gold); // 30 points for jagged edge
    
    // Draw Inner Circle
    doc.circle(0, 0, 38).fill(colors.goldLight);
    doc.circle(0, 0, 38).lineWidth(2).stroke(colors.gold);
    doc.circle(0, 0, 32).lineWidth(1).stroke(colors.gold);

    // Shield Icon inside Seal (Simple Vector Shield)
    doc.path('M -15 -10 L 15 -10 L 15 5 C 15 15 0 25 0 25 C 0 25 -15 15 -15 5 Z')
       .lineWidth(2).stroke(colors.gold);
    doc.font('Helvetica-Bold').fontSize(24).fillColor(colors.gold)
       .text('GB', -18, -8, { width: 36, align: 'center' }); // GB Monogram
    
    doc.restore();

    doc.end();
  });
};

// --- HELPER FUNCTION: Draw Star/Seal ---
function drawStar(doc, cx, cy, spikes, outerRadius, innerRadius, color) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    doc.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        doc.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        doc.lineTo(x, y);
        rot += step;
    }
    doc.lineTo(cx, cy - outerRadius);
    doc.closePath();
    doc.fill(color);
}

/**
 * Saves a PDF buffer to the uploads directory.
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
      if (err) return reject(err);
      resolve(pdfUrl);
    });
  });
};

module.exports = { generateLOIPDF, savePDF };