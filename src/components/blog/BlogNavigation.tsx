import Link from 'next/link'

interface BlogNavigationProps {
  previousPost?: {
    title: string
    slug: string
  }
  nextPost?: {
    title: string
    slug: string
  }
}

export default function BlogNavigation({ previousPost, nextPost }: BlogNavigationProps) {
  return (
    <nav className="flex justify-between items-center mt-12 pt-8 border-t gap-4">
      {/* Previous Post */}
      {previousPost ? (
        <Link
          href={`/blog/${previousPost.slug}`}
          className="group flex items-center transition-colors flex-1"
          style={{ color: '#5577a5' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
        >
          <svg className="mr-2 w-5 h-5 flex-shrink-0 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
            <div className="font-medium line-clamp-1">{previousPost.title}</div>
          </div>
        </Link>
      ) : (
        <div className="flex-1"></div>
      )}

      {/* Back to Blog */}
      <Link
        href="/blog"
        className="font-medium transition-colors px-4 py-2 text-center"
        style={{ color: '#5577a5' }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
      >
        All Posts
      </Link>

      {/* Next Post */}
      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="group flex items-center transition-colors flex-1 justify-end"
          style={{ color: '#5577a5' }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
        >
          <div className="text-right">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Next</div>
            <div className="font-medium line-clamp-1">{nextPost.title}</div>
          </div>
          <svg className="ml-2 w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div className="flex-1"></div>
      )}
    </nav>
  )
}
