import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogNavigation from '@/components/blog/BlogNavigation'
import BlogPostSchema from '@/components/blog/BlogPostSchema'

export default function BestProfessionalHeadshotPhotographers() {
  return (
    <Layout
      title="Top Headshot Photographers Near Me"
      description="Professional headshots are crucial for creating a strong first impression. Learn how to choose the right photographer and prepare for your session."
      canonical="https://www.cmqheadshots.com/blog/best-professional-headshot-photographers-near-me"
      ogUrl="https://www.cmqheadshots.com/blog/best-professional-headshot-photographers-near-me"
      ogImage="https://images.cmqheadshots.com/images/website%20media/Best-Professional-Phoenix-headshots-Colored.webp"
      ogType="article"
    >
      <BlogPostSchema
        headline="Best Professional Headshot Photographers Near Me"
        description="Professional headshots are crucial for creating a strong first impression. Learn how to choose the right photographer and prepare for your session."
        url="https://www.cmqheadshots.com/blog/best-professional-headshot-photographers-near-me"
        image="https://images.cmqheadshots.com/images/website%20media/Best-Professional-Phoenix-headshots-Colored.webp"
        datePublished="2025-09-28"
      />
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm">
              <Link href="/" className="font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>Home</Link>
              <span className="mx-2 text-gray-500">›</span>
              <Link href="/blog" className="font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>Blog</Link>
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
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-2">
              <span className="font-raleway">By Cindy Quinn</span>
              <span>·</span>
              <span className="font-raleway">Professional Headshot Photographer</span>
            </div>

            <h1 className="font-raleway text-3xl lg:text-4xl mb-6 leading-tight text-center uppercase" style={{ color: '#5577a5' }}>
              <span className="font-medium">BEST PROFESSIONAL</span><br />
              <span className="font-normal">HEADSHOT PHOTOGRAPHER</span><br />
              <span className="font-normal">NEAR ME</span>
            </h1>

            <div className="bg-gray-200 rounded-lg overflow-hidden mb-8 relative aspect-video">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/Best-Professional-Phoenix-headshots-Colored.webp"
                alt="Best in Phoenix professional headshot photography award"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="font-raleway text-xl mb-10 leading-relaxed" style={{ color: '#383838', borderLeft: '4px solid #5577a5', paddingLeft: '20px', fontStyle: 'italic' }}>
              <strong>Key takeaway:</strong> The best headshot photographer near you specializes in headshots — not a wedding, real estate, or family photographer who also does headshots on the side. Just like you&apos;d hire a wedding photographer who knows exactly where to stand and when to shoot, you want a headshot specialist who understands lighting, posing, and how to make you look your best on camera.
            </p>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#383838' }}>
              Searching for the best headshot photographer near me? You&apos;re in the right place. I specialize in professional headshots that make you stand out in your industry — and with 130+ five-star Google reviews, I&apos;ve got you covered.
            </p>

            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#383838' }}>
              Having a high-quality headshot is essential in today&apos;s competitive professional world. It can make a significant impact on your career opportunities and personal branding. I&apos;m experienced in capturing the essence of individuals through their headshots, highlighting their unique qualities and professional image.
            </p>

            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#383838' }}>
              I understand the importance of aligning your headshot with your brand voice and target audience. Whether you are a corporate professional, actor, model, or entrepreneur, I have the expertise to create headshots that resonate with your industry.
            </p>

            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#383838' }}>
              With my top-notch equipment and professional studio setup, I ensure that you have a comfortable and enjoyable experience during your headshot session. I have an eye for detail and a talent for capturing your best angles and expressions.
            </p>

            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#383838' }}>
              Don&apos;t settle for average headshots. Invest in your personal brand and professional image with me as your top-rated photographer near you.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose a 5-Star Rated Photographer?</h3>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#383838' }}>
              As a top-rated 5-star photographer in Phoenix, I take pride in delivering exceptional headshot experiences that my clients rave about. My consistent 5-star reviews reflect my commitment to understanding your unique needs, creating a comfortable and professional environment, and delivering headshots that exceed your expectations. When you work with me, you&apos;re choosing a photographer who values your satisfaction and success as much as you do.
            </p>

            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#383838' }}>
              Every 5-star review I receive is a testament to the personalized attention, professional expertise, and quality results I provide. My clients appreciate not just the final images, but the entire experience—from the initial consultation to the moment they receive their professionally edited headshots. This level of service and dedication is what sets me apart as one of the best professional headshot photographers in the Phoenix area.
            </p>

            <p className="text-xl mb-8 leading-relaxed" style={{ color: '#383838' }}>
              Contact me today to book your session and discover why so many professionals trust me with their headshot photography needs. Join my growing list of satisfied clients and unveil the perfect professional headshots that truly represent you.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Ready for Your Professional Headshot Session?</h3>
            <p className="text-xl mb-6 leading-relaxed" style={{ color: '#383838' }}>
              Let&apos;s create headshots that make a lasting impression and elevate your professional brand.
            </p>
            <Link
              href="/#services"
              className="text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              style={{ backgroundColor: '#5577a5' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
            >
              Schedule Your Session
            </Link>
          </div>

          {/* Related Posts */}
          <RelatedPosts posts={[
            {
              title: "WHY HIRE A PROFESSIONAL HEADSHOT PHOTOGRAPHER",
              excerpt: "Discover the key benefits of investing in a professional headshot photographer. Learn about education, experience, equipment, and artistic expertise.",
              slug: "why-hire-a-professional-headshot-photographer",
              image: "https://images.cmqheadshots.com/images/blog/optimized/why-hire-professional-main-optimized.webp"
            },
            {
              title: "HOW TO PREP FOR YOUR BEST PROFESSIONAL HEADSHOT",
              excerpt: "Booking your professional headshot session is an investment in yourself, your career, and your future. Learn essential preparation tips for the best results.",
              slug: "how-to-prep-for-your-best-professional-headshot",
              image: "https://images.cmqheadshots.com/images/blog/optimized/Prepare590398367-1600-optimized.webp"
            },
            {
              title: "WHY I SHOOT HEADSHOTS HORIZONTALLY",
              excerpt: "The common uses for headshots dictate that they will be seen in a small format. Learn why horizontal framing maximizes the impact of your professional headshot.",
              slug: "why-i-shoot-headshots-horizontally",
              image: "https://images.cmqheadshots.com/images/blog/optimized/horizontal-headshots-main-optimized.webp"
            }
          ]} />

          {/* Navigation */}
          <BlogNavigation
            nextPost={{
              title: "WHY HIRE A PROFESSIONAL HEADSHOT PHOTOGRAPHER",
              slug: "why-hire-a-professional-headshot-photographer"
            }}
          />
        </article>
      </div>
    </Layout>
  )
}