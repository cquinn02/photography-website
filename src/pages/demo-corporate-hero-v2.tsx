import Layout from '../components/Layout'
import SplitHeroDemo from '../components/SplitHeroDemo'

// DEMO V2 — image right, white panel, centered text
export default function DemoCorporateHeroV2() {
  return (
    <Layout
      title="DEMO V2 — Corporate Split Hero | CMQ Headshots"
      description="Internal design demo. Not a public page."
      noindex={true}
      showHeaderButton={true}
    >
      <SplitHeroDemo imageLeft={false} panelBg="white" centered={true} />
    </Layout>
  )
}
