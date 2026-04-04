'use client'

import Image from 'next/image'
import GetPricingButton from '../GetPricingButton'
import { useLightbox } from '../LightboxProvider'

interface ImageRightTextLeftSectionProps {
  title: string | React.ReactNode
  description: string
  ctaText?: string
  ctaLink?: string
  ctaSize?: 'small' | 'medium' | 'large' | 'xl'
  imageUrl: string
  imageAlt?: string
  backgroundColor?: string
  textColor?: 'dark' | 'white'
  objectPosition?: 'left' | 'center' | 'right' | 'right bottom' | 'left bottom' | 'center bottom'
  objectFit?: 'cover' | 'contain'
  mobileStackOrder?: 'text-first' | 'image-first'
}

export default function ImageRightTextLeftSection({
  title,
  description,
  ctaText,
  ctaLink,
  ctaSize = 'large',
  imageUrl,
  imageAlt = 'Section image',
  backgroundColor = '#ffffff',
  textColor = 'dark',
  objectPosition = 'right',
  objectFit = 'cover',
  mobileStackOrder = 'text-first'
}: ImageRightTextLeftSectionProps) {
  const { openLightbox } = useLightbox()

  const handleImageClick = () => {
    openLightbox([{ src: imageUrl, alt: imageAlt }], 0)
  }

  return (
    <section className="w-full" style={{ backgroundColor, paddingBottom: '0', marginBottom: '0' }}>
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] w-full" style={{ gap: '0', paddingBottom: '0', marginBottom: '0', minHeight: '650px' }}>
        {/* Text First - Left Side (narrower column, pushed right) */}
        <div className="flex items-center justify-end px-4 lg:px-12" style={{ paddingBottom: '0' }}>
          <div className="w-full pt-12 lg:pt-16" style={{ paddingBottom: '0', marginBottom: '0' }}>
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-cmq-blue font-raleway text-center">
              {title}
            </h2>
            <p className={`text-xl font-normal mb-8 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {description}
            </p>
            {ctaText && ctaLink && (
              <div className="text-center">
                <GetPricingButton href={ctaLink} size={ctaSize} shimmer={true}>
                  {ctaText}
                </GetPricingButton>
              </div>
            )}
          </div>
        </div>
        {/* Image Second - Right Side (wider column) */}
        <div
          className="relative h-full overflow-hidden cursor-pointer"
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick() }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={960}
            height={1000}
            className={`absolute inset-0 w-full h-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
            style={{ objectPosition }}
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {mobileStackOrder === 'image-first' ? (
          <>
            {/* H2 Title First */}
            <div className="flex items-center justify-center pt-12" style={{ backgroundColor }}>
              <div className="w-4/5 text-center">
                <h2 className="text-3xl font-medium mb-6 text-cmq-blue font-raleway">
                  {title}
                </h2>
              </div>
            </div>
            {/* Image Second */}
            <div
              style={{ backgroundColor, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)', border: `1px solid ${textColor === 'white' ? '#444444' : '#D0D0D0'}`, position: 'relative' as const, zIndex: 5, marginBottom: '10px' }}
              className="cursor-pointer"
              onClick={handleImageClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick() }}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={800}
                height={1000}
                className="w-full h-auto"
                sizes="100vw"
              />
            </div>
            {/* Text Third */}
            <div className="flex items-center justify-center py-12" style={{ backgroundColor }}>
              <div className="w-4/5 text-center">
                <p className={`text-xl font-normal mb-8 font-raleway ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  {description}
                </p>
                {ctaText && ctaLink && (
                  <div className="text-center">
                    <GetPricingButton href={ctaLink} size={ctaSize} shimmer={true}>
                      {ctaText}
                    </GetPricingButton>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Original: H2 + Text First, Image Second */}
            <div className="flex items-center justify-center" style={{ backgroundColor }}>
              <div className="w-4/5 py-12 text-center">
                <h2 className="text-3xl font-medium mb-6 text-cmq-blue font-raleway">
                  {title}
                </h2>
                <p className={`text-xl font-normal mb-8 font-raleway ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  {description}
                </p>
                {ctaText && ctaLink && (
                  <div className="text-center">
                    <GetPricingButton href={ctaLink} size={ctaSize} shimmer={true}>
                      {ctaText}
                    </GetPricingButton>
                  </div>
                )}
              </div>
            </div>
            <div
              className="cursor-pointer"
              style={{ boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)', border: `1px solid ${textColor === 'white' ? '#444444' : '#D0D0D0'}`, position: 'relative' as const, zIndex: 5, marginBottom: '10px' }}
              onClick={handleImageClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick() }}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={800}
                height={1000}
                className="w-full h-auto"
                sizes="100vw"
              />
            </div>
          </>
        )}
      </div>
    </section>
  )
}
