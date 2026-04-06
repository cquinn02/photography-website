import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

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
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  // Autoplay muted when section scrolls into view
  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.currentTime < 2) video.currentTime = 2
          video.play().catch(() => {
            // Autoplay blocked — user will need to tap
          })
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section ref={sectionRef} style={{ backgroundColor, paddingTop: '45px', paddingBottom: '45px' }} className="flex items-center">
      <div className="w-full">
        <div className="grid lg:grid-cols-2 items-center h-full">

          {/* Video Section - Left half with padding */}
          <div className="relative" style={{ paddingLeft: '20px', paddingRight: '10px' }}>
            <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
              <video
                ref={videoRef}
                controls
                muted
                playsInline
                poster={posterImage}
                className="absolute inset-0 w-full h-full object-contain bg-black"
                preload="metadata"
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
              {/* Unmute button overlay */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/60 rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728" />
                  </svg>
                )}
              </button>
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
