const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertPSDToWebP() {
  const input = path.join(process.cwd(), 'public/images/website media/ims ind/for website /ims sales-7.webp');
  const output = path.join(process.cwd(), 'public/images/website media/ims ind/for website /ims sales-7-converted.webp');
  
  console.log('📄 Converting PSD to WebP...');
  
  try {
    // Read as PNG first (sharp can handle PSD)
    await sharp(input)
      .resize(2400, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 85 })
      .toFile(output);
    
    const stats = fs.statSync(output);
    const size = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`✅ Converted: ims sales-7-converted.webp (${size}MB)`);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

convertPSDToWebP();
