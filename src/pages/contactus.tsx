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
      canonical="https://www.cmqheadshots.com/contactus"
      ogUrl="https://www.cmqheadshots.com/contactus"
      showHeaderButton={false}
    >
      {/* Four Image Row Section - Top */}
      <FourImageRow
        images={[
          {
            src: "https://images.cmqheadshots.com/images/website%20media/1x1%20images/jpegs/CMQHEADSHOTS-Sales-execuitve-41807.webp",
            alt: "Professional business headshot - Male Executive"
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/1x1%20images/jpegs/CMQHEADSHOTS-Sales-Headshots-41363-1x1.webp",
            alt: "Professional business headshot - Female Executive"
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/1x1%20images/jpegs/CMQHEADSHOTS-Sales%20reps-41679.webp",
            alt: "Professional business headshot - Male Executive",
            brightness: 1.15
          },
          {
            src: "https://images.cmqheadshots.com/images/website%20media/1x1%20images/jpegs/CMQHEADSHOTS-sales-41836-.webp",
            alt: "Professional business headshot - Female Executive"
          }
        ]}
        fullWidth={true}
        borderColor="#5577a5"
      />

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-8">
              {/* Animated Hello - Slide In */}
              <div className="overflow-hidden mb-6">
                <p className="font-raleway text-5xl md:text-6xl lg:text-7xl">
                  <span
                    className="inline-block animate-slide-in-right"
                    style={{
                      color: '#5577a5',
                      fontWeight: '400'
                    }}
                  >
                    Hello
                  </span>
                  <span
                    className="inline-block animate-slide-in-right-delayed ml-3"
                    style={{
                      color: '#575757',
                      fontWeight: '400'
                    }}
                  >
                    - Hi there!
                  </span>
                </p>
              </div>
              <style jsx>{`
                @keyframes slideInRight {
                  0% {
                    transform: translateX(100%);
                    opacity: 0;
                  }
                  60% {
                    transform: translateX(-10%);
                    opacity: 1;
                  }
                  80% {
                    transform: translateX(5%);
                  }
                  100% {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
                .animate-slide-in-right {
                  animation: slideInRight 0.8s ease-out forwards;
                }
                .animate-slide-in-right-delayed {
                  opacity: 0;
                  animation: slideInRight 0.8s ease-out 0.3s forwards;
                }
              `}</style>
              <h2 className="font-raleway text-2xl md:text-3xl mb-4" style={{ color: '#5577a5' }}>
                <span style={{ fontWeight: '800' }}>WE&apos;D LOVE</span>{' '}
                <span style={{ fontWeight: '400' }}>TO HEAR FROM YOU!</span>
              </h2>
              <p className="font-raleway text-xl mb-8" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                If you have a question that you can&apos;t find an answer to, or a date you can&apos;t find,<br />
                fill out the form below and we will get back to you.
              </p>
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

            {/* What to Expect - Right below form */}
            <div className="mt-10 text-center">
              <h3 className="font-raleway text-2xl lg:text-3xl mb-4" style={{ color: '#5577a5' }}>
                <span style={{ fontWeight: '700' }}>WHAT TO EXPECT</span>{' '}
                <span style={{ fontWeight: '400' }}>WHEN YOU CONTACT US</span>
              </h3>
              <p className="font-raleway text-xl" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                When you reach out, we&apos;ll discuss your specific headshot needs and goals, the type of session that&apos;s right for you, available session dates and times, what to bring and how to prepare, and session investment and package options. Professional headshots are an investment in your career and personal brand. Let&apos;s create images that truly represent who you are and help you achieve your professional goals.
              </p>
            </div>

            {/* Contact Information - Below What to Expect */}
            <div className="bg-gray-50 rounded-lg p-8 mt-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-raleway text-xl mb-4" style={{ color: '#5577a5', fontWeight: '700' }}>CONTACT INFORMATION</h3>
                  <p className="font-raleway text-xl mb-4" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                    <strong>Phone:</strong> (480) 648-3429
                  </p>
                  <p className="font-raleway text-xl" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                    <strong>Location:</strong> Phoenix, Arizona<br />
                    Serving the Greater Phoenix area including Scottsdale, Tempe, Chandler, and surrounding communities.
                  </p>
                </div>
                <div>
                  <h3 className="font-raleway text-xl mb-4" style={{ color: '#5577a5', fontWeight: '700' }}>STUDIO HOURS</h3>
                  <p className="font-raleway text-xl mb-4" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#575757' }}>
                    <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM<br />
                    <strong>Saturday:</strong> 11:00 AM - 2:00 PM<br />
                    <strong>Sunday:</strong> Closed
                  </p>
                  <p className="font-raleway text-lg italic" style={{ fontWeight: '400', color: '#575757' }}>
                    Evening and weekend sessions available by special arrangement.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Professional Headshots Gallery Section - Bottom */}
      <section className="bg-white py-0">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-0">
            <div className="aspect-[5/4] overflow-hidden relative">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/5x4%20image/webp/CMQHEADSHOTS-Sales%20Headshots-Cody-6571.webp"
                alt="Corporate Headshot - Professional Woman"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[5/4] overflow-hidden relative">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/5x4%20image/webp/CMQHEADSHOTS-Sales-Headshots-Robert-Kenny-6897f.webp"
                alt="Professional Business Headshot"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[5/4] overflow-hidden relative">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/5x4%20image/webp/CMQHEADSHOTS-Sales-Headshots-carleyYeats6980.webp"
                alt="Executive Portrait - Business Professional"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[5/4] overflow-hidden relative">
              <Image
                src="https://images.cmqheadshots.com/images/website%20media/5x4%20image/webp/CMQHEADSHOTS-Sales%20Headshots-41669.webp"
                alt="Professional Headshot - Corporate Woman"
                fill
                className="object-cover"
                sizes="25vw"
              />
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