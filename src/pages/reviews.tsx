import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { useState } from 'react'
import fs from 'fs'
import path from 'path'
import { GetStaticProps } from 'next'

interface Review {
  name: string
  rating: number
  date: string
  text: string
  response: string
}

interface ReviewsPageProps {
  reviews: Review[]
}

// Load and format reviews at build time
export const getStaticProps: GetStaticProps<ReviewsPageProps> = async () => {
  const filePath = path.join(process.cwd(), 'content', 'google-reviews.json')
  const rawData = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  const ratingMap: Record<string, number> = { FIVE: 5, FOUR: 4, THREE: 3, TWO: 2, ONE: 1 }

  const reviews: Review[] = rawData.map((r: any) => {
    const date = new Date(r.createTime)
    return {
      name: r.reviewer.displayName,
      rating: ratingMap[r.starRating] || 5,
      date: date.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
      text: (r.comment || '').replace(/\n/g, ' ').trim(),
      response: r.reviewReply ? r.reviewReply.comment.replace(/\n/g, ' ').trim() : ''
    }
  })

  return { props: { reviews } }
}

// Star rating component
function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          className={star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

// Individual review card
function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false)
  const isLong = review.text.length > 250

  // Skip reviews with no text
  if (!review.text) return null

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-raleway font-medium text-lg" style={{ color: '#000000' }}>
            {review.name}
          </p>
          <p className="font-raleway text-sm text-black mt-1">{review.date}</p>
        </div>
        <StarRating rating={review.rating} />
      </div>
      <div className="font-raleway text-base leading-relaxed" style={{ color: '#000000', fontWeight: '400' }}>
        {isLong && !expanded ? (
          <>
            <p>{review.text.slice(0, 250)}...</p>
            <button
              onClick={() => setExpanded(true)}
              className="font-raleway text-sm mt-2 font-medium"
              style={{ color: '#5577a5' }}
            >
              Read more
            </button>
          </>
        ) : (
          <p>{review.text}</p>
        )}
        {isLong && expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="font-raleway text-sm mt-2 font-medium"
            style={{ color: '#5577a5' }}
          >
            Show less
          </button>
        )}
      </div>
      {review.response && (
        <div className="mt-4 pl-4 border-l-2" style={{ borderColor: '#5577a5' }}>
          <p className="font-raleway text-sm font-medium" style={{ color: '#5577a5' }}>Response from CMQ Headshots</p>
          <p className="font-raleway text-sm text-black mt-1" style={{ fontWeight: '400' }}>{review.response}</p>
        </div>
      )}
    </div>
  )
}

export default function Reviews({ reviews }: ReviewsPageProps) {
  const [filter, setFilter] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  // Only show reviews with text
  const reviewsWithText = reviews.filter(r => r.text)
  const filteredReviews = filter ? reviewsWithText.filter(r => r.rating === filter) : reviewsWithText

  // Show 20 initially, then all
  const displayedReviews = showAll ? filteredReviews : filteredReviews.slice(0, 20)

  // Stats from ALL reviews (including no-text ones)
  const totalReviews = reviews.length
  const avgRating = totalReviews > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
    : '5.0'

  const ratingCounts = [5, 4, 3, 2, 1].map(star => ({
    star,
    count: reviews.filter(r => r.rating === star).length
  }))

  return (
    <Layout
      title="Phoenix Headshot Photographer — 131 Five-Star Reviews | CMQ Headshots"
      description="131 five-star Google reviews from real clients. See why Phoenix professionals trust CMQ Headshots for business, corporate, actor, and realtor headshots. Book today."
      canonical="https://www.cmqheadshots.com/reviews"
      ogUrl="https://www.cmqheadshots.com/reviews"
      noindex={false}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.cmqheadshots.com" },
              { "@type": "ListItem", "position": 2, "name": "Reviews", "item": "https://www.cmqheadshots.com/reviews" }
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "CMQ Headshots",
            "image": "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp",
            "url": "https://www.cmqheadshots.com",
            "telephone": "+1-480-648-3429",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "4405 W Phalen Dr",
              "addressLocality": "Phoenix",
              "addressRegion": "AZ",
              "postalCode": "85087",
              "addressCountry": "US"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": avgRating,
              "reviewCount": totalReviews,
              "bestRating": "5",
              "worstRating": "1"
            }
          }) }}
        />
      </Head>

      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-3xl md:text-5xl lg:text-6xl leading-tight mb-6" style={{ color: '#5577a5' }}>
              <span className="font-medium">PHOENIX HEADSHOT PHOTOGRAPHER</span><br />
              <span className="font-light">{totalReviews} FIVE-STAR REVIEWS</span>
            </h1>
            <p className="font-raleway text-xl max-w-3xl mx-auto" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
              As a Phoenix headshot photographer with {totalReviews} five-star Google reviews, I take pride in every session. These reviews are pulled directly from my Google Business Profile — real feedback from real clients. Business professionals, actors, realtors, and attorneys across the Valley trust CMQ Headshots for headshots that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              {/* Average Rating */}
              <div className="text-center">
                <p className="font-raleway text-6xl font-medium" style={{ color: '#5577a5' }}>{avgRating}</p>
                <div className="flex justify-center mt-2">
                  <StarRating rating={Math.round(Number(avgRating))} />
                </div>
                <p className="font-raleway text-sm text-black mt-2">average rating</p>
              </div>

              {/* Total Reviews */}
              <div className="text-center">
                <p className="font-raleway text-6xl font-medium" style={{ color: '#5577a5' }}>{totalReviews}</p>
                <p className="font-raleway text-sm text-black mt-2">Google reviews</p>
              </div>

              {/* Rating Breakdown */}
              <div className="w-full max-w-xs">
                {ratingCounts.map(({ star, count }) => {
                  const pct = totalReviews > 0 ? (count / totalReviews) * 100 : 0
                  return (
                    <button
                      key={star}
                      onClick={() => setFilter(filter === star ? null : star)}
                      className={`flex items-center gap-2 w-full py-1 transition-opacity ${filter && filter !== star ? 'opacity-40' : ''}`}
                    >
                      <span className="font-raleway text-sm w-4 text-right" style={{ color: '#000000' }}>{star}</span>
                      <Star size={14} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                      <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${pct}%`, backgroundColor: '#5577a5' }}
                        />
                      </div>
                      <span className="font-raleway text-sm w-8 text-black">{count}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {filter && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setFilter(null)}
                  className="font-raleway text-sm underline"
                  style={{ color: '#5577a5' }}
                >
                  Clear filter - show all reviews
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {displayedReviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <p className="font-raleway text-center text-black py-12">No reviews match this filter.</p>
            )}

            {!showAll && filteredReviews.length > 20 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(true)}
                  className="font-raleway inline-block px-8 py-4 text-lg font-normal transition-colors rounded-lg uppercase"
                  style={{ backgroundColor: '#5577a5', color: '#ffffff' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
                >
                  Show All {filteredReviews.length} Reviews
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: '#5577a5' }}>
        <div className="container mx-auto px-4 text-center">
          <p className="font-raleway text-3xl lg:text-4xl font-medium mb-4 uppercase" style={{ color: '#ffffff' }}>
            BOOK YOUR HEADSHOT SESSION IN PHOENIX
          </p>
          <p className="font-raleway text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'white', fontWeight: '400', lineHeight: '1.7' }}>
            Ready to book your headshot session in Phoenix? Join the hundreds of professionals across the Valley who trust CMQ Headshots for headshot photography that makes a difference.
          </p>
          <Link
            href="/#services"
            className="font-raleway inline-block text-white px-8 py-4 text-lg font-normal transition-colors rounded-lg uppercase"
            style={{ backgroundColor: 'transparent', border: '2px solid white' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#575757'; e.currentTarget.style.borderColor = '#575757' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'white' }}
          >
            View Services & Book
          </Link>
        </div>
      </section>

    </Layout>
  )
}
