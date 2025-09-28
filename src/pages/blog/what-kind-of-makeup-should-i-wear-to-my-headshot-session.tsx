import Layout from '@/components/Layout'
import Link from 'next/link'

export default function MakeupForHeadshotSession() {
  return (
    <Layout
      title="What Kind of Makeup Should I Wear to My Headshot Session?"
      description="A comprehensive guide to makeup for professional headshot sessions. Learn how to enhance your features and look your best on camera."
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
              <span className="text-gray-700">What Kind of Makeup Should I Wear to My Headshot Session?</span>
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
              What Kind of Makeup Should I Wear to My Headshot Session?
            </h1>

            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img
                src="/images/blog/makeup-headshot-main.jpg"
                alt="Professional makeup for headshot session"
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Makeup isn't just about looking good—it's about enhancing your natural features and ensuring your face is
              camera-ready. Professional headshots require makeup that evens out skin tone, enhances features, reduces
              shine, and boosts your confidence.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Makeup Matters for Headshots</h2>
            <p className="mb-6">
              Cameras can pick up even the slightest imperfections that our eyes might miss in person. Professional
              makeup for headshots serves several crucial purposes:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li><strong>Evens out skin tone:</strong> Creates a smooth, flawless base for the camera</li>
              <li><strong>Enhances features:</strong> Brings out your best qualities naturally</li>
              <li><strong>Reduces shine:</strong> Prevents unwanted reflections under studio lights</li>
              <li><strong>Boosts confidence:</strong> Looking your best helps you feel more confident during the session</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Step-by-Step Makeup Guide</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Prep Your Skin</h3>
            <p className="mb-4">Start with a clean canvas:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Cleanse your face thoroughly with a gentle cleanser</li>
              <li>Apply a lightweight, non-greasy moisturizer</li>
              <li>Use a primer to create a smooth base and help makeup last longer</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Perfect Your Base</h3>
            <p className="mb-4">Foundation is key to camera-ready skin:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Choose a foundation that matches your skin tone exactly</li>
              <li>Apply foundation evenly using a brush, sponge, or fingers</li>
              <li>Use concealer to cover any blemishes, dark circles, or redness</li>
              <li>Set your base with a translucent powder to prevent shine</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pro Tip:</h4>
              <p className="text-gray-700">
                Test your foundation in natural light before your session. What looks good indoors
                might appear different under professional studio lighting.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Highlight and Contour</h3>
            <p className="mb-4">Subtle sculpting enhances your natural bone structure:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Lightly contour the hollows of your cheeks, temples, and jawline</li>
              <li>Use highlighter on the high points: cheekbones, nose bridge, and forehead center</li>
              <li>Keep it subtle—the goal is enhancement, not dramatic transformation</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Eyes and Brows</h3>
            <p className="mb-4">Your eyes are the focal point of any headshot:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use neutral eyeshadow shades that complement your skin tone</li>
              <li>Apply eyeliner close to the lash line for definition</li>
              <li>Use mascara to make your lashes pop—consider waterproof formula</li>
              <li>Groom and fill in your eyebrows for a polished look</li>
              <li>Avoid overly dramatic eye makeup that might distract from your natural expression</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Lips and Cheeks</h3>
            <p className="mb-4">Add warmth and color to complete your look:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Apply a natural blush to the apples of your cheeks</li>
              <li>Choose a lip color that's one or two shades deeper than your natural lip tone</li>
              <li>Avoid overly glossy or very dark lip colors that might be distracting</li>
              <li>Consider matte or satin finishes for a professional appearance</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Final Touches</h3>
            <p className="mb-4">Lock in your look:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Use a setting spray to help your makeup last throughout the session</li>
              <li>Bring a touch-up kit with powder, lipstick, and blotting papers</li>
              <li>Take photos with your phone to see how your makeup looks on camera</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">What to Avoid</h2>
            <div className="bg-red-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Common Makeup Mistakes for Headshots:</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Overly shimmery or glittery eyeshadows that create unwanted reflections</li>
                <li>Heavy contouring that might look harsh under professional lighting</li>
                <li>Bright or neon colors that can be distracting</li>
                <li>Too much makeup—the goal is to look like the best version of yourself</li>
                <li>Forgetting to blend—harsh lines will be very apparent in high-resolution photos</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Professional vs. DIY</h2>
            <p className="mb-6">
              While you can certainly do your own makeup for a headshot session, consider hiring a professional
              makeup artist if:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>You're not comfortable applying makeup</li>
              <li>You want to ensure the best possible results</li>
              <li>You're investing significantly in your headshot session</li>
              <li>You have specific skin concerns or challenges</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Day-of-Session Tips</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Arrive with your makeup already applied, or allow extra time for touch-ups</li>
              <li>Bring your makeup kit for any necessary adjustments</li>
              <li>Avoid trying new products on the day of your shoot</li>
              <li>Stay hydrated and get a good night's sleep for the best skin</li>
              <li>Communicate with your photographer about the look you're going for</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              Remember, the goal of makeup for professional headshots is to enhance your natural beauty and
              ensure you look polished and professional. When done correctly, viewers should notice how
              great you look, not your makeup.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Complete Your Headshot Preparation:</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/what-kind-of-clothing-should-i-wear-to-my-headshot-session-women" className="text-blue-600 hover:text-blue-700 underline">
                    Women's Clothing Guide for Headshots
                  </Link>
                </li>
                <li>
                  <Link href="/blog/what-clothing-should-i-wear-for-my-headshot-men" className="text-blue-600 hover:text-blue-700 underline">
                    Men's Clothing Guide for Headshots
                  </Link>
                </li>
                <li>
                  <Link href="/blog/should-the-photographer-photoshop-you" className="text-blue-600 hover:text-blue-700 underline">
                    Understanding Professional Photo Editing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Look Camera-Ready?</h3>
            <p className="text-gray-600 mb-6">
              Book your professional headshot session and let's create images that showcase the best version of you.
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
              href="/blog/what-clothing-should-i-wear-for-my-headshot-men"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
            >
              Men's Clothing Tips
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