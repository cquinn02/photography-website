'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import {
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  Calendar,
  Images,
  Gift,
  Star,
  ExternalLink,
} from 'lucide-react'

interface Photo {
  id: string
  url: string
  originalFilename: string
  personName: string | null
  cropType: string
  fileSize: string
}

interface Gallery {
  id: string
  firstName: string
  sessionName: string
  expiresAt: string
  feePolicyAcknowledgedAt: string | null
  photos: Photo[]
}

type TabType = 'gallery' | 'referral' | 'review'

export default function ClientGalleryPage() {
  const params = useParams()
  const token = params?.token as string

  const [gallery, setGallery] = useState<Gallery | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set())
  const [downloading, setDownloading] = useState(false)
  const [showFeePolicyModal, setShowFeePolicyModal] = useState(false)
  const [acknowledgingPolicy, setAcknowledgingPolicy] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>('gallery')

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch(`/api/gallery/${token}`)
      if (res.ok) {
        const data = await res.json()
        setGallery(data)
        if (!data.feePolicyAcknowledgedAt) {
          setShowFeePolicyModal(true)
        }
      } else {
        const errorData = await res.json()
        setError(errorData.error || 'Failed to load gallery')
      }
    } catch {
      setError('Failed to load gallery')
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    fetchGallery()
  }, [fetchGallery])

  const handleAcknowledgeFeePolicy = async () => {
    setAcknowledgingPolicy(true)
    try {
      const res = await fetch(`/api/gallery/${token}/acknowledge-fee-policy`, {
        method: 'POST',
      })
      if (res.ok) {
        setShowFeePolicyModal(false)
        if (gallery) {
          setGallery({ ...gallery, feePolicyAcknowledgedAt: new Date().toISOString() })
        }
      }
    } catch (err) {
      console.error('Failed to acknowledge fee policy:', err)
    } finally {
      setAcknowledgingPolicy(false)
    }
  }

  const handleDownload = async (type: 'selected' | 'all' | 'person', personName?: string) => {
    if (!gallery) return
    setDownloading(true)

    try {
      const body: { photoIds?: string[]; downloadAll?: boolean; personName?: string } = {}

      if (type === 'selected') {
        body.photoIds = Array.from(selectedPhotos)
      } else if (type === 'person' && personName) {
        body.personName = personName
      } else {
        body.downloadAll = true
      }

      const res = await fetch(`/api/gallery/${token}/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (!res.ok) {
        throw new Error('Download failed')
      }

      const contentDisposition = res.headers.get('Content-Disposition')
      let filename = `${gallery.sessionName}-photos.zip`
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="(.+)"/)
        if (match) filename = match[1]
      }

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)

      setSelectedPhotos(new Set())
    } catch (err) {
      console.error('Download error:', err)
      alert('Failed to download photos. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  const handleSingleDownload = async (photo: Photo) => {
    setDownloading(true)
    try {
      const res = await fetch(`/api/gallery/${token}/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photoIds: [photo.id] }),
      })

      if (!res.ok) throw new Error('Download failed')

      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = photo.originalFilename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Download error:', err)
      alert('Failed to download photo. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  const togglePhotoSelection = (photoId: string) => {
    const newSelected = new Set(selectedPhotos)
    if (newSelected.has(photoId)) {
      newSelected.delete(photoId)
    } else {
      newSelected.add(photoId)
    }
    setSelectedPhotos(newSelected)
  }

  const trackTabInteraction = async (tabName: string, eventType: 'opened' | 'converted') => {
    try {
      await fetch(`/api/gallery/${token}/track-tab`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tabName, eventType }),
      })
    } catch (err) {
      console.error('Failed to track tab interaction:', err)
    }
  }

  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId)
    if (tabId === 'referral' || tabId === 'review') {
      trackTabInteraction(tabId, 'opened')
    }
  }

  const handleReviewClick = () => {
    trackTabInteraction('review', 'converted')
  }

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  const closeLightbox = () => {
    setSelectedPhoto(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!gallery || !selectedPhoto) return
    const currentIndex = gallery.photos.findIndex(p => p.id === selectedPhoto.id)
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
    if (newIndex < 0) newIndex = gallery.photos.length - 1
    if (newIndex >= gallery.photos.length) newIndex = 0
    setSelectedPhoto(gallery.photos[newIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') navigateLightbox('prev')
      if (e.key === 'ArrowRight') navigateLightbox('next')
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPhoto, gallery])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div style={{ color: '#5577a5' }} className="text-lg font-medium">Loading your gallery...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Unable to Load Gallery</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!gallery) return null

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const tabs = [
    { id: 'gallery' as TabType, label: 'Your Gallery', icon: Images, step: 1 },
    { id: 'referral' as TabType, label: 'Referral Program', icon: Gift, step: 2 },
    { id: 'review' as TabType, label: 'Leave a Review', icon: Star, step: 3 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header
        className="shadow-sm py-2"
        style={{
          backgroundColor: '#575757',
          backgroundImage: 'url("/images/website media/grey linen-background.jpg")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <img
              src="/images/cmq-logo-white.webp"
              alt="CMQ Headshots"
              className="w-[200px] md:w-[300px]"
            />
          </div>
        </div>
      </header>

      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="text-center mb-2 md:mb-4">
            <h1 className="text-2xl md:text-3xl" style={{ color: '#5577a5', fontWeight: '700' }}>Welcome, {gallery.firstName}!</h1>
          </div>

          <div className="text-center mb-3 md:mb-4 px-2">
            <p className="text-sm md:text-base" style={{ color: '#666' }}>
              Download all photos or use checkboxes to select individual images.
            </p>
          </div>

          <div className="flex justify-center mb-3 md:mb-4">
            <div className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-lg" style={{ backgroundColor: '#dc2626', border: '2px solid #b91c1c' }}>
              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-xs md:text-sm text-white" style={{ fontWeight: '700' }}>
                Gallery expires: {formatDate(gallery.expiresAt)}
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row gap-2 md:gap-3 w-auto px-4 md:px-0">
              {tabs.map((tab) => {
                const getIconColor = () => {
                  if (activeTab === tab.id) return 'white'
                  if (tab.id === 'referral') return '#e11d48'
                  if (tab.id === 'review') return '#eab308'
                  return '#5577a5'
                }

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'text-white'
                        : 'hover:bg-gray-200'
                    }`}
                    style={activeTab === tab.id
                      ? { backgroundColor: '#5577a5', fontWeight: '600' }
                      : { color: '#000005', fontWeight: '600', backgroundColor: '#e5e7eb', border: '2px solid #5577a5' }}
                  >
                    <span className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-xs shrink-0 ${
                      activeTab === tab.id ? 'bg-white/20 text-white' : ''
                    }`}
                    style={activeTab !== tab.id ? { color: 'white', backgroundColor: '#5577a5', fontWeight: '700' } : { fontWeight: '700' }}
                    >
                      {tab.step}
                    </span>
                    {tab.id === 'review' ? (
                      <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ) : (
                      <tab.icon className="w-4 h-4 md:w-5 md:h-5 shrink-0" style={{ color: getIconColor() }} />
                    )}
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {activeTab === 'gallery' && (
          <>
            <div className="mb-8 flex flex-wrap gap-3 justify-center">
              {selectedPhotos.size > 0 && (
                <button
                  onClick={() => handleDownload('selected')}
                  disabled={downloading}
                  className="flex items-center gap-2 text-white px-3 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-lg disabled:opacity-50 transition-colors"
                  style={{ backgroundColor: '#5577a5', fontWeight: '600' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#475f8a'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  Download Selected ({selectedPhotos.size})
                </button>
              )}
              <button
                onClick={() => handleDownload('all')}
                disabled={downloading}
                className="flex items-center gap-2 text-white px-3 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-lg disabled:opacity-50 transition-colors"
                style={{ backgroundColor: '#5577a5', fontWeight: '600' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#475f8a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                {downloading ? 'Preparing...' : 'Download All Photos'}
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              {gallery.photos.map((photo) => (
                    <div key={photo.id} className="relative group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white" style={{ width: 'calc(20% - 0.6rem)' }}>
                      <div
                        className="cursor-pointer"
                        onClick={() => openLightbox(photo)}
                      >
                        <img
                          src={photo.url}
                          alt={photo.originalFilename}
                          className="w-full h-auto block"
                        />
                      </div>

                      <div
                        className="absolute top-2 left-2 cursor-pointer z-10"
                        onClick={(e) => {
                          e.stopPropagation()
                          togglePhotoSelection(photo.id)
                        }}
                      >
                        <div
                          className={`w-6 h-6 rounded border-2 transition-colors ${
                            selectedPhotos.has(photo.id)
                              ? 'border-transparent'
                              : 'bg-white/90 border-gray-400 hover:border-blue-500'
                          }`}
                          style={selectedPhotos.has(photo.id) ? { backgroundColor: '#5577a5', borderColor: '#5577a5' } : {}}
                        >
                          {selectedPhotos.has(photo.id) && (
                            <svg
                              className="w-full h-full text-white p-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleSingleDownload(photo)
                        }}
                        className="absolute bottom-2 right-2 bg-white/90 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Download className="w-4 h-4 text-gray-700" />
                      </button>

                      <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {photo.cropType}
                      </div>

                      <div className="p-2 text-center">
                        <p className="text-xs text-gray-600 truncate" title={photo.originalFilename}>
                          {photo.originalFilename}
                        </p>
                      </div>
                    </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'referral' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center" style={{ border: '2px solid #5577a5' }}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000005' }}>
                Earn Rewards with Our Referral Program!
              </h2>
              <p className="text-lg mb-6" style={{ color: '#000005' }}>
                Love your photos? Share the experience! Refer a friend to CMQ Headshots and you&apos;ll both receive <strong>$25 off</strong> your next session.
              </p>
              <div className="bg-gray-50 rounded-lg p-6" style={{ border: '1px solid #5577a5' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#5577a5' }}>How it works:</h3>
                <ol className="text-left space-y-2 text-lg" style={{ color: '#000005' }}>
                  <li>1. Share your unique referral link with friends and colleagues</li>
                  <li>2. When they book a session, you both get $25 off</li>
                  <li>3. There&apos;s no limit - refer as many people as you&apos;d like!</li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'review' && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 text-center" style={{ border: '2px solid #5577a5' }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#fef9c3' }}>
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000005' }}>
                We&apos;d Love Your Feedback!
              </h2>
              <p className="text-lg mb-6" style={{ color: '#000005', fontWeight: '500' }}>
                Your experience matters to us! If you loved your photos and the CMQ Headshots experience,
                please take a moment to leave us a review on Google. It helps other professionals find us
                and means the world to our small business.
              </p>
              <div className="flex justify-center gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-10 h-10" viewBox="0 0 24 24" fill="#FBBC04" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
              <a
                href="https://www.google.com/search?ei=pFPjW__0N6mL0gKVk5CICw&q=cmq+headshots&oq=cmq+headshots&gs_l=psy-ab.12...0.0..168302...0.0..0.0.0.......0......gws-wiz.C06H6YeLOYo#lrd=0x872c9f6f61d9d319:0xfe597c46938a00b,3,,,"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleReviewClick}
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                style={{ backgroundColor: '#5577a5' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#475f8a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
              >
                Leave a Google Review
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="mt-4 text-base" style={{ color: '#000005', fontWeight: '500' }}>
                Thank you for being a valued CMQ Headshots client!
              </p>
            </div>
          </div>
        )}
      </main>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('prev')
            }}
            className="absolute left-4 text-white/80 hover:text-white p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox('next')
            }}
            className="absolute right-4 text-white/80 hover:text-white p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <img
            src={selectedPhoto.url}
            alt={selectedPhoto.originalFilename}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = ''
              target.alt = 'Failed to load image'
              target.className = 'text-white text-center p-8'
            }}
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-lg flex items-center gap-4">
            <span className="max-w-md truncate">{selectedPhoto.originalFilename}</span>
            <span className="text-white/60">|</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleSingleDownload(selectedPhoto)
              }}
              className="flex items-center gap-1 hover:text-blue-400"
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
      )}

      <footer className="bg-white border-t mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CMQ Headshots. All rights reserved.</p>
          <p className="mt-1">
            Questions? Contact us at{' '}
            <a href="mailto:cindy@cmqheadshots.com" className="hover:underline" style={{ color: '#5577a5' }}>
              cindy@cmqheadshots.com
            </a>
          </p>
          <p className="mt-2">
            <a href="https://www.cmqheadshots.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#5577a5' }}>
              www.cmqheadshots.com
            </a>
          </p>
        </div>
      </footer>

      {showFeePolicyModal && (
        <div className="fixed inset-0 bg-black/70 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#5577a5' }}>
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#5577a5' }}>
                Important: Gallery Access Policy
              </h2>
            </div>

            <div className="space-y-4 mb-8 text-center">
              <p className="text-lg" style={{ color: '#000005' }}>
                Welcome to your photo gallery! Before you continue, please note the following:
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                <p className="font-semibold text-lg mb-2" style={{ color: '#000005' }}>
                  Your gallery expires on {gallery ? formatDate(gallery.expiresAt) : ''}
                </p>
                <p className="text-base" style={{ color: '#000005' }}>
                  Please download all your photos before this date. After expiration, your gallery
                  will no longer be accessible.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
                <p className="font-semibold text-lg mb-2" style={{ color: '#000005' }}>
                  Reactivation Fee: $100
                </p>
                <p className="text-base" style={{ color: '#000005' }}>
                  If you need access to your photos after the expiration date, a $100 reactivation
                  fee will apply. This covers the time and storage costs to restore your gallery.
                </p>
              </div>

              <p className="text-base" style={{ color: '#000005' }}>
                We recommend downloading your photos as soon as possible to avoid any issues.
              </p>
            </div>

            <button
              onClick={handleAcknowledgeFeePolicy}
              disabled={acknowledgingPolicy}
              className="w-full text-white py-2.5 px-4 md:py-3 md:px-6 rounded-lg font-semibold text-base md:text-lg transition-colors disabled:opacity-50"
              style={{ backgroundColor: '#5577a5' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#475f8a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
            >
              {acknowledgingPolicy ? 'Please wait...' : 'I Understand, Show My Photos'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
