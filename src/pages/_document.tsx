import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts are now loaded via next/font/google in _app.tsx for optimal performance */}

        {/* Preconnect to image CDN to eliminate DNS/TCP/TLS delay (~150-300ms savings) */}
        <link rel="preconnect" href="https://images.cmqheadshots.com" />
        <link rel="dns-prefetch" href="https://images.cmqheadshots.com" />

        {/* Preconnect to GA so analytics loads faster */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}