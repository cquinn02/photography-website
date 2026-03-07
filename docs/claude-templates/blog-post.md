# Blog Post Template

## Writing Style

- First person as the photographer (Cindy Quinn)
- Warm, approachable, professional tone
- Write like you're talking to a friend who's nervous about their headshot session
- Use contractions naturally (I'm, you'll, don't)
- Share personal experience and tips from 12+ years of shooting headshots
- Include Phoenix/Scottsdale/Valley location references naturally

## AI Tells to Eliminate Before Publishing

Remove or rewrite any instance of:
- "In today's world" / "In today's digital age"
- "It's important to note that"
- "Whether you're a... or a..."
- "Let's dive in" / "Let's explore"
- "At the end of the day"
- "Game-changer" / "Take it to the next level"
- "Navigate" (when not about physical navigation)
- "Leverage" (use "use" instead)
- "Robust" / "Comprehensive" / "Holistic"
- "Unlock" / "Empower" / "Elevate"
- "Landscape" (when not about scenery)
- "Delve into"
- "First and foremost"
- "It goes without saying"
- "Rest assured"
- Bullet lists of 5+ generic points with no personal insight
- Overly formal transitions between paragraphs

## Required Post Fields

Each blog post is a standalone TSX page in `src/pages/blog/`. Required elements:

```tsx
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogNavigation from '@/components/blog/BlogNavigation'

export default function PostName() {
  return (
    <Layout
      title="Post Title (under 60 chars)"
      description="Meta description (under 160 chars)"
      canonical="https://www.cmqheadshots.com/blog/post-slug"
      ogUrl="https://www.cmqheadshots.com/blog/post-slug"
      ogImage="https://images.cmqheadshots.com/images/blog/optimized/image.webp"
    >
      {/* Breadcrumb */}
      {/* Article with header, featured image, content */}
      {/* RelatedPosts component */}
      {/* BlogNavigation component */}
    </Layout>
  )
}
```

## Content Structure

### Breadcrumb
```tsx
<div className="bg-gray-50 border-b">
  <div className="container mx-auto px-4 py-4">
    <nav className="text-sm">
      <Link href="/">Home</Link>
      <span className="mx-2 text-gray-500">></span>
      <Link href="/blog">Blog</Link>
      <span className="mx-2 text-gray-500">></span>
      <span>Post Title</span>
    </nav>
  </div>
</div>
```

### Article Header
- Category badge (e.g., "Headshot Tips", "What to Wear")
- H1 in the standard blog H1 pattern (blue, centered, uppercase, bold/normal split)
- Featured image using CDN URL

### Body Content
- Wrap in `<div className="prose prose-lg max-w-none">`
- Body text color: `#383838`
- Use H2s to break up sections
- Include at least one internal link to a service page
- Include at least one image within the content body
- Natural mentions of Phoenix, Scottsdale, and the Valley

### Internal Link Style
```tsx
<Link
  href="/phoenix-business-headshots"
  className="font-medium transition-colors"
  style={{ color: '#5577a5' }}
  onMouseEnter={(e) => e.currentTarget.style.color = '#575757'}
  onMouseLeave={(e) => e.currentTarget.style.color = '#5577a5'}
>
  link text
</Link>
```

## SEO Requirements

- **Title**: Under 60 characters, include primary keyword
- **Meta description**: Under 160 characters, include primary keyword and location
- **H1**: Include primary keyword
- **URL slug**: Hyphenated, lowercase, keyword-rich
- **Canonical URL**: Full URL with `https://www.cmqheadshots.com` prefix
- **Images**: Descriptive alt text with keywords
- **Internal links**: At least 1 link to a service page, 1 link to another blog post
- **Schema**: Consider adding Article or BlogPosting JSON-LD for new posts
