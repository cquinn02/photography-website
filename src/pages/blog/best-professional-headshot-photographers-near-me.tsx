import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function BestProfessionalHeadshotPhotographers() {
  return (
    <Layout
      title="Best Professional Headshot Photographers Near Me"
      description="Professional headshots are crucial for creating a strong first impression. Learn how to choose the right photographer and prepare for your session."
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
              <span className="text-gray-700">Best Professional Headshot Photographers Near Me</span>
            </nav>
          </div>
        </div>

        <article className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                Miscellaneous
              </span>
            </div>

            <h1 className="font-raleway text-3xl lg:text-4xl mb-6 leading-tight text-center uppercase" style={{ color: '#5a81b9' }}>
              <span className="font-bold">BEST PROFESSIONAL</span><br />
              <span className="font-normal">HEADSHOT PHOTOGRAPHER</span><br />
              <span className="font-normal">NEAR ME</span>
            </h1>

            <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 relative aspect-video">
              <Image
                src="/images/website media/Best-Professional-Phoenix-headshots-Colored.webp"
                alt="Best in Phoenix professional headshot photography award"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Are you in search of the perfect professional headshots that will make you stand out in your industry? Look no further! I&apos;ve got you covered as your top-rated photographer near you.
            </p>

            <p className="mb-6">
              Having a high-quality headshot is essential in today&apos;s competitive professional world. It can make a significant impact on your career opportunities and personal branding. I&apos;m experienced in capturing the essence of individuals through their headshots, highlighting their unique qualities and professional image.
            </p>

            <p className="mb-6">
              I understand the importance of aligning your headshot with your brand voice and target audience. Whether you are a corporate professional, actor, model, or entrepreneur, I have the expertise to create headshots that resonate with your industry.
            </p>

            <p className="mb-6">
              With my top-notch equipment and professional studio setup, I ensure that you have a comfortable and enjoyable experience during your headshot session. I have an eye for detail and a talent for capturing your best angles and expressions.
            </p>

            <p className="mb-6">
              Don&apos;t settle for average headshots. Invest in your personal brand and professional image with me as your top-rated photographer near you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose a 5-Star Rated Photographer?</h3>
            <p className="mb-6">
              As a top-rated 5-star photographer in Phoenix, I take pride in delivering exceptional headshot experiences that my clients rave about. My consistent 5-star reviews reflect my commitment to understanding your unique needs, creating a comfortable and professional environment, and delivering headshots that exceed your expectations. When you work with me, you&apos;re choosing a photographer who values your satisfaction and success as much as you do.
            </p>

            <p className="mb-6">
              Every 5-star review I receive is a testament to the personalized attention, professional expertise, and quality results I provide. My clients appreciate not just the final images, but the entire experience—from the initial consultation to the moment they receive their professionally edited headshots. This level of service and dedication is what sets me apart as one of the best professional headshot photographers in the Phoenix area.
            </p>

            <p className="mb-8">
              Contact me today to book your session and discover why so many professionals trust me with their headshot photography needs. Join my growing list of satisfied clients and unveil the perfect professional headshots that truly represent you.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Professional Headshot Session?</h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s create headshots that make a lasting impression and elevate your professional brand.
            </p>
            <Link
              href="/contact"
              className="text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              style={{ backgroundColor: '#5a81b9' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5a81b9'}
            >
              Schedule Your Session
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
          </nav>
        </article>
      </div>
    </Layout>
  )
}