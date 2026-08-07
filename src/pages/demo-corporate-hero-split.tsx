import Link from 'next/link'
import Layout from '../components/Layout'

// DEMO INDEX — links to the five split-hero variants (noindex, not linked anywhere)
const VERSIONS = [
  { href: '/demo-corporate-hero-compare', label: 'COMPARE — all versions side by side' },
  { href: '/demo-corporate-hero-v2', label: 'V2 — Text left on white, image 2/3 (cropped)' },
  { href: '/demo-corporate-hero-v4', label: 'V4 — Text left on dark linen, image 2/3 (cropped)' },
  { href: '/demo-corporate-hero-v2b', label: 'V2B — Text left on white, 50/50 full-length image' },
  { href: '/demo-corporate-hero-v4b', label: 'V4B — Text left on dark linen, 50/50 full-length image' },
  { href: '/demo-corporate-full-v2', label: 'FULL PAGE with V2 hero (white, image 2/3)' },
  { href: '/demo-corporate-full-v4', label: 'FULL PAGE with V4 hero (dark linen, image 2/3)' },
  { href: '/demo-corporate-full-v2b', label: 'FULL PAGE with V2B hero (white, 50/50 full-length)' },
  { href: '/demo-corporate-full-v4b', label: 'FULL PAGE with V4B hero (dark linen, 50/50 full-length)' }
]

export default function DemoCorporateHeroSplit() {
  return (
    <Layout
      title="DEMO — Corporate Split Hero Versions | CMQ Headshots"
      description="Internal design demo. Not a public page."
      noindex={true}
      showHeaderButton={true}
    >
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-raleway text-4xl leading-tight mb-8" style={{ color: '#5577a5' }}>
            <span className="font-medium" style={{ fontWeight: '500' }}>SPLIT HERO</span>{' '}
            <span className="font-light" style={{ fontWeight: '300' }}>VERSIONS</span>
          </h1>
          <ul className="space-y-4">
            {VERSIONS.map((v) => (
              <li key={v.href}>
                <Link
                  href={v.href}
                  className="font-raleway text-xl underline"
                  style={{ color: '#383838', letterSpacing: '0.03em' }}
                >
                  {v.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}
