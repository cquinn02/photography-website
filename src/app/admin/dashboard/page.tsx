'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Plus,
  Image,
  Eye,
  Download,
  Calendar,
  LogOut,
  ExternalLink,
  Copy,
  Check,
  Camera,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Gift,
  BarChart3,
} from 'lucide-react'

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
  photoCount: number
  totalStorage: number
  downloadCount: number
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
  photoCount: number
  selectionCount: number
}

interface TabStats {
  totals: Record<string, { opened: number; converted: number }>
  conversionRates: Record<string, number>
  clientStats: Array<{
    firstName: string
    lastName: string
    sessionName: string
    galleryId: string
    tabs: Record<string, { opened: number; converted: number }>
  }>
  recentActivity: Array<{
    id: string
    firstName: string
    lastName: string
    tabName: string
    eventType: string
    createdAt: string
  }>
  totalInteractions: number
}

export default function AdminDashboard() {
  const [galleries, setGalleries] = useState<Gallery[]>([])
  const [proofGalleries, setProofGalleries] = useState<ProofGallery[]>([])
  const [loading, setLoading] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showCreateProofForm, setShowCreateProofForm] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'galleries' | 'proofs'>('galleries')
  const [tabStats, setTabStats] = useState<TabStats | null>(null)
  const [showTabEngagement, setShowTabEngagement] = useState(false)
  const router = useRouter()

  // Form state for galleries
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [clientEmail, setClientEmail] = useState('')
  const [sessionName, setSessionName] = useState('')
  const [expirationDays, setExpirationDays] = useState(30)
  const [creating, setCreating] = useState(false)

  // Form state for proof galleries
  const [proofFirstName, setProofFirstName] = useState('')
  const [proofLastName, setProofLastName] = useState('')
  const [proofClientEmail, setProofClientEmail] = useState('')
  const [proofSessionName, setProofSessionName] = useState('')
  const [proofExpirationDays, setProofExpirationDays] = useState(14)
  const [creatingProof, setCreatingProof] = useState(false)

  useEffect(() => {
    checkAuthAndFetch()
  }, [])

  const checkAuthAndFetch = async () => {
    try {
      const authRes = await fetch('/api/admin/check-auth')
      if (!authRes.ok) {
        router.push('/admin')
        return
      }
      fetchGalleries()
      fetchProofGalleries()
      fetchTabStats()
    } catch {
      router.push('/admin')
    }
  }

  const fetchGalleries = async () => {
    try {
      const res = await fetch('/api/admin/galleries')
      if (res.ok) {
        const data = await res.json()
        setGalleries(data)
      }
    } catch (error) {
      console.error('Error fetching galleries:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchProofGalleries = async () => {
    try {
      const res = await fetch('/api/admin/proofs')
      if (res.ok) {
        const data = await res.json()
        setProofGalleries(data)
      }
    } catch (error) {
      console.error('Error fetching proof galleries:', error)
    }
  }

  const fetchTabStats = async () => {
    try {
      const res = await fetch('/api/admin/tab-stats')
      if (res.ok) {
        const data = await res.json()
        setTabStats(data)
      }
    } catch (error) {
      console.error('Error fetching tab stats:', error)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  const handleCreateGallery = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreating(true)

    try {
      const res = await fetch('/api/admin/galleries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          clientEmail,
          sessionName,
          expirationDays,
        }),
      })

      if (res.ok) {
        setFirstName('')
        setLastName('')
        setClientEmail('')
        setSessionName('')
        setExpirationDays(30)
        setShowCreateForm(false)
        fetchGalleries()
      } else {
        const errorData = await res.json()
        alert(`Failed to create gallery: ${errorData.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error creating gallery:', error)
      alert('Failed to create gallery. Please check the console for details.')
    } finally {
      setCreating(false)
    }
  }

  const copyMagicLink = async (token: string, id: string, isProof = false) => {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || window.location.origin
    const link = isProof ? `${baseUrl}/proofs/${token}` : `${baseUrl}/gallery/${token}`
    await navigator.clipboard.writeText(link)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleCreateProofGallery = async (e: React.FormEvent) => {
    e.preventDefault()
    setCreatingProof(true)

    try {
      const res = await fetch('/api/admin/proofs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: proofFirstName,
          lastName: proofLastName,
          clientEmail: proofClientEmail,
          sessionName: proofSessionName,
          expirationDays: proofExpirationDays,
        }),
      })

      if (res.ok) {
        setProofFirstName('')
        setProofLastName('')
        setProofClientEmail('')
        setProofSessionName('')
        setProofExpirationDays(14)
        setShowCreateProofForm(false)
        fetchProofGalleries()
      } else {
        const errorData = await res.json()
        alert(`Failed to create proof gallery: ${errorData.error || 'Unknown error'}`)
      }
    } catch (error) {
      console.error('Error creating proof gallery:', error)
      alert('Failed to create proof gallery. Please check the console for details.')
    } finally {
      setCreatingProof(false)
    }
  }

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  const isExpired = (dateString: string) => {
    return new Date(dateString) < new Date()
  }

  const totalStorage = galleries.reduce((sum, g) => sum + g.totalStorage, 0)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

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

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Gallery Admin Title Row */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold" style={{ color: '#5577a5' }}>Gallery Admin</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-lg transition-colors"
            style={{ color: '#5577a5' }}
          >
            <LogOut className="w-6 h-6" />
            Logout
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('galleries')}
            className={`flex items-center gap-2 px-6 py-3 text-lg rounded-lg transition-colors ${
              activeTab === 'galleries' ? 'text-white' : ''
            }`}
            style={{
              backgroundColor: activeTab === 'galleries' ? '#5577a5' : 'white',
              color: activeTab === 'galleries' ? 'white' : '#5577a5',
              border: '1px solid #5577a5',
            }}
          >
            <Image className="w-5 h-5" />
            Client Galleries
          </button>
          <button
            onClick={() => setActiveTab('proofs')}
            className={`flex items-center gap-2 px-6 py-3 text-lg rounded-lg transition-colors ${
              activeTab === 'proofs' ? 'text-white' : ''
            }`}
            style={{
              backgroundColor: activeTab === 'proofs' ? '#5577a5' : 'white',
              color: activeTab === 'proofs' ? 'white' : '#5577a5',
              border: '1px solid #5577a5',
            }}
          >
            <Camera className="w-5 h-5" />
            Proof Galleries
          </button>
        </div>

        {/* Client Galleries Tab */}
        {activeTab === 'galleries' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ border: '1px solid #5577a5' }}>
                <p className="text-base" style={{ color: '#000005' }}>Total Galleries</p>
                <p className="text-3xl font-bold" style={{ color: '#000005' }}>{galleries.length}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ border: '1px solid #5577a5' }}>
                <p className="text-base" style={{ color: '#000005' }}>Active Galleries</p>
                <p className="text-3xl font-bold text-green-600">
                  {galleries.filter((g) => g.isActive && !isExpired(g.expiresAt)).length}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ border: '1px solid #5577a5' }}>
                <p className="text-base" style={{ color: '#000005' }}>Total Photos</p>
                <p className="text-3xl font-bold" style={{ color: '#5577a5' }}>
                  {galleries.reduce((sum, g) => sum + g.photoCount, 0)}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ border: '1px solid #5577a5' }}>
                <p className="text-base" style={{ color: '#000005' }}>Storage Used</p>
                <p className="text-3xl font-bold text-purple-600">{formatBytes(totalStorage)}</p>
              </div>
            </div>

            {/* Create Gallery Button */}
            <div className="mb-6">
              <button
                onClick={() => setShowCreateForm(!showCreateForm)}
                className="flex items-center gap-2 text-white px-6 py-3 text-lg rounded-lg transition-colors"
                style={{ backgroundColor: '#5577a5' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#475f8a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
              >
                <Plus className="w-6 h-6" />
                Create New Gallery
              </button>
            </div>

            {/* Create Gallery Form */}
            {showCreateForm && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-6" style={{ border: '1px solid #5577a5' }}>
                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#5577a5' }}>Create New Gallery</h2>
                <form onSubmit={handleCreateGallery} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      style={{ color: '#000005' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      style={{ color: '#000005' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      Client Email
                    </label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      style={{ color: '#000005' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      Session Name
                    </label>
                    <input
                      type="text"
                      value={sessionName}
                      onChange={(e) => setSessionName(e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., Corporate Headshots 2025"
                      style={{ color: '#000005' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      Expires In (days)
                    </label>
                    <input
                      type="number"
                      value={expirationDays}
                      onChange={(e) => setExpirationDays(parseInt(e.target.value))}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      style={{ color: '#000005' }}
                      min="1"
                      max="365"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={creating}
                      className="text-white px-8 py-3 text-lg rounded-lg disabled:opacity-50 transition-colors"
                      style={{ backgroundColor: '#5577a5' }}
                    >
                      {creating ? 'Creating...' : 'Create Gallery'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Galleries List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ border: '1px solid #5577a5' }}>
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-semibold" style={{ color: '#5577a5' }}>All Galleries</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {galleries.length === 0 ? (
                  <div className="px-6 py-12 text-center text-lg" style={{ color: '#000005' }}>
                    No galleries yet. Create your first gallery above!
                  </div>
                ) : (
                  galleries.map((gallery) => (
                    <div key={gallery.id} className="px-6 py-5 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <Link
                              href={`/admin/gallery/${gallery.id}`}
                              className="text-xl font-medium hover:underline"
                              style={{ color: '#5577a5' }}
                            >
                              {gallery.firstName} {gallery.lastName}
                            </Link>
                            {!gallery.isActive || isExpired(gallery.expiresAt) ? (
                              <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">
                                {isExpired(gallery.expiresAt) ? 'Expired' : 'Inactive'}
                              </span>
                            ) : (
                              <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-base mt-1" style={{ color: '#000005' }}>{gallery.sessionName}</p>
                          <p className="text-sm" style={{ color: '#000005' }}>{gallery.clientEmail}</p>
                        </div>

                        <div className="flex items-center gap-8 text-base" style={{ color: '#000005' }}>
                          <div className="flex items-center gap-2" title="Photos">
                            <Image className="w-5 h-5" />
                            {gallery.photoCount}
                          </div>
                          <div className="flex items-center gap-2" title="Views">
                            <Eye className="w-5 h-5" />
                            {gallery.viewCount}
                          </div>
                          <div className="flex items-center gap-2" title="Downloads">
                            <Download className="w-5 h-5" />
                            {gallery.downloadCount}
                          </div>
                          <div className="flex items-center gap-2" title="Expires">
                            <Calendar className="w-5 h-5" />
                            {formatDate(gallery.expiresAt)}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 ml-6">
                          <button
                            onClick={() => copyMagicLink(gallery.magicLinkToken, gallery.id)}
                            className="p-2 transition-colors"
                            style={{ color: '#5577a5' }}
                            title="Copy magic link"
                          >
                            {copiedId === gallery.id ? (
                              <Check className="w-6 h-6 text-green-600" />
                            ) : (
                              <Copy className="w-6 h-6" />
                            )}
                          </button>
                          <Link
                            href={`/gallery/${gallery.magicLinkToken}`}
                            target="_blank"
                            className="p-2 transition-colors"
                            style={{ color: '#5577a5' }}
                            title="Open gallery"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </Link>
                        </div>
                      </div>
                      {gallery.firstViewedAt && (
                        <p className="mt-2 text-sm" style={{ color: '#000005' }}>
                          First viewed: {formatDate(gallery.firstViewedAt)}
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}

        {/* Tab Engagement Section - Always visible */}
        <div className="mb-8">
          <button
            onClick={() => setShowTabEngagement(!showTabEngagement)}
            className="w-full bg-white rounded-lg shadow-sm p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            style={{ border: '1px solid #5577a5' }}
          >
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6" style={{ color: '#5577a5' }} />
              <span className="text-xl font-semibold" style={{ color: '#5577a5' }}>Tab Engagement Analytics</span>
              {tabStats && (
                <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: '#5577a5', color: 'white' }}>
                  {tabStats.totalInteractions} interactions
                </span>
              )}
            </div>
            {showTabEngagement ? (
              <ChevronUp className="w-6 h-6" style={{ color: '#5577a5' }} />
            ) : (
              <ChevronDown className="w-6 h-6" style={{ color: '#5577a5' }} />
            )}
          </button>

          {showTabEngagement && tabStats && (
            <div className="bg-white rounded-b-lg shadow-sm p-6 -mt-1" style={{ border: '1px solid #5577a5', borderTop: 'none' }}>
              {/* Overall Stats */}
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#5577a5' }}>Overall Conversion Rates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Review Tab Stats */}
                <div className="bg-gray-50 rounded-lg p-4" style={{ border: '1px solid #e5e7eb' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5" style={{ color: '#FBBC04' }} />
                    <span className="font-medium" style={{ color: '#000005' }}>Leave a Review</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold" style={{ color: '#5577a5' }}>{tabStats.totals.review?.opened || 0}</p>
                      <p className="text-sm text-gray-500">Opens</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{tabStats.totals.review?.converted || 0}</p>
                      <p className="text-sm text-gray-500">Clicks</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{tabStats.conversionRates.review || 0}%</p>
                      <p className="text-sm text-gray-500">Rate</p>
                    </div>
                  </div>
                </div>

                {/* Referral Tab Stats */}
                <div className="bg-gray-50 rounded-lg p-4" style={{ border: '1px solid #e5e7eb' }}>
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-5 h-5" style={{ color: '#e11d48' }} />
                    <span className="font-medium" style={{ color: '#000005' }}>Referral Program</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold" style={{ color: '#5577a5' }}>{tabStats.totals.referral?.opened || 0}</p>
                      <p className="text-sm text-gray-500">Opens</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-green-600">{tabStats.totals.referral?.converted || 0}</p>
                      <p className="text-sm text-gray-500">Clicks</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-purple-600">{tabStats.conversionRates.referral || 0}%</p>
                      <p className="text-sm text-gray-500">Rate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Per-Client Breakdown */}
              {tabStats.clientStats.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold mb-4" style={{ color: '#5577a5' }}>Per-Client Breakdown</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b" style={{ borderColor: '#5577a5' }}>
                          <th className="text-left py-2 px-3 font-medium" style={{ color: '#5577a5' }}>Client</th>
                          <th className="text-center py-2 px-3 font-medium" style={{ color: '#5577a5' }}>
                            <div className="flex items-center justify-center gap-1">
                              <Star className="w-4 h-4" style={{ color: '#FBBC04' }} />
                              Review
                            </div>
                          </th>
                          <th className="text-center py-2 px-3 font-medium" style={{ color: '#5577a5' }}>
                            <div className="flex items-center justify-center gap-1">
                              <Gift className="w-4 h-4" style={{ color: '#e11d48' }} />
                              Referral
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tabStats.clientStats.slice(0, 10).map((client) => (
                          <tr key={client.galleryId} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-2 px-3" style={{ color: '#000005' }}>
                              <Link href={`/admin/gallery/${client.galleryId}`} className="hover:underline" style={{ color: '#5577a5' }}>
                                {client.firstName} {client.lastName}
                              </Link>
                              <span className="text-gray-500 text-xs ml-2">{client.sessionName}</span>
                            </td>
                            <td className="py-2 px-3 text-center">
                              {client.tabs.review?.opened > 0 || client.tabs.review?.converted > 0 ? (
                                <span className="text-sm">
                                  {client.tabs.review.opened} opens / {client.tabs.review.converted} clicks
                                </span>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )}
                            </td>
                            <td className="py-2 px-3 text-center">
                              {client.tabs.referral?.opened > 0 || client.tabs.referral?.converted > 0 ? (
                                <span className="text-sm">
                                  {client.tabs.referral.opened} opens / {client.tabs.referral.converted} clicks
                                </span>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {tabStats.totalInteractions === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                  <p>No tab interactions yet</p>
                  <p className="text-sm">Engagement will appear here when clients view the Review and Referral tabs.</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Proof Galleries Tab */}
        {activeTab === 'proofs' && (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ border: '1px solid #5577a5' }}>
                <p className="text-base" style={{ color: '#000005' }}>Total Proof Galleries</p>
                <p className="text-3xl font-bold" style={{ color: '#000005' }}>{proofGalleries.length}</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ border: '1px solid #5577a5' }}>
                <p className="text-base" style={{ color: '#000005' }}>Active Proofs</p>
                <p className="text-3xl font-bold text-green-600">
                  {proofGalleries.filter((g) => g.isActive && !isExpired(g.expiresAt)).length}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ border: '1px solid #5577a5' }}>
                <p className="text-base" style={{ color: '#000005' }}>Awaiting Selection</p>
                <p className="text-3xl font-bold" style={{ color: '#5577a5' }}>
                  {proofGalleries.filter((g) => g.isActive && !g.selectionsSubmittedAt).length}
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm" style={{ border: '1px solid #5577a5' }}>
                <p className="text-base" style={{ color: '#000005' }}>Selections Submitted</p>
                <p className="text-3xl font-bold text-purple-600">
                  {proofGalleries.filter((g) => g.selectionsSubmittedAt).length}
                </p>
              </div>
            </div>

            {/* Create Proof Gallery Button */}
            <div className="mb-6">
              <button
                onClick={() => setShowCreateProofForm(!showCreateProofForm)}
                className="flex items-center gap-2 text-white px-6 py-3 text-lg rounded-lg transition-colors"
                style={{ backgroundColor: '#5577a5' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#475f8a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
              >
                <Plus className="w-6 h-6" />
                Create New Proof Gallery
              </button>
            </div>

            {/* Create Proof Gallery Form */}
            {showCreateProofForm && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-6" style={{ border: '1px solid #5577a5' }}>
                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#5577a5' }}>Create New Proof Gallery</h2>
                <form onSubmit={handleCreateProofGallery} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      value={proofFirstName}
                      onChange={(e) => setProofFirstName(e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      style={{ color: '#000005' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={proofLastName}
                      onChange={(e) => setProofLastName(e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      style={{ color: '#000005' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      Client Email
                    </label>
                    <input
                      type="email"
                      value={proofClientEmail}
                      onChange={(e) => setProofClientEmail(e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      style={{ color: '#000005' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      Session Name
                    </label>
                    <input
                      type="text"
                      value={proofSessionName}
                      onChange={(e) => setProofSessionName(e.target.value)}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., John Smith Headshots"
                      style={{ color: '#000005' }}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2" style={{ color: '#000005' }}>
                      Expires In (days)
                    </label>
                    <input
                      type="number"
                      value={proofExpirationDays}
                      onChange={(e) => setProofExpirationDays(parseInt(e.target.value))}
                      className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      style={{ color: '#000005' }}
                      min="1"
                      max="90"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={creatingProof}
                      className="text-white px-8 py-3 text-lg rounded-lg disabled:opacity-50 transition-colors"
                      style={{ backgroundColor: '#5577a5' }}
                    >
                      {creatingProof ? 'Creating...' : 'Create Proof Gallery'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Proof Galleries List */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ border: '1px solid #5577a5' }}>
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-semibold" style={{ color: '#5577a5' }}>All Proof Galleries</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {proofGalleries.length === 0 ? (
                  <div className="px-6 py-12 text-center text-lg" style={{ color: '#000005' }}>
                    No proof galleries yet. Create your first proof gallery above!
                  </div>
                ) : (
                  proofGalleries.map((proofGallery) => (
                    <div key={proofGallery.id} className="px-6 py-5 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <Link
                              href={`/admin/proofs/${proofGallery.id}`}
                              className="text-xl font-medium hover:underline"
                              style={{ color: '#5577a5' }}
                            >
                              {proofGallery.firstName} {proofGallery.lastName}
                            </Link>
                            {proofGallery.selectionsSubmittedAt ? (
                              <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded flex items-center gap-1">
                                <CheckCircle className="w-4 h-4" />
                                Submitted
                              </span>
                            ) : !proofGallery.isActive || isExpired(proofGallery.expiresAt) ? (
                              <span className="px-3 py-1 text-sm bg-red-100 text-red-700 rounded">
                                {isExpired(proofGallery.expiresAt) ? 'Expired' : 'Inactive'}
                              </span>
                            ) : (
                              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded">
                                Awaiting Selection
                              </span>
                            )}
                          </div>
                          <p className="text-base mt-1" style={{ color: '#000005' }}>{proofGallery.sessionName}</p>
                          <p className="text-sm" style={{ color: '#000005' }}>{proofGallery.clientEmail}</p>
                        </div>

                        <div className="flex items-center gap-8 text-base" style={{ color: '#000005' }}>
                          <div className="flex items-center gap-2" title="Photos">
                            <Camera className="w-5 h-5" />
                            {proofGallery.photoCount}
                          </div>
                          <div className="flex items-center gap-2" title="Selections">
                            <CheckCircle className="w-5 h-5" />
                            {proofGallery.selectionCount}
                          </div>
                          <div className="flex items-center gap-2" title="Views">
                            <Eye className="w-5 h-5" />
                            {proofGallery.viewCount}
                          </div>
                          <div className="flex items-center gap-2" title="Expires">
                            <Calendar className="w-5 h-5" />
                            {formatDate(proofGallery.expiresAt)}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 ml-6">
                          <button
                            onClick={() => copyMagicLink(proofGallery.magicLinkToken, proofGallery.id, true)}
                            className="p-2 transition-colors"
                            style={{ color: '#5577a5' }}
                            title="Copy proof link"
                          >
                            {copiedId === proofGallery.id ? (
                              <Check className="w-6 h-6 text-green-600" />
                            ) : (
                              <Copy className="w-6 h-6" />
                            )}
                          </button>
                          <Link
                            href={`/proofs/${proofGallery.magicLinkToken}`}
                            target="_blank"
                            className="p-2 transition-colors"
                            style={{ color: '#5577a5' }}
                            title="Open proof gallery"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </Link>
                        </div>
                      </div>
                      {proofGallery.selectionsSubmittedAt && (
                        <p className="mt-2 text-sm text-purple-600 font-medium">
                          Selections submitted: {formatDate(proofGallery.selectionsSubmittedAt)}
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
