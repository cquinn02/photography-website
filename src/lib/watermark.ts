import sharp from 'sharp'

/**
 * Creates a text watermark SVG
 */
function createTextWatermarkSvg(
  text: string,
  width: number,
  height: number,
  opacity: number
): Buffer {
  // Font size scales with image width
  const fontSize = Math.round(width * 0.06)
  const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0')

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .watermark {
          font-family: 'Arial', 'Helvetica', sans-serif;
          font-size: ${fontSize}px;
          font-weight: bold;
          fill: #ffffff${alpha};
          letter-spacing: 0.1em;
        }
      </style>
      <text x="${width / 2}" y="${height / 2}" text-anchor="middle" dominant-baseline="middle" class="watermark">${text}</text>
    </svg>
  `
  return Buffer.from(svg)
}

/**
 * Adds text watermarks in a diagonal staggered pattern down the center
 * @param imageBuffer - The original image buffer
 * @param opacity - Opacity of the watermark (0-1, default: 0.5)
 * @returns Watermarked image buffer
 */
export async function addWatermark(
  imageBuffer: Buffer,
  opacity: number = 0.5
): Promise<Buffer> {
  try {
    const image = sharp(imageBuffer)
    const metadata = await image.metadata()
    const width = metadata.width || 800
    const height = metadata.height || 600

    const watermarkText = 'CMQ HEADSHOTS'

    // Create individual watermark dimensions
    const wmWidth = Math.round(width * 0.7)
    const wmHeight = Math.round(height * 0.08)

    // Create the text watermark SVG
    const watermarkSvg = createTextWatermarkSvg(watermarkText, wmWidth, wmHeight, opacity)

    // Convert SVG to PNG buffer
    const watermarkPng = await sharp(watermarkSvg)
      .png()
      .toBuffer()

    // Calculate positions for 6 watermarks in diagonal staggered pattern
    const numWatermarks = 6
    const verticalSpacing = height / (numWatermarks + 1)
    const horizontalOffset = Math.round(width * 0.08) // Stagger amount

    const composites = []
    for (let i = 0; i < numWatermarks; i++) {
      const top = Math.round(verticalSpacing * (i + 1) - wmHeight / 2)
      // Alternate left/right offset for diagonal effect
      const leftOffset = i % 2 === 0 ? -horizontalOffset : horizontalOffset
      const left = Math.round((width - wmWidth) / 2 + leftOffset)

      composites.push({
        input: watermarkPng,
        top: Math.max(0, top),
        left: Math.max(0, left),
        blend: 'over' as const,
      })
    }

    const watermarkedBuffer = await image
      .composite(composites)
      .toBuffer()

    return watermarkedBuffer
  } catch (error) {
    console.error('[WATERMARK] Error:', error)
    return imageBuffer
  }
}
