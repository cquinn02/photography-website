import { Star } from 'lucide-react'

interface Review {
  image: string
  imageAlt: string
  name: string
  review: string
  stars: number
}

interface ThreeReviewSectionProps {
  reviews: Review[]
  backgroundColor?: string
  backgroundImage?: string
  title?: string
  textColor?: 'dark' | 'white'
}

export default function ThreeReviewSection({
  reviews,
  backgroundColor = '#ffffff',
  backgroundImage,
  title,
  textColor = 'dark'
}: ThreeReviewSectionProps) {
  
  // Ensure we have exactly 3 reviews
  if (reviews.length !== 3) {
    console.warn('ThreeReviewSection requires exactly 3 reviews')
  }

  return (
    <section style={{ 
      backgroundColor, 
      ...(backgroundImage ? {
        backgroundImage: backgroundImage,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      } : backgroundColor === '#575757' ? {
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      } : {}),
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center' 
    }}>
      <div className="container mx-auto px-4 py-20">
        {title && (
          <div className="text-center mb-12">
            <h2 className={`font-raleway text-3xl font-bold ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-darker'}`}>
              {title}
            </h2>
          </div>
        )}
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="text-center">
              {/* Review Image */}
              <div className="mb-8 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden" 
                     style={{ 
                       boxShadow: '0 12px 24px rgba(0,0,0,0.25), 0 6px 12px rgba(0,0,0,0.15)'
                     }}>
                  <img 
                    src={review.image}
                    alt={review.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="mb-3">
                <h3 className={`font-raleway font-light uppercase tracking-wider mb-2 ${textColor === 'white' ? 'text-white' : 'text-cmq-blue'}`} style={{
                  fontWeight: '300',
                  fontSize: '22px',
                  color: textColor === 'white' ? '#ffffff' : '#5a81b9'
                }}>
                  {review.stars} STAR REVIEW
                </h3>
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
              <p className={`font-raleway text-xl font-light px-4 ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-dark'}`} style={{
                fontWeight: '300',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                &ldquo;{review.review}&rdquo;
              </p>
              
              {/* Reviewer Name */}
              {review.name && (
                <p className={`font-raleway text-sm font-semibold mt-4 ${textColor === 'white' ? 'text-white' : 'text-cmq-gray-darker'}`}>
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