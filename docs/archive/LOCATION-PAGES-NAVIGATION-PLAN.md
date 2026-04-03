# Location Pages & Navigation Plan

## Current Situation

### Site Navigation (As-Is)
```
HEADER (every page)
├── Logo → Home
└── GET PRICING button → /pricing-individual

FOOTER (every page)
├── Quick Links
│   ├── Home → /
│   ├── About → /about
│   ├── Services → /pricing-individual
│   ├── Group Headshots → /corporate-staff-headshots
│   ├── Team Composites → /team-composite-headshots
│   ├── Blogs → /blog
│   └── Login → /admin
└── Privacy / Terms links
```

### The 13 Location Pages (Currently Orphaned)

These pages exist but nothing links to them — not the header, not the footer, not the homepage, not each other:

| Page | URL |
|------|-----|
| Scottsdale | /headshots-scottsdale |
| Tempe | /headshots-tempe |
| Gilbert | /headshots-gilbert |
| Peoria | /headshots-peoria |
| East Valley | /headshots-east-valley |
| Carefree | /headshots-carefree |
| Chandler | /headshots-chandler |
| Mesa | /headshots-mesa |
| Glendale | /headshots-glendale |
| Paradise Valley | /headshots-paradise-valley |
| Fountain Hills | /headshots-fountain-hills |
| Anthem | /headshots-anthem |
| Cave Creek | /headshots-cave-creek |

---

## Navigation Options

### Option A: Footer + Hub Page (Simplest)

Add a "Service Areas" section to the footer and create one landing page (`/service-areas`) that links to all locations.

```
HEADER (unchanged)
├── Logo → Home
└── GET PRICING → /pricing-individual

FOOTER (expanded)
├── Quick Links (existing)
├── Service Areas (NEW section)
│   ├── Phoenix (Home)
│   ├── Scottsdale
│   ├── Tempe
│   ├── Mesa / East Valley
│   ├── Chandler / Gilbert
│   ├── Glendale / Peoria
│   ├── Paradise Valley
│   ├── Fountain Hills / Carefree
│   ├── Anthem / Cave Creek
│   └── View All Areas → /service-areas
└── Privacy / Terms

/service-areas (NEW hub page)
├── Map or grid of all 13+ locations
├── Links to each location page
└── General "we travel to you" messaging
```

**Pros:** Minimal design changes, quick to implement
**Cons:** Footer links aren't as strong for SEO as header nav

---

### Option B: Header Menu + Footer (Moderate) — RECOMMENDED

Add a proper navigation menu to the header with dropdowns.

```
HEADER (redesigned)
├── Logo → Home
├── NAV MENU
│   ├── Services
│   │   ├── Business Headshots → /pricing-individual
│   │   ├── Actor Headshots → /pricing-actor
│   │   ├── LinkedIn Headshots → /linkedin-headshots
│   │   ├── Corporate/Staff → /corporate-staff-headshots
│   │   └── Team Composites → /team-composite-headshots
│   ├── Locations ▼ (dropdown)
│   │   ├── Phoenix (Home)
│   │   ├── Scottsdale
│   │   ├── Tempe
│   │   ├── Mesa
│   │   ├── Chandler
│   │   ├── Gilbert
│   │   ├── ... (all cities)
│   │   └── View All → /service-areas
│   ├── About → /about
│   ├── Blog → /blog
│   └── Contact → /contactus
└── GET PRICING button → /pricing-individual

MOBILE HEADER
├── Logo
├── Hamburger ☰ → slides out or drops down with same links
└── GET PRICING button
```

**Pros:** Standard navigation pattern, best for SEO (header links carry the most weight), professional look
**Cons:** Bigger design/development effort, need to design mobile hamburger menu

---

### Option C: Header Menu + Hub Page + Cross-linking (Most Comprehensive)

Everything in Option B, plus a hub page and location pages that link to each other.

```
Same as Option B, plus:

/service-areas (hub page)
├── Hero: "Professional Headshots Across the Valley"
├── Grid/map of all locations with thumbnails
└── CTA: Book your session

Each location page gets:
├── Breadcrumb: Home > Service Areas > Scottsdale
├── "Nearby Locations" sidebar or footer section
│   ├── Links to 3-4 geographically close cities
│   └── Example: Scottsdale page shows Paradise Valley, Fountain Hills, Tempe
└── Back to All Locations → /service-areas
```

**Pros:** Best possible SEO structure, creates a strong internal link network, great user experience
**Cons:** Most work to implement

---

## Location Grouping Options

### Individual listing (all 13 separately)
Maximum SEO value — each city gets its own prominent link.

### Grouped listing
Keeps menus shorter:
- Mesa / East Valley
- Chandler / Gilbert
- Glendale / Peoria
- Fountain Hills / Carefree
- Anthem / Cave Creek
- Phoenix, Scottsdale, Tempe, Paradise Valley (standalone)

### Mixed approach
Group in the dropdown menu for readability, but each city still has its own individual page and link.

---

## Recommendation

**Option B or C** would give the strongest SEO benefit. The header navigation menu is what the site needs regardless of the location pages — right now visitors can only find pages through the footer, which isn't ideal.

---

## Decision Needed

- [ ] Which option (A, B, or C)?
- [ ] Group cities or list individually in the menu?
- [ ] Any pages to add/remove from the location list?

---

## Implementation Phases (Once Decision is Made)

### Phase 1: Header Navigation Redesign (if Option B or C)
1. Redesign Header component with full nav menu
2. Add dropdown functionality for Services and Locations
3. Build mobile hamburger menu
4. Test across all screen sizes

### Phase 2: Footer Update
1. Add Service Areas section to footer
2. Link to all location pages (grouped or individual)

### Phase 3: Hub Page (if Option A or C)
1. Create `/service-areas` page
2. Grid/map layout with all locations
3. CTA and "we travel to you" messaging

### Phase 4: Cross-linking (if Option C)
1. Add breadcrumbs to location pages
2. Add "Nearby Locations" section to each location page
3. Define geographic groupings for nearby suggestions

### Phase 5: Testing & SEO
1. Verify all links work
2. Check mobile responsiveness
3. Submit updated sitemap
4. Test internal link structure

---

*Created: February 18, 2026*
*Status: Awaiting decision on approach*
