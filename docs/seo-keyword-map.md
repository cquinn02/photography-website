# SEO Keyword-to-URL Map (Source of Truth)

**Purpose:** One primary keyword per page. This document prevents keyword cannibalization — before optimizing any page, check here so two pages never target the same term. The homepage owns BROAD terms; each spoke owns its NICHE term (hub-and-spoke model).

_Created 2026-06-09. Positions/impressions are from Google Search Console, trailing 90 days (2026-03-09 → 2026-06-09)._

---

## Rule
- **One page = one primary keyword.** Secondary keywords support it; they must not be another page's primary.
- **Homepage = broad hub.** It should NOT deep-target niche service terms (actor/corporate/etc.). Keep niche mentions brief; let the spoke own the depth.
- **Differentiate by intent + depth**, not just by label. Each spoke needs unique content its audience searches for.

---

## Tier 1 — Hub (broad terms)

| URL | Primary keyword | Secondary | GSC reality | Notes |
|---|---|---|---|---|
| `/` (homepage) | **headshot photographer Phoenix** | professional headshots Phoenix, headshots Phoenix, professional headshots near me, Arizona headshots | "professional headshots phoenix" #10.5 (490 impr); "professional headshots near me" #46 (1,422 impr); "professional headshots" #15 (1,125 impr) | Owns broad head terms. **Stop it deep-targeting niche service terms** — that's what's beating the actor/corporate/business spokes. |

---

## Tier 2 — Service spokes (niche terms)

| URL | Primary keyword | Secondary | GSC reality | Cannibalization status |
|---|---|---|---|---|
| `/phoenix-business-headshots` | **business headshots Phoenix** | business headshot photographer Phoenix, professional business headshots | "business headshot" → homepage #7.8 vs this page #25.8 | ⚠️ Homepage outranks it. Differentiate as the INDIVIDUAL business professional page. |
| `/corporate-staff-headshots` | **corporate headshots Phoenix** | on-location corporate headshots, office/staff headshots, mobile headshot photographer | "corporate headshots" → homepage #12.9 (**175 impr**), this page absent; "phoenix corporate headshots" → homepage #3 vs this #50 | ⚠️⚠️ Biggest opportunity. Differentiate as ON-LOCATION / staff / volume. |
| `/team-composite-headshots` | **team composite headshots** | team composite photography, group composite, virtual team photo | low volume | ✅ Distinct intent (compositing). Keep it clearly about composites, not "team headshots" generally. |
| `/actor-headshots-phoenix` | **actor headshots Phoenix** | theatrical headshots, commercial headshots, acting headshots near me | "actor headshots" → homepage #4.2, this page absent; "actor headshots near me" → this page #2.3 ✅ | ⚠️ Homepage wins head term. Deepen actor-only intent. |
| `/realtor-headshots-phoenix` | **realtor headshots Phoenix** | real estate headshots Phoenix, real estate agent headshots | "real estate headshots phoenix" → this page #4 ✅; "realtor headshots phoenix" → homepage #12 vs this #16 | ⚠️ Borderline. |
| `/lawyer-headshots-phoenix` | **lawyer headshots Phoenix** | attorney headshots Phoenix, law firm headshots | "lawyer headshots phoenix" #1.5 ✅; "attorney headshot phoenix" #1.3 ✅ | ✅ Winning. Leave alone. |
| `/linkedin-headshots` | **LinkedIn headshots Phoenix** | LinkedIn profile photo, headshots for LinkedIn near me | "best linkedin headshots phoenix" #2.75 ✅ | ✅ Winning. Leave alone. |
| `/eras-medical-headshots` | **ERAS headshots Phoenix** | medical residency headshots, AAMC photo, ERAS Express | (service page) | ✅ Distinct. Blog post supports it. |
| `/modeling-headshots-phoenix` | **model headshots Phoenix** | modeling portfolio, comp cards, modeling digitals | "modeling digitals photographer near me" #1 (homepage) | 🚧 DRAFT — build out before indexing. Not in sitemap. |
| `/convention-headshots-phoenix` | **convention headshots Phoenix** | conference headshots, trade show headshots, event headshots | — | Distinct event intent. Not in sitemap (decide). |
| `/headshot-booth-phoenix` | **headshot booth Phoenix** | headshot booth rental, event headshot booth | — | Distinct event intent. Not in sitemap (decide). |

---

## Tier 3 — Location spokes (geo-modified)

Each primary = `headshots [city]` / `[city] headshots`. Low risk of competing with EACH OTHER (different cities). Real risk: **thin/duplicate "doorway" content** — Google penalizes near-identical location pages. Each needs genuinely unique local content (neighborhoods, directions, local references).

`/headshots-scottsdale` · `/headshots-tempe` · `/headshots-mesa` · `/headshots-chandler` · `/headshots-gilbert` · `/headshots-glendale` · `/headshots-peoria` · `/headshots-paradise-valley` · `/headshots-anthem` · `/headshots-carefree` · `/headshots-cave-creek` · `/headshots-fountain-hills` · `/headshots-east-valley`

⚠️ **None of these 13 are in sitemap.xml.** Decide: index them (only if uniquely localized) or keep them out.

---

## Tier 4 — Support / non-keyword pages
- `/pricing-individual` — transactional ("headshot pricing/cost Phoenix"). Ranks #1 for "get a professional headshot." Not in sitemap.
- `/about` — brand ("Cindy Quinn headshot photographer").
- `/reviews` — brand ("CMQ Headshots reviews").
- `/blog/*` — informational long-tail (each post owns its own query; see post titles).
- `/contact-us`, `/athankyou`, `/bthank-you`, `/style-guide` — utility (should be noindex).

---

## 🚩 Conflicts to resolve (priority order)

1. **`/lawyer-headshots-phoenix-2` is a duplicate** of `/lawyer-headshots-phoenix`. Two pages targeting the same term = self-competition. **Fix:** 301-redirect or canonical the `-2` to the main page (or noindex it). It's not in the sitemap, but it can still be crawled/indexed.
2. **Business vs Corporate vs Team triangle.** All three drift toward "business/corporate headshots." Lock intents:
   - Business = **individual** professional/executive headshots.
   - Corporate = **on-location / staff / company** (mobile studio, volume).
   - Team = **composite** images (multiple people merged into one).
3. **Homepage cannibalizing spokes** for "actor headshots," "corporate headshots," "business headshot." Homepage is authoritative and mentions all services, so it wins medium terms the spokes should own. **Fix:** deepen + differentiate the spokes; keep homepage broad.
4. **Sitemap gaps.** ~15 live pages (13 location + convention + booth + pricing) are not in `sitemap.xml`. Decide per page: index (if unique, valuable) or intentionally exclude.
5. **Location-page thin-content risk.** If the 13 city pages are near-duplicates, do not index them until each has unique local content.

---

## How to use this
Before editing any page: confirm its primary keyword here, make sure the H1 + title + first 100 words target THAT term (and not another page's primary), and keep the homepage broad. Update this file whenever a page's target changes.
