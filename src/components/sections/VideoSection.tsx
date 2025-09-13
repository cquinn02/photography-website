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
    <section style={{ backgroundColor, minHeight: '100vh' }} className="flex items-center">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 items-center h-full">
          
          {/* Video Section - Left half with padding */}
          <div className="relative" style={{ paddingLeft: '20px', paddingRight: '10px' }}>
            <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <video 
                poster={posterImage}
                controls
                className="absolute inset-0 w-full h-full object-contain bg-black"
                preload="metadata"
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text Content - Right half with padding */}
          <div className="flex items-center justify-center px-12 py-16 lg:py-24">
            <div className="text-center space-y-6 max-w-xl">
              {/* Title */}
              <h2 className="font-raleway text-3xl lg:text-4xl text-cmq-blue">
                <span className="font-bold">{title}</span> {titleThinWord && <span className="font-normal">{titleThinWord}</span>}
              </h2>
              
              {/* Description */}
              <p className="font-raleway text-lg text-cmq-gray-darker" style={{
                fontWeight: '400',
                letterSpacing: '0.02em',
                lineHeight: '1.7'
              }}>
                {description}
              </p>
              
              {/* Owner Name */}
              <p className="font-raleway text-lg text-cmq-gray-darker font-medium">
                {ownerName}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}