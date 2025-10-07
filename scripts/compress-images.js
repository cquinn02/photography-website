#!/usr/bin/env node
/**
 * Image Compression Script
 * Compresses large hero images for faster loading
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesToCompress = [
  {
    input: 'public/images/website media/BTS-corporate-mobile.webp',
    output: 'public/images/website media/BTS-corporate-mobile.webp',
    width: 1080, // Mobile screens max width
    quality: 85
  }
];

async function compressImage(config) {
  const inputPath = path.join(process.cwd(), config.input);
  const outputPath = path.join(process.cwd(), config.output);

  // Backup original
  const backupPath = outputPath.replace(/(\.\w+)$/, '.backup$1');
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(outputPath, backupPath);
    console.log(`✅ Backed up: ${path.basename(backupPath)}`);
  }

  // Get original size
  const originalStats = fs.statSync(inputPath);
  const originalSize = (originalStats.size / 1024).toFixed(2);

  // Compress
  await sharp(inputPath)
    .resize(config.width, null, {
      withoutEnlargement: true,
      fit: 'inside'
    })
    .webp({ quality: config.quality })
    .toFile(outputPath + '.tmp');

  // Replace original
  fs.renameSync(outputPath + '.tmp', outputPath);

  // Get new size
  const newStats = fs.statSync(outputPath);
  const newSize = (newStats.size / 1024).toFixed(2);
  const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

  console.log(`✅ Compressed: ${path.basename(config.input)}`);
  console.log(`   ${originalSize}KB → ${newSize}KB (${savings}% reduction)`);
}

async function main() {
  console.log('🖼️  Compressing images...\n');

  for (const config of imagesToCompress) {
    try {
      await compressImage(config);
    } catch (error) {
      console.error(`❌ Error compressing ${config.input}:`, error.message);
    }
  }

  console.log('\n✨ Done!');
}

main();
