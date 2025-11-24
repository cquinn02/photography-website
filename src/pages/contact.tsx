import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Phone, MapPin, Clock, Mail, Calendar, MessageSquare, Send, Video } from 'lucide-react'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import FourImageRow from '@/components/sections/FourImageRow'

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
    <Layout
      title={frontmatter.title}
      description={frontmatter.description}
      canonical="https://www.cmqheadshots.com/contact"
      ogUrl="https://www.cmqheadshots.com/contact"
      showHeaderButton={false}
    >
      {/* Professional Headshots Gallery Section */}
      <section className="bg-white py-0">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-0">
            {/* Professional headshots matching CMQ style */}
            <div className="aspect-[4/5] overflow-hidden relative">
              <Image
                src="/images/website media/optimized/CMQHeadshots-6008a-web-optimized.webp"
                alt="Professional Business Headshot"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-gray-700 relative">
              <Image
                src="/images/website media/CMQHeadshots-Sherry-Krieghauser5896a-web.webp"
                alt="Corporate Headshot - Professional Woman"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden relative">
              <Image
                src="/images/website media/optimized/CMQHeadshots-6067a-web-optimized.webp"
                alt="Executive Portrait - Business Professional"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-gray-700 relative">
              <Image
                src="/images/website media/CMQHEADSHOTS-executive-headshots-phoenix-11669-web-2.webp"
                alt="Professional Headshot - Corporate Woman"
                fill
                className="object-cover"
                sizes="25vw"
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
              <h1 className="font-raleway text-3xl lg:text-4xl mb-6" style={{ color: '#5577a5', fontWeight: '900' }}>
                CONTACT CMQ HEADSHOTS
              </h1>
              <h2 className="font-raleway text-3xl md:text-4xl font-normal text-cmq-blue mb-4">
                We&apos;d Love to Hear From You
              </h2>
              <p className="font-raleway text-xl font-normal text-cmq-gray-darker mb-8" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' }}>
                If you have a question that you can&apos;t find an answer to, or a date you can&apos;t find,<br />
                fill out the form below and we will get back to you.
              </p>

              {/* Contact Information */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-raleway font-semibold text-xl mb-4" style={{ color: '#5577a5' }}>Contact Information</h3>
                    <p className="font-raleway text-xl font-normal mb-4" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                      <strong>Phone:</strong> (480) 648-3429
                    </p>
                    <p className="font-raleway text-xl font-normal" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                      <strong>Location:</strong> Phoenix, Arizona<br />
                      Serving the Greater Phoenix area including Scottsdale, Tempe, Chandler, and surrounding communities.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-raleway font-semibold text-xl mb-4" style={{ color: '#5577a5' }}>Studio Hours</h3>
                    <p className="font-raleway text-xl font-normal mb-4" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                      <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                      <strong>Saturday:</strong> 11:00 AM - 2:00 PM<br />
                      <strong>Sunday:</strong> Closed
                    </p>
                    <p className="font-raleway text-lg italic" style={{ fontWeight: '400', color: '#575757' }}>
                      Evening and weekend sessions available by special arrangement.
                    </p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <h3 className="font-raleway font-semibold text-2xl lg:text-3xl mb-4" style={{ color: '#5577a5' }}>What to Expect When You Contact Us</h3>
                  <p className="font-raleway text-xl font-normal" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                    When you reach out, we&apos;ll discuss your specific headshot needs and goals, the type of session that&apos;s right for you, available session dates and times, what to bring and how to prepare, and session investment and package options. Professional headshots are an investment in your career and personal brand. Let&apos;s create images that truly represent who you are and help you achieve your professional goals.
                  </p>
                </div>
              </div>
            </div>

            {/* 17hats Contact Form */}
            <div className="mt-8">
              <iframe
                name="lc_contact_form"
                frameBorder="0"
                width="100%"
                height="600"
                src="https://537178.17hats.com/p#/embed/tkpptcchttpxfgbpfwhstrxfcbwhchgp"
                title="Contact Form"
              />
              <Script
                src="https://537178.17hats.com/vendor/iframeSizer.min.js"
                strategy="lazyOnload"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Four Image Row Section - Above Footer */}
      <FourImageRow
        images={[
          {
            src: "/images/website media/1x1 images/jpegs/CMQHEADSHOTS-Sales-execuitve-41807.webp",
            alt: "Professional business headshot - Male Executive"
          },
          {
            src: "/images/website media/1x1 images/jpegs/CMQHEADSHOTS-Sales-rep-41363.webp",
            alt: "Professional business headshot - Female Executive"
          },
          {
            src: "/images/website media/1x1 images/jpegs/CMQHEADSHOTS-Sales reps-41679.webp",
            alt: "Professional business headshot - Male Executive"
          },
          {
            src: "/images/website media/1x1 images/jpegs/CMQHEADSHOTS-sales-41836-.webp",
            alt: "Professional business headshot - Female Executive"
          }
        ]}
        fullWidth={true}
        borderColor="#5577a5"
      />
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'contact.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}