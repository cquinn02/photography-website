import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function WhyIShootHeadshotsHorizontally() {
  return (
    <Layout
      title="Why I shoot headshots horizontally"
      description="The common uses for headshots dictate that they will be seen in a small format. Learn why horizontal framing maximizes the impact of your professional headshot."
    >
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm">
              <Link href="/" className="font-medium transition-colors" style={{ color: '#5a81b9' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5a81b9'}>Home</Link>
              <span className="mx-2 text-gray-500">›</span>
              <Link href="/blog" className="font-medium transition-colors" style={{ color: '#5a81b9' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5a81b9'}>Blog</Link>
              <span className="mx-2 text-gray-500">›</span>
              <span className="text-gray-700">Why I shoot headshots horizontally</span>
            </nav>
          </div>
        </div>

        <article className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Uncategorized
              </span>
              <span className="mx-3">•</span>
              <span>By Cindy Quinn</span>
            </div>

            <h1 className="font-raleway text-3xl lg:text-4xl mb-6 leading-tight text-center uppercase" style={{ color: '#5a81b9' }}>
              <span className="font-bold">WHY I SHOOT HEADSHOTS</span><br />
              <span className="font-normal">HORIZONTALLY</span>
            </h1>

            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8 relative">
              <Image
                src="/images/blog/horizontal-headshots-main.jpg"
                alt="Professional horizontal headshot example"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The common uses for headshots dictate that they will be seen in a small format. LinkedIn, business cards, and other social media sites only have small openings. You want your face to fit in this small form factor. If your headshot is included with your signature line in your email or a resume&apos; it will be small.
            </p>

            <p className="mb-6">
              The devices that are commonly used today like smartphones, iPads, and laptops do not have a lot of space to view images. I know that the face and expression on it must be the focus of the headshot. I have determined how to maximize the space I have to work with.
            </p>

            <p className="mb-6">
              The top of a head does not set anyone apart. We all have something up there, be it a bald top or the top of a &apos;do, so I don&apos;t include it. As Josh Line, a colleague in Las Vegas, Nevada, points out, we subconsciously fill in that missing top. He points to a scientific study documented in an article regarding stroke patients that backs up this claim. In addition to giving more room for the face cutting the top of the head places the eyes in the top 1/3 of the frame. This is the best place to make a connection and making a connection is what it&apos;s all about.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience the Difference</h3>
            <p className="text-gray-600 mb-6">
              See how horizontal framing can maximize the impact of your professional headshot.
            </p>
            <Link
              href="/contact"
              className="text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              style={{ backgroundColor: '#5a81b9' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5a81b9'}
            >
              Book Your Session
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              href="/blog"
              className="font-medium flex items-center transition-colors"
              style={{ color: '#5a81b9' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5a81b9'}
            >
              <svg className="mr-2 w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Back to Blog
            </Link>

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">You May Also Like</p>
              <div className="flex space-x-4">
                <Link
                  href="/blog/best-professional-headshot-photographers-near-me"
                  className="text-sm font-medium transition-colors"
                  style={{ color: '#5a81b9' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5a81b9'}
                >
                  Best Professional Headshot Photographers
                </Link>
                <Link
                  href="/blog/what-kind-of-clothing-should-i-wear-to-my-headshot-session-women"
                  className="text-sm font-medium transition-colors"
                  style={{ color: '#5a81b9' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#5a81b9'}
                >
                  Women&apos;s Headshot Clothing Tips
                </Link>
              </div>
            </div>
          </nav>
        </article>
      </div>
    </Layout>
  )
}