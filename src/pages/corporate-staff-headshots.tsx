import Layout from '@/components/Layout'
import Link from 'next/link'
import GetPricingButton from '@/components/GetPricingButton'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import LogoCarousel from '@/components/sections/LogoCarousel'
import FourStepProcess from '@/components/sections/FourStepProcess'
import FiveImageRow from '@/components/sections/FiveImageRow'
import FourImageRow from '@/components/sections/FourImageRow'
import { Star, Check, ArrowRight, Calendar, Camera, Users, Download, Mail, Phone } from 'lucide-react'

export default function CorporateStaff() {
  return (
    <Layout 
      title="Corporate Staff Headshots | Professional Team Photography"
      description="Corporate staff headshots without the hassle. Professional on-site team photography for your entire staff."
      showHeaderButton={true}
    >
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] bg-white">
        <div className="absolute inset-0">
          <img 
            src="/images/website media/BTS-at-Kierland-20210154-scaled.webp"
            alt="Corporate headshot session in progress"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative h-full flex items-center justify-center" style={{ paddingTop: '60px' }}>
          <div className="w-full px-4 text-center">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 font-bold drop-shadow-lg" style={{ color: '#ffffff' }}>
              CORPORATE STAFF<br />HEADSHOTS WITHOUT THE<br />HASSLE
            </h1>
            <GetPricingButton href="/contact" size="large">
              REQUEST QUOTE
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <TwoColumnSection
        title="QUICK AND EASY BUSINESS HEADSHOTS"
        description="You know your company needs staff headshots but you honestly don't want to deal with the hassle. The scheduling nightmare, the cost, the time away from work - it's so much.

I understand your need and can make it happen for you without all the hassle. I have my routine down. Whether your staff comes to me or I come to your location, you'll be pleasantly surprised at how quick and easy it is!"
        ctaText="GET QUOTE"
        ctaLink="/contact"
        imageUrl="/images/website media/jgp2-square-collage-3-2048x2048.webp"
        imageAlt="Corporate team headshots"
        backgroundColor="#f8f9fa"
      />

      {/* Five Image Row Section */}
      <FiveImageRow
        images={[
          { src: '/images/website media/CMQ HEADSHOTS - greystar-3.jpg', alt: 'Corporate headshot 1' },
          { src: '/images/website media/CMQ HEADSHOTS - greystar-2.jpg', alt: 'Corporate headshot 2' },
          { src: '/images/website media/CMQ HEADSHOTS - greystar-1.jpg', alt: 'Corporate headshot 3' },
          { src: '/images/website media/CMQ HEADSHOTS -Greystar-8a.jpg', alt: 'Corporate headshot 4' },
          { src: '/images/website media/CMQ HEADSHOTS - greystar-5.jpg', alt: 'Corporate headshot 5' }
        ]}
        backgroundColor="url('/images/website media/grey linen-background.jpg')"
        fullWidth={true}
      />

      {/* Custom Testimonial Section */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative">
            <img 
              src="/images/website media/CMQHeadshots-Quantcast1744.webp"
              alt="Corporate headshot session"
              className="w-full h-full object-cover"
            />
          </div>
            
            {/* Content */}
            <div className="flex items-center justify-center px-8 min-h-full" style={{ backgroundColor: '#95999f' }}>
              <div className="w-full py-8">
                <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-white text-center" style={{ color: 'white' }}>
                  WHAT OUR CLIENTS SAY
                </h2>
                <blockquote className="text-xl font-normal mb-8 font-raleway text-center text-white" style={{
                  fontWeight: '400',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  "Cindy exceeded our expectations for our 2-day corporate event (headshots for employees)! She arrived early and was prompt and prepared throughout. Our event required a lot of flexibility and Cindy was unfazed by the ever-changing schedule. Cindy was very personable with a variety of characters that make up our staff. You can tell Cindy has a knack for personality management in order to get the best shot. Cindy put each person at ease in their session and delivered the photos quickly. Highly recommend Cindy at CMQ Headshots!"
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

      {/* Four Image Row Section */}
      <FourImageRow
        images={[
          { src: '/images/website media/CMQHEADSHOTS-Bob-0621-headshot.jpg', alt: 'Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Lauren-0763-fullres.jpg', alt: 'Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Brayley-0718-fullres.jpg', alt: 'Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Adrian-0640-fullres.jpg', alt: 'Corporate headshot' }
        ]}
        backgroundColor="url('/images/website media/grey linen-background.jpg')"
        fullWidth={true}
      />

      {/* Company Logos Carousel Section */}
      <LogoCarousel
        title="TRUSTED BY LEADING COMPANIES"
        subtitle="We've provided professional headshots for teams across various industries"
        speed={40}
        rowCount={2}
        pauseOnHover={true}
      />

      {/* Second Five Image Row Section */}
      <FiveImageRow
        images={[
          { src: '/images/website media/CMQ HEADSHOTS - greystar-8.jpg', alt: 'Corporate headshot 6' },
          { src: '/images/website media/CMQ HEADSHOTS - greystar-9.jpg', alt: 'Corporate headshot 7' },
          { src: '/images/website media/CMQ HEADSHOTS - greystar-6.jpg', alt: 'Corporate headshot 8' },
          { src: '/images/website media/CMQ HEADSHOTS - greystar-4.jpg', alt: 'Corporate headshot 9' },
          { src: '/images/website media/CMQ HEADSHOTS - greystar-7.jpg', alt: 'Corporate headshot 10' }
        ]}
        backgroundColor="url('/images/website media/grey linen-background.jpg')"
        fullWidth={true}
      />

      {/* Stephanie Edelman Testimonial Section */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative">
            <img
              src="/images/website media/CMQHEADSHOTS-AlisonW-061.webp"
              alt="Stephanie Edelman professional headshot"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex items-center justify-center px-8 min-h-full">
            <div className="w-full py-16 text-center">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                WHAT OUR CLIENTS SAY
              </h2>
              <blockquote className="text-xl font-normal mb-8 font-raleway text-gray-700" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                "I hosted a women's conference in Scottsdale in December 2019 and hired CMQ to take headshots of attendees.
                <span className="font-bold"> She was so wonderful then that we engaged her to return in 2021.</span> It was once
                again a huge hit. The photos of every single person are absolutely beautiful. She really gets the most out of her subjects very quickly
                and efficiently. I'd <span className="font-bold">recommend her wholeheartedly for any event.</span>"
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
        title={<>Do you have a staff member that missed the headshot event?<br/>I can help!!<br/>I have made the process to fix this quick and easy</>}
        subtitle=""
      />

      {/* New 50/50 Section */}
      <section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Content */}
          <div className="flex items-center justify-center px-8 min-h-full">
            <div className="w-full py-16 text-center">
              <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                WHAT OUR CLIENTS SAY
              </h2>
              <blockquote className="text-xl font-normal mb-8 font-raleway text-gray-700" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                "We hired Cindy Quinn for our corporate headshots and she did not disappoint! The pictures were exceptional. We wanted a high-end look. We created a Wall of Fame to recognize our team, members' headshots displayed both confidence and personality. We like the fact that Cindy has her own studio so we can send our new hires to her to make sure the headshots all match going forward. Cindy was easy to work with and truly loves what she does, and it shows! We highly recommend that you use Cindy for your next headshot!"
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
            <img
              src="/images/website media/CMQHeadshots-Jo9108-right.webp"
              alt="Professional corporate headshot"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
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
            <script
              type="text/javascript"
              src="https://537178.17hats.com/vendor/iframeSizer.min.js"
            ></script>
          </div>
        </div>
      </section>

    </Layout>
  )
}