import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Raleway, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import LightboxProvider from '@/components/LightboxProvider'

// Load Raleway font with only the weights actually used
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-raleway',
  display: 'swap',
})

// Load Playfair Display font with only the weight actually used
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-playfair',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>{`
        :root {
          --font-raleway: ${raleway.style.fontFamily};
          --font-playfair: ${playfairDisplay.style.fontFamily};
        }
      `}</style>
      {/* GA4 — direct gtag.js, deferred to avoid blocking LCP */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HCJ1R92010"
        strategy="lazyOnload"
      />
      <Script id="ga4-init" strategy="lazyOnload">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());var p=window.location.pathname;var skip=/^\\/(wp-|wordpress|xmlrpc|administrator|phpmyadmin|cgi-bin|\\.env|\\.git)/i.test(p);gtag('config','G-HCJ1R92010',{send_page_view:!skip});`}
      </Script>
      <LightboxProvider>
        <div className={`${raleway.variable} ${playfairDisplay.variable}`}>
          <Component {...pageProps} />
        </div>
      </LightboxProvider>
    </>
  )
}