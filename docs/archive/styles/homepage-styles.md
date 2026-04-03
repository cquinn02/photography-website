# Homepage (index.tsx) - Style Reference

Quick reference for all styling on the homepage.

---

## SECTION 1: H1 Above Hero Image

```
Background:     #ffffff (white)
Padding:        pt-1 pb-0

Text:           "HEADSHOTS PHOENIX"
Font:           Raleway
Font Size:      12px mobile, 16px desktop
Font Weight:    400 (normal)
Letter Spacing: 0.1em
Color:          #5577a5 (CMQ Blue)
```

---

## SECTION 2: Hero Image

```
Background:     none (image only)
Width:          100% (full width)

Images:
- Mobile (< 768px):  cmq-pro-phoenix-headshots-hero2-mobile-640.webp
- Tablet (< 1024px): cmq-pro-phoenix-headshots-hero2-mobile-828.webp
- Desktop:           cmq-pro-phoenix-headshots-hero2-scaled-1.webp
```

---

## SECTION 3: Hero Text (Below Image)

```
Background:     #ffffff (white)
Padding:        pt-[20px] pb-8
Max Width:      max-w-4xl (centered)

MAIN HEADLINE:
Font:           Raleway
Color:          #5577a5 (all text)

Word-by-word breakdown:
┌─────────────────┬──────────┬─────────────┐
│ Word            │ Size     │ Weight      │
├─────────────────┼──────────┼─────────────┤
│ COMFORTABLE,    │ 48px     │ 800 (bold)  │
│ EASY            │ 48px     │ 800 (bold)  │
│ HEADSHOTS       │ 42px     │ 400 (thin)  │
│ YOU'RE          │ 38px     │ 400 (thin)  │
│ GOING TO        │ 48px     │ 800 (bold)  │
│ LOVE            │ 48px     │ 800 (bold)  │
└─────────────────┴──────────┴─────────────┘

SUBTITLE:
Font:           Raleway
Font Size:      text-lg (18px) mobile, text-xl (20px) desktop
Font Weight:    400 (normal)
Color:          text-gray-700
Line Height:    leading-relaxed

BUTTONS (3):
- "INDIVIDUAL RATES" → /pricing-individual
- "ON-LOCATION STAFF/TEAM" → /corporate-staff-headshots
- "ACTOR RATES" → /pricing-actor
- Size: large
- Layout: Stack on mobile, row on desktop
```

---

## SECTION 4: Professional Headshots Phoenix (TwoColumnSection)

```
Background:     #282725 (dark charcoal)
Min Height:     650px
Layout:         Image LEFT, Text RIGHT

TITLE:
- "PROFESSIONAL HEADSHOTS" → font-bold (700)
- "PHOENIX" → font-normal (400)
- Color: white

BODY TEXT:
Font:           Raleway
Font Size:      text-xl (20px) - medium size
Font Weight:    400
Color:          white
Letter Spacing: 0.03em
Line Height:    1.6

CTA BUTTON:
Text:           "GET PRICING"
Link:           /pricing-individual
Size:           large

IMAGE:
URL:            professional-headshots-phoenix.jpg
Object Fit:     contain
```

---

## SECTION 5: Four Step Polaroid Process

```
Component:      FourStepPolaroid
(See component file for internal styling)
```

---

## SECTION 6: Phoenix Business Headshots (PhoenixBusinessHeadshotsSection)

```
Background:     #575757 (CMQ Gray Dark)
Layout:         Image RIGHT, Text LEFT

TITLE:
- "PHOENIX" → font-normal (400)
- "BUSINESS HEADSHOTS" → font-bold (700)
- Color: white

BODY TEXT:
Font Size:      text-xl (20px)
Color:          white

CTA BUTTON:
Text:           "GET PRICING"
Link:           /pricing-individual

IMAGE:
URL:            Brent Agees11314-optimized.webp
Object Position: left
```

---

## SECTION 7: Four Image Row

```
Background:     #ffffff (white)
Full Width:     true
Border Color:   #00b4d8 (cyan accent)

TITLE:
Text:           "FROM EXECUTIVES TO ENTREPRENEURS,
                I CREATE HEADSHOTS THAT MAKE AN IMPACT"
Color:          #5577a5 (CMQ Blue)
```

---

## SECTION 8: Reviews (ThreeReviewSection)

```
Background:     #575757 (CMQ Gray Dark)
Background Image: grey-linen-background-optimized.webp (repeating)
Text Color:     white

TITLE:
- "CMQ HEADSHOTS'S" → weight 700 (bold)
- "5 STAR REVIEWS" → weight 400 (normal)
```

---

## SECTION 9: Video Section

```
Background:     #F1F1F1 (off-white)

TITLE:
- "HEADSHOT PHOTOGRAPHER" → bold
- "PHOENIX" → thin (titleThinWord)

Owner Name:     "Cindy Quinn - Owner"
```

---

## SECTION 10: Reviews (second set - no title)

```
Background:     #575757 with grey-linen texture
Text Color:     white
```

---

## SECTION 11: Corporate Headshots Phoenix (ImageRightTextLeftSection)

```
Background:     #ffffff (white)
Layout:         Image RIGHT, Text LEFT

TITLE:
- "CORPORATE HEADSHOTS" → font-bold (700)
- "PHOENIX" → font-normal (400)
- Color: #5577a5 (CMQ Blue)

BODY TEXT:
Color:          dark (default gray)

CTA BUTTON:
Text:           "GET QUOTE"
Link:           /corporate-staff-headshots
Size:           large
```

---

## SECTION 12: FAQ Section (Dark)

```
Background:     #575757 (CMQ Gray Dark)
Text Color:     white
```

---

## SECTION 13: On-Location Staff Headshots (TwoColumnSection)

```
Background:     #e7e7e7 (light gray)
Min Height:     650px
Layout:         Image RIGHT, Text LEFT (reverseColumns: true)

TITLE:
- "PHOENIX" → font-normal (400)
- "ON-LOCATION STAFF" → font-bold (700)
- "HEADSHOTS" → font-normal (400)
- Color: #5577a5 (CMQ Blue)

BODY TEXT:
Font Size:      small (text-lg, 18px)
Color:          dark

CTA BUTTON:
Text:           "GET QUOTE"
Link:           /corporate-staff-headshots
Size:           large
```

---

## SECTION 14: Why Choose CMQ Headshots

```
Background:     #575757
Background Image: grey-linen-background-optimized.webp (repeating)
Padding:        75px top, 100px bottom
Min Height:     650px

TITLE:
- "WHY CHOOSE" → font-medium, white
- "CMQ" → Playfair Display, weight 600, #5577a5, 60px
- "HEADSHOTS?" → font-normal, white

CARDS (3):
Background:     rgba(255, 255, 255, 0.1) with blur
Border:         1px solid rgba(255, 255, 255, 0.2)
Padding:        p-8

Card Titles:    white, text-xl, font-semibold
Card Body:      white, text-xl, weight 400, letter-spacing 0.03em

Icons:          text-cmq-blue (#5577a5), h-12 w-12
- Award icon: "12+ Years Experience"
- Heart icon: "Comfortable Experience"
- Shield icon: "No Rush Guarantee"
```

---

## SECTION 15: FAQ Section (White)

```
Background:     #ffffff (white)
Show Contact CTA: true
```

---

## SECTION 16: Phoenix Actor Headshots (TwoColumnSection)

```
Background:     #F1F1F1 (off-white)
Min Height:     650px
Layout:         Image LEFT, Text RIGHT

TITLE:
- "PHOENIX" → font-normal (400)
- "ACTOR HEADSHOTS" → font-bold (700)
- Color: #5577a5 (CMQ Blue)

BODY TEXT:
Font Size:      medium (text-xl, 20px)
Color:          dark

CTA BUTTON:
Text:           "ACTOR PRICING"
Link:           /pricing-actor
Size:           large
```

---

## SECTION 17: FAQ Section (White)

```
Background:     #ffffff (white)
Show Contact CTA: true
```

---

## SECTION 18: Modeling Headshots Section

```
Background:     #ffffff (white)
Component:      ModelingHeadshotsSection
```

---

## SECTION 19: FAQ Section (Off-White)

```
Background:     #F1F1F1 (off-white)
Show Contact CTA: true
```

---

## SECTION 20: Services Preview

```
Background:     #F1F1F1 (off-white)

SECTION TITLE:
- "PROFESSIONAL PHOTOGRAPHY" → font-bold
- "SERVICES" → font-light
- Color: #5577a5 (CMQ Blue)

SUBTITLE:
Font Size:      text-xl (20px)
Font Weight:    400
Color:          text-cmq-gray-dark

SERVICE CARDS (3):
Background:     white
Border:         border-cmq-gray-light, hover:border-cmq-blue
Padding:        p-6
Border Radius:  rounded-lg

Card Titles:
- "BRANDING PHOTOGRAPHY"
- "LAWYER HEADSHOTS"
- "DANCER HEADSHOTS"
- Size: text-3xl
- Color: #5577a5
- Bold word + Light word pattern

Card Body:
- Size: 17px
- Weight: 400
- Color: text-cmq-gray-dark

Icons:          text-cmq-blue, h-10 w-10
```

---

## SECTION 21: Call to Action (Bottom)

```
Background:     #5577a5 (CMQ Blue)
Padding:        120px top and bottom

TITLE:
Text:           "READY TO LOOK YOUR BEST?"
Font:           Raleway
Font Size:      text-3xl mobile, text-4xl desktop
Font Weight:    900 (font-black)
Transform:      uppercase
Color:          #ffffff (white)

SUBTITLE:
Text:           "Let's create headshots that boost your career..."
Font Size:      text-xl (20px)
Font Weight:    400
Color:          white

CTA BUTTON:
Text:           "Schedule Your Session Today"
Link:           /contactus
Size:           xl
Border:         2px white
```

---

## QUICK REFERENCE - Colors Used on Homepage

| Color | Hex | Where Used |
|-------|-----|------------|
| CMQ Blue | #5577a5 | Titles, buttons, icons, CTA background |
| White | #ffffff | Light backgrounds, text on dark |
| Off-White | #F1F1F1 | Alternate section backgrounds |
| Light Gray | #e7e7e7 | On-location section background |
| CMQ Gray Dark | #575757 | Dark section backgrounds |
| Dark Charcoal | #282725 | Professional headshots section |
| Gray 700 | text-gray-700 | Hero subtitle text |
| Cyan Accent | #00b4d8 | Image row border |

---

## QUICK REFERENCE - Font Weights Used

| Weight | Where Used |
|--------|------------|
| 400 (normal) | Body text, thin title words, subtitle |
| 500 (medium) | "WHY CHOOSE" text |
| 600 (semibold) | Card titles, CMQ in Playfair |
| 700 (bold) | Bold title words, review title |
| 800 (extra bold) | Hero headline bold words |
| 900 (black) | CTA title "READY TO LOOK YOUR BEST?" |

---

*Last Updated: January 10, 2026*
