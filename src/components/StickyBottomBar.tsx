import GetPricingButton from './GetPricingButton'

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-transparent py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          <GetPricingButton 
            href="#" 
            size="small" 
            external
            className="!py-2 !px-4 !text-sm"
          >
            BOOK ZOOM
          </GetPricingButton>
          <GetPricingButton 
            href="/pricing-individual" 
            size="small"
            className="!py-2 !px-4 !text-sm"
          >
            BOOK SHOOT
          </GetPricingButton>
          <GetPricingButton 
            href="mailto:Cindy@CMQHeadshots.com" 
            size="small" 
            external
            className="!py-2 !px-4 !text-sm"
          >
            SEND EMAIL
          </GetPricingButton>
          <GetPricingButton 
            href="sms:(480)648-3429" 
            size="small" 
            external
            className="!py-2 !px-4 !text-sm"
          >
            SEND TEXT
          </GetPricingButton>
        </div>
      </div>
    </div>
  )
}