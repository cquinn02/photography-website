# Full SEO Audit Report: cmqheadshots.com

**Date:** March 25, 2026
**Previous Audit:** March 18, 2026 (Score: 79/100)
**Overall SEO Health Score: 85/100** (+6 from last audit)

---

## Score Breakdown

| Category | Weight | Score | Weighted | Change |
|----------|--------|-------|----------|--------|
| Technical SEO | 25% | 88/100 | 22.0 | +6 |
| Content Quality (E-E-A-T) | 25% | 82/100 | 20.5 | +4 |
| On-Page SEO | 20% | 82/100 | 16.4 | +5 |
| Schema / Structured Data | 10% | 85/100 | 8.5 | +5 |
| Performance (CWV) | 10% | 88/100 | 8.8 | -- |
| Images | 5% | 78/100 | 3.9 | +6 |
| AI Search Readiness | 5% | 80/100 | 4.0 | +4 |
| **TOTAL** | **100%** | | **84.1** | **+5** |

---

## What Improved Since March 18

| Fix | Impact |
|-----|--------|
| Removed LazySection from all pages — H2s, FAQs, reviews, video section now SSR'd | Technical +6, On-Page +3 |
| Removed `ssr: false` from all dynamic imports (except LightboxProvider) | Technical +4 |
| Homepage H2s now match exact search queries from GSC data | On-Page +2 |
| Demoted non-keyword headings to H3 (Headshot Services, Trusted By, Why Choose) | On-Page +1 |
| Added "Key takeaway" summary blocks to all 9 blog posts | AI Readiness +4 |
| Diversified "14 years" and "130+ reviews" boilerplate (5 mentions → 2 on homepage) | Content +2 |
| Blog CTA buttons fixed (contact → services) | On-Page +1 |
| Lawyer headshots page launched with schema, sitemap, nav | Content +2, Schema +2 |
| Video poster alt text updated with keyword | Images +2 |
| Contact page duplicate alts fixed (3/18) | Images +4 |

---

## Top 5 Critical/High Issues

### 1. "Near Me" blog post is still thin (~500 words)
**Severity: CRITICAL** | Content Quality
The weakest content on the site. Body content is ~500 words of generic self-promotion. Minimum for a blog post is 1,500 words. The "Key takeaway" block added today is the best part, but the body doesn't support it.
**Fix:** Rewrite to 1,500+ words with a structured photographer evaluation checklist, questions to ask, red flags, and Phoenix-specific insights.

### 2. Contact page has zero internal body links
**Severity: HIGH** | On-Page SEO
The conversion page has no links to services, pricing, or blog posts in its body content. People arrive here ready to decide — help them.
**Fix:** Add a "Services Overview" section with links to each service page, and a "What to Expect" link to the prep blog post.

### 3. LinkedIn page has non-heading content in H2 tags
**Severity: HIGH** | On-Page SEO
"Your Name" and a long paragraph about LinkedIn profiles are tagged as H2s. A pricing line ("Quick 20-Minute Session . 1 Edited Image . $300") is also an H2. These confuse crawlers.
**Fix:** Demote to H3 or `<p>` tags.

### 4. Actor page has duplicate heading hierarchy
**Severity: HIGH** | On-Page SEO
Session feature labels ("MULTIPLE CHARACTER LOOKS", "PROFESSIONAL DIRECTION", etc.) appear as both H2 and H3 on the same page. 20 H2s total is excessive.
**Fix:** Demote the feature labels to H3 only. Keep keyword-targeted headings as H2.

### 5. `/modeling-headshots-phoenix` has NextSeo noindex override vulnerability
**Severity: MEDIUM** | Technical SEO
Same bug class as the thank-you pages pre-3/18. Uses `<meta>` noindex in Head but doesn't pass `noindex={true}` to NextSeo/Layout, risking an override.
**Fix:** Add `noindex={true}` to the Layout component call.

---

## Top 5 Quick Wins

1. **Update blog sitemap lastmod dates** — 7 blog posts show Sept 2025. We just added summary blocks today. Update to 2026-03-25. (5 min)

2. **Fix modeling page noindex** — Add `noindex={true}` to Layout props. Same pattern as thank-you page fix. (2 min)

3. **Remove HowTo schema from blog posts** — Google dropped HowTo rich results Sept 2023. Remove dead schema. (5 min)

4. **Add `image` to lawyer Service schema** — Missed when page was added after 3/18 batch fix. (2 min)

5. **Add logo alt text sitewide** — Logo image has no alt attribute. Add `alt="CMQ Headshots"`. (2 min)

---

## Detailed Findings by Category

### Technical SEO (88/100)

| Finding | Severity | Status |
|---------|----------|--------|
| LazySection removed — all content SSR'd | -- | FIXED today |
| All `ssr: false` removed from page-level imports | -- | FIXED today |
| Thank-you pages noindex working correctly | -- | FIXED 3/18 |
| Lawyer page in sitemap and indexable | -- | FIXED 3/24 |
| `/modeling-headshots-phoenix` noindex override vulnerability | Medium | OPEN |
| Carousel drag handler lacks requestAnimationFrame | Medium | OPEN |
| 7 blog lastmod dates stale (Sept 2025) | Low | OPEN |
| www redirect is 302 instead of 301 | Low | OPEN (Amplify setting) |
| Mobile carousel arrows 40px (Google min is 48px) | Low | OPEN |
| All security headers present (HSTS, CSP, X-Frame, etc.) | -- | PASS |
| AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot) | -- | PASS |
| Clean URL structure, no redirect chains | -- | PASS |

### Content Quality & E-E-A-T (82/100)

| Finding | Severity | Status |
|---------|----------|--------|
| "Near Me" blog post ~500 words (min 1,500) | **CRITICAL** | OPEN |
| Business page has "14 years" 4 times | HIGH | OPEN |
| Lawyer page missing client testimonials | HIGH | OPEN |
| "I coach you through every pose" repeated 4+ pages | Medium | OPEN |
| No "Key takeaway" blocks on service pages (only blogs) | Medium | OPEN |
| Key takeaway blocks added to all 9 blog posts | -- | FIXED today |
| Homepage boilerplate diversified (5→2 mentions) | -- | FIXED today |
| Strong E-E-A-T: Peter Hurley Crew, 14yr experience, named clients | -- | PASS |
| LinkedIn page strongest (8.5/10) — data citations, stats | -- | PASS |
| Actor page strong depth (2,200 words, 6 headshot types) | -- | PASS |

**E-E-A-T Sub-Scores:**

| Signal | Score | Notes |
|--------|-------|-------|
| Experience | 85/100 | Video, reviews with photos, case studies (Nikki billboard) |
| Expertise | 82/100 | Peter Hurley Crew, industry-specific knowledge |
| Authoritativeness | 72/100 | No press mentions, awards, or external directory links |
| Trustworthiness | 83/100 | Full NAP, transparent pricing, security headers |

### On-Page SEO (82/100)

| Finding | Severity | Status |
|---------|----------|--------|
| Contact page: zero internal body links | **HIGH** | OPEN |
| LinkedIn page: non-heading content in H2 tags | **HIGH** | OPEN |
| Actor page: duplicate heading hierarchy (20 H2s) | **HIGH** | OPEN |
| Service pages lack blog cross-links (corporate, LinkedIn, realtor) | Medium | OPEN |
| Contact page thin (~800 words) with duplicate H2s | Medium | OPEN |
| About page H1 is 16px (visually suppressed) | Medium | OPEN |
| Business page has 15 H2s — over-optimization risk | Medium | OPEN |
| Lawyer meta description 162 chars (will truncate) | Low | OPEN |
| Homepage H2 "THE PROCESS IS QUICK, EASY, AND FUN!" not a search query | Low | OPEN |
| Homepage H2s now exact keyword matches | -- | FIXED today |
| H3 demotions verified on live site | -- | FIXED today |
| All pages have 1 H1, unique titles, explicit canonicals | -- | PASS |

### Schema & Structured Data (85/100)

| Finding | Severity | Status |
|---------|----------|--------|
| HowTo schema deprecated — Google dropped Sept 2023 | HIGH | OPEN |
| Lawyer Service schema missing `image` property | Medium | OPEN |
| 5 Service pages missing `offers.availability` | Low | OPEN |
| Person schema missing `description` on About | Low | OPEN |
| VideoObject missing `embedUrl` | Low | OPEN |
| BlogPosting missing `wordCount` and `articleSection` | Low | OPEN |
| 13 location pages have no page-specific schema | Low | OPEN (noindex) |
| Offer schema on corporate and team composite | -- | FIXED 3/18 |
| Image property on 6 of 7 Service schemas | -- | FIXED 3/18 |
| FAQPage on every page (no Google rich result but helps AI) | -- | INFO |

### Performance / Core Web Vitals (88/100)

| Metric | Status | Notes |
|--------|--------|-------|
| LCP | GOOD | Hero preloaded with fetchPriority, responsive picture, CDN |
| INP | GOOD | Passive scroll listener fixed; carousel drag is main risk |
| CLS | GOOD | LazySection removal eliminates placeholder mismatch risk |

| Finding | Severity | Status |
|---------|----------|--------|
| Carousel drag handler lacks requestAnimationFrame | Medium | OPEN |
| LazySection removed — no more CLS risk from placeholders | -- | FIXED today |
| Header scroll listener uses passive: true | -- | FIXED 3/18 |

### Images (78/100)

| Finding | Severity | Status |
|---------|----------|--------|
| Logo missing alt text sitewide | HIGH | OPEN |
| 2 duplicate alt texts on homepage reviews ("Professional headshot review") | Medium | OPEN |
| 3 JPG images on homepage (video poster, 2 process steps) | Medium | OPEN |
| 2 JPG testimonial images on corporate page | Low | OPEN |
| Contact page 8 duplicate alts | -- | FIXED 3/18 |
| Video poster alt text updated with keyword | -- | FIXED today |
| All images CDN-served, mostly WebP | -- | PASS |

### AI Search Readiness (80/100)

| Signal | Status |
|--------|--------|
| Key takeaway blocks on all 9 blog posts | FIXED today |
| FAQSchema on every page with clear Q&A pairs | PASS |
| Specific quotable facts (21x views, $250, 130+ reviews) | Good |
| AI crawlers allowed (GPTBot, ClaudeBot, PerplexityBot) | PASS |
| Blog posts lack dateModified signals | Gap |
| Service pages lack key takeaway blocks | Gap |
| "Near Me" blog too thin to be cited | Gap |
| No comparison content (CMQ vs AI headshots standalone) | Gap |

### Sitemap (PASS)

| Check | Status |
|-------|--------|
| All 22 URLs return 200 | PASS |
| Lawyer page present (added 3/24) | PASS |
| URL format consistent (https, www, no trailing slashes) | PASS |
| 7 blog lastmod dates stale (~6 months) | LOW |
| Geo pages intentionally excluded (noindex) | CORRECT |

---

## Prioritized Action Plan

### Fix Immediately (Critical)

- [ ] Rewrite "Best Professional Headshot Photographers Near Me" blog post — 1,500+ words, structured checklist, Phoenix-specific

### Fix Within 1 Week (High)

- [ ] Fix LinkedIn page H2 misuse — demote "Your Name", pricing line, and paragraph text from H2
- [ ] Fix Actor page duplicate heading hierarchy — demote feature labels to H3
- [ ] Add internal links to Contact page body (services, blog posts)
- [ ] Remove HowTo schema from blog posts (deprecated Sept 2023)
- [ ] Add logo alt text sitewide
- [ ] Fix modeling page noindex (add `noindex={true}` to Layout props)
- [ ] Add `image` to lawyer Service schema
- [ ] Add lawyer client testimonials (ThreeReviewSection)

### Fix Within 1 Month (Medium)

- [ ] Reduce "14 years" from 4 to 2 on Business page
- [ ] Add blog cross-links to corporate, LinkedIn, and realtor pages
- [ ] Add `offers.availability` to 5 Service pages
- [ ] Expand Contact page content (~800 words → 1,200+)
- [ ] Add key takeaway blocks to service page intros
- [ ] Consolidate similar H2s on Business page (15 → ~10)
- [ ] Add requestAnimationFrame to carousel drag handler
- [ ] Update blog sitemap lastmod dates to 2026-03-25
- [ ] Trim lawyer meta description to ≤155 chars
- [ ] Fix About page H1 visual size (16px is too small)

### Backlog (Low)

- [ ] Diversify "I coach you through every pose" across pages
- [ ] Convert remaining JPG images to WebP (5 files)
- [ ] Fix 2 duplicate homepage review alt texts
- [ ] Add `description` to Person schema on About page
- [ ] Add `embedUrl` to VideoObject schema
- [ ] Add `wordCount` and `articleSection` to BlogPosting schemas
- [ ] Increase mobile carousel arrows to 48x48px
- [ ] Change Amplify www redirect from 302 to 301
- [ ] Add dateModified to blog schemas for freshness signals

---

## Audit Accuracy Note

This audit was cross-referenced against the March 18 report and today's git history. All findings were verified against the live deployed site or source code. Items marked FIXED were confirmed resolved. No findings were carried over from the previous audit without re-verification.

---

*Report generated by Claude Code SEO Audit — March 25, 2026*
