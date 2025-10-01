import Layout from '@/components/Layout'
import Image from 'next/image'
import FullWidthSection from '@/components/sections/FullWidthSection'
import FourImageRow from '@/components/sections/FourImageRow'

export default function CompositeMarketingExamples() {
  return (
    <Layout
      title="Composite Marketing Examples | Team Photography Options"
      description="Compare different marketing approaches for our composite team photography service"
      showHeaderButton={true}
    >
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] bg-white">
        <div className="absolute inset-0">
          <Image
            src="/images/website media/BTS-at-Kierland-20210154-scaled.webp"
            alt="Corporate headshot session in progress"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative h-full flex items-center justify-center" style={{ paddingTop: '60px' }}>
          <div className="w-full px-4 text-center">
            <h1 className="font-raleway text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 font-bold drop-shadow-lg" style={{ color: '#ffffff' }}>
              COMPOSITE MARKETING<br />EXAMPLES
            </h1>
            <p className="font-raleway text-xl md:text-2xl text-white drop-shadow-lg mb-8">
              Compare Different Approaches for Our Flexible Team Photography Service
            </p>
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-8 text-center" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="font-raleway text-3xl lg:text-4xl font-bold" style={{ color: '#5a81b9' }}>
          Scalable Team Photography in Phoenix & Scottsdale, AZ
        </h2>
      </section>

      {/* Individual Headshots Section */}
      <FourImageRow
        images={[
          { src: '/images/website media/CMQHEADSHOTS-Bob-0621-headshot.jpg', alt: 'Bob - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Lauren-0763-fullres.jpg', alt: 'Lauren - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Brayley-0718-fullres.jpg', alt: 'Brayley - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Adrian-0640-fullres.jpg', alt: 'Adrian - Corporate headshot' }
        ]}
        backgroundColor="url('/images/website media/grey linen-background.jpg')"
        fullWidth={true}
      />

      {/* VERSION 1: Problem/Solution Format */}
      <FullWidthSection
        title="VERSION 1: Team Photos That Grow With Your Business"
        description="THE CHALLENGE: Your team is constantly evolving. New hires join, employees move on, and scheduling everyone for updated photos becomes a logistical nightmare.

THE SOLUTION: Composite team photography lets you build and maintain professional team images without the hassle. We photograph each person individually, then seamlessly blend them into group portraits that look authentic and polished.

WHY IT WORKS:
• New employee? Schedule one quick session and we add them in
• Someone leaves? We simply update the composite
• Consistent lighting and professional quality across all team members
• No more coordinating busy schedules for group shoots"
        ctaText="CHOOSE VERSION 1"
        ctaLink="/contact"
        backgroundColor="#F1F1F1"
        textColor="#333333"
        titleColor="#d32f2f"
        textAlign="center"
        contentImages={[
          { src: "/images/website media/CMQHEADSHOTS-cmq composite4-thin.webp", alt: "Corporate headshots composite showing team uniformity", caption: "Full team composite" },
          { src: "/images/website media/CMQHEADSHOTS-ims sales thin.jpg", alt: "IMS sales team composite headshots", caption: "Sales team composite" },
          { src: "/images/website media/CMQHEADSHOTS-IMS service thin.jpg", alt: "IMS service team composite headshots", caption: "Service team composite" }
        ]}
      />

      {/* Individual Headshots Section */}
      <FourImageRow
        images={[
          { src: '/images/website media/CMQHEADSHOTS-Bob-0621-headshot.jpg', alt: 'Bob - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Lauren-0763-fullres.jpg', alt: 'Lauren - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Brayley-0718-fullres.jpg', alt: 'Brayley - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Adrian-0640-fullres.jpg', alt: 'Adrian - Corporate headshot' }
        ]}
        backgroundColor="url('/images/website media/grey linen-background.jpg')"
        fullWidth={true}
      />

      {/* VERSION 2: Benefit-Focused with Numbered Features */}
      <FullWidthSection
        title="VERSION 2: Smart Team Photography for Modern Businesses"
        description="Our composite team photography service offers unprecedented flexibility for growing companies. Here's how it transforms your approach to professional team images:

🔸 SCALABLE SOLUTION
Add new team members without reshooting existing employees

🔸 COST EFFECTIVE
Eliminate expensive full-team reshoot sessions

🔸 SCHEDULING FREEDOM
No more calendar coordination nightmares

🔸 CONSISTENT QUALITY
Perfect lighting and styling for every team member

🔸 FUTURE-PROOF INVESTMENT
One setup serves your company for years to come

Perfect for companies experiencing growth, seasonal staffing changes, or multi-location teams."
        ctaText="CHOOSE VERSION 2"
        ctaLink="/contact"
        backgroundColor="#ffffff"
        textColor="#333333"
        titleColor="#1976d2"
        textAlign="center"
        contentImages={[
          { src: "/images/website media/CMQHEADSHOTS-cmq composite4-thin.webp", alt: "Corporate headshots composite showing team uniformity", caption: "Full team composite" },
          { src: "/images/website media/CMQHEADSHOTS-ims sales thin.jpg", alt: "IMS sales team composite headshots", caption: "Sales team composite" },
          { src: "/images/website media/CMQHEADSHOTS-IMS service thin.jpg", alt: "IMS service team composite headshots", caption: "Service team composite" }
        ]}
      />

      {/* Individual Headshots Section */}
      <FourImageRow
        images={[
          { src: '/images/website media/CMQHEADSHOTS-Bob-0621-headshot.jpg', alt: 'Bob - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Lauren-0763-fullres.jpg', alt: 'Lauren - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Brayley-0718-fullres.jpg', alt: 'Brayley - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Adrian-0640-fullres.jpg', alt: 'Adrian - Corporate headshot' }
        ]}
        backgroundColor="url('/images/website media/grey linen-background.jpg')"
        fullWidth={true}
      />

      {/* VERSION 3: Story-Driven with Customer Perspective */}
      <FullWidthSection
        title="VERSION 3: Finally, Team Photos That Make Sense for Your Business"
        description="You've been there: trying to coordinate 15+ busy schedules for a team photo, only to have three people unavailable and another two join the company the following week.

Traditional group photography doesn't work for today's dynamic teams. That's why we developed our composite approach.

We photograph each team member individually at your location or our studio, then expertly combine them into beautiful group portraits. The result? Professional team images that look completely natural, with the flexibility to add or remove team members as your business evolves.

Companies love this approach because it eliminates the stress of group coordination while delivering superior results. Your team gets consistent, professional headshots, and you get the peace of mind knowing future changes won't require starting over.

It's team photography designed for the way businesses actually work."
        ctaText="CHOOSE VERSION 3"
        ctaLink="/contact"
        backgroundColor="#f8f9fa"
        textColor="#333333"
        titleColor="#388e3c"
        textAlign="center"
        contentImages={[
          { src: "/images/website media/CMQHEADSHOTS-cmq composite4-thin.webp", alt: "Corporate headshots composite showing team uniformity", caption: "Full team composite" },
          { src: "/images/website media/CMQHEADSHOTS-ims sales thin.jpg", alt: "IMS sales team composite headshots", caption: "Sales team composite" },
          { src: "/images/website media/CMQHEADSHOTS-IMS service thin.jpg", alt: "IMS service team composite headshots", caption: "Service team composite" }
        ]}
      />

      {/* Individual Headshots Section */}
      <FourImageRow
        images={[
          { src: '/images/website media/CMQHEADSHOTS-Bob-0621-headshot.jpg', alt: 'Bob - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Lauren-0763-fullres.jpg', alt: 'Lauren - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Brayley-0718-fullres.jpg', alt: 'Brayley - Corporate headshot' },
          { src: '/images/website media/CMQHEADSHOTS-Adrian-0640-fullres.jpg', alt: 'Adrian - Corporate headshot' }
        ]}
        backgroundColor="url('/images/website media/grey linen-background.jpg')"
        fullWidth={true}
      />

      {/* VERSION 4: Simple and Elegant */}
      <FullWidthSection
        title="VERSION 4: Flexible Team Photography for Growing Companies"
        description="Professional team composites that adapt as your business grows.

We photograph each team member individually, then seamlessly combine them into polished group portraits. When your team changes, we simply add new faces or update the composition—no need to reschedule everyone.

The result is consistent, professional imagery that evolves with your company.

Ideal for dynamic teams, multi-location businesses, and companies planning for growth."
        ctaText="CHOOSE VERSION 4"
        ctaLink="/contact"
        backgroundColor="#e9ecef"
        textColor="#333333"
        titleColor="#7b1fa2"
        textAlign="center"
        contentImages={[
          { src: "/images/website media/CMQHEADSHOTS-cmq composite4-thin.webp", alt: "Corporate headshots composite showing team uniformity", caption: "Full team composite" },
          { src: "/images/website media/CMQHEADSHOTS-ims sales thin.jpg", alt: "IMS sales team composite headshots", caption: "Sales team composite" },
          { src: "/images/website media/CMQHEADSHOTS-IMS service thin.jpg", alt: "IMS service team composite headshots", caption: "Service team composite" }
        ]}
      />

      {/* Summary Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-raleway text-3xl lg:text-4xl font-bold mb-8">
            Which Version Works Best?
          </h2>
          <p className="font-raleway text-lg mb-8 max-w-3xl mx-auto">
            Compare the different approaches above. Each version targets the same service but uses different messaging strategies to connect with potential clients.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-red-400">VERSION 1</h3>
              <p className="text-sm">Problem/Solution format with bold structure</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-blue-400">VERSION 2</h3>
              <p className="text-sm">Numbered benefits, very scannable</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-green-400">VERSION 3</h3>
              <p className="text-sm">Story-driven, relatable narrative</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-3 text-purple-400">VERSION 4</h3>
              <p className="text-sm">Clean, elegant, minimal approach</p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}