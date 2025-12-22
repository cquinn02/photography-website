import React from 'react'
import Image from 'next/image'
import GetPricingButton from '../GetPricingButton'

interface ModelingHeadshotsSectionProps {
  backgroundColor?: string
}

export default function ModelingHeadshotsSection({
  backgroundColor = '#ffffff'
}: ModelingHeadshotsSectionProps) {
  return (
    <section style={{ backgroundColor }}>
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 items-center">

        {/* Text Content - Left Side */}
        <div className="flex items-center justify-center py-16 px-8">
          <div className="space-y-6 text-center mx-5">
            <h2 className="font-raleway text-3xl lg:text-4xl text-cmq-blue sm:whitespace-nowrap">
              <span className="font-light">PHOENIX</span> <span className="font-bold">MODELING HEADSHOTS</span>
            </h2>

            <p className="font-raleway text-xl font-normal text-cmq-gray-darker" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Your agent will advise you to hire a professional photographer for your modeling images. I can help answer any questions regarding what your agent is looking for in your modeling headshots. If you&apos;re a model and need assistance with your portfolio, call me or schedule an appointment online for your modeling session.
            </p>

            <div className="pt-4">
              <GetPricingButton
                href="/pricing-actor"
                size="large"
              >
                MODEL PRICING
              </GetPricingButton>
            </div>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="relative" style={{ minHeight: '650px' }}>
          <Image
            src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Modelling%20Photography-ashley.webp"
            alt="Phoenix modeling headshots collage"
            fill
            className="object-contain"
            sizes="50vw"
          />
        </div>

      </div>

      {/* Mobile Layout - H2 → Image → Text */}
      <div className="lg:hidden">
        {/* H2 Title First */}
        <div className="flex items-center justify-center pt-12" style={{ backgroundColor }}>
          <div className="w-4/5 text-center">
            <h2 className="font-raleway text-3xl font-bold mb-6 text-cmq-blue">
              <span className="font-light">PHOENIX</span> <span className="font-bold">MODELING HEADSHOTS</span>
            </h2>
          </div>
        </div>
        {/* Image Second */}
        <div className="flex justify-center" style={{ backgroundColor }}>
          <div className="w-4/5 relative" style={{ minHeight: '300px' }}>
            <Image
              src="https://images.cmqheadshots.com/images/website%20media/CMQHeadshots-Modelling%20Photography-ashley.webp"
              alt="Phoenix modeling headshots collage"
              fill
              className="object-contain"
              sizes="80vw"
            />
          </div>
        </div>
        {/* Text Third */}
        <div className="flex items-center justify-center py-12" style={{ backgroundColor }}>
          <div className="w-4/5 text-center">
            <p className="font-raleway text-xl font-normal mb-8 text-cmq-gray-darker" style={{
              fontWeight: '400',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              Your agent will advise you to hire a professional photographer for your modeling images. I can help answer any questions regarding what your agent is looking for in your modeling headshots. If you&apos;re a model and need assistance with your portfolio, call me or schedule an appointment online for your modeling session.
            </p>
            <div className="text-center">
              <GetPricingButton href="/pricing-actor" size="large" shimmer={true}>
                MODEL PRICING
              </GetPricingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}