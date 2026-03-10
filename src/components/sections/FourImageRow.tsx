'use client'

import Image from 'next/image'
import { useLightbox } from '../LightboxProvider'

interface FourImageRowProps {
  images: {
    src: string
    alt: string
    title?: string
    flip?: boolean
    brightness?: number
  }[]
  title?: string | React.ReactNode
  subtitle?: string
  backgroundColor?: string
  fullWidth?: boolean
  borderColor?: string
}

export default function FourImageRow({
  images,
  title,
  subtitle,
  backgroundColor = '#ffffff',
  fullWidth = true,
  borderColor = '#00b4d8'
}: FourImageRowProps) {
  const { openLightbox } = useLightbox()

  // Handle undefined images prop
  if (!images || !Array.isArray(images)) {
    console.warn('FourImageRow: images prop is required and must be an array')
    return null
  }

  const handleImageClick = (index: number) => {
    const lightboxImages = images.map(img => ({
      src: img.src,
      alt: img.alt,
      title: img.title
    }))
    openLightbox(lightboxImages, index)
  }

  // Ensure we have exactly 4 images
  if (images.length !== 4) {
    console.warn('FourImageRow requires exactly 4 images')
  }

  const sectionStyle = backgroundColor?.startsWith('url(')
    ? { backgroundImage: backgroundColor, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor }

  return (
    <section className="w-full" style={{ ...sectionStyle, display: 'flex', flexDirection: 'column' }}>
      {/* Optional Title Section - centered in space above images */}
      {(title || subtitle) && (
        <div className="flex-grow flex items-center justify-center px-4" style={{ paddingTop: '100px' }}>
          <div className="text-center">
            {subtitle && (
              <p className="font-raleway text-sm uppercase tracking-wider text-cmq-gray-dark mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h3 className="font-raleway text-2xl lg:text-4xl uppercase" style={{ color: '#5577a5', fontWeight: '400', letterSpacing: '0.05em' }}>
                {title}
              </h3>
            )}
          </div>
        </div>
      )}

      <div className={fullWidth ? 'w-full' : 'container mx-auto px-4'}>
        {/* Four Images in a Row - Edge to Edge */}
        <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-start">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`w-4/5 md:w-1/4 relative overflow-hidden cursor-pointer ${index >= 2 ? 'hidden md:block' : ''}`}
              style={{
                aspectRatio: '1/1'
              }}
              onClick={() => handleImageClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleImageClick(index)
                }
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                title={image.title}
                fill
                className={`object-contain ${image.flip ? 'scale-x-[-1]' : ''}`}
                style={{
                  objectPosition: 'bottom',
                  filter: image.brightness ? `brightness(${image.brightness})` : undefined
                }}
                sizes="(max-width: 768px) 80vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}