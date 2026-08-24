import Head from 'next/head'

// Split hero — text panel + photo column (shipped on the corporate page 2026-08-08;
// design chosen from the demo round: dark linen panel left, image 2/3 right).
// Follows the H-Tag Trifecta (seo-content-rules.md): keyword in H1, exact phrase in
// the paragraph below, keyword-first image alt.

const IMG_640 =
  'https://images.cmqheadshots.com/images/website%20media/optimized/corporate-headshot-phoenix-hero-640w.webp'
const IMG_828 =
  'https://images.cmqheadshots.com/images/website%20media/optimized/corporate-headshot-phoenix-hero-828w.webp'
const IMG_1280 =
  'https://images.cmqheadshots.com/images/website%20media/optimized/corporate-headshot-phoenix-hero-1280w.webp'
const IMG_1920 =
  'https://images.cmqheadshots.com/images/website%20media/optimized/corporate-headshot-phoenix-hero-1920w.webp'
const LINEN =
  'https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp'

export interface SplitHeroProps {
  imageLeft?: boolean
  panelBg: 'white' | 'light-grey' | 'dark-grey' | 'very-dark'
  centered?: boolean
  quoteHref?: string
  // 'two-thirds': 2/3 image + 1/3 text, fixed hero height, image crops vertically.
  // 'half': 50/50 split, full-length image uncropped, image sets the hero height.
  layout?: 'two-thirds' | 'half'
}

const PANEL_STYLES: Record<SplitHeroProps['panelBg'], React.CSSProperties> = {
  'white': { backgroundColor: '#FFFFFF' },
  'light-grey': { backgroundColor: '#D0D0D0' },
  'dark-grey': {
    backgroundColor: '#575757',
    backgroundImage: `url("${LINEN}")`,
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto'
  },
  'very-dark': { backgroundColor: '#282725' }
}

export default function SplitHero({
  imageLeft = true,
  panelBg,
  centered = true,
  quoteHref = '#request-quote',
  layout = 'two-thirds'
}: SplitHeroProps) {
  const dark = panelBg === 'dark-grey' || panelBg === 'very-dark'
  const headingColor = dark ? '#FFFFFF' : '#5577a5'
  const bodyColor = dark ? '#FFFFFF' : '#383838'
  const half = layout === 'half'

  const image = (
    // Image always stacks first on mobile; desktop order set via lg:order below.
    <div
      className={`w-full order-first ${half ? 'lg:w-1/2 lg:aspect-[4/5]' : 'lg:w-2/3 lg:h-full'} ${
        imageLeft ? 'lg:order-first' : 'lg:order-last'
      }`}
    >
      <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full">
        <picture>
          <source
            media="(max-width: 1023px)"
            srcSet={`${IMG_640} 640w, ${IMG_828} 828w`}
            sizes="100vw"
          />
          <img
            src={IMG_1280}
            srcSet={`${IMG_1280} 1280w, ${IMG_1920} 1920w`}
            sizes={half ? '50vw' : '67vw'}
            alt="Corporate headshots Phoenix, professional woman photographed in a modern office lobby"
            title="Corporate Headshots Phoenix"
            className="w-full h-full object-cover"
            style={half ? undefined : { objectPosition: 'center 20%' }}
            fetchPriority="high"
            loading="eager"
          />
        </picture>
      </div>
    </div>
  )

  const text = (
    <div
      className={`w-full flex items-center ${half ? 'lg:w-1/2 lg:self-stretch' : 'lg:w-1/3 lg:h-full'}`}
      style={PANEL_STYLES[panelBg]}
    >
      <div className={`w-full max-w-[640px] mx-auto px-6 py-12 lg:px-10 lg:py-16 ${centered ? 'text-center' : 'text-left'}`}>
        <h1
          className={`font-raleway leading-tight mb-6 text-4xl ${half ? 'lg:text-6xl xl:text-7xl' : 'lg:text-5xl xl:text-6xl'}`}
          style={{ color: headingColor }}
        >
          <span className="font-medium" style={{ fontWeight: '500' }}>CORPORATE HEADSHOTS</span>
          <br />
          <span className="font-light" style={{ fontWeight: '300' }}>PHOENIX</span>
        </h1>
        <p
          className="font-raleway text-xl font-normal mb-8"
          style={{ fontWeight: '400', letterSpacing: '0.03em', lineHeight: '1.6', color: bodyColor }}
        >
          Consistent, polished corporate headshots Phoenix companies rely on,
          photographed at your office or my studio. This is a great opportunity to
          show off your beautiful building architecture or your brand. Backed by
          140+ five-star Google reviews.
        </p>
        <a
          href={quoteHref}
          className="font-raleway inline-flex items-center justify-center text-center transition-all duration-300 rounded-lg uppercase tracking-wide text-white border shadow-lg cursor-pointer px-8 py-4 !text-[22px]"
          style={{
            fontWeight: '400',
            backgroundColor: '#5577a5',
            borderColor: '#5577a5',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#575757'
            e.currentTarget.style.borderColor = '#ffffff'
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#5577a5'
            e.currentTarget.style.borderColor = '#5577a5'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          GET QUOTE
        </a>
      </div>
    </div>
  )

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          media="(max-width: 1023px)"
          href={IMG_828}
          imageSrcSet={`${IMG_640} 640w, ${IMG_828} 828w`}
          imageSizes="100vw"
        />
        <link
          rel="preload"
          as="image"
          media="(min-width: 1024px)"
          href={IMG_1920}
          imageSrcSet={`${IMG_1280} 1280w, ${IMG_1920} 1920w`}
          imageSizes={half ? '50vw' : '67vw'}
        />
      </Head>
      {/* Split hero — single section, single H1 */}
      <section className="relative bg-white">
        <div className={`flex flex-col lg:flex-row ${half ? '' : 'lg:h-[clamp(600px,100vh,800px)]'}`}>
          {image}
          {text}
        </div>
      </section>
    </>
  )
}
