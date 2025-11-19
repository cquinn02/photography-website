const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'public/images/website media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp');

// Create mobile-optimized versions
const sizes = [
  { width: 640, name: 'mobile-640' },
  { width: 828, name: 'mobile-828' },
];

console.log('Creating mobile-optimized hero images...\n');

Promise.all(
  sizes.map(({ width, name }) => {
    const outputPath = path.join(__dirname, '..', `public/images/website media/cmq-pro-phoenix-headshots-hero2-${name}.webp`);

    return sharp(inputPath)
      .resize(width, null, { // Auto-calculate height to maintain aspect ratio
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath)
      .then(info => {
        console.log(`✅ Created ${name}:`);
        console.log(`   Size: ${(info.size / 1024).toFixed(1)} KB`);
        console.log(`   Dimensions: ${info.width}x${info.height}`);
        console.log();
      });
  })
).then(() => {
  console.log('✅ All mobile hero images created successfully!');
}).catch(err => {
  console.error('❌ Error:', err);
});
