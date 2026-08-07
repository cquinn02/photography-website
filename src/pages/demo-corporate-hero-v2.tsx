import { GetServerSideProps } from 'next'

// Hero-only demo retired — old links redirect to the full-page version
export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: { destination: '/demo-corporate-full-v2', permanent: false }
})

export default function DemoCorporateHeroRedirect() {
  return null
}
