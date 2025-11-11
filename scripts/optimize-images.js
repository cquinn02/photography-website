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
const VIDEO_IMAGE_DIR = path.join(__dirname, '../public/images');
const BLOG_IMAGE_DIR = path.join(__dirname, '../public/images/blog');
const BLOG_OUTPUT_DIR = path.join(__dirname, '../public/images/blog/optimized');

// Images flagged by PageSpeed Insights and large homepage images
const CRITICAL_IMAGES = [
  // CRITICAL: Large homepage images that need optimization
  // Peter Osmundson - 5.3 MB → target ~200 KB (used in Four Image Row)
  {
    input: 'Peter Osmundson1991-1x1.jpg',
    output: 'Peter Osmundson1991-1x1-optimized.webp',
    maxWidth: 768,
    quality: 85
  },
  // Lisa S review image - 6.6 MB → target ~200 KB
  {
    input: 'CMQHEADSHOTS-LisaS0258.webp',
    output: 'CMQHEADSHOTS-LisaS0258-optimized.webp',
    maxWidth: 500,
    quality: 82
  },
  // Brent Agees business headshot - 3.5 MB PNG → target ~250 KB WebP
  {
    input: 'Brent Agees11314.png',
    output: 'Brent Agees11314-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  // Chad review image - 671 KB → target ~150 KB
  {
    input: 'CMQHEADSHOTS1196-sq.webp',
    output: 'CMQHEADSHOTS1196-sq-optimized.webp',
    maxWidth: 500,
    quality: 85
  },
  // Shawn Wilson review - 568 KB → target ~150 KB
  {
    input: 'CMQHEADSHOTS-Shawn Wilson10136-small-1x1.webp',
    output: 'CMQHEADSHOTS-Shawn Wilson10136-small-1x1-optimized.webp',
    maxWidth: 500,
    quality: 85
  },
  // Four Image Row images
  {
    input: 'CMQHeadshots_D40396-1x1-jgmini-leg-sqo.webp',
    output: 'CMQHeadshots_D40396-1x1-jgmini-leg-sqo-optimized.webp',
    maxWidth: 768,
    quality: 85
  },
  {
    input: 'CMQ-Headshots-phoenix-staff-DAY-41625-1x1-jpmini-leg-squ.webp',
    output: 'CMQ-Headshots-phoenix-staff-DAY-41625-1x1-jpmini-leg-squ-optimized.webp',
    maxWidth: 768,
    quality: 85
  },
  {
    input: 'cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo.webp',
    output: 'cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo-optimized.webp',
    maxWidth: 768,
    quality: 85
  },
  // Executive headshot - 146.7 KiB → target 44.6 KiB
  {
    input: 'CMQHeadshots-5963a-web (1).jpg',
    output: 'CMQHeadshots-5963a-web-optimized.webp',
    maxWidth: 750,
    quality: 80
  },
  // Professional business headshot
  {
    input: 'cmqheadshots-Peter Osmundson1991.jpg',
    output: 'Peter-Osmundson-optimized.webp',
    maxWidth: 750,
    quality: 80
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
  },
  // Video screenshot - in different directory
  {
    input: 'VideoScreenshot-small.jpg',
    output: 'VideoScreenshot-small-optimized.webp',
    maxWidth: 640,
    quality: 80,
    isVideoImage: true // Flag to use different directory
  },

  // ACTOR PHOTOS (pricing-actor.tsx) - Large files!
  // Nina - Actor headshots
  {
    input: 'NinaE8039b 2.jpg',
    output: 'NinaE8039b-2-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  {
    input: 'NinaE8136b.jpg',
    output: 'NinaE8136b-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  {
    input: 'NinaE8168b 2.jpg',
    output: 'NinaE8168b-2-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  {
    input: 'NinaE8250-white.jpg',
    output: 'NinaE8250-white-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  // Ethan - Actor headshots
  {
    input: 'CMQHeadshots-EthanD-Actor Phoenix1.jpg',
    output: 'CMQHeadshots-EthanD-Actor-Phoenix1-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  {
    input: 'CMQHeadshots-EthanD-Actor Phoenix2.jpg',
    output: 'CMQHeadshots-EthanD-Actor-Phoenix2-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  {
    input: 'CMQHeadshots-EthanD-Actor Phoenix3.jpg',
    output: 'CMQHeadshots-EthanD-Actor-Phoenix3-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  {
    input: 'CMQHeadshots-EthanD-Actor Phoenix4.jpg',
    output: 'CMQHeadshots-EthanD-Actor-Phoenix4-optimized.webp',
    maxWidth: 800,
    quality: 85
  },

  // ABOUT PAGE - Large files!
  {
    input: 'family/ABout cindy12437.jpg',
    output: 'family/ABout-cindy12437-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  {
    input: 'eric/ABout cindy12824b.jpg',
    output: 'eric/ABout-cindy12824b-optimized.webp',
    maxWidth: 800,
    quality: 85
  },
  {
    input: 'trailer/ABout cindy12421b.jpg',
    output: 'trailer/ABout-cindy12421b-optimized.webp',
    maxWidth: 800,
    quality: 85
  },

  // CONTACT PAGE
  {
    input: 'CMQHeadshots-6008a-web.jpg',
    output: 'CMQHeadshots-6008a-web-optimized.webp',
    maxWidth: 500,
    quality: 85
  },
  {
    input: 'CMQHeadshots-6067a-web.jpg',
    output: 'CMQHeadshots-6067a-web-optimized.webp',
    maxWidth: 500,
    quality: 85
  },

  // PRICING PAGE
  {
    input: 'CMQHEADSHOTS-2806-1x1.jpg',
    output: 'CMQHEADSHOTS-2806-1x1-optimized.webp',
    maxWidth: 500,
    quality: 85
  },

  // CORPORATE STAFF PAGE - PNG
  {
    input: 'CMQHeadshots-Quantcast1744-trans.png',
    output: 'CMQHeadshots-Quantcast1744-trans-optimized.webp',
    maxWidth: 800,
    quality: 85
  },

  // ICONS - Small PNGs
  {
    input: 'Icon of documentation and video and a women.png',
    output: 'Icon-documentation-video-women-optimized.webp',
    maxWidth: 200,
    quality: 85
  },

  // BLOG IMAGES
  {
    input: 'clothing-for-headshots-prep.jpg',
    output: 'clothing-for-headshots-prep-optimized.webp',
    maxWidth: 800,
    quality: 85,
    isBlogImage: true
  },
  {
    input: 'horizontal-headshots-main.jpg',
    output: 'horizontal-headshots-main-optimized.webp',
    maxWidth: 800,
    quality: 85,
    isBlogImage: true
  },
  {
    input: 'makeup-headshot-main.jpg',
    output: 'makeup-headshot-main-optimized.webp',
    maxWidth: 800,
    quality: 85,
    isBlogImage: true
  },
  {
    input: 'photoshop-main.jpg',
    output: 'photoshop-main-optimized.webp',
    maxWidth: 800,
    quality: 85,
    isBlogImage: true
  },
  {
    input: 'Prepare590398367-1600.jpg',
    output: 'Prepare590398367-1600-optimized.webp',
    maxWidth: 1600,
    quality: 85,
    isBlogImage: true
  },
  {
    input: 'why-hire-professional-main.jpg',
    output: 'why-hire-professional-main-optimized.webp',
    maxWidth: 800,
    quality: 85,
    isBlogImage: true
  }
];

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(config) {
  // Determine directories based on image type
  let baseInputDir, baseOutputDir;

  if (config.isBlogImage) {
    baseInputDir = BLOG_IMAGE_DIR;
    baseOutputDir = BLOG_OUTPUT_DIR;
  } else if (config.isVideoImage) {
    baseInputDir = VIDEO_IMAGE_DIR;
    baseOutputDir = VIDEO_IMAGE_DIR;
  } else {
    baseInputDir = IMAGE_DIR;
    baseOutputDir = OUTPUT_DIR;
  }

  const inputPath = path.join(baseInputDir, config.input);
  const outputPath = path.join(baseOutputDir, config.output);

  // Create output subdirectory if needed (for family/eric/trailer/blog folders)
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

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
