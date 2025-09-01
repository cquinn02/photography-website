import Layout from '@/components/Layout'
import Link from 'next/link'
import { Phone, MapPin, Clock, Mail, Calendar, MessageSquare, Send, Video } from 'lucide-react'
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
      {/* Professional Headshots Gallery Section */}
      <section className="bg-white py-0">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-0">
            {/* Professional headshots matching CMQ style */}
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/website media/CMQHEADSHOT-chadn1196-web-leg-sq.webp"
                alt="Professional Business Headshot - Executive Male"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-gray-700">
              <img 
                src="/images/website media/CMQHeadshots-LisaS0268-1x1-jp-leg-sq.webp"
                alt="Corporate Headshot - Professional Woman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/website media/Chris-Yaegar-corporate-headshot-phoenix_5680-left-comp.webp"
                alt="Executive Portrait - Business Professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-gray-700">
              <img 
                src="/images/website media/CMQHeadshots-AshleyM0164-web-ex-sq.webp"
                alt="Professional Headshot - Corporate Woman"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-8">
              <h2 className="font-raleway text-3xl md:text-4xl font-normal text-cmq-blue mb-4">
                WE&apos;D LOVE TO HEAR FROM YOU
              </h2>
              <p className="font-raleway text-lg text-cmq-gray-darker leading-relaxed">
                If you have a question that you can&apos;t find an answer to, or a date you can&apos;t find,<br />
                fill out out form below and we will get back to you.
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 border-b border-gray-300 font-raleway text-gray-700 placeholder-gray-500 focus:outline-none focus:border-cmq-blue transition-colors bg-transparent"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border-b border-gray-300 font-raleway text-gray-700 placeholder-gray-500 focus:outline-none focus:border-cmq-blue transition-colors bg-transparent"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border-b border-gray-300 font-raleway text-gray-700 placeholder-gray-500 focus:outline-none focus:border-cmq-blue transition-colors bg-transparent"
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-3 border-b border-gray-300 font-raleway text-gray-700 placeholder-gray-500 focus:outline-none focus:border-cmq-blue transition-colors resize-none bg-transparent"
                  required
                />
              </div>
            </form>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <Link
                href="https://calendly.com/cmqheadshots"
                target="_blank"
                className="bg-cmq-blue text-white px-6 py-4 rounded-lg font-raleway text-sm font-medium text-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                BOOK ZOOM
              </Link>
              
              <Link
                href="/contact"
                className="bg-cmq-blue text-white px-6 py-4 rounded-lg font-raleway text-sm font-medium text-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                BOOK SHOOT
              </Link>
              
              <button
                type="submit"
                className="bg-cmq-blue text-white px-6 py-4 rounded-lg font-raleway text-sm font-medium text-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                SEND EMAIL
              </button>
              
              <Link
                href="sms:4806483429"
                className="bg-cmq-blue text-white px-6 py-4 rounded-lg font-raleway text-sm font-medium text-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                SEND TEXT
              </Link>
            </div>

            {/* Contact Info Section */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="text-center">
                <Phone className="h-8 w-8 text-cmq-blue mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Phone</h3>
                <p className="font-raleway text-cmq-gray-dark">(480) 648-3429</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-cmq-blue mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Location</h3>
                <p className="font-raleway text-cmq-gray-dark">Phoenix & Scottsdale, AZ</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-cmq-blue mx-auto mb-3" />
                <h3 className="font-raleway font-semibold text-cmq-gray-darker mb-2">Hours</h3>
                <p className="font-raleway text-cmq-gray-dark text-sm">
                  Mon-Fri: 9AM-6PM<br />
                  Sat: 11AM-2PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'contact.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}