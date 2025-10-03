import Image from 'next/image'
import Link from 'next/link'
import GetPricingButton from '../GetPricingButton'

interface TwoColumnSectionProps {
  title: string | React.ReactNode
  subtitle?: string
  description: string
  ctaText?: string
  ctaLink?: string
  ctaSize?: 'small' | 'medium' | 'large' | 'xl'
  imageUrl: string
  imageAlt?: string
  backgroundColor?: string
  textColor?: 'dark' | 'white'
  mobileStackOrder?: 'text-first' | 'image-first'
  reverseColumns?: boolean
  breakpoint?: 'md' | 'lg' | 'xl' | '2xl'
  textSize?: 'small' | 'medium' | 'large'
  objectPosition?: 'left' | 'center' | 'right'
  objectFit?: 'contain' | 'cover'
  minHeight?: string
  columnRatio?: '1-1' | '2-1' | '1-2'
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
  textColor = 'dark',
  mobileStackOrder = 'text-first',
  reverseColumns = false,
  breakpoint = 'lg',
  textSize = 'medium',
  objectPosition = 'center',
  objectFit = 'contain',
  minHeight = '400',
  columnRatio = '1-1'
}: TwoColumnSectionProps) {

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

  // Desktop layout with image-driven height
  const desktopLayout = (
    <div className={`${desktopClass} w-full`} style={{ gap: '0' }}>
      {reverseColumns ? (
        <>
          {/* Image First */}
          <div className="relative" style={{ minHeight: `${minHeight}px` }}>
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
                <p className={`uppercase tracking-wider text-sm mb-2 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`}>
                  {subtitle}
                </p>
              )}
              <h2 className={`${titleClass} font-bold mb-6 font-raleway text-center text-cmq-blue`}>
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
                  {ctaText.includes('PRICING') ? (
                    <GetPricingButton href={ctaLink} size={ctaSize}>
                      {ctaText}
                    </GetPricingButton>
                  ) : (
                    <GetPricingButton href={ctaLink} size={ctaSize}>
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
                <p className={`uppercase tracking-wider text-sm mb-2 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`}>
                  {subtitle}
                </p>
              )}
              <h2 className={`${titleClass} font-bold mb-6 font-raleway text-center text-cmq-blue`}>
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
                  {ctaText.includes('PRICING') ? (
                    <GetPricingButton href={ctaLink} size={ctaSize}>
                      {ctaText}
                    </GetPricingButton>
                  ) : (
                    <GetPricingButton href={ctaLink} size={ctaSize}>
                      {ctaText}
                    </GetPricingButton>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* Image Second */}
          <div className="relative" style={{ minHeight: `${minHeight}px` }}>
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

  // Mobile/Tablet layout
  const mobileLayout = (
    <div className={mobileClass}>
      {mobileStackOrder === 'image-first' ? (
        <>
          {/* Image First on Mobile */}
          <div className="relative" style={{ minHeight: '300px' }}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          {/* Text Second on Mobile */}
          <div className="flex items-center justify-center" style={{ backgroundColor }}>
            <div className="w-4/5 py-12 text-center">
              {subtitle && (
                <p className={`uppercase tracking-wider text-sm mb-2 opacity-80 ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`}>
                  {subtitle}
                </p>
              )}
              <h2 className={`${titleClass.replace('lg:', '')} font-bold mb-6 text-cmq-blue`}>
                {title}
              </h2>
              <p className={`text-xl font-normal mb-8 ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                {description}
              </p>
              {ctaText && ctaLink && (
                <div className="text-center">
                  <GetPricingButton href={ctaLink} size={ctaSize}>
                    {ctaText}
                  </GetPricingButton>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Text First on Mobile */}
          <div className="flex items-center justify-center" style={{ backgroundColor }}>
            <div className="w-4/5 py-12 text-center">
              {subtitle && (
                <p className={`uppercase tracking-wider text-sm mb-2 opacity-80 ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`}>
                  {subtitle}
                </p>
              )}
              <h2 className={`${titleClass.replace('lg:', '')} font-bold mb-6 text-cmq-blue`}>
                {title}
              </h2>
              <p className={`text-xl font-normal mb-8 ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                {description}
              </p>
              {ctaText && ctaLink && (
                <div className="text-center">
                  <GetPricingButton href={ctaLink} size={ctaSize}>
                    {ctaText}
                  </GetPricingButton>
                </div>
              )}
            </div>
          </div>
          {/* Image Second on Mobile */}
          <div className="relative" style={{ minHeight: '300px' }}>
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </>
      )}
    </div>
  )

  return (
    <section className="w-full" style={{ backgroundColor }}>
      {desktopLayout}
      {mobileLayout}
    </section>
  )
}