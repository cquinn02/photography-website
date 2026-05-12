# Schema.org Structured Data Audit — cmqheadshots.com
**Date:** 2026-05-11
**Scope:** 24 sitemap URLs, sample 10 representative pages
**Method:** Static analysis of `src/components/Layout.tsx`, `src/components/FAQSchema.tsx`, and page-level `<Head>` JSON-LD blocks in `src/pages/`

---

## Executive Summary

| Status | Finding |
|---|---|
| OK | Global `ProfessionalService` + `WebSite` schema injected via `Layout.tsx` runs on every page, server-rendered in initial HTML |
| OK | `AggregateRating` (5.0 / 133) consistent on Layout + reviews page, sourced from `content/review-stats.json` |
| ACTION | 2 blog posts use **deprecated `HowTo`** schema (rich results retired Sep 2023) — remove |
| ACTION | **`FAQPage`** schema in use on 13 pages — restricted to gov/healthcare since Aug 2023, no rich result benefit, recommend strip from on-page injection (keep visible Q&A copy) |
| ACTION | 10 location pages (`/headshots-scottsdale`, `/headshots-mesa`, etc.) have **zero page-level schema** — missing `Service` + `BreadcrumbList` |
| ACTION | 12 of 14 blog posts have **no `BlogPosting` / `Article` schema** |
| ACTION | `/reviews` page schema uses `reviewCount` instead of `ratingCount`; `ratingValue` is a string (`"5.0"`) instead of number |
| ACTION | Global Layout duplicates `ProfessionalService` on `/reviews` and `/contact-us` without `@id` reuse — risk of duplicate entity confusion |

---

## 1. Inventory — Schema by Page (sampled)

| Page | Global (Layout) | Page-level types |
|---|---|---|
| `/` (homepage) | ProfessionalService, WebSite | VideoObject, FAQPage |
| `/about` | ProfessionalService, WebSite | Person, BreadcrumbList |
| `/reviews` | ProfessionalService, WebSite | BreadcrumbList, ProfessionalService (duplicate, with AggregateRating) |
| `/contact-us` | ProfessionalService, WebSite | BreadcrumbList, ContactPage (nested ProfessionalService + ContactPoint) |
| `/phoenix-business-headshots` | ProfessionalService, WebSite | Service, Offer, BreadcrumbList, FAQPage |
| `/linkedin-headshots` | ProfessionalService, WebSite | Service, Offer, BreadcrumbList, FAQPage |
| `/lawyer-headshots-phoenix` | ProfessionalService, WebSite | Service, Offer, BreadcrumbList, FAQPage |
| `/actor-headshots-phoenix` | ProfessionalService, WebSite | Service, Offer, BreadcrumbList, FAQPage |
| `/blog` | ProfessionalService, WebSite | CollectionPage, BreadcrumbList |
| `/blog/how-to-prep-for-your-best-professional-headshot` | ProfessionalService, WebSite | **HowTo (DEPRECATED)** |
| `/blog/what-to-wear-to-your-headshot-session` | ProfessionalService, WebSite | **HowTo (DEPRECATED)** |
| `/headshots-scottsdale` | ProfessionalService, WebSite | **none** |
| `/headshots-mesa` | ProfessionalService, WebSite | **none** |
| `/headshots-tempe`, `/headshots-chandler`, `/headshots-glendale`, `/headshots-peoria`, `/headshots-cave-creek`, `/headshots-fountain-hills`, `/headshots-gilbert`, `/headshots-paradise-valley`, `/headshots-east-valley` | ProfessionalService, WebSite | **none** (cave-creek has FAQ only) |

Service pages with full schema (Service + Offer + Breadcrumb + FAQ): `phoenix-business-headshots`, `corporate-staff-headshots`, `linkedin-headshots`, `actor-headshots-phoenix`, `realtor-headshots-phoenix`, `lawyer-headshots-phoenix`, `modeling-headshots-phoenix`, `eras-medical-headshots`, `team-composite-headshots`, `convention-headshots-phoenix`, `headshot-booth-phoenix`. The duplicate `lawyer-headshots-phoenix-2` URL was not separately reviewed; assume it mirrors `lawyer-headshots-phoenix`.

---

## 2. Validation — Errors & Warnings

### Errors (will fail or downgrade in Rich Results Test)

**`/reviews` ProfessionalService.aggregateRating**
`src/pages/reviews.tsx:176-181`
- Uses `reviewCount` (count of written reviews) where the global Layout uses `ratingCount` (count of star ratings). These mean different things; pick one consistently. Google accepts either, but mixing them across the same entity is a smell.
- `ratingValue: avgRating` is a JS string (`"5.0"` from `toFixed(1)`). Schema.org spec allows string or number; Google prefers number. Same file uses `"bestRating": "5"` and `"worstRating": "1"` as strings — should be numbers `5` and `1`.

**`/blog/how-to-prep-for-your-best-professional-headshot` HowTo**
`src/pages/blog/how-to-prep-for-your-best-professional-headshot.tsx:31`
- `HowTo` rich results were retired by Google in September 2023. The markup is still valid Schema.org but generates no SERP benefit. Remove it.

**`/blog/what-to-wear-to-your-headshot-session` HowTo**
`src/pages/blog/what-to-wear-to-your-headshot-session.tsx:31`
- Same as above. Remove.

### Warnings

**Global `ProfessionalService` (Layout.tsx:8-93)**
- `aggregateRating.ratingValue` is the number `5.0` (good).
- `aggregateRating.bestRating` and `worstRating` are numbers (good).
- `ratingCount: 133` matches `content/review-stats.json`.
- Missing recommended fields: `priceRange` is present (`"$$"`), but no `hasMap`, no `email`, no `paymentAccepted`, no `currenciesAccepted`.
- The `@type` is `ProfessionalService`. For a photographer, `LocalBusiness` or the more specific `PhotographyBusiness` is acceptable; current value is fine and avoids the photo-album/portrait ambiguity of more niche types. Keep as is.

**`/reviews` second ProfessionalService block**
- Declared without `@id`, so search engines may treat it as a second business entity rather than the same one from Layout. Add `"@id": "https://www.cmqheadshots.com"` to mark them as the same entity.

**`/contact-us` ContactPage.mainEntity.ProfessionalService**
- Same `@id` reuse issue — nested ProfessionalService without `@id` reference back to global node.

**All service pages — `Service.provider`**
- `provider` references `@id: "https://www.cmqheadshots.com"` correctly (good), but also re-declares `name`, `telephone`, and `address`. Duplication is acceptable but `@id` alone would be cleaner.

**Service.offers.price values**
- Use plain strings (`"250"`, `"300"`). Should be the number form per Google's Offer guidelines: `"price": 250`. String works but number is preferred.

**Person schema (/about)**
- `worksFor` references `@id` correctly. Missing `birthDate`, `gender`, `address`, `alumniOf` — optional, but adds entity richness. Consider adding `description` and `mainEntityOfPage`.

---

## 3. Deprecated / Risky Usage

| Type | Status | Where | Action |
|---|---|---|---|
| **HowTo** | Rich results retired Sep 2023 | `blog/how-to-prep-for-your-best-professional-headshot.tsx`, `blog/what-to-wear-to-your-headshot-session.tsx` | **Remove both blocks.** Replace with `BlogPosting` schema. |
| **FAQPage** | Restricted to gov/healthcare authority sites since Aug 8, 2023 | 13 pages via `FAQSchema` component | **Recommend removing.** No rich result benefit for a photography studio. Keep the visible FAQ Q&A copy on the pages — that still helps users and AI Overviews scrape it without the markup. Markup itself is not penalized, but it adds payload weight for zero return. |
| SpecialAnnouncement | Deprecated Jul 31, 2025 | Not used | No action |
| ClaimReview | Restricted | Not used | No action |
| CourseInfo / EstimatedSalary / LearningVideo | Retired Jun 2025 | Not used | No action |

**Note on FAQ:** Cindy can also keep the markup if she values it for non-SERP purposes (e.g., voice assistants, third-party AI crawlers, internal CMS use). The Aug 2023 restriction means Google will not surface a FAQ rich result, not that the markup is forbidden. If kept, ensure visible Q&A text exactly matches each `Question.name` / `acceptedAnswer.text` value to avoid spam classification.

---

## 4. JS Rendering Check (SSR vs client)

All JSON-LD on this site is emitted via `next/head` `<script type="application/ld+json">` blocks inside SSR-rendered pages. Next.js 15 with the Pages Router (no `output: 'export'`, no `images.unoptimized`) renders these into the initial HTML response on AWS Amplify SSR.

Verified by code path:
- `Layout.tsx` lines 167-174 — emits global `ProfessionalService` + `WebSite` via `Head` in the SSR render tree.
- Per-page schema (e.g., `phoenix-business-headshots.tsx` lines 91-150) is also inside `<Head>` at top level, before any `dynamic()` client-only chunks.
- `dynamic()` imports in `index.tsx` (`ServiceCarousel`, `ThreeReviewSection`, `VideoSection`, `FAQSection`) are below-the-fold UI components, not schema carriers. Schema is in the static `<Head>` of the page component.

**Conclusion:** Schema is server-rendered in initial HTML. No client-side hydration delay for crawlers. Compliant with Dec 2025 guidance.

To confirm in production, run:
```
curl -s https://www.cmqheadshots.com/ | grep -c 'application/ld+json'
```
Expected: at least 4 on homepage (global ProfessionalService + WebSite + VideoObject + FAQPage).

---

## 5. AggregateRating Consistency Check

**Source of truth:** `content/review-stats.json` — `totalReviews: 133`, `averageRating: 5.0`, auto-refreshed by `scripts/fetch-review-stats.mjs`.

| Location | `ratingValue` | Count field | Value | Status |
|---|---|---|---|---|
| `Layout.tsx` (global, every page) | `5.0` (number) | `ratingCount` | `133` | OK — but hardcoded, not pulled from `review-stats.json`. Will drift on next weekly refresh unless the fetch script also patches this file. |
| `/reviews` page | `avgRating` (computed string from JSON of all reviews) | `reviewCount` | `googleTotalReviews` (133, from `review-stats.json`) | OK at runtime; but field name differs and `ratingValue` is a string. |

**Risk:** When the weekly cron runs `fetch-review-stats.mjs` and the count moves to 134+, the hardcoded `133` in `Layout.tsx` line 91 will not auto-update unless the script patches it. Recommend the fetch script also overwrite `ratingCount: <n>` in `Layout.tsx`, OR (cleaner) refactor Layout to read from `review-stats.json` at build time via `getStaticProps` or import.

**No other pages declare their own `AggregateRating`.** Service pages defer to the global Layout schema, which is correct.

---

## 6. Missing Opportunities (Prioritized)

### Tier 1 — High value, low effort

1. **`BlogPosting` schema on the 12 blog posts that lack any article schema.** Posts already have author (Cindy Quinn), publish/update dates, and hero images. Standard `BlogPosting` is well supported and eligible for Article rich results.

2. **`Service` + `BreadcrumbList` on the 10 location pages.** These pages currently get only the generic Layout-level `ProfessionalService`. Adding a page-scoped `Service` with `areaServed` pointing to that specific city (e.g., Scottsdale) tightens topical relevance.

3. **Add `@id` cross-reference** on `/reviews` and `/contact-us` nested `ProfessionalService` nodes so they deduplicate to the global entity.

### Tier 2 — Medium value

4. **`ImageObject` on key hero portraits.** Cindy's hero photographs are the brand's primary asset. Marking them with `ImageObject` (license, creditText, copyrightNotice, acquireLicensePage) protects against AI scraping confusion and qualifies for Google Image licensing metadata.

5. **`Review` schema for individual review cards on `/reviews`.** Currently only `AggregateRating` is declared. Adding 5-10 representative `Review` objects with `author`, `reviewBody`, `datePublished`, and `reviewRating` enriches the entity. Note: do NOT request review snippets via `AggregateRating` outside `LocalBusiness` / `Product` contexts (already correct here).

6. **`ProfilePage` wrapper on `/about`** so the Person node is the `mainEntity` of an explicit profile page. This is the canonical pattern for personal-brand bios as of 2024 Google guidance.

### Tier 3 — Nice to have

7. **`VideoObject` for any additional studio walkthrough or testimonial videos** beyond the single homepage video.

8. **`Photograph` (subtype of `CreativeWork`)** on portfolio galleries — emerging support, low risk.

9. **`hasOfferCatalog` on the global `ProfessionalService`** linking all service offerings (Business, LinkedIn, Actor, Realtor, etc.) as a single catalog. Useful for AI Overviews.

---

## 7. Recommended Actions (Ordered)

1. **Strip `HowTo`** from the 2 blog posts. Replace with `BlogPosting` (see `generated-schema.json` #1).
2. **Decide on FAQPage:** strip from on-page injection, OR keep with strict text-match policy. My recommendation: **strip** to reduce payload and align with Google's restriction. The visible Q&A copy stays.
3. **Add `BlogPosting`** to all 14 blog posts (snippet template in `generated-schema.json` #1).
4. **Add `Service` + `BreadcrumbList`** to the 10 location pages (snippet in `generated-schema.json` #2 — Scottsdale shown; template applies to all 10).
5. **Fix `/reviews` schema:** change `reviewCount` → `ratingCount`, use number types for `ratingValue` / `bestRating` / `worstRating`, add `@id` to dedupe with global entity (snippet #3).
6. **Source `ratingCount` from `review-stats.json`** in `Layout.tsx` (build-time import or have the fetch script patch the file). Patch list in `scripts/fetch-review-stats.mjs`.
7. **Add `ProfilePage` wrapper on `/about`** (snippet #4).
8. **Add `ImageObject` to hero portrait references** site-wide (snippet #5).

---

## Files Reviewed

- `src/components/Layout.tsx`
- `src/components/FAQSchema.tsx`
- `src/pages/index.tsx`
- `src/pages/about.tsx`
- `src/pages/reviews.tsx`
- `src/pages/contact-us.tsx`
- `src/pages/blog.tsx`
- `src/pages/phoenix-business-headshots.tsx`
- `src/pages/corporate-staff-headshots.tsx`
- `src/pages/linkedin-headshots.tsx`
- `src/pages/lawyer-headshots-phoenix.tsx`
- `src/pages/actor-headshots-phoenix.tsx`
- `src/pages/realtor-headshots-phoenix.tsx`
- `src/pages/blog/how-to-prep-for-your-best-professional-headshot.tsx`
- `src/pages/blog/what-to-wear-to-your-headshot-session.tsx`
- 10 location pages confirmed schema-free (no JSON-LD beyond Layout)
- `content/review-stats.json`
