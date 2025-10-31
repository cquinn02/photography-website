import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import GetPricingButton from '@/components/GetPricingButton'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import LogoCarousel from '@/components/sections/LogoCarousel'
import FourStepProcess from '@/components/sections/FourStepProcess'
import FourStepProcessDrift from '@/components/sections/FourStepProcessDrift'
import FiveImageRow from '@/components/sections/FiveImageRow'
import FourImageRow from '@/components/sections/FourImageRow'
import InteractiveCompositeBuilder from '@/components/sections/InteractiveCompositeBuilder'
import { Star, Check, ArrowRight, Calendar, Camera, Users, Download, Mail, Phone, User, Wand2, Layers, RefreshCw } from 'lucide-react'

export default function CorporateStaffV2() {
  const scrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('request-quote')
    if (element) {
      const yOffset = -150 // Offset to show the title at top with more space
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <Layout
      title="Corporate Staff Headshots | Professional Team Photography"
      description="Corporate staff headshots without the hassle. Professional on-site team photography for your entire staff."
      canonical="https://www.cmqheadshots.com/corporate-staff-headshots"
      ogUrl="https://www.cmqheadshots.com/corporate-staff-headshots"
      showHeaderButton={true}
    >
      {/* Hero Section - Single responsive section */}
      <section className="relative bg-white" style={{ height: '100vh', minHeight: '600px', maxHeight: '800px', paddingTop: '30px' }}>
        {/* Desktop Background Image */}
        <div className="hidden lg:block absolute inset-0">
          <Image
            src="/images/website media/BTS-at-Kierland-20210154-scaled.webp"
            alt="Corporate headshot session in progress"
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
            src="/images/website media/BTS-corporate-mobile.webp"
            alt="Corporate headshot session in progress"
            fill
            className="object-cover"
            style={{ objectPosition: 'top' }}
            sizes="100vw"
            priority
          />
        </div>

        {/* Content - centered on desktop, bottom on mobile */}
        <div className="relative h-full flex flex-col justify-end lg:justify-center lg:items-center pb-16 lg:pb-0 px-6 lg:px-4 text-center" style={{ paddingTop: '60px' }}>
          <div className="w-full">
            <h1 className="font-raleway text-4xl lg:text-6xl xl:text-7xl leading-tight mb-8" style={{
              color: '#ffffff',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.4)'
            }}>
              <span className="font-black" style={{ fontWeight: '900' }}>CORPORATE STAFF</span><br />
              <span className="font-light" style={{ fontWeight: '300' }}>HEADSHOTS</span> <span className="font-black" style={{ fontWeight: '900' }}>WITHOUT</span> <span className="font-light" style={{ fontWeight: '300' }}>THE</span><br />
              <span className="font-black" style={{ fontWeight: '900' }}>HASSLE</span>
            </h1>
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

      {/* Two Column Section */}
      <TwoColumnSection
        title={
          <>
            <span className="font-bold">QUICK</span> AND <span className="font-bold">EASY</span> BUSINESS <span className="font-bold">HEADSHOTS</span>
          </>
        }
        description="You know your company needs staff headshots but you honestly don&apos;t want to deal with the hassle. The scheduling nightmare, the cost, the time away from work - it&apos;s so much.

I understand your need and can make it happen for you without all the hassle. I have my routine down. Whether your staff comes to me or I come to your location, you&apos;ll be pleasantly surprised at how quick and easy it is!"
        ctaText="GET QUOTE"
        ctaLink="#request-quote"
        imageUrl="/images/website media/jgp2-square-collage-3-2048x2048.webp"
        imageAlt="Corporate team headshots"
        backgroundColor="#F1F1F1"
        columnRatio="1-1"
        minHeight="650"
      />

      {/* Title and Big 4 Image Section */}
      <section className="text-center" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        paddingTop: '50px',
        paddingBottom: '50px'
      }}>
        <h2 className="font-raleway text-3xl lg:text-4xl mb-2 px-4" style={{ color: '#ffffff', fontWeight: '700' }}>
          <span style={{ fontWeight: '700' }}>STAFF HEADSHOTS</span> <span style={{ fontWeight: '400' }}>IN PHOENIX AND SCOTTSDALE ARIZONA</span>
        </h2>

        <FourImageRow
          images={[
            { src: '/images/website media/CMQHEADSHOTS-Bob-0621-headshot.jpg', alt: 'Bob - Corporate headshot' },
            { src: '/images/website media/CMQHEADSHOTS-Lauren-0763-fullres.jpg', alt: 'Lauren - Corporate headshot' },
            { src: '/images/website media/CMQHEADSHOTS-Brayley-0718-fullres.jpg', alt: 'Brayley - Corporate headshot' },
            { src: '/images/website media/CMQHEADSHOTS-Cody-0575-fullres.jpg', alt: 'Cody - Corporate headshot' }
          ]}
          backgroundColor="url('/images/website media/grey linen-background.jpg')"
          fullWidth={true}
        />

        <div className="container mx-auto px-4 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-xl text-white" style={{ lineHeight: '1.6', letterSpacing: '0.03em' }}>
              Looking for professional staff headshots in Phoenix and Scottsdale? CMQ Headshots specializes in corporate photography for businesses throughout the Valley. Whether you need individual headshots for your team or composite group photos, we deliver consistent, high-quality results that elevate your company&apos;s professional image. Serving Phoenix, Scottsdale, Tempe, and surrounding Arizona areas with on-location or in-studio sessions.
            </p>
          </div>
        </div>
      </section>

      {/* Team and Group Photos Title Section */}
      <section className="pt-8 pb-2 text-center" style={{ backgroundColor: '#F1F1F1' }}>
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

      {/* Continue with benefits section */}
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

      {/* Spencer Hopkin Testimonial Section */}
      <section style={{ backgroundColor: '#575757', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-0">
          {/* Image - order-1 on mobile (shows first) */}
          <div className="w-full relative order-1 lg:order-1" style={{ backgroundColor: '#575757' }}>
            <div className="relative" style={{ minHeight: '500px' }}>
              <div className="lg:hidden w-full h-full relative" style={{ minHeight: '500px' }}>
                <Image
                  src="/images/website media/CMQHeadshots-Quantcast1744-trans.png"
                  alt="Spencer Hopkin testimonial"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="hidden lg:block relative" style={{ minHeight: '650px' }}>
                <Image
                  src="/images/website media/CMQHeadshots-Quantcast1744-trans.png"
                  alt="Spencer Hopkin testimonial"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>

          {/* Content - order-2 on mobile (shows second) */}
          <div className="flex items-center justify-center px-6 lg:px-8 order-2 lg:order-2" style={{ backgroundColor: '#575757', paddingTop: '60px' }}>
            <div className="w-full pb-8">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-center uppercase" style={{ color: '#ffffff', fontWeight: '700' }}>
                WHAT MY CLIENTS SAY
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

      {/* Company Logos Carousel Section */}
      <LogoCarousel
        title="TRUSTED BY LEADING COMPANIES"
        subtitle="I have provided professional headshots for staff members across various industries"
        speed={40}
        rowCount={2}
        pauseOnHover={true}
      />

      {/* Stephanie Edelman Testimonial Section */}
      <section className="bg-white">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2 gap-0">
          {/* Image - order-1 on mobile (shows first) */}
          <div className="w-full relative order-1 lg:order-1" style={{ backgroundColor: '#ffffff' }}>
            <div className="relative" style={{ minHeight: '500px' }}>
              <div className="lg:hidden w-full h-full relative" style={{ minHeight: '500px' }}>
                <Image
                  src="/images/website media/CMQHEADSHOTS-AlisonW-061.webp"
                  alt="Stephanie Edelman testimonial"
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="hidden lg:block relative" style={{ minHeight: '650px' }}>
                <Image
                  src="/images/website media/CMQHEADSHOTS-AlisonW-061.webp"
                  alt="Stephanie Edelman testimonial"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>

          {/* Content - order-2 on mobile (shows second) */}
          <div className="flex items-center justify-center px-6 lg:px-8 min-h-full order-2 lg:order-2">
            <div className="w-full py-16">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-center uppercase" style={{ color: '#5577a5', fontWeight: '700' }}>
                WHAT MY CLIENTS SAY
              </h2>
              <blockquote className="text-xl font-normal mb-8 font-raleway text-center text-gray-700" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                &quot;I hosted a women&apos;s conference in Scottsdale in December 2019 and hired CMQ to take headshots of attendees.
                <span className="font-bold"> She was so wonderful then that we engaged her to return in 2021.</span> It was once
                again a huge hit. The photos of every single person are absolutely beautiful. She really gets the most out of her subjects very quickly
                and efficiently. I&apos;d <span className="font-bold">recommend her wholeheartedly for any event.</span>&quot;
              </blockquote>

              <div className="text-center">
                <p className="font-raleway text-lg font-semibold text-gray-800 mb-2">
                  — Stephanie Edelman
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

      {/* 4 Step Process Section with Drift Animation */}
      <FourStepProcessDrift
        backgroundColor="#575757"
        title={<>Do you have a <span className="font-bold uppercase" style={{ letterSpacing: '0.05em' }}>staff member that missed the headshot event</span>?<br />I can help!!<br />I made a process to fix this that is quick and easy</>}
        subtitle=""
      />

      {/* Megan Baez Testimonial Section */}
      <section style={{ backgroundColor: '#ffffff' }}>
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Content - left side on desktop */}
          <div className="flex items-center justify-center px-6 lg:px-8 min-h-full">
            <div className="w-full py-16">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-center uppercase" style={{ color: '#5577a5', fontWeight: '700' }}>
                WHAT MY CLIENTS SAY
              </h2>
              <blockquote className="text-xl font-normal mb-8 font-raleway text-center text-gray-700" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                &quot;We hired Cindy Quinn for our corporate headshots and she did not disappoint! The pictures were exceptional. We wanted a high-end look. We created a Wall of Fame to recognize our team, members&apos; headshots displayed both confidence and personality. We like the fact that Cindy has her own studio so we can send our new hires to her to make sure the headshots all match going forward. Cindy was easy to work with and truly loves what she does, and it shows! We highly recommend that you use Cindy for your next headshot!&quot;
              </blockquote>

              <div className="text-center">
                <p className="font-raleway text-lg font-semibold text-gray-800 mb-2">
                  — Megan Baez
                </p>
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image - right side on desktop, below text on mobile */}
          <div className="relative flex justify-center lg:block">
            <div className="w-11/12 lg:w-full relative" style={{ minHeight: '500px' }}>
              <Image
                src="/images/website media/CMQHeadshots-Jo9108-right.webp"
                alt="Megan Baez professional headshot"
                fill
                className="object-contain lg:object-cover"
                sizes="(max-width: 1024px) 92vw, 50vw"
              />
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