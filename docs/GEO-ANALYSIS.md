# GEO Analysis — cmqheadshots.com

**Date:** 2026-04-05
**Site:** www.cmqheadshots.com
**Business:** CMQ Headshots — Professional headshot photography, Phoenix AZ

---

## GEO Readiness Score: 58/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Citability (answer blocks) | 25% | 35/100 | 8.75 |
| Structural Readability | 20% | 55/100 | 11.0 |
| Multi-Modal Content | 15% | 82/100 | 12.3 |
| Authority & Brand Signals | 20% | 52/100 | 10.4 |
| Technical Accessibility | 20% | 78/100 | 15.6 |
| **Total** | | | **58.1** |

---

## Platform Breakdown

| Platform | Score | Notes |
|----------|-------|-------|
| **Google AI Overviews** | 65/100 | Strong traditional SEO, FAQ schema, SSR. Weak on citable answer blocks. |
| **ChatGPT** | 42/100 | No Wikipedia/Wikidata entity. No Reddit mentions. llms.txt helps. |
| **Perplexity** | 38/100 | Zero Reddit presence (Perplexity's #1 citation source). No YouTube. |

---

## AI Crawler Access Status

| Crawler | Owner | Status |
|---------|-------|--------|
| GPTBot | OpenAI | **Allowed** (explicit) |
| ChatGPT-User | OpenAI | **Allowed** (explicit) |
| OAI-SearchBot | OpenAI | Allowed (wildcard — not explicit) |
| ClaudeBot | Anthropic | **Allowed** (explicit) |
| PerplexityBot | Perplexity | **Allowed** (explicit) |
| Google-Extended | Google | **Allowed** (explicit) |
| CCBot | Common Crawl | **Allowed** (explicit) |
| Bytespider | ByteDance | Allowed (wildcard — consider blocking) |
| cohere-ai | Cohere | Allowed (wildcard — consider blocking) |

**Verdict:** Strong. 6 AI crawlers explicitly allowed. Consider adding explicit `OAI-SearchBot` allow and blocking `Bytespider`/`cohere-ai` (training-only crawlers that don't drive traffic back).

**Minor issue:** Individual AI crawler blocks don't inherit `Disallow` rules from `User-agent: *`. Thank-you pages and mockups are crawlable by AI bots. Low risk if those pages have `noindex` meta tags.

---

## llms.txt Status: PRESENT — High Quality

- Location: `public/llms.txt` (live at `/llms.txt`)
- Last updated: 2026-03-28
- Includes: business description, all 12 service types, differentiators, pricing, studio details, contact info, social links, 12 key page URLs
- **One of the better llms.txt implementations for a local service business.**

---

## Brand Mention Analysis

| Platform | Present? | Strength | Notes |
|----------|----------|----------|-------|
| **Wikipedia** | No | — | No article for CMQ Headshots or Cindy Quinn |
| **Wikidata** | No | — | No entity |
| **Reddit** | No | — | Zero mentions in any subreddit |
| **YouTube** | No | — | No channel, no videos |
| **LinkedIn** | Yes | Moderate | Personal profile (500+ connections), published article |
| **Google Business** | Yes | **Strong** | 129 five-star reviews, 12+ years operating |
| **Yelp** | Yes | Moderate | 72 photos, 11 reviews, Top 10 Corporate list |
| **BBB** | Yes | Moderate | Accredited |
| **Directories** | Yes | Moderate | Thumbtack, Headshot Crew, HeadshotPhoto.io, Dreamwave "15 Best" list |
| **Social** | Yes | Moderate | Facebook, Instagram, Pinterest all present |

**Key stat:** Brand mentions correlate 3x more with AI visibility than backlinks (Ahrefs Dec 2025). The three biggest gaps — Reddit, YouTube, Wikipedia — are the three strongest AI citation sources.

---

## Passage-Level Citability

**Current state: WEAK (35/100)**

No page has a clear, self-contained 134-167 word answer block optimized for AI citation. Specific issues:

1. **No definition patterns.** No page starts a section with "Professional headshots are..." or "Corporate headshots are..." — the content jumps into sales copy
2. **Key statistics buried.** The strongest citable data (21x LinkedIn views, 36x messages, 70% hiring manager rejection) lives only in FAQ schema JSON, not in visible body text
3. **No question-based H2/H3 headings.** Every H2 is a keyword label ("CORPORATE PHOTOGRAPHER PHOENIX"), not a question ("How Much Do Corporate Headshots Cost in Phoenix?")
4. **FAQ content trapped at bottom.** Good Q&A content exists but lives in collapsed accordions at page bottom — not in the main content flow where AI crawlers prioritize

**What works:**
- FAQ answers are topically relevant and specific
- Pricing is transparent ($250 session + $100/image)
- Studio details are concrete (address, parking, hours)

---

## Server-Side Rendering Check

**Status: GOOD (78/100)**

- Next.js SSR confirmed — no `output: 'export'`
- All page content renders server-side
- FAQ schema uses `next/head` for SSR
- `dynamic()` imports (ThreeReviewSection, AccordionFAQSection, VideoSection) still render server-side by default in Next.js SSR
- Client-side `useState`/`useEffect` patterns are cosmetic only (slideshows, animations)

**One flag:** All location pages (Scottsdale, Mesa, Tempe, Chandler, Gilbert) have `noindex={true}` in LocationPageTemplate. This is deliberate for thin-content protection but means these pages will never be cited by AI engines.

---

## Schema Markup for AI Discoverability

**Implemented (strong):**
- `ProfessionalService` (global, with address, geo, hours, aggregateRating)
- `WebSite` (global)
- `FAQPage` (per service page, 8-11 questions each)
- `Service` with `Offer` and price (per service page)
- `BreadcrumbList` (all pages)
- `BlogPosting` with author and dates (blog posts)
- `Person` for Cindy Quinn (about page)
- `VideoObject` (homepage)

**Missing (recommended):**
- `Speakable` — only on 2 blog posts, should be on all service pages to signal citable content
- `HowTo` — the "How New Hire Headshots Work" and "4 Step Process" sections are structured content without schema
- Individual `Review` — global `aggregateRating` exists but no individual review markup
- `ItemList` — homepage service carousel lacks it

---

## Top 5 Highest-Impact Changes

### 1. Add Citable Answer Blocks to Every Service Page
**Impact: HIGH | Effort: LOW**

Add a 134-167 word definition paragraph directly below each page's first H2. Start with a direct answer in the first 40-60 words. Example for corporate page:

> "Corporate staff headshots are professional photographs of your employees, taken with consistent lighting, background, and direction so every person on your website looks like they belong to the same team. At CMQ Headshots in Phoenix, corporate sessions run 10-15 minutes per person with professional hand retouching included..."

This is the single most impactful change for AI citability.

### 2. Convert 2-3 H2s Per Page to Question Format
**Impact: HIGH | Effort: LOW**

AI engines match content to user queries. Question-based headings directly match query patterns:
- "How Much Do Professional Headshots Cost in Phoenix?" (business page)
- "What Should I Wear to a Business Headshot Session?" (business page)
- "How Long Does a Corporate Headshot Session Take?" (corporate page)
- "Why Do Real Estate Agents Need Professional Headshots?" (realtor page)

Keep existing keyword H2s but add 2-3 question H2s with direct-answer paragraphs below them.

### 3. Surface Key Statistics Into Visible Body Text
**Impact: HIGH | Effort: LOW**

Move the strongest data points from FAQ schema JSON into prominent visible content:
- "LinkedIn profiles with professional photos receive 21x more views and 36x more messages" — needs to be a visible callout on the LinkedIn page
- "70% of hiring managers have rejected candidates based on unprofessional photos" — same
- "129 five-star Google reviews" — use as a visible trust signal, not just schema

### 4. Build Reddit and YouTube Presence
**Impact: HIGH | Effort: MEDIUM (ongoing)**

These are the two biggest brand mention gaps and the top citation sources for ChatGPT and Perplexity:
- **Reddit:** Answer headshot questions authentically in r/phoenix, r/headshots, r/realtors, r/acting. Build organic mentions over time.
- **YouTube:** Create 3-5 short videos: "What to Wear to Your Headshot Session," "Professional vs AI Headshots Comparison," "Behind the Scenes at a Corporate Headshot Day." YouTube mentions have the strongest correlation (0.737) with AI citations.

### 5. Add Speakable Schema + Author Bylines to Service Pages
**Impact: MEDIUM | Effort: LOW**

- Add `Speakable` schema to all service pages marking the intro answer block as the citable passage
- Add "By Cindy Quinn, Professional Headshot Photographer since 2012" byline to service pages
- Add visible "Last updated: [month year]" to service pages for freshness signals

---

## Content Reformatting Suggestions

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

- [ ] Add 134-167 word answer blocks below first H2 on each service page
- [ ] Convert 2-3 H2s per page to question format
- [ ] Move LinkedIn stats (21x, 36x, 70%) into visible body text
- [ ] Add `Speakable` schema to all service pages
- [ ] Add author byline + "Last updated" date to service pages
- [ ] Add explicit `OAI-SearchBot` allow to robots.txt
- [ ] Block `Bytespider` and `cohere-ai` in robots.txt

## Medium-Term Actions

- [ ] Add `HowTo` schema to process sections
- [ ] Add individual `Review` schema for featured testimonials
- [ ] Add pricing comparison table to business headshots page
- [ ] Create "AI Headshots vs Professional" comparison content on LinkedIn page
- [ ] Build YouTube channel with 3-5 headshot tip videos
- [ ] Start organic Reddit participation in r/phoenix and photography subs

## Long-Term / High-Impact Actions

- [ ] Create Wikidata entity for CMQ Headshots
- [ ] Pursue local press coverage (Phoenix New Times, AZ Central)
- [ ] Create original research content (e.g., "2026 Phoenix Headshot Pricing Survey")
- [ ] Build LinkedIn Company Page separate from personal profiles
