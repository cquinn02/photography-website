import Link from 'next/link'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import LogoModern from '@/components/LogoModern'
import { trackQualifiedLead } from '@/utils/analytics'

// Thank-you page for the 17hats "CMQ Headshots Contact form" (general inquiry,
// embedded on /contact-us). 17hats → Lead Capture → CMQ Headshots Contact form → After Submitting.
export default function ContactThankYou() {
  // Reaching this page = a general inquiry (contact form) was submitted.
  useEffect(() => { trackQualifiedLead('general_inquiry') }, [])

  return (
    <>
      <NextSeo
        title="Thank You - CMQ Headshots"
        description="Thank you for reaching out. Cindy has your message and will get back to you within one business day."
        noindex={true}
        nofollow={true}
        openGraph={{
          title: "Thank You - CMQ Headshots",
          description: "Thank you for reaching out. Cindy has your message and will get back to you within one business day.",
        }}
      />

      {/* Simple Header */}
      <header className="py-4" style={{
        backgroundColor: '#575757',
      }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <Link href="/">
            <LogoModern variant="light" size="medium" layout="horizontal" />
          </Link>
        </div>
      </header>

      <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4" style={{ paddingTop: '30px' }}>
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-4">
            <div className="mx-auto w-16 h-16 bg-cmq-blue rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="font-raleway text-3xl lg:text-4xl font-medium text-cmq-blue mb-3">
            THANK YOU!
          </h1>

          <h2 className="font-raleway text-xl lg:text-2xl text-black mb-5">
            We have received your message.
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="font-raleway text-lg text-black mb-6 leading-relaxed">
              Thanks for reaching out. I read every message myself and will get back
              to you within one business day.
            </p>

            <p className="font-raleway text-lg text-black mb-6 leading-relaxed">
              If you already know you want an individual session, you can see pricing
              and pick a time on the{' '}
              <Link href="/phoenix-business-headshots#pricing" className="text-cmq-blue hover:underline">
                business headshots page
              </Link>
              .
            </p>

            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-6">
              <p className="font-raleway text-lg text-black">
                If it is time-sensitive, you can{' '}
                <a href="mailto:Cindy@CMQHeadshots.com" className="text-cmq-blue hover:underline">
                  email me
                </a>{' '}
                or call{' '}
                <a href="tel:4806483429" className="text-cmq-blue hover:underline">
                  (480) 648-3429
                </a>{' '}
                directly.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}
