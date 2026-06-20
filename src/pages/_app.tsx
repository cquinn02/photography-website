import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Raleway, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import '@/styles/globals.css'

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
      {/* GA4 — load on first user interaction (scroll/click/touch/key/mouse) with 10s idle fallback. Keeps gtag out of PSI's TBT window while still capturing real visits. */}
      <Script id="ga4-loader" strategy="afterInteractive">
        {`(function(){var loaded=false;function loadGA4(){if(loaded)return;loaded=true;window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());var p=window.location.pathname;var skip=/^\\/(wp-|wordpress|xmlrpc|administrator|phpmyadmin|cgi-bin|\\.env|\\.git)/i.test(p);gtag('config','G-HCJ1R92010',{send_page_view:!skip});var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-HCJ1R92010';document.head.appendChild(s);}var events=['scroll','click','touchstart','keydown','mousemove'];events.forEach(function(ev){window.addEventListener(ev,loadGA4,{once:true,passive:true});});function armFallback(){setTimeout(loadGA4,10000);}if(document.readyState==='complete'){armFallback();}else{window.addEventListener('load',armFallback,{once:true});}})();`}
      </Script>
      <div className={`${raleway.variable} ${playfairDisplay.variable}`}>
        <Component {...pageProps} />
      </div>
      <Analytics />
      <SpeedInsights />
    </>
  )
}