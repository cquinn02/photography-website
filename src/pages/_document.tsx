import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts are now loaded via next/font/google in _app.tsx for optimal performance */}

        {/* Preload hero images for faster LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-640.webp"
          media="(max-width: 767px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/website%20media/cmq-pro-phoenix-headshots-hero2-mobile-828.webp"
          media="(min-width: 768px) and (max-width: 1023px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/website%20media/cmq-pro-phoenix-headshots-hero2-scaled-1.webp"
          media="(min-width: 1024px)"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}