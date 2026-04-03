'use client'

import Image from 'next/image'
import { useLightbox } from '../LightboxProvider'

interface FiveImageRowProps {
  images: {
    src: string
    alt: string
    title?: string
  }[]
  title?: string
  subtitle?: string
  backgroundColor?: string
  fullWidth?: boolean
  borderColor?: string
}

export default function FiveImageRow({
  images,
  title,
  subtitle,
  backgroundColor = '#ffffff',
  fullWidth = true,
  borderColor = '#00b4d8'
}: FiveImageRowProps) {
  const { openLightbox } = useLightbox()

  // Handle undefined images prop
  if (!images || !Array.isArray(images)) {
    console.warn('FiveImageRow: images prop is required and must be an array')
    return null
  }

  // Show up to 4 images
  if (images.length < 4) {
    console.warn('FiveImageRow: At least 4 images recommended for best display')
  }

  const handleImageClick = (index: number) => {
    const lightboxImages = images.map(img => ({
      src: img.src,
      alt: img.alt,
      title: img.title
    }))
    openLightbox(lightboxImages, index)
  }

  const sectionStyle = backgroundColor?.startsWith('url(')
    ? { backgroundImage: backgroundColor, backgroundSize: 'cover', backgroundPosition: 'center' }
    : { backgroundColor }

  return (
    <section className="w-full py-8" style={sectionStyle}>
      <div className={fullWidth ? 'w-full px-4' : 'container mx-auto px-4'}>
        {/* Optional Title Section */}
        {(title || subtitle) && (
          <div className="text-center mb-8 px-4">
            {subtitle && (
              <p className="font-raleway text-sm uppercase tracking-wider text-cmq-gray-dark mb-2">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="font-raleway text-3xl lg:text-4xl font-medium text-cmq-blue">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Five Images in a Row - Edge to Edge */}
        <div className="flex flex-wrap md:flex-nowrap">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className="w-1/2 md:w-1/4 relative overflow-hidden cursor-pointer"
              style={{
                aspectRatio: '4/5',
                minHeight: '450px'
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
                fill
                className="object-cover"
                style={{
                  objectPosition: index === 2 ? 'center 1%' : index === 1 ? 'center 3%' : 'center 4%',
                  transform: 'scale(1.1)'
                }}
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}