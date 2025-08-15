import Layout from '@/components/Layout'
import Image from 'next/image'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

interface PageProps {
  frontmatter: {
    title: string
    description: string
    pageTitle: string
    showContactForm?: boolean
  }
  content: string
}

export default function Contact({ frontmatter, content }: PageProps) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-cmq-gray-light to-cmq-white section">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-raleway text-4xl md:text-5xl font-bold text-cmq-gray-darker mb-6">
              {frontmatter.pageTitle}
            </h1>
            <p className="font-raleway text-xl text-cmq-gray-dark leading-relaxed">
              Let's create headshots that make a lasting impression
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Phone className="h-8 w-8 text-cmq-blue mx-auto mb-3" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Phone</h3>
              <p className="font-raleway text-cmq-gray-dark">(480) 648-3429</p>
            </div>
            <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <MapPin className="h-8 w-8 text-cmq-blue mx-auto mb-3" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Location</h3>
              <p className="font-raleway text-cmq-gray-dark">Phoenix, Arizona</p>
            </div>
            <div className="card p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Clock className="h-8 w-8 text-cmq-blue mx-auto mb-3" />
              <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Hours</h3>
              <p className="font-raleway text-cmq-gray-dark text-sm">
                Mon-Fri: 9AM-6PM<br />
                Sat: 11AM-2PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
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

      {/* Contact Form */}
      {frontmatter.showContactForm && (
        <section className="section bg-pattern-dots">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="card p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="mb-6 flex justify-center">
                    <Image
                      src="/images/CMQ_LOGO.png"
                      alt="CMQ Headshots"
                      width={180}
                      height={54}
                      className="h-12 w-auto"
                    />
                  </div>
                  <h2 className="font-raleway text-2xl font-bold text-cmq-gray-darker mb-2">
                    Send Me a Message
                  </h2>
                  <p className="font-raleway text-cmq-gray-dark">
                    Tell me about your headshot needs and I'll get back to you soon.
                  </p>
                </div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-raleway text-sm font-medium text-cmq-gray-darker mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-cmq-gray-light rounded-lg font-raleway focus:outline-none focus:ring-2 focus:ring-cmq-blue focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-raleway text-sm font-medium text-cmq-gray-darker mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-cmq-gray-light rounded-lg font-raleway focus:outline-none focus:ring-2 focus:ring-cmq-blue focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-raleway text-sm font-medium text-cmq-gray-darker mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-cmq-gray-light rounded-lg font-raleway focus:outline-none focus:ring-2 focus:ring-cmq-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-raleway text-sm font-medium text-cmq-gray-darker mb-2">
                      Tell me about your headshot needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-cmq-gray-light rounded-lg font-raleway focus:outline-none focus:ring-2 focus:ring-cmq-blue focus:border-transparent resize-none"
                      placeholder="What type of headshots do you need? When are you looking to schedule? Any specific requirements?"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-4 rounded-lg font-raleway text-lg font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'contact.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}