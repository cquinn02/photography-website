import Image from 'next/image'
import { Star } from 'lucide-react'
import { BACKGROUNDS, LINEN_TEXTURE_URL, type BackgroundKey } from './sectionConfig'

interface Review {
  image: string
  imageAlt: string
  name: string
  review: string
  stars: number
  imageStyle?: React.CSSProperties
}

interface ThreeReviewSectionProps {
  reviews: Review[]
  background?: BackgroundKey
  backgroundColor?: string
  backgroundImage?: string
  title?: React.ReactNode
  textColor?: 'dark' | 'white'
}

export default function ThreeReviewSection({
  reviews,
  background,
  backgroundColor,
  backgroundImage,
  title,
  textColor
}: ThreeReviewSectionProps) {

  // Ensure we have exactly 3 reviews
  if (reviews.length !== 3) {
    console.warn('ThreeReviewSection requires exactly 3 reviews')
  }

  // Resolve visual props: prefer `background` enum, fall back to direct props
  const bgConfig = background ? BACKGROUNDS[background] : undefined
  const resolvedBgColor = bgConfig?.color ?? backgroundColor ?? '#ffffff'
  const resolvedBgImage = bgConfig
    ? (bgConfig.linen ? `url('${LINEN_TEXTURE_URL}')` : undefined)
    : backgroundImage
  const resolvedTextColor: 'dark' | 'white' = bgConfig
    ? (bgConfig.mode === 'dark' ? 'white' : 'dark')
    : (textColor ?? 'dark')

  return (
    <section className="lg:min-h-[650px]" style={{
      backgroundColor: resolvedBgColor,
      ...(resolvedBgImage ? {
        backgroundImage: resolvedBgImage,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      } : resolvedBgColor === '#575757' ? {
        backgroundImage: `url('${LINEN_TEXTURE_URL}')`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      } : {}),
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container mx-auto px-4 py-20">
        {title && (
          <div className="text-center mb-12">
            <p className="font-raleway text-3xl lg:text-4xl" style={{ color: resolvedTextColor === 'white' ? '#ffffff' : '#5577a5' }}>
              {title}
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-12 mx-auto" style={{ maxWidth: '1400px' }}>
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="text-center">
              {/* Review Image */}
              <div className="mb-8 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden relative"
                     style={{
                       boxShadow: '0 12px 24px rgba(0,0,0,0.25), 0 6px 12px rgba(0,0,0,0.15)'
                     }}>
                  <Image
                    src={review.image}
                    alt={review.imageAlt}
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={review.imageStyle}
                    sizes="192px"
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div className="mb-3">
                <p className={`font-raleway font-normal uppercase tracking-wider mb-2 ${resolvedTextColor === 'white' ? 'text-white' : 'text-cmq-blue'}`} style={{
                  fontWeight: '400',
                  fontSize: '22px',
                  color: resolvedTextColor === 'white' ? '#ffffff' : '#5577a5'
                }}>
                  {review.stars} STAR REVIEW
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                      style={i < review.stars ? { color: '#D4AF37', fill: '#D4AF37' } : {}}
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className={`font-raleway text-xl font-normal px-4 ${resolvedTextColor === 'white' ? 'text-white' : 'text-black'}`} style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Reviewer Name */}
              {review.name && (
                <p className={`font-raleway text-sm font-semibold mt-4 ${resolvedTextColor === 'white' ? 'text-white' : 'text-black'}`}>
                  - {review.name}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
