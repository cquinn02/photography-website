import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      title: "Best Professional Headshot Photographers Near Me",
      excerpt: "Professional headshots are crucial for creating a strong first impression. Learn how to choose the right photographer and prepare for your session.",
      slug: "best-professional-headshot-photographers-near-me",
      category: "Miscellaneous",
      author: "Cindy Quinn",
      image: "/images/website media/Best-Professional-Phoenix-headshots-Colored.webp"
    },
    {
      title: "Why hire a professional headshot photographer",
      excerpt: "Discover the key benefits of investing in a professional headshot photographer. Learn about education, experience, equipment, and artistic expertise.",
      slug: "why-hire-a-professional-headshot-photographer",
      category: "Photography Tips",
      author: "Cindy Quinn",
      image: "/images/blog/why-hire-professional-main.jpg"
    },
    {
      title: "Why I shoot headshots horizontally",
      excerpt: "The common uses for headshots dictate that they will be seen in a small format. Learn why horizontal framing maximizes the impact of your professional headshot.",
      slug: "why-i-shoot-headshots-horizontally",
      category: "Miscellaneous",
      author: "Cindy Quinn",
      image: "/images/blog/horizontal-headshots-main.jpg"
    },
    {
      title: "What kind of clothing should I wear to my headshot session – Women?",
      excerpt: "Professional business attire that is classic and timeless will ensure your photos remain relevant for years. Here's your complete guide to dressing for success.",
      slug: "what-kind-of-clothing-should-i-wear-to-my-headshot-session-women",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "/images/blog/womens-clothing-main.webp"
    },
    {
      title: "Dress to Impress Men's Headshot Fashion Tips for Business Success",
      excerpt: "Your headshot fashion choices can make or break your professional image. Learn the essential do's and don'ts for men's headshot attire.",
      slug: "dress-to-impress-mens-headshot-fashion-tips-for-business-success",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "/images/website media/what-to-wear-1.webp"
    },
    {
      title: "What Kind of Makeup Should I Wear to My Headshot Session?",
      excerpt: "A comprehensive guide to makeup for professional headshot sessions. Learn how to enhance your features and look camera-ready for your best photos.",
      slug: "what-kind-of-makeup-should-i-wear-to-my-headshot-session",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "/images/blog/makeup-headshot-main.jpg"
    },
    {
      title: "Should The Photographer Photoshop You?",
      excerpt: "Learn about professional editing and retouching for headshots. Understand what's appropriate and how to maintain your authentic appearance while looking your best.",
      slug: "should-the-photographer-photoshop-you",
      category: "Photography Tips",
      author: "Cindy Quinn",
      image: "/images/blog/photoshop-main.jpg"
    },
    {
      title: "How To Prep for Your Best Professional Headshot",
      excerpt: "Booking your professional headshot session is an investment in yourself, your career, and your future. Learn essential preparation tips for the best results.",
      slug: "how-to-prep-for-your-best-professional-headshot",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "/images/blog/clothing-for-headshots-prep.jpg"
    }
  ]

  return (
    <Layout title="Blog - Professional Headshot Tips & Insights" description="Expert advice on professional headshots, styling tips, and photography insights from CMQ Headshots">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-raleway text-5xl md:text-6xl font-light text-gray-800 mb-8">
                Blog
              </h1>
              <p className="text-xl font-light text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Expert tips, styling advice, and insights to help you get the most from your professional headshot session
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts List */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="space-y-16">
            {blogPosts.map((post, index) => {
              const isEven = index % 2 === 0;
              return (
                <article key={index} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-col-dense'}`}>
                      {/* Image Column */}
                      <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="bg-gray-100 rounded-sm overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className={`space-y-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="flex items-center text-sm font-light text-gray-500 space-x-3">
                          <span>{post.category}</span>
                          <span>•</span>
                          <span>By {post.author}</span>
                        </div>

                        <h2 className="font-raleway text-3xl font-light text-gray-800 leading-tight group-hover:text-gray-600 transition-colors">
                          {post.title}
                        </h2>

                        <p className="text-gray-600 font-light leading-relaxed text-lg">
                          {post.excerpt}
                        </p>

                        <div className="pt-2">
                          <span className="inline-flex items-center text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors">
                            Read More
                            <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-raleway text-4xl font-light text-gray-800 mb-6">Ready for Your Professional Headshot?</h2>
            <p className="text-xl font-light text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's create headshots that make a lasting impression and elevate your professional brand
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-lg font-light transition-colors"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}