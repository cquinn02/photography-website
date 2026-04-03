import Link from 'next/link'
import Image from 'next/image'

interface RelatedPost {
  title: string
  excerpt: string
  slug: string
  image: string
  imageObjectFit?: string
}

interface RelatedPostsProps {
  posts: RelatedPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="mt-12 pt-12 border-t">
      <h2 className="font-raleway text-2xl lg:text-3xl font-medium mb-8 text-center uppercase" style={{ color: '#5577a5' }}>
        Related Articles
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Link key={index} href={`/blog/${post.slug}`} className="group">
            <article className="h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={`${post.imageObjectFit || 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-raleway text-lg font-medium mb-3 line-clamp-2 group-hover:opacity-80 transition-opacity" style={{ color: '#5577a5' }}>
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">
                  Read More
                  <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}
