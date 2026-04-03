# Schema Implementation Plan for CMQ Headshots
## Goal: Maximize AI Visibility & Search Rich Results

**Created:** December 26, 2025
**Status:** Plan Ready for Approval

---

## Executive Summary

Based on deep research into schema markup best practices for 2025, AI visibility optimization, and photography business SEO, this plan outlines a comprehensive schema strategy for cmqheadshots.com.

### Key Research Findings

| Finding | Source | Impact |
|---------|--------|--------|
| 81% of AI-cited pages have schema markup | AccuraCast Study | Critical |
| Pages with FAQPage schema are 3.2x more likely to appear in AI Overviews | Industry Study | High |
| AI-referred sessions jumped 527% in 2025 | Semrush | High |
| 72% of Google first-page results use schema | Backlinko | High |
| Microsoft confirmed schema helps LLMs understand content (March 2025) | SMX Munich | Confirmed |
| Only 12.4% of websites implement structured data | Industry Data | Competitive Opportunity |

---

## Current State

### What You Have
- **LocalBusiness Schema** (site-wide in Layout.tsx)
  - Business name, address, phone
  - Geo coordinates
  - Areas served (Phoenix, Scottsdale, Tempe, Mesa, Chandler)
  - Opening hours
  - Social profiles

### What's Missing
| Schema Type | Priority | Reason |
|-------------|----------|--------|
| FAQPage | **Critical** | 3.2x more AI visibility, you already have 18+ FAQs |
| Service | **High** | Defines your service offerings for AI understanding |
| OfferCatalog | **High** | Links services to your LocalBusiness |
| Review (on Service pages) | **Medium** | Trust signals (must follow Google guidelines) |
| Person (photographer) | **Medium** | E-E-A-T signal |
| BreadcrumbList | **Low** | Navigation clarity |

---

## Implementation Plan

### Phase 1: FAQPage Schema (Highest Impact)

**Why First:** FAQPage schema provides the biggest AI visibility boost because:
1. AI systems extract Q&A pairs easily
2. Voice search prioritizes FAQ content
3. You already have 18+ FAQs written and displayed

**Pages to Add FAQPage Schema:**

| Page | # of FAQs | Implementation |
|------|-----------|----------------|
| Homepage (`index.tsx`) | 9 FAQs (3 sections) | Combine into one FAQPage schema |
| Pricing Individual (`pricing-individual.tsx`) | 9 FAQs | Add FAQPage schema |
| Pricing Actor (`pricing-actor.tsx`) | ~9 FAQs | Add FAQPage schema |
| Corporate Staff Headshots | 3 FAQs | Add FAQPage schema |

**Technical Implementation:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you only shoot headshots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I have specialized in headshots, but I love creating portraits..."
      }
    }
    // ... more questions
  ]
}
```

**Important Google Guidelines:**
- All FAQ content MUST be visible on page load (your flip cards/accordions are fine)
- Questions and answers must match exactly what's on the page
- One FAQPage per page
- No self-promotional content in answers

---

### Phase 2: Service Schema with OfferCatalog

**Purpose:** Define your services so AI systems understand what you offer.

**Services to Define:**

1. **Executive Headshots**
   - Target: Business professionals, executives, entrepreneurs
   - Keywords: executive headshots phoenix, professional headshots

2. **Corporate Staff Headshots**
   - Target: Companies, teams, HR departments
   - Keywords: corporate headshots, team photos, staff headshots

3. **Acting Headshots**
   - Target: Actors, models, performers
   - Keywords: acting headshots phoenix, actor headshots

4. **Individual Headshots**
   - Target: General professionals, LinkedIn users
   - Keywords: business headshot, linkedin headshot

**Technical Implementation (in Layout.tsx):**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cmqheadshots.com",
  "name": "CMQ Headshots",
  // ... existing LocalBusiness properties ...
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Professional Headshot Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Executive Headshots",
          "description": "Professional headshots for executives, entrepreneurs, and business professionals in Phoenix",
          "provider": {"@id": "https://www.cmqheadshots.com"},
          "areaServed": {
            "@type": "City",
            "name": "Phoenix"
          },
          "serviceType": "Photography"
        }
      },
      // ... more services
    ]
  }
}
```

---

### Phase 3: Page-Specific Service Schema

**For each service page, add specific Service schema:**

**Corporate Staff Headshots Page:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Corporate Staff Headshots Phoenix",
  "description": "On-location and studio corporate headshots for businesses in Phoenix, Scottsdale, and the Valley",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://www.cmqheadshots.com"
  },
  "areaServed": ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler"],
  "serviceType": "Corporate Photography",
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "price": "Contact for quote"
    }
  }
}
```

---

### Phase 4: Review Schema (Carefully)

**Google's Rules (Important!):**
- ❌ CANNOT use AggregateRating directly on LocalBusiness
- ❌ CANNOT add review schema to self-published testimonials
- ✅ CAN use Review schema on Service pages with genuine reviews
- ✅ CAN display star ratings from third-party platforms (Google, Yelp)

**Recommended Approach:**
1. Link to Google Business Profile reviews
2. Add Review schema only to Service pages where reviews are displayed
3. Ensure review counts match exactly what's visible

**Alternative:** Display Google/Yelp review widgets that bring their own schema.

---

### Phase 5: Person Schema (Photographer)

**Purpose:** Establish E-E-A-T (Experience, Expertise, Authority, Trust)

**Add to About Page:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Cindy Quinn",
  "jobTitle": "Professional Headshot Photographer",
  "worksFor": {
    "@type": "LocalBusiness",
    "@id": "https://www.cmqheadshots.com"
  },
  "knowsAbout": ["Headshot Photography", "Portrait Photography", "Corporate Photography"],
  "sameAs": [
    "https://www.instagram.com/cmqheadshots",
    "https://www.facebook.com/cmqheadshots"
  ]
}
```

---

## Implementation Priority & Timeline

| Phase | Schema Type | Pages Affected | Complexity |
|-------|-------------|----------------|------------|
| **1** | FAQPage | 4 pages | Low |
| **2** | Service + OfferCatalog | Layout.tsx | Medium |
| **3** | Page-specific Service | 4-5 service pages | Medium |
| **4** | Review | Service pages | Low (careful) |
| **5** | Person | About page | Low |

---

## Technical Architecture

### Option A: Centralized (Recommended)
Create a schema utility file that generates schema objects:
```
src/
  lib/
    schema.ts          # Schema generator functions
  components/
    SchemaScript.tsx   # Reusable schema injection component
```

### Option B: Per-Page
Add schema directly to each page's `<Head>` section.

**Recommendation:** Option A for maintainability.

---

## Validation & Testing

### Before Deployment
1. Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Validate syntax with [Schema.org Validator](https://validator.schema.org/)
3. Check for errors in Google Search Console

### After Deployment
1. Monitor Google Search Console for structured data errors
2. Track AI visibility in Semrush
3. Check for rich results in Google searches

---

## Expected Outcomes

| Metric | Current | Target (3-6 months) |
|--------|---------|---------------------|
| AI Visibility Score | 30 | 60+ |
| AI Mentions | 6 | 15+ |
| Cited Pages | 1 | 4+ |
| Rich Results | Unknown | FAQ snippets appearing |

---

## FAQ Schema Content Audit

### Homepage FAQs (9 total)

**Section 1 - General:**
1. Do you only shoot headshots?
2. Will you help me pose during my headshot session?
3. Can you help me create my acting portfolio?

**Section 2 - Pricing/Logistics:**
1. Do you offer discounts?
2. How long is the headshot session?
3. What are your business hours?

**Section 3 - Corporate:**
1. Can you come to our office and take our staff headshots?
2. Do you only have a few backdrops?
3. I'm really nervous, can you help me?

### Pricing Individual FAQs (9 total)
1. What forms of payment do you accept?
2. When will I get my final images back?
3. Can you help me relax?
4. What should I wear?
5. Do I need a Pro Make-up Artist?
6. What size are the final images?
7. Can I bring a friend?
8. Will you retouch my Photos?
9. Do you have hair advice?

---

## Sources

- [Semrush: How to Optimize for AI Search](https://www.semrush.com/blog/ai-search-optimization/)
- [Semrush AI Overviews Study 2025](https://www.semrush.com/blog/semrush-ai-overviews-study/)
- [Search Engine Land: Schema and AI Overviews](https://searchengineland.com/schema-ai-overviews-structured-data-visibility-462353)
- [Google: FAQPage Structured Data](https://developers.google.com/search/docs/appearance/structured-data/faqpage)
- [Google: LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: Review Snippet Structured Data](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [BrightLocal: Review Schema Rules](https://www.brightlocal.com/learn/review-schema/)
- [Schema.org: Service Type](https://schema.org/Service)
- [Schema.org: OfferCatalog](https://schema.org/OfferCatalog)

---

## Next Steps

1. **Approve this plan** - Review and confirm approach
2. **Phase 1 Implementation** - Add FAQPage schema to all pages with FAQs
3. **Test & Validate** - Use Google tools to verify
4. **Deploy & Monitor** - Push to production, track results
5. **Iterate** - Add Service schema in Phase 2

---

*Ready to proceed with implementation when you approve.*
