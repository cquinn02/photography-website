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
    <Layout title={frontmatter.title} description={frontmatter.description} showHeaderButton={false}>
      {/* Professional Headshots Gallery Section */}
      <section className="bg-white py-0">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-0">
            {/* Professional headshots matching CMQ style */}
            <div className="aspect-[4/5] overflow-hidden relative">
              <Image
                src="/images/website media/CMQHeadshots-6008a-web.jpg"
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
                src="/images/website media/CMQHeadshots-6067a-web.jpg"
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
              <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#5577a5' }}>
                CONTACT CMQ HEADSHOTS
              </h1>
              <h2 className="font-raleway text-3xl md:text-4xl font-normal text-cmq-blue mb-4">
                WE&apos;D LOVE TO HEAR FROM YOU
              </h2>
              <p className="font-raleway text-lg text-cmq-gray-darker leading-relaxed">
                If you have a question that you can&apos;t find an answer to, or a date you can&apos;t find,<br />
                fill out out form below and we will get back to you.
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

          </div>
        </div>
      </section>

      {/* Four Image Row Section - Above Footer */}
      <FourImageRow
        images={[
          {
            src: "/images/website media/CMQHeadshots-41807-jpmini-leg-sqo.webp",
            alt: "Professional business headshot - Female Executive"
          },
          {
            src: "/images/website media/Nikcole2544-1x1.webp",
            alt: "Professional business headshot - Male Executive"
          },
          {
            src: "/images/website media/Shawn Wilson10136-1x1.webp",
            alt: "Professional business headshot - Executive Woman"
          },
          {
            src: "/images/website media/CMQHEADSHOTS-LisaS0258.webp",
            alt: "Professional business headshot - Executive"
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