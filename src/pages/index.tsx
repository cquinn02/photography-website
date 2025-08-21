import Layout from '@/components/Layout'
import Link from 'next/link'
import { Camera, Star, Users, Clock, Briefcase, Film, Building, Calendar, FileText, Smile, Download } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

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
        <h1 className="font-raleway" style={{
          fontSize: '16px',
          fontWeight: '100',
          letterSpacing: '0.1em',
          color: '#575757'
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
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  COMFORTABLE,
                </span>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '0.3s',
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  EASY
                </span>
                <span 
                  className="word-animate inline-block"
                  style={{
                    animationDelay: '0.6s',
                    color: 'white',
                    fontWeight: '300',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  HEADSHOTS
                </span>
              </div>
              <div>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '0.9s',
                    color: 'white',
                    fontWeight: '300',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  YOU'RE
                </span>
                <span 
                  className="word-animate inline-block mr-4"
                  style={{
                    animationDelay: '1.2s',
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  GOING TO
                </span>
                <span 
                  className="word-animate inline-block"
                  style={{
                    animationDelay: '1.5s',
                    color: 'white',
                    fontWeight: '700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                  }}
                >
                  LOVE
                </span>
              </div>
            </div>
            <p className="font-raleway text-xl md:text-2xl mb-8 leading-relaxed opacity-0" 
               style={{
                 color: 'white', 
                 textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                 animation: 'slideInWord 0.8s ease-out 1.2s forwards'
               }}>
              {frontmatter.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Three Buttons Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-4xl mx-auto">
            <Link
              href="/pricing-individual"
              className="bg-cmq-blue text-white px-8 py-4 rounded-lg font-raleway text-lg font-medium text-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex-1 max-w-xs"
            >
              INDIVIDUAL RATES
            </Link>
            <Link
              href="/pricing-corporate"
              className="bg-cmq-blue text-white px-8 py-4 rounded-lg font-raleway text-lg font-medium text-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex-1 max-w-xs"
            >
              GROUP RATES
            </Link>
            <Link
              href="/pricing"
              className="bg-cmq-blue text-white px-8 py-4 rounded-lg font-raleway text-lg font-medium text-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex-1 max-w-xs"
            >
              ACTOR RATES
            </Link>
          </div>
        </div>
      </section>

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

      {/* Why Choose Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              Why Choose CMQ Headshots?
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
            <Link
              href="/portfolio"
              className="bg-cmq-blue text-white px-8 py-4 rounded-lg font-raleway text-lg font-medium hover:bg-white hover:text-cmq-blue border border-cmq-blue transition-all duration-300 inline-block"
            >
              View Complete Portfolio
            </Link>
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
          <Link
            href="/contact"
            className="bg-white text-cmq-blue px-10 py-5 rounded-xl font-raleway text-xl font-bold border border-cmq-blue shadow-2xl hover:bg-cmq-blue hover:text-white hover:border-cmq-blue transition-all duration-300 inline-block transform hover:scale-110 hover:shadow-3xl hover:-translate-y-2"
          >
            Schedule Your Session Today
          </Link>
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