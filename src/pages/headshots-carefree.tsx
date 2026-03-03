import Head from 'next/head'
import LocationPageTemplate from '@/components/templates/LocationPageTemplate'

export default function HeadshotsCarefree() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <LocationPageTemplate
        location="Carefree"
      />
    </>
  )
}
