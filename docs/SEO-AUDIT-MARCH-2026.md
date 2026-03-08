# SEO Re-Audit Report: www.cmqheadshots.com

**Date:** March 7, 2026 (Updated)
**Business Type:** Local Service — Headshot Photography (Phoenix/Scottsdale, AZ)
**Framework:** Next.js 15.4.6 SSR on AWS Amplify (CloudFront CDN)

---

## SEO Health Score: 71/100 (was 62)

| Category | Weight | Previous | Current | Weighted |
|----------|--------|----------|---------|----------|
| Technical SEO | 25% | 78 | 82 | 20.5 |
| Content Quality | 25% | 72 | 72 | 18.0 |
| On-Page SEO | 20% | 65 | 75 | 15.0 |
| Schema / Structured Data | 10% | 38 | 62 | 6.2 |
| Performance (CWV) | 10% | 75 | 72 | 7.2 |
| Images | 5% | 70 | 70 | 3.5 |
| AI Search Readiness | 5% | 45 | 52 | 2.6 |
| **TOTAL** | | **62** | | **73** |

---

## What's Been Fixed (This Session + Previous)

- [x] Homepage H1 invisible at 12px — increased to 20px
- [x] About page typo "PROTOGRAPHER" — fixed to "PHOTOGRAPHER"
- [x] Blog title "%20" encoding bug — fixed on What to Wear post
- [x] SSR pre-rendering broken (empty __next div) — fixed LightboxProvider ssr:false
- [x] Team Composite thin content (~650 words) — expanded to ~1,470 words
- [x] Team Composite missing all schema — added Service, BreadcrumbList, FAQPage
- [x] Team Composite missing FAQ section — added 8-question AccordionFAQSection
- [x] Team Composite H1 missing location keyword — added "Phoenix"
- [x] Corporate Staff missing all schema — added Service, BreadcrumbList, FAQPage + 8-question FAQ
- [x] Layout: Upgraded LocalBusiness to ProfessionalService, added logo + founder
- [x] Layout: Fixed image URL to use CDN with proper %20 encoding
- [x] Missing /contact-us redirect — added 301 to /contactus
- [x] No BlogPosting schema on any blog post — added to all 9 posts with author + breadcrumbs
- [x] Fixed &apos; HTML entities in blog meta descriptions
- [x] Fixed ogImage URLs on blog posts to use CDN
- [x] Non-www redirect changed from 302 to 301 in AWS Amplify Console
- [x] Homepage hero preloads moved from global _document.tsx to homepage only
- [x] GTM script moved to non-blocking afterInteractive loading
- [x] All 6 service page titles shortened to under 60 characters
- [x] Corporate Staff repetitive "near me" H2s replaced with descriptive headings
- [x] Viewport meta added with initial-scale=1
- [x] OG descriptions shortened on LinkedIn, Business, and Realtor pages

---

## CRITICAL Issues

### 1. Thank-you pages missing noindex
**Files:** `src/pages/athankyou.tsx`, `src/pages/bthank-you.tsx`
**Status:** NOT FIXED
These thin pages are blocked in robots.txt but don't have `<meta name="robots" content="noindex, nofollow" />`. Robots.txt is advisory only — Google can still index these if discovered through links.

### 2. Conflicting robots meta tags on 16 pages
**Files:** All location pages (`src/pages/headshots-*.tsx`), `eras-medical-headshots.tsx`, `convention-headshots-phoenix.tsx`, `headshot-booth-phoenix.tsx`
**Status:** NOT FIXED
Each page has TWO robots meta tags — one `index,follow` (from Layout/next-seo) and one `noindex,nofollow` (from Head). Google follows the most restrictive, but this conflict should be resolved to a single tag.

### 3. CloudFront compression may be inconsistent
**Location:** AWS CloudFront distribution settings
**Status:** VERIFIED OK — CachingOptimized policy with Gzip + Brotli compression is enabled.

---

## HIGH Priority Issues

### 4. LinkedIn headshots page missing Service + BreadcrumbList schema
**File:** `src/pages/linkedin-headshots.tsx`
**Status:** NOT FIXED
Every other service page has Service and BreadcrumbList schema. This page only has FAQPage.

### 5. No WebSite schema with SearchAction
**File:** `src/components/Layout.tsx` or `src/pages/index.tsx`
**Status:** NOT FIXED
Missing WebSite schema enables the sitelinks search box in Google results and establishes site entity.

### 6. No Person schema for Cindy Quinn on About page
**File:** `src/pages/about.tsx`
**Status:** NOT FIXED
About page needs Person schema with jobTitle, worksFor, knowsAbout, image. Strengthens E-E-A-T.

### 7. About page thin content (~600 words vs 800+ minimum)
**File:** `src/pages/about.tsx` / `content/about.md`
**Status:** NOT FIXED
Needs expansion with credentials, client count, methodology, professional memberships.

### 8. No author attribution on any blog post
**Files:** All 9 files in `src/pages/blog/`
**Status:** NOT FIXED
No visible "By Cindy Quinn" or author bio on any post. Author exists in schema only.

### 9. All 9 blog posts under 1,500 words
**Status:** NOT FIXED
| Blog Post | Words | Assessment |
|-----------|-------|------------|
| Why Hire Professional | ~520 | Critically thin |
| What to Wear | ~850 | Below minimum |
| Makeup Tips | ~780 | Below minimum |
| Prep for Headshot | ~1,100 | Below minimum |
| Horizontal Headshots | **~200** | Severely thin |
| Photoshop Retouching | ~950 | Below minimum |
| Women's Clothing | ~450 | Critically thin |
| Men's Fashion | ~1,050 | Below minimum |
| Best Photographer Near Me | ~380 | Critically thin |

### 10. Homepage "Shawn%20Wilson" encoding bug
**File:** `src/pages/index.tsx` (lines ~373-374)
**Status:** NOT FIXED
Reviewer name and image alt text contain URL-encoded %20 instead of space.

### 11. robots.txt Disallow rules under wrong User-agent block
**File:** `public/robots.txt`
**Status:** NOT FIXED
Disallow rules for `/athankyou`, `/bthank-you`, etc. are placed after the `Yahoo Pipes 2.0` block instead of under `User-agent: *`. They may not apply to all crawlers.

### 12. Contact page iframe CLS risk
**File:** `src/pages/contactus.tsx`
**Status:** NOT FIXED
The 17hats iframe renders at 600px fixed height, then resizes via lazy-loaded iframeSizer script, causing layout shift.

---

## MEDIUM Priority Issues

### 13. OG image URLs contain unencoded spaces
**Files:** `src/components/Layout.tsx` (line ~107), `src/pages/about.tsx` (line ~261)
**Status:** NOT FIXED
Social platforms may fail to parse URLs with literal spaces. Use %20 encoding.

### 14. BreadcrumbList missing from About and Contact pages
**Files:** `src/pages/about.tsx`, `src/pages/contactus.tsx`
**Status:** NOT FIXED

### 15. Duplicate testimonials across pages
**Status:** NOT FIXED
- Spencer Hopkin: word-for-word on corporate-staff AND team-composite
- Shawn Wilson: reused on multiple pages
- Realtor page has anonymous "REALTOR CLIENT" testimonial

### 16. Font weight issues
**File:** `src/pages/_app.tsx`
**Status:** NOT FIXED
- Raleway loads 7 weights (100-700), only 300/400/500/700 used. Remove 100, 200, 600.
- Raleway weight 900 IS used in hero text but NOT loaded — browser fakes it.
- Playfair Display loads 4 weights (400-700), only 600 used.
**Fix:** Load Raleway 300, 400, 500, 700, 900. Load Playfair 600 only.

### 17. Remaining JPG images not converted to WebP
**File:** `src/pages/index.tsx`
**Status:** NOT FIXED
- professional-headshots-phoenix.jpg
- ibook on line Stock-2213802656.jpg
- shoot-iStock-2217506333.jpg

### 18. Three "what to wear" blog posts cannibalizing each other
**Status:** NOT FIXED
Consider consolidating into one comprehensive guide and redirecting the others.

### 19. Blog heading hierarchy issues
**Status:** NOT FIXED
- "Why Hire Professional" uses H3 instead of H2 for subheadings
- "Best Photographer Near Me" skips H2 level entirely
- Actor page has 8+ H2s that should be H3s under a parent H2

### 20. About page loads ~55 slideshow images upfront
**File:** `src/pages/about.tsx`
**Status:** NOT FIXED
All 55 images rendered in DOM at once. Only the visible slide has opacity:1. Should lazy-load or paginate.

### 21. Homepage HTML is 201 KB (oversized)
**Status:** NOT FIXED
28 images each with 11-18 srcSet URL variants create massive HTML. Typical target is 30-60 KB. Consider reducing `deviceSizes` or lazy-rendering below-fold galleries.

### 22. Sitemap stale dates and deprecated tags
**File:** `public/sitemap.xml`
**Status:** NOT FIXED
- Blog posts all have same lastmod (2025-10-06)
- Homepage lastmod is 3 months stale
- `<changefreq>` and `<priority>` tags are ignored by Google — can be removed

### 23. Style guide page is indexable
**File:** `src/pages/style-guide.tsx`
**Status:** NOT FIXED
Internal dev tool at /style-guide has no noindex tag. Should add noindex.

### 24. Keyword cannibalization risks
**Status:** INFO
- "Phoenix business headshots" — homepage sections vs /phoenix-business-headshots
- "LinkedIn headshots Phoenix" — /linkedin-headshots vs /phoenix-business-headshots
- "Corporate headshots Phoenix" — homepage sections vs /corporate-staff-headshots

---

## LOW Priority Issues

### 25. AggregateRating reviewCount hardcoded at 126
**File:** `src/components/Layout.tsx`

### 26. No privacy policy / terms of service links in footer
Pages exist (/privacy-policy, /terms-and-conditions) but may not be linked from footer.

### 27. Blog posts missing datePublished in schema
**File:** `src/components/blog/BlogPostSchema.tsx`
Client prefers no visible dates, but schema datePublished is required for Article rich results. Consider adding dates to schema only (not visible on page).

### 28. AggregateRating values are strings instead of numbers
**File:** `src/components/Layout.tsx`
`"5.0"` and `"126"` should be `5.0` and `126` (numbers).

### 29. No AI crawler directives in robots.txt
No rules for GPTBot, ClaudeBot, PerplexityBot, etc. Decide policy and implement.

### 30. Service schema provider type inconsistency
Service schemas use `@type: "LocalBusiness"` for provider instead of referencing the existing ProfessionalService via `@id`.

### 31. X-XSS-Protection header is deprecated
**File:** `next.config.js`
Modern browsers no longer support this. CSP provides superior protection.

### 32. Spelling error in FAQ
**File:** `src/pages/phoenix-business-headshots.tsx`
"Do you have hair advise?" should be "advice".

---

## Performance Summary

| Metric | Value | Status |
|--------|-------|--------|
| TTFB (homepage) | ~416ms (cached) | Needs Improvement |
| TTFB (blog post) | ~194ms | Acceptable |
| LCP (estimated) | 2.5-4.0s | Needs Improvement |
| INP (estimated) | <200ms | Good |
| CLS (estimated) | <0.1 | Good |
| Security Headers | Enterprise-grade | Excellent |
| HTTP/2 + HTTP/3 | Supported | Excellent |

---

## Content Scorecard by Page

| Page | Score | Words | Min Met? | Schema | Top Issue |
|------|-------|-------|----------|--------|-----------|
| Homepage | 76 | ~1,200 | Yes | Good (3) | Shawn%20Wilson bug |
| About | 65 | ~600 | **No** | Weak (1) | Thin content, no Person schema |
| Contact | 70 | ~250 | Yes (contact) | OK (1) | Iframe CLS |
| Business Headshots | 78 | ~800 | Yes | Strong (3) | FAQ title misleading |
| **Actor Headshots** | **85** | ~2,500 | Yes | Strong (3) | Best page |
| Corporate Staff | 80 | ~1,800 | Yes | Strong (3) | Duplicate testimonial |
| Realtor Headshots | 82 | ~2,200 | Yes | Strong (3) | Anonymous testimonial |
| LinkedIn Headshots | 75 | ~2,000 | Yes | **Partial (1)** | Missing Service + Breadcrumb |
| Team Composite | 78 | ~1,400 | Yes | Strong (3) | Duplicate testimonial |

---

## Schema Status (Current)

| Schema Type | Status | Pages |
|-------------|--------|-------|
| ProfessionalService | PASS | All pages (via Layout) |
| Service | 5 of 6 service pages | Missing on LinkedIn |
| BreadcrumbList | 5 of 6 service pages + blogs | Missing on LinkedIn, About, Contact |
| FAQPage | 7 pages | Works for AI visibility, no Google rich results |
| BlogPosting | All 9 blog posts | Missing datePublished (required for rich results) |
| VideoObject | Homepage | PASS |
| WebSite + SearchAction | **MISSING** | Should be on homepage |
| Person (Cindy Quinn) | **MISSING** | Should be on About page |

---

## Top 15 Action Plan (Priority Order)

| # | Action | Impact | Effort | Status |
|---|--------|--------|--------|--------|
| 1 | Add noindex to thank-you pages | Critical | 5 min | TODO |
| 2 | Fix conflicting robots meta on location pages | Critical | 15 min | TODO |
| 3 | Verify CloudFront compression is enabled | Critical | 5 min | TODO (AWS) |
| 4 | Add Service + BreadcrumbList schema to LinkedIn page | High | 30 min | TODO |
| 5 | Add WebSite schema with SearchAction | High | 15 min | TODO |
| 6 | Add Person schema for Cindy Quinn on About page | High | 15 min | TODO |
| 7 | Fix "Shawn%20Wilson" encoding bug on homepage | High | 5 min | TODO |
| 8 | Fix robots.txt structure (Disallow under correct block) | High | 10 min | TODO |
| 9 | Add visible author byline to blog posts | High | 30 min | TODO |
| 10 | Fix font weights (Raleway: add 900, remove 100/200/600; Playfair: keep 600 only) | Medium | 15 min | TODO |
| 11 | Fix OG image URLs with unencoded spaces | Medium | 10 min | TODO |
| 12 | Add BreadcrumbList to About + Contact pages | Medium | 15 min | TODO |
| 13 | Add noindex to style-guide page | Medium | 5 min | TODO |
| 14 | Fix spelling "advise" → "advice" in FAQ | Low | 2 min | TODO |
| 15 | Expand About page to 800+ words | High | Content needed | TODO |

---

*Last updated: March 7, 2026 (Re-audit)*
