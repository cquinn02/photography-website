import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <NextSeo
        title="Privacy Policy - CMQ Headshots"
        description="Privacy Policy for CMQ Headshots website and services."
        canonical="https://www.cmqheadshots.com/privacy-policy"
        openGraph={{
          title: "Privacy Policy - CMQ Headshots",
          description: "Privacy Policy for CMQ Headshots website and services.",
          type: 'website',
          url: 'https://www.cmqheadshots.com/privacy-policy',
          images: [{
            url: 'https://www.cmqheadshots.com/images/website media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp',
            width: 1200,
            height: 630,
            alt: 'CMQ Headshots Privacy Policy',
          }],
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
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/optimized/Icon-documentation-video-women-optimized.webp"
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
        backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto'
      }}>
        <div className="max-w-4xl mx-auto">
          <div className="bg-cmq-gray-darker rounded-lg shadow-lg p-8 border border-white/20">
            <h1 className="font-raleway text-4xl font-bold text-cmq-blue mb-8 text-center">
              Privacy Policy
            </h1>

            <div className="font-raleway text-white space-y-6">
              <p className="text-sm text-gray-300">Last updated: February 21, 2021</p>

              <p>
                CMQHeadshots (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the CMQHeadshots website (the &quot;Service&quot;).
              </p>

              <p>
                This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
              </p>

              <p>
                We will not use or share your information with anyone except as described in this Privacy Policy.
              </p>

              <p>
                We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://www.cmqheadshots.com
              </p>

              <h3 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Information Collection And Use
              </h3>

              <p>
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (&quot;Personal Information&quot;) may include, but is not limited to:
              </p>

              <ul className="list-disc ml-6 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Telephone number</li>
              </ul>

              <h3 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Log Data
              </h3>

              <p>
                We collect information that your browser sends whenever you visit our Service (&quot;Log Data&quot;). This Log Data may include information such as your computer&apos;s Internet Protocol (&quot;IP&quot;) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
              </p>

              <h3 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Cookies
              </h3>

              <p>
                Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer&apos;s hard drive.
              </p>

              <p>
                We use &quot;cookies&quot; to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>

              <h3 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Service Providers
              </h3>

              <p>
                We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
              </p>

              <p>
                These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>

              <h3 className="text-2xl font-semibold text-cmq-blue mt-8 mb-4">
                Security
              </h3>

              <p>
                The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
              </p>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}