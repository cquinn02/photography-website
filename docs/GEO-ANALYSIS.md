# GEO Analysis — cmqheadshots.com

**Date:** 2026-05-10 (rewrite — supersedes 2026-04-05 analysis)
**Site:** www.cmqheadshots.com
**Business:** CMQ Headshots — Professional headshot photography, Phoenix AZ

---

## GEO Readiness Score: 65/100 (up from 58/100 on 2026-04-05)

| Category | Weight | Score | Weighted | Δ vs Apr 5 |
|----------|--------|-------|----------|------------|
| Citability (answer blocks) | 25% | 35/100 | 8.75 | unchanged |
| Structural Readability | 20% | 65/100 | 13.0 | +10 (schema complete) |
| Multi-Modal Content | 15% | 82/100 | 12.3 | unchanged |
| Authority & Brand Signals | 20% | 68/100 | 13.6 | +16 (sameAs + footer + YouTube acknowledged) |
| Technical Accessibility | 20% | 88/100 | 17.6 | +10 (robots.txt hardened) |
| **Total** | | | **65.2** | **+7.1** |

The +7-point improvement comes entirely from infrastructure fixes shipped 2026-05-10. The biggest remaining lever — **Citability (35/100, unchanged)** — requires content work (answer blocks, question-based headings, surfacing stats from FAQ schema into visible body text). That has not yet been done.

---

## Platform Breakdown

| Platform | Score | Notes |
|----------|-------|-------|
| **Google AI Overviews** | 72/100 | Strong traditional SEO, FAQ schema, SSR, complete sameAs. Still weak on citable answer blocks. |
| **ChatGPT** | 52/100 | llms.txt now accurate (TikTok removed). Schema sameAs complete. Still no Wikipedia/Wikidata entity. No Reddit mentions. |
| **Perplexity** | 48/100 | Zero Reddit presence (Perplexity's #1 citation source). YouTube channel exists but content depth unknown. |

---

## AI Crawler Access Status

| Crawler | Owner | Status | Disallows |
|---------|-------|--------|-----------|
| GPTBot | OpenAI | **Allowed** (explicit) | Matches `User-agent: *` |
| ChatGPT-User | OpenAI | **Allowed** (explicit) | Matches `User-agent: *` |
| OAI-SearchBot | OpenAI | **Allowed** (explicit, new 2026-05-10) | Matches `User-agent: *` |
| ClaudeBot | Anthropic | **Allowed** (explicit) | Matches `User-agent: *` |
| CCBot | Common Crawl | **Allowed** (explicit) | Matches `User-agent: *` |
| PerplexityBot | Perplexity | **Allowed** (explicit) | Matches `User-agent: *` |
| Google-Extended | Google | **Allowed** (explicit) | Matches `User-agent: *` |
| Bytespider | ByteDance | **Blocked** (explicit, new 2026-05-10) | All paths |
| cohere-ai | Cohere | **Blocked** (explicit, new 2026-05-10) | All paths |

**Verdict: Strong.** 7 AI crawlers explicitly allowed for citation visibility. 2 training-only crawlers explicitly blocked. Private/staging pages (thank-yous, footer-showcase, convention-headshots, headshot-booth, homepage-mockup) are now properly disallowed for AI crawlers as well as Google.

---

## llms.txt Status: PRESENT — High Quality

- Location: `public/llms.txt` (live at `/llms.txt`)
- Last updated: 2026-05-10
- Includes: business description, all 12 service types, differentiators, pricing, studio details, contact info, 5 social profiles (Facebook, Instagram, LinkedIn, YouTube, Pinterest), 12 key page URLs
- **TikTok line removed 2026-05-10** — Cindy does not actively use the account; claiming it harmed AI crawler trust
- Review count updated 130+ → 133+

One of the better llms.txt implementations for a local service business.

---

## Brand Mention Analysis

| Platform | Present? | Strength | Notes |
|----------|----------|----------|-------|
| **Wikipedia** | No | — | No article for CMQ Headshots or Cindy Quinn |
| **Wikidata** | No | — | No entity |
| **Reddit** | No | — | Zero mentions in any subreddit |
| **YouTube** | Yes (channel) | Minimal | Channel exists at @cmqheadshots8437 — content depth not assessed in this rewrite |
| **LinkedIn** | Yes | Moderate | Personal profile, published article. Now in sameAs schemas + footer |
| **Google Business** | Yes | **Strong** | 133+ five-star reviews, 14+ years operating |
| **Yelp** | Yes | Moderate | 72 photos, 11 reviews, Top 10 Corporate list |
| **BBB** | Yes | Moderate | Accredited |
| **Directories** | Yes | Moderate | Thumbtack, Headshot Crew, HeadshotPhoto.io, Dreamwave "15 Best" list |
| **Facebook** | Yes | Moderate | Now in sameAs schemas + footer |
| **Instagram** | Yes | Moderate | In sameAs schemas + footer (unchanged) |
| **Pinterest** | Yes | Moderate | Now in sameAs schemas + footer |
| **TikTok** | No | — | Account not actively used. Removed from llms.txt 2026-05-10 |

**Key stat:** Brand mentions correlate 3x more with AI visibility than backlinks (Ahrefs Dec 2025). The three biggest remaining gaps — **Reddit, Wikipedia, YouTube content depth** — are the three strongest AI citation sources.

---

## Passage-Level Citability

**Current state: WEAK (35/100) — UNCHANGED from 2026-04-05**

The infrastructure fixes shipped 2026-05-10 did not address content-level citability. The original findings still hold:

1. **No definition patterns.** No page starts a section with "Professional headshots are..." or "Corporate headshots are..." — the content jumps into sales copy
2. **Key statistics buried.** The strongest citable data (21x LinkedIn views, 36x messages, 70% hiring manager rejection) lives only in FAQ schema JSON, not in visible body text
3. **No question-based H2/H3 headings.** Every H2 is a keyword label ("CORPORATE PHOTOGRAPHER PHOENIX"), not a question ("How Much Do Corporate Headshots Cost in Phoenix?")
4. **FAQ content trapped at bottom.** Good Q&A content exists but lives in collapsed accordions at page bottom — not in the main content flow where AI crawlers prioritize

**What works:**
- FAQ answers are topically relevant and specific
- Pricing is transparent ($250 session + $100/image)
- Studio details are concrete (address, parking, hours)

**Why this score has not moved:** Citability is content work, not configuration. It requires writing 134-167 word answer blocks below H2s, converting some H2s to question form, and surfacing key statistics. That work is out of scope for the 2026-05-10 GEO infrastructure pass — it deserves its own content-focused plan.

---

## Server-Side Rendering Check

**Status: GOOD (78/100) — UNCHANGED**

- Next.js SSR confirmed — no `output: 'export'`
- All page content renders server-side
- FAQ schema uses `next/head` for SSR
- `dynamic()` imports (ThreeReviewSection, AccordionFAQSection, VideoSection) still render server-side by default in Next.js SSR
- Client-side `useState`/`useEffect` patterns are cosmetic only (slideshows, animations)

**One flag (unchanged):** All location pages (Scottsdale, Mesa, Tempe, Chandler, Gilbert) have `noindex={true}` in LocationPageTemplate. This is deliberate for thin-content protection but means these pages will never be cited by AI engines.

---

## Schema Markup for AI Discoverability

**Implemented (strong, updated 2026-05-10):**
- `ProfessionalService` (global) — address, geo, hours, **aggregateRating (133 reviews)**, **complete sameAs (6 platforms)**
- `WebSite` (global)
- `Person` (about page) — **complete sameAs (6 platforms)**
- `FAQPage` (per service page, 8-11 questions each)
- `Service` with `Offer` and price (per service page)
- `BreadcrumbList` (all pages)
- `BlogPosting` with author and dates (blog posts)
- `VideoObject` (homepage)

**Still missing (recommended):**
- `Speakable` — only on 2 blog posts, should be on all service pages to signal citable content
- `HowTo` — the "How New Hire Headshots Work" and "4 Step Process" sections are structured content without schema
- Individual `Review` — global `aggregateRating` exists but no individual review markup
- `ItemList` — homepage service carousel lacks it

---

## Changes since 2026-04-05 (what was fixed and when)

| Item | Status | Commit |
|---|---|---|
| Review count stale (130 → 133+) | ✅ Fixed | `d132931` |
| Schema sameAs missing LinkedIn/YouTube/Pinterest | ✅ Fixed | `12d1daf` |
| Person schema sameAs missing 4 platforms | ✅ Fixed | `12d1daf` |
| Footer missing Facebook, YouTube, Pinterest icons | ✅ Fixed | `fac095d` |
| robots.txt — AI crawlers not inheriting Disallows | ✅ Fixed | `c66728d` |
| robots.txt — OAI-SearchBot not explicit | ✅ Fixed | `c66728d` |
| robots.txt — Bytespider/cohere-ai allowed via wildcard | ✅ Fixed (blocked) | `c66728d` |
| llms.txt claiming TikTok that isn't actively used | ✅ Fixed (removed) | `c66728d` |
| sitemap.xml lastmod stale for 8 updated pages | ✅ Fixed | `c66728d` |

---

## Top 5 Highest-Impact Remaining Changes

### 1. Add Citable Answer Blocks to Every Service Page
**Impact: HIGH | Effort: LOW | Status: NOT STARTED**

Add a 134-167 word definition paragraph directly below each page's first H2. Start with a direct answer in the first 40-60 words. Example for corporate page:

> "Corporate staff headshots are professional photographs of your employees, taken with consistent lighting, background, and direction so every person on your website looks like they belong to the same team. At CMQ Headshots in Phoenix, corporate sessions run 10-15 minutes per person with professional hand retouching included..."

This is the single most impactful remaining change for AI citability.

### 2. Convert 2-3 H2s Per Page to Question Format
**Impact: HIGH | Effort: LOW | Status: NOT STARTED**

AI engines match content to user queries. Question-based headings directly match query patterns:
- "How Much Do Professional Headshots Cost in Phoenix?" (business page)
- "What Should I Wear to a Business Headshot Session?" (business page)
- "How Long Does a Corporate Headshot Session Take?" (corporate page)
- "Why Do Real Estate Agents Need Professional Headshots?" (realtor page)

Keep existing keyword H2s but add 2-3 question H2s with direct-answer paragraphs below them.

### 3. Surface Key Statistics Into Visible Body Text
**Impact: HIGH | Effort: LOW | Status: NOT STARTED**

Move the strongest data points from FAQ schema JSON into prominent visible content:
- "LinkedIn profiles with professional photos receive 21x more views and 36x more messages" — needs to be a visible callout on the LinkedIn page
- "70% of hiring managers have rejected candidates based on unprofessional photos" — same
- "133+ five-star Google reviews" — already a visible trust signal in body text; keep prominent

### 4. Build Reddit and YouTube Content Presence
**Impact: HIGH | Effort: MEDIUM (ongoing) | Status: NOT STARTED**

Reddit and YouTube content depth remain the two biggest brand mention gaps and the top citation sources for ChatGPT and Perplexity:
- **Reddit:** Answer headshot questions authentically in r/phoenix, r/headshots, r/realtors, r/acting. Build organic mentions over time.
- **YouTube:** Channel exists; populate with 3-5 short videos: "What to Wear to Your Headshot Session," "Professional vs AI Headshots Comparison," "Behind the Scenes at a Corporate Headshot Day." YouTube mentions have the strongest correlation (0.737) with AI citations.

### 5. Add Speakable Schema + Author Bylines to Service Pages
**Impact: MEDIUM | Effort: LOW | Status: NOT STARTED**

- Add `Speakable` schema to all service pages marking the intro answer block as the citable passage
- Add "By Cindy Quinn, Professional Headshot Photographer since 2012" byline to service pages
- Add visible "Last updated: [month year]" to service pages for freshness signals

---

## Content Reformatting Suggestions (carried forward from 2026-04-05, still open)

### Homepage (`src/pages/index.tsx`)
- Add a definition block below the "PROFESSIONAL HEADSHOTS PHOENIX" H2: "Professional headshots in Phoenix are studio-quality portraits designed for LinkedIn, corporate websites, and business marketing..."
- Surface the "20% military discount" and "30% return client discount" stats from FAQ into visible body text

### LinkedIn Page (`src/pages/linkedin-headshots.tsx`)
- Create a visible data callout section above the fold with the 21x/36x/70% stats
- Add an H2: "Are AI Headshots Good Enough for LinkedIn?" with a direct-answer paragraph (the FAQ already covers this — promote it)

### Corporate Page (`src/pages/corporate-staff-headshots.tsx`)
- Add H2: "How Much Do Corporate Headshots Cost in Phoenix?" with answer block including pricing
- Add H2: "How Long Does a Corporate Headshot Session Take?" with "10-15 minutes per person" answer block
- Add `HowTo` schema to the "How New Hire Headshots Work" section

### Business Page (`src/pages/phoenix-business-headshots.tsx`)
- Add a pricing comparison table: Standard Session vs LinkedIn Express vs Corporate (price, duration, deliverables, turnaround)
- Add H2: "What Should I Wear to a Business Headshot Session?" with citable answer

### Realtor Page (`src/pages/realtor-headshots-phoenix.tsx`)
- Add H2: "Why Do Real Estate Agents Need Professional Headshots?" with direct answer citing the billboard case study
- The billboard story is a unique, citable differentiator — make it more prominent with its own heading

---

## Quick Wins Checklist

**Done (2026-05-10):**
- [x] Add explicit `OAI-SearchBot` allow to robots.txt
- [x] Block `Bytespider` and `cohere-ai` in robots.txt
- [x] Update review count in schema + visible body text
- [x] Complete schema sameAs (LinkedIn, YouTube, Pinterest)
- [x] Add Facebook, YouTube, Pinterest icons to footer
- [x] Remove TikTok from llms.txt

**Still open:**
- [ ] Add 134-167 word answer blocks below first H2 on each service page
- [ ] Convert 2-3 H2s per page to question format
- [ ] Move LinkedIn stats (21x, 36x, 70%) into visible body text
- [ ] Add `Speakable` schema to all service pages
- [ ] Add author byline + "Last updated" date to service pages

## Medium-Term Actions

- [ ] Add `HowTo` schema to process sections
- [ ] Add individual `Review` schema for featured testimonials
- [ ] Add pricing comparison table to business headshots page
- [ ] Create "AI Headshots vs Professional" comparison content on LinkedIn page
- [ ] Build YouTube channel content (3-5 headshot tip videos)
- [ ] Start organic Reddit participation in r/phoenix and photography subs

## Long-Term / High-Impact Actions

- [ ] Create Wikidata entity for CMQ Headshots
- [ ] Pursue local press coverage (Phoenix New Times, AZ Central)
- [ ] Create original research content (e.g., "2026 Phoenix Headshot Pricing Survey")
- [ ] Build LinkedIn Company Page separate from personal profiles
