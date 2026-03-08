# SEO Audit Report: www.cmqheadshots.com

**Date:** March 7, 2026
**Business Type:** Local Service — Headshot Photography (Phoenix/Scottsdale, AZ)
**Framework:** Next.js SSR on AWS Amplify (CloudFront CDN)

---

## SEO Health Score: 62/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 78 | 19.5 |
| Content Quality | 25% | 72 | 18.0 |
| On-Page SEO | 20% | 65 | 13.0 |
| Schema / Structured Data | 10% | 38 | 3.8 |
| Performance (CWV) | 10% | 75 | 7.5 |
| Images | 5% | 70 | 3.5 |
| AI Search Readiness | 5% | 45 | 2.25 |
| **TOTAL** | | | **62** |

---

## Status Tracker

Use this to track what's been fixed:

- [x] CRITICAL: Homepage H1 invisible at 12px — increased to 20px
- [x] CRITICAL: About page typo "PROTOGRAPHER" — fixed to "PHOTOGRAPHER"
- [x] CRITICAL: Blog title "%20" encoding bug — fixed on What to Wear post
- [x] CRITICAL: SSR pre-rendering broken (empty __next div) — fixed LightboxProvider ssr:false
- [x] CRITICAL: Team Composite thin content (~650 words) — expanded to ~1,470 words
- [x] CRITICAL: Team Composite missing all schema — added Service, BreadcrumbList, FAQPage
- [x] Team Composite missing FAQ section — added 8-question AccordionFAQSection
- [x] Team Composite H1 missing location keyword — added "Phoenix"
- [x] CRITICAL: Corporate Staff missing all schema — added Service, BreadcrumbList, FAQPage + 8-question FAQ
- [x] Layout: Upgraded LocalBusiness to ProfessionalService, added logo + founder
- [x] Layout: Fixed image URL to use CDN with proper %20 encoding
- [x] HIGH: Missing /contact-us redirect — added 301 to /contactus
- [x] HIGH: No BlogPosting schema on any blog post — added to all 9 posts with author + breadcrumbs
- [x] Fixed &apos; HTML entities in blog meta descriptions
- [x] Fixed ogImage URLs on blog posts to use CDN

---

## CRITICAL Issues (Remaining)

### 1. Corporate Staff page missing all structured data
**File:** `src/pages/corporate-staff-headshots.tsx`
**Status:** FIXED — Added Service, BreadcrumbList, FAQPage schema + 8-question AccordionFAQSection

---

## HIGH Priority Issues

### 2. Non-www redirect uses 302 instead of 301
**Location:** AWS Amplify Console
**Status:** FIXED — Changed 302 to 301 in AWS Amplify Console.

### 3. Missing /contact-us redirect — returns 404
**File:** `next.config.js` redirects section
**Status:** FIXED — Added /contact-us → /contactus 301 redirect.

### 4. No BlogPosting schema on any blog post
**Files:** All 9 files in `src/pages/blog/`
**Status:** FIXED — Created BlogPostSchema component, added to all 9 blog posts with author (Cindy Quinn), publisher, and breadcrumbs.

### 5. No publication dates on any blog post
**Files:** All 9 files in `src/pages/blog/`
**Status:** SKIPPED — Client prefers no dates on blog posts.

### 6. No author attribution on any blog post
**Files:** All 9 files in `src/pages/blog/`
**Status:** NOT FIXED
No "By Cindy Quinn" or author bio on any post. Undermines E-E-A-T signals.

### 7. All 9 blog posts under 1,500 words
**Status:** NOT FIXED
Word counts: Why Hire (~520), What to Wear (~850), Makeup (~780), Prep (~1,100), Horizontal (~200), Photoshop (~950), Women's (~450), Men's (~1,050), Best Near Me (~380).

### 8. Homepage hero preloads on EVERY page
**File:** `src/pages/_document.tsx:26-46`
**Status:** FIXED — Moved preload tags from `_document.tsx` (global) to `index.tsx` (homepage only).

### 9. GTM script is render-blocking
**File:** `src/pages/_document.tsx:8-14`
**Status:** FIXED — Moved GTM to `_app.tsx` using `next/script` with `afterInteractive` strategy.

### 10. Service page titles too long (Google truncates at ~60 chars)
**Status:** FIXED — All 6 service page titles shortened to under 60 characters.

### 11. Corporate Staff has 4 repetitive "near me" H2 sections
**File:** `src/pages/corporate-staff-headshots.tsx`
**Status:** FIXED — Replaced with descriptive headings: Modern Corporate Headshots, Onboarding and New Hire Headshots, Multi-Location Headshot Sessions, Employer Branding Photography.

### 12. About page thin content (~550 words vs 800 minimum)
**File:** `src/pages/about.tsx` / `content/about.md`
**Status:** NOT FIXED
Needs expansion with credentials, client count, methodology, industry involvement.

---

## MEDIUM Priority Issues

### 13. Schema: Upgrade LocalBusiness to ProfessionalService
**File:** `src/components/Layout.tsx`
**Status:** NOT FIXED
Current LocalBusiness schema should be upgraded to ProfessionalService (more specific subtype). Add `logo` and `founder` properties.

### 14. Schema: Add WebSite schema
**File:** `src/components/Layout.tsx`
**Status:** NOT FIXED
No WebSite schema exists. Establishes site entity in Google's knowledge graph.

### 15. Schema: Add Person schema for Cindy Quinn
**File:** `src/pages/about.tsx`
**Status:** NOT FIXED
Missing Person schema with name, jobTitle, worksFor, knowsAbout. Strengthens E-E-A-T.

### 16. Schema: Add Service + BreadcrumbList to LinkedIn page
**File:** `src/pages/linkedin-headshots.tsx`
**Status:** NOT FIXED
LinkedIn headshots page has FAQSchema but no Service or BreadcrumbList schema.

### 17. Schema: Add BreadcrumbList to about and contact pages
**Files:** `src/pages/about.tsx`, `src/pages/contactus.tsx`
**Status:** NOT FIXED

### 18. Schema: Add Service + BreadcrumbList + FAQ to corporate staff
**File:** `src/pages/corporate-staff-headshots.tsx`
**Status:** NOT FIXED
(Related to issue #1)

### 19. OG image URLs contain unencoded spaces
**Files:** `src/components/Layout.tsx`, `src/pages/about.tsx`
**Status:** NOT FIXED
Social platforms may fail to parse URLs with literal spaces. Use %20 encoding.

### 20. Duplicate testimonials across pages
**Status:** NOT FIXED
- Spencer Hopkin: on corporate-staff AND team-composite
- Shawn Wilson: reused on multiple pages
- Realtor page uses non-realtor-specific testimonials

### 21. Homepage "Shawn%20Wilson" encoding bug
**File:** `src/pages/index.tsx` (lines ~352-353)
**Status:** NOT FIXED
Reviewer name and image alt text contain URL-encoded %20 instead of space.

### 22. Remaining JPG images not converted to WebP
**File:** `src/pages/index.tsx`
**Status:** NOT FIXED
- professional-headshots-phoenix.jpg
- ibook on line Stock-2213802656.jpg
- shoot-iStock-2217506333.jpg

### 23. Excessive Google Font weights loaded
**File:** `src/pages/_app.tsx:12-25`
**Status:** NOT FIXED
- Raleway: loads 7 weights (100-700), only 4-5 used. Remove 100, 200.
- Playfair Display: loads 4 weights (400-700), only 600 used.

### 24. Sitemap is manually maintained
**File:** `public/sitemap.xml`
**Status:** NOT FIXED
New pages can easily be forgotten. Consider auto-generation with next-sitemap.

### 25. Three "what to wear" blog posts cannibalizing each other
**Status:** NOT FIXED
- what-to-wear-to-your-headshot-session
- what-kind-of-clothing-should-i-wear-to-my-headshot-session-women
- dress-to-impress-mens-headshot-fashion-tips-for-business-success

Consider consolidating into one comprehensive guide and redirecting the others.

### 26. Viewport meta missing initial-scale=1
**File:** `src/pages/_app.tsx`
**Status:** FIXED — Added `<meta name="viewport" content="width=device-width, initial-scale=1" />` in `_app.tsx`.

### 27. LocalBusiness schema image URL has unencoded spaces
**File:** `src/components/Layout.tsx`
**Status:** NOT FIXED
Image URL in schema contains raw spaces instead of %20.

### 28. Blog posts: heading hierarchy issues
**Status:** NOT FIXED
- "Why Hire Professional" uses H3 instead of H2 for subheadings
- "Best Photographer Near Me" skips H2 level entirely

### 29. Blog posts: HTML entities in meta descriptions
**Files:** Men's fashion post, Photoshop post
**Status:** NOT FIXED
`&apos;` in description strings may render as literal text.

### 30. Raleway font weight 900 not loaded but used
**File:** `src/pages/_app.tsx`
**Status:** NOT FIXED
Hero text uses `fontWeight: '900'` (font-black) but Raleway only loads up to 700. Browser synthesizes it, which can cause CLS.

---

## LOW Priority Issues

### 31. Blog lastmod dates all stale (2025-10-06)
**File:** `public/sitemap.xml`
**Status:** NOT FIXED

### 32. AggregateRating reviewCount hardcoded at 126
**File:** `src/components/Layout.tsx`
**Status:** NOT FIXED

### 33. No privacy policy / terms of service links visible in footer
**Status:** NOT FIXED
Pages exist (/privacy-policy, /terms-and-conditions) but may not be linked from footer.

### 34. FAQPage schema won't produce Google rich results
**Status:** INFO ONLY
Since Aug 2023, FAQ rich results restricted to government/healthcare. Keep for AI visibility but don't expect Google SERP enhancements.

### 35. Missing "last updated" dates on service pages
**Status:** NOT FIXED

### 36. About page loads 17 coffee slideshow images simultaneously
**File:** `src/pages/about.tsx`
**Status:** NOT FIXED
Should lazy-load non-visible slideshow images.

### 37. CSP uses unsafe-inline and unsafe-eval
**File:** `next.config.js`
**Status:** NOT FIXED
Common with Next.js + GTM but weakens CSP. Consider nonce-based approach.

---

## Content Scorecard by Page

| Page | Score | Words | Min Met? | Schema | Top Issue |
|------|-------|-------|----------|--------|-----------|
| Homepage | 74 | ~850 | Yes | Good (3) | H1 fixed |
| About | 68 | ~550 | **No** | Weak | Thin content |
| Business Headshots | 75 | ~1,100 | Yes | Strong (3) | Title too long |
| **Actor Headshots** | **85** | ~2,400 | Yes | Strong (3) | Best page |
| Corporate Staff | 73 | ~1,200 | Yes | **Missing** | No schema + repetitive H2s |
| Realtor Headshots | 82 | ~2,100 | Yes | Strong (3) | Non-specific testimonials |
| LinkedIn Headshots | 80 | ~2,200 | Yes | Partial | Missing Service schema |
| Team Composite | 75 | ~1,470 | Yes | Strong (3) | Fixed |

---

## Blog Quality: 41/100

| Blog Post | Words | Key Issues |
|-----------|-------|------------|
| Why Hire Professional | ~520 | Skips H2, no E-E-A-T, generic |
| What to Wear | ~850 | Title fixed, cannibalization risk |
| Makeup Tips | ~780 | Generic, no studio-specific insights |
| Prep for Headshot | ~1,100 | Best post — has first-person voice |
| Horizontal Headshots | **~200** | Critically thin, no subheadings |
| Photoshop Retouching | ~950 | Generic, no before/after examples |
| Women's Clothing | ~450 | Critically thin |
| Men's Fashion | ~1,050 | Reads like AI-generated content |
| Best Photographer Near Me | ~380 | Sales copy, not helpful content |

---

## Performance Summary

| Metric | Value | Status |
|--------|-------|--------|
| TTFB | 77ms | EXCELLENT |
| Mobile Score (est.) | ~75 | Needs Improvement |
| Desktop Score (est.) | ~92 | Good |
| LCP | ~1.8-2.5s | Good (borderline) |
| INP | ~100-180ms | Good |
| CLS | ~0.05-0.12 | Good (borderline) |
| Security Headers | Enterprise-grade | Excellent |

---

## Schema: Current vs. Recommended

| Schema Type | Current Status | Pages Needed |
|-------------|---------------|-------------|
| LocalBusiness | Present (all pages) | Upgrade to ProfessionalService, add logo + founder |
| WebSite + SearchAction | MISSING | Homepage (via Layout) |
| BlogPosting | MISSING | All 9 blog posts |
| BreadcrumbList | 4 of 8 pages | Add to about, contact, corporate staff, LinkedIn, blog |
| Service | 4 of 6 service pages | Add to corporate staff, LinkedIn |
| Person (Cindy Quinn) | MISSING | About page |
| Organization (enhanced) | MISSING | Layout (enhanced LocalBusiness) |

---

## Recommended New Blog Posts

| Topic | Target Keyword | Supports |
|-------|---------------|----------|
| How Much Do Professional Headshots Cost in Phoenix? | headshot pricing Phoenix | /phoenix-business-headshots |
| Corporate Team Headshot Day: How to Organize Staff Photography | corporate team headshots | /corporate-staff-headshots |
| Actor Headshot Trends 2026: What Casting Directors Want | actor headshot tips | /actor-headshots-phoenix |
| Realtor Headshots That Sell: Tips for Real Estate Agents | realtor headshot tips | /realtor-headshots-phoenix |
| LinkedIn Headshot Guide: What Makes a Great Profile Photo | LinkedIn headshot tips | /linkedin-headshots |

---

## Top 10 Action Plan (Priority Order)

| # | Action | Impact | Effort | Status |
|---|--------|--------|--------|--------|
| 1 | Fix homepage H1 | Critical | Low | DONE |
| 2 | Fix "PROTOGRAPHER" typo | Critical | 5 min | DONE |
| 3 | Fix "%20" blog title bug | Critical | 5 min | DONE |
| 4 | Fix SSR pre-rendering | Critical | 30 min | DONE |
| 5 | Expand team composite page + schema | Critical | 1 hr | DONE |
| 6 | Change www redirect 302 to 301 | High | 5 min | TODO |
| 7 | Add /contact-us redirect | High | 5 min | TODO |
| 8 | Add schema to corporate staff (Service, Breadcrumb, FAQ) | High | 2 hrs | TODO |
| 9 | Add BlogPosting schema + dates + author to all blog posts | High | 3 hrs | TODO |
| 10 | Reduce font weights (Raleway drop 100,200; Playfair keep 600 only) | Medium | 30 min | TODO |

---

*Last updated: March 7, 2026*
