import Link from 'next/link'
import { useEffect } from 'react'
import { NextSeo } from 'next-seo'
import LogoModern from '@/components/LogoModern'
import { trackConvertedLead } from '@/utils/analytics'

// Thank-you page for the 17hats "On Location Headshots form" (on-site quote
// request). 17hats → Lead Capture → On Location Headshots form → After Submitting.
export default function OnsiteThankYou() {
  // Reaching this page = an on-site quote request was submitted.
  useEffect(() => { trackConvertedLead('onsite_quote') }, [])

  return (
    <>
      <NextSeo
        title="Thank You - CMQ Headshots"
        description="Thank you for your on-site headshot quote request. Your quote is on its way and Cindy will follow up shortly."
        noindex={true}
        nofollow={true}
        openGraph={{
          title: "Thank You - CMQ Headshots",
          description: "Thank you for your on-site headshot quote request. Your quote is on its way and Cindy will follow up shortly.",
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
            We have received your on-site headshot request.
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="font-raleway text-lg text-black mb-6 leading-relaxed">
              Your on-site quote is on its way to your inbox. It covers pricing,
              how the day works, and what your team receives.
            </p>

            <p className="font-raleway text-lg text-black mb-6 leading-relaxed">
              I will follow up within one business day to set up a quick phone call
              and go over the details for your team.
            </p>

            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-6">
              <p className="font-raleway text-lg text-black">
                If your session is time-sensitive, you can{' '}
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
