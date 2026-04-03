# Corporate Staff Headshots Page (corporate-staff-headshots.tsx) - Style Reference

Quick reference for all styling on the Corporate Staff Headshots page.

---

## SECTION 1: Hero Section

```
Background:     white (bg-white)
Height:         100vh (min 600px, max 800px)
Padding Top:    30px

DESKTOP BACKGROUND IMAGE:
Image:          BTS-at-Kierland-corporate-hero-1920w.webp
Object Fit:     cover
Overlay:        bg-black/20 (20% black)

MOBILE BACKGROUND IMAGE:
Image:          BTS-corporate-mobile.webp
Object Fit:     cover
Object Position: top

H1 TITLE:
Font:           Raleway
Font Size:      text-4xl lg:text-6xl xl:text-7xl
Line Height:    leading-tight
Color:          #ffffff (white)
Text Shadow:    1px 1px 3px rgba(0, 0, 0, 0.4)

Word-by-word breakdown:
┌─────────────────┬──────────────────┐
│ Word            │ Weight           │
├─────────────────┼──────────────────┤
│ CORPORATE STAFF │ 900 (font-black) │
│ HEADSHOTS       │ 300 (font-light) │
│ WITHOUT         │ 900 (font-black) │
│ THE             │ 300 (font-light) │
│ HASSLE          │ 900 (font-black) │
└─────────────────┴──────────────────┘

CTA BUTTON:
Text:           "GET QUOTE"
Font:           Raleway
Font Size:      22px (!text-[22px])
Font Weight:    400 (normal)
Background:     #5577a5
Hover Background: #575757
Border:         #5577a5 (hover: #ffffff)
Shadow:         0 4px 8px rgba(0, 0, 0, 0.3)
Hover Transform: scale(1.05)
```

---

## SECTION 2: Quick and Easy (TwoColumnSection)

```
Background:     #F1F1F1 (off-white)
Min Height:     650px
Column Ratio:   1-1

TITLE:
- "QUICK" → font-bold
- "AND" → font-normal
- "EASY" → font-bold
- "BUSINESS" → font-normal
- "HEADSHOTS" → font-bold
- Color: #5577a5 (default)
- Tag: h2

BODY TEXT:
Standard TwoColumnSection body styling

CTA BUTTON:
Text:           "GET QUOTE"
Link:           #request-quote (anchor link)
```

---

## SECTION 3: Staff Headshots Title + Four Image Row

```
Background:     #575757 (CMQ Gray Dark)
Background Image: grey-linen-background-optimized.webp (repeating)
Padding Top:    50px

TITLE (H2):
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Color:          #ffffff (white)
- "STAFF HEADSHOTS" → weight 700 (bold)
- "IN PHOENIX AND SCOTTSDALE ARIZONA" → weight 400 (normal)

SUBTITLE:
Font:           Raleway
Font Size:      text-xl (20px)
Color:          white
Line Height:    1.6
Letter Spacing: 0.03em

FOUR IMAGE ROW:
Background:     transparent
Full Width:     true
```

---

## SECTION 4: Team Composite CTA

```
Background:     #F1F1F1 (off-white)
Padding:        py-16

TITLE (H2):
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Color:          #5577a5
- "NEED TEAM" → font-bold
- "OR GROUP PHOTOS?" → font-light

BODY TEXT:
Font:           Raleway
Font Size:      text-xl (20px)
Color:          text-gray-700
Line Height:    1.6

CTA BUTTON:
Text:           "Learn About Team Composites"
Font:           Raleway
Font Size:      text-lg (18px)
Font Weight:    400 (normal)
Background:     #5577a5
Hover Background: #575757
Border:         #5577a5 (hover: #ffffff)
Shadow:         0 4px 8px rgba(0, 0, 0, 0.3)
Hover Transform: scale(1.05)
Link:           /team-composite-headshots
```

---

## SECTION 5: Spencer Hopkin Testimonial

```
Background:     #575757 (CMQ Gray Dark)
Layout:         2-column grid (image LEFT, text RIGHT)

IMAGE:
Transparent PNG of person
Width:          800px
Full bleed to bottom

CONTENT AREA:
Background:     #575757
Padding:        py-16, px-6 lg:px-8

TITLE (H2):
Text:           "CLIENT TESTIMONIALS"
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Font Weight:    700 (bold)
Color:          #ffffff (white)
Transform:      uppercase
Alignment:      center

TESTIMONIAL QUOTE:
Font:           Raleway
Font Size:      text-xl (20px)
Font Weight:    400 (normal)
Color:          white
Letter Spacing: 0.03em
Line Height:    1.6
Alignment:      center

CLIENT NAME:
Font:           Raleway
Font Size:      text-lg (18px)
Font Weight:    font-semibold
Color:          white

STARS:
5 yellow stars (fill-yellow-400)
Size:           w-6 h-6
```

---

## SECTION 6: Logo Carousel

```
Component:      LogoCarousel
Title:          "TRUSTED BY LEADING COMPANIES"
Subtitle:       "I have provided professional headshots for staff members across various industries"
Speed:          40
Row Count:      2
Pause on Hover: true
```

---

## SECTION 7: Stephanie Edelman Testimonial

```
Background:     #ffffff (white)
Layout:         2-column grid (image LEFT, text RIGHT)

TITLE (H2):
Text:           "WHAT MY CLIENTS SAY"
Color:          #5577a5 (CMQ Blue)
Font Weight:    700 (bold)

TESTIMONIAL QUOTE:
Color:          text-gray-700
Some words:     font-bold (emphasis)

CLIENT NAME:
Color:          text-gray-800
Font Weight:    font-semibold

STARS:
5 yellow stars
```

---

## SECTION 8: Four Step Process (FourStepProcessDrift)

```
Background:     #575757 (CMQ Gray Dark)
Component:      FourStepProcessDrift

TITLE:
"Do you have a STAFF MEMBER THAT MISSED THE HEADSHOT EVENT?"
"I can help!!"
"I made a process to fix this that is quick and easy"

Bold portion:   "staff member that missed the headshot event"
Letter Spacing: 0.05em on bold
```

---

## SECTION 9: Megan Baez Testimonial

```
Background:     #ffffff (white)
Layout:         2-column grid (text LEFT, image RIGHT)

TITLE (H2):
Text:           "MORE CLIENT SUCCESS STORIES"
Color:          #5577a5 (CMQ Blue)
Font Weight:    700 (bold)

TESTIMONIAL QUOTE:
Color:          text-gray-700

CLIENT NAME:
Color:          text-gray-800
Font Weight:    font-semibold
```

---

## SECTION 10: Request Quote Form

```
Background:     #D0D0D0 (light gray)
Padding:        py-16
Scroll Margin:  150px (for anchor link)

TITLE (H2):
Text:           "Request a Quote"
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Font Weight:    500 (font-medium)
Color:          #5577a5
Transform:      uppercase

SUBTITLE:
Font:           Raleway
Font Size:      text-xl (20px)
Color:          #5577a5

FORM:
Embedded 17hats iframe
Height:         600px
```

---

## COLORS USED ON CORPORATE-STAFF PAGE

| Color | Hex | Where Used |
|-------|-----|------------|
| CMQ Blue | #5577a5 | Titles, buttons, accents |
| White | #ffffff | Hero text, light backgrounds, text on dark |
| Off-White | #F1F1F1 | Section backgrounds |
| CMQ Gray Dark | #575757 | Dark section backgrounds, hover states |
| Light Gray | #D0D0D0 | Quote form section background |
| Gray 700 | text-gray-700 | Body text on light backgrounds |
| Gray 800 | text-gray-800 | Client names |
| Yellow 400 | fill-yellow-400 | Star ratings |

---

## FONT WEIGHTS USED

| Weight | Where Used |
|--------|------------|
| 300 (light) | Hero thin words (HEADSHOTS, THE) |
| 400 (normal) | Body text, buttons, thin title words |
| 500 (medium) | Quote form title |
| 600 (semibold) | Client names |
| 700 (bold) | Bold title words, testimonial titles |
| 900 (black) | Hero bold words (CORPORATE STAFF, WITHOUT, HASSLE) |

---

## HERO HEADLINE PATTERN

The signature bold/light pattern for this page:

```tsx
<span className="font-black" style={{ fontWeight: '900' }}>CORPORATE STAFF</span>
<span className="font-light" style={{ fontWeight: '300' }}>HEADSHOTS</span>
<span className="font-black" style={{ fontWeight: '900' }}>WITHOUT</span>
<span className="font-light" style={{ fontWeight: '300' }}>THE</span>
<span className="font-black" style={{ fontWeight: '900' }}>HASSLE</span>
```

---

*Last Updated: January 10, 2026*
