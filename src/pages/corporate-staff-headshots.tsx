import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import GetPricingButton from '@/components/GetPricingButton'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import LogoCarousel from '@/components/sections/LogoCarousel'
import FourStepProcess from '@/components/sections/FourStepProcess'
import FiveImageRow from '@/components/sections/FiveImageRow'
import FourImageRow from '@/components/sections/FourImageRow'
import { Star, Check, ArrowRight, Calendar, Camera, Users, Download, Mail, Phone } from 'lucide-react'

export default function CorporateStaff() {
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
      showHeaderButton={true}
    >
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] bg-white">
        <div className="absolute inset-0">
          <Image
            src="/images/website media/BTS-at-Kierland-20210154-scaled.webp"
            alt="Corporate headshot session in progress"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center" style={{ paddingTop: '60px' }}>
          <div className="w-full px-4 text-center">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 font-bold drop-shadow-lg" style={{ color: '#ffffff' }}>
              CORPORATE STAFF<br />HEADSHOTS WITHOUT THE<br />HASSLE
            </h1>
            <a
              href="#request-quote"
              onClick={scrollToQuote}
              className="font-raleway font-normal inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 !text-[22px]"
              style={{
                fontWeight: '400',
                backgroundColor: '#5a81b9',
                borderColor: '#5a81b9'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#575757'
                e.currentTarget.style.borderColor = '#ffffff'
                e.currentTarget.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#5a81b9'
                e.currentTarget.style.borderColor = '#5a81b9'
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
        title="QUICK AND EASY BUSINESS HEADSHOTS"
        description="You know your company needs staff headshots but you honestly don&apos;t want to deal with the hassle. The scheduling nightmare, the cost, the time away from work - it&apos;s so much.

I understand your need and can make it happen for you without all the hassle. I have my routine down. Whether your staff comes to me or I come to your location, you&apos;ll be pleasantly surprised at how quick and easy it is!"
        ctaText="GET QUOTE"
        ctaLink="#request-quote"
        imageUrl="/images/website media/jgp2-square-collage-3-2048x2048.webp"
        imageAlt="Corporate team headshots"
        backgroundColor="#f8f9fa"
      />

      {/* Title Section */}
      <section className="pt-8 pb-2 text-center" style={{ backgroundColor: '#F1F1F1' }}>
        <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5a81b9' }}>
          <span className="font-bold">STAFF HEADSHOTS</span> <span className="font-light">IN PHOENIX AND SCOTTSDALE ARIZONA</span>
        </h2>
      </section>

      {/* Big 4 Image Section */}
      <FourImageRow
        images={[
          { src: '/images/website media/CMQHEADSHOTS-Cody-0575-fullres.jpg', alt: 'Cody - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Lauren-0763-fullres.jpg', alt: 'Lauren - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Bob-0621-headshot.jpg', alt: 'Bob - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Brayley-0718-fullres.jpg', alt: 'Brayley - Corporate headshot' }
        ]}
        backgroundColor="url('/images/website media/grey linen-background.jpg')"
        fullWidth={true}
      />

      {/* Team and Group Photos Title Section */}
      <section className="pt-8 pb-2 text-center" style={{ backgroundColor: '#F1F1F1' }}>
        <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5a81b9' }}>
          <span className="font-bold">TEAM AND GROUP</span> <span className="font-light">PHOTOS AND COMPOSITES</span>
        </h2>
      </section>

      {/* Scalable Team Photography Text Section */}
      <section className="pt-4 pb-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-raleway text-lg mb-8 text-gray-700 leading-relaxed">
              Upgrade your company&apos;s image with flexible, composite team photography—perfect for fast-growing businesses in Phoenix, Scottsdale, and the Valley. Add or remove staff easily, no need for expensive group reshoots or complex scheduling.
            </p>
            <div className="text-left max-w-3xl mx-auto mb-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="font-semibold">Scalable & Cost-Effective:</strong> Seamlessly update team images as your company evolves—pay only for new or departing members.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="font-semibold">Consistent Quality:</strong> Each team member photographed individually for impeccable lighting and a unified look.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="font-semibold">Effortless Scheduling:</strong> No need to gather everyone at once; sessions fit around each employee&apos;s availability.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">•</span>
                  <div>
                    <strong className="font-semibold">Future-Proof Solution:</strong> Your company portrait adapts with every change, maintaining a fresh, current business image.
                  </div>
                </li>
              </ul>
            </div>

            {/* Composite Images */}
            <div className="mb-8 space-y-6">
              <div>
                <div className="w-full max-w-4xl mx-auto rounded-lg shadow-lg relative aspect-[3/1]">
                  <Image
                    src="/images/website media/CMQHEADSHOTS-cmq composite4-thin.webp"
                    alt="Full team composite"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 font-raleway">Full team composite</p>
              </div>
              <div>
                <div className="w-full max-w-4xl mx-auto rounded-lg shadow-lg relative aspect-[3/1]">
                  <Image
                    src="/images/website media/CMQHEADSHOTS-ims sales thin.jpg"
                    alt="Sales team composite"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 font-raleway">Sales team composite</p>
              </div>
              <div>
                <div className="w-full max-w-4xl mx-auto rounded-lg shadow-lg relative aspect-[3/1]">
                  <Image
                    src="/images/website media/CMQHEADSHOTS-IMS service thin.jpg"
                    alt="Service team composite"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 font-raleway">Service composite</p>
              </div>
            </div>

            <p className="font-raleway text-lg text-gray-700 leading-relaxed mb-12">
              This service is ideal for businesses with multiple locations or frequent staffing changes.
            </p>

            <hr className="border-t-2 border-gray-300 mb-8" />

            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5a81b9' }}>
                <span className="font-normal">How my</span> <span className="font-bold">TEAM COMPOSITE</span> <span className="font-normal">process works</span>
              </h2>
              <div className="space-y-4 leading-relaxed">
                <p className="font-raleway font-medium" style={{ color: '#5a81b9' }}>
                  Your session can take place at your office or in my studio—whichever is most convenient. I start by capturing individual headshots, focusing on great expressions and natural poses. Next, I photograph each team member full-length, ensuring everyone looks their best.
                </p>
                <p className="font-raleway font-medium" style={{ color: '#5a81b9' }}>
                  After your session, each person selects their favorite headshot for professional editing. I then create polished team composites and send draft galleries for your review and feedback. You&apos;re welcome to request up to two rounds of adjustments so the final images perfectly match your expectations.
                </p>
                <p className="font-raleway font-medium" style={{ color: '#5a81b9' }}>
                  Once approved, you&apos;ll receive your high-resolution team and headshot images ready to use across your website and marketing materials.
                </p>
              </div>
            </div>

            <hr className="border-t-2 border-gray-300 mt-8" />

            <p className="font-raleway text-lg font-semibold text-center mt-8" style={{ color: '#5a81b9' }}>
              Contact me today for a free team photography consultation!
            </p>
          </div>
        </div>
      </section>

      {/* Custom Testimonial Section */}
      <section style={{ backgroundColor: '#575757', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
          {/* Image */}
          <div className="relative" style={{ backgroundColor: '#575757' }}>
            <Image
              src="/images/website media/CMQHeadshots-Quantcast1744-trans.png"
              alt="Corporate headshot session"
              fill
              className="object-cover"
              sizes="33vw"
            />
          </div>

            {/* Content */}
            <div className="flex items-center justify-center px-8" style={{ backgroundColor: '#575757', paddingTop: '60px' }}>
              <div className="w-full pb-8">
                <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-center uppercase" style={{ color: '#5a81b9', fontWeight: '700' }}>
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
        subtitle="We&apos;ve provided professional headshots for teams across various industries"
        speed={40}
        rowCount={2}
        pauseOnHover={true}
      />

      {/* Stephanie Edelman Testimonial Section */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/website media/CMQHEADSHOTS-AlisonW-061.webp"
              alt="Stephanie Edelman professional headshot"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>

          {/* Content */}
          <div className="flex items-center justify-center px-8 min-h-full">
            <div className="w-full py-16 text-center">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 uppercase" style={{ color: '#5a81b9', fontWeight: '700' }}>
                WHAT MY CLIENTS SAY
              </h2>
              <blockquote className="text-xl font-normal mb-8 font-raleway text-gray-700" style={{
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

      {/* 4 Step Process Section */}
      <FourStepProcess
        backgroundColor="#575757"
        title={<>Do you have a <span className="font-bold uppercase" style={{ letterSpacing: '0.05em' }}>STAFF MEMBER THAT MISSED THE HEADSHOT EVENT</span>?<br />I can help!!<br />I have made the process to fix this quick and easy</>}
        subtitle=""
      />

      {/* New 50/50 Section */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Content */}
          <div className="flex items-center justify-center px-8 min-h-full">
            <div className="w-full py-16 text-center">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 uppercase" style={{ color: '#5a81b9', fontWeight: '700' }}>
                WHAT MY CLIENTS SAY
              </h2>
              <blockquote className="text-xl font-normal mb-8 font-raleway text-gray-700" style={{
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

          {/* Image */}
          <div className="relative">
            <Image
              src="/images/website media/CMQHeadshots-Jo9108-right.webp"
              alt="Professional corporate headshot"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="request-quote" className="py-16 bg-white" style={{ scrollMarginTop: '150px' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#5a81b9' }}>
                Request a Quote
              </h2>
              <p className="font-raleway text-lg" style={{ color: '#5a81b9' }}>
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