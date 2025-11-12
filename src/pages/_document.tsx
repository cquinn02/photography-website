import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts are now loaded via next/font/google in _app.tsx for optimal performance */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}