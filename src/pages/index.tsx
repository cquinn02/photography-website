import Layout from '@/components/Layout'
import Link from 'next/link'
import { Camera, Star, Users, Clock, Briefcase, Film, Building, Calendar, FileText, Smile, Download } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import TwoColumnSection from '@/components/sections/TwoColumnSection'
import FourImageRow from '@/components/sections/FourImageRow'
import ThreeReviewSection from '@/components/sections/ThreeReviewSection'
import Button from '@/components/Button'

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
                  YOU'RE
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
            <h2 className="font-raleway text-4xl lg:text-5xl font-bold text-cmq-blue mb-8">
              WHY CHOOSE CMQ HEADSHOTS?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <Users className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                12+ Years Experience
              </h3>
              <p className="font-raleway text-cmq-gray-dark">
                Trusted by professionals across Phoenix and Scottsdale for over a decade.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <Star className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                Comfortable Experience
              </h3>
              <p className="font-raleway text-cmq-gray-dark">
                I take pride in my ability to make people feel comfortable in front of my camera.
              </p>
            </div>
            <div className="card p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <Clock className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-xl font-semibold text-cmq-gray-darker mb-3">
                No Rush Guarantee
              </h3>
              <p className="font-raleway text-cmq-gray-dark">
                Sessions continue until you have the perfect shots - 20 minutes to 3 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

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
        backgroundColor="#ffffff"
        reverseColumns={false}
        textSize="medium"
        ctaSize="large"
      />

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

      {/* Blue Review Section */}
      <ThreeReviewSection
        reviews={[
          {
            image: "/images/website media/CMQHEADSHOTSCarolH3375.webp",
            imageAlt: "Carol H professional headshot",
            name: "Carol Herron",
            review: "From start to finish, the session was 2.5 hours. I received five copies sized for particular uses (like social media). Before your session, you'll receive helpful information. I recommend CMQ HEADSHOTS to all of my friends and family.",
            stars: 5
          },
          {
            image: "/images/website media/Shawn Wilson10136-1x1.webp", 
            imageAlt: "Shawn Wilson professional headshot",
            name: "Shawn Wilson",
            review: "Cindy helped me with posing, expression and clothing that made me more comfortable, which me took better, and ultimately resulted in amazing headshots. I highly recommend CMQ Headshots!",
            stars: 5
          },
          {
            image: "/images/website media/CMQheadshots-Ronlyn-Phoenix-headshots3414.webp",
            imageAlt: "Ronlyn professional headshot", 
            name: "Ronlyn Griggs",
            review: "Cindy at CMQ Headshots did a fantastic job with my headshots. Very patient and willing to do whatever it took to get a great shot that I was comfortable with. She is a PRO and it shows! Highly recommend!!!",
            stars: 5
          }
        ]}
        backgroundColor="#575757"
        textColor="white"
      />

      {/* 4-Step Process Section */}
      <section className="section bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              How It Works - Simple 4-Step Process
            </h2>
            <p className="font-raleway text-lg text-cmq-gray-dark max-w-2xl mx-auto">
              Being nervous is normal! I walk you through the process to ensure you get headshots you'll love.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Calendar className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
                <div className="absolute -top-2 -right-2 bg-cmq-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
              </div>
              <h3 className="font-raleway text-lg font-semibold text-cmq-gray-darker mb-2">
                Book Date & Time Online
              </h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">
                Easy scheduling that fits your calendar
              </p>
            </div>
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <FileText className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
                <div className="absolute -top-2 -right-2 bg-cmq-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
              </div>
              <h3 className="font-raleway text-lg font-semibold text-cmq-gray-darker mb-2">
                Receive Preparation Info
              </h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">
                Complete guidance to help you look your best
              </p>
            </div>
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Smile className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
                <div className="absolute -top-2 -right-2 bg-cmq-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <h3 className="font-raleway text-lg font-semibold text-cmq-gray-darker mb-2">
                Have Fun at Photo Session
              </h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">
                Comfortable, relaxed atmosphere where you can be yourself
              </p>
            </div>
            <div className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Download className="h-12 w-12 text-cmq-blue mx-auto mb-4" />
                <div className="absolute -top-2 -right-2 bg-cmq-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
              </div>
              <h3 className="font-raleway text-lg font-semibold text-cmq-gray-darker mb-2">
                Download Your Images
              </h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">
                Professional headshots ready for immediate use
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              Professional Headshots Phoenix
            </h2>
            <p className="font-raleway text-lg text-cmq-gray-dark max-w-2xl mx-auto">
              See the quality and variety of our professional headshot photography
            </p>
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto mb-8">
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQHeadshots-AshleyM0096-web-ex-sq.webp" 
                alt="Professional Business Headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQ-Headshots-professional-phoenix-headshots41514-1x1-jpmini-leg-sqo.webp" 
                alt="Executive Portrait Phoenix"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQ-Headshots-professional-headshots-Adwoaj9585-jpmini-leg-sqo.webp" 
                alt="Professional Headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQHeadshots-LisaS0268-1x1-jp-leg-sq.webp" 
                alt="Business Portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQ-Headshots-scottsdale-headshots-Shawn-Wilson10126-jg-leg-sq.webp" 
                alt="Corporate Headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo.webp" 
                alt="Professional Portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQHeadshots-AshleyM0164-web-ex-sq.webp" 
                alt="Business Headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQHEADSHOT-chadn1196-web-leg-sq.webp" 
                alt="Executive Headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQHeadshots-LisaS0264-1x1-jp-leg-sq.webp" 
                alt="Corporate Portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQ-headshots-CarolHerron-professional-phoenix-3375-leg-sq.webp" 
                alt="Professional Headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQHeadshots-Adwoaj9579-web-jp-leg-sq.webp" 
                alt="Business Portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/images/website media/CMQheadshots_4883-jpmini-leg-sqo.webp" 
                alt="Corporate Headshot"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center">
            <Button href="/portfolio" size="large">
              View Complete Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section bg-pattern-dots">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              Professional Photography Services
            </h2>
            <p className="font-raleway text-lg text-cmq-gray-dark max-w-2xl mx-auto">
              Specialized headshot photography tailored to your professional needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors">
              <Briefcase className="h-10 w-10 text-cmq-blue mb-4" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Business Headshots</h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">Perfect for LinkedIn, company websites, and professional branding</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors">
              <Film className="h-10 w-10 text-cmq-blue mb-4" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Actor Headshots</h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">Industry-standard headshots with guidance on different looks</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-cmq-gray-light hover:border-cmq-blue transition-colors">
              <Building className="h-10 w-10 text-cmq-blue mb-4" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Corporate Teams</h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">On-location photography for your entire office team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-cmq-gray-light">
        <div className="container mx-auto px-4">
          <div 
            className="prose prose-lg max-w-none font-raleway text-cmq-gray-dark"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="section bg-cmq-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl font-bold mb-4 text-white">
            Ready to Look Your Best?
          </h2>
          <p className="font-raleway text-xl mb-8 text-white">
            Let's create headshots that boost your career and business marketing efforts.
          </p>
          <Button href="/contact" variant="white" size="xl" className="shadow-2xl hover:shadow-3xl hover:-translate-y-2">
            Schedule Your Session Today
          </Button>
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