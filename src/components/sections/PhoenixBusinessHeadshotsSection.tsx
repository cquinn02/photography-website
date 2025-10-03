import Image from 'next/image'
import GetPricingButton from '../GetPricingButton'

interface PhoenixBusinessHeadshotsSectionProps {
  title: string | React.ReactNode
  description: string
  ctaText: string
  ctaLink: string
  imageUrl: string
  imageAlt?: string
  backgroundColor?: string
  objectPosition?: 'left' | 'center' | 'right'
}

export default function PhoenixBusinessHeadshotsSection({
  title,
  description,
  ctaText,
  ctaLink,
  imageUrl,
  imageAlt = 'Business headshots',
  backgroundColor = '#575757',
  objectPosition = 'left'
}: PhoenixBusinessHeadshotsSectionProps) {
  return (
    <section className="w-full" style={{ backgroundColor }}>
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 w-full" style={{ gap: '0', minHeight: '650px' }}>
        {/* Image First - Left Side */}
        <div className="relative h-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            style={{ objectPosition }}
            sizes="50vw"
          />
        </div>
        {/* Text Second - Right Side */}
        <div className="flex items-center justify-center px-8 py-12">
          <div className="w-full text-center pr-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-cmq-blue font-raleway">
              {title}
            </h2>
            <p className="text-xl font-normal mb-8 font-raleway text-white" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {description}
            </p>
            <div className="text-center">
              <GetPricingButton href={ctaLink} size="large">
                {ctaText}
              </GetPricingButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="flex items-center justify-center" style={{ backgroundColor }}>
          <div className="w-4/5 py-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-cmq-blue font-raleway">
              {title}
            </h2>
            <p className="text-xl font-normal mb-8 font-raleway text-white" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {description}
            </p>
            <div className="text-center">
              <GetPricingButton href={ctaLink} size="large">
                {ctaText}
              </GetPricingButton>
            </div>
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
