# About Page (about.tsx) - Style Reference

Quick reference for all styling on the About page.

---

## SECTION 1: Meet Cindy (TwoColumnSection)

```
Background:     #575757 (CMQ Gray Dark)
Background Image: grey-linen-background-optimized.webp (repeating)
Min Height:     100vh
Layout:         Image LEFT, Text RIGHT

SUBTITLE (H1):
- "PROFESSIONAL PHOTOGRAPHER" → weight 700 (bold)
- "PHOENIX AZ" → weight 400 (normal)
- Size: 16px
- Tag: h1

TITLE (H2):
- Content from frontmatter: meetCindyTitle
- Color: white

BODY TEXT:
- Content from frontmatter: meetCindyDescription
- Color: white
```

---

## SECTION 2: Three Slideshow Cards (Coffee, Citizenship, Travel)

```
Background:     #ffffff (white)
Padding:        py-16 lg:py-20
Layout:         3-column grid

CARD TITLES:
Font:           Raleway
Font Size:      text-2xl (default, from frontmatter)
Font Weight:    font-bold (default, from frontmatter)
Color:          #5a81b9 (lighter CMQ Blue)

CARDS:
Aspect Ratio:   4:5 (aspect-[4/5])
Border Radius:  rounded-lg
Shadow:         shadow-lg

Slideshow Speed: 800ms per image
Transition:     opacity duration-700
```

---

## SECTION 3: Three Static Image Cards (Family, Eric, Airstream)

```
Background:     #575757 (CMQ Gray Dark)
Background Image: grey-linen-background-optimized.webp (repeating)
Padding:        py-16 lg:py-20

CARD TITLES:
Font:           Raleway
Font Size:      text-xl (20px)
Font Weight:    font-bold
Color:          #ffffff (white)

CARDS:
Aspect Ratio:   4:5 (aspect-[4/5])
Border Radius:  rounded-lg
Shadow:         shadow-lg
```

---

## SECTION 4: Philosophy Section

```
Background:     #F1F1F1 (off-white)
Padding:        py-16 lg:py-20
Max Width:      max-w-4xl (centered)

TITLE (H2):
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Color:          #5a81b9 (lighter CMQ Blue)
Content:        from frontmatter (HTML allowed)

QUOTE BOX:
Background:     white
Border Radius:  rounded-lg
Shadow:         shadow-lg
Padding:        p-8 lg:p-12

Quote Text:
- Font Size:    text-2xl (24px)
- Font Weight:  400 (normal)
- Font Style:   italic
- Color:        #5a81b9
- Wrapped in smart quotes

Description Text:
- Font Size:    text-xl (20px)
- Font Weight:  400
- Color:        #575757
- Letter Spacing: 0.03em
- Line Height:  1.6
```

---

## SECTION 5: What Sets Me Apart

```
Background:     #ffffff (white)
Padding:        py-16 lg:py-20
Max Width:      max-w-6xl (centered)

TITLE (H2):
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Color:          #5a81b9
Alignment:      center

CARDS (3):
Background:     white
Border Radius:  rounded-lg
Shadow:         shadow-lg, hover:shadow-xl
Padding:        p-8
Transition:     duration-300

Icons:          Award, Heart, Users
- Size:         h-16 w-16
- Color:        #5a81b9

Card Title:
- Font:         Raleway
- Size:         text-xl (20px)
- Weight:       font-bold
- Color:        #575757

Card Body:
- Font:         Raleway
- Size:         text-lg (18px)
- Weight:       400
- Color:        #575757
- Letter Spacing: 0.03em
- Line Height:  1.6
```

---

## SECTION 6: Expertise Section

```
Background:     #575757 (CMQ Gray Dark)
Background Image: grey-linen-background-optimized.webp (repeating)
Padding:        py-16 lg:py-20
Max Width:      max-w-4xl (centered)

TITLE (H2):
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Color:          #ffffff (white)
Alignment:      center

CARDS (4, 2x2 grid):
Background:     rgba(255, 255, 255, 0.1) (white/10)
Backdrop:       backdrop-blur-sm
Border Radius:  rounded-lg
Padding:        p-6
Alignment:      text-center
Hover:          bg-white/20
Transition:     duration-300
Links:          Clickable to relevant pages

Card Title:
- Font:         Raleway
- Size:         text-xl (20px)
- Weight:       font-bold
- Color:        #ffffff (white)

Card Body:
- Font:         Raleway
- Size:         text-lg (18px)
- Weight:       400
- Color:        #ffffff (white)
- Letter Spacing: 0.03em
- Line Height:  1.6
```

---

## SECTION 7: My Commitment

```
Background:     #F1F1F1 (off-white)
Padding:        py-16 lg:py-20
Max Width:      max-w-4xl (centered)
Alignment:      text-center

TITLE (H2):
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Color:          #5a81b9
Margin:         mb-8

BODY PARAGRAPHS:
Font:           Raleway
Font Size:      text-xl (20px)
Font Weight:    400
Color:          #575757
Letter Spacing: 0.03em
Line Height:    1.6
Margin:         mb-6 (between paragraphs)
```

---

## COLORS USED ON ABOUT PAGE

| Color | Hex | Where Used |
|-------|-----|------------|
| CMQ Blue (Light) | #5a81b9 | Titles, icons, accent color |
| White | #ffffff | Light backgrounds, text on dark |
| Off-White | #F1F1F1 | Philosophy & Commitment sections |
| CMQ Gray Dark | #575757 | Dark backgrounds, body text on light |

---

## FONT WEIGHTS USED

| Weight | Where Used |
|--------|------------|
| 400 (normal) | Body text, quote text, thin title words |
| 700 (bold) | Card titles, bold title words |

---

## FRONTMATTER FIELDS (content/about.md)

These fields control the content. Edit them in `/content/about.md`:

```yaml
# SEO
title: "..."
description: "..."

# Meet Cindy Section
meetCindyTitle: "..."
meetCindyDescription: "..."

# Slideshow Card Titles
coffeeTitle: "..."
citizenshipTitle: "..."
travelTitle: "..."

# Static Card Titles
familyTitle: "..."
ericTitle: "..."
airstreamTitle: "..."

# Philosophy Section
philosophyTitle: "..."
philosophyQuote: "..."
philosophyDescription: "..."

# What Sets Me Apart
whatSetsMeApartTitle: "..."
whatSetsMeApart:
  - title: "..."
    description: "..."

# Expertise
expertiseTitle: "..."
expertise:
  - title: "..."
    description: "..."

# Commitment
commitmentTitle: "..."
commitmentParagraph1: "..."
commitmentParagraph2: "..."
```

---

*Last Updated: January 10, 2026*
