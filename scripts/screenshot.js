#!/usr/bin/env node

/**
 * Screenshot Helper Script
 * Takes screenshots of web pages using Puppeteer for visual verification
 *
 * Usage:
 *   node scripts/screenshot.js <url> <filename> [--mobile]
 *   pnpm screenshot <url> <filename> [--mobile]
 *
 * Examples:
 *   pnpm screenshot http://localhost:3100 homepage.png
 *   pnpm screenshot http://localhost:3100/about about-page.png
 *   pnpm screenshot http://localhost:3100/pricing pricing-mobile.png --mobile
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Parse command line arguments
const args = process.argv.slice(2);
const url = args[0];
const filename = args[1];
const isMobile = args.includes('--mobile');

// Configuration
const SCREENSHOTS_DIR = path.join(__dirname, '..', 'screenshots');
const DESKTOP_VIEWPORT = { width: 1920, height: 1080 };
const MOBILE_VIEWPORT = { width: 375, height: 667 }; // iPhone SE size

// Validate arguments
if (!url || !filename) {
  console.error('❌ Error: Missing required arguments');
  console.log('\nUsage: pnpm screenshot <url> <filename> [--mobile]\n');
  console.log('Examples:');
  console.log('  pnpm screenshot http://localhost:3100 homepage.png');
  console.log('  pnpm screenshot http://localhost:3100/about about-page.png');
  console.log('  pnpm screenshot http://localhost:3100 homepage-mobile.png --mobile');
  process.exit(1);
}

// Ensure screenshots directory exists
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
  console.log(`📁 Created screenshots directory: ${SCREENSHOTS_DIR}`);
}

// Main screenshot function
async function takeScreenshot() {
  let browser;

  try {
    console.log(`🚀 Starting Puppeteer...`);

    // Launch browser
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Set viewport based on device type
    const viewport = isMobile ? MOBILE_VIEWPORT : DESKTOP_VIEWPORT;
    await page.setViewport(viewport);

    console.log(`📱 Viewport: ${viewport.width}x${viewport.height} ${isMobile ? '(Mobile)' : '(Desktop)'}`);
    console.log(`🌐 Loading: ${url}`);

    // Navigate to page with timeout
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait a bit for any animations to complete
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Take screenshot
    const screenshotPath = path.join(SCREENSHOTS_DIR, filename);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true
    });

    console.log(`✅ Screenshot saved: ${screenshotPath}`);

    // Get page title for reference
    const title = await page.title();
    console.log(`📄 Page title: "${title}"`);

  } catch (error) {
    console.error('❌ Error taking screenshot:', error.message);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      console.log('🔒 Browser closed');
    }
  }
}

// Run the screenshot function
takeScreenshot();
