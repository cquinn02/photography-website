import sharp from 'sharp'

/**
 * Adds a tiled text watermark to an image
 * @param imageBuffer - The original image buffer
 * @param text - The watermark text (default: "CMQ HEADSHOTS PROOF")
 * @param opacity - Opacity of the watermark (0-1, default: 0.25)
 * @returns Watermarked image buffer
 */
export async function addWatermark(
  imageBuffer: Buffer,
  text: string = 'CMQ HEADSHOTS PROOF',
  opacity: number = 0.30
): Promise<Buffer> {
  try {
  // Get image dimensions
  const image = sharp(imageBuffer)
  const metadata = await image.metadata()
  const width = metadata.width || 800
  const height = metadata.height || 600

  // Calculate font size based on image dimensions (roughly 3% of the smaller dimension)
  const fontSize = Math.max(Math.min(width, height) * 0.035, 16)

  // Calculate spacing between watermarks
  const spacingX = fontSize * 12
  const spacingY = fontSize * 6

  // Create SVG with tiled diagonal text
  const textElements: string[] = []

  // Create a grid of watermark text, rotated diagonally
  // Each text has a dark stroke outline for visibility on any background
  for (let y = -height; y < height * 2; y += spacingY) {
    for (let x = -width; x < width * 2; x += spacingX) {
      textElements.push(
        `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" fill="white" fill-opacity="${opacity}" stroke="black" stroke-opacity="${opacity * 0.5}" stroke-width="1" transform="rotate(-30, ${x}, ${y})">${text}</text>`
      )
    }
  }

  const svgOverlay = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      ${textElements.join('\n')}
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
