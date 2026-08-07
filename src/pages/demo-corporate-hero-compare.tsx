import Layout from '../components/Layout'

// DEMO COMPARE — V1 / V2 / V4 rendered live in scaled iframes, desktop + mobile rows
const VERSIONS = [
  { href: '/demo-corporate-hero-v2', label: 'V2 — white, image 2/3' },
  { href: '/demo-corporate-hero-v4', label: 'V4 — dark linen, image 2/3' },
  { href: '/demo-corporate-hero-v2b', label: 'V2B — white, 50/50 full-length' },
  { href: '/demo-corporate-hero-v4b', label: 'V4B — dark linen, 50/50 full-length' }
]

const DESKTOP_W = 1440
const DESKTOP_H = 900
const DESKTOP_SCALE = 0.3
const MOBILE_W = 390
const MOBILE_H = 844
const MOBILE_SCALE = 0.42

export default function DemoCorporateHeroCompare() {
  return (
    <Layout
      title="DEMO — Hero Versions Side by Side | CMQ Headshots"
      description="Internal design demo. Not a public page."
      noindex={true}
      showHeaderButton={true}
    >
      <section className="bg-white py-16 px-6">
        <div className="mx-auto" style={{ maxWidth: `${DESKTOP_W * DESKTOP_SCALE * 3 + 96}px` }}>
          <h1 className="font-raleway text-4xl leading-tight mb-10 text-center" style={{ color: '#5577a5' }}>
            <span className="font-medium" style={{ fontWeight: '500' }}>HERO VERSIONS</span>{' '}
            <span className="font-light" style={{ fontWeight: '300' }}>SIDE BY SIDE</span>
          </h1>

          <h2 className="font-raleway text-2xl mb-6 text-center" style={{ color: '#5577a5' }}>
            <span className="font-bold">DESKTOP</span> <span className="font-normal">VIEW</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {VERSIONS.map((v) => (
              <div key={`d-${v.href}`}>
                <p
                  className="font-raleway text-base font-normal mb-2 text-center"
                  style={{ color: '#383838', letterSpacing: '0.03em' }}
                >
                  <a href={v.href} className="underline" target="_blank" rel="noreferrer">
                    {v.label}
                  </a>
                </p>
                <div
                  className="overflow-hidden border shadow-lg"
                  style={{
                    width: `${DESKTOP_W * DESKTOP_SCALE}px`,
                    height: `${DESKTOP_H * DESKTOP_SCALE}px`,
                    borderColor: '#D0D0D0'
                  }}
                >
                  <iframe
                    src={v.href}
                    title={`${v.label} desktop preview`}
                    style={{
                      width: `${DESKTOP_W}px`,
                      height: `${DESKTOP_H}px`,
                      transform: `scale(${DESKTOP_SCALE})`,
                      transformOrigin: 'top left',
                      border: '0',
                      pointerEvents: 'none'
                    }}
                    scrolling="no"
                  />
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-raleway text-2xl mb-6 text-center" style={{ color: '#5577a5' }}>
            <span className="font-bold">MOBILE</span> <span className="font-normal">VIEW</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {VERSIONS.map((v) => (
              <div key={`m-${v.href}`}>
                <p
                  className="font-raleway text-base font-normal mb-2 text-center"
                  style={{ color: '#383838', letterSpacing: '0.03em' }}
                >
                  {v.label}
                </p>
                <div
                  className="overflow-hidden border shadow-lg"
                  style={{
                    width: `${MOBILE_W * MOBILE_SCALE}px`,
                    height: `${MOBILE_H * MOBILE_SCALE}px`,
                    borderColor: '#D0D0D0'
                  }}
                >
                  <iframe
                    src={v.href}
                    title={`${v.label} mobile preview`}
                    style={{
                      width: `${MOBILE_W}px`,
                      height: `${MOBILE_H}px`,
                      transform: `scale(${MOBILE_SCALE})`,
                      transformOrigin: 'top left',
                      border: '0',
                      pointerEvents: 'none'
                    }}
                    scrolling="no"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
