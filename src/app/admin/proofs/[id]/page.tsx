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
  Camera,
  Save,
  CheckCircle,
  Mail,
} from 'lucide-react'

interface Photo {
  id: string
  blobUrl: string
  originalFilename: string
  personName: string | null
  photoNumber: string | null
  fileSize: string
  uploadedAt: string
  isSelected: boolean
}

interface ProofGallery {
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
  selectionsSubmittedAt: string | null
  photos: Photo[]
}

export default function ProofGalleryManagementPage() {
  const params = useParams()
  const router = useRouter()
  const proofGalleryId = params?.id as string

  const [proofGallery, setProofGallery] = useState<ProofGallery | null>(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedPhotos, setSelectedPhotos] = useState<Set<string>>(new Set())
  const [sendingEmail, setSendingEmail] = useState(false)

  // Edit form state
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [sessionName, setSessionName] = useState('')
  const [expiresAt, setExpiresAt] = useState('')
  const [isActive, setIsActive] = useState(true)

  const fetchProofGallery = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/proofs/${proofGalleryId}`)
      if (res.ok) {
        const data = await res.json()
        setProofGallery(data)
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
      console.error('Error fetching proof gallery:', error)
    } finally {
      setLoading(false)
    }
  }, [proofGalleryId, router])

  useEffect(() => {
    fetchProofGallery()
  }, [fetchProofGallery])

  const handleSave = async () => {
    setSaving(true)
    try {
      const res = await fetch(`/api/admin/proofs/${proofGalleryId}`, {
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
        fetchProofGallery()
      }
    } catch (error) {
      console.error('Error saving proof gallery:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    const fileArray = Array.from(files)
    let totalSize = 0
    for (const file of fileArray) {
      totalSize += file.size
    }

    console.log(`[UPLOAD] Starting upload of ${fileArray.length} files, total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`)

    try {
      // Step 1: Get presigned URLs for all files
      console.log('[UPLOAD] Step 1: Getting presigned URLs...')
      const presignRes = await fetch(`/api/admin/proofs/${proofGalleryId}/photos/presign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          files: fileArray.map(f => ({
            filename: f.name,
            contentType: f.type || 'image/jpeg',
            size: f.size,
          })),
        }),
      })

      if (!presignRes.ok) {
        const responseText = await presignRes.text()
        console.error('[UPLOAD] Presign failed:', presignRes.status, responseText)
        let errorMessage = 'Failed to get upload URLs'
        try {
          const presignError = JSON.parse(responseText)
          errorMessage = presignError.error || errorMessage
        } catch {
          errorMessage = `Server error (${presignRes.status}): ${responseText.substring(0, 100)}`
        }
        throw new Error(errorMessage)
      }

      const responseText = await presignRes.text()
      console.log('[UPLOAD] Presign response:', responseText.substring(0, 200))

      let presignData
      try {
        presignData = JSON.parse(responseText)
      } catch (parseError) {
        console.error('[UPLOAD] Failed to parse presign response:', responseText)
        throw new Error('Server returned invalid response - please refresh and try again')
      }

      const { presignedUrls } = presignData
      console.log('[UPLOAD] Got presigned URLs for', presignedUrls.length, 'files')

      // Step 2: Upload each file directly to S3
      console.log('[UPLOAD] Step 2: Uploading files to S3...')
      const uploadedFiles: { tempKey: string; filename: string; contentType: string }[] = []

      for (let i = 0; i < fileArray.length; i++) {
        const file = fileArray[i]
        const presigned = presignedUrls[i]

        console.log(`[UPLOAD] Uploading file ${i + 1}/${fileArray.length}: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`)

        try {
          const uploadRes = await fetch(presigned.presignedUrl, {
            method: 'PUT',
            body: file,
            headers: {
              'Content-Type': presigned.contentType,
            },
          })

          if (!uploadRes.ok) {
            console.error(`[UPLOAD] Failed to upload ${file.name}: ${uploadRes.status} ${uploadRes.statusText}`)
            continue
          }

          uploadedFiles.push({
            tempKey: presigned.tempKey,
            filename: presigned.filename,
            contentType: presigned.contentType,
          })
          console.log(`[UPLOAD] Successfully uploaded ${file.name} to S3`)
        } catch (uploadError) {
          console.error(`[UPLOAD] Error uploading ${file.name}:`, uploadError)
        }
      }

      if (uploadedFiles.length === 0) {
        throw new Error('No files were uploaded successfully')
      }

      console.log(`[UPLOAD] Step 2 complete: ${uploadedFiles.length}/${fileArray.length} files uploaded to S3`)

      // Step 3: Finalize uploads (apply watermark, create DB records)
      console.log('[UPLOAD] Step 3: Finalizing uploads (watermark + DB)...')
      const finalizeRes = await fetch(`/api/admin/proofs/${proofGalleryId}/photos/finalize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files: uploadedFiles }),
      })

      const finalizeData = await finalizeRes.json()
      console.log('[UPLOAD] Finalize response:', finalizeData)

      if (finalizeRes.ok) {
        const successCount = finalizeData.successCount || finalizeData.photos?.length || 0
        const totalCount = finalizeData.totalCount || uploadedFiles.length

        if (successCount < fileArray.length) {
          alert(`Upload completed: ${successCount}/${fileArray.length} photos processed successfully.\n\nCheck console for details.`)
        }
        fetchProofGallery()
      } else {
        const errorMsg = finalizeData.details || finalizeData.error || 'Processing failed'
        console.error('[UPLOAD] Finalize error:', finalizeData)
        alert(`Upload completed but processing failed: ${errorMsg}\n\nThe raw images are in S3 but watermarks were not applied.`)
        fetchProofGallery()
      }
    } catch (error) {
      console.error('[UPLOAD] Exception:', error)
      alert(`Upload error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  const handleDeletePhotos = async () => {
    if (selectedPhotos.size === 0) return
    if (!confirm(`Delete ${selectedPhotos.size} photo(s)?`)) return

    try {
      const res = await fetch(`/api/admin/proofs/${proofGalleryId}/photos`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photoIds: Array.from(selectedPhotos) }),
      })
      if (res.ok) {
        setSelectedPhotos(new Set())
        fetchProofGallery()
      }
    } catch (error) {
      console.error('Error deleting photos:', error)
    }
  }

  const handleDeleteProofGallery = async () => {
    if (!confirm('Are you sure you want to delete this proof gallery? This cannot be undone.')) return

    try {
      const res = await fetch(`/api/admin/proofs/${proofGalleryId}`, {
        method: 'DELETE',
      })
      if (res.ok) {
        router.push('/admin/dashboard')
      }
    } catch (error) {
      console.error('Error deleting proof gallery:', error)
    }
  }

  const copyMagicLink = async () => {
    if (!proofGallery) return
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin
    const link = `${baseUrl}/proofs/${proofGallery.magicLinkToken}`
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!proofGallery) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Proof gallery not found</div>
      </div>
    )
  }

  // Separate selected and unselected photos
  const clientSelectedPhotos = proofGallery.photos.filter(p => p.isSelected)
  const unselectedPhotos = proofGallery.photos.filter(p => !p.isSelected)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Banner */}
      <header
        className="shadow-sm"
        style={{
          backgroundColor: '#575757',
          backgroundImage: 'url("/images/grey-linen-background.jpg")',
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

        {/* Proof Gallery Details */}
        <div className="bg-white rounded-lg shadow-sm p-6" style={{ border: '1px solid #5577a5' }}>
          <h2 className="text-2xl font-semibold mb-6 text-center" style={{ color: '#5577a5' }}>Proof Gallery Details</h2>

          {/* Submission Status Banner */}
          {proofGallery.selectionsSubmittedAt && (
            <div className="mb-6 p-4 bg-purple-50 border-2 border-purple-500 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-purple-600" />
              <div>
                <p className="font-semibold text-purple-700">Client has submitted their selections!</p>
                <p className="text-sm text-purple-600">
                  Submitted on {formatDate(proofGallery.selectionsSubmittedAt)} - {clientSelectedPhotos.length} photo(s) selected
                </p>
              </div>
            </div>
          )}

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
                Proof gallery is active
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
              {copied ? 'Copied!' : 'Copy Proof Link'}
            </button>
            <Link
              href={`/proofs/${proofGallery.magicLinkToken}`}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
              style={{ border: '1px solid #5577a5', color: '#5577a5', backgroundColor: 'white' }}
            >
              <ExternalLink className="w-4 h-4" />
              View Proof Gallery
            </Link>
            <button
              onClick={async () => {
                if (!confirm(`Send "Your Proofs Are Ready" email to ${proofGallery.clientEmail}?`)) return
                setSendingEmail(true)
                try {
                  const res = await fetch(`/api/admin/proofs/${proofGalleryId}/send-email`, {
                    method: 'POST',
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
              {sendingEmail ? 'Sending...' : 'Send Proofs Ready Email'}
            </button>
          </div>
        </div>

        {/* Client Selections (if submitted) */}
        {proofGallery.selectionsSubmittedAt && clientSelectedPhotos.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm p-6" style={{ border: '2px solid #9333ea' }}>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
              <h2 className="text-xl font-semibold text-purple-600">
                Client Selections ({clientSelectedPhotos.length})
              </h2>
            </div>
            <p className="text-sm mb-4" style={{ color: '#000005' }}>
              These are the photos the client selected for purchase.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {clientSelectedPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative rounded-lg overflow-hidden"
                  style={{ border: '3px solid #9333ea' }}
                >
                  <div className="relative">
                    <img
                      src={photo.blobUrl}
                      alt={photo.originalFilename}
                      className="w-full h-auto"
                    />
                    <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-2 bg-purple-50">
                    <p className="text-xs truncate font-medium" style={{ color: '#000005' }}>
                      {photo.originalFilename}
                    </p>
                    <p className="text-xs" style={{ color: '#000005' }}>
                      {formatBytes(photo.fileSize)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Photos */}
        <div className="bg-white rounded-lg shadow-sm p-6" style={{ border: '1px solid #5577a5' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold" style={{ color: '#5577a5' }}>
              All Photos ({proofGallery.photos.length})
            </h2>
            <div className="flex gap-2">
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
                style={{ backgroundColor: '#5577a5' }}
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
            </div>
          </div>

          {proofGallery.photos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {proofGallery.photos.map((photo) => (
                <div
                  key={photo.id}
                  className="relative group cursor-pointer rounded-lg overflow-hidden"
                  style={{
                    border: selectedPhotos.has(photo.id)
                      ? '2px solid #5577a5'
                      : photo.isSelected
                        ? '2px solid #9333ea'
                        : '2px solid transparent'
                  }}
                  onClick={() => togglePhotoSelection(photo.id)}
                >
                  <div className="relative">
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
                    {photo.isSelected && (
                      <div className="absolute top-2 right-2 bg-purple-600 rounded-full p-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <div className={`p-2 ${photo.isSelected ? 'bg-purple-50' : 'bg-gray-50'}`}>
                    <p className="text-xs truncate" style={{ color: '#000005' }}>
                      {photo.originalFilename}
                    </p>
                    <p className="text-xs" style={{ color: '#000005' }}>
                      {formatBytes(photo.fileSize)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12" style={{ color: '#000005' }}>
              <Camera className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>No photos uploaded yet.</p>
              <p className="text-sm">Use the upload button to add photos for the client to review.</p>
            </div>
          )}
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-lg shadow-sm p-6 border border-red-200">
          <h2 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h2>
          <button
            onClick={handleDeleteProofGallery}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            <Trash2 className="w-4 h-4" />
            Delete Proof Gallery
          </button>
          <p className="mt-2 text-sm text-gray-500">
            This will permanently delete the proof gallery and all associated photos.
          </p>
        </div>
      </main>
    </div>
  )
}
