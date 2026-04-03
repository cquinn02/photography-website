# Schema & SERP Audit — All Service Pages
*Last updated: March 15, 2026*

## Summary

All 9 service pages have: FAQSchema, Service schema, `<Head>` with title + meta description.

---

## Page-by-Page Audit

### 1. Phoenix Business Headshots (`/phoenix-business-headshots`)
- **Title:** Phoenix Business Headshots | Business Headshot Photography | CMQ Headshots
- **Meta Description:** Professional business headshots in Phoenix, AZ. Expert business headshot photography near me for executives, entrepreneurs, and LinkedIn profiles. Book your session today.
- **Schema:** Service, BreadcrumbList, FAQPage, Offer
- **areaServed:** Phoenix
- **Offer:** Yes (session fee, images at $100 each)

### 2. Corporate Staff Headshots (`/corporate-staff-headshots`)
- **Title:** Corporate Staff Headshots Phoenix | CMQ Headshots
- **Meta Description:** Corporate staff headshots in Phoenix and Scottsdale without the hassle. Professional on-site team photography with consistent results for your entire staff.
- **Schema:** Service, BreadcrumbList, FAQPage
- **areaServed:** Phoenix, Scottsdale, Tempe
- **Offer:** No ⚠️

### 3. Actor Headshots (`/actor-headshots-phoenix`)
- **Title:** Actor Headshots Phoenix AZ | CMQ Headshots
- **Meta Description:** Professional actor headshots in Phoenix, AZ. Theatrical, commercial, and character headshots with expert direction tailored to the roles you want.
- **Schema:** Service, BreadcrumbList, FAQPage, Offer
- **areaServed:** Phoenix
- **Offer:** Yes (session fee, images at $100 each)

### 4. LinkedIn Headshots (`/linkedin-headshots`)
- **Title:** LinkedIn Headshots Phoenix | CMQ Headshots
- **Meta Description:** Professional LinkedIn headshots in Phoenix, AZ. Pro photos get 21x more views and 36x more messages. Book your session today.
- **Schema:** Service, BreadcrumbList, FAQPage, Offer
- **areaServed:** Phoenix
- **Offer:** Yes (LinkedIn Express session)

### 5. Realtor Headshots (`/realtor-headshots-phoenix`)
- **Title:** Realtor Headshots Phoenix | CMQ Headshots
- **Meta Description:** Professional real estate agent headshots in Phoenix and Scottsdale, AZ. Stand out on MLS, Zillow, and your brokerage website. Book today.
- **Schema:** Service, BreadcrumbList, FAQPage, Offer
- **areaServed:** Phoenix, Scottsdale
- **Offer:** Yes (session fee, images at $100 each)

### 6. Lawyer Headshots (`/lawyer-headshots-phoenix`)
- **Title:** Lawyer Headshots Phoenix | CMQ Headshots
- **Meta Description:** Professional lawyer and attorney headshots in Phoenix, AZ. Polished, confident headshots for law firm websites, Avvo, LinkedIn, and legal directories. Book today.
- **Schema:** Service, BreadcrumbList, FAQPage, Offer
- **areaServed:** Phoenix, Scottsdale
- **Offer:** Yes (session fee, images at $100 each)

### 7. Modeling Headshots (`/modeling-headshots-phoenix`)
- **Title:** Modeling Portfolio Photography Phoenix | CMQ Headshots
- **Meta Description:** Professional modeling headshots and portfolio photography in Phoenix, Arizona. Comp cards, agency submissions, and portfolio images for commercial, fashion, and fitness models.
- **Schema:** Service, FAQPage
- **areaServed:** Phoenix
- **Offer:** No ⚠️
- **Notes:** Missing BreadcrumbList schema. Uses `LocalBusiness` instead of `ProfessionalService`. Missing `PostalAddress` in provider.

### 8. Team Composite Headshots (`/team-composite-headshots`)
- **Title:** Team Composite Headshots Phoenix | CMQ Headshots
- **Meta Description:** Team composite headshots for businesses in Phoenix and Scottsdale. Add or remove staff easily without expensive reshoots. On-location or studio sessions.
- **Schema:** Service, BreadcrumbList, FAQPage
- **areaServed:** Phoenix, Scottsdale
- **Offer:** No (quote-based)

### 9. Headshot Booth (`/headshot-booth-phoenix`)
- **Title:** Headshot Booth Phoenix AZ | Professional Headshot Booth for Events | CMQ Headshots
- **Meta Description:** Professional headshot booth for corporate events, trade shows, and conferences in Phoenix, AZ. Walk-up headshots with fast digital delivery. Branded backdrops available. Book today.
- **Schema:** Service, BreadcrumbList, FAQPage
- **areaServed:** Phoenix
- **Offer:** No (quote-based)

---

## Gaps to Address

| Page | Issue |
|------|-------|
| corporate-staff-headshots | No Offer/pricing in schema |
| modeling-headshots-phoenix | Missing BreadcrumbList schema |
| modeling-headshots-phoenix | Uses LocalBusiness instead of ProfessionalService |
| modeling-headshots-phoenix | Missing PostalAddress in provider |
| modeling-headshots-phoenix | No Offer/pricing in schema |

---

## Schema Types Used Across All Pages

| Schema Type | Purpose |
|-------------|---------|
| Service | Describes the headshot service offered |
| ProfessionalService | Provider info (CMQ Headshots) with address |
| BreadcrumbList | Navigation breadcrumbs for Google |
| FAQPage | FAQ rich results (via FAQSchema component) |
| Offer | Pricing info for rich results |
| PostalAddress | Business address in Phoenix |
