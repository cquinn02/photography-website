import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import StickyBottomBar from './StickyBottomBar'

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.cmqheadshots.com",
  "name": "CMQ Headshots",
  "description": "Headshots Phoenix - Comfortable, easy headshot photography sessions for executives, entrepreneurs, realtors, actors, and professionals in Phoenix, Scottsdale, Tempe, and the Valley.",
  "url": "https://www.cmqheadshots.com",
  "telephone": "+1-480-648-3429",
  "image": "https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp",
  "logo": "https://images.cmqheadshots.com/images/logos/new%20logos%20sep%202025/CMQHEADSHOTS-horiz.webp",
  "founder": {
    "@type": "Person",
    "name": "Cindy Quinn",
    "url": "https://www.cmqheadshots.com/about"
  },
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4405 W Phalen Dr",
    "addressLocality": "Phoenix",
    "addressRegion": "AZ",
    "postalCode": "85087",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.8759974,
    "longitude": -112.154384
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Phoenix",
      "sameAs": "https://en.wikipedia.org/wiki/Phoenix,_Arizona"
    },
    {
      "@type": "City",
      "name": "Scottsdale",
      "sameAs": "https://en.wikipedia.org/wiki/Scottsdale,_Arizona"
    },
    {
      "@type": "City",
      "name": "Tempe",
      "sameAs": "https://en.wikipedia.org/wiki/Tempe,_Arizona"
    },
    {
      "@type": "City",
      "name": "Mesa",
      "sameAs": "https://en.wikipedia.org/wiki/Mesa,_Arizona"
    },
    {
      "@type": "City",
      "name": "Chandler",
      "sameAs": "https://en.wikipedia.org/wiki/Chandler,_Arizona"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "11:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/cmqheadshots",
    "https://www.instagram.com/cmqheadshots",
    "https://www.linkedin.com/in/cmqheadshots/",
    "https://www.pinterest.com/cmqheadshots/",
    "https://www.google.com/maps/place/CMQ+Headshots/@33.8760267,-112.1544037,17z"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 5.0,
    "bestRating": 5,
    "worstRating": 1,
    "ratingCount": 136
  }
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CMQ Headshots",
  "url": "https://www.cmqheadshots.com",
  "publisher": {
    "@type": "ProfessionalService",
    "@id": "https://www.cmqheadshots.com"
  }
}

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  headerButtonText?: string
  headerButtonLink?: string
  showHeaderButton?: boolean
  showHeaderContact?: boolean
  canonical?: string
  ogImage?: string
  ogUrl?: string
  noindex?: boolean
  ogType?: string
}

export default function Layout({ children, title = 'Photography Studio', description = 'Professional photography services', headerButtonText, headerButtonLink, showHeaderButton, showHeaderContact, canonical, ogImage, ogUrl, noindex, ogType }: LayoutProps) {
  // Get current path from window if available
  const defaultCanonical = typeof window !== 'undefined' ? `https://www.cmqheadshots.com${window.location.pathname}` : 'https://www.cmqheadshots.com'
  const defaultOgImage = 'https://images.cmqheadshots.com/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp'

  // Add site suffix to title if not already present (differentiates title from H1 for SEO)
  const siteSuffix = ' | CMQ Headshots'
  const fullTitle = title.includes('CMQ Headshots') ? title : `${title}${siteSuffix}`

  return (
    <>
      <NextSeo
        title={fullTitle}
        description={description}
        canonical={canonical || defaultCanonical}
        noindex={noindex}
        nofollow={noindex}
        openGraph={{
          title,
          description,
          type: ogType || 'website',
          url: ogUrl || defaultCanonical,
          images: [
            {
              url: ogImage || defaultOgImage,
              width: 1200,
              height: 630,
              alt: title,
            }
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/cmqfavicon.png',
          },
          {
            rel: 'apple-touch-icon',
            href: '/cmqfavicon.png',
          },
        ]}
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header showContact={showHeaderContact} />
        {/* ⚠️ DO NOT CHANGE: pt-[120px] accounts for fixed header height - removing this will hide content behind header */}
        <main className="flex-grow pt-[80px] lg:pt-[120px] -mt-1">
          {children}
        </main>
        <Footer />
        <StickyBottomBar />
      </div>
    </>
  )
}