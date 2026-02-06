import sharp from 'sharp'
import path from 'path'
import fs from 'fs'

// Cache the watermark buffer
let watermarkBuffer: Buffer | null = null

/**
 * Loads the tiled watermark PNG file
 */
async function getWatermarkBuffer(): Promise<Buffer> {
  if (watermarkBuffer) {
    return watermarkBuffer
  }

  const possiblePaths = [
    path.join(process.cwd(), 'public/images/logos/watermark-tiled-2025.png'),
    path.join(process.cwd(), 'public', 'images', 'logos', 'watermark-tiled-2025.png'),
    '/var/task/public/images/logos/watermark-tiled-2025.png', // Lambda path
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
 * Adds the tiled watermark overlay to an image
 * @param imageBuffer - The original image buffer
 * @param opacity - Opacity of the watermark (0-1, default: 0.6)
 * @returns Watermarked image buffer
 */
export async function addWatermark(
  imageBuffer: Buffer,
  opacity: number = 0.4
): Promise<Buffer> {
  try {
    const image = sharp(imageBuffer)
    const metadata = await image.metadata()
    const width = metadata.width || 800
    const height = metadata.height || 600

    // Load the tiled watermark PNG
    const watermark = await getWatermarkBuffer()

    // Resize watermark to cover the entire image
    const resizedWatermark = await sharp(watermark)
      .resize(width, height, { fit: 'cover' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })
      .then(async ({ data, info }) => {
        // Apply opacity to alpha channel
        for (let i = 3; i < data.length; i += 4) {
          data[i] = Math.round(data[i] * opacity)
        }
        return sharp(data, {
          raw: { width: info.width, height: info.height, channels: 4 }
        }).png().toBuffer()
      })

    // Composite the watermark over the image
    const watermarkedBuffer = await image
      .composite([
        {
          input: resizedWatermark,
          top: 0,
          left: 0,
          blend: 'over',
        },
      ])
      .toBuffer()

    return watermarkedBuffer
  } catch (error) {
    console.error('[WATERMARK] Error:', error)
    return imageBuffer
  }
}
