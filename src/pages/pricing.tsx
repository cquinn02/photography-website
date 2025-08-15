import Layout from '@/components/Layout'
import { CheckCircle, Star, Shield, Clock } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

interface PageProps {
  frontmatter: {
    title: string
    description: string
    pageTitle: string
  }
  content: string
}

export default function Pricing({ frontmatter, content }: PageProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cmq-gray-light to-cmq-white section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-raleway text-4xl md:text-5xl font-bold text-cmq-gray-darker mb-6">
              {frontmatter.pageTitle || 'Services & Investment'}
            </h1>
            <p className="font-raleway text-xl text-cmq-gray-dark leading-relaxed">
              Professional headshot photography tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none font-raleway text-cmq-gray-dark [&>h1]:text-cmq-gray-darker [&>h1]:font-raleway [&>h1]:font-bold [&>h2]:text-cmq-gray-darker [&>h2]:font-raleway [&>h2]:font-semibold [&>h3]:text-cmq-gray-darker [&>h3]:font-raleway [&>h3]:font-semibold [&>strong]:text-cmq-gray-darker"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="section bg-gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              Why Choose Professional Headshots?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <Star className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">First Impressions</h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">Make a lasting professional impression</p>
            </div>
            <div className="text-center p-6">
              <CheckCircle className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Career Growth</h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">Open doors to new opportunities</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Brand Consistency</h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">Maintain professional branding</p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Time Efficient</h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">Quick sessions, lasting results</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'pricing.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}