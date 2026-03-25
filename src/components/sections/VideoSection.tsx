import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface VideoSectionProps {
  videoUrl: string
  posterImage: string
  title: string
  titleThinWord?: string
  description: string
  ownerName: string
  backgroundColor?: string
  captionsUrl?: string
}

export default function VideoSection({
  videoUrl,
  posterImage,
  title,
  titleThinWord,
  description,
  ownerName,
  backgroundColor = "#F1F1F1",
  captionsUrl
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
    setTimeout(() => {
      videoRef.current?.play()
    }, 100)
  }

  return (
    <section style={{ backgroundColor, paddingTop: '45px', paddingBottom: '45px' }} className="flex items-center">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 items-center h-full">

          {/* Video Section - Left half with padding */}
          <div className="relative" style={{ paddingLeft: '20px', paddingRight: '10px' }}>
            <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              {/* Custom Thumbnail Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 cursor-pointer z-10"
                  onClick={handlePlay}
                >
                  <Image
                    src={posterImage}
                    alt={`${title}${titleThinWord ? ` ${titleThinWord}` : ''} — watch video`}
                    fill
                    className="object-contain bg-black"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-black/60 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors">
                      <svg
                        className="w-10 h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
              <video
                ref={videoRef}
                controls
                className="absolute inset-0 w-full h-full object-contain bg-black"
                preload="none"
              >
                <source src={videoUrl} type="video/mp4" />
                {captionsUrl && (
                  <track
                    kind="captions"
                    src={captionsUrl}
                    srcLang="en"
                    label="English"
                    default
                  />
                )}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text Content - Right half with padding */}
          <div className="flex items-center justify-center px-12 py-16 lg:py-24">
            <div className="text-center space-y-6 max-w-xl">
              {/* Title */}
              <h2 className="font-raleway text-3xl lg:text-4xl text-cmq-blue">
                <span className="font-medium">{title}</span> {titleThinWord && <span className="font-normal">{titleThinWord}</span>}
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

              {/* Learn More Button */}
              <Link
                href="/about"
                className="font-raleway inline-block text-white px-8 py-4 text-lg font-normal transition-all duration-300 rounded-lg uppercase tracking-wide shadow-lg"
                style={{
                  backgroundColor: '#5577a5',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#575757'
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#5577a5'
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                LEARN MORE ABOUT CMQ HEADSHOTS
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}