# Pricing Individual Page (pricing-individual.tsx) - Style Reference

Quick reference for all styling on the Individual Pricing page.

---

## SECTION 1: Header with Four Headshots

```
Background:     #575757 (CMQ Gray Dark)
Background Image: grey-linen-background-optimized.webp (repeating)

HEADSHOTS ROW:
Layout:         4-column grid (grid-cols-4)
Aspect Ratio:   square (aspect-square)
Object Fit:     cover

TITLE AREA:
Background:     Same as above (gray with texture)
Padding:        py-12

H1 TITLE:
Font:           Raleway
Font Size:      text-4xl md:text-5xl
Color:          white

- "PHOENIX INDIVIDUAL BUSINESS" → font-normal (400)
- "HEADSHOT RATES" → font-bold (700)
```

---

## SECTION 2: Pricing and Calendar

```
Background:     white (bg-white)
Padding:        py-16

LAYOUT:
Grid:           lg:grid-cols-2
Gap:            gap-8
Max Width:      max-w-7xl

LEFT SIDE - PRICING BOX:
Border:         2px gray-300
Border Radius:  rounded-lg
Padding:        p-8
Height:         h-[800px]
Shadow:         shadow-lg

Headline:
- "COMFORTABLE, EASY" → text-3xl md:text-4xl, font-bold
- "HEADSHOTS" → text-4xl md:text-5xl, font-normal
- "YOU'RE" → text-2xl md:text-3xl, font-normal
- "GOING TO LOVE" → text-2xl md:text-3xl, font-bold
- Color: #5577a5
- Line Height: 1.8

Price:
- "$250" → text-6xl, weight 400, color #5577a5
- "plus" → text-2xl, italic, color #575757
- "IMAGE(S) you purchase" → text-2xl, weight 400, color #575757
- "$100 each" → text-3xl, font-bold, color #575757

RIGHT SIDE - CALENDAR:
Border:         2px gray-300
Border Radius:  rounded-lg
Shadow:         shadow-lg
Contains:       Acuity Scheduling iframe (height 1000px)

APPOINTMENT NOTICE:
Font Size:      20px
Color:          text-gray-600
Padding:        pt-16 pb-2
```

---

## SECTION 3: Every Session Includes

```
Background:     #f0f0f0 (light gray)
Padding:        py-16

TITLE:
Font:           Raleway
Font Size:      text-4xl
Font Weight:    font-bold
Color:          #5577a5
Alignment:      center
Margin:         mb-8

CARDS (6, 3-column grid):
Background:     white
Border Radius:  rounded-lg
Padding:        p-8
Shadow:         shadow-lg
Alignment:      text-center

Icon Circle:
- Size:         w-16 h-16
- Border:       2px #5577a5
- Border Radius: rounded-full

Checkmark Icon:
- Size:         w-8 h-8
- Color:        #5577a5

Card Title:
- Font:         Raleway
- Size:         text-xl (20px)
- Weight:       font-bold
- Color:        #5577a5

Card Body:
- Font:         Raleway
- Color:        text-gray-700
- Line Height:  leading-relaxed

CARD TITLES:
1. UNLIMITED SHOOTING TIME
2. UNLIMITED OUTFITS
3. VARIOUS BACKDROPS
4. PROFESSIONAL RETOUCHING
5. PREPARATION INFORMATION
6. 1-ON-1 IMAGE SELECTION
```

---

## SECTION 4: Image Selection and Delivery

```
Background:     #5577a5 (CMQ Blue)
Padding:        py-16
Max Width:      max-w-4xl (centered)
Alignment:      text-center

BODY TEXT:
Font:           Raleway
Font Size:      text-xl md:text-2xl
Font Weight:    400 (normal)
Color:          white
Line Height:    leading-relaxed
Letter Spacing: 0.03em

Content:
- Bullet point about image selection process
- Bullet point about image delivery (5 versions, 7 days)
```

---

## SECTION 5: Client Testimonials (ThreeReviewSection)

```
Background:     #575757 (CMQ Gray Dark)
Text Color:     white
Layout:         3-column grid

Review Cards include:
- Circular headshot image
- Client name
- Review text
- 5 star rating
```

---

## SECTION 6: FAQ Section (AccordionFAQSection)

```
Background:     white
Title Color:    #5577a5

TITLE:
Text:           "FREQUENTLY ASKED QUESTIONS"

SUBTITLE:
Text:           "Get answers to common questions about our individual headshot sessions"

FAQ Items (9):
1. What forms of payment do you accept?
2. When will I get my final images back?
3. Can you help me relax?
4. What should I wear?
5. Do I need a Pro Make-up Artist?
6. What size are the final images?
7. Can I bring a friend?
8. Will you retouch my Photos?
9. Do you have hair advise?
```

---

## SECTION 7: Helpful Tip Link

```
Background:     white (bg-white)
Padding:        py-8

TEXT:
Font:           Raleway
Font Size:      text-lg (18px)
Color:          #575757
Link Color:     #5577a5 (underline, hover:no-underline)

Content:        Link to men's headshot fashion blog post
```

---

## SECTION 8: Staff/Team Headshots CTA

```
Background:     #f0f0f0 (light gray)
Padding:        py-16
Max Width:      max-w-4xl (centered)
Alignment:      text-center

TITLE:
Font:           Raleway
Font Size:      text-4xl
Font Weight:    font-bold
Color:          #5577a5

BODY TEXT:
Font Size:      text-xl
Font Weight:    400
Color:          #5577a5

CTA BUTTON:
Text:           "REQUEST A QUOTE"
Font:           Raleway
Font Size:      text-lg
Font Weight:    font-medium
Background:     #5577a5
Hover Background: #575757 with linen texture
Text Color:     white
Padding:        px-8 py-3
Border Radius:  rounded
Link:           /corporate-staff-headshots
```

---

## COLORS USED ON PRICING-INDIVIDUAL PAGE

| Color | Hex | Where Used |
|-------|-----|------------|
| CMQ Blue | #5577a5 | Titles, prices, icons, buttons, highlight section |
| White | #ffffff | Light backgrounds, text on dark, cards |
| Light Gray | #f0f0f0 | Section backgrounds |
| CMQ Gray Dark | #575757 | Header background, body text, hover states |
| Gray 300 | border-gray-300 | Box borders |
| Gray 600 | text-gray-600 | Appointment notice text |
| Gray 700 | text-gray-700 | Card body text |

---

## FONT WEIGHTS USED

| Weight | Where Used |
|--------|------------|
| 400 (normal) | Body text, prices, thin title words |
| 500 (medium) | Quote button |
| 700 (bold) | Titles, card titles, bold headline words |

---

*Last Updated: January 10, 2026*
