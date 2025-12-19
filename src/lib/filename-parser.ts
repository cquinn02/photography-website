// Parse photo filenames to extract person name, crop type, and photo number
// Example: "John Smith_Company_001-print_ready_square.jpg"
// -> personName: "John Smith", cropType: "High Resolution 300 dpi", photoNumber: "001"

export interface ParsedFilename {
  personName: string | null
  cropType: string
  photoNumber: string | null
}

export function parseFilename(filename: string): ParsedFilename {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '')

  // Convert to lowercase for pattern matching
  const lowerName = nameWithoutExt.toLowerCase()

  // Determine crop type based on patterns
  let cropType = 'Miscellaneous'

  if (lowerName.includes('circle')) {
    cropType = 'Circle'
  } else if (lowerName.includes('linkedin')) {
    cropType = 'LinkedIn'
  } else if (
    lowerName.includes('print_ready') ||
    lowerName.includes('print-ready') ||
    lowerName.includes('high res') ||
    lowerName.includes('high_res') ||
    lowerName.includes('highres') ||
    lowerName.includes('fullres') ||
    lowerName.includes('full_res') ||
    lowerName.includes('full-res')
  ) {
    cropType = 'High Resolution 300 dpi'
  } else if (
    lowerName.includes('web_ready') ||
    lowerName.includes('web-ready') ||
    lowerName.includes('web_use') ||
    lowerName.includes('web use') ||
    lowerName.includes('low res') ||
    lowerName.includes('low_res') ||
    lowerName.includes('lowres')
  ) {
    cropType = 'Low Resolution 72 dpi'
  } else if (lowerName.includes('square')) {
    cropType = 'Square'
  } else if (lowerName.includes('vertical')) {
    cropType = 'Verticals'
  } else if (
    lowerName.includes('no_crop') ||
    lowerName.includes('no-crop') ||
    lowerName.includes('uncropped')
  ) {
    cropType = 'Uncropped'
  }

  // Extract photo number (look for patterns like _001, -001, 001)
  const numberMatch = nameWithoutExt.match(/[_-]?(\d{3,4})[_-]?/)
  const photoNumber = numberMatch ? numberMatch[1] : null

  // Extract person name (usually the first part before underscores or numbers)
  let personName: string | null = null

  // Split by common delimiters
  const parts = nameWithoutExt.split(/[_-]/)

  if (parts.length > 0) {
    // The first part is usually the person's name
    // But we need to handle cases like "John Smith" vs "JohnSmith"
    const firstPart = parts[0].trim()

    // Check if it looks like a name (has letters, maybe spaces)
    if (firstPart && /^[A-Za-z\s]+$/.test(firstPart)) {
      // Handle CamelCase names like "JohnSmith" -> "John Smith"
      const spacedName = firstPart.replace(/([a-z])([A-Z])/g, '$1 $2')
      personName = spacedName
    }

    // Sometimes name spans first two parts (first and last name)
    if (parts.length > 1 && parts[1]) {
      const secondPart = parts[1].trim()
      if (/^[A-Za-z]+$/.test(secondPart) && !/^\d+$/.test(secondPart)) {
        // Check if second part is a last name (not a number or crop type keyword)
        const cropKeywords = ['circle', 'linkedin', 'print', 'web', 'square', 'vertical', 'high', 'low', 'full', 'crop']
        if (!cropKeywords.some(keyword => secondPart.toLowerCase().includes(keyword))) {
          personName = `${firstPart} ${secondPart}`
        }
      }
    }
  }

  return {
    personName,
    cropType,
    photoNumber,
  }
}
