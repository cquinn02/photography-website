'use client'

import Image from 'next/image'
import Link from 'next/link'
import GetPricingButton from '../GetPricingButton'
import { useLightbox } from '../LightboxProvider'

interface TwoColumnSectionProps {
  title: string | React.ReactNode
  subtitle?: string | React.ReactNode
  description: string
  ctaText?: string
  ctaLink?: string
  ctaSize?: 'small' | 'medium' | 'large' | 'xl'
  imageUrl: string
  imageAlt?: string
  backgroundColor?: string
  backgroundImage?: string
  textColor?: 'dark' | 'white'
  titleColor?: 'blue' | 'white' | 'dark'
  mobileStackOrder?: 'text-first' | 'image-first'
  reverseColumns?: boolean
  breakpoint?: 'md' | 'lg' | 'xl' | '2xl'
  textSize?: 'small' | 'medium' | 'large'
  objectPosition?: 'left' | 'center' | 'right'
  objectFit?: 'contain' | 'cover'
  minHeight?: string
  columnRatio?: '1-1' | '2-1' | '1-2'
  titleTag?: 'h1' | 'h2' | 'p'
  subtitleTag?: 'h1' | 'p'
  subtitleSize?: string
}

export default function TwoColumnSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  ctaSize = 'medium',
  imageUrl,
  imageAlt = 'Featured image',
  backgroundColor,
  backgroundImage,
  textColor = 'dark',
  titleColor,
  mobileStackOrder = 'text-first',
  reverseColumns = false,
  breakpoint = 'lg',
  textSize = 'medium',
  objectPosition = 'center',
  objectFit = 'contain',
  minHeight = '400',
  columnRatio = '1-1',
  titleTag = 'h2',
  subtitleTag = 'p',
  subtitleSize
}: TwoColumnSectionProps) {
  const { openLightbox } = useLightbox()

  const handleImageClick = () => {
    openLightbox([{ src: imageUrl, alt: imageAlt }], 0)
  }

  // Determine column ratio classes
  const getGridCols = () => {
    if (columnRatio === '2-1') return 'grid-cols-[2fr_1fr]'
    if (columnRatio === '1-2') return 'grid-cols-[1fr_2fr]'
    return 'grid-cols-2'
  }

  // Determine responsive classes based on breakpoint
  const desktopClass = breakpoint === 'md' ? `hidden md:grid ${getGridCols()}` :
                       breakpoint === 'lg' ? `hidden lg:grid ${getGridCols()}` :
                       breakpoint === 'xl' ? `hidden xl:grid ${getGridCols()}` :
                       `hidden 2xl:grid ${getGridCols()}`
  
  const mobileClass = breakpoint === 'md' ? 'md:hidden' :
                      breakpoint === 'lg' ? 'lg:hidden' :
                      breakpoint === 'xl' ? 'xl:hidden' :
                      '2xl:hidden'
  
  // Text size classes - using relative sizes that inherit from parent
  const titleClass = textSize === 'small' ? 'text-2xl lg:text-3xl' :
                     textSize === 'large' ? 'text-4xl lg:text-5xl' :
                     'text-3xl lg:text-4xl'
  
  const descClass = textSize === 'small' ? 'text-sm' :
                    textSize === 'large' ? 'text-lg' :
                    'text-base'

  // Determine title color
  const getTitleColor = () => {
    if (titleColor === 'blue') return 'text-cmq-blue'
    if (titleColor === 'white') return 'text-white'
    if (titleColor === 'dark') return 'text-cmq-gray-dark'
    // Default: use textColor
    return textColor === 'white' ? 'text-white' : 'text-cmq-blue'
  }

  // Desktop layout with image-driven height
  const desktopLayout = (
    <div className={`${desktopClass} w-full`} style={{ gap: '0' }}>
      {reverseColumns ? (
        <>
          {/* Image First */}
          <div
            className="relative cursor-pointer"
            style={{ minHeight: minHeight.includes('vh') || minHeight.includes('%') ? minHeight : `${minHeight}px` }}
            onClick={handleImageClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick() }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className={objectFit === 'cover' ? 'object-cover' : 'object-contain'}
              style={{ objectPosition }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Text Second */}
          <div className="flex items-center justify-center px-4" style={{
            borderLeft: backgroundColor === '#575757' ? '2px solid #575757' : 'none'
          }}>
            <div className="w-full py-12 lg:py-16 px-10">
              {subtitle && (
                subtitleTag === 'h1' ? (
                  <h1 className={`mb-6 font-raleway text-center uppercase text-2xl lg:text-3xl`} style={{
                    color: textColor === 'white' ? '#ffffff' : undefined,
                    letterSpacing: '0.1em',
                    fontWeight: '400'
                  }}>
                    {subtitle}
                  </h1>
                ) : (
                  <p className={`uppercase tracking-wider mb-2 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                    fontSize: subtitleSize || '0.875rem',
                    letterSpacing: '0.05em'
                  }}>
                    {subtitle}
                  </p>
                )
              )}
              {titleTag === 'h1' ? (
                <h1 className={`${titleClass} font-bold mb-6 font-raleway text-center ${getTitleColor()}`} style={{
                  color: titleColor === 'white' ? '#ffffff' : titleColor === 'blue' ? '#5577a5' : undefined
                }}>
                  {title}
                </h1>
              ) : titleTag === 'h2' ? (
                <h2 className={`${titleClass} font-bold mb-6 font-raleway text-center ${getTitleColor()}`} style={{
                  color: titleColor === 'white' ? '#ffffff' : titleColor === 'blue' ? '#5577a5' : undefined
                }}>
                  {title}
                </h2>
              ) : (
                <p className={`uppercase tracking-wider font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                  fontSize: '25px',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem'
                }}>
                  {title}
                </p>
              )}
              <p className={`text-xl font-normal mb-8 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}>
                {description}
              </p>
              {ctaText && ctaLink && (
                <div className="text-center">
                  {ctaText.includes('PRICING') ? (
                    <GetPricingButton href={ctaLink} size={ctaSize} shimmer={true}>
                      {ctaText}
                    </GetPricingButton>
                  ) : (
                    <GetPricingButton href={ctaLink} size={ctaSize} shimmer={true}>
                      {ctaText}
                    </GetPricingButton>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Text First */}
          <div className="flex items-center justify-center px-4">
            <div className="w-full py-12 lg:py-16 pl-10 pr-10">
              {subtitle && (
                subtitleTag === 'h1' ? (
                  <h1 className={`mb-6 font-raleway text-center uppercase text-2xl lg:text-3xl`} style={{
                    color: textColor === 'white' ? '#ffffff' : undefined,
                    letterSpacing: '0.1em',
                    fontWeight: '400'
                  }}>
                    {subtitle}
                  </h1>
                ) : (
                  <p className={`uppercase tracking-wider mb-2 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                    fontSize: subtitleSize || '0.875rem',
                    letterSpacing: '0.05em'
                  }}>
                    {subtitle}
                  </p>
                )
              )}
              {titleTag === 'h1' ? (
                <h1 className={`${titleClass} font-bold mb-6 font-raleway text-center ${getTitleColor()}`} style={{
                  color: titleColor === 'white' ? '#ffffff' : titleColor === 'blue' ? '#5577a5' : undefined
                }}>
                  {title}
                </h1>
              ) : titleTag === 'h2' ? (
                <h2 className={`${titleClass} font-bold mb-6 font-raleway text-center ${getTitleColor()}`} style={{
                  color: titleColor === 'white' ? '#ffffff' : titleColor === 'blue' ? '#5577a5' : undefined
                }}>
                  {title}
                </h2>
              ) : (
                <p className={`uppercase tracking-wider font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                  fontSize: '25px',
                  fontWeight: '400',
                  letterSpacing: '0.1em',
                  marginBottom: '1.5rem'
                }}>
                  {title}
                </p>
              )}
              <p className={`text-xl font-normal mb-8 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
              }}>
                {description}
              </p>
              {ctaText && ctaLink && (
                <div className="text-center">
                  {ctaText.includes('PRICING') ? (
                    <GetPricingButton href={ctaLink} size={ctaSize} shimmer={true}>
                      {ctaText}
                    </GetPricingButton>
                  ) : (
                    <GetPricingButton href={ctaLink} size={ctaSize} shimmer={true}>
                      {ctaText}
                    </GetPricingButton>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* Image Second */}
          <div
            className="relative cursor-pointer"
            style={{ minHeight: minHeight.includes('vh') || minHeight.includes('%') ? minHeight : `${minHeight}px` }}
            onClick={handleImageClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick() }}
          >
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className={objectFit === 'cover' ? 'object-cover' : 'object-contain'}
              style={{ objectPosition }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </>
      )}
    </div>
  )

  // Mobile/Tablet layout - NO HEADINGS (to avoid duplicates in DOM)
  const mobileLayout = (
    <div className={mobileClass}>
      {mobileStackOrder === 'image-first' ? (
        <>
          {/* Image First on Mobile */}
          <div className="flex justify-center">
            <div
              className="w-4/5 relative cursor-pointer"
              style={{ minHeight: '300px' }}
              onClick={handleImageClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick() }}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="80vw"
              />
            </div>
          </div>
          {/* Text Second on Mobile - HEADINGS REMOVED */}
          <div className="flex items-center justify-center" style={{
            backgroundColor,
            backgroundImage: backgroundImage ? `url("${backgroundImage}")` : undefined,
            backgroundRepeat: backgroundImage ? 'repeat' : undefined,
            backgroundSize: backgroundImage ? 'auto' : undefined
          }}>
            <div className="w-4/5 py-12 text-center">
              {/* Headings are rendered only once in desktop layout with responsive classes */}
              <p className={`text-xl font-normal mb-8 ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
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
          {/* Text First on Mobile - HEADINGS REMOVED */}
          <div className="flex items-center justify-center" style={{
            backgroundColor,
            backgroundImage: backgroundImage ? `url("${backgroundImage}")` : undefined,
            backgroundRepeat: backgroundImage ? 'repeat' : undefined,
            backgroundSize: backgroundImage ? 'auto' : undefined
          }}>
            <div className="w-4/5 py-12 text-center">
              {/* Headings are rendered only once in desktop layout with responsive classes */}
              <p className={`text-xl font-normal mb-8 ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale'
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
          {/* Image Second on Mobile */}
          <div className="flex justify-center">
            <div
              className="w-4/5 relative cursor-pointer"
              style={{ minHeight: '300px' }}
              onClick={handleImageClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleImageClick() }}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="80vw"
              />
            </div>
          </div>
        </>
      )}
    </div>
  )

  // Shared heading section - renders once in DOM, visible on all screen sizes
  const sharedHeadings = (
    <div className="lg:hidden text-center py-12 px-4" style={{
      backgroundColor,
      backgroundImage: backgroundImage ? `url("${backgroundImage}")` : undefined,
      backgroundRepeat: backgroundImage ? 'repeat' : undefined,
      backgroundSize: backgroundImage ? 'auto' : undefined
    }}>
      <div className="w-4/5 mx-auto">
        {subtitle && (
          subtitleTag === 'h1' ? (
            <h1 className={`mb-6 font-raleway uppercase text-2xl lg:text-3xl`} style={{
              color: textColor === 'white' ? '#ffffff' : undefined,
              letterSpacing: '0.1em',
              fontWeight: '400'
            }}>
              {subtitle}
            </h1>
          ) : (
            <p className={`uppercase tracking-wider text-sm mb-2 opacity-80 font-raleway ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
              fontSize: subtitleSize || '0.875rem',
              letterSpacing: '0.05em'
            }}>
              {subtitle}
            </p>
          )
        )}
        {titleTag === 'h1' ? (
          <h1 className={`text-3xl font-bold mb-6 font-raleway ${getTitleColor()}`} style={{
            color: titleColor === 'white' ? '#ffffff' : titleColor === 'blue' ? '#5577a5' : undefined
          }}>
            {title}
          </h1>
        ) : titleTag === 'h2' ? (
          <h2 className={`text-3xl font-bold mb-6 font-raleway ${getTitleColor()}`} style={{
            color: titleColor === 'white' ? '#ffffff' : titleColor === 'blue' ? '#5577a5' : undefined
          }}>
            {title}
          </h2>
        ) : (
          <p className={`uppercase tracking-wider mb-6 font-raleway ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
            fontSize: '18px',
            fontWeight: '400',
            letterSpacing: '0.1em'
          }}>
            {title}
          </p>
        )}
      </div>
    </div>
  )

  return (
    <section className="w-full relative" style={{
      backgroundColor,
      backgroundImage: backgroundImage ? `url("${backgroundImage}")` : undefined,
      backgroundRepeat: backgroundImage ? 'repeat' : undefined,
      backgroundSize: backgroundImage ? 'auto' : undefined
    }}>
      <div className="relative" style={{ zIndex: 10 }}>
        {sharedHeadings}
        {desktopLayout}
        {mobileLayout}
      </div>
    </section>
  )
}