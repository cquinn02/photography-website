# Mobile Optimization Rules

> **Scope of this document.** This file covers **layout** on mobile devices — how elements appear on screen at narrow viewports (text alignment, column stacking, where images sit relative to text, what percentage of the viewport an element fills). It does **NOT** specify image file dimensions, file size, or WebP quality. For image asset specs (long edge in pixels, encoder quality, naming, transparent cutouts, hero pattern) see `docs/claude-templates/image-rules.md` — that is the single source of truth for image files. The two documents complement each other and must not contradict.

## Mobile Image Display Width
Default behavior varies by component. Some components display images edge-to-edge on mobile (full viewport width, the cleanest look for hero-style and section subjects); others use 80% width with side margins. The rule per component is documented below — do not generalize "all images on mobile use X width."

## Desktop vs Mobile Changes
**IMPORTANT:** Mobile-only changes MUST NOT affect desktop layout. Always use responsive classes:

✅ Correct:
```tsx
className="w-1/2 md:w-1/4"           // Mobile: half, Desktop: quarter
className="text-center md:text-left"  // Centered on mobile, left on desktop
```

❌ Incorrect:
```tsx
className="w-1/4"   // Affects all screen sizes
```

## Component-Specific Rules

**TwoColumnSection:**
- Mobile titles always blue (#5577a5), text centered
- Mobile images: **edge-to-edge / 100% viewport width** (`className="w-full"`, `sizes="100vw"` on the `<Image>`)
- Desktop images: Full 50% column width (unchanged)

**ImageRightTextLeftSection:**
- Mobile images: **edge-to-edge / 100% viewport width** (`className="w-full"`, `sizes="100vw"` on the `<Image>`)
- Desktop images: Full 55% column width (unchanged)

**FourImageRow:**
- Shows 2 images on mobile (hides 3rd and 4th): `className={index >= 2 ? 'hidden md:block' : ''}`
- Mobile images: 80% width with `w-4/5 md:w-1/4`
- Desktop: All 4 images edge-to-edge

**FAQ Section (Flip Cards):**
- Single tap to flip on mobile (no hover handlers)
- Mobile card height: 300px (`h-[300px] lg:h-[400px]`)
- Mobile question text: 20px (`text-xl lg:text-2xl`), weight 500
- Mobile answer text: 16px (`text-base lg:text-xl`), weight 400

**AccordionFAQSection (Pricing Pages):**
- Mobile question: 16px (`text-base lg:text-lg`), weight 500
- Mobile answer: 14px (`text-sm lg:text-base`), weight 400

**Footer:** Centered on mobile (`text-center md:text-left`)
**Header:** Logo and button stacked vertically on mobile, side by side on desktop
**Pricing Buttons:** Centered on mobile, flex-grow only on desktop (`sm:flex-1`)

## General Mobile Rules
- Always center text: `text-center`
- Stack layouts vertically
- Reduce font sizes by 1-2 steps
- Use full width containers on mobile
- Separate desktop/mobile layouts with `hidden lg:block` and `lg:hidden`
