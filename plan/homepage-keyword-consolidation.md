# Homepage Keyword Consolidation Plan

Working notes — 2026-05-07

## Current homepage layout (17 sections, render order)

| Order | KW# | H2 Keyword | Background | Subject | Gender |
|---|---|---|---|---|---|
| 1 | 1 | PROFESSIONAL HEADSHOTS PHOENIX | `#282725` dark | Craig | M |
| 2 | 2 | PHOENIX HEADSHOTS | `#575757` dark | Brent Agees | M |
| 3 | 3 | PHOENIX, AZ PROFESSIONAL HEADSHOTS | `#ffffff` white | photo `41301` | F |
| 4 | 4 | PROFESSIONAL HEADSHOTS PHOENIX, AZ | `#e7e7e7` light | staff group | Group |
| 5 | 5 | PHOENIX, AZ HEADSHOT PHOTOGRAPHER | `#282725` dark | Ashley collage | F |
| 6 | 6 | PROFESSIONAL HEADSHOT PHOTOGRAPHER | `#ffffff` white | Peter Osmundson | M |
| 7 | 7 | PROFESSIONAL PHOTOGRAPHY PHOENIX | `#cecfd1` light | Bryan Ahia | M |
| 8 | 8 | PHOENIX HEADSHOT | `#a0a0a0` mid | Nikkie Miller | F |
| 9 | 9 | HEADSHOTS PHOENIX | `#242323` dark | Sophia | F |
| 10 | 10 | HEADSHOT PHOTOGRAPHER PHOENIX | `#ffffff` white | Courtney | F |
| 11 | 11 | ARIZONA HEADSHOTS | `#ffffff` white | Matt Federico | M |
| 12 | 12 | PROFESSIONAL HEADSHOTS NEAR ME | `#babab9` light | Denise Tedeschi | F |
| 13 | 15 | HEADSHOT PROFESSIONAL | `#ffffff` white | Anna | F |
| 14 | 13 | BEST HEADSHOT PHOTOGRAPHER NEAR ME | `#f1f1f1` light | Esmerelda | F |
| 15 | 14 | HEADSHOT PHOTOS | `#ffffff` white | JGP photo | M |
| 16 | 16 | PROFESSIONAL HEADSHOT PHOTOS | `#afafaf` mid | Cami Collins | F |
| 17 | 17 | PROFESSIONAL BUSINESS PHOTOGRAPHY | `#575757` dark | Chuchu | F |

Mix: **6 male + 10 female + 1 group = 17 sections**

---

## Duplicate keyword groups

🔴 = same Google query (word order, plurals, "AZ" don't matter to Google)
🟡 = close enough Google may merge them

### 🔴 Group 1 — "Professional Headshots Phoenix" (3 versions, same query)
- KW#1 PROFESSIONAL HEADSHOTS PHOENIX
- KW#3 PHOENIX, AZ PROFESSIONAL HEADSHOTS
- KW#4 PROFESSIONAL HEADSHOTS PHOENIX, AZ

### 🔴 Group 2 — "Phoenix Headshot(s)" (3 versions, same query)
- KW#2 PHOENIX HEADSHOTS
- KW#8 PHOENIX HEADSHOT (singular)
- KW#9 HEADSHOTS PHOENIX (reversed)

### 🟡 Group 3 — "Headshot Photographer Phoenix" (2 close + 2 distinct)
- KW#5 PHOENIX, AZ HEADSHOT PHOTOGRAPHER
- KW#10 HEADSHOT PHOTOGRAPHER PHOENIX
- KW#6 PROFESSIONAL HEADSHOT PHOTOGRAPHER (no Phoenix in H2 — distinct)
- KW#13 BEST HEADSHOT PHOTOGRAPHER NEAR ME (different intent — local search)

### 🟡 Group 4 — "Headshot Photos / Photography" (2 close + 2 distinct)
- KW#14 HEADSHOT PHOTOS
- KW#16 PROFESSIONAL HEADSHOT PHOTOS
- KW#7 PROFESSIONAL PHOTOGRAPHY PHOENIX
- KW#17 PROFESSIONAL BUSINESS PHOTOGRAPHY (adds "business")

### ✅ Standalone (no overlap)
- KW#11 ARIZONA HEADSHOTS (broader location)
- KW#12 PROFESSIONAL HEADSHOTS NEAR ME (local intent)
- KW#15 HEADSHOT PROFESSIONAL

---

## Recommendations

### Tier 1 — definitely consolidate (6 sections → 3)

**Group 1 (3 → 1):** Keep **KW#1 PROFESSIONAL HEADSHOTS PHOENIX**. Retire KW#3 and KW#4.

**Group 2 (3 → 1):** Keep **KW#2 PHOENIX HEADSHOTS**. Retire KW#8 and KW#9.

**Group 3 (4 → 2):** Keep **KW#10 HEADSHOT PHOTOGRAPHER PHOENIX** and **KW#13 BEST HEADSHOT PHOTOGRAPHER NEAR ME** (different intent). Retire KW#5 and KW#6.

### Tier 2 — likely consolidate (4 sections → 2)

**Group 4 (4 → 2):** Keep **KW#16 PROFESSIONAL HEADSHOT PHOTOS** and **KW#17 PROFESSIONAL BUSINESS PHOTOGRAPHY**. Retire KW#7 and KW#14.

### Result: 17 sections → 10 sections

- Page loads faster
- No keyword-stacking risk for Google's helpful-content systems
- Cleaner background and gender flow
- Retired images stay on S3 — they're just not on the homepage anymore

---

## Suggested final 10-section layout

| Order | KW | Subject | Gender |
|---|---|---|---|
| 1 | KW#1 PROFESSIONAL HEADSHOTS PHOENIX | Craig | M |
| 2 | KW#2 PHOENIX HEADSHOTS | Brent | M |
| 3 | KW#10 HEADSHOT PHOTOGRAPHER PHOENIX | Courtney | F |
| 4 | KW#11 ARIZONA HEADSHOTS | Matt | M |
| 5 | KW#12 PROFESSIONAL HEADSHOTS NEAR ME | Denise T. | F |
| 6 | KW#13 BEST HEADSHOT PHOTOGRAPHER NEAR ME | Esmerelda | F |
| 7 | KW#15 HEADSHOT PROFESSIONAL | Anna | F |
| 8 | KW#16 PROFESSIONAL HEADSHOT PHOTOS | Cami | F |
| 9 | KW#17 PROFESSIONAL BUSINESS PHOTOGRAPHY | Chuchu | F |
| 10 | (optional) new unique keyword — e.g., EXECUTIVE HEADSHOTS PHOENIX | (TBD) | — |

---

## Sections that would be retired (and what happens to their images)

| Retired KW | Subject | Image stays on S3? |
|---|---|---|
| KW#3 photo `41301` | Female | Yes |
| KW#4 staff group | Group | Yes |
| KW#5 Ashley collage | Female | Yes |
| KW#6 Peter Osmundson | Male | Yes |
| KW#7 Bryan Ahia | Male | Yes |
| KW#8 Nikkie Miller | Female | Yes |
| KW#9 Sophia | Female | Yes |
| KW#14 JGP photo | Male | Yes |

All 8 transparent + 1600 px masters we just built stay on S3 in case we want them on a different page.

---

## Decision points for Cindy

1. **Approve Tier 1** (6→3 consolidation)? Yes / No / Modify
2. **Approve Tier 2** (4→2 consolidation)? Yes / No / Modify
3. **What to do with retired sections?**
   - Delete entirely (cleanest, fastest page)
   - Replace with new unique keywords (e.g., EXECUTIVE HEADSHOTS, LINKEDIN HEADSHOTS, CORPORATE TEAM HEADSHOTS)
   - Replace with non-keyword content (testimonials, pricing breakdown, FAQ)
4. **Reorder?** The suggested layout above puts the standalone keywords in the middle — adjust if you want a different flow.
5. **When to execute?** Now (this session) or future session?
