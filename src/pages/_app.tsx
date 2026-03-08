import type { AppProps } from 'next/app'
import { Raleway, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import LightboxProvider from '@/components/LightboxProvider'

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
      {/* Google Tag Manager — loads after page is interactive (non-blocking) */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M69GRJVK');`,
        }}
      />
      <LightboxProvider>
        <div className={`${raleway.variable} ${playfairDisplay.variable}`}>
          <Component {...pageProps} />
        </div>
      </LightboxProvider>
    </>
  )
}