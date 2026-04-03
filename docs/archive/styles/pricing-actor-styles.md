# Pricing Actor Page (pricing-actor.tsx) - Style Reference

Quick reference for all styling on the Actor Pricing page.

---

## SECTION 1: Header with Four Actor Headshots

```
Background:     #5577a5 (CMQ Blue)

HEADSHOTS ROW (Nina Images):
Layout:         4-column grid (grid-cols-4)
Aspect Ratio:   4:5 (aspect-[4/5])
Object Fit:     cover
Background:     bg-gray-100 (fallback)

TITLE AREA:
Background:     #575757 (CMQ Gray Dark)
Background Image: grey-linen-background-optimized.webp (repeating)
Padding:        py-12

H1 TITLE:
Font:           Raleway
Font Size:      text-4xl
Color:          white

- "PHOENIX ACTOR & THEATRICAL" → font-normal (400)
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

Headline (H4):
- "CAPTIVATING, CHARACTER-DRIVEN" → text-3xl md:text-4xl, font-bold
- "HEADSHOTS" → text-4xl md:text-5xl, font-normal
- "FOR" → text-2xl md:text-3xl, font-normal
- "ACTORS & PERFORMERS" → text-2xl md:text-3xl, font-bold
- Color: #5577a5
- Line Height: 1.8

Price:
- "$250" → text-6xl, weight 400, color #5577a5
- "plus" → text-2xl, italic, color #575757
- "IMAGE(S) you purchase" → text-lg, font-bold, color #575757
- "$100 each" → text-lg, font-bold, color #575757

RIGHT SIDE - CALENDAR:
Same as individual pricing page
```

---

## SECTION 3: Four Images Row (Ethan Images)

```
Background:     #5577a5 (CMQ Blue)

LAYOUT:
Grid:           4-column (grid-cols-4)
Aspect Ratio:   4:5 (aspect-[4/5])
Object Fit:     cover
```

---

## SECTION 4: Every Actor Session Includes

```
Background:     #f0f0f0 (light gray)
Padding:        py-16

TITLE (H2):
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
1. MULTIPLE CHARACTER LOOKS
2. PROFESSIONAL DIRECTION
3. INDUSTRY STANDARDS
4. NATURAL LIGHT OPTIONS
5. WARDROBE CONSULTATION
6. FAST TURNAROUND
```

---

## SECTION 5: Four Images Row (Kyldie Images)

```
Background:     #575757 (CMQ Gray Dark)
Background Image: grey-linen-background-optimized.webp (repeating)

LAYOUT:
Grid:           4-column (grid-cols-4)
Aspect Ratio:   4:5 (aspect-[4/5])
Object Fit:     cover
Object Position: top (object-top)
```

---

## SECTION 6: What Makes Actor Headshots Different

```
Background:     #ffffff (white)
Padding:        py-16
Max Width:      max-w-6xl (centered)

TITLE (H2):
Font:           Raleway
Font Size:      text-3xl md:text-4xl
Color:          #5577a5
Alignment:      center
Margin:         mb-12

- "WHAT MAKES" → font-normal (400)
- "ACTOR HEADSHOTS DIFFERENT" → font-bold (700)

BODY TEXT:
Font:           Raleway
Font Size:      text-xl md:text-2xl
Font Weight:    400 (normal)
Color:          text-gray-700
Line Height:    leading-relaxed
Alignment:      center
Spacing:        space-y-8 between paragraphs

Content (3 paragraphs with dashes):
- Casting directors paragraph
- Industry experience paragraph
- Formats provided paragraph
```

---

## SECTION 7: What Actors Say (ThreeReviewSection)

```
Background:     #575757 (CMQ Gray Dark)
Text Color:     white
Title:          "WHAT ACTORS SAY"

Reviews:
1. Klydie More - Commercial actor
2. Mohamad Tokko - Theater actor
3. Jessica Williams - Musical theater actor

Each includes:
- Headshot image
- Name (uppercase)
- Review text
- 5 star rating
```

---

## SECTION 8: Actor Headshot Questions (AccordionFAQSection)

```
Background:     white
Title:          "ACTOR HEADSHOT QUESTIONS"
Subtitle:       "Get answers to the most common questions about actor headshot sessions"
Text Color:     #5577a5

FAQ Items (8):
1. What's the difference between theatrical and commercial headshots?
2. How many outfit changes should I bring?
3. Should I wear makeup to my session?
4. How often should I update my headshots?
5. What format will my headshots be in?
6. Can I see the images during the session?
7. What if I'm nervous in front of the camera?
8. When will I get my final images back?
```

---

## COLORS USED ON PRICING-ACTOR PAGE

| Color | Hex | Where Used |
|-------|-----|------------|
| CMQ Blue | #5577a5 | Header, titles, cards, accents |
| White | #ffffff | Backgrounds, text on dark |
| Light Gray | #f0f0f0 | Session includes section |
| CMQ Gray Dark | #575757 | Dark sections, body text |
| Gray 100 | bg-gray-100 | Image fallback backgrounds |
| Gray 300 | border-gray-300 | Box borders |
| Gray 700 | text-gray-700 | Card body text, body paragraphs |

---

## FONT WEIGHTS USED

| Weight | Where Used |
|--------|------------|
| 400 (normal) | Body text, prices, thin title words |
| 700 (bold) | Titles, card titles, bold headline words |

---

## KEY DIFFERENCES FROM INDIVIDUAL PRICING PAGE

1. Header uses CMQ Blue background instead of gray
2. Different headline: "CAPTIVATING, CHARACTER-DRIVEN" vs "COMFORTABLE, EASY"
3. Different image rows (Nina, Ethan, Kyldie vs business headshots)
4. Actor-specific session includes cards
5. Actor-specific FAQ questions
6. "What Makes Actor Headshots Different" section unique to this page

---

*Last Updated: January 10, 2026*
