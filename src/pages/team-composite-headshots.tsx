import Layout from '@/components/Layout'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'
import InteractiveCompositeBuilder from '@/components/sections/InteractiveCompositeBuilder'
import { Star, Check, User, Wand2, Layers, RefreshCw } from 'lucide-react'

export default function TeamCompositeHeadshots() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('request-quote')
    if (element) {
      const yOffset = -150
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <Layout
      title="Team Composite Headshots | Group Photo Photography Phoenix"
      description="Team composite headshots for businesses in Phoenix and Scottsdale. Add or remove staff easily without expensive reshoots."
      canonical="https://www.cmqheadshots.com/team-composite-headshots"
      ogUrl="https://www.cmqheadshots.com/team-composite-headshots"
      showHeaderButton={true}
    >
      {/* Hero Section - Single responsive section with swapped background images */}
      <section className="relative" style={{ height: '100vh', minHeight: '600px', maxHeight: '800px', paddingTop: '30px' }}>
        {/* Desktop Background Image */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="https://images.cmqheadshots.com/images/website%20media/CMQHEADSHOTS-ims%20sales-2x1A.webp"
            alt="Professional team composite headshot in Phoenix"
            title="Team composite headshot photography"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Mobile Background Image */}
        <div className="lg:hidden absolute inset-0" style={{ top: '30px' }}>
          <Image
            src="https://images.cmqheadshots.com/images/website%20media/BTS-corporate-mobile.webp"
            alt="Team composite headshot session"
            fill
            className="object-cover"
            style={{ objectPosition: 'top' }}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content - shared across desktop and mobile */}
        <div className="relative h-full flex flex-col justify-end lg:justify-center lg:items-center pb-16 lg:pb-0 px-6 lg:px-4 text-center" style={{ paddingTop: '60px' }}>
          <div className="w-full">
            <h1 className="font-raleway text-4xl lg:text-6xl xl:text-7xl leading-tight mb-8" style={{
              color: '#ffffff',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
            }}>
              <span className="font-black" style={{ fontWeight: '900' }}>TEAM COMPOSITE</span><br />
              <span className="font-light" style={{ fontWeight: '300' }}>HEADSHOTS</span>
            </h1>
            <p className="font-raleway text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto" style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)'
            }}>
              Flexible group photography for growing businesses
            </p>
            <a
              href="#request-quote"
              onClick={scrollToQuote}
              className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 !text-[22px]"
              style={{
                fontWeight: '400',
                backgroundColor: '#5577a5',
                borderColor: '#5577a5',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757'
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5577a5'
                e.currentTarget.style.borderColor = '#5577a5'
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              GET QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* Team and Group Photos Title Section */}
      <section className="pt-12 pb-4 text-center" style={{ backgroundColor: '#F1F1F1' }}>
        <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
          <span className="font-bold">TEAM AND GROUP</span> <span className="font-light">PHOTOS AND COMPOSITES</span>
        </h2>
      </section>

      {/* Step-by-Step Process Section */}
      <section className="pt-4 pb-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="font-raleway text-lg mb-12 text-gray-700 leading-relaxed text-center">
              Upgrade your company&apos;s image with flexible, composite team photography—perfect for fast-growing businesses in Phoenix, Scottsdale, and the Valley. Add or remove staff easily, no need for expensive group reshoots or complex scheduling.
            </p>

            {/* 4-Step Process Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {/* Step 1 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#5577a5' }}>
                  <User className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ backgroundColor: '#e3f2fd', color: '#5577a5' }}>Step 1</span>
                </div>
                <h3 className="font-raleway text-lg font-bold text-center mb-3" style={{ color: '#5577a5' }}>
                  Individual Sessions
                </h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  Each team member photographed individually with consistent lighting and professional setup.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#5577a5' }}>
                  <Wand2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ backgroundColor: '#e3f2fd', color: '#5577a5' }}>Step 2</span>
                </div>
                <h3 className="font-raleway text-lg font-bold text-center mb-3" style={{ color: '#5577a5' }}>
                  Expert Retouching
                </h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  Professional editing ensures every team member looks their best with unified color and style.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#5577a5' }}>
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ backgroundColor: '#e3f2fd', color: '#5577a5' }}>Step 3</span>
                </div>
                <h3 className="font-raleway text-lg font-bold text-center mb-3" style={{ color: '#5577a5' }}>
                  Seamless Compositing
                </h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  Individual photos artfully combined into a cohesive team image that looks naturally composed.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto" style={{ backgroundColor: '#5577a5' }}>
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <div className="text-center mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2" style={{ backgroundColor: '#e3f2fd', color: '#5577a5' }}>Step 4</span>
                </div>
                <h3 className="font-raleway text-lg font-bold text-center mb-3" style={{ color: '#5577a5' }}>
                  Easy Updates
                </h3>
                <p className="text-gray-700 text-center text-sm leading-relaxed">
                  Add or remove staff anytime without expensive reshoots—we update your composite as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Composite Builder */}
      <InteractiveCompositeBuilder />

      {/* Benefits Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Key Benefits */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="font-raleway text-center mb-6" style={{ color: '#5577a5', fontSize: '30px', fontWeight: '700' }}>
                Why Choose Composite Team Photography?
              </h3>
              <div className="grid md:grid-cols-2 gap-6" style={{ fontSize: '20px' }}>
                <div className="flex items-start">
                  <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                  <div>
                    <strong className="font-semibold text-gray-900">Scalable & Cost-Effective:</strong>
                    <span className="text-gray-700"> Pay only for new or departing members</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                  <div>
                    <strong className="font-semibold text-gray-900">Effortless Scheduling:</strong>
                    <span className="text-gray-700"> Sessions fit around each employee&apos;s availability</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                  <div>
                    <strong className="font-semibold text-gray-900">Consistent Quality:</strong>
                    <span className="text-gray-700"> Unified look with professional lighting for everyone</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: '#5577a5' }} />
                  <div>
                    <strong className="font-semibold text-gray-900">Future-Proof:</strong>
                    <span className="text-gray-700"> Adapts with every change to maintain a current image</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="font-raleway text-xl font-bold text-gray-700 leading-relaxed text-center mt-8 uppercase">
              This service is ideal for businesses with multiple locations or frequent staffing changes.
            </p>

            <hr className="border-t-2 border-gray-300 my-8" />

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-raleway text-4xl lg:text-5xl mb-6 font-medium uppercase" style={{ color: '#5577a5', fontWeight: '500' }}>
                MY Team Composite Process
              </h2>
              <div className="space-y-4">
                <p className="font-raleway text-xl text-gray-700" style={{ lineHeight: '1.6' }}>
                  Your session can take place at your office or in my studio—whichever is most convenient. I start by capturing individual headshots, focusing on great expressions and natural poses. Next, I photograph each team member full-length, ensuring everyone looks their best.
                </p>
                <p className="font-raleway text-xl text-gray-700" style={{ lineHeight: '1.6' }}>
                  After your session, each person selects their favorite headshot for professional editing. I then create polished team composites and send draft galleries for your review and feedback. You&apos;re welcome to request up to two rounds of adjustments so the final images perfectly match your expectations.
                </p>
                <p className="font-raleway text-xl text-gray-700" style={{ lineHeight: '1.6' }}>
                  Once approved, you&apos;ll receive your high-resolution team and headshot images ready to use across your website and marketing materials.
                </p>
              </div>
            </div>

            <hr className="border-t-2 border-gray-300 mt-8" />

            <p className="font-raleway text-lg font-semibold text-center mt-8" style={{ color: '#5577a5' }}>
              Contact me today for a free team photography consultation!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section style={{ backgroundColor: '#575757', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="w-full relative order-1 lg:order-1" style={{ backgroundColor: '#575757' }}>
            <div className="relative" style={{ minHeight: '500px' }}>
              <div className="lg:hidden w-full h-full relative" style={{ minHeight: '500px' }}>
                <Image
                  src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-Quantcast1744-trans-optimized.webp"
                  alt="Spencer Hopkin testimonial"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="hidden lg:block relative" style={{ minHeight: '650px' }}>
                <Image
                  src="https://images.cmqheadshots.com/images/website%20media/optimized/CMQHeadshots-Quantcast1744-trans-optimized.webp"
                  alt="Spencer Hopkin testimonial"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex items-center justify-center px-6 lg:px-8 order-2 lg:order-2" style={{ backgroundColor: '#575757', paddingTop: '60px' }}>
            <div className="w-full pb-8">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-center uppercase" style={{ color: '#ffffff', fontWeight: '700' }}>
                CLIENT TESTIMONIALS
              </h2>
              <blockquote className="text-xl font-normal mb-8 font-raleway text-center text-white" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                &quot;Cindy exceeded our expectations for our 2-day corporate event (headshots for employees)! She arrived early and was prompt and prepared throughout. Our event required a lot of flexibility and Cindy was unfazed by the ever-changing schedule. Cindy was very personable with a variety of characters that make up our staff. You can tell Cindy has a knack for personality management in order to get the best shot. Cindy put each person at ease in their session and delivered the photos quickly. Highly recommend Cindy at CMQ Headshots!&quot;
              </blockquote>

              <div className="text-center">
                <p className="font-raleway text-lg font-semibold text-white mb-2">
                  — Spencer Hopkin
                </p>
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="request-quote" className="py-16" style={{ backgroundColor: '#D0D0D0', scrollMarginTop: '150px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-4 uppercase" style={{ color: '#5577a5', fontWeight: '500' }}>
                Request a Quote
              </h2>
              <p className="font-raleway text-xl" style={{ color: '#5577a5' }}>
                Fill in as much information as possible for an accurate quote
              </p>
            </div>
            <iframe
              name="lc_contact_form"
              frameBorder="0"
              width="100%"
              height="600"
              src="https://537178.17hats.com/p#/embed/gttwshbvskvcgtfvsxskwkchdbgtbphg"
            ></iframe>
            <Script
              src="https://537178.17hats.com/vendor/iframeSizer.min.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </section>

    </Layout>
  )
}
