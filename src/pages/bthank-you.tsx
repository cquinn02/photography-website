import Link from 'next/link'
import { NextSeo } from 'next-seo'
import LogoModern from '@/components/LogoModern'

export default function BThankYou() {
  return (
    <>
      <NextSeo
        title="Thank You - CMQ Headshots"
        description="Thank you for your business inquiry. We have received your submission and will be in touch soon."
        openGraph={{
          title: "Thank You - CMQ Headshots",
          description: "Thank you for your business inquiry. We have received your submission and will be in touch soon.",
        }}
      />

      {/* Simple Header */}
      <header className="py-4" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
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
          <h1 className="font-raleway text-3xl lg:text-4xl font-bold text-cmq-blue mb-3">
            THANK YOU!
          </h1>

          <h2 className="font-raleway text-xl lg:text-2xl text-cmq-gray-darker mb-5">
            We have received your submission!
          </h2>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="font-raleway text-lg text-cmq-gray-dark mb-6 leading-relaxed">
              We will be sending a few emails in the next 6 hours that will provide
              you with information on how to prepare for your headshot session.
            </p>

            <p className="font-raleway text-lg text-cmq-gray-dark mb-6 leading-relaxed">
              One of the emails contains a link to videos. Please watch them before your session.
            </p>

            {/* Contact Information */}
            <div className="border-t border-gray-200 pt-6">
              <p className="font-raleway text-lg text-cmq-gray-dark">
                If you have any questions or concerns you can{' '}
                <a href="mailto:Cindy@CMQHeadshot.com" className="text-cmq-blue hover:underline">
                  contact us
                </a>{' '}
                or call{' '}
                <a href="tel:4806483429" className="text-cmq-blue hover:underline">
                  (480) 648-3429
                </a>{' '}
                for immediate assistance.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}