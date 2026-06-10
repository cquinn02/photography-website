# GBP Audit Checklist — CMQ Headshots

Built for a Phoenix headshot photographer competing for "best headshot photographer near me." Goal: Maps Pack visibility plus organic position improvement.

## Why this matters now (May 2026 diagnosis)

GA4 + GBP data, May 2025 → May 2026:
- GBP profile views **−46%**, searches-showing-profile **−65%**, interactions **−48%**
- Site Direct traffic **−77%** (GBP clicks land in "Direct"), while Organic Search only **−12%**

**Conclusion: this is a local-discovery / GBP problem, not an SEO problem.** Organic held; the bleed is the Maps Pack. The profile is only surfacing for branded/generic terms ("cmq headshots," "headshot") — invisible for the money terms. This checklist is the recovery. It rewards **sustained weekly activity**; expect movement in 4–8 weeks, not overnight.

---

## One-Time Setup (do once, ~60 min)

Open business.google.com/edit and walk through every section.

### Profile basics
- [ ] Business name is exactly "CMQ Headshots" (no keyword stuffing)
- [ ] Primary category: Photographer
- [ ] Secondary categories: Portrait Studio, Commercial Photographer, Photography Service
- [ ] Service area covers Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, Paradise Valley
- [ ] Hours match website
- [ ] Phone: (480) 648-3429
- [ ] Website: https://www.cmqheadshots.com
- [ ] Booking link goes direct to Acuity
- [ ] Description (750 chars max) leads with "Phoenix headshot photographer" and naturally includes "best," "professional," "studio," "14 years"
- [ ] Attributes set: women-owned, identifies as women-owned, online appointments, by appointment only

### Photos (target 75+)
- [ ] Logo uploaded (square, high-res)
- [ ] Cover photo: best studio shot
- [ ] Interior photos (5+): lighting setup, backdrops, studio space
- [ ] Exterior photos: building, parking, signage
- [ ] Owner photo of Cindy
- [ ] Behind-the-scenes shooting photos
- [ ] Sample work (30+): variety of industries
- [ ] Photos geotagged before upload (use Geoimgr.com)

### Q&A (seed your own)
Add these as the owner:
- [ ] "How much do headshots cost in Phoenix?"
- [ ] "Do you do on-location at our office?"
- [ ] "How long is a session?"
- [ ] "How fast can I get my photos?"
- [ ] "Do you do ERAS medical residency headshots?"
- [ ] "What should I wear?"
- [ ] "Do you offer rush delivery?"
- [ ] "Where is your studio?"

### Services tab
- [ ] All session types listed (Business, Corporate, Actor, LinkedIn, Realtor, Lawyer, ERAS, Team)
- [ ] Each has: price, 2-sentence description, photo
- [ ] Prices match website

### Existing reviews
- [ ] Response rate audited (reply to 100% of reviews, even old ones)
- [ ] Replies naturally include "headshot" or "Phoenix"
- [ ] Negative reviews (if any) responded to with resolution, not defensiveness

---

## Weekly Checklist (every Monday, ~15 min)

Copy this section to a fresh dated entry each week.

### Week of: __________

- [ ] Post one GBP update (recent session, tip, or seasonal hook). Image required. CTA required.
- [ ] Reply to every new review from the past 7 days
- [ ] Upload 2-3 fresh photos (recent sessions, behind-the-scenes, or studio details)
- [ ] Check Insights → Searches tab. Note new queries you ranked for: __________
- [ ] Reply to any new Q&A questions

**Review velocity check:** new reviews this week: ___

---

## Monthly Tasks (first Monday, ~30 min)

- [ ] Competitor benchmark. Pull up the top 3 competitors' GBPs in Maps. Track:
  - Their review count: __________
  - Your review count: __________
  - Their photo count: __________
  - Their last post date: __________
- [ ] Insights → Photo views. Identify the lowest-performing photo and replace it.
- [ ] Review velocity comparison. This month vs last month: __________
- [ ] Discovery searches trend. Up or down vs last month: __________

---

## Templates

### Review reply (short 5-star)

> Thank you so much, [Name]! It was a pleasure photographing you. So glad you had a great experience with your Phoenix headshot session.

### Review reply (detailed positive)

> [Name], thank you for taking the time to share this. So happy your headshot session felt comfortable. That's exactly the experience I aim for. Best of luck with [their stated goal]!

### GBP Post templates (rotate; image + CTA required)

**Offer / returning-client**
> 📸 Need an updated headshot? Returning clients get 30% off the session fee. North Phoenix studio, fast delivery. Book your spot →

**Specialty spotlight (rotate specialty)**
> Actor headshots in Phoenix — theatrical, commercial, and character looks, shot every Saturday. Only buy the images you want. Book your session →

**Corporate / on-location**
> Need your whole team photographed? I bring the studio to your Phoenix office — consistent results, minimal downtime. Get a quote →

**Seasonal / urgency**
> Medical students: ERAS season is open. Book your AAMC-formatted headshot before summer slots fill. 24-hour delivery. Reserve →

---

## Measurement — UTM links + conversion tracking

**Use these tagged links in GBP** so GBP traffic stops hiding in GA4 "Direct" and shows as its own source:

Website field:
```
https://www.cmqheadshots.com/?utm_source=google_business_profile&utm_medium=referral&utm_campaign=gbp
```
Booking button / Post CTA:
```
https://cmqheadshots.as.me/?utm_source=google_business_profile&utm_medium=referral&utm_campaign=gbp_book
```

**Conversion tracking (shipped on the site 2026-06-09):** every booking-link click now fires the existing `book_headshot_session` GA4 key event (it was configured but never firing — "No stream data detected"). No manual GA4 step needed; it's already starred as a key event. Verify after deploy via GA4 → Realtime by clicking a booking button on the live site. Note: `qualify_lead` / `close_convert_lead` / `purchase` key events are also dormant — separate cleanup.

---

## What to monitor

- **Discovery searches** (Insights). Leading indicator. Should trend up over 30 days.
- **Map Pack appearances.** Check from incognito Phoenix searches weekly.
- **Review velocity.** Goal: 4-6 new reviews per month.
- **Organic rank** for "best headshot photographer near me." Ignore single-week swings. Track 4-week moving average.
