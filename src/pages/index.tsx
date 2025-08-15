import Layout from '@/components/Layout'
import Link from 'next/link'
import { Camera, Star, Users, Clock, Briefcase, Film, Building } from 'lucide-react'
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
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cmq-gray-light to-cmq-white section relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-[30rem] font-raleway font-bold leading-none animate-pulse">
              <span className="text-cmq-gray-darker">CMQ</span>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold text-cmq-gray-darker mb-6">
              {frontmatter.heroTitle}
            </h1>
            <p className="font-raleway text-xl md:text-2xl text-cmq-gray-dark mb-8 leading-relaxed">
              {frontmatter.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary px-8 py-4 rounded-lg font-raleway text-lg font-medium inline-block transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1"
              >
                Book Your Session
              </Link>
              <Link
                href="/pricing"
                className="border-2 border-cmq-blue text-cmq-blue px-8 py-4 rounded-lg font-raleway text-lg font-medium hover:bg-cmq-blue hover:text-cmq-white transition-all duration-300 transform hover:scale-105 hover:shadow-md"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-subtle">
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
                Clients consistently say I made them feel relaxed and confident during their session.
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