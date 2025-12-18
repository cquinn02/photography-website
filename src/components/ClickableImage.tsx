'use client'

import Image from 'next/image'
import { useLightbox } from './LightboxProvider'

interface ClickableImageProps {
  src: string
  alt: string
  title?: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
  sizes?: string
  priority?: boolean
  galleryImages?: { src: string; alt: string; title?: string }[]
  galleryIndex?: number
}

export default function ClickableImage({
  src,
  alt,
  title,
  fill,
  width,
  height,
  className,
  style,
  sizes,
  priority,
  galleryImages,
  galleryIndex = 0,
}: ClickableImageProps) {
  const { openLightbox } = useLightbox()

  const handleClick = () => {
    if (galleryImages && galleryImages.length > 0) {
      openLightbox(galleryImages, galleryIndex)
    } else {
      openLightbox([{ src, alt, title }], 0)
    }
  }

  const imageProps = fill
    ? { fill: true as const }
    : { width: width || 400, height: height || 400 }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
    >
      <Image
        src={src}
        alt={alt}
        title={title}
        {...imageProps}
        className={className}
        style={style}
        sizes={sizes}
        priority={priority}
      />
    </div>
  )
}
