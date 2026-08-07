import Layout from '../components/Layout'
import SplitHeroDemo from '../components/SplitHeroDemo'

// DEMO V2B — copy of V2 (text left on white, image right) at 50/50 with full-length image
export default function DemoCorporateHeroV2B() {
  return (
    <Layout
      title="DEMO V2B — Corporate Split Hero 50/50 | CMQ Headshots"
      description="Internal design demo. Not a public page."
      noindex={true}
      showHeaderButton={true}
    >
      <SplitHeroDemo imageLeft={false} panelBg="white" centered={true} layout="half" />
    </Layout>
  )
}
