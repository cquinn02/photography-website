import Layout from '@/components/Layout'
import fs from 'fs'
import path from 'path'
import { GetStaticProps } from 'next'

interface BlogPost {
  slug: string
  title: string
  file: string
  status: 'queued' | 'released'
  releaseDate: string | null
}

interface DashboardProps {
  posts: BlogPost[]
  existingBlogs: string[]
}

export const getStaticProps: GetStaticProps<DashboardProps> = async () => {
  // Read the release queue
  const queuePath = path.join(process.cwd(), 'content', 'blog-release-queue.json')
  let posts: BlogPost[] = []
  if (fs.existsSync(queuePath)) {
    posts = JSON.parse(fs.readFileSync(queuePath, 'utf8'))
  }

  // Get all existing blog files
  const blogDir = path.join(process.cwd(), 'src', 'pages', 'blog')
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx') && f !== 'index.tsx' && f !== 'dashboard.tsx')
  const existingBlogs = files.map(f => f.replace('.tsx', ''))

  return { props: { posts, existingBlogs } }
}

export default function BlogDashboard({ posts, existingBlogs }: DashboardProps) {
  const queuedPosts = posts.filter(p => p.status === 'queued')
  const releasedPosts = posts.filter(p => p.status === 'released')
  const queueSlugs = posts.map(p => p.slug)
  const livePosts = existingBlogs.filter(slug => !queueSlugs.includes(slug))

  return (
    <Layout
      title="Blog Dashboard | CMQ Headshots"
      description="Internal blog management dashboard"
      noindex={true}
    >
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <h1 className="font-raleway text-3xl lg:text-4xl font-medium mb-2 text-center uppercase" style={{ color: '#5577a5' }}>
            BLOG DASHBOARD
          </h1>
          <p className="font-raleway text-center text-black mb-12">
            Content pipeline and release schedule
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <p className="font-raleway text-4xl font-medium" style={{ color: '#5577a5' }}>{livePosts.length}</p>
              <p className="font-raleway text-sm text-black mt-2">Live Posts</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <p className="font-raleway text-4xl font-medium" style={{ color: '#d97706' }}>{queuedPosts.length}</p>
              <p className="font-raleway text-sm text-black mt-2">Queued (noindex)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center border">
              <p className="font-raleway text-4xl font-medium" style={{ color: '#16a34a' }}>{releasedPosts.length}</p>
              <p className="font-raleway text-sm text-black mt-2">Released from Queue</p>
            </div>
          </div>

          {/* Queued Posts */}
          {queuedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="font-raleway text-2xl font-medium mb-6 uppercase" style={{ color: '#d97706' }}>
                QUEUED FOR RELEASE
              </h2>
              <div className="space-y-4">
                {queuedPosts.map((post, index) => (
                  <div key={post.slug} className="border rounded-lg p-6 bg-amber-50 border-amber-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                            #{index + 1} in queue
                          </span>
                          <span className="text-xs text-black font-raleway">noindex</span>
                        </div>
                        <p className="font-raleway text-lg font-medium text-black">{post.title}</p>
                        <p className="font-raleway text-sm text-gray-600 mt-1">/blog/{post.slug}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Released Posts */}
          {releasedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="font-raleway text-2xl font-medium mb-6 uppercase" style={{ color: '#16a34a' }}>
                RELEASED FROM QUEUE
              </h2>
              <div className="space-y-4">
                {releasedPosts.map((post) => (
                  <div key={post.slug} className="border rounded-lg p-6 bg-green-50 border-green-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Released {post.releaseDate}
                          </span>
                          <span className="text-xs text-black font-raleway">indexed</span>
                        </div>
                        <p className="font-raleway text-lg font-medium text-black">{post.title}</p>
                        <p className="font-raleway text-sm text-gray-600 mt-1">/blog/{post.slug}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live Posts (not from queue) */}
          <div className="mb-12">
            <h2 className="font-raleway text-2xl font-medium mb-6 uppercase" style={{ color: '#5577a5' }}>
              LIVE BLOG POSTS
            </h2>
            <div className="space-y-3">
              {livePosts.map((slug) => (
                <div key={slug} className="border rounded-lg p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <p className="font-raleway text-black">/blog/{slug}</p>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      Live
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Strategy Summary */}
          <div className="border-t pt-8 mt-8">
            <p className="font-raleway text-sm text-gray-600 text-center">
              Release schedule: One post per week (Tuesday 9am) | Total in pipeline: {queuedPosts.length} posts ({queuedPosts.length} weeks of content)
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
