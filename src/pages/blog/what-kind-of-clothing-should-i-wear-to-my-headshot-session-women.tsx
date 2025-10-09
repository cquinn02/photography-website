import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function WomensHeadshotClothing() {
  return (
    <Layout
      title="Women's Headshot Clothing Guide | CMQ Headshots Phoenix"
      description="Professional clothing tips for women's headshots. Learn what to wear for classic, timeless business photos."
      canonical="https://www.cmqheadshots.com/blog/what-kind-of-clothing-should-i-wear-to-my-headshot-session-women"
      ogUrl="https://www.cmqheadshots.com/blog/what-kind-of-clothing-should-i-wear-to-my-headshot-session-women"
      ogImage="https://www.cmqheadshots.com/images/blog/womens-clothing-main.webp"
    >
      <div className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="text-sm">
              <Link href="/" className="font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>Home</Link>
              <span className="mx-2 text-gray-500">›</span>
              <Link href="/blog" className="font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>Blog</Link>
              <span className="mx-2 text-gray-500">›</span>
              <span className="text-gray-700">What kind of clothing should I wear to my headshot session – Women?</span>
            </nav>
          </div>
        </div>

        <article className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                Headshot Tips
              </span>
            </div>

            <h1 className="font-raleway text-3xl lg:text-4xl mb-6 leading-tight text-center uppercase" style={{ color: '#5577a5' }}>
              <span className="font-bold">WHAT KIND OF CLOTHING</span><br />
              <span className="font-normal">SHOULD I WEAR TO MY</span><br />
              <span className="font-normal">HEADSHOT SESSION – WOMEN?</span>
            </h1>

            <div className="aspect-video bg-white rounded-lg overflow-hidden mb-8 relative">
              <Image
                src="/images/blog/womens-clothing-main.webp"
                alt="Professional woman in business attire for headshot"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              This image will be used to represent you and/or your company/business so you need to dress accordingly. You&apos;ll want to wear professional business attire that is classic and timeless so you can use your photos for a couple of years.
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-center uppercase" style={{ color: '#5577a5' }}>This is just a guideline</h2>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5577a5' }}>Choosing the Right Top</h3>
            <p className="mb-6 text-[21px]">
              Women should wear a blouse or top that fits well, not loose or baggy. Not too tight or pulling. Do not wear a batwing shirt, it will make you look much bigger than you are. Stay away from large patterned shirts. A solid color is best.
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5577a5' }}>The Power of a Tailored Jacket</h3>
            <p className="mb-6 text-[21px]">
              A tailored jacket is worth its weight in gold, it can be added easily and quickly over a shirt or top. Bring a couple of jackets so you have some choices. I will help you decide what to wear. I will ask you to check your jacket for shoulder pads. Depending on the age of your jacket it may have huge shoulder pads that will only make you look bigger than you are in real photos.
            </p>
            <p className="mb-6 text-[21px]">
              If you have a colored jacket - navy, brown, grey - bring it along to mix and match with the shirts and tops you bring.
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5577a5' }}>Sleeve Length Matters</h3>
            <p className="mb-6 text-[21px]">
              It looks more professional to wear a long sleeve shirt for your headshot image. Long sleeves are much more flattering on arms than short sleeves.
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5577a5' }}>Comfort and Presentation</h3>
            <p className="mb-6 text-[21px]">
              A fellow headshot photographer, Robert Reed, from San Jose, CA, says you also want to be somewhat comfortable in what you&apos;re wearing or your picture will look stiff and unnatural. But be aware of clothing that wrinkles easily as that will look sloppy and unprofessional.
            </p>

            <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-center uppercase" style={{ color: '#5577a5' }}>What colors photograph best/worst?</h2>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5577a5' }}>Best Colors for Headshots</h3>
            <p className="mb-6 text-[21px]">
              Solid colors photograph best, and most people look good in mid tones like grey, green, blue, and brown. Try to wear something that will bring out the color of your eyes as well as enhance your skin tones.
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5577a5' }}>Colors to Avoid</h3>
            <p className="mb-6 text-[21px]">
              Be aware of colors that approximate your flesh tones - this might be beige, tan, or very pale peach and light pink. You should try to avoid these colors for your tops. Very bright reds, yellows, and oranges can also be distracting, but are fine under a jacket.
            </p>

            <h3 className="text-xl font-semibold mb-4" style={{ color: '#5577a5' }}>My Professional Recommendation</h3>
            <p className="mb-6 text-[21px]">
              In my humble opinion, a colorful sleeveless shell under a jacket is a great combination for professional women in Arizona.
            </p>
          </div>

          {/* Related Articles */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Complete Your Headshot Preparation:</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/what-kind-of-makeup-should-i-wear-to-my-headshot-session" className="underline font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>
                  Professional Makeup Guide for Headshots
                </Link>
              </li>
              <li>
                <Link href="/blog/dress-to-impress-mens-headshot-fashion-tips-for-business-success" className="underline font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>
                  Men&apos;s Fashion Tips for Business Success
                </Link>
              </li>
              <li>
                <Link href="/blog/why-hire-a-professional-headshot-photographer" className="underline font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>
                  Why Choose a Professional Photographer
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#5577a5' }}>Ready to Look Your Best?</h3>
            <p className="text-gray-600 mb-6">
              Book your professional headshot session and let&apos;s create images that represent the best version
              of your professional self. <Link href="/pricing" className="underline font-medium transition-colors" style={{ color: '#5577a5' }} onMouseEnter={(e) => e.currentTarget.style.color = '#575757'} onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}>View our pricing packages</Link> to find the perfect option for your needs.
            </p>
            <Link
              href="/contact"
              className="text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              style={{ backgroundColor: '#5577a5' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
            >
              Schedule Your Session
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              href="/blog"
              className="font-medium flex items-center transition-colors"
              style={{ color: '#5577a5' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
            >
              <svg className="mr-2 w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Back to Blog
            </Link>

            <Link
              href="/blog/dress-to-impress-mens-headshot-fashion-tips-for-business-success"
              className="font-medium flex items-center transition-colors"
              style={{ color: '#5577a5' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
            >
              Men&apos;s Fashion Tips
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </article>
      </div>
    </Layout>
  )
}