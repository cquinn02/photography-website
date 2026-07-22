# Competitor Outrank Plan — Phoenix Headshot Market

_Created 2026-07-22 from 312 Elements API data (60 tracked keywords, full SERPs
fetched 2026-07-19, 50 competitors with page-level detail) cross-checked against
Google Search Console. Companion to `docs/seo-keyword-map.md` — the lane
assignments there still govern; this plan says who we're fighting in each lane
and how to win._

---

## Where we stand

- **11 keywords at #1**, 24 in top 3, 43 of 45 ranking keywords on page one.
- **15 tracked keywords with no ranking at all** — but 7 of those are the
  suspected tracker-glitch keywords from the Jul 20 recap (GSC contradicts
  them). The other 8 are real gaps, and 5 of them belong to one unshipped page.
- Every competitor blocking us is a small local site (DA 1–34). Nobody here is
  unbeatable. We beat all of them somewhere already.

## The one pattern that explains almost everything

**Where we lose, our homepage is fighting a competitor's dedicated page.**
Of the 34 keywords where someone outranks us, the CMQ URL in the SERP is the
homepage on 26 of them. The winners' URLs are purpose-built pages:
davebentleyphotography.com wins "professional headshots phoenix" with an
802-word `/phoenix-professional-headshots` page; headshotprosaz.com wins
conference/company terms with 3,100–3,700-word pages carrying FAQPage +
Service schema. Our own June keyword map predicted this ("homepage
cannibalizing spokes"). The competitor data confirms it's the #1 fixable cause.

## Threat board (who blocks us, and how they do it)

| Competitor | DA | Ahead on | Their weapon | Their weakness |
|---|---|---|---|---|
| headshotprosaz.com | 19 | 28 kws | Massive dedicated pages (3,000–3,700w), FAQ/Service schema, covers every niche incl. conference + corporate events | Only 96 linking domains; content is long but generic; East Valley focused |
| davebentleyphotography.com | 18 | 23 kws | Dedicated page per service, full schema graph (LocalBusiness, Person, Service), 111 linking domains | Pages are thin (476–934w); portrait generalist, not a headshot specialist |
| photofusionstudio.com | 21 | 16 kws | Owns the event lane: dedicated event-headshots + event-photography pages | Weak H1s (many missing), ~1,000–1,300w, no FAQ schema |
| rachel-solomon.com | 28 | 13 kws | Raw authority: 483 linking domains, 1,868 backlinks | Content is thin (423–666w portfolio pages) — she wins on links, not relevance |
| phoenixheadshots.net | 15 | 11 kws | #1 on "Phoenix headshots" with a 3,247w homepage | Spam score 4, DA 15, no meta description, no schema at all |
| headshotsbymarie.com | 10 | 6 kws | #1 on actor/theatrical/commercial terms | DA 10 — beatable on authority alone |
| gabbycanario.com | 1 | 4 kws | #1 "actor headshots near me" | **DA 1.** Losing to this site is purely a content-relevance gap |

## How the "homepage vs. dedicated page" problem actually gets fixed

The fix is NOT new homepage content — the homepage stays a broad hub (settled
strategy). The fix is making each spoke strong enough that Google swaps it in
for the homepage on its niche terms. Each of the 26 losing keywords resolves
through one of these routes:

| Route | Keywords it fixes | Where in this plan |
|---|---|---|
| Ship the hidden convention/booth pages | convention, conference, trade show, event headshots + 5 booth terms | Phase 1.1 (PINNED until Cindy's review) |
| Deepen the corporate spoke | phoenix corporate headshots, corporate headshots AZ/near me, team/group/staff headshots | Phase 2 |
| Deepen the actor spoke | actor (2 variants), theatrical, commercial headshots | Phase 3 |
| Deepen business spoke | business headshots (3 variants), executive headshots, professional portraits | Phase 3 (same treatment as actor) |
| Deepen ERAS page | ERAS + medical residency headshots | Phase 3 |
| Homepage keeps these; win via authority | professional headshots phoenix (3 variants), Phoenix headshots, professional photography phoenix, mobile/photographer terms | Phase 4 |

## Phase 1 — Ship what's already built (highest ROI, ~zero new content)

1. **⏸ PINNED (per Cindy, 2026-07-22): `/convention-headshots-phoenix` and
   `/headshot-booth-phoenix` are mockups she has not reviewed — no images
   added yet. Do NOT de-noindex or sitemap them until she reviews them after
   returning to the States.** Original action for when she's back:
   Both are complete (~3,000 words each), both are `noindex`, and GSC says the
   convention URL is "unknown to Google." These two pages target 9 tracked
   keywords we currently fight with the homepage or don't rank for at all:
   convention headshots Phoenix (#6), conference headshots (#4), trade show
   headshots (#11), event headshots (#7), tradeshow/expo/event headshot booth +
   headshot booth Phoenix + headshot booth rental (unranked).
   Steps: Cindy reviews both pages for accuracy/readiness → remove noindex →
   add to sitemap.xml → add internal links from homepage services area and
   corporate page → request indexing in GSC.
   Blockers to beat: photofusionstudio (1,326w, no FAQ schema, weak H1s) and
   headshotprosaz conference page (3,539w, strong). Our pages are already in
   the right weight class.
2. ✅ DONE 2026-07-22: **killed the `/lawyer-headshots-phoenix-2` duplicate**
   (file deleted, 301 → main lawyer page in next.config.js).
3. ✅ DONE 2026-07-22: **schema parity pass.** Survey showed spokes already
   carry Service + ProfessionalService + Breadcrumb + Offer, and FAQSection/
   AccordionFAQSection already emit FAQPage. The two real gaps — ERAS and
   LinkedIn pages had visible FAQs with no FAQPage schema — are fixed
   (7 and 9 questions respectively, text matching visible content).

## Phase 2 — Win back the corporate lane

"phoenix corporate headshots": we're #11 with `/corporate-staff-headshots`;
ahead of us are davebentley (#1), headshotprosaz (#3), duanefurlong (#4),
phoenixheadshots.net (#5). This is the map's conflict #2 (business/corporate/
team triangle). Actions:
- Differentiate `/corporate-staff-headshots` hard toward **on-location, staff,
  volume, company** intent (per the map's lane definition). It currently loses
  "corporate headshots Phoenix, AZ" to the homepage (#3 via `/`).
- Compare against headshotprosaz's 3,507w company-headshots page: ours is
  2,748 JSX words (less actual copy). Expand with content only we can write:
  how a 50-person on-site shoot actually runs, consistency system, scheduling
  logistics, real client scenarios. (No generic "why headshots matter" filler.)
- Internal links: lawyer/business/realtor/team pages → corporate page with
  "corporate headshots Phoenix" anchor variants.

## Phase 3 — Take the beatable #1s (small fish first)

These are #1 positions held by DA ≤ 10 sites — content-relevance losses we
can reverse with focused spoke work:
- **actor headshots near me / actor headshots Phoenix, AZ / theatrical
  headshots** — losing to headshotsbymarie (DA 10) and gabbycanario (DA 1).
  Deepen `/actor-headshots-phoenix` (theatrical vs commercial sections, casting
  expectations in Phoenix market). headshotprosaz's actor page is 3,140w.
- **commercial headshots Phoenix** (#2 behind headshotsbymarie) — same page,
  add a real commercial-headshots section (H2 keyword in body text per rule).
- **ERAS / medical residency headshots** (#6/#10) — our page is solid but
  outgunned: headshotprosaz has a 3,288w service page + 2,449w guide;
  davebentley a 934w article. Ours needs the 2026-2027 ERAS blog post tightly
  interlinked + expanded FAQ. Aim: own "ERAS headshots Phoenix" outright.

## Phase 4 — The head-term war (the long game)

"professional headshots phoenix" (#5), "Phoenix headshots" (#7),
"professional headshots Phoenix, AZ" (#9) stay with the homepage (hub rule —
do NOT build a competing spoke, see `feedback_homepage_broad`). Winning these
means beating davebentley's dedicated page and rachel-solomon's authority with
homepage strength:
- **Authority is our measurable gap.** Blockers: bentley 111 linking domains,
  photofusion 151, rachel-solomon 483. Action: pull our own Moz/link profile
  (312 doesn't expose it for our site) and set a local link plan: Phoenix
  chamber + AZ business orgs, photography/venue partner pages, supplier links,
  local press (Cindy's 14 years + 138+ reviews is a story), guest content on
  Phoenix business blogs.
- Keep review velocity (138+ auto-updates weekly — already handled).
- phoenixheadshots.net holds #1 on "Phoenix headshots" with DA 15 / spam 4 /
  zero schema — the most winnable head-term #1 on the board.

## Explicitly NOT in this plan

- **Event photography keywords** (corporate event photography, conference
  photographer, red carpet photography Phoenix) — competitors rank because
  they sell that service. Only chase these if Cindy decides to sell event
  *photography* (not just event headshots). Business decision, not SEO gap.
- **headshots for linkedin** (global term, AI-tool SERP — instaheadshots,
  monica.im). Not a local fight; our LinkedIn page already wins the local term.
- **Modeling page** — draft by design (`project_modeling_page_status`).
- **The 7 glitch keywords** (PROFESSIONAL HEADSHOT PHOTOGRAPHER PHOENIX,
  headshot photographer Phoenix AZ / Phoenix AZ headshot photographer,
  headshot photographer near me, executive headshots near me, Arizona
  headshots, headshot booth Phoenix): tracker says unranked, GSC says top 10.
  Re-check after the next weekly fetch before spending any effort.

## Measurement

- Weekly: 312 recap email cross-checked against `scripts/three12-rankings.mjs`
  (raw API) — don't act on the email's framing alone.
- Monthly: GSC position/clicks for each phase's target keywords.
- Success = corporate lane back on page 1, event/booth pages ranking top 5,
  actor cluster #1, head terms top 3.

## Appendix — keyword → page → blocker (fights we're currently losing)

| Keyword | Us | Our URL | Beat this |
|---|---|---|---|
| phoenix corporate headshots | #11 | /corporate-staff-headshots | davebentley #1 (DA18) |
| trade show headshots Phoenix | #11 | / (homepage) | headshotprosaz #1 (DA19) |
| medical residency headshots Phoenix | #10 | /eras-medical-headshots | davebentley #1 (DA18) |
| professional headshots Phoenix, AZ | #9 | / | davebentley #1, rachel-solomon #2 |
| professional photography phoenix | #8 | / | davebentley #2 (DA18) |
| Phoenix headshots | #7 | / | phoenixheadshots.net #1 (DA15, spam 4) |
| event headshots Phoenix | #7 | / | headshotprosaz #1, carrieevans #2 |
| convention headshots Phoenix | #6 | / | photofusion #1 (DA21) |
| actor headshots Phoenix, AZ | #6 | / | headshotsbymarie #1 (DA10) |
| ERAS HEADSHOTS PHOENIX | #6 | /eras-medical-headshots | davebentley #1 (DA18) |
| professional headshots phoenix | #5 | / | davebentley #1, rachel-solomon #2 |
| theatrical headshots Phoenix | #5 | /actor-headshots-phoenix | headshotsbymarie #1 (DA10) |
| business headshots Phoenix, AZ | #5 | / | davebentley #1 (DA18) |
| conference headshots Phoenix | #4 | / | headshotprosaz #1 (DA19) |
| real estate headshots Phoenix | #4 | /realtor-headshots-phoenix | headshotprosaz #1 (DA19) |
| business headshots phoenix | #3 | / | davebentley #1 (DA18) |
| executive headshots Phoenix, AZ | #3 | / | davebentley #1, gilmore #2 |
| team headshots Phoenix | #3 | / | headshotprosaz #1, photofusion #2 |
| corporate headshots near me | #2 | / | davebentley #1 (DA18) |
| actor headshots near me | #2 | /actor-headshots-phoenix | gabbycanario #1 (DA 1!) |
| commercial headshots Phoenix | #2 | / | headshotsbymarie #1 (DA10) |
| group headshots Phoenix | #2 | /corporate-staff-headshots | photofusion #1 (DA21) |
| tradeshow/expo/event headshot booth, booth rental | — | (page is noindex) | twodudesphoto, headshotprosaz, irisbooth |
