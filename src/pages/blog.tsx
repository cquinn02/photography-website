import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
  const blogPosts = [
    {
      title: "BEST PROFESSIONAL HEADSHOT PHOTOGRAPHER NEAR ME",
      excerpt: "Professional headshots are crucial for creating a strong first impression. Learn how to choose the right photographer and prepare for your session.",
      slug: "best-professional-headshot-photographers-near-me",
      category: "Miscellaneous",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/website%20media/Best-Professional-Phoenix-headshots-Colored.webp",
      imageObjectFit: "object-contain"
    },
    {
      title: "WHY HIRE A PROFESSIONAL HEADSHOT PHOTOGRAPHER",
      excerpt: "Discover the key benefits of investing in a professional headshot photographer. Learn about education, experience, equipment, and artistic expertise.",
      slug: "why-hire-a-professional-headshot-photographer",
      category: "Photography Tips",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/blog/why-hire-professional-main.jpg"
    },
    {
      title: "WHY I SHOOT HEADSHOTS HORIZONTALLY",
      excerpt: "The common uses for headshots dictate that they will be seen in a small format. Learn why horizontal framing maximizes the impact of your professional headshot.",
      slug: "why-i-shoot-headshots-horizontally",
      category: "Miscellaneous",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/blog/horizontal-headshots-main.jpg"
    },
    {
      title: "WHAT KIND OF CLOTHING SHOULD I WEAR TO MY HEADSHOT SESSION – WOMEN?",
      excerpt: "Professional business attire that is classic and timeless will ensure your photos remain relevant for years. Here's your complete guide to dressing for success.",
      slug: "womens-headshot-clothing-guide",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/blog/womens-clothing-main.webp",
      imageObjectFit: "object-contain"
    },
    {
      title: "DRESS TO IMPRESS: MEN'S HEADSHOT FASHION TIPS FOR BUSINESS SUCCESS",
      excerpt: "Your headshot fashion choices can make or break your professional image. Learn the essential do's and don'ts for men's headshot attire.",
      slug: "dress-to-impress-mens-headshot-fashion-tips-for-business-success",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/blog/CMQHEADSHOTS-What%20to%20wear-men.webp"
    },
    {
      title: "WHAT KIND OF MAKEUP SHOULD I WEAR TO MY HEADSHOT SESSION?",
      excerpt: "A comprehensive guide to makeup for professional headshot sessions. Learn how to enhance your features and look camera-ready for your best photos.",
      slug: "what-kind-of-makeup-should-i-wear-to-my-headshot-session",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/blog/makeup-headshot-main.jpg"
    },
    {
      title: "SHOULD THE PHOTOGRAPHER PHOTOSHOP YOU?",
      excerpt: "Learn about professional editing and retouching for headshots. Understand what's appropriate and how to maintain your authentic appearance while looking your best.",
      slug: "should-the-photographer-photoshop-you",
      category: "Photography Tips",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/blog/photoshop-main.jpg"
    },
    {
      title: "HOW TO PREP FOR YOUR BEST PROFESSIONAL HEADSHOT",
      excerpt: "Booking your professional headshot session is an investment in yourself, your career, and your future. Learn essential preparation tips for the best results.",
      slug: "how-to-prep-for-your-best-professional-headshot",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/blog/Prepare590398367-1600.jpg"
    },
    {
      title: "WHAT TO WEAR TO YOUR HEADSHOT SESSION",
      excerpt: "Complete guide on what to wear for your professional headshot session. Learn about colors, styles, fit, and accessories that work best on camera.",
      slug: "what-to-wear-to-your-headshot-session",
      category: "Headshot Tips",
      author: "Cindy Quinn",
      image: "https://images.cmqheadshots.com/images/blog/clothing-for-headshots-prep.jpg"
    }
  ]

  return (
    <Layout
      title="Phoenix Headshot Tips & Insights | CMQ Headshots"
      description="Expert advice on professional headshots, styling tips, and photography insights from CMQ Headshots"
      canonical="https://www.cmqheadshots.com/blog"
      ogUrl="https://www.cmqheadshots.com/blog"
      ogImage="https://images.cmqheadshots.com/images/website%20media/Best-Professional-Phoenix-headshots-Colored.webp"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "CMQ Headshots Blog",
            "description": "Expert headshot tips, styling guides, and photography insights from Phoenix headshot photographer Cindy Quinn.",
            "url": "https://www.cmqheadshots.com/blog",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.cmqheadshots.com"
            }
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.cmqheadshots.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.cmqheadshots.com/blog"
              }
            ]
          }) }}
        />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-raleway text-5xl md:text-6xl font-medium mb-8 uppercase" style={{ color: '#5577a5' }}>
                BLOGS
              </h1>
              <p className="text-xl font-light text-black leading-relaxed max-w-2xl mx-auto mb-6">
                Expert tips, styling advice, and insights to help you get the most from your professional headshot session
              </p>
              <div className="text-lg font-light text-black leading-relaxed max-w-3xl mx-auto space-y-4">
                <p>
                  Whether you&apos;re preparing for your first professional headshot or updating photos for a new role, these guides cover everything you need to know. From choosing what to wear for men and women to understanding why retouching matters, each article is written from 14 years of experience photographing executives, realtors, actors, and entrepreneurs across Phoenix and Scottsdale.
                </p>
                <p>
                  Browse topics on headshot preparation, clothing and makeup tips, how to find the right photographer near you, and the technical decisions that make a great headshot stand out on LinkedIn, company websites, and professional directories.
                </p>
              </div>
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
                        <div className="bg-white rounded-sm overflow-hidden relative aspect-[4/3]">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className={`${post.imageObjectFit || 'object-cover'} transition-transform duration-500 group-hover:scale-105`}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading={index < 2 ? 'eager' : 'lazy'}
                            placeholder="empty"
                          />
                        </div>
                      </div>

                      {/* Content Column */}
                      <div className={`space-y-4 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="flex items-center text-sm font-light text-black space-x-3">
                          <span>{post.category}</span>
                        </div>

                        <h2 className="font-raleway text-3xl font-light leading-tight group-hover:opacity-80 transition-opacity text-center" style={{ color: '#5577a5' }}>
                          {post.title}
                        </h2>

                        <p className="text-black font-light leading-relaxed text-lg">
                          {post.excerpt}
                        </p>

                        <div className="pt-2">
                          <span className="inline-flex items-center text-black font-medium text-sm group-hover:text-gray-900 transition-colors">
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
            <h2 className="font-raleway text-4xl font-light mb-6" style={{ color: '#5577a5' }}>Ready for Your Professional Headshot?</h2>
            <p className="text-xl font-light text-black mb-10 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s create headshots that make a lasting impression and elevate your professional brand
            </p>
            <Link
              href="/contact-us"
              className="font-raleway inline-block text-white px-8 py-4 text-lg font-normal transition-colors rounded-lg uppercase"
              style={{ backgroundColor: '#5577a5' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#575757'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5577a5'}
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}