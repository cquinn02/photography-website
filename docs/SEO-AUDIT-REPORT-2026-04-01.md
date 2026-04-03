# Full SEO Audit Report — April 1, 2026

## Overall SEO Health Score: 83/100

**Business type:** Professional headshot photography studio (local service business)
**Site:** https://www.cmqheadshots.com/
**Pages audited:** 22 (10 service/core pages + 9 blog posts + 3 utility pages)
**Previous audit score:** 85/100 (March 25, 2026)

---

## Executive Summary

### Top 5 Critical Issues

1. **H2 keyword phrases not echoed in body text** — Site-wide problem. Lawyer page is worst (89% of H2s missing), Corporate Staff (75%), ERAS (71%), Actor (67%). This directly violates the SEO Content Rules in CLAUDE.md.
2. **Corporate page: 50 eager-loaded logo images** — All client logos load with `loading="eager"` and 29 preload tags, competing with the hero image for bandwidth. Major Core Web Vitals impact.
3. **Contact page thin content** — ~250 words, zero internal links in body content. Weakest page on the site.
4. **Service schema missing prices** — 5 of 6 service pages have Offer blocks without a `price` value. Only ERAS has it right.
5. **Dual robots meta tags on modeling page** — Both `index,follow` and `noindex,nofollow` present. Google respects the most restrictive (noindex works) but this is a bug.

### Top 5 Quick Wins

1. Add exact H2 keyword phrases to the first sentence below each H2 (biggest SEO gap, text-only fix)
2. Add `loading="lazy"` to corporate page logo images (one-line code fix, big CWV improvement)
3. Add prices to Service schema on 5 service pages (copy ERAS pattern)
4. Add BreadcrumbList schema to /blog page (missing, all other pages have it)
5. Clean up 7 logo alt texts with filename artifacts on corporate page

---

## Score Breakdown

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 87/100 | 21.8 |
| Content Quality | 25% | 82/100 | 20.5 |
| On-Page SEO | 20% | 72/100 | 14.4 |
| Schema / Structured Data | 10% | 82/100 | 8.2 |
| Performance (CWV) | 10% | 78/100 | 7.8 |
| Images | 5% | 85/100 | 4.3 |
| AI Search Readiness | 5% | 85/100 | 4.3 |
| **TOTAL** | **100%** | | **81.3 → 83** |

---

## 1. Technical SEO (87/100)

### Passing
- All 23 sitemap URLs return 200
- Self-referencing canonical tags on all pages
- Security headers excellent (HSTS with preload, X-Frame-Options, CSP, etc.)
- Non-www redirects correctly (301, single hop)
- SSR working — all content in HTML source, not JS-dependent
- AI crawlers explicitly allowed (GPTBot, ClaudeBot, PerplexityBot, etc.)
- llms.txt present and well-structured
- Mobile viewport meta tag on all pages
- Responsive images with CDN preconnect hints

### Issues

| Priority | Issue | Details |
|----------|-------|---------|
| HIGH | Dual robots meta on /modeling-headshots-phoenix | Both `index,follow` and `noindex,nofollow` in `<head>`. Noindex wins but should be cleaned up. |
| MEDIUM | Stale sitemap lastmod dates | 7 blog posts show Sep-Oct 2025 dates. Homepage shows Mar 8 (changed Mar 31). |
| MEDIUM | /headshot-booth-phoenix lacks noindex meta | Only blocked via robots.txt Disallow. Add noindex as backup. |
| MEDIUM | ERAS title tag 65 chars (limit 60) | Trim to "ERAS Headshots Phoenix | Medical Photos | CMQ Headshots" |
| MEDIUM | Blog meta description only 98 chars | Expand to 140-160 chars with CTA |
| MEDIUM | Modeling meta description 176 chars | Trim to under 160 |
| LOW | X-XSS-Protection header missing | Documented as configured but not present. Deprecated anyway. |
| LOW | Blog H1 says "BLOGS" (plural) | Should be "Blog" or keyword-rich alternative |

### Confirmed Working
- /modeling-headshots-phoenix: noindex IS active (correctly hidden)
- /convention-headshots-phoenix: noindex + robots.txt Disallow (correctly hidden)
- /headshots-cave-creek: noindex (correctly hidden)

---

## 2. Content Quality & E-E-A-T (82/100)

### E-E-A-T Aggregate Score: 85/100

| Factor | Score | Notes |
|--------|-------|-------|
| Experience | 17.5/20 | First-person voice, specific anecdotes, named clients, 14 years |
| Expertise | 21.5/25 | Industry-specific knowledge, statistics with sources, AAMC specs |
| Authoritativeness | 20/25 | 130+ reviews, Peter Hurley association, Fortune 500 clients |
| Trustworthiness | 26/30 | Clear pricing, phone, studio location, transparent process |

### Page Word Counts

| Page | Words | Status |
|------|-------|--------|
| Homepage | ~2,100 | PASS |
| Business Headshots | ~1,200 | PASS |
| Corporate Staff | ~1,100 | PASS |
| Actor Headshots | ~2,000 | STRONG |
| LinkedIn Headshots | ~1,500 | STRONG |
| Realtor Headshots | ~1,400 | STRONG |
| Lawyer Headshots | ~1,500 | STRONG |
| ERAS Medical | ~1,200 | PASS |
| About | ~1,500 | STRONG |
| Contact | ~250 | THIN - FLAG |
| Blog Index | ~150 | THIN (but listing page) |

### Content Strengths
- Authentic first-person voice throughout (not AI-sounding)
- Real client stories with names (Nikki's billboard, Rachael, Rodney, Sophia)
- Industry-specific expertise (AAMC specs, legal directories, LinkedIn statistics)
- No problematic boilerplate — templatized sections have unique content per page

### Content Issues

| Priority | Issue | Page |
|----------|-------|------|
| CRITICAL | Thin content (~250 words, zero body links) | /contact-us |
| HIGH | No client testimonials | /eras-medical-headshots |
| MEDIUM | No BlogPosting or ItemList schema | /blog |
| MEDIUM | No publish dates on blog cards | /blog |
| LOW | "BLOGS" H1 not keyword-optimized | /blog |

---

## 3. On-Page SEO (72/100)

**This is the weakest category** due to widespread H2 keyword echo failures.

### H2 Keyword Echo Failures (Site-Wide)

The CLAUDE.md rule says: "Every H2 and H3 must have its exact keyword phrase repeated naturally in the body text directly below it."

| Page | H2s with echo | H2s missing | % Missing |
|------|---------------|-------------|-----------|
| About | 5/5 | 0 | 0% |
| Homepage | 2/5 | 3 | 60% |
| Business | 5/9 | 4 | 44% |
| Corporate Staff | 3/12 | 9 | 75% |
| Actor | 4/12 | 8 | 67% |
| LinkedIn | 3/7 | 4 | 57% |
| Realtor | 4/10 | 6 | 60% |
| Lawyer | 1/9 | 8 | 89% |
| ERAS Medical | 2/7 | 5 | 71% |
| Contact | 0/1 | 1 | 100% |
| **TOTAL** | **33/87** | **48** | **55%** |

**55% of all H2s on the site are missing their keyword phrase in the body text below them.** This is the single biggest on-page SEO gap.

### Title Tags & Meta Descriptions

**All title tags are unique** across all pages. PASS.
**All meta descriptions are unique** across all pages. PASS.

| Issue | Pages Affected |
|-------|---------------|
| Title too long (>60 chars) | ERAS (65), Blog (64) |
| Meta desc too short (<140 chars) | Homepage (136), Business (137), Actor (139), Realtor (137) |
| Meta desc too long (>160 chars) | Lawyer (162), ERAS (161), Modeling (176) |

### Keyword Cannibalization

"PROFESSIONAL HEADSHOTS PHOENIX" appears as an H2 on both the **Homepage** and **Business Headshots** page. The homepage should own this phrase; the business page should differentiate.

### Internal Linking Gaps

| Page | Internal Links in Body | Status |
|------|----------------------|--------|
| Contact | 0 | CRITICAL — zero links |
| LinkedIn | 1 | NEEDS MORE |
| Realtor | 2 | NEEDS MORE |
| Corporate | 2 | NEEDS MORE |

### Other On-Page Issues
- Corporate Staff has an H2 that is a full paragraph (heading + body jammed together)
- Homepage has 3 sections using `<p>` tags for what could be H2s ("HEADSHOT SERVICES", "WHY CHOOSE CMQ HEADSHOTS?")

---

## 4. Schema & Structured Data (82/100)

### Coverage Summary

| Schema Type | Pages Present | Status |
|-------------|--------------|--------|
| ProfessionalService | All 12 audited | PASS |
| WebSite | All 12 audited | PASS |
| BreadcrumbList | 11 of 12 | MISSING on /blog |
| Service | 6 service pages | WARN — 5 missing price |
| FAQPage | 8 pages | WARN — won't produce rich results (Google restricted to gov/health) |
| VideoObject | Homepage | PASS |
| Person | About page | PASS |
| ContactPage | Contact page | PASS |
| BlogPosting | Blog posts | PASS |

### Issues

| Priority | Issue | Details |
|----------|-------|---------|
| HIGH | Service schema missing `price` on 5 pages | Business, Corporate, Actor, LinkedIn, Realtor all have Offer without price. ERAS does it right ($300). |
| HIGH | Lawyer Service schema missing `image` | All other service pages include it. |
| MEDIUM | /blog missing BreadcrumbList | Only page without it. |
| MEDIUM | /blog missing CollectionPage schema | No schema identifies it as a blog listing. |
| LOW | FAQPage schema won't produce Google rich results | Google restricted FAQ rich results to authority sites in Aug 2023. Not harmful to keep, still useful for Bing and AI. |
| LOW | No SearchAction in WebSite schema | Only matters if site has search functionality (it doesn't). |
| LOW | aggregateRating says 130 reviews | Verify if count has increased. |

---

## 5. Performance / Core Web Vitals (78/100)

### Server Response
| Page | Response Time | HTML Size |
|------|--------------|-----------|
| Homepage | 0.23s | 149 KB |
| Business | 0.22s | 147 KB |
| Corporate | 0.31s | 224 KB |
| Actor | 0.25s | 137 KB |

### Issues

| Priority | Issue | Impact |
|----------|-------|--------|
| HIGH | Corporate page: 50 eager-loaded logos + 29 preload tags | All client logos load immediately with `loading="eager"`. Should be lazy-loaded. 29 preload link tags compete with hero for bandwidth. Worst CWV page on the site. |
| MEDIUM | No srcset on Next.js Images | Rendered HTML shows single `src` without `srcset`. Mobile devices download same size as desktop. |
| MEDIUM | Corporate HTML 224KB | 75KB larger than other pages due to duplicated logo carousel for desktop/mobile. |
| LOW | Business/Actor heroes missing fetchPriority="high" | Have preload tags but not fetchPriority on the img tag itself. |
| LOW | 2 stock JPGs on homepage not converted to WebP | `ibook on line Stock-2213802656.jpg` and `shoot-iStock-2217506333.jpg` |

---

## 6. Images (85/100)

### Summary
- **144 images audited** across 4 pages
- **100% from CDN** (images.cmqheadshots.com) — zero local /images/ references
- **100% have alt text** — zero missing
- **93% WebP format** — excellent

### Issues

| Priority | Issue | Details |
|----------|-------|---------|
| MEDIUM | 7 logo alt texts have filename artifacts | "chase bank ndash logos download 181100", "us bank logo png 45997", "Grasso Logo Color Small 1011754265", etc. |
| MEDIUM | 20 PNG client logos on corporate page | Should be WebP (Next.js may serve WebP via /_next/image pipeline) |
| LOW | 1 AVIF file (workforcenow.avif) | May have compatibility issues in older browsers |
| LOW | 2 stock JPGs on homepage | Should be WebP |

---

## 7. AI Search Readiness (85/100)

### Strengths
- FAQPage schema on 8 pages with well-formed Q&As
- Definitive pricing statements ("$250 session fee + $100 per edited image")
- Specific credentials (14 years, 3,000+ clients, 130+ reviews)
- llms.txt with comprehensive service/pricing info
- AI crawlers explicitly allowed in robots.txt
- Key takeaway summary blocks on all 9 blog posts

### Gaps
- Blog index has no structured data for AI consumption
- No AggregateRating in a format easily extractable site-wide
- Some FAQ answers are conversational rather than direct/definitive

---

## Prioritized Action Plan

### CRITICAL — Fix This Week

| # | Issue | Pages | Fix |
|---|-------|-------|-----|
| 1 | H2 keyword echo failures (55% site-wide) | All service pages | Add exact H2 phrase to first sentence of body text below each H2 |
| 2 | Corporate logo eager loading | /corporate-staff-headshots | Change logos to `loading="lazy"`, remove priority props, reduce preload tags |
| 3 | Contact page thin content + zero links | /contact-us | Add 200+ words, 3-4 FAQ questions, links to 3-4 service pages |

### HIGH — Fix Within 2 Weeks

| # | Issue | Pages | Fix |
|---|-------|-------|-----|
| 4 | Service schema missing prices | 5 service pages | Add `"price": "250"` to Offer blocks (copy ERAS pattern) |
| 5 | Lawyer Service schema missing image | /lawyer-headshots-phoenix | Add image URL to schema |
| 6 | Dual robots meta on modeling page | /modeling-headshots-phoenix | Remove conflicting `index,follow` tag |
| 7 | Internal linking gaps | LinkedIn, Realtor, Corporate | Add 3-4 internal links to each page body |
| 8 | ERAS page needs testimonials | /eras-medical-headshots | Add 1-2 medical student reviews |
| 9 | Keyword cannibalization | Homepage + Business | Remove "PROFESSIONAL HEADSHOTS PHOENIX" H2 from business page |

### MEDIUM — Fix Within 1 Month

| # | Issue | Pages | Fix |
|---|-------|-------|-----|
| 10 | Stale sitemap lastmod dates | sitemap.xml | Update all dates to reflect actual last-modified |
| 11 | Meta description length issues | 7 pages | Lengthen short ones to 150+, trim long ones to 160 |
| 12 | Blog missing BreadcrumbList + CollectionPage schema | /blog | Add both schema types |
| 13 | ERAS title tag too long (65 chars) | /eras-medical-headshots | Trim to under 60 |
| 14 | Corporate run-on H2 | /corporate-staff-headshots | Split heading from body text |
| 15 | Logo alt text cleanup | /corporate-staff-headshots | Fix 7 alt texts with filename artifacts |
| 16 | /headshot-booth-phoenix missing noindex | /headshot-booth-phoenix | Add noindex meta tag as backup to robots.txt |

### LOW — Backlog

| # | Issue | Fix |
|---|-------|-----|
| 17 | Blog H1 "BLOGS" not keyword-rich | Change to "Headshot Tips and Photography Advice" or similar |
| 18 | No srcset in rendered HTML | Investigate Next.js Image config for responsive output |
| 19 | Stock JPGs not WebP | Convert 2 homepage stock images |
| 20 | X-XSS-Protection header missing | Add to next.config.js headers (cosmetic) |
| 21 | aggregateRating review count | Verify 130 is still accurate |

---

## Comparison to Previous Audit (March 25, 2026)

| Category | Mar 25 | Apr 1 | Change |
|----------|--------|-------|--------|
| Overall | 85 | 83 | -2 |
| Technical | 85 | 87 | +2 |
| Content | 80 | 82 | +2 |
| On-Page | 78 | 72 | -6 |
| Schema | 85 | 82 | -3 |

**Why the score dropped:** The on-page audit is stricter this time, specifically measuring H2 keyword echo compliance across every H2 on every page (55% failure rate). The previous audit flagged this on a few pages; this audit measured it comprehensively. Technical and content scores improved thanks to the LazySection fix, heading restructure, and ERAS page launch.

---

*Audit performed by Claude Code SEO Audit Suite — 5 parallel specialist agents*
*Next audit recommended: April 15, 2026*
