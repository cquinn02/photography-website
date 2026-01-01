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
        console.log('[WATERMARK] Loading watermark from:', watermarkPath)
        watermarkBuffer = fs.readFileSync(watermarkPath)
        console.log('[WATERMARK] Watermark loaded, size:', watermarkBuffer.length, 'bytes')
        return watermarkBuffer
      }
    } catch (err) {
      console.log('[WATERMARK] Could not load from:', watermarkPath)
    }
  }

  throw new Error('Watermark file not found')
}

/**
 * Adds a PNG watermark overlay to an image
 * @param imageBuffer - The original image buffer
 * @param opacity - Opacity of the watermark (0-1, default: 0.5)
 * @returns Watermarked image buffer
 */
export async function addWatermark(
  imageBuffer: Buffer,
  opacity: number = 0.7
): Promise<Buffer> {
  const startTime = Date.now()
  console.log('[WATERMARK] Starting, input size:', imageBuffer.length, 'bytes')

  try {
    // Get image dimensions
    const image = sharp(imageBuffer)
    const metadata = await image.metadata()
    const width = metadata.width || 800
    const height = metadata.height || 600
    console.log('[WATERMARK] Image dimensions:', width, 'x', height, 'format:', metadata.format)

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

    console.log('[WATERMARK] Watermark resized to:', wmWidth, 'x', wmHeight, 'position:', left, top)

    // Composite the watermark over the original image
    console.log('[WATERMARK] Starting composite...')
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

    const totalTime = Date.now() - startTime
    console.log('[WATERMARK] Complete, output size:', watermarkedBuffer.length, 'bytes, time:', totalTime, 'ms')

    return watermarkedBuffer
  } catch (error) {
    const totalTime = Date.now() - startTime
    console.error('[WATERMARK] ERROR after', totalTime, 'ms:', error)
    // Return original image if watermarking fails
    return imageBuffer
  }
}
