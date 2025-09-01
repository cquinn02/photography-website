import Layout from '@/components/Layout'
import LogoWatermark from '@/components/LogoWatermark'
import { Camera, Award, Heart, Users } from 'lucide-react'
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

export default function About({ frontmatter, content }: PageProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cmq-gray-light to-cmq-white section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Camera className="h-16 w-16 text-cmq-blue mx-auto mb-6" />
            <h1 className="font-raleway text-4xl md:text-5xl font-bold text-cmq-gray-darker mb-6">
              {frontmatter.pageTitle}
            </h1>
            <p className="font-raleway text-xl text-cmq-gray-dark leading-relaxed">
              Phoenix&apos;s Premier Headshot Photographer
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section relative">
        <LogoWatermark />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none font-raleway text-cmq-gray-dark [&>h1]:text-cmq-gray-darker [&>h1]:font-raleway [&>h1]:font-bold [&>h2]:text-cmq-gray-darker [&>h2]:font-raleway [&>h2]:font-semibold [&>h3]:text-cmq-gray-darker [&>h3]:font-raleway [&>h3]:font-semibold [&>strong]:text-cmq-gray-darker"
              dangerouslySetInnerHTML={{ __html: content }} 
            />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section bg-gradient-blue-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-raleway text-3xl font-bold text-cmq-gray-darker mb-4">
              What Sets Me Apart
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Award className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-lg font-semibold text-cmq-gray-darker mb-3">
                12+ Years Experience
              </h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">
                Over a decade of professional headshot photography experience
              </p>
            </div>
            <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Heart className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-lg font-semibold text-cmq-gray-darker mb-3">
                Comfortable Environment
              </h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">
                Clients consistently say I make them feel relaxed and confident
              </p>
            </div>
            <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="h-10 w-10 text-cmq-blue mx-auto mb-4" />
              <h3 className="font-raleway text-lg font-semibold text-cmq-gray-darker mb-3">
                Community Focused
              </h3>
              <p className="font-raleway text-sm text-cmq-gray-dark">
                20% discount for military personnel and first responders
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'about.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}