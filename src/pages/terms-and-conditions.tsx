import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Footer from '@/components/Footer'

export default function TermsAndConditions() {
  return (
    <>
      <NextSeo
        title="Terms and Conditions - CMQ Headshots"
        description="Terms and Conditions for CMQ Headshots website and services."
        openGraph={{
          title: "Terms and Conditions - CMQ Headshots",
          description: "Terms and Conditions for CMQ Headshots website and services.",
        }}
      />

      {/* Simple Header */}
      <header className="py-4" style={{
        backgroundColor: '#575757',
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <Link href="/">
            <Image
              src="/images/old logos /White transparent.png"
              alt="CMQ Headshots"
              width={180}
              height={48}
              className="h-12 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </header>

      <div className="min-h-screen py-12 px-4" style={{
        backgroundColor: '#383838',
        backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-cmq-gray-darker rounded-lg shadow-lg p-8 border border-white/20">
            <h1 className="font-raleway text-4xl font-bold text-cmq-blue mb-8 text-center">
              Terms and Conditions
            </h1>

            <div className="font-raleway text-white space-y-6">
              <p className="text-sm text-gray-300">Last updated: 2025</p>

              <p>
                Please read these Terms of Use (&quot;Terms&quot;, &quot;Terms of Use&quot;) carefully before using the https://www.cmqheadshots.com website (the &quot;Service&quot;) operated by CMQ Headshots (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
              </p>

              <p>
                Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>

              <p>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
              </p>

              <h2 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Intellectual Property
              </h2>

              <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of CMQHeadshots and its licensors.
              </p>

              <h2 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Links To Other Web Sites
              </h2>

              <p>
                Our Service may contain links to third-party websites or services that are not owned or controlled by CMQHeadshots.
              </p>

              <p>
                CMQHeadshots has no control over and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that CMQHeadshots shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such web sites or services.
              </p>

              <p>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
              </p>

              <h2 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Disclaimer
              </h2>

              <p>
                Your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
              </p>

              <h2 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Governing Law
              </h2>

              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States without regard to its conflict of law provisions.
              </p>

              <p>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
              </p>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}