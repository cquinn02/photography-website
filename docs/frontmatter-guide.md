# Frontmatter Guide - How It All Connects

This guide explains how frontmatter in your `.md` files connects to your actual web pages.

---

## The Complete Flow

```
Step 1: Content File       →  Step 2: Read Data        →  Step 3: Use in Page     →  Step 4: Display on Site
(content/contact.md)          (getStaticProps)            (Contact component)         (User sees it)
```

---

## Step-by-Step Example: Contact Page

### Step 1: Frontmatter in Content File

**File:** `/content/contact.md`

```yaml
---
title: "Contact CMQ Headshots | Phoenix Headshot Photography"
description: "Ready to book your professional headshot session?..."
pageTitle: "Contact & Book Your Session"
showContactForm: true
---

# Contact CMQ Headshots

Your markdown content here...
```

### Step 2: Reading the Data (getStaticProps)

**File:** `/src/pages/contact.tsx` (bottom of file)

```typescript
export async function getStaticProps() {
  // 1. Find the file
  const filePath = path.join(process.cwd(), 'content', 'contact.md')

  // 2. Read the file
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // 3. Parse frontmatter (data) and content separately
  const { data, content } = matter(fileContents)

  // 4. Send to page component
  return { props: { frontmatter: data, content } }
}
```

**What happens:**
- `data` = frontmatter object (title, description, etc.)
- `content` = markdown content below the frontmatter

### Step 3: Using Data in Page Component

**File:** `/src/pages/contact.tsx` (top of file)

```typescript
// Define what frontmatter fields we expect
interface PageProps {
  frontmatter: {
    title: string
    description: string
    pageTitle: string
    showContactForm?: boolean
  }
  content: string
}

// Receive the data from getStaticProps
export default function Contact({ frontmatter, content }: PageProps) {
  return (
    <Layout
      title={frontmatter.title}           // ← Uses title from frontmatter
      description={frontmatter.description} // ← Uses description from frontmatter
      canonical="https://www.cmqheadshots.com/contact"
      ogUrl="https://www.cmqheadshots.com/contact"
      showHeaderButton={false}
    >
      {/* Page content here */}
    </Layout>
  )
}
```

### Step 4: Where Frontmatter Appears on Your Site

| Frontmatter Field | Where It Appears | Example |
|-------------------|------------------|---------|
| `title` | Browser tab, search results (SEO) | "Contact CMQ Headshots \| Phoenix..." |
| `description` | Search results snippet (SEO) | "Ready to book your professional..." |
| `pageTitle` | Can be used as page heading (optional) | "Contact & Book Your Session" |
| `showContactForm` | Controls if contact form displays | true/false |

---

## Adding Frontmatter to New Pages

### Example: Creating a new "Services" page

**Step 1:** Create content file `/content/services.md`

```yaml
---
title: "Photography Services | CMQ Headshots"
description: "Professional headshot services in Phoenix including business, actor, and corporate photography."
pageTitle: "Our Photography Services"
---

# Our Services

Your content here...
```

**Step 2:** Create page component `/src/pages/services.tsx`

```typescript
import Layout from '@/components/Layout'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

interface PageProps {
  frontmatter: {
    title: string
    description: string
    pageTitle: string
  }
  content: string
}

export default function Services({ frontmatter }: PageProps) {
  return (
    <Layout
      title={frontmatter.title}
      description={frontmatter.description}
    >
      <h1>{frontmatter.pageTitle}</h1>
      {/* Your page content */}
    </Layout>
  )
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content', 'services.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)
  return { props: { frontmatter: data, content } }
}
```

**Step 3:** Page is now live at `https://www.cmqheadshots.com/services`

---

## Custom Frontmatter Fields

You can add ANY fields you want! Just add them to the frontmatter and interface:

```yaml
---
title: "My Page"
description: "Page description"
heroImage: "/images/hero.jpg"
showCTA: true
ctaText: "Book Now"
ctaLink: "/contact"
backgroundColor: "#5577a5"
---
```

Then use them in your component:

```typescript
interface PageProps {
  frontmatter: {
    title: string
    description: string
    heroImage?: string
    showCTA?: boolean
    ctaText?: string
    ctaLink?: string
    backgroundColor?: string
  }
  content: string
}
```

---

## Why Use Frontmatter?

✅ **Separation of Content and Code**
- You edit content in simple `.md` files
- Code stays in `.tsx` files
- Non-technical people can edit content safely

✅ **SEO Benefits**
- Easy to update titles and descriptions
- Consistent SEO across pages
- No need to dig through code

✅ **Flexible**
- Add new fields anytime
- Each page can have different fields
- Easy to maintain

---

## Common Fields Cheat Sheet

```yaml
---
# SEO (appears in search results)
title: "Page Title | CMQ Headshots"
description: "Meta description for search engines"

# Page Display
pageTitle: "Heading shown on the page"
heroImage: "/images/hero.jpg"

# Features (toggle on/off)
showContactForm: true
showTestimonials: false
showCTA: true

# Custom Styling
backgroundColor: "#ffffff"
textColor: "#383838"

# Social Media
ogImage: "/images/social-share.jpg"
---
```

---

## Troubleshooting

**Problem:** "frontmatter.title is undefined"
- **Solution:** Check spelling in both frontmatter AND interface

**Problem:** Changes to frontmatter don't appear
- **Solution:** Restart dev server (frontmatter is read at build time)

**Problem:** New field not working
- **Solution:** Add it to the TypeScript interface in the page component

---

*Last Updated: October 14, 2025*
