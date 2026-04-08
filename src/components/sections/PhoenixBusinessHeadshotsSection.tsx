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
            <h2 className="text-3xl lg:text-4xl font-medium mb-6 font-raleway" style={{ color: '#ffffff' }}>
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
              <GetPricingButton href={ctaLink} size="large" shimmer={true}>
                {ctaText}
              </GetPricingButton>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - H2 → Image → Text */}
      <div className="lg:hidden">
        {/* H2 Title First */}
        <div className="flex items-center justify-center pt-10" style={{ backgroundColor }}>
          <div className="w-4/5 text-center">
            <h2 className="text-3xl font-medium mb-3 font-raleway" style={{ color: '#ffffff' }}>
              {title}
            </h2>
          </div>
        </div>
        {/* Image Second */}
        <div style={{ backgroundColor, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(0, 0, 0, 0.2)', border: '1px solid #444444', position: 'relative' as const, zIndex: 5, marginBottom: '10px' }}>
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={800}
            height={1000}
            className="w-full"
            style={{ aspectRatio: 'auto 4/5', height: 'auto' }}
            sizes="100vw"
          />
        </div>
        {/* Text Third */}
        <div className="flex items-center justify-center py-12" style={{ backgroundColor }}>
          <div className="w-4/5 text-center">
            <p className="text-xl font-normal mb-8 font-raleway text-white" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {description}
            </p>
            <div className="text-center">
              <GetPricingButton href={ctaLink} size="large" shimmer={true}>
                {ctaText}
              </GetPricingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
