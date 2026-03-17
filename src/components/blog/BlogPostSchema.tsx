import Head from 'next/head'

interface BlogPostSchemaProps {
  headline: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
}

export default function BlogPostSchema({ headline, description, url, image, datePublished, dateModified }: BlogPostSchemaProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": headline,
          "description": description,
          ...(image && { "image": image }),
          "datePublished": datePublished,
          "dateModified": dateModified || datePublished,
          "author": {
            "@type": "Person",
            "name": "Cindy Quinn",
            "url": "https://www.cmqheadshots.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "@id": "https://www.cmqheadshots.com",
            "name": "CMQ Headshots",
            "logo": {
              "@type": "ImageObject",
              "url": "https://images.cmqheadshots.com/images/logos/new%20logos%20sep%202025/CMQHEADSHOTS-horiz.webp"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          },
          "url": url
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
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": headline,
              "item": url
            }
          ]
        }) }}
      />
    </Head>
  )
}
