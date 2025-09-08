import React from 'react'

interface HeadshotPhotographerSectionProps {
  videoUrl?: string
  videoThumbnail?: string
  title?: string
  description?: string
  ownerName?: string
  backgroundColor?: string
}

export default function HeadshotPhotographerSection({
  videoUrl,
  videoThumbnail = "/images/website%20media/VideoScreenshot.jpg",
  title = "HEADSHOT PHOTOGRAPHER PHOENIX",
  description = "I take pride in my ability to make people feel comfortable in front of my camera. It's a big part of my process, and it's the first step towards creating a headshot that you'll truly love.",
  ownerName = "Cindy Quinn - Owner",
  backgroundColor = "#F1F1F1"
}: HeadshotPhotographerSectionProps) {
  return (
    <section style={{ 
      backgroundColor: '#f5f5f5', 
      backgroundImage: 'url("/images/website media/white-fabric-texture_1154-645-722829672.jpg")',
      backgroundRepeat: 'repeat',
      backgroundSize: '300px 300px',
      backgroundBlendMode: 'multiply',
      paddingTop: '100px', 
      paddingBottom: '100px' 
    }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Video Section */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img 
                src={videoThumbnail}
                alt="Cindy Quinn - Headshot Photographer Phoenix"
                className="w-full h-auto"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-30 transition-all cursor-pointer">
                <div className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl hover:bg-opacity-100 transition-all">
                  <svg className="w-8 h-8 text-gray-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.68L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-6">
            {/* Title */}
            <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-cmq-blue">
              {title}
            </h2>
            
            {/* Description */}
            <p className="font-raleway text-xl font-light text-cmq-gray-darker" style={{
              fontWeight: '300',
              letterSpacing: '0.03em',
              lineHeight: '1.6'
            }}>
              {description}
            </p>
            
            {/* Owner Name */}
            <p className="font-raleway text-lg text-cmq-blue font-semibold">
              {ownerName}
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}