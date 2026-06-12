import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Eye, MessageSquare, UserCheck, Briefcase, TrendingUp, Users } from 'lucide-react'
import GetPricingButton from '@/components/GetPricingButton'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'

// Profile photos for the rotating mockup (optimized images)
const profilePhotos = [
  { src: 'https://images.cmqheadshots.com/images/website%20media/LinkedIn%20images%20/CMQHEADSHOTS-Britany%20Howell1600-a-linkedin-opt.jpg', alt: 'Professional LinkedIn headshot for women in Phoenix Arizona' },
  { src: 'https://images.cmqheadshots.com/images/website%20media/LinkedIn%20images%20/CMQHEADSHOTS-CC-linkedin-opt.jpg', alt: 'Executive LinkedIn profile photo Phoenix Arizona' },
  { src: 'https://images.cmqheadshots.com/images/website%20media/LinkedIn%20images%20/CMQHEADSHOTS-MannyP6265-linkedin-opt.jpg', alt: 'Business LinkedIn headshot Phoenix Arizona' },
  { src: 'https://images.cmqheadshots.com/images/website%20media/LinkedIn%20images%20/CMQHEADSHOTS-Peter1991-linkedin-opt.jpg', alt: 'Professional executive LinkedIn headshot Phoenix Arizona' },
  { src: 'https://images.cmqheadshots.com/images/website%20media/CMQ-headshots-CarolHerron-professional-phoenix-3375-leg-sq.webp', alt: 'Executive LinkedIn profile photo Phoenix Arizona' },
]

export default function LinkedInHeadshots() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % profilePhotos.length)
    }, 3000) // Change every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <Layout
      title="LinkedIn Headshots Phoenix | CMQ Headshots"
      description="Professional LinkedIn headshots in Phoenix, AZ. Pro photos get 21x more views and 36x more messages. Book your express LinkedIn session today in Phoenix."
      canonical="https://www.cmqheadshots.com/linkedin-headshots"
      ogUrl="https://www.cmqheadshots.com/linkedin-headshots"
      ogImage="https://images.cmqheadshots.com/images/website%20media/LinkedIn%20images%20/CMQHEADSHOTS-Peter1991-linkedin-opt.jpg"
      showHeaderContact={true}
    >

      {/* Service + BreadcrumbList Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "LinkedIn Headshots Phoenix",
            "image": "https://images.cmqheadshots.com/images/website%20media/LinkedIn%20images%20/CMQHEADSHOTS-Peter1991-linkedin-opt.jpg",
            "description": "Professional LinkedIn headshot photography in Phoenix, Arizona. Quick sessions with expert lighting and direction to help you stand out on LinkedIn.",
            "provider": {
              "@type": "ProfessionalService",
              "@id": "https://www.cmqheadshots.com",
              "name": "CMQ Headshots",
              "telephone": "+1-480-648-3429",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4405 W Phalen Dr",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85087",
                "addressCountry": "US"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Phoenix",
              "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
            },
            "serviceType": "LinkedIn Headshot Photography",
            "offers": {
              "@type": "Offer",
              "price": "300",
              "priceCurrency": "USD",
              "description": "LinkedIn Express session: 20-minute session, one professionally edited image, 48-hour delivery.",
              "url": "https://www.cmqheadshots.com/linkedin-headshots"
            },
            "url": "https://www.cmqheadshots.com/linkedin-headshots"
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cmqheadshots.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "LinkedIn Headshots Phoenix",
                "item": "https://www.cmqheadshots.com/linkedin-headshots"
              }
            ]
          }) }}
        />
      </Head>

      {/* Hero Section */}
      <section className="pt-8 pb-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl mb-4" style={{ color: '#5577a5', lineHeight: '1.2' }}>
              <span className="font-medium">LINKEDIN HEADSHOTS</span> <span className="font-normal">PHOENIX</span>
            </h1>
            <p className="font-raleway text-lg md:text-xl mb-8" style={{ color: '#000000', fontWeight: '400', letterSpacing: '0.05em' }}>
              Quick 20-Minute Session · 1 Edited Image · $300
            </p>

            {/* LinkedIn Profile Mockup */}
            <div className="max-w-2xl lg:max-w-3xl mx-auto mb-10">
              <div className="bg-white overflow-hidden" style={{ borderRadius: '20px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12), 0 0 4px rgba(0, 0, 0, 0.04)', border: '1px solid #e8e8e8' }}>
                {/* Banner Image - Phoenix Skyline */}
                <div className="h-40 md:h-48 relative overflow-hidden" style={{ backgroundColor: '#f3f4f6' }}>
                  <Image
                    src="https://images.cmqheadshots.com/images/website%20media/Phoenix%20skyline%20/Phoenix%20blue%20skyline.jpg"
                    alt="Phoenix Arizona skyline - LinkedIn headshot photographer location"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                    loading="lazy"
                  />
                </div>

                {/* Profile Content */}
                <div className="relative px-4 md:px-6 pb-4">
                  {/* Profile Photo - Rotating */}
                  <div className="absolute -top-12 md:-top-16 left-4 md:left-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white bg-gray-200 overflow-hidden relative" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      {profilePhotos.map((photo, index) => (
                        <div
                          key={index}
                          className="absolute inset-0 transition-opacity duration-1000"
                          style={{ opacity: index === currentPhotoIndex ? 1 : 0 }}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            sizes="128px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="pt-14 md:pt-20 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-xl md:text-2xl text-gray-900">Your Name</h3>
                      <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <p className="text-black text-sm md:text-base mb-1">Your Professional Headline | Making an Impact</p>
                    <p className="text-black text-xs md:text-sm mb-2">Greater Phoenix Area · <span className="text-blue-600">Contact info</span></p>
                    <p className="text-blue-600 text-xs md:text-sm font-medium mb-3">Your Call to Action</p>
                    <p className="text-black text-xs md:text-sm"><span className="text-blue-600 font-semibold">500+</span> connections</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-black mt-3 italic">See how your professional headshot appears on LinkedIn</p>
            </div>

            <p className="font-raleway text-lg md:text-xl mb-6 leading-relaxed text-black max-w-3xl mx-auto">
              Your LinkedIn profile photo works for you 24/7, 365 days a year. It is often the first impression you make on recruiters, clients, and business connections. I have been shooting LinkedIn headshots in Phoenix for over 14 years with 134+ five-star Google reviews.
            </p>
            <p className="font-raleway text-lg md:text-xl mb-8 leading-relaxed text-black max-w-3xl mx-auto">
              My Phoenix studio makes it easy. Walk in, get photographed, and walk out with a headshot that gets results. The whole thing takes about 20 minutes.
            </p>
            <GetPricingButton href="#pricing" size="large">
              GET PRICING
            </GetPricingButton>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: 'white' }}>
              <span className="font-medium">PROFESSIONAL LINKEDIN</span> <span className="font-normal">HEADSHOTS</span>
            </h2>
            <p className="font-raleway text-lg mt-4 max-w-3xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '400', lineHeight: '1.6' }}>
              Professional LinkedIn headshots make a measurable difference. Here is what the data shows.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8" style={{ backgroundColor: '#F1F1F1', borderRadius: '8px' }}>
              <Eye className="h-12 w-12 mx-auto mb-4" style={{ color: '#5577a5' }} />
              <p className="font-raleway text-5xl font-medium mb-2" style={{ color: '#5577a5' }}>21x</p>
              <p className="font-raleway text-xl" style={{ color: '#5577a5', fontWeight: '400' }}>
                More profile views with a professional photo
              </p>
            </div>
            <div className="text-center p-8" style={{ backgroundColor: '#F1F1F1', borderRadius: '8px' }}>
              <MessageSquare className="h-12 w-12 mx-auto mb-4" style={{ color: '#5577a5' }} />
              <p className="font-raleway text-5xl font-medium mb-2" style={{ color: '#5577a5' }}>36x</p>
              <p className="font-raleway text-xl" style={{ color: '#5577a5', fontWeight: '400' }}>
                More messages received on LinkedIn
              </p>
            </div>
            <div className="text-center p-8" style={{ backgroundColor: '#F1F1F1', borderRadius: '8px' }}>
              <UserCheck className="h-12 w-12 mx-auto mb-4" style={{ color: '#5577a5' }} />
              <p className="font-raleway text-5xl font-medium mb-2" style={{ color: '#5577a5' }}>70%</p>
              <p className="font-raleway text-xl" style={{ color: '#5577a5', fontWeight: '400' }}>
                Of recruiters reject candidates with poor photos
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.linkedin.com/pulse/why-your-linkedin-profile-picture-costing-you-job-how-chris-carlson/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-raleway text-sm underline hover:no-underline"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Source: LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-raleway text-3xl lg:text-4xl mb-8" style={{ color: '#5577a5' }}>
              <span className="font-medium">HEADSHOTS</span> <span className="font-normal">FOR LINKEDIN</span>
            </h2>
            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.7' }}>
              Good headshots for LinkedIn are not just about lighting and camera settings. They need to look like you on your best day. The kind of photo that makes someone want to click &quot;Connect.&quot; I have photographed over 3,000 professionals across Phoenix, Scottsdale, and the East Valley, and I know what works on the platform.
            </p>
            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.7' }}>
              I coach you through posing and expressions so you look natural and confident. <Link href="/phoenix-business-headshots" className="underline hover:no-underline" style={{ color: '#5577a5' }}>Executives</Link>, <Link href="/lawyer-headshots-phoenix" className="underline hover:no-underline" style={{ color: '#5577a5' }}>attorneys</Link>, <Link href="/realtor-headshots-phoenix" className="underline hover:no-underline" style={{ color: '#5577a5' }}>real estate agents</Link>, job seekers, recent graduates, I work with all of them. I will tell you exactly what to do in front of the camera.
            </p>
            <p className="font-raleway text-lg leading-relaxed" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.7' }}>
              My studio is in North Phoenix with free parking and a relaxed atmosphere. No awkward waiting rooms. Just a quick, professional experience that fits your busy schedule. If you are looking for the best LinkedIn headshots in Scottsdale or anywhere in the Valley, my studio is a short drive with easy freeway access from the 101 and I-17.
            </p>
          </div>
        </div>
      </section>

      {/* LinkedIn Express Package + What to Expect Combined */}
      <section id="pricing" className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">

            {/* Left Side - Pricing Card */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg">
              <div className="text-center">
                <h3 className="font-raleway text-3xl mb-2" style={{ color: '#5577a5' }}>
                  <span className="font-medium">LINKEDIN EXPRESS</span>
                </h3>
                <p className="font-raleway text-lg mb-8" style={{ color: '#000000', fontWeight: '400' }}>
                  Quick Professional Headshot
                </p>

                <div className="mb-10">
                  <div className="text-6xl mb-4" style={{ color: '#5577a5', fontWeight: '400' }}>
                    $300
                  </div>
                  <p className="font-raleway text-xl" style={{ color: '#000000', fontWeight: '400' }}>
                    Express Session + 1 Image
                  </p>
                </div>

                <div className="space-y-4 mb-10 text-left max-w-xs mx-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#000000', fontWeight: '400' }}>20-Minute Session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#000000', fontWeight: '400' }}>One Look / One Outfit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#000000', fontWeight: '400' }}>Studio Background</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#000000', fontWeight: '400' }}>Choose Your Favorite</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#000000', fontWeight: '400' }}>1 Edited Image Included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#000000', fontWeight: '400' }}>Delivered in 24-48 Hours</span>
                  </div>
                </div>

                <a
                  href="https://cmqheadshots.as.me/LinkedInExpress"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white font-raleway text-lg font-medium px-8 py-3 rounded transition-colors duration-300"
                  style={{ backgroundColor: '#5577a5' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#575757'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#5577a5'
                  }}
                >
                  BOOK NOW
                </a>

                <p className="font-raleway text-base italic mt-6" style={{ color: '#575757', fontWeight: '400' }}>
                  Need it faster? Same-day rush retouching available for $50.
                </p>
              </div>
            </div>

            {/* Right Side - What to Expect */}
            <div>
              <h2 className="font-raleway text-3xl lg:text-4xl mb-6 text-center lg:text-left" style={{ color: '#5577a5' }}>
                <span className="font-medium">WHAT TO EXPECT</span> <span className="font-normal">AT YOUR LINKEDIN HEADSHOT SESSION</span>
              </h2>
              <p className="font-raleway text-lg mb-8 text-center lg:text-left" style={{ color: '#000000', fontWeight: '400', lineHeight: '1.7' }}>
                Here is what to expect at your LinkedIn headshot session. The Express format is quick and efficient.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: '#5577a5' }}>
                    <p className="font-raleway text-xl font-bold" style={{ color: 'white' }}>1</p>
                  </div>
                  <div>
                    <p className="font-raleway text-lg font-medium mb-1" style={{ color: '#5577a5' }}>ARRIVE READY</p>
                    <p className="font-raleway text-base" style={{ color: '#000000', fontWeight: '400' }}>
                      Arrive with hair and makeup done, wearing your chosen outfit. Solid colors work best. Avoid busy patterns and logos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: '#5577a5' }}>
                    <p className="font-raleway text-xl font-bold" style={{ color: 'white' }}>2</p>
                  </div>
                  <div>
                    <p className="font-raleway text-lg font-medium mb-1" style={{ color: '#5577a5' }}>SESSION</p>
                    <p className="font-raleway text-base" style={{ color: '#000000', fontWeight: '400' }}>
                      20 minutes of professional headshots with coaching on posing and expressions. I&apos;ll make sure you look natural and confident.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: '#5577a5' }}>
                    <p className="font-raleway text-xl font-bold" style={{ color: 'white' }}>3</p>
                  </div>
                  <div>
                    <p className="font-raleway text-lg font-medium mb-1" style={{ color: '#5577a5' }}>PICK YOUR IMAGE</p>
                    <p className="font-raleway text-base" style={{ color: '#000000', fontWeight: '400' }}>
                      Review your images and choose your favorite. I&apos;ll professionally edit and retouch it for a polished final result.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: '#5577a5' }}>
                    <p className="font-raleway text-xl font-bold" style={{ color: 'white' }}>4</p>
                  </div>
                  <div>
                    <p className="font-raleway text-lg font-medium mb-1" style={{ color: '#5577a5' }}>DELIVERY</p>
                    <p className="font-raleway text-base" style={{ color: '#000000', fontWeight: '400' }}>
                      Your LinkedIn profile image (400 x 400 px) round in 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who Needs LinkedIn Headshots */}
      <section className="py-16" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl lg:text-4xl" style={{ color: '#5577a5' }}>
              <span className="font-medium">LINKEDIN</span> <span className="font-normal">PROFESSIONAL HEADSHOT</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center shadow-md" style={{ backgroundColor: '#F1F1F1' }}>
              <Briefcase className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway text-xl font-medium text-cmq-blue mb-2">JOB SEEKERS</h3>
              <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.5' }}>
                A professional LinkedIn photo increases your chances of getting contacted for interviews. Recruiters scroll fast. A good headshot makes them stop.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center shadow-md" style={{ backgroundColor: '#F1F1F1' }}>
              <TrendingUp className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway text-xl font-medium text-cmq-blue mb-2">EXECUTIVES</h3>
              <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.5' }}>
                Your LinkedIn professional headshot should match your experience. A polished profile photo reinforces your credibility with clients, boards, and stakeholders.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center shadow-md" style={{ backgroundColor: '#F1F1F1' }}>
              <Users className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway text-xl font-medium text-cmq-blue mb-2">ENTREPRENEURS</h3>
              <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.5' }}>
                Potential clients and partners check your LinkedIn before they ever meet you. A professional photo tells them you are serious about your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-medium">LINKEDIN HEADSHOT</span> <span className="font-normal">FAQ</span>
            </p>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>What if I&apos;m not photogenic?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  This type of headshot session is not for you. You need more time with me to help you learn how to pose and get more comfortable in front of the camera. I specialize in making people feel comfortable in front of the camera. I&apos;ll guide you through poses and expressions, and before you know it, you&apos;ll be relaxed and having fun.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>What should I wear for my LinkedIn headshot?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Wear what you would wear to meet an important client or for a job interview in your industry.
                  Solid colors photograph best. Avoid busy patterns, logos, and red unless it&apos;s your branding color.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>How long does a session take?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Just 20 minutes. Come ready with your hair and makeup done, outfit on. We&apos;ll capture your headshot, you&apos;ll choose your favorite from a few images, and you&apos;re on with your day.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>Can I use my headshot for other purposes?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  The LinkedIn Express delivers a 400px by 400px round image specifically sized for LinkedIn profile photos. If you need a larger or rectangular headshot for company websites, publications, or other marketing materials, check out my <Link href="/phoenix-business-headshots" className="text-cmq-blue underline hover:no-underline">full headshot sessions</Link>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>Where is your studio located?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  My studio is located in Phoenix, Arizona with easy access from Scottsdale, Tempe, Mesa, and the greater East Valley. There&apos;s plenty of free parking and the studio is designed to be a comfortable, relaxed environment so you can feel at ease during your session.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>How often should I update my LinkedIn headshot?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  LinkedIn recommends updating your profile photo every one to two years, or whenever your appearance changes significantly. An outdated photo can create a disconnect when you meet someone in person. Keeping your headshot current builds trust and shows you&apos;re active and engaged on the platform.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>How much do LinkedIn headshots cost in Phoenix?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Professional LinkedIn headshots in Phoenix typically range from $150 to $500 depending on the photographer and session length. My LinkedIn Express session is $300 and includes a 20-minute session with one professionally edited image delivered in 24-48 hours. Quick and simple if you just need a great LinkedIn profile photo without a full session.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>Are professional LinkedIn headshots worth it?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Absolutely. LinkedIn&apos;s own data shows that profiles with a professional photo receive 21x more views, 9x more connection requests, and 36x more messages. 70% of recruiters have rejected candidates based on unprofessional profile photos. A $300 headshot that helps you land a job, close a deal, or attract new clients pays for itself many times over.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-medium text-cmq-blue mb-2" style={{ fontWeight: '500' }}>Should I use AI headshots or hire a real photographer?</h3>
                <p className="font-raleway text-base text-black" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  AI headshot generators cost $29-$59 and can produce decent-looking images, but they often have flaws. Unnatural lighting, odd skin textures, or a generic look that does not match reality. When you meet someone in person and look nothing like your AI photo, it undermines trust. A professional headshot captures the real you with expert lighting and posing guidance. For a profile photo that represents you, real always wins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <ThreeReviewSection
        title=""
        reviews={[
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-2806-1x1-optimized.webp",
            imageAlt: "LinkedIn headshot client Thuyvu Ho",
            name: "THUYVU HO",
            review: "I'm a highly selective photographer too (I'm an amateur hobbyist) so when I met Cindy at an industry conference where we all got headshots, I knew right off the bat, she was the best of the best. She was IMPECCABLE at giving her subjects direction, made us feel gorgeous, and gave us extremely helpful tips. Since I've posted my new headshot at my work profile, I've received countless compliments.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/CMQHEADSHOTS-LisaS0258-optimized.webp",
            imageAlt: "LinkedIn headshot client KRUE Industrial",
            name: "KRUE INDUSTRIAL",
            review: "Cindy is a real pro. She made me feel confident and took her time to ensure we had just what we wanted. If you're serious about having a headshot that will convey your brand, look no further than CMQ Headshots.",
            stars: 5
          },
          {
            image: "https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo-optimized.webp",
            imageAlt: "LinkedIn headshot client Michael Millane",
            name: "MICHAEL MILLANE",
            review: "Cindy made this an easy, wonderful process from start to finish: booking, preparation, the 'shoot' and the final pictures themselves - which were exactly what I was looking for my online presence. A great service that exceeded my expectations - highly recommend.",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#5577a5' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl font-medium mb-4 uppercase" style={{ color: '#ffffff' }}>
            LINKEDIN HEADSHOTS NEAR ME
          </h2>
          <p className="font-raleway text-xl mb-4 max-w-3xl mx-auto" style={{ color: 'white', fontWeight: '400', lineHeight: '1.7' }}>
            Phoenix is one of the fastest-growing job markets in the country, and your LinkedIn profile is often the first thing a recruiter, client, or business connection sees.
          </p>
          <p className="font-raleway text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'white', fontWeight: '400', lineHeight: '1.7' }}>
            If you are searching for LinkedIn headshots near me in the Phoenix area, my studio is in North Phoenix with easy access from the 101 and I-17. The LinkedIn Express session takes 20 minutes, so you can knock it out on a lunch break. With 134+ five-star Google reviews and <Link href="/about" className="underline hover:no-underline" style={{ color: '#ffffff' }}>over 14 years of experience</Link>, I make the process quick and comfortable.
          </p>
          <GetPricingButton href="#pricing" size="xl" className="border-2 border-white">
            GET PRICING
          </GetPricingButton>
        </div>
      </section>

    </Layout>
  )
}
