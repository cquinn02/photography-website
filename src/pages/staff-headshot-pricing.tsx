import React from 'react'
import Layout from '@/components/Layout'
import Image from 'next/image'
import LogoModern from '@/components/LogoModern'
import { faqPageJsonLd } from '@/components/sections/faqSchema'

const BLUE = '#5577a5'
const GRAY_DARK = '#575757'
const GRAY_DARKER = '#383838'
const PAGE_LIGHT = '#E9E9E9'
const PAGE_WHITE = '#FFFFFF'
const GRAY_LIGHT = '#D0D0D0'

const body = { fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6' } as const

const CDN = 'https://images.cmqheadshots.com/images'

const coverMain = {
  src: `${CDN}/staff-pricing/cover-main-v2.webp`,
  alt: 'Staff headshot, woman with silver hair in a light blue blazer on gray background',
}
const coverSmall = [
  { src: `${CDN}/staff-pricing/cover-1-v2.webp`, alt: 'Staff headshot, man in navy blazer on gray background' },
  { src: `${CDN}/staff-pricing/cover-2-v2.webp`, alt: 'Staff headshot, woman with blonde hair on white background' },
  { src: `${CDN}/staff-pricing/cover-3-v2.webp`, alt: 'Staff headshot, man in navy blazer on white background' },
  { src: `${CDN}/staff-pricing/cover-4-v2.webp`, alt: 'Staff headshot, man in white shirt on dark background' },
]
const circlesTop = [
  { src: `${CDN}/staff-pricing/team-branding-1-v2.webp`, alt: 'Team member headshot on gray background' },
  { src: `${CDN}/staff-pricing/team-branding-2-v2.webp`, alt: 'Team member headshot on gray background' },
  { src: `${CDN}/staff-pricing/team-branding-3-v2.webp`, alt: 'Team member headshot on gray background' },
]
const circlesBottom = [
  { src: `${CDN}/staff-pricing/team-branding-4-v2.webp`, alt: 'Team member headshot on white background' },
  { src: `${CDN}/staff-pricing/team-branding-5-v2.webp`, alt: 'Team member headshot on white background' },
  { src: `${CDN}/staff-pricing/team-branding-6-v2.webp`, alt: 'Team member headshot on white background' },
]

const steps = [
  {
    title: 'Pre-Session',
    intro: 'You will receive the following information via email:',
    items: [
      'Headshot sign-up web page for scheduling your team',
      'How to dress for your headshot session (PDF download)',
      'We will arrange a phone call to discuss your headshot needs',
    ],
  },
  {
    title: 'Day of Session',
    intro: 'The general flow of how the day works:',
    items: [
      'Setup - 60 minutes',
      'Each person books a time slot on the sign-up page',
      'Images are reviewed in real time',
      'Subject selects favorite image on the day of the shoot',
      'Images are sent out to the retoucher',
    ],
  },
  {
    title: 'Post Session',
    intro: 'The final deliverable:',
    items: [
      '7 business day turnaround',
      '2048 pixel JPEG, long edge',
      'Blemish removal included',
      'Optimized for web',
    ],
  },
]

const packages = [
  {
    name: 'SMALL OFFICE',
    range: '1 - 9 Individuals',
    price: '$750 for your location plus $75.00 per image',
    description:
      'Designed for those who value quality over quantity. I spend time with each person to make sure I get the perfect shot for your personal branding.',
    bold: 'Premium retouching included.',
    note: 'If your staff comes to the studio we charge $200 which covers the session and a single image',
  },
  {
    name: 'OFFICE',
    range: '10 - 25 Individuals',
    price: '($2500)',
    description:
      'Designed for those who value quality over quantity. I spend time with each person to make sure I get the perfect shot for your personal branding.',
    bold: 'Premium retouching included.',
  },
  {
    name: 'SMALL EVENT',
    range: '26 - 100 Individuals',
    price: '($3500)',
    description:
      'Designed for those with larger offices or hosting smaller events. Less time is spent with each person to ensure that everyone receives an updated profile picture.',
    bold: '5-7 day turn around',
  },
  {
    name: 'LARGE EVENT',
    range: '101 - 250 Individuals',
    price: '($4500)',
    description:
      'Designed for those hosting larger events or conventions. This package is a great way to get traction at your booth. Add additional shooting days for $1000/day -',
    bold: 'Same day delivery',
  },
]

const faqs = [
  {
    id: 1,
    question: 'How do I pay you?',
    answer:
      'My policy is that payment is due at the time of reservation via credit card. There are no term payments, delayed payments, or payment plans of any kind.',
  },
  {
    id: 2,
    question: 'COI (Certificate of Insurance)',
    answer: 'CMQ HEADSHOTS carries a $1,000,000 General Liability Insurance Policy. COI is available upon request.',
  },
  {
    id: 3,
    question: 'Contracts',
    answer:
      'Once we agree to what package you want we will send you a contract to sign. We will send you an invoice for the deposit at that time to hold the date and time.',
  },
  {
    id: 4,
    question: 'How much time do you need?',
    answer:
      'I need 60 minutes to setup my mobile headshot station regardless of which package you choose. Projects exceeding 6 hours require a 45 minute break. The SMALL EVENT and LARGE EVENT HEADSHOT packages include up to 7 hrs of event coverage.',
  },
  {
    id: 5,
    question: 'Is retouching included?',
    answer: 'Premium Retouching is included in the OFFICE HEADSHOTS packages. Retouching is not available in Event packages.',
  },
  {
    id: 6,
    question: 'Do I get the raw files?',
    answer:
      'Unless otherwise stated, agreed upon, and compensated for, the final deliverable is a 2048 pixel (long edge) jpeg file.',
  },
  {
    id: 7,
    question: 'How much space do you need?',
    answer: 'I need a 10x15 space to setup my equipment. I need a table of some kind to setup prep items.',
  },
  {
    id: 8,
    question: 'After the event services',
    answer:
      'We believe that your branding is important and uniformity across your brand is a key component of that goal. Our corporate clients have access to my discounted new hire program. Please make CMQ HEADSHOTS part of your onboarding process.',
  },
]

function Sheet({ children, bg = PAGE_WHITE }: { children: React.ReactNode; bg?: string }) {
  return (
    <section
      className="max-w-5xl mx-auto mb-10 lg:mb-16 overflow-hidden"
      style={{ backgroundColor: bg, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.28)' }}
    >
      {children}
    </section>
  )
}

function Wordmark({ variant = 'dark', size = 'medium' }: { variant?: 'light' | 'dark'; size?: 'small' | 'medium' | 'large' }) {
  return (
    <div className="flex justify-center">
      <LogoModern variant={variant} size={size} layout="horizontal" animated={false} />
    </div>
  )
}

function Circle({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden flex-shrink-0">
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 160px, 192px" className="object-cover object-top" />
    </div>
  )
}

function BlueCircle({ text }: { text: string }) {
  return (
    <div
      className="w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center text-center px-4 flex-shrink-0 text-white font-raleway text-base lg:text-lg"
      style={{ backgroundColor: BLUE, lineHeight: '1.25' }}
    >
      {text}
    </div>
  )
}

export default function StaffHeadshotPricing() {
  return (
    <Layout
      title="Staff Headshot Pricing | CMQ Headshots"
      description="On-site and studio staff headshot packages from CMQ Headshots in Phoenix. Team branding, project details, pricing, and FAQs."
      noindex={true}
      canonical="https://www.cmqheadshots.com/staff-headshot-pricing"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqPageJsonLd(faqs) }} />

      {/* PAGE 1: COVER */}
      <div className="py-10 lg:py-16 px-4" style={{ backgroundColor: GRAY_LIGHT }}>
      <Sheet>
        <div className="flex flex-col lg:flex-row">
          {/* Side rail */}
          <div className="lg:w-[30%] flex items-center justify-center py-10 lg:py-16" style={{ backgroundColor: PAGE_LIGHT }}>
            <div className="text-center lg:text-left lg:[writing-mode:vertical-rl] lg:rotate-180">
              <h1 className="font-raleway uppercase text-4xl lg:text-6xl leading-tight" style={{ color: BLUE, fontWeight: '300', letterSpacing: '0.08em' }}>
                Staff Headshot Pricing
              </h1>
              <p className="font-raleway text-xl lg:text-2xl mt-4 lg:mt-0 lg:mr-6" style={{ color: GRAY_DARK, fontWeight: '300', letterSpacing: '0.04em' }}>
                Comfortable, easy headshots
                <br className="hidden lg:block" /> you&apos;re going to love
              </p>
            </div>
          </div>

          {/* Photo column */}
          <div className="lg:w-[70%] px-6 py-10 lg:px-12 lg:py-12">
            <Wordmark size="large" />
            <div className="mt-8">
              <Image
                src={coverMain.src}
                alt={coverMain.alt}
                width={1414}
                height={1402}
                priority
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 700px"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {coverSmall.map((img) => (
                <div key={img.src} className="relative overflow-hidden" style={{ aspectRatio: '675 / 587' }}>
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 50vw, 340px" className="object-cover object-top" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8 font-raleway" style={{ color: GRAY_DARK, letterSpacing: '0.1em' }}>
              <p className="uppercase text-base">www.cmqheadshots.com</p>
              <p className="text-base mt-1">Cindy Quinn</p>
              <p className="text-base">
                <a href="tel:+14806483429" className="hover:underline">(480) 648-3429</a>
              </p>
            </div>
          </div>
        </div>
      </Sheet>

      {/* PAGE 2: TEAM BRANDING */}
      <Sheet>
        <div>
          <div className="px-6 py-12 lg:px-12" style={{ backgroundColor: PAGE_LIGHT }}>
            <Wordmark size="large" />
            <p className="text-center font-raleway text-xl lg:text-2xl mt-2 uppercase font-medium" style={{ color: BLUE, fontWeight: '500', letterSpacing: '0.05em' }}>
              Comfortable, easy headshots you&apos;re going to love
            </p>
            <h2 className="font-raleway text-3xl lg:text-4xl text-center mt-10 mb-10" style={{ color: BLUE, letterSpacing: '0.3em' }}>
              <span className="font-normal">TEAM</span> <span className="font-bold">BRANDING</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              <Circle {...circlesTop[0]} />
              <BlueCircle text="your employees are an extension of your brand" />
              <Circle {...circlesTop[1]} />
              <Circle {...circlesTop[2]} />
            </div>
          </div>

          <div className="px-6 py-12 lg:px-12" style={{ backgroundColor: GRAY_DARK }}>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-12">
              <Circle {...circlesBottom[0]} />
              <Circle {...circlesBottom[1]} />
              <BlueCircle text="show off your company's culture" />
              <Circle {...circlesBottom[2]} />
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="font-raleway text-lg lg:text-xl text-white" style={body}>
                Your employees are an extension of your brand and your company culture. How they are represented on your public facing website, your internal communications, and their professional social media accounts impacts how your brand is perceived.
              </p>
              <p className="font-raleway text-lg lg:text-xl text-center uppercase my-8" style={{ color: '#9db4d6', fontWeight: '600', letterSpacing: '0.05em', lineHeight: '1.5' }}>
                The strength of the team is each individual member.
                <br />
                The strength of each member is the team.
              </p>
              <p className="font-raleway text-lg lg:text-xl text-white" style={body}>
                CMQ Headshots specializes in personal branding at a team level. We create a consistent aesthetic across your brand while ensuring that each team member shines as a confident and approachable individual.
              </p>
            </div>
          </div>
        </div>
      </Sheet>

      {/* PAGE 3: PROJECT DETAILS */}
      <Sheet bg={PAGE_LIGHT}>
        <div className="px-6 py-12 lg:px-12">
          <Wordmark size="large" />
          <h2 className="font-raleway text-3xl lg:text-4xl text-center mt-8 mb-12" style={{ color: BLUE, letterSpacing: '0.3em' }}>
            <span className="font-bold">PROJECT</span> <span className="font-normal">DETAILS</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <div key={step.title} className="py-8" style={{ borderBottom: `1px solid ${BLUE}` }}>
                <div className="flex items-center mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-raleway text-lg"
                    style={{ border: `3px solid ${BLUE}`, color: BLUE, fontWeight: '700' }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="font-raleway text-xl lg:text-2xl uppercase" style={{ color: GRAY_DARKER, fontWeight: '600', letterSpacing: '0.05em' }}>
                    {step.title}
                  </h3>
                </div>
                <p className="font-raleway text-lg mb-2 pl-14" style={{ ...body, color: GRAY_DARKER, fontWeight: '600' }}>
                  {step.intro}
                </p>
                <ul className="pl-14 space-y-1">
                  {step.items.map((item) => (
                    <li key={item} className="font-raleway text-lg" style={{ ...body, color: GRAY_DARKER }}>
                      &bull; {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Sheet>

      {/* PAGE 4: HEADSHOT PROPOSAL */}
      <Sheet>
        <div className="px-6 py-12 lg:px-12">
          <Wordmark size="large" />
          <p className="text-center font-raleway text-sm mt-1" style={{ color: GRAY_DARK, letterSpacing: '0.05em' }}>
            Phoenix, Arizona 85087 - www.CMQHeadshots.com - (480) 648-3429
          </p>
          <h2 className="font-raleway text-3xl lg:text-4xl text-center mt-8 mb-8" style={{ color: GRAY_DARKER, letterSpacing: '0.3em' }}>
            <span className="font-normal">HEADSHOT</span> <span className="font-bold">PROPOSAL</span>
          </h2>

          <div className="px-6 py-4 lg:px-10" style={{ backgroundColor: PAGE_LIGHT }}>
            {packages.map((pkg) => (
              <div key={pkg.name} className="py-6" style={{ borderBottom: `2px solid ${BLUE}` }}>
                <h3 className="font-raleway text-2xl uppercase mb-2" style={{ color: BLUE, letterSpacing: '0.05em' }}>
                  <span className="font-bold">{pkg.name}</span> <span className="font-normal">HEADSHOTS</span>
                </h3>
                <p className="font-raleway text-lg mb-2" style={{ color: GRAY_DARKER }}>
                  <span style={{ fontWeight: '400' }}>{pkg.range}</span>
                  <span className="ml-4" style={{ fontWeight: '700' }}>{pkg.price}</span>
                </p>
                <p className="font-raleway text-lg pl-0 lg:pl-12" style={{ ...body, color: GRAY_DARKER }}>
                  {pkg.description} <span style={{ fontWeight: '700' }}>{pkg.bold}</span>
                </p>
                {pkg.note && (
                  <p className="font-raleway text-base italic mt-3" style={{ ...body, color: GRAY_DARKER }}>
                    {pkg.note}
                  </p>
                )}
              </div>
            ))}

            <div className="py-8">
              <h3 className="font-raleway text-2xl text-center uppercase mb-4" style={{ color: BLUE, letterSpacing: '0.15em' }}>
                A&apos;La Carte
              </h3>
              <p className="font-raleway text-base uppercase text-center" style={{ color: GRAY_DARKER, lineHeight: '1.8', letterSpacing: '0.02em' }}>
                Group shots (each $250) <span style={{ color: BLUE }}>|</span> Office/event candids (15 minute increments) $200
                <br />
                Make up artist (day) $750 <span style={{ color: BLUE }}>|</span> Additional people can be added to office headshot package for $100 per person
              </p>
            </div>
          </div>
        </div>
      </Sheet>

      {/* PAGE 5: FAQ */}
      <Sheet bg={GRAY_DARK}>
        <div className="px-6 py-12 lg:px-12">
          <Wordmark variant="light" size="large" />
          <h2 className="font-raleway text-3xl lg:text-4xl text-center mt-8 pb-4 mb-8" style={{ color: '#ffffff', letterSpacing: '0.3em', borderBottom: '1px solid #ffffff' }}>
            <span className="font-bold">FAQ</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <h3 className="font-raleway text-lg uppercase mb-1" style={{ color: '#ffffff', fontWeight: '600', letterSpacing: '0.03em' }}>
                  * {faq.question}
                </h3>
                <p className="font-raleway text-lg text-white" style={body}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12 pt-6" style={{ borderTop: '1px solid #ffffff' }}>
            <p className="font-raleway text-base uppercase text-white mb-3" style={{ fontWeight: '600', letterSpacing: '0.03em' }}>
              Still have questions? Give me a call!{' '}
              <a href="tel:+14806483429" className="underline">(480) 648-3429</a>
            </p>
            <p className="font-raleway text-sm text-white" style={{ ...body, lineHeight: '1.7' }}>
              It&apos;s always our goal to make sure that we live up to our promise of providing you with the best in customer service. We pride ourselves in being rated Arizona best headshot photography studio and anything less than your complete and total satisfaction would be considered failure to live up to our own high standards. If you have any questions or concerns, please don&apos;t hesitate to give us a call.
            </p>
          </div>
        </div>
      </Sheet>
      </div>
    </Layout>
  )
}
