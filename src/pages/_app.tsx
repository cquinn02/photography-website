import type { AppProps } from 'next/app'
import Script from 'next/script'
import { Raleway, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'
import StickyBottomBar from '@/components/StickyBottomBar'

// Load Raleway font with all required weights
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

// Load Playfair Display font with all required weights
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-raleway: ${raleway.style.fontFamily};
          --font-playfair: ${playfairDisplay.style.fontFamily};
        }
      `}</style>
      {/* Google Analytics - Load after page is interactive */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
      <div className={`${raleway.variable} ${playfairDisplay.variable}`}>
        <Component {...pageProps} />
        <StickyBottomBar />
      </div>
    </>
  )
}