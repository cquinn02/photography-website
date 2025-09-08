import Layout from '@/components/Layout'
import Link from 'next/link'
import GetPricingButton from '@/components/GetPricingButton'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import LogoCarousel from '@/components/sections/LogoCarousel'
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
            <div className="flex items-center justify-center px-8 min-h-full">
              <div className="w-full py-8">
                <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-6 text-cmq-blue text-center">
                  WHAT OUR CLIENTS SAY
                </h2>
                <blockquote className="text-xl font-light mb-8 font-raleway text-center text-cmq-gray-dark" style={{
                  fontWeight: '300',
                  letterSpacing: '0.03em',
                  lineHeight: '1.6'
                }}>
                  "Cindy exceeded our expectations for our 2-day corporate event (headshots for employees)! She arrived early and was prompt and prepared throughout. Our event required a lot of flexibility and Cindy was unfazed by the ever-changing schedule. Cindy was very personable with a variety of characters that make up our staff. You can tell Cindy has a knack for personality management in order to get the best shot. Cindy put each person at ease in their session and delivered the photos quickly. Highly recommend Cindy at CMQ Headshots!"
                </blockquote>
                
                <div className="text-center">
                  <p className="font-raleway text-lg font-semibold text-gray-800 mb-2">
                    — Spencer Hopkin
                  </p>
                  <div className="flex justify-center mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <GetPricingButton href="/contact" size="large">
                    GET QUOTE
                  </GetPricingButton>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Company Logos Carousel Section */}
      <LogoCarousel 
        title="TRUSTED BY LEADING COMPANIES"
        subtitle="We've provided professional headshots for teams across various industries"
        speed={40}
        rowCount={2}
        pauseOnHover={true}
      />

      {/* Stephanie Edelman Testimonial Section */}
      <section className="relative py-20" style={{ backgroundColor: '#e8e9eb' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            {/* Image */}
            <div className="lg:w-1/3">
              <img 
                src="/images/website media/CMQHeadshots-5855a female headshot.webp"
                alt="Stephanie Edelman professional headshot"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            
            {/* Testimonial Content */}
            <div className="lg:w-2/3">
              <blockquote className="text-lg lg:text-xl leading-relaxed mb-8 text-gray-800">
                "I hosted a women's conference in Scottsdale in December 2019 and hired CMQ to take headshots of attendees. 
                <span className="font-bold"> She was so wonderful then that we engaged her to return in 2021.</span> It was once 
                again a huge hit. The photos of every single person are absolutely beautiful. She really gets the most out of her subjects very quickly 
                and efficiently. I'd <span className="font-bold">recommend her wholeheartedly for any event.</span>"
              </blockquote>
              
              <div className="text-center lg:text-left">
                <p className="font-semibold text-xl mb-2 text-gray-900">Stephanie Edelman</p>
                <div className="flex justify-center lg:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative curved background elements */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{ 
          clipPath: 'ellipse(100% 100% at 50% 0%)'
        }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ 
          clipPath: 'ellipse(100% 100% at 50% 100%)'
        }}></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl md:text-4xl mb-6" style={{ color: '#5a81b9' }}>
              <span className="font-light">PROFESSIONAL HEADSHOTS FOR YOUR</span> <span className="font-bold">ENTIRE TEAM</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We specialize in corporate team headshots that maintain consistency across your organization. 
              Our efficient process means minimal disruption while ensuring every team member gets a 
              professional portrait that represents your brand perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* First Testimonial */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic text-center mb-6">
                "CMQ Headshots made our company-wide headshot update incredibly easy. They came to our office, 
                set up quickly, and photographed our entire team of 50+ employees in just one day. The results 
                were consistent, professional, and everyone loved their photos!"
              </blockquote>
              <cite className="block text-center text-gray-600 font-semibold">
                - Sarah Johnson, HR Director at TechCorp
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* New Staff Headshot Program Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-raleway text-3xl md:text-4xl text-center mb-12" style={{ color: '#5a81b9' }}>
              <span className="font-bold">NEW STAFF HEADSHOT PROGRAM</span>
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5a81b9' }}>
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ color: '#5a81b9' }}>SCHEDULE</h4>
                <p className="text-gray-600 text-sm">
                  Book a convenient time for your team's headshot session
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5a81b9' }}>
                  <Camera className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ color: '#5a81b9' }}>WE ARRIVE</h4>
                <p className="text-gray-600 text-sm">
                  Professional setup in your office within 30 minutes
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5a81b9' }}>
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ color: '#5a81b9' }}>PHOTOGRAPH</h4>
                <p className="text-gray-600 text-sm">
                  5-10 minutes per person, minimal workflow disruption
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#5a81b9' }}>
                  <Download className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2" style={{ color: '#5a81b9' }}>DELIVER</h4>
                <p className="text-gray-600 text-sm">
                  Edited photos delivered within 48-72 hours
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <GetPricingButton href="/contact" size="large">
                GET STARTED TODAY
              </GetPricingButton>
            </div>
          </div>
        </div>
      </section>

      {/* Second Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-lg text-gray-700 italic text-center mb-6">
                "The convenience of having a professional photographer come to our office was invaluable. 
                Our team members could get their headshots done during a quick break, and the consistent 
                lighting and background made our website and LinkedIn profiles look incredibly cohesive."
              </blockquote>
              <cite className="block text-center text-gray-600 font-semibold">
                - Michael Chen, CEO of Innovation Labs
              </cite>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}