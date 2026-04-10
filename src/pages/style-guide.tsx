import Layout from '@/components/Layout'
import GetPricingButton from '@/components/GetPricingButton'
import LogoModern from '@/components/LogoModern'

export default function StyleGuide() {
  return (
    <>
      <Layout
      title="Style Guide | CMQ Headshots"
      description="Typography and style standards for CMQ Headshots website"
      showHeaderButton={false}
      noindex={true}
    >
      <div className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-8">

          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="font-raleway text-5xl font-medium mb-4" style={{ color: '#5577a5' }}>
              CMQ Headshots Style Guide
            </h1>
            <p className="font-raleway text-xl text-black">
              Typography and design standards for consistent branding
            </p>
          </div>

          {/* Logo */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              Logo
            </h2>

            {/* Logo Variants */}
            <div className="space-y-8">
              {/* Stacked Light */}
              <div>
                <p className="font-raleway text-sm font-semibold mb-4">Stacked - Light Variant (for dark backgrounds)</p>
                <div className="bg-gray-800 p-12 rounded-lg flex justify-center">
                  <LogoModern variant="light" size="large" layout="stacked" />
                </div>
              </div>

              {/* Stacked Dark */}
              <div>
                <p className="font-raleway text-sm font-semibold mb-4">Stacked - Dark Variant (for light backgrounds)</p>
                <div className="bg-gray-100 p-12 rounded-lg flex justify-center">
                  <LogoModern variant="dark" size="large" layout="stacked" />
                </div>
              </div>

              {/* Horizontal Light */}
              <div>
                <p className="font-raleway text-sm font-semibold mb-4">Horizontal - Light Variant (header)</p>
                <div className="bg-gray-800 p-8 rounded-lg flex justify-center">
                  <LogoModern variant="light" size="medium" layout="horizontal" />
                </div>
              </div>

              {/* Size Variations */}
              <div>
                <p className="font-raleway text-sm font-semibold mb-4">Size Variations</p>
                <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-around gap-8">
                  <div className="text-center">
                    <LogoModern variant="dark" size="small" layout="stacked" />
                    <p className="font-raleway text-xs mt-2 text-black">Small</p>
                  </div>
                  <div className="text-center">
                    <LogoModern variant="dark" size="medium" layout="stacked" />
                    <p className="font-raleway text-xs mt-2 text-black">Medium</p>
                  </div>
                  <div className="text-center">
                    <LogoModern variant="dark" size="large" layout="stacked" />
                    <p className="font-raleway text-xs mt-2 text-black">Large</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Specifications */}
            <div className="mt-6 font-raleway text-sm space-y-2 text-black bg-gray-50 p-6 rounded-lg">
              <p className="font-bold mb-3">Logo Specifications:</p>
              <p><strong>CMQ Letters:</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• Font: Playfair Display (serif)</li>
                <li>• Weight: 600 (semibold)</li>
                <li>• Color: #5577a5 (CMQ Blue)</li>
                <li>• Letter spacing: 0.1em</li>
                <li>• Hover effect: Middle &apos;M&apos; scales, outer letters move, blue glow</li>
              </ul>
              <p className="mt-3"><strong>HEADSHOTS Text:</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• Font: Raleway (sans-serif)</li>
                <li>• Weight: 400 (normal)</li>
                <li>• Letter spacing: 0.3em (expands to 0.4em on hover)</li>
                <li>• Color: White (light variant) or #575757 (dark variant)</li>
              </ul>
              <p className="mt-3"><strong>Tagline:</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• &quot;EST. 2012 • PHOENIX&quot;</li>
                <li>• Font: Raleway, 10px</li>
                <li>• Opacity: 60% (100% on hover)</li>
                <li>• Hidden on small size</li>
              </ul>
              <p className="mt-3"><strong>Layouts:</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• Stacked: Logo vertically stacked with decorative accents</li>
                <li>• Horizontal: CMQ and HEADSHOTS side-by-side (used in header)</li>
              </ul>
              <p className="mt-3"><strong>Interactive Features:</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• Animated on hover (can be disabled with animated=false)</li>
                <li>• Camera lens and aperture decorations rotate on hover</li>
                <li>• Underline animates on stacked version</li>
              </ul>
            </div>
          </section>

          {/* Brand Colors */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              Brand Colors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <div className="h-24 rounded-lg mb-2" style={{ backgroundColor: '#5577a5' }}></div>
                <p className="font-raleway font-semibold">CMQ Blue</p>
                <p className="font-raleway text-sm text-black">#5577a5</p>
              </div>
              <div>
                <div className="h-24 rounded-lg mb-2" style={{ backgroundColor: '#575757' }}></div>
                <p className="font-raleway font-semibold">Gray Dark</p>
                <p className="font-raleway text-sm text-black">#575757</p>
              </div>
              <div>
                <div className="h-24 rounded-lg mb-2" style={{ backgroundColor: '#383838' }}></div>
                <p className="font-raleway font-semibold">Gray Darker (font color only)</p>
                <p className="font-raleway text-sm text-black">#383838</p>
              </div>
              <div>
                <div className="h-24 rounded-lg mb-2 border" style={{ backgroundColor: '#ffffff' }}></div>
                <p className="font-raleway font-semibold">White</p>
                <p className="font-raleway text-sm text-black">#FFFFFF</p>
              </div>
              <div>
                <div className="h-24 rounded-lg mb-2 border" style={{ backgroundColor: '#D0D0D0' }}></div>
                <p className="font-raleway font-semibold">Light Gray</p>
                <p className="font-raleway text-sm text-black">#D0D0D0</p>
              </div>
            </div>
          </section>

          {/* H1 Typography */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              H1 - Hero Headings
            </h2>
            <div className="bg-gray-100 p-8 rounded-lg mb-6">
              {/* Using div instead of h1 for SEO - this is just a style example */}
              <div className="font-raleway text-4xl md:text-5xl lg:text-6xl leading-tight text-center" style={{ color: '#5577a5' }} role="heading" aria-level={1}>
                <span className="font-medium" style={{ fontWeight: '500' }}>CORPORATE STAFF</span><br />
                <span className="font-light" style={{ fontWeight: '300' }}>HEADSHOTS</span> <span className="font-medium" style={{ fontWeight: '500' }}>WITHOUT</span> <span className="font-light" style={{ fontWeight: '300' }}>THE</span><br />
                <span className="font-medium" style={{ fontWeight: '500' }}>HASSLE</span>
              </div>
            </div>
            <div className="font-raleway text-sm space-y-2 text-black">
              <p><strong>Font:</strong> Raleway</p>
              <p><strong>Desktop Size:</strong> text-6xl to text-7xl (60-72px)</p>
              <p><strong>Mobile Size:</strong> text-4xl to text-5xl (36-48px)</p>
              <p><strong>Bold Words:</strong> font-medium (500)</p>
              <p><strong>Light Words:</strong> font-light (300)</p>
              <p><strong>Colors:</strong> White on overlays, Blue (#5577a5) on white backgrounds</p>
              <p><strong>Text Shadow (overlays):</strong> 1px 1px 3px rgba(0, 0, 0, 0.4)</p>
            </div>
          </section>

          {/* H2 Typography */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              H2 - Section Headings
            </h2>
            <div className="bg-gray-100 p-8 rounded-lg mb-6">
              <h2 className="font-raleway text-3xl lg:text-4xl text-center" style={{ color: '#5577a5' }}>
                <span className="font-medium">STAFF HEADSHOTS</span> <span className="font-normal">IN PHOENIX AND SCOTTSDALE ARIZONA</span>
              </h2>
            </div>
            <div className="font-raleway text-sm space-y-2 text-black">
              <p><strong>Font:</strong> Raleway</p>
              <p><strong>Size:</strong> text-3xl lg:text-4xl (default)</p>
              <p><strong>Bold Words:</strong> font-medium (500)</p>
              <p><strong>Normal Words:</strong> font-normal (400)</p>
              <p><strong>Color:</strong> Blue (#5577a5)</p>
              <p><strong>Alignment:</strong> text-center</p>
            </div>
          </section>

          {/* Body Text */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              Body Text
            </h2>
            <div className="bg-gray-100 p-8 rounded-lg mb-6">
              <p className="font-raleway text-xl font-normal text-center" style={{
                fontWeight: '400',
                letterSpacing: '0.03em',
                lineHeight: '1.6',
                color: '#000000'
              }}>
                Your company needs staff headshots but you honestly don&apos;t want to deal with the hassle. The scheduling nightmare, the cost, the time away from work - it&apos;s so much. I understand your need and can make it happen for you without all the hassle.
              </p>
            </div>
            <div className="font-raleway text-sm space-y-2 text-black">
              <p><strong>Font:</strong> Raleway</p>
              <p><strong>Size:</strong> text-xl (20px)</p>
              <p><strong>Weight:</strong> font-normal (400)</p>
              <p><strong>Letter Spacing:</strong> 0.03em</p>
              <p><strong>Line Height:</strong> 1.6</p>
              <p><strong>Color:</strong> Dark gray on light backgrounds, White on dark backgrounds</p>
            </div>
          </section>

          {/* Buttons */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              Buttons
            </h2>
            <div className="bg-gray-100 p-8 rounded-lg mb-6 flex flex-col items-center gap-6">
              <div>
                <p className="font-raleway text-sm mb-2 text-center text-black">Small</p>
                <GetPricingButton href="#" size="small">GET PRICING</GetPricingButton>
              </div>
              <div>
                <p className="font-raleway text-sm mb-2 text-center text-black">Medium</p>
                <GetPricingButton href="#" size="medium">GET PRICING</GetPricingButton>
              </div>
              <div>
                <p className="font-raleway text-sm mb-2 text-center text-black">Large</p>
                <GetPricingButton href="#" size="large">GET PRICING</GetPricingButton>
              </div>
            </div>
            <div className="font-raleway text-sm space-y-2 text-black">
              <p><strong>Font:</strong> Raleway</p>
              <p><strong>Weight:</strong> font-normal (400)</p>
              <p><strong>Transform:</strong> uppercase</p>
              <p><strong>Background:</strong> #5577a5 (CMQ Blue)</p>
              <p><strong>Hover Background:</strong> #575757 (Gray Dark)</p>
              <p><strong>Hover Transform:</strong> scale(1.05)</p>
              <p><strong>Shadow:</strong> 0 4px 8px rgba(0, 0, 0, 0.3)</p>
            </div>
          </section>

          {/* Background Patterns */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              Background Patterns
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-raleway text-sm mb-2 font-semibold">White (#FFFFFF)</p>
                <div className="h-20 rounded-lg border" style={{ backgroundColor: '#FFFFFF' }}></div>
              </div>
              <div>
                <p className="font-raleway text-sm mb-2 font-semibold">Light Gray (#D0D0D0)</p>
                <div className="h-20 rounded-lg" style={{ backgroundColor: '#D0D0D0' }}></div>
              </div>
              <div>
                <p className="font-raleway text-sm mb-2 font-semibold">Dark Gray with Texture (#575757)</p>
                <div className="h-20 rounded-lg" style={{
                  backgroundColor: '#575757',
                  backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
                  backgroundRepeat: 'repeat',
                  backgroundSize: 'auto'
                }}></div>
              </div>
            </div>
          </section>

          {/* Spacing */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              Spacing Standards
            </h2>
            <div className="font-raleway text-sm space-y-2 text-black">
              <p><strong>Section Padding:</strong> py-12 to py-20 (48px - 80px)</p>
              <p><strong>Container Max Width:</strong> max-w-7xl (1280px)</p>
              <p><strong>Grid Gaps:</strong> gap-8 to gap-12 (32px - 48px)</p>
              <p><strong>Header Clearance (Desktop):</strong> pt-[120px]</p>
              <p><strong>Header Clearance (Mobile):</strong> pt-[100px] or less</p>
            </div>
          </section>

          {/* Responsive Breakpoints */}
          <section className="mb-16">
            <h2 className="font-raleway text-3xl font-medium mb-8" style={{ color: '#5577a5' }}>
              Responsive Breakpoints
            </h2>
            <div className="font-raleway text-sm space-y-2 text-black">
              <p><strong>sm:</strong> 640px (small tablets)</p>
              <p><strong>md:</strong> 768px (tablets)</p>
              <p><strong>lg:</strong> 1024px (laptops) - Primary desktop breakpoint</p>
              <p><strong>xl:</strong> 1280px (desktops)</p>
              <p><strong>2xl:</strong> 1536px (large screens)</p>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t text-center">
            <p className="font-raleway text-sm text-black">
              This page is unlisted and for internal reference only.
            </p>
          </div>

        </div>
      </div>
    </Layout>
    </>
  )
}
