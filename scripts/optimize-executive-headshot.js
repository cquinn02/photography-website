const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'public/images/website media/optimized/CMQHeadshots_D40396-1x1-jgmini-leg-sqo-optimized.webp');
const outputPath = path.join(__dirname, '..', 'public/images/website media/optimized/CMQHeadshots_D40396-1x1-jgmini-leg-sqo-optimized-v2.webp');

console.log('Re-optimizing executive headshot with higher compression...');

sharp(inputPath)
  .resize(768, 768, {
    fit: 'cover',
    position: 'center'
  })
  .webp({ quality: 75, effort: 6 })  // More aggressive compression than original
  .toFile(outputPath)
  .then(info => {
    console.log('\n✅ Success!');
    console.log('Output:', outputPath);
    console.log('Size:', (info.size / 1024).toFixed(1), 'KB');
    console.log('Dimensions:', info.width, 'x', info.height);
    console.log('\nOriginal was 89K, new file should be ~30-40K');
  })
  .catch(err => {
    console.error('❌ Error:', err);
  });
