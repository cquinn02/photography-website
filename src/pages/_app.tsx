import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import StickyBottomBar from '@/components/StickyBottomBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <StickyBottomBar />
    </>
  )
}