/**
 * Section design tokens — single source of truth for KW-style sections.
 *
 * Picking a `background` here automatically determines text color, title color,
 * and whether the linen texture overlay is applied. Picking an `imageLayout`
 * automatically sets the master image dimensions per image-rules.md.
 *
 * Components that consume these maps:
 * - KWSection (wraps TwoColumnSection)
 * - ReviewsRow (planned)
 * - FAQSection (planned)
 */

export const LINEN_TEXTURE_URL =
  'https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp'

export const BACKGROUNDS = {
  white:     { color: '#FFFFFF', mode: 'light', linen: false },
  lightGrey: { color: '#D0D0D0', mode: 'light', linen: false },
  darkGrey:  { color: '#575757', mode: 'dark',  linen: true  },
  veryDark:  { color: '#282725', mode: 'dark',  linen: false },
  brandBlue: { color: '#5577a5', mode: 'dark',  linen: false },
} as const

export const IMAGE_LAYOUTS = {
  horizontal: { width: 1600, height: 1280 },
  vertical:   { width: 1280, height: 1600 },
  square:     { width: 1600, height: 1600 },
} as const

export type BackgroundKey = keyof typeof BACKGROUNDS
export type ImageLayoutKey = keyof typeof IMAGE_LAYOUTS
