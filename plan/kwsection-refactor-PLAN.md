## Plan: KWSection Component Refactor

**Created:** 2026-05-10 (continuation of 2026-05-09 homepage refresh)
**Status:** Phases 1+2 physically built and uncommitted. Phases 3-5 not started.

---

## Why we are doing this

Cindy's words on 2026-05-09:

> "Tons of documents and very few components — after finding out I had all kinds of rules working against each other I would like to ensure that we have a clean and organized working environment."

The homepage uses `TwoColumnSection` 11 times (and the broader site uses it 33 times across 8 pages). Of the ~14 props passed at each KW call site, ~9 are either always-the-same defaults or derivable from `backgroundColor`. That means design rules — text color, title color, linen-texture overlay, image dimensions — get hand-typed at every call site. The 2026-05-09 audit found exactly the kind of drift this produces: backgrounds that didn't match the documented palette, font weights that drifted from `font-bold` to `font-medium`, missing texture overlays, and white-on-white adjacency mistakes.

The fix: bake the design tokens into a thin wrapper component (`KWSection`) so the rules can't be hand-typed wrong at the call site.

---

## What's already done (Phases 1+2 — uncommitted on disk as of 2026-05-10)

### `src/components/sections/sectionConfig.ts` ✅

Design tokens — single source of truth for KW-style sections.

- `BACKGROUNDS` map — 5 named presets: `white`, `lightGrey`, `darkGrey`, `veryDark`, `brandBlue`. Each preset specifies `color`, `mode` ('light' | 'dark'), and `linen` (boolean for the linen-texture overlay).
- `IMAGE_LAYOUTS` map — 3 named presets: `horizontal` (1600×1280), `vertical` (1280×1600), `square` (1600×1600). Matches `docs/claude-templates/image-rules.md`.
- `LINEN_TEXTURE_URL` — single source of truth for the linen overlay image URL.

### `src/components/sections/KWSection.tsx` ✅

Thin wrapper around `TwoColumnSection`. Public API:
- `title` (ReactNode)
- `description` (string)
- `imageUrl` (string)
- `imageAlt` (string)
- `background` (one of 5 enum keys)
- `imageLayout` (one of 3 enum keys)
- `imageSide` ('left' | 'right')
- `cta` (optional `{ text, href }`)

Everything else (text color, title color, linen overlay, image dimensions, minHeight, textSize, ctaSize, objectFit, objectPosition, mobileStackOrder) is derived from the two enum keys. Impossible to mis-set at the call site.

---

## Phases 3-5 — not started

### Phase 3: Migrate the 11 homepage KW calls to KWSection

`src/pages/index.tsx` has 11 `<TwoColumnSection>` instances that should become `<KWSection>`. The 12th section (Section 8) was just updated 2026-05-10 to HEADSHOT PHOTOGRAPHER NEAR ME; it's still a TwoColumnSection and is included in this migration.

- [ ] Replace each `<TwoColumnSection>` block with `<KWSection>`. Map current props:
  - `backgroundColor="#D0D0D0"` → `background="lightGrey"`
  - `backgroundColor="#575757" + backgroundImage="…linen…"` → `background="darkGrey"`
  - `backgroundColor="#282725"` → `background="veryDark"`
  - `backgroundColor="#FFFFFF"` → `background="white"`
  - `backgroundColor="#5577a5"` → `background="brandBlue"`
  - `imageWidth=1600, imageHeight=1280` → `imageLayout="horizontal"`
  - `imageWidth=1280, imageHeight=1600` → `imageLayout="vertical"`
  - `reverseColumns={true}` → `imageSide="left"`
  - `reverseColumns={false}` → `imageSide="right"`
- [ ] Remove the duplicated boilerplate props (textColor, titleColor, textSize, ctaSize, objectFit, objectPosition, minHeight, mobileStackOrder) — KWSection bakes them in.
- [ ] Delete the unused `TwoColumnSection` import if no longer referenced (verify first — other components on the homepage may still use it).
- [ ] `pnpm run build` — zero errors.
- [ ] Visual diff: dev server at localhost:3100, walk through all 11 sections. Confirm identical rendering to live.

### Phase 4: Add `background` enum to ReviewsRow + FAQSection

The homepage has 4 `ThreeReviewSection` calls and 5 `AccordionFAQSection` calls. Same drift risk as TwoColumnSection — each takes `backgroundColor`, `backgroundImage`, `textColor` props that get hand-typed.

- [ ] Add `background?: BackgroundKey` prop to `ThreeReviewSection.tsx`. When provided, derive `backgroundColor`, `backgroundImage`, `textColor` from `BACKGROUNDS[background]`. Keep the existing direct-prop API as a fallback for non-homepage pages.
- [ ] Add same prop to `AccordionFAQSection.tsx`.
- [ ] Migrate the 4 homepage ReviewsRow calls and 5 homepage FAQ calls to use the enum.
- [ ] `pnpm run build` — zero errors.

### Phase 5: Cleanup

- [ ] Delete unused `ImageRightTextLeftSection` import in `src/pages/index.tsx` (was used pre-refresh; verify with grep before deletion).
- [ ] Add a note to `docs/claude-templates/image-rules.md` distinguishing `-transparent-1600.webp` (raw alpha cutout — for homepage where bg is independent) from `-blended-1600.webp` (composited on flat bg — for older pages where image bg must match section bg).
- [ ] Confirm no other pages reference `ImageRightTextLeftSection` before deleting the component itself (separate decision — out of scope for this plan).

---

## Out of scope (explicit)

- Migrating other pages (cave-creek, lawyer-2, realtor, corporate-staff, about, LocationPageTemplate) from `TwoColumnSection` to `KWSection`. Those use advanced TwoColumnSection props (subtitle, titleTag h1, columnRatio, textColorHex) that aren't in the KWSection API. Each call site needs per-page review.
- Deleting `ImageRightTextLeftSection` component entirely — it may still be referenced on non-homepage pages.
- Refactoring `TwoColumnSection` itself — it stays as the lower-level primitive that KWSection wraps.

---

## Commit strategy (proposed)

Three logical commits:

1. **Phase 1+2 scaffolding** — add `sectionConfig.ts` and `KWSection.tsx`. No usage changes. Pure addition.
2. **Phase 3 migration** — rewrite the 11 homepage KW calls. Verify build + visual parity before commit.
3. **Phase 4+5 finishing** — ReviewsRow/FAQSection enum support, homepage migration, cleanup.

Each commit is independently revertible if a regression shows up.

---

## Files referenced in this plan

| Path | Status |
|---|---|
| `src/components/sections/sectionConfig.ts` | NEW — uncommitted |
| `src/components/sections/KWSection.tsx` | NEW — uncommitted |
| `src/components/sections/TwoColumnSection.tsx` | Untouched (KWSection wraps it) |
| `src/components/sections/ThreeReviewSection.tsx` | Will gain `background` prop in Phase 4 |
| `src/components/sections/AccordionFAQSection.tsx` | Will gain `background` prop in Phase 4 |
| `src/components/sections/ImageRightTextLeftSection.tsx` | Phase 5 — flag unused import on homepage |
| `src/pages/index.tsx` | Phases 3, 4, 5 target file |
| `docs/claude-templates/image-rules.md` | Phase 5 — add transparent vs blended note |

---

## Full prior-session context

The original planning conversation, including TwoColumnSection prop analysis (443 lines, 23 props) and the rationale for not extending TwoColumnSection directly with a `mobileImageUrl` prop, is in `s3://cmqheadshots-website-images/logs/2026-05-10.md` section 14 ("KWSection wrapper component planning").
