'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import {
  Check,
  Calendar,
  AlertCircle,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

interface Photo {
  id: string
  url: string
  originalFilename: string
  personName: string | null
  photoNumber: string | null
  isSelected: boolean
}

interface ProofGallery {
  id: string
  firstName: string
  sessionName: string
  expiresAt: string
  selectionsSubmittedAt: string | null
  photos: Photo[]
}

export default function ProofSelectionPage() {
  const params = useParams()
  const token = params?.token as string

  const [gallery, setGallery] = useState<ProofGallery | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set())
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [lightboxPhoto, setLightboxPhoto] = useState<Photo | null>(null)

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch(`/api/proofs/${token}`)
      if (res.ok) {
        const data = await res.json()
        setGallery(data)
        // Initialize selected photos from server data
        const selected = new Set<string>()
        data.photos.forEach((photo: Photo) => {
          if (photo.isSelected) {
            selected.add(photo.id)
          }
        })
        setSelectedPhotos(selected)
        if (data.selectionsSubmittedAt) {
          setSubmitted(true)
        }
      } else {
        const errorData = await res.json()
        setError(errorData.error || 'Failed to load proof gallery')
      }
    } catch (err) {
      setError('Failed to load proof gallery')
    } finally {
      setLoading(false)
    }
  }, [token])

  useEffect(() => {
    fetchGallery()
  }, [fetchGallery])

  const toggleSelection = async (photoId: string) => {
    const isCurrentlySelected = selectedPhotos.has(photoId)
    const newSelected = new Set(selectedPhotos)

    if (isCurrentlySelected) {
      newSelected.delete(photoId)
    } else {
      newSelected.add(photoId)
    }

    setSelectedPhotos(newSelected)

    // Save to server
    try {
      await fetch(`/api/proofs/${token}/select`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          photoId,
          selected: !isCurrentlySelected,
        }),
      })
    } catch (err) {
      // Revert on error
      if (isCurrentlySelected) {
        newSelected.add(photoId)
      } else {
        newSelected.delete(photoId)
      }
      setSelectedPhotos(newSelected)
    }
  }

  const handleSubmit = async () => {
    if (selectedPhotos.size === 0) {
      alert('Please select at least one photo')
      return
    }

    const message = submitted
      ? `Update your selections to ${selectedPhotos.size} photo(s)?`
      : `Submit your ${selectedPhotos.size} selection(s)?`

    if (!confirm(message)) {
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch(`/api/proofs/${token}/submit`, {
        method: 'POST',
      })

      if (res.ok) {
        setSubmitted(true)
        alert(submitted ? 'Selections updated!' : 'Selections submitted!')
      } else {
        const errorData = await res.json()
        alert(errorData.error || 'Failed to submit selections')
      }
    } catch (err) {
      alert('Failed to submit selections')
    } finally {
      setSubmitting(false)
    }
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const openLightbox = (photo: Photo) => {
    setLightboxPhoto(photo)
  }

  const closeLightbox = () => {
    setLightboxPhoto(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!gallery || !lightboxPhoto) return
    const currentIndex = gallery.photos.findIndex(p => p.id === lightboxPhoto.id)
    let newIndex = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
    if (newIndex < 0) newIndex = gallery.photos.length - 1
    if (newIndex >= gallery.photos.length) newIndex = 0
    setLightboxPhoto(gallery.photos[newIndex])
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Unable to Load Proofs</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!gallery) return null

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Banner - compact like main website */}
      <header
        className="shadow-sm py-2"
        style={{
          backgroundColor: '#575757',
          backgroundImage: 'url("/images/grey-linen-background.jpg")',
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

      {/* Gallery Info Section */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          {/* Welcome message */}
          <div className="text-center mb-2">
            <h1 className="text-2xl md:text-3xl" style={{ color: '#5577a5', fontWeight: '700' }}>
              Welcome, {gallery.firstName}!
            </h1>
          </div>

          {/* Instructions */}
          <div className="text-center mb-2 md:mb-3 px-2">
            <p className="text-sm md:text-base" style={{ color: '#666' }}>
              Tap photos to select your favorites, then submit your selections.
            </p>
          </div>

          {/* Expiration warning */}
          <div className="flex justify-center mb-2 md:mb-3">
            <div className="flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 rounded-lg" style={{ backgroundColor: '#dc2626', border: '2px solid #b91c1c' }}>
              <Calendar className="w-3 h-3 md:w-4 md:h-4 text-white" />
              <span className="text-xs md:text-sm text-white" style={{ fontWeight: '700' }}>
                Proofs expire: {formatDate(gallery.expiresAt)}
              </span>
            </div>
          </div>

          {/* Selection count and submit button */}
          <div className="flex justify-center items-center gap-3 md:gap-4">
            <div className="text-center">
              <span className="text-base md:text-lg" style={{ color: '#5577a5', fontWeight: '700' }}>
                {selectedPhotos.size} photo{selectedPhotos.size !== 1 ? 's' : ''} selected
              </span>
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitting || selectedPhotos.size === 0}
              className="flex items-center gap-2 text-white px-4 py-2.5 text-sm md:px-6 md:py-2.5 md:text-base rounded-lg disabled:opacity-50 transition-colors"
              style={{ backgroundColor: submitted ? '#28a745' : '#5577a5', fontWeight: '600' }}
            >
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
              {submitting ? 'Submitting...' : submitted ? 'Update Selections' : 'Submit Selections'}
            </button>
          </div>
        </div>
      </div>

      {/* Submitted message */}
      {submitted && (
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 md:p-6 text-center">
            <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-green-500 mx-auto mb-2 md:mb-3" />
            <h2 className="text-lg md:text-xl font-bold text-green-700 mb-1 md:mb-2">Selections Submitted!</h2>
            <p className="text-sm md:text-base text-green-600">
              You can still change your selections above if needed.
            </p>
          </div>
        </div>
      )}

      {/* Photos Grid */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {gallery.photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative group rounded-lg overflow-hidden bg-white shadow-sm transition-all cursor-pointer ${
                selectedPhotos.has(photo.id) ? 'ring-4 ring-green-500' : 'hover:shadow-md'
              }`}
              onClick={() => toggleSelection(photo.id)}
            >
              {/* Photo */}
              <div className="aspect-square">
                <img
                  src={photo.url}
                  alt={photo.originalFilename}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Selection overlay */}
              {selectedPhotos.has(photo.id) && (
                <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                  <div className="bg-green-500 rounded-full p-2">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                </div>
              )}

              {/* Hover overlay for zoom */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  openLightbox(photo)
                }}
                className="absolute top-2 right-2 bg-white/90 hover:bg-white p-2 rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </button>

              {/* Photo number label */}
              {photo.photoNumber && (
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  #{photo.photoNumber}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} CMQ Headshots. All rights reserved.</p>
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

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
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

          {/* Image */}
          <img
            src={lightboxPhoto.url}
            alt={lightboxPhoto.originalFilename}
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Selection button in lightbox */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleSelection(lightboxPhoto.id)
            }}
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2.5 text-sm md:px-6 md:py-3 md:text-base rounded-lg font-semibold transition-colors ${
              selectedPhotos.has(lightboxPhoto.id)
                ? 'bg-green-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Check className="w-4 h-4 md:w-5 md:h-5" />
            {selectedPhotos.has(lightboxPhoto.id) ? 'Selected' : 'Select This Photo'}
          </button>
        </div>
      )}
    </div>
  )
}
