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
}

export default function Layout({ children, title = 'Photography Studio', description = 'Professional photography services', headerButtonText, headerButtonLink, showHeaderButton }: LayoutProps) {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: 'website',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.png',
          },
          {
            rel: 'apple-touch-icon',
            href: '/favicon.png',
          },
        ]}
      />
      <div className="min-h-screen flex flex-col">
        <Header buttonText={headerButtonText} buttonLink={headerButtonLink} showButton={showHeaderButton} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <StickyBottomBar />
      </div>
    </>
  )
}