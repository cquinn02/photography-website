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
    <section className="w-full" style={{ backgroundColor, paddingBottom: '0', marginBottom: '0' }}>
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.2fr] w-full" style={{ gap: '0', paddingBottom: '0', marginBottom: '0', minHeight: '650px' }}>
        {reverseColumns ? (
          <>
            {/* Image First - wider column */}
            <div className="relative h-full overflow-hidden">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition }}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
            {/* Text Second - 2/3 width */}
            <div className="flex items-center justify-center px-4">
              <div className="w-full py-12 lg:py-16">
                <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-cmq-blue font-raleway text-center">
                  {title}
                </h2>
                <p className={`text-xl font-normal mb-8 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-black'}`} style={{
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
            {/* Text First - 2/3 width */}
            <div className="flex items-center justify-end px-4 lg:px-12" style={{ paddingBottom: '0' }}>
              <div className="w-full pt-12 lg:pt-16" style={{ paddingBottom: '0', marginBottom: '0' }}>
                <h2 className="text-3xl lg:text-4xl font-medium mb-6 text-cmq-blue font-raleway text-center">
                  {title}
                </h2>
                <p className={`text-xl font-normal mb-8 font-raleway text-center ${textColor === 'white' ? 'text-white' : 'text-black'}`} style={{
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
            {/* Image Second - wider column */}
            <div className="relative h-full overflow-hidden">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition }}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </>
        )}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-center" style={{ backgroundColor }}>
          <div className="w-4/5 py-12 text-center">
            <h2 className="text-3xl font-medium mb-6 text-cmq-blue font-raleway">
              {title}
            </h2>
            <p className={`text-xl font-normal mb-8 font-raleway ${textColor === 'white' ? 'text-white' : 'text-black'}`} style={{
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
