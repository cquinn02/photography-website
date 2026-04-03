# Session Log — March 15, 2026

## Summary
Major session focused on SEO keyword optimization, unique review distribution, and About page overhaul. Multiple pages deployed to production.

---

## Reviews — Unique Across All Pages

Replaced duplicate reviews across the site. Every page now has unique reviews (30 total across 10 pages). No reviewer appears on more than one page.

| Page | Reviews |
|------|---------|
| Homepage | Chad Noonan, Adwoa John, Lisa Sallee, Carol Herron, Shawn Wilson, Ronlyn Griggs (unchanged) |
| Business Headshots | Denise Andrade, Scott Anderson, Jenny Bolt (unchanged) |
| Corporate Staff | Megan Baez, Annie Talbot, Molly Smith (new — replaced blockquotes with ThreeReviewSection) |
| Actor | Klydie Miller, Michelle Kass, Nikki Demicelli (new — replaced AI-written reviews with real Google reviews) |
| LinkedIn | Thuyvu Ho, KRUE Industrial, Michael Millane (new — section didn't exist before) |
| Realtor | Holly Jeppesen, Alexa Clancy, Dalton McBride (new — replaced duplicates + placeholder) |
| Lawyer | Sarah Neves, Ken Crane, Erin Tisland (new — replaced 3 duplicates) |
| Modeling | Gabrielle Brennan, Corrine Noele, Jacob Alvarado Garcia (new — replaced homepage duplicates) |
| Team Composite | Stephanie Eidelman, Spencer Hopkin, Cami Collins (new — replaced blockquote with ThreeReviewSection) |
| Headshot Booth | Anna H., Brad Kostner, Jose Sande (new — replaced duplicates) |

**Status:** Actor, realtor, lawyer, headshot booth, modeling, team composite, linkedin reviews are committed locally but NOT pushed to production (only corporate staff was pushed). Cindy hasn't fully reviewed all pages yet.

---

## SEO Keyword Optimization — Business Headshots Page (PUSHED)

Used GSC data to optimize H1/H2s to match actual search queries:

| Element | Before | After | GSC Data |
|---------|--------|-------|----------|
| H1 | PHOENIX BUSINESS HEADSHOTS | BUSINESS HEADSHOTS PHOENIX | 26 impressions, pos 4.0 |
| H2 | PHOENIX BUSINESS HEADSHOTS | PHOENIX BUSINESS HEADSHOT | 15 impressions, pos 3.3 |
| H2 | BUSINESS HEADSHOTS PHOENIX | BUSINESS HEADSHOT | 12 impressions, pos 4.8 |
| H2 | PROFESSIONAL BUSINESS HEADSHOTS & PORTRAITS | PROFESSIONAL HEADSHOTS PHOENIX | 15 impressions, pos 7.1 |
| Title tag | Phoenix Business Headshots \| Business Headshot Photography \| CMQ Headshots | Business & Executive Headshots Phoenix \| CMQ Headshots | — |

Added new **Executive Headshots** section with three H2s:
- EXECUTIVE HEADSHOTS PHOENIX (3 impressions, pos 4.3)
- EXECUTIVE HEADSHOT PHOTOGRAPHER (17 impressions, pos 64 — biggest opportunity)
- EXECUTIVE HEADSHOTS NEAR ME (1 impression, pos 1)

Added Fortune 500 client mentions: Berkshire Hathaway, GoDaddy, Insight Enterprises, McKesson, Chase, State Farm.

---

## SEO Keyword Optimization — Corporate Staff Page (PUSHED)

| Element | Before | After | GSC Data |
|---------|--------|-------|----------|
| H1 | CORPORATE STAFF HEADSHOTS IN PHOENIX WITHOUT THE HASSLE | CORPORATE HEADSHOTS PHOENIX | 534 impressions, pos 7.7 |
| H2 | TEAM HEADSHOTS AND GROUP CORPORATE HEADSHOTS | CORPORATE HEADSHOTS | 228 impressions, pos 5.2 |
| New H2 | — | CORPORATE HEADSHOTS NEAR ME | 175 impressions, pos 7.0 |
| H2 | STAFF HEADSHOTS IN PHOENIX AND SCOTTSDALE ARIZONA | STAFF HEADSHOTS IN PHOENIX AZ | — |

Key finding: "corporate staff headshots" has ZERO search impressions. "corporate headshots phoenix" has 534 impressions. Also identified cannibalization — Google was showing 5 different pages for this query.

---

## Realtor Page Changes (PUSHED)

- Moved pricing/calendar section up to right after the Nikki 4-image row
- Changed "Scottsdale studio" to "Phoenix studio" in What to Expect section
- Standardized all paragraph font sizes to text-xl (20px) per style guide
- H2→H3 change for "EVERY REALTOR SESSION INCLUDES" (done earlier in session)

---

## About Page Overhaul (PUSHED)

Transformed from weakest page (431 words, audit score 62/100) to ~1,300 words:

**New credentials added:**
- Peter Hurley Headshot Crew — Associate Photographer designation
- Published Work — image in composite book (book name TBD)
- Fortune 500 clients (same list as business page)
- Associate's degree in Computer Science
- Realtor expertise — Coldwell Banker history

**New sections:**
- 3 side-by-side client review sections with real headshots:
  1. Rachael (Rachel Elliot8161.jpg)
  2. Rodney Jackson (RodneyJackson2576.jpg)
  3. Sophia Hsieh (CMQHEADSHOTS-Sophia4485-sq.jpg)
- "Published Work" — own H3 section
- "My Job Is My Passion" — 4 paragraphs of personal/professional content
- Replaced icon cards with full paragraphs in "What Sets Me Apart"

**Other fixes:**
- All "12 years" → "14 years" across content/about.md
- Fixed slideshow transition — removed fade effect, back to instant frame swap (GIF-like)
- Added Star icon import
- Added commitmentParagraph3 support to TypeScript interface

---

## Homepage Changes (PUSHED)

- Title tag shortened: "Headshots Phoenix | 5-Star Rated Photographer | CMQ Headshots" (62 chars) → "Headshots Phoenix | 5-Star Photographer | CMQ Headshots" (56 chars)
- Meta description: "12+ years" → "14 years"

---

## SEO Quick Wins (PUSHED)

All in Layout.tsx and linkedin-headshots.tsx:
1. Homepage meta description: "12+" → "14 years"
2. AggregateRating ratingCount: 129 → 130
3. LinkedIn Service schema: added telephone and PostalAddress to provider
4. Twitter Card meta tags: added `summary_large_image` via NextSeo
5. Google Business Profile URL added to sameAs array

---

## Schema & SERP Audit

Created `docs/schema-serp-audit.md` documenting all 9 service pages' title tags, meta descriptions, and schema types.

---

## Full SEO Audit Completed

Ran 3-agent audit (Technical, Schema, Content). Overall score: 81/100.

Key findings saved but not all acted on yet:
- Technical SEO: 82/100 — security headers perfect, missing Twitter cards (fixed), stale sitemap dates
- Schema: 85/100 — FAQPage won't produce rich results (Google restricted since Aug 2023), VideoObject missing embedUrl
- Content: 78/100 — About page was 62/100 (now overhauled), actor page strongest at 88/100

---

## Stagnant Keyword Analysis

Analyzed 5 stagnant keywords with GSC data:

| Keyword | Recommendation |
|---------|---------------|
| corporate headshots Phoenix | Fix cannibalization (DONE — H1 change) |
| headshot photographer Phoenix | Pivot to "best headshot photographer phoenix" (244 impr, pos 6) |
| corporate photography Phoenix | DROP — wrong intent, only 2 impressions |
| best headshot photographer near me | GBP optimization, not page changes |
| linkedin headshots Phoenix | Hold at pos 4, target Scottsdale variant |

---

## Memory Updates

- Saved keyword ranking check reminder for May 2026 (`project_keyword_check.md`)

---

## Still TODO (Not Pushed)

- Review changes on actor, lawyer, modeling, headshot booth, team composite, linkedin pages — committed locally, not pushed
- About page: find composite book name for Published Work section
- Add BlogPosting schema to blog posts
- Add Person schema to About page (richer version)
- Fix actor page heading hierarchy (H2 → H3 for headshot types)
- Update sitemap lastmod dates
- Add "Realtor Headshots" as a service in Google Business Profile
- Stale keyword work: GBP optimization for "near me" queries

---

## GSC Schema Fix

Fixed two GSC warnings on VideoObject schema (homepage):
- "Datetime property uploadDate is missing a timezone"
- "Invalid datetime value for uploadDate"
- Changed `"2024-01-01"` → `"2024-01-01T00:00:00-07:00"` (ISO 8601 with Arizona/MST timezone)

---

## Commits Pushed Today

1. `226345c` — SEO: optimize business headshots H1/H2s, add executive section, reorder realtor page
2. `a7e39c0` — SEO: optimize corporate page H1/H2s, unique reviews, remove blockquotes
3. `1be56b9` — SEO: shorten homepage title to 56 chars
4. `febcf43` — Update about page: 12 years → 14 years
5. `bd8df47` — SEO quick wins: meta description, rating count, Twitter cards, schema fixes
6. `b3ce974` — Overhaul About page: credentials, reviews, expand content from 431 to ~1,300 words
7. *(pending)* — Fix VideoObject uploadDate timezone for GSC warnings
