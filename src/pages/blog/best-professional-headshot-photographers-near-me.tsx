import Layout from '@/components/Layout'
import Link from 'next/link'

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
              <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
              <span className="mx-2 text-gray-500">›</span>
              <Link href="/blog" className="text-blue-600 hover:text-blue-700">Blog</Link>
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
                Uncategorized
              </span>
              <span className="mx-3">•</span>
              <span>By Cindy Quinn</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Best Professional Headshot Photographers Near Me
            </h1>

            <div className="bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img
                src="/images/website media/Best-Professional-Phoenix-headshots-Colored.webp"
                alt="Best in Phoenix professional headshot photography award"
                className="w-full h-auto"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Are you in search of the perfect professional headshots that will make you stand out in your industry? Look no further! We have got you covered with our top-rated photographer near you.
            </p>

            <p className="mb-6">
              Having a high-quality headshot is essential in today's competitive professional world. It can make a significant impact on your career opportunities and personal branding. Our skilled photographer is experienced in capturing the essence of individuals through their headshots, highlighting their unique qualities and professional image.
            </p>

            <p className="mb-6">
              We understand the importance of aligning your headshot with your brand voice and target audience. Whether you are a corporate professional, actor, model, or entrepreneur, our photographer has the expertise to create headshots that resonate with your industry.
            </p>

            <p className="mb-6">
              With our top-notch equipment and professional studio setup, we ensure that you have a comfortable and enjoyable experience during your headshot session. Our photographer has an eye for detail and a talent for capturing your best angles and expressions.
            </p>

            <p className="mb-8">
              Don&apos;t settle for average headshots. Invest in your personal brand and professional image with our top-rated photographer near you. Contact us today to book your session and unveil the perfect professional headshots.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Professional Headshot Session?</h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s create headshots that make a lasting impression and elevate your professional brand.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Schedule Your Session
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
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