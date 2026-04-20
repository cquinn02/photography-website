# Section Components — Visual Catalog

Every reusable section lives in `src/components/sections/`. Pick the one that matches the layout you want, pass it props, done.

If you need a layout not covered here, build a new one in `src/components/sections/` and add it to this index.

---

## Quick-pick by layout

| You want… | Use |
|---|---|
| Image + text side-by-side, flexible | **TwoColumnSection** |
| Image right, text left (locked) | **ImageRightTextLeftSection** |
| Wide image + narrow text | **TwoThirdsSectionWithImage** |
| Dark-background service block with image | **PhoenixBusinessHeadshotsSection** |
| 2 rows of 4 photos, edge-to-edge | **FourImageRow** / **FiveImageRow** |
| 3 testimonial cards | **ThreeReviewSection** |
| Collapsible Q&A list | **AccordionFAQSection** |
| 3D flip-card FAQ (playful) | **FAQSection** |
| 4-step process (playful, Polaroid) | **FourStepPolaroid** |
| 4-step process (clean, animated) | **FourStepProcess** / **FourStepProcessDrift** |
| Auto-scrolling logo strip | **LogoCarousel** |
| Draggable service hero slider | **ServiceCarousel** |
| Video + text side-by-side | **VideoSection** / **HeadshotPhotographerSection** |
| Team composite with hover bios | **InteractiveCompositeBuilder** |
| Modeling/acting service block | **ModelingHeadshotsSection** |

---

## TwoColumnSection

**Layout.** Image + text side by side. The most flexible component on the site — use this first.

**Key props:**
- `title`, `subtitle`, `description`
- `imageUrl`, `imageAlt`, `imageWidth`, `imageHeight`
- `reverseColumns` — flip image/text sides (default: text-left, image-right)
- `mobileStackOrder` — `text-first` | `image-first`
- `columnRatio` — `1-1` | `2-1` | `1-2`
- `backgroundColor`, `textColor`, `titleColor`
- `ctaText`, `ctaLink`, `ctaSize`
- `objectPosition`, `objectFit`

**Used on:** index, corporate-staff-headshots, headshots-cave-creek, realtor-headshots-phoenix, about

**Pick this when** you want a standard image+text block and need room to adjust later.

---

## ImageRightTextLeftSection

**Layout.** Image right, text left — locked, no flip option.

**Key props:**
- `title`, `description`
- `ctaText`, `ctaLink`
- `imageUrl`, `imageAlt`
- `mobileStackOrder` — `text-first` | `image-first`
- `backgroundColor`, `textColor`
- `objectPosition`, `objectFit`

**Used on:** modeling-headshots-phoenix

**Pick this when** you want TwoColumnSection's look but don't need flipping.

---

## TwoThirdsSectionWithImage

**Layout.** Asymmetric — text column takes 2/3, image column 1/3 (or flipped). Good when one side should dominate.

**Key props:**
- `title`, `description`
- `ctaText`, `ctaLink`, `ctaSize`
- `imageUrl`, `imageAlt`
- `reverseColumns`
- `backgroundColor`, `textColor`, `objectPosition`

**Used on:** _(not currently used)_

**Pick this when** text needs more room than image, or vice versa.

---

## PhoenixBusinessHeadshotsSection

**Layout.** Image left, white text right, dark background. Linen-texture option.

**Key props:**
- `title`, `description`
- `ctaText`, `ctaLink`
- `imageUrl`, `imageAlt`
- `backgroundColor`, `objectPosition`

**Used on:** index (homepage)

**Pick this when** highlighting a specific service line with bold, dark styling.

---

## FourImageRow

**Layout.** 4 images in a grid. Mobile: 2 per row. Desktop: 4 across, edge-to-edge.

**Key props:**
- `images` — `[{src, alt, title, flip, brightness}]`
- `title`, `subtitle`
- `backgroundColor`, `fullWidth`

**Used on:** corporate-staff-headshots, contact-us

**Pick this when** showcasing 4 portfolio or team photos as a balanced grid.

---

## FiveImageRow

**Layout.** 4 images in a single horizontal row, edge-to-edge (despite the name).

**Key props:**
- `images` — `[{src, alt, title}]`
- `title`, `subtitle`
- `backgroundColor`, `fullWidth`, `borderColor`

**Used on:** _(not currently used)_

**Pick this when** you want a tighter, single-row portfolio strip.

---

## ThreeReviewSection

**Layout.** 3 testimonial cards across (stacks on mobile). Circular reviewer photo + stars + quote + name.

**Key props:**
- `reviews` — `[{image, imageAlt, name, review, stars}]` (exactly 3)
- `title`, `textColor`
- `backgroundColor` or `backgroundImage`

**Used on:** convention-headshots-phoenix, eras-medical-headshots, headshots-cave-creek, linkedin-headshots, team-composite-headshots, headshot-booth-phoenix

**Pick this when** you want social proof in a clean 3-up grid.

---

## AccordionFAQSection

**Layout.** Collapsible Q&A list stacked vertically. Space-saving.

**Key props:**
- `title`, `subtitle`
- `faqs` — `[{id, question, answer}]`
- `backgroundColor`, `textColor`

**Used on:** convention-headshots-phoenix, team-composite-headshots, headshot-booth-phoenix

**Pick this when** you have 5+ FAQs and want them compact.

---

## FAQSection

**Layout.** 3-column flip-card FAQ. Tap/click flips card 3D to reveal answer.

**Key props:**
- `title`, `subtitle`
- `faqs` — `[{id, question, answer}]`
- `backgroundColor`, `textColor`
- `showContactCTA`

**Used on:** headshots-cave-creek

**Pick this when** you want an interactive, eye-catching FAQ over a compact list.

---

## FourStepPolaroid

**Layout.** 4 staggered, rotated Polaroid-style cards with image + caption. Animated entrance + hover.

**Key props:** steps are hardcoded inside the component — edit the file to change copy.

**Used on:** index (homepage)

**Pick this when** you want a playful "how it works" explainer.

---

## FourStepProcess

**Layout.** 4 numbered circular cards, sequential center-stage animation that resolves to a horizontal row.

**Key props:**
- `title`, `subtitle`
- `steps` — `[{id, title, description, icon}]`
- `backgroundColor`

**Used on:** _(not currently used)_

**Pick this when** you want an animated, icon-driven process reveal.

---

## FourStepProcessDrift

**Layout.** 4 numbered cards in a grid with right-to-left "drift in" animation on scroll.

**Key props:**
- `title`, `subtitle`
- `steps` — `[{id, title, description, icon}]`
- `backgroundColor`

**Used on:** corporate-staff-headshots

**Pick this when** you want a calmer, scroll-triggered process block.

---

## LogoCarousel

**Layout.** Auto-scrolling logo strip. 1 or 2 rows, opposite directions, pause on hover.

**Key props:**
- `title`, `subtitle`
- `speed` (seconds for one scroll cycle)
- `rowCount` — 1 or 2
- `pauseOnHover`

**Used on:** corporate-staff-headshots

**Pick this when** showing client logos or brand recognition.

---

## ServiceCarousel

**Layout.** Full-width draggable/swipeable carousel with typewriter heading and 8 rotating service cards. Hero-scale.

**Key props:** services are hardcoded inside the component — edit the file to change service cards.

**Used on:** index (homepage)

**Pick this when** the homepage needs to show all service lines interactively.

---

## VideoSection

**Layout.** 2-column: video left, text right. Autoplays muted on scroll, mute toggle, "Learn More" button.

**Key props:**
- `videoUrl`, `posterImage`, `captionsUrl`
- `title`, `titleThinWord`, `description`
- `ownerName`, `backgroundColor`

**Used on:** index (homepage)

**Pick this when** you want a scroll-triggered video block with supporting copy.

---

## HeadshotPhotographerSection

**Layout.** 2-column: video left, text right. Play-button overlay on thumbnail (click-to-play, not autoplay).

**Key props:**
- `videoUrl`, `videoThumbnail`
- `title`, `description`, `ownerName`
- `backgroundColor`

**Used on:** _(not currently used)_

**Pick this when** you want a click-to-play "meet the photographer" block.

---

## InteractiveCompositeBuilder

**Layout.** Animated team composite builder — headshots assemble progressively with hover hotspots showing bio cards. Typewriter text effect.

**Key props:** composite steps, headshots, bios, and hotspot positions are all hardcoded inside the component.

**Used on:** team-composite-headshots

**Pick this when** showcasing a full team with individual bios on a dedicated page.

---

## ModelingHeadshotsSection

**Layout.** 2-column: text left, image right. Mobile stacks title > image > text. Pricing button CTA built in.

**Key props:**
- `backgroundColor`
- `location`
- `description`

**Used on:** _(not currently used)_

**Pick this when** marketing modeling/acting service with location branding.

---

## How to add a new section

1. Create the file in `src/components/sections/YourSectionName.tsx`
2. Follow the prop conventions above (`title`, `description`, `imageUrl`, `backgroundColor`, etc.)
3. Match the typography and color tokens from `docs/claude-templates/typography-style-guide.md`
4. Add the section here with the same format (Layout / Key props / Used on / Pick this when)
