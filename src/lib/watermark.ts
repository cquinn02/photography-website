import sharp from 'sharp'

/**
 * Adds a single centered text watermark across an image
 * @param imageBuffer - The original image buffer
 * @param text - The watermark text (default: "CMQ HEADSHOTS PROOF")
 * @param opacity - Opacity of the watermark (0-1, default: 0.35)
 * @returns Watermarked image buffer
 */
export async function addWatermark(
  imageBuffer: Buffer,
  text: string = 'CMQ HEADSHOTS PROOF',
  opacity: number = 0.35
): Promise<Buffer> {
  try {
    // Get image dimensions
    const image = sharp(imageBuffer)
    const metadata = await image.metadata()
    const width = metadata.width || 800
    const height = metadata.height || 600

    // Calculate font size - about 12% of image width for large visible watermark
    const fontSize = Math.max(width * 0.12, 48)

    // Create SVG with single centered diagonal text
    const svgOverlay = `
      <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <text
          x="${width / 2}"
          y="${height / 2}"
          font-family="Arial, sans-serif"
          font-size="${fontSize}"
          font-weight="bold"
          fill="white"
          fill-opacity="${opacity}"
          stroke="black"
          stroke-opacity="${opacity * 0.8}"
          stroke-width="3"
          text-anchor="middle"
          dominant-baseline="middle"
          transform="rotate(-25, ${width / 2}, ${height / 2})"
        >${text}</text>
      </svg>
    `

    // Composite the watermark over the original image
    const watermarkedBuffer = await image
      .composite([
        {
          input: Buffer.from(svgOverlay),
          top: 0,
          left: 0,
        },
      ])
      .toBuffer()

    return watermarkedBuffer
  } catch (error) {
    console.error('Watermark error:', error)
    // Return original image if watermarking fails
    return imageBuffer
  }
}
