'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Upload,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  Image as ImageIcon,
  Save,
  Mail,
  Download,
  Clock,
} from 'lucide-react'

interface Photo {
  id: string
  blobUrl: string
  originalFilename: string
  personName: string | null
  cropType: string
  fileSize: string
  uploadedAt: string
}

interface DownloadRecord {
  id: string
  downloadType: string
  description: string
  fileCount: number
  downloadedAt: string
}

interface Gallery {
  id: string
  firstName: string
  lastName: string
  clientEmail: string
  sessionName: string
  magicLinkToken: string
  isActive: boolean
  expiresAt: string
  createdAt: string
  viewCount: number
  firstViewedAt: string | null
  photos: Photo[]
  downloads: DownloadRecord[]
}

export default function GalleryManagementPage() {
  const params = useParams()
  const router = useRouter()
  const galleryId = params?.id as string

  const [gallery, setGallery] = useState<Gallery | null>(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set())
  const [sendingEmail, setSendingEmail] = useState(false)
  const [emailTemplate, setEmailTemplate] = useState<'business' | 'actor'>('business')

  // Edit form state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [sessionName, setSessionName] = useState('')
  const [expiresAt, setExpiresAt] = useState('')
  const [isActive, setIsActive] = useState(true)

  const fetchGallery = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/galleries/${galleryId}`)
      if (res.ok) {
        const data = await res.json()
        setGallery(data)
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setClientEmail(data.clientEmail)
        setSessionName(data.sessionName)
        setExpiresAt(data.expiresAt.split('T')[0])
        setIsActive(data.isActive)
      } else if (res.status === 401) {
        router.push('/admin')
      }
    } catch (error) {
      console.error('Error fetching gallery:', error)
    } finally {
      setLoading(false)
    }
  }, [galleryId, router])

  useEffect(() => {
    fetchGallery()
  }, [fetchGallery])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/galleries/${galleryId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          clientEmail,
          sessionName,
          expiresAt,
          isActive,
        }),
      })
      if (res.ok) {
        fetchGallery()
      }
    } catch (error) {
      console.error('Error saving gallery:', error)
    } finally {
      setSaving(false)
    }
  }

  const [uploadProgress, setUploadProgress] = useState<string>('')

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    setUploadProgress(`Preparing ${files.length} files...`)

    try {
      // Step 1: Get presigned URLs for all files
      const fileList = Array.from(files).map(file => ({
        filename: file.name,
        contentType: file.type || 'image/jpeg',
      }))

      const presignedRes = await fetch(`/api/admin/galleries/${galleryId}/presigned-urls`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files: fileList }),
      })

      if (!presignedRes.ok) {
        throw new Error('Failed to get upload URLs')
      }

      const { presignedUrls } = await presignedRes.json()

      // Step 2: Upload each file directly to S3
      const uploadedPhotos: { s3Key: string; filename: string; fileSize: number }[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const presigned = presignedUrls[i]

        setUploadProgress(`Uploading ${i + 1} of ${files.length}: ${file.name}`)

        try {
          const uploadRes = await fetch(presigned.uploadUrl, {
            method: 'PUT',
            body: file,
            headers: {
              'Content-Type': presigned.contentType,
            },
          })

          if (!uploadRes.ok) {
            const errorText = await uploadRes.text()
            console.error(`Failed to upload ${file.name}:`, uploadRes.status, errorText)
            throw new Error(`S3 upload failed for ${file.name}: ${uploadRes.status}`)
          }
        } catch (uploadError) {
          console.error(`Upload error for ${file.name}:`, uploadError)
          throw new Error(`Failed to upload ${file.name}. This may be a CORS issue - check S3 bucket configuration.`)
        }

        uploadedPhotos.push({
          s3Key: presigned.s3Key,
          filename: file.name,
          fileSize: file.size,
        })
      }

      // Step 3: Register photos in database
      if (uploadedPhotos.length > 0) {
        setUploadProgress('Saving to database...')

        const registerRes = await fetch(`/api/admin/galleries/${galleryId}/register-photos`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ photos: uploadedPhotos }),
        })

        if (registerRes.ok) {
          fetchGallery()
          setUploadProgress(`Successfully uploaded ${uploadedPhotos.length} photos!`)
        } else {
          throw new Error('Failed to register photos')
        }
      }

      // Clear progress after 2 seconds
      setTimeout(() => setUploadProgress(''), 2000)
    } catch (error) {
      console.error('Error uploading photos:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      setUploadProgress(`Upload failed: ${errorMessage}`)
      // Keep error visible longer so user can read it
      setTimeout(() => setUploadProgress(''), 10000)
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  const handleDeletePhotos = async () => {
    if (selectedPhotos.size === 0) return
    if (!confirm(`Delete ${selectedPhotos.size} photo(s)?`)) return

    try {
      const res = await fetch(`/api/admin/galleries/${galleryId}/photos`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photoIds: Array.from(selectedPhotos) }),
      })
      if (res.ok) {
        setSelectedPhotos(new Set())
        fetchGallery()
      }
    } catch (error) {
      console.error('Error deleting photos:', error)
    }
  }

  const handleDeleteGallery = async () => {
    if (!confirm('Are you sure you want to delete this gallery? This cannot be undone.')) return

    try {
      const res = await fetch(`/api/admin/galleries/${galleryId}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        router.push('/admin/dashboard')
      }
    } catch (error) {
      console.error('Error deleting gallery:', error)
    }
  }

  const copyMagicLink = async () => {
    if (!gallery) return
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin
    const link = `${baseUrl}/gallery/${gallery.magicLinkToken}`
    await navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

  const formatBytes = (bytes: string) => {
    const num = parseInt(bytes)
    if (num === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(num) / Math.log(k))
    return parseFloat((num / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!gallery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Gallery not found</div>
      </div>
    )
  }

  // Group photos by person name
  const photosByPerson = gallery.photos.reduce((acc, photo) => {
    const name = photo.personName || 'Unknown'
    if (!acc[name]) acc[name] = []
    acc[name].push(photo)
    return acc
  }, {} as Record<string, Photo[]>)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Banner */}
      <header
        className="shadow-sm"
        style={{
          backgroundColor: '#575757',
          backgroundImage: 'url("https://images.cmqheadshots.com/images/website%20media/optimized/grey-linen-background-optimized.webp")',
          backgroundRepeat: 'repeat',
          backgroundSize: 'auto'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex justify-center">
            <img
              src="/images/cmq-logo-white.webp"
              alt="CMQ Headshots"
              className="w-[300px]"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Back link and page title */}
        <div className="flex items-center gap-4 mb-2">
          <Link href="/admin/dashboard" style={{ color: '#5577a5' }}>
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <span style={{ color: '#5577a5' }} className="text-lg">Back to Dashboard</span>
        </div>

        {/* Gallery Details */}
        <div className="bg-white rounded-lg shadow-sm p-6" style={{ border: '1px solid #5577a5' }}>
          <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#5577a5' }}>Gallery Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#5577a5' }}>
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:outline-none"
                style={{ border: '1px solid #5577a5', color: '#000005' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#5577a5' }}>
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:outline-none"
                style={{ border: '1px solid #5577a5', color: '#000005' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#5577a5' }}>
                Client Email
              </label>
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:outline-none"
                style={{ border: '1px solid #5577a5', color: '#000005' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#5577a5' }}>
                Session Name
              </label>
              <input
                type="text"
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:outline-none"
                style={{ border: '1px solid #5577a5', color: '#000005' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#5577a5' }}>
                Expires At
              </label>
              <input
                type="date"
                value={expiresAt}
                onChange={(e) => setExpiresAt(e.target.value)}
                className="w-full px-3 py-2 rounded-lg focus:ring-2 focus:outline-none"
                style={{ border: '1px solid #5577a5', color: '#000005' }}
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isActive"
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
                className="w-4 h-4"
                style={{ accentColor: '#5577a5' }}
              />
              <label htmlFor="isActive" className="text-sm" style={{ color: '#000005' }}>
                Gallery is active
              </label>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 text-white px-4 py-2 rounded-lg disabled:opacity-50 transition-colors"
              style={{ backgroundColor: '#5577a5' }}
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={copyMagicLink}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              style={{ border: '1px solid #5577a5', color: '#5577a5', backgroundColor: 'white' }}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
            <Link
              href={`/gallery/${gallery.magicLinkToken}`}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              style={{ border: '1px solid #5577a5', color: '#5577a5', backgroundColor: 'white' }}
            >
              <ExternalLink className="w-4 h-4" />
              View Gallery
            </Link>
            <div className="flex items-center gap-2">
              <select
                value={emailTemplate}
                onChange={(e) => setEmailTemplate(e.target.value as 'business' | 'actor')}
                className="px-3 py-2 rounded-lg focus:ring-2 focus:outline-none"
                style={{ border: '1px solid #5577a5', color: '#000005' }}
              >
                <option value="business">Business Template</option>
                <option value="actor">Actor Template</option>
              </select>
              <button
                onClick={async () => {
                  if (!confirm(`Send "${emailTemplate === 'actor' ? 'Actor' : 'Business'}" email to ${gallery.clientEmail}?`)) return
                  setSendingEmail(true)
                  try {
                    const res = await fetch(`/api/admin/galleries/${galleryId}/send-email`, {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ templateType: emailTemplate }),
                    })
                    if (res.ok) {
                      alert('Email sent successfully!')
                    } else {
                      const data = await res.json()
                      alert(`Failed to send email: ${data.error}${data.details ? '\n\nDetails: ' + data.details : ''}`)
                    }
                  } catch (error) {
                    alert('Failed to send email: ' + (error instanceof Error ? error.message : 'Unknown error'))
                  } finally {
                    setSendingEmail(false)
                  }
                }}
                disabled={sendingEmail}
                className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                style={{ backgroundColor: '#28a745', color: 'white' }}
              >
                <Mail className="w-4 h-4" />
                {sendingEmail ? 'Sending...' : 'Send Email'}
              </button>
            </div>
          </div>
        </div>

        {/* Photos */}
        <div className="bg-white rounded-lg shadow-sm p-6" style={{ border: '1px solid #5577a5' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold" style={{ color: '#5577a5' }}>
              Photos ({gallery.photos.length})
            </h2>
            <div className="flex gap-2 items-center">
              {selectedPhotos.size > 0 && (
                <button
                  onClick={handleDeletePhotos}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete ({selectedPhotos.size})
                </button>
              )}
              <label
                className="flex items-center gap-2 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors"
                style={{ backgroundColor: uploading ? '#999' : '#5577a5' }}
              >
                <Upload className="w-4 h-4" />
                {uploading ? 'Uploading...' : 'Upload Photos'}
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>
              {uploadProgress && (
                <span className="text-sm" style={{ color: '#5577a5' }}>
                  {uploadProgress}
                </span>
              )}
            </div>
          </div>

          {Object.keys(photosByPerson).length > 0 ? (
            <div className="space-y-6">
              {Object.entries(photosByPerson).map(([personName, photos]) => (
                <div key={personName}>
                  <h3 className="text-md font-medium mb-2" style={{ color: '#000005' }}>
                    {personName} ({photos.length} photos)
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {photos.map((photo) => (
                      <div
                        key={photo.id}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                        style={{
                          border: selectedPhotos.has(photo.id) ? '2px solid #5577a5' : '2px solid transparent'
                        }}
                        onClick={() => togglePhotoSelection(photo.id)}
                      >
                        <div className="bg-gray-100 relative">
                          <img
                            src={photo.blobUrl}
                            alt={photo.originalFilename}
                            className="w-full h-auto"
                          />
                          {selectedPhotos.has(photo.id) && (
                            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(85, 119, 165, 0.3)' }}>
                              <Check className="w-8 h-8 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="p-2 bg-gray-50">
                          <p className="text-xs truncate" title={photo.originalFilename} style={{ color: '#000005' }}>
                            {photo.originalFilename}
                          </p>
                          <p className="text-xs" style={{ color: '#000005' }}>
                            {photo.cropType} • {formatBytes(photo.fileSize)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" style={{ color: '#000005' }}>
              <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No photos uploaded yet.</p>
              <p className="text-sm">Use the upload button to add photos.</p>
            </div>
          )}
        </div>

        {/* Download History */}
        <div className="bg-white rounded-lg shadow-sm p-6" style={{ border: '1px solid #5577a5' }}>
          <h2 className="text-xl font-semibold mb-4" style={{ color: '#5577a5' }}>
            <Download className="w-5 h-5 inline-block mr-2" />
            Download History
          </h2>

          {gallery.downloads && gallery.downloads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: '#5577a5' }}>
                    <th className="text-left py-2 px-3 font-medium" style={{ color: '#5577a5' }}>Date & Time</th>
                    <th className="text-left py-2 px-3 font-medium" style={{ color: '#5577a5' }}>Type</th>
                    <th className="text-left py-2 px-3 font-medium" style={{ color: '#5577a5' }}>Description</th>
                    <th className="text-right py-2 px-3 font-medium" style={{ color: '#5577a5' }}>Files</th>
                  </tr>
                </thead>
                <tbody>
                  {gallery.downloads.map((download) => (
                    <tr key={download.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 px-3" style={{ color: '#000005' }}>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          {new Date(download.downloadedAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          })}{' '}
                          {new Date(download.downloadedAt).toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true,
                          })}
                        </div>
                      </td>
                      <td className="py-2 px-3">
                        <span
                          className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                          style={{
                            backgroundColor: download.downloadType === 'all' ? '#5577a5' :
                                           download.downloadType === 'single' ? '#28a745' :
                                           download.downloadType === 'person' ? '#ffc107' : '#6c757d',
                            color: download.downloadType === 'person' ? '#000' : '#fff'
                          }}
                        >
                          {download.downloadType === 'all' ? 'All Photos' :
                           download.downloadType === 'single' ? 'Single' :
                           download.downloadType === 'person' ? 'By Person' :
                           download.downloadType === 'selected' ? 'Selected' : download.downloadType}
                        </span>
                      </td>
                      <td className="py-2 px-3" style={{ color: '#000005' }}>
                        {download.description}
                      </td>
                      <td className="py-2 px-3 text-right" style={{ color: '#000005' }}>
                        {download.fileCount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Download className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No downloads yet</p>
              <p className="text-sm">Downloads will appear here when your client downloads photos.</p>
            </div>
          )}
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-red-200">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>
          <button
            onClick={handleDeleteGallery}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <Trash2 className="w-4 h-4" />
            Delete Gallery
          </button>
          <p className="mt-2 text-sm text-gray-500">
            This will permanently delete the gallery and all associated photos.
          </p>
        </div>
      </main>
    </div>
  )
}
