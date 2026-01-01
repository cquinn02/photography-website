import sharp from 'sharp'

/**
 * Adds a single centered text watermark across an image
 * @param imageBuffer - The original image buffer
 * @param text - The watermark text (default: "CMQ HEADSHOTS PROOF")
 * @param opacity - Opacity of the watermark (0-1, default: 0.5)
 * @returns Watermarked image buffer
 */
export async function addWatermark(
  imageBuffer: Buffer,
  text: string = 'CMQ HEADSHOTS PROOF',
  opacity: number = 0.5
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

    // Calculate font size - about 8% of image width
    const fontSize = Math.round(Math.max(width * 0.08, 40))
    const centerX = Math.round(width / 2)
    const centerY = Math.round(height / 2)

    console.log('[WATERMARK] Font size:', fontSize, 'center:', centerX, centerY)

    // Create simple SVG - minimal features for compatibility
    const svgOverlay = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="black" flood-opacity="0.5"/>
    </filter>
  </defs>
  <g transform="rotate(-25 ${centerX} ${centerY})">
    <text x="${centerX}" y="${centerY}"
      font-family="Arial"
      font-size="${fontSize}"
      fill="rgba(255,255,255,${opacity})"
      text-anchor="middle"
      filter="url(#shadow)"
    >${text}</text>
  </g>
</svg>`

    console.log('[WATERMARK] SVG created, length:', svgOverlay.length)

    // Composite the watermark over the original image
    console.log('[WATERMARK] Starting composite...')
    const watermarkedBuffer = await image
      .composite([
        {
          input: Buffer.from(svgOverlay),
          top: 0,
          left: 0,
        },
      ])
      .toBuffer()

    const totalTime = Date.now() - startTime
    console.log('[WATERMARK] Complete, output size:', watermarkedBuffer.length, 'bytes, time:', totalTime, 'ms')

    // Check if output is different from input (watermark was applied)
    if (watermarkedBuffer.length === imageBuffer.length) {
      console.log('[WATERMARK] WARNING: Output size same as input - watermark may not have applied')
    }

    return watermarkedBuffer
  } catch (error) {
    const totalTime = Date.now() - startTime
    console.error('[WATERMARK] ERROR after', totalTime, 'ms:', error)
    // Return original image if watermarking fails
    return imageBuffer
  }
}
