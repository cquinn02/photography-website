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
import GetPricingButton from '@/components/GetPricingButton'

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
      <section className="bg-white py-1 text-center">
        <h1 className="font-raleway text-cmq-blue" style={{
          fontSize: '16px',
          fontWeight: '300',
          letterSpacing: '0.1em'
        }}>
          PROFESSIONAL HEADSHOTS PHOENIX
        </h1>
      </section>

      {/* Hero Section - Image Only */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/website media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
            alt="Professional Phoenix Headshots"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* Hero Text Section - Below Image */}
      <section className="py-8 relative" style={{ 
        backgroundColor: '#ffffff'
      }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-raleway font-bold mb-4" style={{ fontSize: '42px', lineHeight: '1.2' }}>
              <div className="mb-3">
                <span 
                  className="inline-block mr-4"
                  style={{
                    color: '#5a81b9',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  COMFORTABLE,
                </span>
                <span 
                  className="inline-block mr-4"
                  style={{
                    color: '#5a81b9',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  EASY
                </span>
                <span 
                  className="inline-block"
                  style={{
                    color: '#5a81b9',
                    fontWeight: '400',
                    fontSize: '42px'
                  }}
                >
                  HEADSHOTS
                </span>
              </div>
              <div>
                <span 
                  className="inline-block mr-4"
                  style={{
                    color: '#5a81b9',
                    fontWeight: '400',
                    fontSize: '38px'
                  }}
                >
                  YOU&apos;RE
                </span>
                <span 
                  className="inline-block mr-4"
                  style={{
                    color: '#5a81b9',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  GOING TO
                </span>
                <span 
                  className="inline-block"
                  style={{
                    color: '#5a81b9',
                    fontWeight: '800',
                    fontSize: '48px'
                  }}
                >
                  LOVE
                </span>
              </div>
            </h2>
            <p className="font-raleway text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
              {frontmatter.heroSubtitle}
            </p>
            
            {/* Three Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto mt-6">
              <GetPricingButton href="/pricing-individual" size="large" className="flex-1 max-w-xs">
                INDIVIDUAL RATES
              </GetPricingButton>
              <GetPricingButton href="/corporate-staff-headshots" size="large" className="flex-1 max-w-xs">
                GROUP RATES
              </GetPricingButton>
              <GetPricingButton href="/pricing-actor" size="large" className="flex-1 max-w-xs">
                ACTOR RATES
              </GetPricingButton>
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
      <section className="section flex items-center" style={{ 
        backgroundColor: '#575757',
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        paddingTop: '200px', 
        paddingBottom: '200px', 
        minHeight: '500px' 
      }}>
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="font-raleway text-4xl lg:text-5xl mb-8">
              <span className="font-medium" style={{ color: 'white' }}>WHY CHOOSE</span> <span className="font-light"><span style={{ fontFamily: 'Playfair Display, serif', fontWeight: '600', color: '#5a81b9', fontSize: '60px' }}>CMQ</span> <span style={{ color: 'white' }}>HEADSHOTS?</span></span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Award className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                12+ Years Experience
              </h3>
              <p className="font-raleway text-xl font-light" style={{
                color: 'white',
                fontWeight: '300',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                Trusted by professionals across Phoenix and Scottsdale for over a decade.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Heart className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                Comfortable Experience
              </h3>
              <p className="font-raleway text-xl font-light" style={{
                color: 'white',
                fontWeight: '300',
                letterSpacing: '0.03em',
                lineHeight: '1.6'
              }}>
                I take pride in my ability to make people feel comfortable in front of my camera.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <Shield className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold mb-3" style={{ color: 'white' }}>
                No Rush Guarantee
              </h3>
              <p className="font-raleway text-xl font-light" style={{
                color: 'white',
                fontWeight: '300',
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
        backgroundColor="#575757"
        backgroundImage="url('/images/website media/grey linen-background.jpg')"
        textColor="white"
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
        backgroundImage="url('/images/website media/grey linen-background.jpg')"
        textColor="white"
      />

      {/* Corporate Headshots Section */}
      <TwoColumnSection
        title={
          <span className="whitespace-nowrap">
            CORPORATE HEADSHOTS <span className="font-light">PHOENIX</span>
          </span>
        }
        description="Whether you run a small, medium, or large business in Phoenix, corporate headshots are an integral part of your success. Corporate headshots in Phoenix is my specialty. I can come out and capture your teams and match your branding."
        ctaText="GET QUOTE"
        ctaLink="/corporate-staff-headshots"
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
        backgroundImage="url('/images/website media/grey linen-background.jpg')"
        textColor="white"
      />

      {/* On-Location Staff Headshots Section */}
      <TwoColumnSection
        title={
          <span className="whitespace-nowrap">
            PHOENIX ON-LOCATION STAFF <span className="font-light">HEADSHOTS</span>
          </span>
        }
        description="I can bring my studio to you and set up a mini version of our studio to capture your staff headshots that match your brand. I have been doing on-location staff headshots for 12 years. I have the process down. Don't have room? Not a problem, I can schedule your staff at our studio. I make it as easy as possible for you, click on get quote for more information."
        ctaText="GET QUOTE"
        ctaLink="/corporate-staff-headshots"
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
            PHOENIX ACTOR <span className="font-light">HEADSHOTS</span>
          </>
        }
        description="Your agent will tell you to hire a professional photographer for your Actor Headshots. I can help answer all of the questions regarding what casting agents are looking for when it comes to your Acting Headshots. If you're an Actor or Actress wanting to get more calls for roles, call me or schedule an appointment online for your acting or commercial headshot session."
        ctaText="ACTOR PRICING"
        ctaLink="/pricing-actor"
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
            PHOENIX BUSINESS <span className="font-light">HEADSHOTS</span>
          </span>
        }
        description="Your career needs business headshots that are the best version of you! In my studio, I take the time to get to know you to create business headshots that meets your needs for your LinkedIn profile, Facebook profile, Zoom profile, and your business website."
        ctaText="GET PRICING"
        ctaLink="/pricing-individual"
        imageUrl="/images/website%20media/Phoenix%20Business%20Headshots-chris%20Dark%20grey.webp?v=2"
        imageAlt="Phoenix business headshots professional"
        backgroundColor="#575757"
        backgroundImage="url('/images/website media/grey linen-background.jpg')"
        textColor="white"
        reverseColumns={true}
        textSize="medium"
        ctaSize="large"
      />

      {/* Fourth FAQ Section */}
      <FAQSection 
        backgroundColor="#F1F1F1"
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
              PROFESSIONAL <span className="font-light">PHOTOGRAPHY</span> SERVICES
            </h2>
            <p className="font-raleway text-xl font-light text-cmq-gray-dark max-w-2xl mx-auto" style={{
              fontWeight: '300',
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
              <p className="font-raleway font-light text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>Perfect for LinkedIn, company websites, and professional branding</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Film className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Actor Headshots</h3>
              <p className="font-raleway font-light text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>Industry-standard headshots with guidance on different looks</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Building className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Corporate Teams</h3>
              <p className="font-raleway font-light text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>On-location photography for your entire office team</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Palette className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Branding Photography</h3>
              <p className="font-raleway font-light text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>Personal and business branding images that tell your story</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Scale className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Lawyer Headshots</h3>
              <p className="font-raleway font-light text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>Professional legal headshots that convey trust and authority</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors text-center">
              <Music className="h-10 w-10 text-cmq-blue mb-4 mx-auto" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Dancer Headshots</h3>
              <p className="font-raleway font-light text-cmq-gray-dark" style={{
                fontSize: '17px',
                fontWeight: '300',
                lineHeight: '1.4'
              }}>Dynamic headshots capturing the grace and energy of dancers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-cmq-blue text-white" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl font-bold mb-4 text-white">
            Ready to Look Your Best?
          </h2>
          <p className="font-raleway text-xl font-light mb-8 text-white" style={{
            fontWeight: '300',
            letterSpacing: '0.03em',
            lineHeight: '1.6'
          }}>
            Let&apos;s create headshots that boost your career and business marketing efforts.
          </p>
          <GetPricingButton href="/contact" size="xl" className="border-2 border-white">
            Schedule Your Session Today
          </GetPricingButton>
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