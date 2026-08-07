import Layout from '../components/Layout'
import SplitHeroDemo from '../components/SplitHeroDemo'

// DEMO V4B — copy of V4 (text left on dark grey linen, image right) at 50/50 with full-length image
export default function DemoCorporateHeroV4B() {
  return (
    <Layout
      title="DEMO V4B — Corporate Split Hero 50/50 | CMQ Headshots"
      description="Internal design demo. Not a public page."
      noindex={true}
      showHeaderButton={true}
    >
      <SplitHeroDemo imageLeft={false} panelBg="dark-grey" centered={true} layout="half" />
    </Layout>
  )
}
