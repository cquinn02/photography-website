import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function WomensHeadshotClothing() {
  return (
    <Layout
      title="What kind of clothing should I wear to my headshot session – Women?"
      description="Professional business attire that is classic and timeless will ensure your photos remain relevant for years. Here&apos;s your complete guide to dressing for success."
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
              <span className="mx-3">•</span>
              <span>By Cindy Quinn</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              What kind of clothing should I wear to my headshot session – Women?
            </h1>

            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8 relative">
              <Image
                src="/images/blog/womens-clothing-main.webp"
                alt="Professional woman in business attire for headshot"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              This image will be used to represent you and/or your company/business so you need to dress accordingly. You&apos;ll want to wear professional business attire that is classic and timeless so you can use your photos for a couple of years.
            </p>

            <p className="mb-6">
              <strong>This is just a guideline;</strong>
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Women should wear a blouse or top that <strong>fits well, not loose or baggy. Not too tight or pulling. Do not wear a batwing shirt, it will make you look much bigger than you are.</strong></li>
              <li>Stay away from large patterned shirts. A solid color is best.</li>
              <li>A tailored jacket is worth its weight in gold, it can be added easily and quickly over a shirt or top, bring a couple of jackets so you have some choices. I will help you decide what to wear. I will ask you to check you jacket for shoulder pads. Depending on the age of you jacket it may have huge shoulder pads that will only make you look bigger than you are in real photos.</li>
              <li>Also if you have a colored jacket, navy, brown, grey bring it along to mix and match with the shirts/tops you bring.</li>
              <li>It looks more professional to wear a long sleeve shirt for your Headshot image. Long sleeves are much more flattering on arms than short sleeves.</li>
            </ul>

            <p className="mb-6">
              A fellow headshot photographer, Robert Reed, from San Jose, Ca, says you also want to be somewhat comfortable in what you&apos;re wearing or your picture will look stiff and unnatural. But be aware of clothing that wrinkles easily as that will look sloppy and unprofessional.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What colors photograph best/worst?</h3>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Solid colors photograph best, and most people look good in mid tones (grey, green, blue, brown, etc.).</li>
              <li>Try and wear something that will bring out the color of your eyes as well as enhance your skin tones.</li>
              <li>Be aware of colors that approximate your flesh tones (this might be beige, tan, or very pale peach and light pink) you should try and avoid these colors for your tops.</li>
              <li>Very bright reds, yellows, and oranges can also be distracting. but are fine under a jacket.</li>
            </ul>

            <p className="mb-6">
              In my humble opinion, a colorful sleeveless shell under a jacket is a great combination for the professional women in Arizona.
            </p>
          </div>

          {/* Related Articles */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Complete Your Headshot Preparation:</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/what-kind-of-makeup-should-i-wear-to-my-headshot-session" className="text-blue-600 hover:text-blue-700 underline">
                  Professional Makeup Guide for Headshots
                </Link>
              </li>
              <li>
                <Link href="/blog/dress-to-impress-mens-headshot-fashion-tips-for-business-success" className="text-blue-600 hover:text-blue-700 underline">
                  Men&apos;s Fashion Tips for Business Success
                </Link>
              </li>
              <li>
                <Link href="/blog/why-hire-a-professional-headshot-photographer" className="text-blue-600 hover:text-blue-700 underline">
                  Why Choose a Professional Photographer
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Look Your Best?</h3>
            <p className="text-gray-600 mb-6">
              Book your professional headshot session and let&apos;s create images that represent the best version
              of your professional self. <Link href="/pricing" className="text-blue-600 hover:text-blue-700 underline">View our pricing packages</Link> to find the perfect option for your needs.
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

            <Link
              href="/blog/dress-to-impress-mens-headshot-fashion-tips-for-business-success"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
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