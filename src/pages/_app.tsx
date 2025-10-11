import type { AppProps } from 'next/app'
import Script from 'next/script'
import '@/styles/globals.css'
import StickyBottomBar from '@/components/StickyBottomBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Component {...pageProps} />
      <StickyBottomBar />
    </>
  )
}