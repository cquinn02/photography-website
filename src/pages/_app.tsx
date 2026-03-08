import type { AppProps } from 'next/app'
import { Raleway, Playfair_Display } from 'next/font/google'
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
      {/* Google Analytics is handled by GTM in _document.tsx (GTM-M69GRJVK) */}
      <LightboxProvider>
        <div className={`${raleway.variable} ${playfairDisplay.variable}`}>
          <Component {...pageProps} />
        </div>
      </LightboxProvider>
    </>
  )
}