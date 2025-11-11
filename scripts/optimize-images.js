#!/usr/bin/env node

/**
 * Image Optimization Script
 * Compresses and converts images identified by PageSpeed Insights
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(__dirname, '../public/images/website media');
const OUTPUT_DIR = path.join(__dirname, '../public/images/website media/optimized');

// Images flagged by PageSpeed Insights
const CRITICAL_IMAGES = [
  // Executive headshot - 146.7 KiB → target 44.6 KiB
  {
    input: 'CMQHeadshots-5963a-web (1).jpg',
    output: 'CMQHeadshots-5963a-web-optimized.webp',
    maxWidth: 750, // Served at 750x750, displayed at 412x412
    quality: 80
  },
  // Professional business headshot - 21.5 KiB → save 15.0 KiB
  {
    input: 'cmqheadshots-Peter Osmundson1991.jpg',
    output: 'Peter-Osmundson-optimized.webp',
    maxWidth: 750,
    quality: 80
  },
  // Video screenshot - 43.1 KiB → save 29.8 KiB
  {
    input: 'VideoScreenshot.jpg',
    output: 'VideoScreenshot-optimized.webp',
    maxWidth: 640,
    quality: 75
  },
  // Background images
  {
    input: 'grey linen-background.jpg',
    output: 'grey-linen-background-optimized.webp',
    maxWidth: 1920,
    quality: 75
  },
  {
    input: 'vecteezy-background-optimized.jpg',
    output: 'vecteezy-background-web.webp',
    maxWidth: 1920,
    quality: 75
  }
];

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(config) {
  const inputPath = path.join(IMAGE_DIR, config.input);
  const outputPath = path.join(OUTPUT_DIR, config.output);

  try {
    // Check if input exists
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${config.input} - file not found`);
      return;
    }

    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSize = (originalStats.size / 1024).toFixed(2);

    console.log(`\n📸 Processing: ${config.input}`);
    console.log(`   Original size: ${originalSize} KiB`);

    // Optimize and convert to WebP
    await sharp(inputPath)
      .resize(config.maxWidth, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({
        quality: config.quality,
        effort: 6 // Higher effort = better compression (0-6)
      })
      .toFile(outputPath);

    // Get optimized file size
    const optimizedStats = fs.statSync(outputPath);
    const optimizedSize = (optimizedStats.size / 1024).toFixed(2);
    const savings = (originalSize - optimizedSize).toFixed(2);
    const savingsPercent = ((savings / originalSize) * 100).toFixed(1);

    console.log(`   Optimized size: ${optimizedSize} KiB`);
    console.log(`   ✅ Saved: ${savings} KiB (${savingsPercent}%)`);

  } catch (error) {
    console.error(`❌ Error processing ${config.input}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  console.log(`Input directory: ${IMAGE_DIR}`);
  console.log(`Output directory: ${OUTPUT_DIR}\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const config of CRITICAL_IMAGES) {
    await optimizeImage(config);
  }

  console.log('\n✨ Image optimization complete!');
  console.log(`\nOptimized images saved to: ${OUTPUT_DIR}`);
  console.log('\n📝 Next steps:');
  console.log('1. Review optimized images in the /optimized folder');
  console.log('2. Replace original images with optimized versions');
  console.log('3. Update image paths in your components to use .webp files');
  console.log('4. Test image quality on the website');
  console.log('5. Run PageSpeed Insights again to verify improvements\n');
}

// Run the optimization
optimizeAllImages().catch(console.error);
