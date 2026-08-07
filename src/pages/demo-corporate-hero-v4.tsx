import Layout from '../components/Layout'
import SplitHeroDemo from '../components/SplitHeroDemo'

// DEMO V4 — text left on dark grey linen panel, image right, centered white text
export default function DemoCorporateHeroV4() {
  return (
    <Layout
      title="DEMO V4 — Corporate Split Hero | CMQ Headshots"
      description="Internal design demo. Not a public page."
      noindex={true}
      showHeaderButton={true}
    >
      <SplitHeroDemo imageLeft={false} panelBg="dark-grey" centered={true} />
    </Layout>
  )
}
