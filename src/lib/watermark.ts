import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

// Cache the watermark buffer to avoid reading from disk repeatedly
let watermarkBuffer: Buffer | null = null

/**
 * Loads the watermark PNG file
 */
async function getWatermarkBuffer(): Promise<Buffer> {
  if (watermarkBuffer) {
    return watermarkBuffer
  }

  // Try multiple possible paths for the watermark file
  const possiblePaths = [
    path.join(process.cwd(), 'public/images/logos/new logos sep 2025/watermark 2026.png'),
    path.join(process.cwd(), 'public', 'images', 'logos', 'new logos sep 2025', 'watermark 2026.png'),
    '/var/task/public/images/logos/new logos sep 2025/watermark 2026.png', // Lambda path
  ]

  for (const watermarkPath of possiblePaths) {
    try {
      if (fs.existsSync(watermarkPath)) {
        watermarkBuffer = fs.readFileSync(watermarkPath)
        return watermarkBuffer
      }
    } catch {
      // Try next path
    }
  }

  throw new Error('Watermark file not found')
}

/**
 * Adds a PNG watermark overlay to an image
 * @param imageBuffer - The original image buffer
 * @param opacity - Opacity of the watermark (0-1, default: 1.0)
 * @returns Watermarked image buffer
 */
export async function addWatermark(
  imageBuffer: Buffer,
  opacity: number = 1.0
): Promise<Buffer> {
  try {
    // Get image dimensions
    const image = sharp(imageBuffer)
    const metadata = await image.metadata()
    const width = metadata.width || 800
    const height = metadata.height || 600

    // Load the watermark PNG
    const watermark = await getWatermarkBuffer()

    // Resize watermark to fit the image (about 80% of image width)
    const watermarkWidth = Math.round(width * 0.8)

    // Resize and apply opacity by modulating the alpha channel
    const resizedWatermark = await sharp(watermark)
      .resize(watermarkWidth, null, { fit: 'inside' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(async ({ data, info }) => {
        // Multiply alpha channel by opacity
        for (let i = 3; i < data.length; i += 4) {
          data[i] = Math.round(data[i] * opacity)
        }
        return sharp(data, {
          raw: { width: info.width, height: info.height, channels: 4 }
        }).png().toBuffer()
      })

    // Get resized watermark dimensions for centering
    const watermarkMeta = await sharp(resizedWatermark).metadata()
    const wmWidth = watermarkMeta.width || watermarkWidth
    const wmHeight = watermarkMeta.height || watermarkWidth

    // Calculate position to center the watermark
    const left = Math.round((width - wmWidth) / 2)
    const top = Math.round((height - wmHeight) / 2)

    // Composite the watermark over the original image
    const watermarkedBuffer = await image
      .composite([
        {
          input: resizedWatermark,
          top: top,
          left: left,
          blend: 'over',
        },
      ])
      .toBuffer()

    return watermarkedBuffer
  } catch (error) {
    console.error('[WATERMARK] Error:', error)
    // Return original image if watermarking fails
    return imageBuffer
  }
}
