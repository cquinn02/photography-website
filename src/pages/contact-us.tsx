import Layout from '@/components/Layout'
import HatsFormLoader from '@/components/HatsFormLoader'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
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
      canonical="https://www.cmqheadshots.com/contact-us"
      ogUrl="https://www.cmqheadshots.com/contact-us"
      ogImage="https://images.cmqheadshots.com/images/website%20media/optimized/cmq-headshots-Anna-scottsdale-headshots-H0622-jp-leg-sqo-optimized.webp"
      showHeaderButton={false}
    >
      {/* BreadcrumbList Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cmqheadshots.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact",
                "item": "https://www.cmqheadshots.com/contact-us"
              }
            ]
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact CMQ Headshots",
            "url": "https://www.cmqheadshots.com/contact-us",
            "mainEntity": {
              "@type": "ProfessionalService",
              "@id": "https://www.cmqheadshots.com",
              "name": "CMQ Headshots",
              "telephone": "+1-480-648-3429",
              "email": "cindy@cmqheadshots.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-480-648-3429",
                "contactType": "customer service",
                "availableLanguage": "English",
                "areaServed": "US"
              }
            }
          }) }}
        />
      </Head>

      {/* 5:4 Bokeh Headshots - Top */}
      <section className="bg-white py-0">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-0">
            <div className="aspect-[5/4] overflow-hidden relative">
              <Image
                src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-PHOENIX%20LINKEDIN-1.jpg"
                alt="Professional headshot of a woman by CMQ Headshots Phoenix"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[5/4] overflow-hidden relative">
              <Image
                src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-PHOENIX%20LINKEDIN-2.jpg"
                alt="Male executive headshot photographed in Phoenix Arizona"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[5/4] overflow-hidden relative">
              <Image
                src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-PHOENIX%20LINKEDIN-3.jpg"
                alt="Corporate headshot of a professional woman in Scottsdale"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="aspect-[5/4] overflow-hidden relative">
              <Image
                src="https://images.cmqheadshots.com/images/CMQHEADSHOTS-PHOENIX%20LINKEDIN-4.jpg"
                alt="Business professional headshot for LinkedIn by CMQ Headshots"
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
          {/* Heading and tagline get a wider column than the body text so the H1 fits on one line at 60px */}
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-10">
              <span className="font-raleway" style={{ color: '#000000', fontWeight: '400' }}>CONTACT </span>
                <span style={{ fontFamily: 'Playfair Display, Georgia, serif', color: '#5577a5', fontWeight: '400', letterSpacing: '-0.02em', fontSize: '1.1em' }}>CMQ</span>
                <span className="font-raleway" style={{ color: '#000000', fontWeight: '300', letterSpacing: '0.05em' }}> HEADSHOTS</span>
            </h1>
            <p className="font-raleway text-2xl md:text-3xl mb-8" style={{ color: '#5577a5' }}>
              <span style={{ fontWeight: '500' }}>WE&apos;D LOVE</span>{' '}
              <span style={{ fontWeight: '400' }}>TO HEAR FROM YOU</span>
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <div className="text-center mb-8">
              <p className="font-raleway text-xl mb-8" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#000000' }}>
                If you have a question that you can&apos;t find an answer to, or a date you can&apos;t find,<br />
                fill out the form below and we will get back to you.
              </p>
            </div>

            {/* Contact Information - above the form so the form sits below the first screen (LCP, Sep 2026) */}
            <div className="bg-gray-50 rounded-lg p-8 mt-20 mb-10 md:-mx-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-raleway text-xl mb-4" style={{ color: '#5577a5', fontWeight: '600' }}>CONTACT INFORMATION</h3>
                  <p className="font-raleway text-xl mb-4" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#000000' }}>
                    <strong>Call or text:</strong>{' '}
                    <a href="tel:+14806483429" className="underline" style={{ color: '#5577a5' }}>(480) 648-3429</a>
                  </p>
                  <p className="font-raleway text-xl mb-4" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#000000' }}>
                    <strong>Email:</strong>{' '}
                    <a href="mailto:Cindy@CMQHeadshots.com" className="underline" style={{ color: '#5577a5' }}>Cindy@CMQHeadshots.com</a>
                  </p>
                  <p className="font-raleway text-xl" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#000000' }}>
                    <strong>Location:</strong> Phoenix, Arizona<br />
                    Serving the Greater Phoenix area including Scottsdale, Tempe, Chandler, and surrounding communities.
                  </p>
                </div>
                <div>
                  <h3 className="font-raleway text-xl mb-4" style={{ color: '#5577a5', fontWeight: '600' }}>STUDIO HOURS</h3>
                  <p className="font-raleway text-xl mb-4" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#000000' }}>
                    <strong>Monday - Friday:</strong> 9:00 am - 6:00 pm<br />
                    <strong>Saturday:</strong> 11:00 am - 2:00 pm<br />
                    <strong>Sunday:</strong> Closed
                  </p>
                  <p className="font-raleway text-lg italic" style={{ fontWeight: '400', color: '#000000' }}>
                    Evening and weekend sessions available by special arrangement.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
            {/* What to Expect: above the form on desktop, below it on mobile (flex order) */}
            <div className="mt-10 md:mt-0 md:mb-10 text-center order-3 md:order-2">
              <h3 className="font-raleway text-2xl lg:text-3xl mb-4" style={{ color: '#5577a5' }}>
                <span style={{ fontWeight: '600' }}>WHAT TO EXPECT</span>{' '}
                <span style={{ fontWeight: '400' }}>WHEN YOU CONTACT US</span>
              </h3>
              <p className="font-raleway text-xl" style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: '#000000' }}>
                When you reach out, we&apos;ll discuss your specific headshot needs and goals, the type of session that&apos;s right for you, available session dates and times, what to bring and how to prepare, and session investment and package options. Professional headshots are an investment in your career and personal brand. Let&apos;s create images that truly represent who you are and help you achieve your professional goals.
              </p>
            </div>

            {/* 17hats Contact Form */}
            <div className="mt-8 md:mt-0 order-2 md:order-3">
              <HatsFormLoader src="https://537178.17hats.com/p#/embed/tkpptcchttpxfgbpfwhstrxfcbwhchgp" title="Contact Form" height={660} />
            </div>
            </div>


          </div>
        </div>
      </section>

      {/* 1:1 Gray Background Headshots - Bottom */}
      <FourImageRow
        images={[
          {
            src: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-LinkedIn%20Headshot%20Phoenix-3.jpg",
            alt: "Phoenix headshot photographer - female professional portrait"
          },
          {
            src: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-LinkedIn%20Headshot%20Phoenix-4.jpg",
            alt: "Scottsdale business headshot - male professional portrait"
          },
          {
            src: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-LinkedIn%20Headshot%20Phoenix-2.jpg",
            alt: "Executive headshot photography Phoenix - professional woman"
          },
          {
            src: "https://images.cmqheadshots.com/images/CMQHEADSHOTS-Phoenix%20LinkedIn%20headshot-5.jpg",
            alt: "LinkedIn profile headshot by CMQ Headshots in Phoenix AZ"
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