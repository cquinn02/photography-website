# SEO Re-Audit Report: www.cmqheadshots.com

**Date:** March 8, 2026 (Updated)
**Business Type:** Local Service — Headshot Photography (Phoenix/Scottsdale, AZ)
**Framework:** Next.js 15.4.6 SSR on AWS Amplify (CloudFront CDN)

---

## SEO Health Score: 79/100 (was 62 → 73 → 79)

| Category | Weight | Original | Re-Audit | Current | Weighted |
|----------|--------|----------|----------|---------|----------|
| Technical SEO | 25% | 78 | 82 | 88 | 22.0 |
| Content Quality | 25% | 72 | 72 | 72 | 18.0 |
| On-Page SEO | 20% | 65 | 75 | 82 | 16.4 |
| Schema / Structured Data | 10% | 38 | 62 | 85 | 8.5 |
| Performance (CWV) | 10% | 75 | 72 | 76 | 7.6 |
| Images | 5% | 70 | 70 | 70 | 3.5 |
| AI Search Readiness | 5% | 45 | 52 | 55 | 2.75 |
| **TOTAL** | | **62** | **73** | | **79** |

---

## What's Been Fixed (All Sessions)

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
- [x] Thank-you pages (athankyou, bthank-you) — added noindex, nofollow meta tags
- [x] Conflicting robots meta on location pages — switched to Layout `noindex={true}` prop, removed duplicate Head tags
- [x] CloudFront compression — verified CachingOptimized policy with Gzip + Brotli enabled
- [x] LinkedIn headshots — added Service + BreadcrumbList schema
- [x] WebSite schema added to Layout.tsx (site-wide)
- [x] Person schema for Cindy Quinn added to About page
- [x] BreadcrumbList added to About and Contact pages
- [x] Homepage "Shawn%20Wilson" encoding bug — fixed to use regular spaces
- [x] robots.txt restructured — Disallow rules moved under `User-agent: *` block
- [x] Font weights fixed — Raleway: 300,400,500,700,900; Playfair: 600 only
- [x] OG image URLs — fixed unencoded spaces to use %20
- [x] AggregateRating values changed from strings to numbers
- [x] AggregateRating reviewCount updated from 126 to 129
- [x] Sitemap — removed deprecated changefreq/priority tags, updated lastmod dates
- [x] Spelling "advise" → "advice" in Business Headshots FAQ
- [x] Service schema provider type — changed LocalBusiness to ProfessionalService on all 7 service pages
- [x] Contact page iframe CLS — increased initial height from 600px to 800px with minHeight
- [x] About page slideshow lazy-loading — reduced from ~50 images in DOM to only 2 per slideshow (current + next)
- [x] Homepage HTML size — reduced deviceSizes from 9 to 5 breakpoints, imageSizes from 8 to 5 (~30% fewer srcSet entries)
- [x] X-XSS-Protection deprecated header — removed from next.config.js
- [x] Style guide noindex — confirmed already has noindex, nofollow meta tag
- [x] Footer privacy/terms links — confirmed already linked in footer

---

## Remaining Issues (Prioritized)

### HIGH Priority — Needs Content from Cindy

#### 1. About page thin content (~600 words vs 800+ minimum)
**File:** `src/pages/about.tsx` / `content/about.md`
**Status:** NEEDS CONTENT
Needs expansion with credentials, client count, methodology, professional memberships. Cindy needs to provide additional content about her background and experience.

#### 2. All 9 blog posts under 1,500 words
**Status:** NEEDS CONTENT
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

Each post should be expanded to 1,500+ words for competitive rankings. Cindy can provide additional insights, tips, and expertise to flesh these out.

#### 3. No visible author attribution on blog posts
**Files:** All 9 files in `src/pages/blog/`
**Status:** NEEDS DECISION
No visible "By Cindy Quinn" or author bio on any post. Author exists in schema only. Cindy needs to decide on styling/placement for author bylines.

### HIGH Priority — Code Fixes Available

#### 4. Blog heading hierarchy issues
**Status:** TODO — Can fix via code
- "Why Hire Professional" uses H3 instead of H2 for subheadings
- "Best Photographer Near Me" skips H2 level entirely
- Actor page has 8+ H2s that should be H3s under a parent H2

#### 5. Three "what to wear" blog posts cannibalizing each other
**Status:** NEEDS STRATEGY DECISION
Three posts compete for the same keyword family:
- `/blog/what-to-wear-to-your-headshot-session` (general)
- `/blog/what-kind-of-clothing-should-i-wear-to-my-headshot-session-women` (women)
- `/blog/dress-to-impress-mens-headshot-fashion-tips-for-business-success` (men)

**Options:** (A) Consolidate into one comprehensive guide and 301 redirect the others, or (B) Differentiate titles/content more clearly so each targets a distinct keyword.


### MEDIUM Priority

#### 6. Duplicate testimonials across pages
**Status:** NEEDS CONTENT
- Spencer Hopkin: word-for-word on corporate-staff AND team-composite
- Shawn Wilson: reused on multiple pages
- Realtor page has anonymous "REALTOR CLIENT" testimonial
Cindy needs to provide unique testimonials for each page.

#### 7. Remaining JPG images not converted to WebP
**File:** `src/pages/index.tsx`
**Status:** NEEDS WEBP FILES
- professional-headshots-phoenix.jpg
- ibook on line Stock-2213802656.jpg
- shoot-iStock-2217506333.jpg
These need to be converted to WebP format and uploaded to the CDN.

#### 8. Keyword cannibalization risks
**Status:** INFO — Monitor
- "Phoenix business headshots" — homepage sections vs /phoenix-business-headshots
- "LinkedIn headshots Phoenix" — /linkedin-headshots vs /phoenix-business-headshots
- "Corporate headshots Phoenix" — homepage sections vs /corporate-staff-headshots
No action needed now, but monitor Google Search Console for position conflicts.

### LOW Priority

#### 9. Blog posts missing datePublished in schema
**File:** `src/components/blog/BlogPostSchema.tsx`
**Status:** WON'T FIX (by choice)
Cindy prefers no dates on blog posts. Schema datePublished is technically required for Article rich results, but the business decision is to omit dates.

#### 10. No AI crawler directives in robots.txt
**Status:** NEEDS DECISION
No rules for GPTBot, ClaudeBot, PerplexityBot, etc. Cindy should decide whether to allow or block AI crawlers. Allowing them improves AI search visibility; blocking protects content.

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

## Content Scorecard by Page (Updated)

| Page | Score | Words | Min Met? | Schema | Top Issue |
|------|-------|-------|----------|--------|-----------|
| Homepage | 82 | ~1,200 | Yes | Strong (4) | HTML size 201KB |
| About | 70 | ~600 | **No** | Good (3) | Thin content |
| Contact | 72 | ~250 | Yes (contact) | Good (2) | Iframe CLS |
| Business Headshots | 80 | ~800 | Yes | Strong (3) | — |
| **Actor Headshots** | **85** | ~2,500 | Yes | Strong (3) | Best page |
| Corporate Staff | 82 | ~1,800 | Yes | Strong (3) | Duplicate testimonial |
| Realtor Headshots | 82 | ~2,200 | Yes | Strong (3) | Anonymous testimonial |
| LinkedIn Headshots | 80 | ~2,000 | Yes | Strong (3) | — |
| Team Composite | 78 | ~1,400 | Yes | Strong (3) | Duplicate testimonial |

---

## Schema Status (Updated)

| Schema Type | Status | Pages |
|-------------|--------|-------|
| ProfessionalService | PASS | All pages (via Layout) |
| WebSite | PASS | All pages (via Layout) |
| Service | **6 of 6** service pages | **COMPLETE** |
| BreadcrumbList | **All service pages + blogs + About + Contact** | **COMPLETE** |
| FAQPage | 7 pages | Works for AI visibility |
| BlogPosting | All 9 blog posts | Missing datePublished (by choice) |
| VideoObject | Homepage | PASS |
| Person (Cindy Quinn) | PASS | About page |

---

## Action Plan — What's Left (Priority Order)

| # | Action | Impact | Effort | Who |
|---|--------|--------|--------|-----|
| 1 | Expand About page to 800+ words | High | Content needed | Cindy |
| 2 | Expand blog posts to 1,500+ words each | High | Content needed | Cindy |
| 3 | Add visible author byline to blog posts | High | Design decision + code | Cindy + Claude |
| 4 | Consolidate or differentiate "what to wear" blog posts | High | Strategy decision | Cindy |
| 5 | Fix blog heading hierarchy (H3→H2 issues) | Medium | 15 min code | Claude |
| 6 | Replace duplicate testimonials with unique ones | Medium | Content needed | Cindy |
| 7 | Convert 3 remaining JPG images to WebP | Medium | Need files | Cindy |
| 8 | Decide AI crawler policy for robots.txt | Low | Decision needed | Cindy |

**Items Claude can fix right now (no input needed):** #5
**Items needing Cindy's input:** #1, #2, #3, #4, #6, #7, #8

---

*Last updated: March 8, 2026*
