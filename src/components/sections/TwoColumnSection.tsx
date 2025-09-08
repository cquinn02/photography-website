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
  textSize = 'medium'
}: TwoColumnSectionProps) {
  
  // Determine responsive classes based on breakpoint
  const desktopClass = breakpoint === 'md' ? 'hidden md:grid md:grid-cols-2' :
                       breakpoint === 'lg' ? 'hidden lg:grid lg:grid-cols-2' :
                       breakpoint === 'xl' ? 'hidden xl:grid xl:grid-cols-2' :
                       'hidden 2xl:grid 2xl:grid-cols-2'
  
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
          <div className="relative">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto block"
            />
          </div>
          {/* Text Second */}
          <div className="flex items-center justify-center px-4" style={{ 
            borderLeft: backgroundColor === '#575757' ? '2px solid #575757' : 'none' 
          }}>
            <div className="w-full py-12 lg:py-16">
              {subtitle && (
                <p className={`uppercase tracking-wider text-sm mb-2 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`}>
                  {subtitle}
                </p>
              )}
              <h2 className={`${titleClass} font-bold mb-6 text-cmq-blue font-raleway text-center`}>
                {title}
              </h2>
              <p className={`text-xl font-light mb-8 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '300',
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
            <div className="w-full py-12 lg:py-16">
              {subtitle && (
                <p className={`uppercase tracking-wider text-sm mb-2 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`}>
                  {subtitle}
                </p>
              )}
              <h2 className={`${titleClass} font-bold mb-6 text-cmq-blue font-raleway text-center`}>
                {title}
              </h2>
              <p className={`text-xl font-light mb-8 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '300',
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
          <div className="relative">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto block"
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
          <div className="relative">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto block"
            />
          </div>
          {/* Text Second on Mobile */}
          <div className="flex items-center justify-center" style={{ backgroundColor }}>
            <div className="w-4/5 py-12">
              {subtitle && (
                <p className="uppercase tracking-wider text-sm mb-2 opacity-80">
                  {subtitle}
                </p>
              )}
              <h2 className={`${titleClass.replace('lg:', '')} font-bold mb-6`}>
                {title}
              </h2>
              <p className="text-xl font-light mb-8 opacity-90" style={{
                fontWeight: '300',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                {description}
              </p>
              {ctaText && ctaLink && (
                <div className="text-center">
                  <Link 
                    href={ctaLink}
                    className="inline-block px-8 py-3 uppercase tracking-wide font-raleway font-light transition-all hover:opacity-80 bg-black text-white"
                    style={{ fontSize: '22px', fontWeight: '300' }}
                  >
                    {ctaText}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Text First on Mobile */}
          <div className="flex items-center justify-center" style={{ backgroundColor }}>
            <div className="w-4/5 py-12">
              {subtitle && (
                <p className="uppercase tracking-wider text-sm mb-2 opacity-80">
                  {subtitle}
                </p>
              )}
              <h2 className={`${titleClass.replace('lg:', '')} font-bold mb-6`}>
                {title}
              </h2>
              <p className="text-xl font-light mb-8 opacity-90" style={{
                fontWeight: '300',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                {description}
              </p>
              {ctaText && ctaLink && (
                <div className="text-center">
                  <Link 
                    href={ctaLink}
                    className="inline-block px-8 py-3 uppercase tracking-wide font-raleway font-light transition-all hover:opacity-80 bg-black text-white"
                    style={{ fontSize: '22px', fontWeight: '300' }}
                  >
                    {ctaText}
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/* Image Second on Mobile */}
          <div className="relative">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto block"
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