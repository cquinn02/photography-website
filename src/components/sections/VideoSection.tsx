import React from 'react'

interface VideoSectionProps {
  videoUrl: string
  posterImage: string
  title: string
  titleThinWord?: string
  description: string
  ownerName: string
  backgroundColor?: string
}

export default function VideoSection({
  videoUrl,
  posterImage,
  title,
  titleThinWord,
  description,
  ownerName,
  backgroundColor = "#F1F1F1"
}: VideoSectionProps) {
  return (
    <section style={{ backgroundColor, paddingTop: '150px', paddingBottom: '150px' }}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Video Section */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <video 
                poster={posterImage}
                controls
                className="w-full h-auto"
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-6">
            {/* Title */}
            <h2 className="font-raleway text-2xl lg:text-3xl font-bold text-cmq-blue whitespace-nowrap">
              {title} {titleThinWord && <span className="font-thin">{titleThinWord}</span>}
            </h2>
            
            {/* Description */}
            <p className="font-raleway text-xl font-thin text-cmq-gray-darker" style={{
              fontWeight: '100',
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