import Layout from '@/components/Layout'
import Link from 'next/link'

export default function WhatToWearHeadshotSession() {
  return (
    <Layout
      title="What to wear to your headshot session"
      description="Complete guide on what to wear for your professional headshot session. Learn about colors, styles, fit, and accessories that work best on camera."
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
              <span className="text-gray-700">What to wear to your headshot session</span>
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
              What to wear to your headshot session
            </h1>

            <div className="bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img
                src="/images/blog/What%20to%20wear.jpg"
                alt="Professional clothing for headshot session"
                className="w-full h-auto"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Clothing is the topic I get the most questions about. Try not to get hung up on the wardrobe (pun intended).
              The most important thing is to bring clothes you love wearing. If you wear something that you don&apos;t feel
              good in, your discomfort will show in your expression. If you don&apos;t love it, don&apos;t bring it.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Tip:</h4>
              <p className="text-gray-700">
                I shoot tethered into a laptop during your headshot session, so we can usually tell if something
                looks good or not within a couple of shots. It&apos;s better to bring a few options just in case
                something doesn&apos;t photograph the way you thought it would. Sometimes it&apos;s the shirt or tie you
                weren&apos;t planning on bringing that ends up being your favorite look from the shoot!
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Essential Clothing Guidelines</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Colors That Work Best</h3>
            <p className="mb-4">Choose colors that photograph beautifully and complement your skin tone:</p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Recommended Colors</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Blues:</strong> Navy, royal blue, and medium blues</li>
                  <li><strong>Grays:</strong> Charcoal and medium gray tones</li>
                  <li><strong>Green:</strong> Forest green and deep emerald</li>
                  <li><strong>Magenta:</strong> Rich magenta and deep rose</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Colors to Avoid</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Clothing with distracting patterns</li>
                  <li>Overly bright colors</li>
                  <li>Neon or fluorescent colors</li>
                  <li>Colors that match your skin tone</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Fabric and Fit Considerations</h3>
            <p className="mb-4">The right fabric and fit can make a significant difference in your headshots:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Avoid thin fabrics:</strong> Be careful with materials that might become see-through under studio lights</li>
              <li><strong>Bring appropriate undergarments:</strong> Choose colors that won&apos;t show through your clothing</li>
              <li><strong>Avoid loose and baggy clothing:</strong> Well-fitted clothing looks more professional</li>
              <li><strong>Choose quality fabrics:</strong> Natural fibers often photograph better than synthetics</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Necklines and Styles</h3>
            <p className="mb-4">The right neckline can enhance your appearance and complement your face shape:</p>

            <div className="bg-yellow-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Neckline Guidelines:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Avoid scoop necks:</strong> These can make shoulders appear wider</li>
                <li><strong>Avoid V-necks and deep plunging necklines:</strong> These can be distracting</li>
                <li><strong>Choose classic necklines:</strong> Crew necks, button-downs, and modest necklines work best</li>
                <li><strong>Consider your body type:</strong> Choose styles that flatter your specific shape</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Specific Recommendations</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Attire</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Dress shirts:</strong> Wear properly fitting dress shirts with crisp collars</li>
              <li><strong>Jackets and blazers:</strong> Ensure they fit well through the shoulders and chest</li>
              <li><strong>Avoid uneven shoulder pads:</strong> Check that jackets lay properly</li>
              <li><strong>For men:</strong> Avoid undershirts that bunch and create wrinkles</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Casual Professional Options</h3>
            <p className="mb-6">
              For a more relaxed professional look, consider well-fitted polo shirts, quality sweaters,
              or casual button-down shirts. The key is maintaining a polished appearance while showing
              your personality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Accessories</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Leave at Home</h3>
            <p className="mb-4">Keep accessories minimal to maintain focus on your face:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Most jewelry:</strong> Large or distracting pieces should be left at home</li>
              <li><strong>Hats:</strong> Generally not appropriate for professional headshots</li>
              <li><strong>Scarves:</strong> Can be distracting and take focus away from your face</li>
              <li><strong>Bold patterns:</strong> Avoid ties or accessories with busy designs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Bring</h3>
            <p className="mb-4">Some accessories can enhance your professional appearance:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Glasses:</strong> If you wear them regularly, bring them along</li>
              <li><strong>Extra pairs:</strong> Bring multiple pairs if you have different styles</li>
              <li><strong>Simple jewelry:</strong> Wedding rings, simple watches, or classic pieces</li>
              <li><strong>Professional pins:</strong> If relevant to your industry or role</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Planning Your Wardrobe</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Bring to Your Session</h3>
            <p className="mb-4">Come prepared with multiple options:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>2-3 different tops or shirts</li>
              <li>A jacket or blazer option</li>
              <li>Both formal and business casual choices</li>
              <li>Different color options</li>
              <li>Backup accessories</li>
            </ul>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Pre-Session Checklist:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Try on all outfits beforehand</li>
                <li>Check for wrinkles and iron if needed</li>
                <li>Ensure all clothing fits properly</li>
                <li>Test different combinations</li>
                <li>Take practice photos with your phone</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Final Tips for Success</h2>

            <p className="mb-6">
              Remember, your headshot should represent the professional you. Choose clothing that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Makes you feel confident and comfortable</li>
              <li>Reflects your industry and professional level</li>
              <li>Will remain timeless for several years</li>
              <li>Allows your personality to shine through</li>
              <li>Doesn&apos;t distract from your face and expression</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Remember:</h4>
              <p className="text-gray-700">
                The best outfit is one that makes you feel like the best version of yourself. When you&apos;re
                comfortable and confident in what you&apos;re wearing, it shows in your expression and body
                language, resulting in headshots that truly represent your professional brand.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Look Your Professional Best?</h3>
            <p className="text-gray-600 mb-6">
              Book your headshot session and let&apos;s create images that showcase your professionalism and personality.
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

            <div className="text-center">
              <p className="text-sm text-gray-500 mb-2">Related Articles</p>
              <div className="flex space-x-4">
                <Link
                  href="/blog/what-kind-of-clothing-should-i-wear-to-my-headshot-session-women"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  Women's Guide
                </Link>
                <Link
                  href="/blog/what-clothing-should-i-wear-for-my-headshot-men"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  Men's Guide
                </Link>
              </div>
            </div>
          </nav>
        </article>
      </div>
    </Layout>
  )
}