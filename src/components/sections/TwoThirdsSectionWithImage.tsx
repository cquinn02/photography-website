import Image from 'next/image'
import GetPricingButton from '../GetPricingButton'

interface TwoThirdsSectionWithImageProps {
  title: string | React.ReactNode
  description: string
  ctaText?: string
  ctaLink?: string
  ctaSize?: 'small' | 'medium' | 'large' | 'xl'
  imageUrl: string
  imageAlt?: string
  backgroundColor?: string
  textColor?: 'dark' | 'white'
  reverseColumns?: boolean
  objectPosition?: 'left' | 'center' | 'right'
}

export default function TwoThirdsSectionWithImage({
  title,
  description,
  ctaText,
  ctaLink,
  ctaSize = 'medium',
  imageUrl,
  imageAlt = 'Featured image',
  backgroundColor = '#ffffff',
  textColor = 'dark',
  reverseColumns = false,
  objectPosition = 'center'
}: TwoThirdsSectionWithImageProps) {

  return (
    <section className="w-full" style={{ backgroundColor }}>
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[2fr_1fr] w-full" style={{ gap: '0', minHeight: '500px' }}>
        {reverseColumns ? (
          <>
            {/* Image First - 1/3 width */}
            <div className="relative h-full">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition }}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            {/* Text Second - 2/3 width */}
            <div className="flex items-center justify-center px-4">
              <div className="w-full py-12 lg:py-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-cmq-blue font-raleway text-center">
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
            {/* Text First - 2/3 width */}
            <div className="flex items-center justify-center px-4">
              <div className="w-full py-12 lg:py-16">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-cmq-blue font-raleway text-center">
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
                    <GetPricingButton href={ctaLink} size={ctaSize}>
                      {ctaText}
                    </GetPricingButton>
                  </div>
                )}
              </div>
            </div>
            {/* Image Second - 1/3 width */}
            <div className="relative h-full">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition }}
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-center" style={{ backgroundColor }}>
          <div className="w-4/5 py-12">
            <h2 className="text-3xl font-bold mb-6 text-cmq-blue font-raleway">
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
                <GetPricingButton href={ctaLink} size={ctaSize}>
                  {ctaText}
                </GetPricingButton>
              </div>
            )}
          </div>
        </div>
        <div className="relative" style={{ minHeight: '300px' }}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>
    </section>
  )
}
