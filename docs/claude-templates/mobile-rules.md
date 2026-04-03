# Mobile Optimization Rules

## Mobile Image Sizing Standard
**Default mobile image width: 80%** - Images in 50/50 sections and row layouts display at 80% width on mobile, centered with breathing room on both sides.

```tsx
<div className="flex justify-center">
  <div className="w-4/5 relative" style={{ minHeight: '300px' }}>
    <Image src={imageUrl} alt={imageAlt} fill className="object-contain" sizes="80vw" />
  </div>
</div>
```

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
- Mobile images: 80% width with `w-4/5` and `justify-center`
- Desktop images: Full 50% column width (unchanged)

**ImageRightTextLeftSection:**
- Mobile images: 80% width, centered
- Desktop images: Full column width (unchanged)

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
