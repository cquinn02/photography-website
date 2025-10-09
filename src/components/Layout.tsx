import { ReactNode } from 'react'
import { NextSeo } from 'next-seo'
import Header from './Header'
import Footer from './Footer'
import StickyBottomBar from './StickyBottomBar'

interface LayoutProps {
  children: ReactNode
  title?: string
  description?: string
  headerButtonText?: string
  headerButtonLink?: string
  showHeaderButton?: boolean
  canonical?: string
  ogImage?: string
  ogUrl?: string
}

export default function Layout({ children, title = 'Photography Studio', description = 'Professional photography services', headerButtonText, headerButtonLink, showHeaderButton, canonical, ogImage, ogUrl }: LayoutProps) {
  // Get current path from window if available
  const defaultCanonical = typeof window !== 'undefined' ? `https://www.cmqheadshots.com${window.location.pathname}` : 'https://www.cmqheadshots.com'
  const defaultOgImage = 'https://www.cmqheadshots.com/images/website media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp'

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical || defaultCanonical}
        openGraph={{
          title,
          description,
          type: 'website',
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
      <div className="min-h-screen flex flex-col">
        <Header buttonText={headerButtonText} buttonLink={headerButtonLink} showButton={showHeaderButton} />
        {/* ⚠️ DO NOT CHANGE: pt-[120px] accounts for fixed header height - removing this will hide content behind header */}
        <main className="flex-grow pt-[120px] -mt-1">
          {children}
        </main>
        <Footer />
        <StickyBottomBar />
      </div>
    </>
  )
}