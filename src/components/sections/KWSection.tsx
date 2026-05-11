'use client'

import TwoColumnSection from './TwoColumnSection'
import {
  BACKGROUNDS,
  IMAGE_LAYOUTS,
  LINEN_TEXTURE_URL,
  type BackgroundKey,
  type ImageLayoutKey,
} from './sectionConfig'

interface KWSectionProps {
  title: React.ReactNode
  description: string
  imageUrl: string
  imageAlt: string
  background: BackgroundKey
  imageLayout: ImageLayoutKey
  imageSide: 'left' | 'right'
  cta?: { text: string; href: string }
  objectPosition?: string
}

export default function KWSection({
  title,
  description,
  imageUrl,
  imageAlt,
  background,
  imageLayout,
  imageSide,
  cta,
  objectPosition = 'center bottom',
}: KWSectionProps) {
  const bg = BACKGROUNDS[background]
  const img = IMAGE_LAYOUTS[imageLayout]
  const isDark = bg.mode === 'dark'

  return (
    <TwoColumnSection
      title={title}
      description={description}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      imageWidth={img.width}
      imageHeight={img.height}
      backgroundColor={bg.color}
      backgroundImage={bg.linen ? LINEN_TEXTURE_URL : undefined}
      textColor={isDark ? 'white' : 'dark'}
      titleColor={isDark ? 'white' : 'blue'}
      reverseColumns={imageSide === 'left'}
      textSize="medium"
      ctaSize="large"
      objectFit="contain"
      objectPosition={objectPosition}
      minHeight="650"
      mobileStackOrder="image-first"
      ctaText={cta?.text}
      ctaLink={cta?.href}
    />
  )
}
