import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* GTM moved to _app.tsx with next/script afterInteractive for non-blocking load */}

        {/* Fonts are now loaded via next/font/google in _app.tsx for optimal performance */}

        {/* Preconnect to image CDN to eliminate DNS/TCP/TLS delay (~150-300ms savings) */}
        <link rel="preconnect" href="https://images.cmqheadshots.com" />
        <link rel="dns-prefetch" href="https://images.cmqheadshots.com" />

        {/* Preconnect to GTM so analytics loads faster when triggered */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M69GRJVK"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}