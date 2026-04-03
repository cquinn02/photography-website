# Full SEO Audit Report: cmqheadshots.com

**Date:** March 18, 2026
**Business Type:** Local Service — Headshot Photography, Phoenix AZ
**Pages Analyzed:** 20 sitemap URLs + 13 additional pages found in codebase
**Overall SEO Health Score: 79/100**

---

## Score Breakdown

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 82/100 | 20.5 |
| Content Quality (E-E-A-T) | 25% | 78/100 | 19.5 |
| On-Page SEO | 20% | 77/100 | 15.4 |
| Schema / Structured Data | 10% | 80/100 | 8.0 |
| Performance (CWV) | 10% | 88/100 | 8.8 |
| Images | 5% | 72/100 | 3.6 |
| AI Search Readiness | 5% | 76/100 | 3.8 |
| **TOTAL** | **100%** | | **79.6** |

---

## Top 5 Critical Issues

1. **Thank-you pages are publicly indexable** — `/athankyou` and `/bthank-you` have `noindex` in `<Head>` but NextSeo overrides it with `index,follow`. Fix: add `noindex={true}` to `<NextSeo>` in both files.

2. **13 location pages have zero schema markup** — All `headshots-*.tsx` pages inherit only global schema. They need Service + BreadcrumbList schema for local SEO.

3. ~~**`/lawyer-headshots-phoenix` missing from sitemap**~~ — Set to `noindex` until page is ready with final images. Add to sitemap when ready to publish.

4. **"Best Professional Headshot Photographers Near Me" blog post is thin** — ~800 words of generic content with no personal voice. Weakest content asset on the site.

5. ~~**Contact page is thin**~~ — Contact page is a conversion endpoint, not a landing page. Content depth is appropriate for its purpose. Alt text duplicates were fixed 3/18.

---

## Top 5 Quick Wins

1. **Fix NextSeo noindex on thank-you pages** — 2-line change in 2 files. Immediate indexability fix.

2. **Add `/lawyer-headshots-phoenix` to sitemap.xml** — 3-line XML addition.

3. **Add `{ passive: true }` to Header scroll listener** — 1-line change for INP improvement.

4. **Change "5 STAR REVIEW" H3 tags to `<p>` or `<span>`** — Cleans heading hierarchy on 4 pages.

5. **Add Offer schema to corporate and team composite pages** — Copy pattern from other service pages.

---

## Detailed Findings by Category

### Technical SEO (82/100)

| Finding | Severity |
|---------|----------|
| Thank-you pages indexable despite noindex intent (NextSeo override) | **CRITICAL** |
| Stale robots.txt entry for `/modeling-headshots-phoenix` (404 page) | Medium |
| Actor headshots page HTML is 136KB — largest page | Medium |
| All security headers properly configured (HSTS, CSP, etc.) | PASS |
| www/non-www redirects, HTTPS enforcement | PASS |
| SSR rendering — all content in initial HTML | PASS |
| Mobile viewport, font-display swap | PASS |
| Clean URL structure, no redirect chains | PASS |

#### Thank-You Page Fix Details

**Files:**
- `src/pages/athankyou.tsx`
- `src/pages/bthank-you.tsx`

**Root cause:** Both pages set `<meta name="robots" content="noindex, nofollow" />` via `<Head>`, but they also use `<NextSeo>` without passing `noindex={true}`. NextSeo outputs its own `<meta name="robots" content="index,follow">` tag, and Next.js deduplicates in favor of NextSeo's version (last writer wins).

**Fix:** Add `noindex={true}` and `nofollow={true}` to the `<NextSeo>` component in both files:

```tsx
<NextSeo
  title="Thank You - CMQ Headshots"
  description="..."
  noindex={true}
  nofollow={true}
  openGraph={{...}}
/>
```

---

### Content Quality & E-E-A-T (78/100)

| Finding | Severity |
|---------|----------|
| "Near me" blog post is thin (~800w), generic, possibly AI-generated tone | **HIGH** |
| Business headshots page has only ~600w body content (below 800w minimum) | **HIGH** |
| Blog posts significantly weaker than service pages in voice/quality | **HIGH** |
| Boilerplate phrases repeated verbatim across 4+ pages ("130+ five-star reviews", "14 years experience") | Medium |
| ~~No privacy policy page visible on the site~~ | ~~Medium~~ — **FALSE POSITIVE**: `/privacy-policy` exists and is in sitemap |
| ~~No dateModified in blog schema~~ | ~~Medium~~ — **FALSE POSITIVE**: BlogPostSchema already handles dateModified |
| Strong E-E-A-T signals: Peter Hurley credential, 14yr experience, named Fortune 500 clients | PASS |
| Realtor page is the strongest (2,200w, case studies, named brokerages) | PASS |
| AI citation readiness: 76/100 — FAQSchema on every page, quotable stats | Good |

#### E-E-A-T Sub-Scores

| Signal | Score | Notes |
|--------|-------|-------|
| Experience | 85/100 | First-person voice, named clients, real case studies |
| Expertise | 80/100 | Peter Hurley credential, technical FAQ knowledge |
| Authoritativeness | 72/100 | No press mentions, awards, or external directory links |
| Trustworthiness | 82/100 | Full NAP, transparent pricing, security headers |

#### Blog Post Quality Assessment

| Blog Post | Word Count | Score | Notes |
|-----------|-----------|-------|-------|
| Best Professional Headshot Photographers Near Me | ~800 | 55/100 | Generic, no personal voice, rewrite needed |
| Why Hire a Professional Headshot Photographer | ~1,200 | 65/100 | Generic listicle, below 1,500w minimum |
| How to Prep for Your Best Professional Headshot | ~1,400 | 72/100 | Better quality, uses first person |
| What to Wear to Your Headshot Session | ~1,600 | 75/100 | Strongest blog post, personal voice |
| Women's Headshot Clothing Guide | N/A | N/A | Not analyzed in detail |
| Why I Shoot Headshots Horizontally | N/A | N/A | Not analyzed in detail |
| Men's Headshot Fashion Tips | N/A | N/A | Not analyzed in detail |
| Makeup for Headshot Session | N/A | N/A | Not analyzed in detail |
| Should the Photographer Photoshop You | N/A | N/A | Not analyzed in detail |

#### Duplicate Phrasing Found Across Pages

| Phrase | Pages Found |
|--------|------------|
| "130+ five-star Google reviews" | Homepage, About, Corporate, LinkedIn, Realtor |
| "14 years of experience" | Homepage, About, Corporate, LinkedIn, Realtor, Team Composite |
| "I never rush" / "sessions continue until..." | Homepage, About, Business, Realtor |
| "solid colors in business or business-casual" | Homepage FAQ, Corporate FAQ, LinkedIn FAQ |
| "Final retouched images delivered within 7 business days" | Homepage FAQ, Corporate FAQ, Business FAQ |

---

### On-Page SEO (77/100)

#### Page-by-Page Scores

| Page | Title | Meta Desc | H1 | Headings | Links | Alt Text | Depth | Schema | Overall |
|------|-------|-----------|-----|----------|-------|----------|-------|--------|---------|
| Homepage `/` | 9 | 9 | 10 | 8 | 9 | 8 | 7 | 10 | **8.5** |
| Business `/phoenix-business-headshots` | 9 | 9 | 10 | 6 | 7 | 8 | 10 | 10 | **8** |
| Corporate `/corporate-staff-headshots` | 9 | 9 | 10 | 7 | 6 | 5 | 4 | 9 | **7** |
| Actor `/actor-headshots-phoenix` | 9 | 9 | 10 | 7 | 5 | 10 | 10 | 9 | **8.5** |
| LinkedIn `/linkedin-headshots` | 9 | 10 | 10 | 8 | 6 | 8 | 8 | 9 | **8** |
| Realtor `/realtor-headshots-phoenix` | 9 | 9 | 10 | 6 | 6 | 10 | 10 | 9 | **7.5** |
| Team Composite `/team-composite-headshots` | 9 | 7 | 10 | 8 | 6 | 5 | 8 | 9 | **7.5** |
| About `/about` | 9 | 10 | 8 | 8 | 8 | 6 | 9 | 8 | **7.5** |
| Contact `/contact-us` | 8 | 9 | 7 | 5 | 3 | 2 | 3 | 5 | **6** |

#### On-Page Issues

| Finding | Severity |
|---------|----------|
| Contact page: thin content, 8 duplicate alt texts, no inline links | **HIGH** |
| Corporate staff page: thinnest service page (~1,000w) | **HIGH** |
| 4 of 6 service pages have no blog cross-links in body content | **HIGH** |
| "5 STAR REVIEW" rendered as H3 on 4 pages | **HIGH** |
| Keyword-heavy H2 repetition on business and realtor pages | Medium |
| Footer H3 tags should be non-heading elements | Medium |
| Realtor page OG image uses S3 direct URL instead of CDN | Medium |
| Typo on About page: "litte" should be "little" | Low |
| All title tags, meta descriptions, and canonicals are solid | PASS |
| 1 H1 per page confirmed across all pages | PASS |

#### Internal Linking Gaps

| Gap | Detail |
|-----|--------|
| Service pages don't cross-link in body content | Business page doesn't link to Actor, LinkedIn, Realtor in body paragraphs |
| Location pages not linked from service pages | No service page mentions or links to `/headshots-scottsdale`, etc. |
| Contact page has zero inline service links | Should link to each service type |
| Blog posts not linked from service pages | Only business headshots page links to blog posts |
| No service page links to About page in body | Only through nav/footer |

---

### Schema & Structured Data (80/100)

#### Existing Schema Inventory

| Schema Type | Location | Status |
|-------------|----------|--------|
| ProfessionalService | Layout.tsx (global) | PASS — NAP, geo, hours, rating, areaServed |
| WebSite | Layout.tsx (global) | PASS |
| VideoObject | index.tsx (homepage) | PASS |
| FAQPage | All service pages + homepage | PASS (won't generate rich results since Aug 2023) |
| Service | 6 service pages | PASS with issues |
| BreadcrumbList | All pages except homepage | PASS |
| Person (Cindy Quinn) | about.tsx | PASS |
| BlogPosting | All blog posts | PASS |

#### Schema Issues

| Finding | Severity |
|---------|----------|
| 13 geo/near-me pages have zero page-specific schema | **HIGH** |
| Corporate and team composite pages missing Offer schema | Medium |
| No image property on any Service schema | Medium |
| Homepage missing BreadcrumbList | Medium |
| Contact page has no ContactPage schema | Low |
| BlogPosting datePublished lacks time component | Low |

#### Recommended Schema Additions

**For each geo page** (e.g., `headshots-scottsdale.tsx`):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Headshots Scottsdale AZ",
  "description": "Professional headshot photography in Scottsdale, Arizona.",
  "provider": {
    "@type": "ProfessionalService",
    "@id": "https://www.cmqheadshots.com"
  },
  "areaServed": {
    "@type": "City",
    "name": "Scottsdale",
    "sameAs": "https://en.wikipedia.org/wiki/Scottsdale,_Arizona"
  },
  "serviceType": "Headshot Photography",
  "url": "https://www.cmqheadshots.com/headshots-scottsdale"
}
```

**For corporate and team composite pages**, add Offer block:
```json
"offers": {
  "@type": "Offer",
  "priceCurrency": "USD",
  "description": "Corporate staff headshot session — contact for custom team pricing.",
  "url": "https://www.cmqheadshots.com/corporate-staff-headshots",
  "availability": "https://schema.org/InStock"
}
```

---

### Performance / Core Web Vitals (88/100)

| Metric | Estimated Status | Notes |
|--------|-----------------|-------|
| TTFB | 178ms — GOOD | CloudFront PHX52-P2 edge |
| LCP | 2.0-2.5s — GOOD | Preloaded hero, fetchPriority="high" |
| INP | Under 200ms — GOOD | Carousel drag is the main risk |
| CLS | Under 0.1 — GOOD | LazySection height estimates are the main risk |

| Finding | Severity |
|---------|----------|
| Carousel drag handler forces style recalc on every move event (INP risk) | Medium |
| LazySection placeholder heights are static estimates (CLS risk on mobile) | Medium |
| No `Cache-Control` header on CDN images (heuristic caching only) | Low |
| Lightbox CSS loaded on all pages even when unused | Low |
| Header scroll listener missing `{ passive: true }` | Low |

#### What's Already Done Well
- Responsive hero images via `<picture>` with preload hints and fetchPriority
- CDN preconnect in `_document.tsx`
- Dynamic imports for all below-fold sections
- LazySection with IntersectionObserver for deferred rendering
- GTM loaded afterInteractive via next/script
- next/font/google with display: swap
- 1-year immutable cache on static assets
- WebP format throughout
- removeConsole in production

---

### Images (72/100)

| Finding | Severity |
|---------|----------|
| Contact page: 8 identical alt texts ("Professional Phoenix LinkedIn headshot") | **HIGH** |
| Team composite builder: generic alt text ("First Team Member") | Medium |
| About page: generic personal photo alts | Low |
| Service page images: descriptive, keyword-rich alt text | PASS |
| WebP format used throughout, CDN-served | PASS |

---

### AI Search Readiness (76/100)

| Signal | Status |
|--------|--------|
| FAQSchema on every page with clear Q&A pairs | Excellent |
| Specific quotable facts (21x views, $250, 130+ reviews, 14 years) | Good |
| Service schema with prices and areas served | Good |
| AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot) | PASS |
| Blog posts lack crisp, quotable statements | Gap |
| No comparison content (CMQ vs AI headshots, etc.) | Gap |
| No HowTo schema on prep/what-to-wear posts | Gap |

---

### Sitemap Analysis

| Check | Status |
|-------|--------|
| XML format, encoding, namespace | PASS |
| All 20 URLs return 200 | PASS |
| No disallowed URLs in sitemap | PASS |
| URL consistency (www, https, no trailing slashes) | PASS |
| `/lawyer-headshots-phoenix` missing from sitemap | **HIGH** |
| 7 blog post lastmod dates ~6 months stale | Low |

#### Location Pages Status

13 location pages exist in the codebase using `LocationPageTemplate`. All are currently set to `noindex={true}`, which is the correct approach given they use a shared template with only the city name swapped. If noindex is ever removed, each page would need 60%+ unique content to avoid doorway page penalties.

---

## Content Gaps vs Competitors

| Missing Topic | Priority | Rationale |
|--------------|----------|-----------|
| "How Much Do Headshots Cost in Phoenix" (pricing guide) | HIGH | High-intent search query; currently answered vaguely in FAQs |
| "AI Headshots vs Professional Headshots" (standalone post) | Medium | LinkedIn page covers this in FAQ but deserves full article |
| Dedicated portfolio/gallery page | Medium | Images scattered across service pages |
| ~~Privacy policy page~~ | ~~Medium~~ | **FALSE POSITIVE**: already exists at `/privacy-policy` |
| "How to Choose a Headshot Photographer" (buyer's guide) | Medium | Replace thin "near me" post |
| Studio tour / behind-the-scenes page | Low | Would strengthen Experience signals |
| Consolidated testimonials page | Low | Reviews scattered; consolidation would concentrate trust signals |

---

## Prioritized Action Plan

### Fix Immediately (Critical)

- [x] Add `noindex={true}` to NextSeo on `/athankyou` and `/bthank-you` — **FIXED 3/18** (genuine bug: NextSeo was overriding `<Head>` noindex)
- ~~Add `/lawyer-headshots-phoenix` to sitemap~~ — Page not ready, added `noindex` instead until images are finalized

### Fix Within 1 Week (High)

- [ ] Rewrite "Best Professional Headshot Photographers Near Me" blog post (1,500+ words, Cindy's voice)
- ~~Expand `/phoenix-business-headshots` body content to 1,000+ words~~ — **FALSE POSITIVE**: page already has ~1,800+ words of body content
- [x] Fix 8 duplicate alt texts on contact page — **FIXED 3/18**
- [ ] Add body-text cross-links from service pages to relevant blog posts
- [x] Change "5 STAR REVIEW" H3 tags to `<p>` in ThreeReviewSection — **FIXED 3/18**
- [ ] Add Service + BreadcrumbList schema to 13 geo/location pages

### Fix Within 1 Month (Medium)

- [x] Add Offer schema to corporate and team composite service pages — **FIXED 3/18**
- [x] Add image property to all 6 Service schemas — **FIXED 3/18**
- [ ] Diversify repeated boilerplate phrases across service pages
- [ ] Add `requestAnimationFrame` to carousel drag handler
- [ ] Create "How Much Do Headshots Cost in Phoenix" content
- ~~Add author schema to blog posts~~ — **FALSE POSITIVE**: already existed in BlogPostSchema component
- [x] Remove stale `/modeling-headshots-phoenix` from robots.txt — **FIXED 3/18**
- [ ] Add responsive LazySection placeholder heights
- ~~Add `Cache-Control` headers to CloudFront CDN images~~ — Not possible without CloudFront business tier upgrade
- ~~Create privacy policy page~~ — **FALSE POSITIVE**: already exists at `/privacy-policy` (in sitemap)
- ~~Add dateModified to blog schema entries~~ — **FALSE POSITIVE**: already handled in BlogPostSchema (falls back to datePublished)

### Backlog (Low)

- [x] Add `{ passive: true }` to Header scroll listener — **FIXED 3/18**
- [x] Lazy-load lightbox CSS — **FIXED 3/18**
- [x] Add ContactPage schema to contact page — **FIXED 3/18**
- [x] Add BreadcrumbList to homepage — **FIXED 3/18**
- [x] Use `og:type="article"` on blog posts — **FIXED 3/18**
- [x] Fix "litte" typo on About page — **FIXED 3/18**
- [x] Add unique og:images to About, Blog, Contact pages — **FIXED 3/18**
- ~~Add twitter:site handle~~ — **FALSE POSITIVE**: already configured
- [ ] Expand corporate staff page content depth
- [x] Add HowTo schema to prep/what-to-wear blog posts — **FIXED 3/18**

### Additional Fixes Found During Session (not in original audit)

- [x] Removed prices from all 7 Offer schemas (Cindy wants visitors in funnel first)
- [x] Footer H3 tags changed to `<p>` (4 instances)
- [x] Realtor OG image switched from S3 direct URL to CloudFront CDN
- [x] Removed broken image-only testimonial section from team composite page
- [x] Fixed generic alt text on team composite builder and about page images
- [x] Added `noindex` to lawyer-headshots-phoenix (not ready for launch)
- [x] Updated robots.txt date

### Audit Accuracy Note

Several findings in this audit were **false positives** — issues reported as missing or broken that were already implemented and deployed on the live site. These are marked with ~~strikethrough~~ above. The genuinely useful catches were the NextSeo noindex override, duplicate alt text, broken testimonial section, H3 heading hierarchy issues, and missing Offer/image schema properties.

---

## Local Content Signals (88/100)

**Strengths:**
- Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Paradise Valley, Queen Creek named across pages
- Street address and Google Maps link in footer
- "Near me" sections on corporate, LinkedIn, and realtor pages with highway references (101, I-17)
- Named local landmarks: Biltmore corridor, Camelback Road, Kierland, downtown Phoenix
- Named local brokerages: Russ Lyon Sotheby's, Realty ONE Group, HomeSmart, eXp Realty
- areaServed schema with City entities and Wikipedia sameAs links

**Minor gap:** No mention of specific Phoenix neighborhoods (Arcadia, Paradise Valley Village, North Central) or specific office buildings/business parks.

---

*Report generated by Claude Code SEO Audit — March 18, 2026*
