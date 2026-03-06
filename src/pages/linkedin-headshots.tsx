import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Eye, MessageSquare, UserCheck, Briefcase, TrendingUp, Users } from 'lucide-react'
import GetPricingButton from '@/components/GetPricingButton'
import FAQSchema from '@/components/FAQSchema'

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
      title="LinkedIn Headshots Phoenix, AZ | Professional Profile Photos | CMQ Headshots"
      description="Professional LinkedIn headshots in Phoenix, AZ. Profiles with pro photos get 21x more views and 36x more messages. Quick 20-minute session, 1 edited image, $300."
      canonical="https://www.cmqheadshots.com/linkedin-headshots"
      ogUrl="https://www.cmqheadshots.com/linkedin-headshots"
      showHeaderContact={true}
    >

      {/* FAQ Schema */}
      <FAQSchema faqs={[
        { question: "Why do I need a professional LinkedIn headshot?", answer: "LinkedIn profiles with professional photos receive 21x more profile views and 36x more messages. 70% of hiring managers have rejected candidates based on unprofessional profile photos. Your headshot is often the first impression you make." },
        { question: "What should I wear for my LinkedIn headshot?", answer: "Wear what you would wear to meet an important client or for a job interview in your industry. Solid colors photograph best. Avoid busy patterns, logos, and bright whites. I provide a consultation before your session to help you choose the perfect outfit." },
        { question: "How long does a LinkedIn headshot session take?", answer: "LinkedIn headshot sessions typically take 20-45 minutes. I take as long as needed to ensure you have the perfect shot for your profile." },
        { question: "What backgrounds do you offer?", answer: "I offer a variety of professional backgrounds including solid colors, gradient options, and environmental looks. We'll discuss which background best fits your industry and personal brand." },
        { question: "How soon will I receive my headshot?", answer: "Standard delivery is 5-7 business days. Rush delivery is available if you need your photos quickly." },
        { question: "Can I use my headshot for other purposes?", answer: "Absolutely! Your professional headshot is perfect for LinkedIn, company websites, email signatures, speaker profiles, and any professional marketing materials." },
        { question: "Where is your studio located?", answer: "My studio is located in Phoenix, Arizona with easy access from Scottsdale, Tempe, Mesa, and the greater East Valley. There's plenty of free parking and a comfortable, relaxed environment." },
        { question: "How often should I update my LinkedIn headshot?", answer: "LinkedIn recommends updating your profile photo every one to two years, or whenever your appearance changes significantly. An outdated photo can create a disconnect when you meet someone in person." }
      ]} />

      {/* Hero Section */}
      <section className="pt-8 pb-12" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl mb-4" style={{ color: '#5577a5', lineHeight: '1.2' }}>
              <span className="font-bold">LINKEDIN HEADSHOTS</span> <span className="font-normal">PHOENIX</span>
            </h1>
            <p className="font-raleway text-lg md:text-xl mb-8" style={{ color: '#575757', fontWeight: '400', letterSpacing: '0.05em' }}>
              Quick 20-Minute Session · 1 Edited Image · $300
            </p>

            {/* LinkedIn Profile Mockup */}
            <div className="max-w-2xl lg:max-w-3xl mx-auto mb-10">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Banner Image - Phoenix Skyline */}
                <div className="h-40 md:h-48 relative overflow-hidden" style={{ backgroundColor: '#f3f4f6' }}>
                  <img
                    src="https://images.cmqheadshots.com/images/website%20media/Phoenix%20skyline%20/Phoenix%20blue%20skyline.jpg"
                    alt="Phoenix Arizona skyline - LinkedIn headshot photographer location"
                    className="absolute bottom-0 left-0 w-full object-cover"
                    style={{ height: '100%' }}
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
                    <p className="text-gray-700 text-sm md:text-base mb-1">Your Professional Headline | Making an Impact</p>
                    <p className="text-gray-500 text-xs md:text-sm mb-2">Greater Phoenix Area · <span className="text-blue-600">Contact info</span></p>
                    <p className="text-blue-600 text-xs md:text-sm font-medium mb-3">Your Call to Action</p>
                    <p className="text-gray-500 text-xs md:text-sm"><span className="text-blue-600 font-semibold">500+</span> connections</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 italic">See how your professional headshot appears on LinkedIn</p>
            </div>

            <p className="font-raleway text-lg md:text-xl mb-6 leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Your LinkedIn profile photo works for you 24/7, 365 days a year, while you sleep or go on vacation. It&apos;s often the first impression you make on recruiters, clients, and business connections. I create professional headshots that project confidence, professionalism and approachability.
            </p>
            <p className="font-raleway text-lg md:text-xl mb-8 leading-relaxed text-gray-700 max-w-3xl mx-auto">
              Whether you&apos;re job hunting, building your personal brand, or simply updating an outdated photo, my Phoenix studio makes it easy. Walk in, get photographed, and walk out with a headshot that gets results — all in about 20 minutes.
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
              <span className="font-bold">PROFESSIONAL LINKEDIN</span> <span className="font-normal">HEADSHOTS</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8" style={{ backgroundColor: '#F1F1F1', borderRadius: '8px' }}>
              <Eye className="h-12 w-12 mx-auto mb-4" style={{ color: '#5577a5' }} />
              <p className="font-raleway text-5xl font-bold mb-2" style={{ color: '#5577a5' }}>21x</p>
              <p className="font-raleway text-xl" style={{ color: '#5577a5', fontWeight: '400' }}>
                More profile views with a professional photo
              </p>
            </div>
            <div className="text-center p-8" style={{ backgroundColor: '#F1F1F1', borderRadius: '8px' }}>
              <MessageSquare className="h-12 w-12 mx-auto mb-4" style={{ color: '#5577a5' }} />
              <p className="font-raleway text-5xl font-bold mb-2" style={{ color: '#5577a5' }}>36x</p>
              <p className="font-raleway text-xl" style={{ color: '#5577a5', fontWeight: '400' }}>
                More messages received on LinkedIn
              </p>
            </div>
            <div className="text-center p-8" style={{ backgroundColor: '#F1F1F1', borderRadius: '8px' }}>
              <UserCheck className="h-12 w-12 mx-auto mb-4" style={{ color: '#5577a5' }} />
              <p className="font-raleway text-5xl font-bold mb-2" style={{ color: '#5577a5' }}>70%</p>
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
              <span className="font-bold">HEADSHOTS</span> <span className="font-normal">FOR LINKEDIN</span>
            </h2>
            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
              With over a decade of experience photographing professionals across Phoenix, Scottsdale, and the East Valley, I understand what makes a great LinkedIn headshot. It&apos;s not just about lighting and camera settings — it&apos;s about capturing the authentic, approachable version of you that makes people want to connect.
            </p>
            <p className="font-raleway text-lg mb-6 leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
              I&apos;ve photographed thousands of professionals — from C-suite executives and attorneys to real estate agents and recent graduates. Every session is tailored to your industry and personal brand. I&apos;ll coach you through posing and expressions so you look natural, confident, and professional.
            </p>
            <p className="font-raleway text-lg leading-relaxed" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
              My studio is conveniently located in Phoenix with easy parking and a relaxed atmosphere. No awkward waiting rooms, no assembly-line feeling — just a quick, professional experience designed to fit your busy schedule.
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
                  <span className="font-bold">LINKEDIN EXPRESS</span>
                </h3>
                <p className="font-raleway text-lg mb-8" style={{ color: '#575757', fontWeight: '400' }}>
                  Quick Professional Headshot
                </p>

                <div className="mb-10">
                  <div className="text-6xl mb-4" style={{ color: '#5577a5', fontWeight: '400' }}>
                    $300
                  </div>
                  <p className="font-raleway text-xl" style={{ color: '#575757', fontWeight: '400' }}>
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
                    <span className="font-raleway" style={{ color: '#575757', fontWeight: '400' }}>20-Minute Session</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#575757', fontWeight: '400' }}>One Look / One Outfit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#575757', fontWeight: '400' }}>Studio Background</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#575757', fontWeight: '400' }}>Choose Your Favorite</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#575757', fontWeight: '400' }}>1 Edited Image Included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0" style={{ borderColor: '#5577a5' }}>
                      <svg className="w-4 h-4" style={{ color: '#5577a5' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-raleway" style={{ color: '#575757', fontWeight: '400' }}>Delivered in 1-2 Days</span>
                  </div>
                </div>

                <a
                  href="https://cmqheadshots.as.me/LinkedIn-express"
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
              </div>
            </div>

            {/* Right Side - What to Expect */}
            <div>
              <h2 className="font-raleway text-3xl lg:text-4xl mb-6 text-center lg:text-left" style={{ color: '#5577a5' }}>
                <span className="font-bold">WHAT TO EXPECT</span> <span className="font-normal">AT YOUR LINKEDIN HEADSHOT SESSION</span>
              </h2>
              <p className="font-raleway text-lg mb-8 text-center lg:text-left" style={{ color: '#575757', fontWeight: '400', lineHeight: '1.7' }}>
                The LinkedIn Express session is quick and efficient.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: '#5577a5' }}>
                    <p className="font-raleway text-xl font-bold" style={{ color: 'white' }}>1</p>
                  </div>
                  <div>
                    <p className="font-raleway text-lg font-bold mb-1" style={{ color: '#5577a5' }}>ARRIVE READY</p>
                    <p className="font-raleway text-base" style={{ color: '#575757', fontWeight: '400' }}>
                      Arrive with hair and makeup done, wearing your chosen outfit. Solid colors work best — avoid busy patterns and logos.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: '#5577a5' }}>
                    <p className="font-raleway text-xl font-bold" style={{ color: 'white' }}>2</p>
                  </div>
                  <div>
                    <p className="font-raleway text-lg font-bold mb-1" style={{ color: '#5577a5' }}>SESSION</p>
                    <p className="font-raleway text-base" style={{ color: '#575757', fontWeight: '400' }}>
                      20 minutes of professional headshots with coaching on posing and expressions. I&apos;ll make sure you look natural and confident.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: '#5577a5' }}>
                    <p className="font-raleway text-xl font-bold" style={{ color: 'white' }}>3</p>
                  </div>
                  <div>
                    <p className="font-raleway text-lg font-bold mb-1" style={{ color: '#5577a5' }}>PICK YOUR IMAGE</p>
                    <p className="font-raleway text-base" style={{ color: '#575757', fontWeight: '400' }}>
                      Review your images and choose your favorite. I&apos;ll professionally edit and retouch it for a polished final result.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-md" style={{ backgroundColor: '#5577a5' }}>
                    <p className="font-raleway text-xl font-bold" style={{ color: 'white' }}>4</p>
                  </div>
                  <div>
                    <p className="font-raleway text-lg font-bold mb-1" style={{ color: '#5577a5' }}>DELIVERY</p>
                    <p className="font-raleway text-base" style={{ color: '#575757', fontWeight: '400' }}>
                      Your LinkedIn profile image (400 x 400 px) round in 1-2 days
                    </p>
                    <p className="font-raleway text-sm mt-1" style={{ color: '#575757', fontWeight: '400' }}>
                      (Same day delivery - additional $50)
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
              <span className="font-bold">LINKEDIN</span> <span className="font-normal">PROFESSIONAL HEADSHOT</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center shadow-md" style={{ backgroundColor: '#F1F1F1' }}>
              <Briefcase className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway text-xl font-bold text-cmq-blue mb-2">JOB SEEKERS</h3>
              <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.5' }}>
                Make recruiters stop scrolling. A professional photo increases your chances of getting contacted for interviews. Stand out in a competitive job market with a headshot that shows you mean business.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center shadow-md" style={{ backgroundColor: '#F1F1F1' }}>
              <TrendingUp className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway text-xl font-bold text-cmq-blue mb-2">EXECUTIVES</h3>
              <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.5' }}>
                Project leadership and authority. Your headshot should reflect your experience and command respect. A polished profile photo reinforces your credibility with clients, boards, and stakeholders.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center shadow-md" style={{ backgroundColor: '#F1F1F1' }}>
              <Users className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway text-xl font-bold text-cmq-blue mb-2">ENTREPRENEURS</h3>
              <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.5' }}>
                Build trust with potential clients and partners. Your personal brand starts with your profile photo. Show the world you&apos;re serious about your business before they ever meet you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mb-12" style={{ color: '#5577a5' }}>
              <span className="font-bold">LINKEDIN HEADSHOT</span> <span className="font-normal">FAQ</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2" style={{ fontWeight: '700' }}>What if I&apos;m not photogenic?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  This type of headshot session is not for you. You need more time with me to help you learn how to pose and get more comfortable in front of the camera. I specialize in making people feel comfortable in front of the camera. I&apos;ll guide you through poses and expressions, and before you know it, you&apos;ll be relaxed and having fun.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2" style={{ fontWeight: '700' }}>What should I wear for my LinkedIn headshot?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Wear what you would wear to meet an important client or for a job interview in your industry.
                  Solid colors photograph best. Avoid busy patterns, logos, and red unless it&apos;s your branding color.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2" style={{ fontWeight: '700' }}>How long does a session take?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  Just 20 minutes. Come ready with your hair and makeup done, outfit on. We&apos;ll capture your headshot, you&apos;ll choose your favorite from a few images, and you&apos;re on with your day.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2" style={{ fontWeight: '700' }}>Can I use my headshot for other purposes?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  The LinkedIn Express delivers a 400px by 400px round image specifically sized for LinkedIn profile photos. If you need a larger or rectangular headshot for company websites, publications, or other marketing materials, check out my <Link href="/phoenix-business-headshots" className="text-cmq-blue underline hover:no-underline">full headshot sessions</Link>.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2" style={{ fontWeight: '700' }}>Where is your studio located?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  My studio is located in Phoenix, Arizona with easy access from Scottsdale, Tempe, Mesa, and the greater East Valley. There&apos;s plenty of free parking and the studio is designed to be a comfortable, relaxed environment so you can feel at ease during your session.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-raleway text-lg font-bold text-cmq-blue mb-2" style={{ fontWeight: '700' }}>How often should I update my LinkedIn headshot?</h3>
                <p className="font-raleway text-base text-cmq-gray-dark" style={{ fontWeight: '400', lineHeight: '1.6' }}>
                  LinkedIn recommends updating your profile photo every one to two years, or whenever your appearance changes significantly. An outdated photo can create a disconnect when you meet someone in person. Keeping your headshot current builds trust and shows you&apos;re active and engaged on the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{ backgroundColor: '#5577a5' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-4 uppercase" style={{ color: '#ffffff' }}>
            LINKEDIN HEADSHOTS NEAR ME
          </h2>
          <p className="font-raleway text-xl mb-8" style={{ color: 'white', fontWeight: '400' }}>
            Let&apos;s create a headshot that opens doors and creates opportunities.
          </p>
          <GetPricingButton href="#pricing" size="xl" className="border-2 border-white">
            GET PRICING
          </GetPricingButton>
        </div>
      </section>

    </Layout>
  )
}
