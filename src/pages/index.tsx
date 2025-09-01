import Layout from '@/components/Layout'
import Link from 'next/link'
import { Camera, Star, Users, Clock, Briefcase, Film, Building, Calendar, FileText, Smile, Download, Palette, Scale, Music, Award, Heart, Shield } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import FourImageRow from '@/components/sections/FourImageRow'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import HeadshotPhotographerSection from '@/components/sections/HeadshotPhotographerSection'
import VideoSection from '@/components/sections/VideoSection'
import FourStepPolaroid from '@/components/sections/FourStepPolaroid'
import FAQSection from '@/components/sections/FAQSection'
import ModelingHeadshotsSection from '@/components/sections/ModelingHeadshotsSection'
import Button from '@/components/Button'
import ContactButton from '@/components/ContactButton'

interface PageProps {
  frontmatter: {
    title: string
    description: string
    heroTitle: string
    heroSubtitle: string
  }
  content: string
}

export default function Home({ frontmatter, content }: PageProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      {/* H1 Section Above Image */}
      <section className="bg-white py-4 text-center">
        <h1 className="font-raleway text-cmq-blue" style={{
          fontSize: '16px',
          fontWeight: '100',
          letterSpacing: '0.1em'
        }}>
          PROFESSIONAL HEADSHOTS PHOENIX
        </h1>
      </section>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/website media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
            alt="Professional Phoenix Headshots"
            className="w-full h-full object-contain object-center opacity-80"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <div className="mb-2">
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '0s',
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  COMFORTABLE,
                </span>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '0.6s',
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  EASY
                </span>
                <span 
                  className="word-animate inline-block"
                  style={{
                    animationDelay: '1.2s',
                    color: 'white',
                    fontWeight: '300',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  HEADSHOTS
                </span>
              </div>
              <div>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '1.8s',
                    color: 'white',
                    fontWeight: '300',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  YOU&apos;RE
                </span>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '2.4s',
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  GOING TO
                </span>
                <span 
                  className="word-animate inline-block"
                  style={{
                    animationDelay: '3.0s',
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  LOVE
                </span>
              </div>
            </div>
            <p className="font-raleway text-xl md:text-2xl mb-8 leading-relaxed opacity-0" 
               style={{
                 color: 'white', 
                 textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                 animation: 'slideInWord 0.8s ease-out 3.8s forwards'
               }}>
              {frontmatter.heroSubtitle}
            </p>
            
            {/* Three Buttons on Hero */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-4xl mx-auto mt-8 opacity-0"
                 style={{
                   animation: 'slideInWord 0.8s ease-out 4.6s forwards'
                 }}>
              <Button href="/pricing-individual" size="large" className="flex-1 max-w-xs">
                INDIVIDUAL RATES
              </Button>
              <Button href="/pricing-corporate" size="large" className="flex-1 max-w-xs">
                GROUP RATES
              </Button>
              <Button href="/pricing" size="large" className="flex-1 max-w-xs">
                ACTOR RATES
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Four Image Row Section */}
      <FourImageRow
        images={[
          {
            src: "/images/website media/Peter Osmundson1991-1x1.jpg",
            alt: "Professional business headshot"
          },
          {
            src: "/images/website media/CMQHeadshots_D40396-1x1-jgmini-leg-sqo.webp",
            alt: "Executive headshot phoenix"
          },
          {
            src: "/images/website media/CMQ-Headshots-phoenix-staff-DAY-41625-1x1-jpmini-leg-squ.webp",
            alt: "Corporate headshot"
          },
          {
            src: "/images/website media/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo.webp",
            alt: "Professional portrait"
          }
        ]}
        backgroundColor="#ffffff"
        fullWidth={true}
        borderColor="#00b4d8"
      />

      {/* Why Choose Section */}
      <section className="section flex items-center" style={{ backgroundColor: '#f0f0f0', paddingTop: '3rem', paddingBottom: '6rem', minHeight: '500px' }}>
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="font-raleway text-4xl lg:text-5xl text-cmq-blue mb-8">
              <span className="font-medium">WHY CHOOSE</span> <span className="font-thin"><span style={{ fontFamily: 'Cormorant Garamond, serif' }}>CMQ</span> <span style={{ color: '#575757' }}>HEADSHOTS?</span></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <Award className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                12+ Years Experience
              </h3>
              <p className="font-raleway text-xl font-thin text-cmq-gray-dark" style={{
                fontWeight: '100',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                Trusted by professionals across Phoenix and Scottsdale for over a decade.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <Heart className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                Comfortable Experience
              </h3>
              <p className="font-raleway text-xl font-thin text-cmq-gray-dark" style={{
                fontWeight: '100',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                I take pride in my ability to make people feel comfortable in front of my camera.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <Shield className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                No Rush Guarantee
              </h3>
              <p className="font-raleway text-xl font-thin text-cmq-gray-dark" style={{
                fontWeight: '100',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                Sessions continue until you have the perfect shots - 20 minutes to 3 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <FourStepPolaroid />

      {/* Review Section */}
      <ThreeReviewSection
        reviews={[
          {
            image: "/images/website media/CMQHEADSHOTS1196-sq.webp",
            imageAlt: "Chad's professional headshot",
            name: "Chad Noonan",
            review: "Cindy is an expert professional photographer. She helped me prepare for my photoshoot and clearly outlined expectations, resolving any uncertainties I had. I found working with Cindy easy and fun!",
            stars: 5
          },
          {
            image: "/images/website media/CMQ-Headshots-Adwoa-professional-headshots-j9579-web-jp-leg-sq.webp",
            imageAlt: "Professional headshot review 2",
            name: "Adwoa John",
            review: "Cindy made me feel very comfortable right away! She is professional, detailed, and cared so much about capturing the essence of my person! I will be recommending her to friends and family.",
            stars: 5
          },
          {
            image: "/images/website media/CMQHEADSHOTS-LisaS0258.webp",
            imageAlt: "Professional headshot review 3",
            name: "Lisa Sallee",
            review: "I really enjoyed working with Cindy! We had a phone consultation to give me tips on wardrobe colors, skincare, and makeup. It was a very comfortable experience, and I would absolutely use her again.",
            stars: 5
          }
        ]}
        backgroundColor="#ffffff"
      />

      {/* Video Section */}
      <VideoSection
        videoUrl="/images/website%20media/CMQHeadshotsVideoFinalFull.mp4"
        posterImage="/images/VideoScreenshot.jpg"
        title="HEADSHOT PHOTOGRAPHER"
        titleThinWord="PHOENIX"
        description="I take pride in my ability to make people feel comfortable in front of my camera. It's a big part of my process, and it's the first step towards creating a headshot that you'll truly love."
        ownerName="Cindy Quinn - Owner"
        backgroundColor="#F1F1F1"
      />


      {/* Dark Grey Review Section */}
      <ThreeReviewSection
        reviews={[
          {
            image: "/images/website media/CMQHEADSHOTSCarolH3375.webp",
            imageAlt: "Carol H professional headshot",
            name: "Carol Herron",
            review: "From start to finish, the session was 2.5 hours. Before your session, you'll receive helpful information. I recommend CMQ HEADSHOTS to all of my friends and family.",
            stars: 5
          },
          {
            image: "/images/website media/Shawn Wilson10136-1x1.webp", 
            imageAlt: "Shawn Wilson professional headshot",
            name: "Shawn Wilson",
            review: "Cindy helped me with posing, expression and clothing that made me more comfortable, which me look better, and ultimately resulted in amazing headshots. I highly recommend CMQ Headshots!",
            stars: 5
          },
          {
            image: "/images/website media/CMQheadshots-Ronlyn-Phoenix-headshots3414.webp",
            imageAlt: "Ronlyn professional headshot", 
            name: "Ronlyn Griggs",
            review: "Cindy at CMQ Headshots did a fantastic job with my headshots. Very patient and willing to do whatever it took to get a great shot. She is a PRO and it shows! Highly recommend!!!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* Corporate Headshots Section */}
      <TwoColumnSection
        title={
          <span className="whitespace-nowrap">
            CORPORATE HEADSHOTS <span className="font-thin">PHOENIX</span>
          </span>
        }
        description="Whether you run a small, medium, or large business in Phoenix, corporate headshots are an integral part of your success. Corporate headshots in Phoenix is my specialty. I can come out and capture your teams and match your branding."
        ctaText="GET PRICING"
        ctaLink="/pricing"
        imageUrl="/images/website media/CMQ-HEADSHOTS-pro-headshots-41301-jpmini-leg-sq.webp"
        imageAlt="Professional corporate headshot Phoenix"
        backgroundColor="#ffffff"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
      />

      {/* FAQ Section */}
      <FAQSection 
        backgroundColor="#575757"
        textColor="white"
      />

      {/* On-Location Staff Headshots Section */}
      <TwoColumnSection
        title={
          <span className="whitespace-nowrap">
            PHOENIX ON-LOCATION STAFF <span className="font-thin">HEADSHOTS</span>
          </span>
        }
        description="I can bring my studio to you and set up a mini version of our studio to capture your staff headshots that match your brand. I have been doing on-location staff headshots for 13 years. I have the process down. Don't have room? Not a problem, I can schedule your staff at our studio. I make it as easy as possible for you, click on get quote for more information."
        ctaText="GET QUOTE"
        ctaLink="/contact"
        imageUrl="/images/website media/CMQ-HEADSHOTS-Phoenix-on-location-staff-headshots.webp"
        imageAlt="Phoenix on-location staff headshots grid"
        backgroundColor="#f8f8f8"
        reverseColumns={true}
        textSize="small"
        ctaSize="large"
      />

      {/* Second FAQ Section */}
      <FAQSection 
        backgroundColor="#FFFFFF"
        faqs={[
          {
            id: 1,
            question: "Do you only shoot headshots?",
            answer: "I have specialized in headshots, but I love creating portraits, working with models, creating unique images for their portfolios, and studio senior photos. I do not do weddings or baby photography."
          },
          {
            id: 2,
            question: "Will you help me pose during my headshot session?",
            answer: "Absolutely! I will help you to look more confident and natural in front of the camera. When my clients leave the studio, they always say that I made them feel so comfortable and relaxed. I can help you too."
          },
          {
            id: 3,
            question: "Can you help me create my acting portfolio?",
            answer: "Yes, I have helped many actors create different looks for the different roles that they want to be cast in, by helping them choose the best outfit and lighting them in a way that will enhance their facial expressions."
          }
        ]}
        showContactCTA={true}
      />

      {/* Phoenix Actor Headshots Section */}
      <TwoColumnSection
        title={
          <>
            PHOENIX ACTOR <span className="font-thin">HEADSHOTS</span>
          </>
        }
        description="Your agent will tell you to hire a professional photographer for your Actor Headshots. I can help answer all of the questions regarding what casting agents are looking for when it comes to your Acting Headshots. If you're an Actor or Actress wanting to get more calls for roles, call me or schedule an appointment online for your acting or commercial headshot session."
        ctaText="ACTOR PRICING"
        ctaLink="/pricing"
        imageUrl="/images/website media/Ashley-Actor-collage-of-headshots.webp"
        imageAlt="Phoenix actor headshots collection"
        backgroundColor="#F1F1F1"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
      />

      {/* Third FAQ Section */}
      <FAQSection 
        backgroundColor="#FFFFFF"
        faqs={[
          {
            id: 1,
            question: "Do you offer discounts?",
            answer: "I offer a 20% discount to military personnel and active first responders, and 30% off the session fee for return clients."
          },
          {
            id: 2,
            question: "How long is the headshot session?",
            answer: "The headshot session will take as long as it takes to get the images you need for your marketing and LinkedIn profile. It can be as short as 20 minutes and as long as 3 hours."
          },
          {
            id: 3,
            question: "What are your business hours?",
            answer: "All sessions are by appointment only. Please check our calendar on the pricing page to view my current availability, and if you can't find something that works for you, please give me a call."
          }
        ]}
        showContactCTA={true}
      />

      {/* Phoenix Business Headshots Section */}
      <TwoColumnSection
        title={
          <span className="whitespace-nowrap">
            PHOENIX BUSINESS <span className="font-thin">HEADSHOTS</span>
          </span>
        }
        description="Your career needs business headshots that are the best version of you! In my studio, I take the time to get to know you to create business headshots that meets your needs for your LinkedIn profile, Facebook profile, Zoom profile, and your business website."
        ctaText="GET PRICING"
        ctaLink="/pricing"
        imageUrl="/images/website%20media/Phoenix%20Business%20Headshots-chris%20Dark%20grey.webp?v=2"
        imageAlt="Phoenix business headshots professional"
        backgroundColor="#575757"
        textColor="white"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
      />

      {/* Fourth FAQ Section */}
      <FAQSection 
        backgroundColor="#5a81b9"
        faqs={[
          {
            id: 1,
            question: "Can you come to our office and take our staff headshots?",
            answer: "Yes, I can! I can come out to your office and photograph your staff and C-suite employees, resulting in less downtime for your staff and ensuring consistency on your website."
          },
          {
            id: 2,
            question: "Do you only have a few backdrops?",
            answer: "I have many options. You and I will discuss what will look best with your outfits and your specific industry to ensure we create the best image for your profile."
          },
          {
            id: 3,
            question: "I'm really nervous, can you help me?",
            answer: "Most people who come to my studio are nervous. I know that, and I have the personality and confidence to walk you through the process. Before you know it, you are laughing and loving your images."
          }
        ]}
        showContactCTA={true}
      />

      {/* Phoenix Modeling Headshots Section */}
      <ModelingHeadshotsSection backgroundColor="#ffffff" />

      {/* Services Preview Section */}
      <section className="section" style={{ backgroundColor: '#F1F1F1' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-4xl lg:text-5xl font-bold text-cmq-blue mb-4">
              PROFESSIONAL <span className="font-thin">PHOTOGRAPHY</span> SERVICES
            </h2>
            <p className="font-raleway text-xl font-thin text-cmq-gray-dark max-w-2xl mx-auto" style={{
              fontWeight: '100',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Specialized headshot photography tailored to your professional needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Briefcase className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Business Headshots</h3>
              <p className="font-raleway font-thin text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '100',
                lineHeight: '1.4'
              }}>Perfect for LinkedIn, company websites, and professional branding</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Film className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Actor Headshots</h3>
              <p className="font-raleway font-thin text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '100',
                lineHeight: '1.4'
              }}>Industry-standard headshots with guidance on different looks</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Building className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Corporate Teams</h3>
              <p className="font-raleway font-thin text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '100',
                lineHeight: '1.4'
              }}>On-location photography for your entire office team</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Palette className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Branding Photography</h3>
              <p className="font-raleway font-thin text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '100',
                lineHeight: '1.4'
              }}>Personal and business branding images that tell your story</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Scale className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Lawyer Headshots</h3>
              <p className="font-raleway font-thin text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '100',
                lineHeight: '1.4'
              }}>Professional legal headshots that convey trust and authority</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Music className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Dancer Headshots</h3>
              <p className="font-raleway font-thin text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '100',
                lineHeight: '1.4'
              }}>Dynamic headshots capturing the grace and energy of dancers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-cmq-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl font-bold mb-4 text-white">
            Ready to Look Your Best?
          </h2>
          <p className="font-raleway text-xl font-thin mb-8 text-white" style={{
            fontWeight: '100',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            Let&apos;s create headshots that boost your career and business marketing efforts.
          </p>
          <ContactButton href="/contact" size="xl" className="shadow-2xl hover:shadow-3xl hover:-translate-y-2">
            Schedule Your Session Today
          </ContactButton>
        </div>
      </section>

    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'home.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}