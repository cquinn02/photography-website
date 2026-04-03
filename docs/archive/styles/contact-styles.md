# Contact Page (contactus.tsx) - Style Reference

Quick reference for all styling on the Contact page.

---

## SECTION 1: Four Image Row (Top)

```
Component:      FourImageRow
Full Width:     true
Border Color:   #5577a5 (CMQ Blue)

Images:         4 business headshots (1x1 aspect ratio)
```

---

## SECTION 2: Contact Form Section

```
Background:     white (bg-white)
Section Class:  section
Max Width:      max-w-3xl (centered)

H1 TITLE:
Text:           "CONTACT CMQ HEADSHOTS"
Font:           Raleway
Font Size:      text-3xl lg:text-4xl
Font Weight:    900 (font-black)
Color:          #5577a5
Alignment:      center
Margin:         mb-6

H2 SUBTITLE:
Text:           "We'd Love to Hear From You"
Font:           Raleway
Font Size:      text-3xl md:text-4xl
Font Weight:    font-normal (400)
Color:          text-cmq-blue (#5577a5)
Margin:         mb-4

INTRO PARAGRAPH:
Font:           Raleway
Font Size:      text-xl (20px)
Font Weight:    400
Color:          text-cmq-gray-darker (#383838)
Letter Spacing: 0.03em
Line Height:    1.6
Margin:         mb-8
```

---

## CONTACT INFORMATION BOX

```
Background:     bg-gray-50
Border Radius:  rounded-lg
Padding:        p-8
Margin:         mb-8

LAYOUT:         2-column grid (md:grid-cols-2)
Gap:            gap-6

LEFT COLUMN - Contact Info:
H3 Title:
- Text: "Contact Information"
- Font: Raleway
- Size: text-xl (20px)
- Weight: font-semibold
- Color: #5577a5
- Margin: mb-4

Body Text:
- Font: Raleway
- Size: text-xl (20px)
- Weight: 400
- Color: #575757
- Letter Spacing: 0.03em
- Line Height: 1.6

Content:
- Phone: (480) 648-3429
- Location: Phoenix, Arizona (with service area)

RIGHT COLUMN - Studio Hours:
H3 Title:
- Text: "Studio Hours"
- Same styling as left column

Content:
- Monday - Friday: 9:00 AM - 6:00 PM
- Saturday: 11:00 AM - 2:00 PM
- Sunday: Closed
- Italic note about evening/weekend availability
```

---

## WHAT TO EXPECT SECTION

```
Location:       Bottom of contact info box
Border:         border-t border-gray-300
Padding:        mt-6 pt-6

H3 TITLE:
Text:           "What to Expect When You Contact Us"
Font:           Raleway
Font Size:      text-2xl lg:text-3xl
Font Weight:    font-semibold
Color:          #5577a5
Margin:         mb-4

BODY TEXT:
Font:           Raleway
Font Size:      text-xl (20px)
Font Weight:    400
Color:          #575757
Letter Spacing: 0.03em
Line Height:    1.6
```

---

## CONTACT FORM

```
Type:           Embedded 17hats iframe
Width:          100%
Height:         600px
Margin:         mt-8
```

---

## SECTION 3: Four Image Row (Bottom)

```
Background:     white (bg-white)
Padding:        py-0

LAYOUT:
Grid:           4-column (grid-cols-4)
Gap:            0 (gap-0)

IMAGES:
Aspect Ratio:   5:4 (aspect-[5/4])
Object Fit:     cover

Images:         4 corporate/sales headshots
```

---

## COLORS USED ON CONTACT PAGE

| Color | Hex | Where Used |
|-------|-----|------------|
| CMQ Blue | #5577a5 | Titles, subtitles, image border, accents |
| White | #ffffff | Main background |
| CMQ Gray Darker | #383838 | Intro text |
| CMQ Gray Dark | #575757 | Body text in info box |
| Gray 50 | bg-gray-50 | Contact info box background |
| Gray 300 | border-gray-300 | Section divider in box |

---

## FONT WEIGHTS USED

| Weight | Where Used |
|--------|------------|
| 400 (normal) | Body text, subtitle |
| 600 (semibold) | H3 titles in info box |
| 900 (black) | Main H1 title |

---

## FRONTMATTER FIELDS (content/contact.md)

These fields control the content. Edit them in `/content/contact.md`:

```yaml
title: "Contact CMQ Headshots | Phoenix Headshot Photography"
description: "Ready to book your professional headshot session?..."
pageTitle: "Contact & Book Your Session"
showContactForm: true
```

---

## PAGE STRUCTURE OVERVIEW

```
┌────────────────────────────────────────┐
│  Four Image Row (4 headshots)          │
├────────────────────────────────────────┤
│                                        │
│  H1: CONTACT CMQ HEADSHOTS             │
│  H2: We'd Love to Hear From You        │
│  Intro paragraph                       │
│                                        │
│  ┌──────────────────────────────────┐  │
│  │ Contact Info    │  Studio Hours  │  │
│  │ Phone, Location │  Hours list    │  │
│  ├──────────────────────────────────┤  │
│  │ What to Expect When You Contact  │  │
│  └──────────────────────────────────┘  │
│                                        │
│  [17hats Contact Form iframe]          │
│                                        │
├────────────────────────────────────────┤
│  Four Image Row (4 headshots, 5:4)     │
└────────────────────────────────────────┘
```

---

*Last Updated: January 10, 2026*
