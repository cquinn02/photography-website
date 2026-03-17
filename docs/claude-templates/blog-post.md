# Blog Post Template

## Writing Style

**Voice:** First-person as Cindy Quinn. Write as her — specific experience, specific clients, specific Phoenix locations. Not as a generic photography authority.

**Tone:** Knowledgeable without being academic. Conversational without being casual. The reader is someone preparing for a headshot session or researching photographers.

- Write like you're talking to a friend who's nervous about their headshot session
- Use contractions naturally (I'm, you'll, don't)
- Share personal experience and tips from 14+ years of shooting headshots
- Include Phoenix/Scottsdale/Valley location references naturally

**Paragraph length:** Vary it. Short punchy paragraphs (1-2 sentences) after long ones. No wall of text.

**The test:** Read it aloud. If it sounds like a brochure or a content farm, rewrite it.

## AI Tells to Eliminate Before Publishing

Remove or rewrite any instance of:
- "In today's world" / "In today's digital age"
- "It's important to note that" / "It's important to remember that"
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
- "Here's the thing" / "Here's what nobody tells you"
- "The question isn't X, it's Y" formulas
- "Nestled", "stunning", "breathtaking", "a must-see", "boasts"
- Em dashes used as connective tissue (`—` joining two ideas mid-sentence)
- Too-balanced "on one hand / on the other" structures
- Generic section headers like "Final Thoughts" or "The Bottom Line" or "Lessons Learned"
- Overly smooth transitions between every section
- "This is part of the creative process"
- Bullet lists of 5+ generic points with no personal insight
- Any sentence that could appear in a Wikipedia article without modification

## SEO Requirements — Do This BEFORE Writing

### Keyword Research First
Before writing any post, research the primary and secondary keywords:
1. Check GSC data for keyword gaps and opportunities
2. Identify: primary keyword (highest volume + intent match), 3-5 secondary keywords, 5-10 long-tail variants
3. Map keywords to headings before drafting — don't stuff them in after

### Slug Rules
- Use the primary keyword only: `headshot-makeup-tips`, not `what-kind-of-makeup-should-i-wear-to-my-professional-headshot-session`
- Lowercase, hyphens, no stop words (no "the", "a", "and", "for")
- Max 5-6 words

### Heading Keyword Strategy — Critical for SEO

**H1 (post title):** Exact primary keyword or close variant. 50-60 characters.
- Good: "What to Wear to Your Headshot Session"
- Bad: "My Thoughts on Clothing Choices for Professional Photos"

**H2s (major sections):** Each H2 should target a distinct secondary keyword or intent variant.
- Include 3-5 H2s per post
- At least 2 H2s should contain the primary keyword or close variant
- Use natural phrasing, not keyword-stuffed

**H3s (subsections):** Target long-tail and specific variants.
- Examples: "Best Colors for Business Headshots", "Should Men Wear Ties?", "How to Prepare Your Skin the Night Before"

### Keyword Placement Rules
- **First 100 words:** Primary keyword must appear naturally in the opening paragraph
- **H1:** Primary keyword (always)
- **H2s:** At least 2 contain the primary keyword or close variant
- **Meta description:** Primary keyword in the first half of the sentence
- **Alt text on all images:** Include subject + relevant keyword
- **Natural density:** Primary keyword 3-5x in body text, secondary keywords 1-2x each — never forced

### Title and Meta Description
- **Title**: Under 60 characters, include primary keyword
- **Meta description**: 145-160 characters. Include primary keyword naturally in the first half. State a specific benefit. No "In this article" or "Learn how to" openers. Should work as a standalone sentence someone would want to click.

### Target Word Count
- **Service/guide posts:** 1,800–2,500 words (enough depth to rank, not padded)
- **Tips/personal posts:** 800–1,400 words
- Under 1,500 words on a competitive keyword = thin content risk

## Required Post Fields

Each blog post is a standalone TSX page in `src/pages/blog/`. Required elements:

```tsx
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import BlogPostSchema from '@/components/blog/BlogPostSchema'
import RelatedPosts from '@/components/blog/RelatedPosts'
import BlogNavigation from '@/components/blog/BlogNavigation'

export default function PostName() {
  return (
    <Layout
      title="Post Title (under 60 chars)"
      description="Meta description (145-160 chars)"
      canonical="https://www.cmqheadshots.com/blog/post-slug"
      ogUrl="https://www.cmqheadshots.com/blog/post-slug"
      ogImage="https://images.cmqheadshots.com/images/blog/optimized/image.webp"
    >
      <BlogPostSchema
        headline="Post Title"
        description="Meta description"
        url="https://www.cmqheadshots.com/blog/post-slug"
        image="https://images.cmqheadshots.com/images/blog/optimized/image.webp"
        datePublished="YYYY-MM-DD"
      />
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
- Use H2s to break up sections (each targeting a secondary keyword)
- Include at least one internal link to a service page
- Include at least one image within the content body
- Natural mentions of Phoenix, Scottsdale, and the Valley
- 1-3 inline images per post — more than 3 feels like a gallery page

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

## FAQ Schema

For posts targeting People Also Ask results, add FAQ schema using the FAQSchema component.

**Rules:**
- 4 questions per post
- Questions must match actual search queries (interrogative: What, When, Where, Do, How)
- Answers: 2-4 sentences, specific and complete enough to stand alone
- No links inside FAQ answers (schema only)

## What NOT to Write

- Generic "photography is about capturing moments" openers
- Lists of tips without specific reasons or personal experience behind each one
- Anything that could apply to any photographer anywhere (must be specific to Cindy's experience)
- Fake specificity ("I remember thinking..." when it's clearly not a real memory)
- Lists of 10+ items without meaningful differentiation between them
- Season descriptions that just say "beautiful" or "gorgeous"
