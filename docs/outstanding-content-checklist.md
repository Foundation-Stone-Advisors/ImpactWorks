# Outstanding Content Checklist

**Last updated:** 2026-05-05
**Status:** Site is live at [https://www.impact-works.us](https://www.impact-works.us). The items below are content, copy, decisions, or new pages that were deferred from the May 4 update list because they require input from stakeholders (numbers, copy, page content, donation flow decisions) rather than design/code work.

This file is the single source of truth for what's still needed to fully complete the May 4 scope.

---

## ✅ What's already shipped

For reference, these May-4-list items have landed in production:

- **Home page**
  - New headline, subhead, secondary CTA copy
  - Small Linksi mascot added (now full mascot composition with chip orbits)
  - Ecosystem section removed
  - Linksi logo refreshed in the "How It Works" section (process map illustration)
- **Linksy → Linksi rebrand** — every page, every image filename
- **Heather Johnson title** → "Data & Systems Analyst"
- **Connie Thomas headshot** → replaced with new professional photo
- **Platform page** — mascot now wearing Impact Works branded headphones (auto via asset swap)
- **Navigation tabs**
  - "Platform" → "Linksi Platform"
  - "Impact" → "Collaboration"
  - "Get Started" CTA → "Join Us"

---

## 🚧 Outstanding items

Organized by what's blocking each one — content/copy, decisions, numbers, or new pages.

### 1. Foundation page (NEW route) — `/foundation`

**Status:** Not built yet. Blocked on content + donation flow decision.

**What's needed from you:**
- [ ] **Page copy** — what does the Foundation page say? You mentioned it should "further explain the community operating system." Is the explanation the same as `/platform` content, or different framing?
- [ ] **Donation flow decision** — pick one:
  - **Option A:** Stripe Checkout (we build a custom donation flow with amount selector, processing fees toggle, recurring vs one-time)
  - **Option B:** External link to a third-party donation platform (Givebutter, Donorbox, PayPal Giving, GoFundMe Charity)
  - **Option C:** Just a "Donate" button that links to a contact form for now
- [ ] **Donation amounts** — if Stripe or custom: suggested amount tiers ($25, $50, $100, $500, custom?), recurring options (monthly, annually)?
- [ ] **501(c)(3) status** — is Impact Works a registered nonprofit? Affects how donation language is written and what tax-deduction notice appears

**Where it goes in the nav:**
- [ ] Position before Expansion (per May 4 list) — confirmed
- [ ] Add to main desktop nav, mobile menu, AND footer's Navigate column

**Suggested rough structure** (for you to confirm):
1. Hero with "Impact Works Foundation" headline + subhead about mission
2. Section explaining the Community Operating System (could reuse / adapt /platform copy)
3. Why donate / where the money goes (3-5 buckets — staff, tech, partner support, expansion?)
4. Donation tab/section (TBD based on flow decision above)
5. Transparency / tax-deduction notice
6. CTA ("Other ways to support" → /contact)

---

### 2. Partners page split → `/providers` + `/hosts`

**Status:** Not built yet. Blocked on how to divide the existing /partners content.

**What's needed from you:**
- [ ] **Definition** — what's the difference between a Provider and a Host in your model? Quick definitions so I can draft copy:
  - **Providers** — likely organizations that *deliver* services (nonprofits, healthcare, faith orgs)?
  - **Hosts** — likely organizations that *host the platform* in their region (governments, anchor institutions)?
- [ ] **Existing /partners content split** — current categories on `/partners`:
  - Nonprofits
  - Healthcare Systems
  - Government Agencies
  - Faith Organizations
  - Community Initiatives
  - Educational Institutions
  Which of these go on Providers, which go on Hosts? (or do both pages list overlapping categories with different framing?)
- [ ] **Should `/partners` redirect somewhere?** Two options:
  - Keep `/partners` as a landing/index page that links to both `/providers` and `/hosts`
  - Delete `/partners` and 301-redirect to `/providers` (or `/hosts`)
- [ ] **Nav placement** — both as separate top-level nav items? Or one nested?

---

### 3. Foundation page placement in nav (related to #1)

**What's needed from you:**
- [ ] Confirm final nav order. Current option per May 4 list:
  ```
  Home / About / Linksi Platform / Collaboration / Providers / Hosts / Foundation / Expansion / Contact
  ```
  That's **9 desktop nav items** — getting tight on smaller desktop viewports. Considerations:
  - Could group Providers + Hosts under a "Partners" dropdown
  - Could move Foundation to a footer-only link
  - Could trim something less essential (e.g., consolidate Expansion into Foundation since it's expansion strategy)
  Pick a direction.

---

### 4. Stats refresh — Clay County numbers (`/expansion` page)

**Status:** Not updated. Blocked on having the new numbers.

**What's needed from you:**
- [ ] Updated Clay County stats. Current numbers showing on the page:
  - 67 FL Counties
  - 22.6M Residents
  - 50+ Partners Today
  - 3 Growth Phases
  Are these still accurate? If not, what should they be?

---

### 5. Stats refresh — Impact page orange ribbon

**Status:** Not updated. Blocked on having the new numbers.

**What's needed from you:**
- [ ] Updated stats for the orange ribbon strip on `/impact`. Currently showing:
  - 1,500+ Residents Connected
  - 50+ Partner Organizations
  - 4,000+ Referrals Made
  - 100% Real-Time Data
  Latest numbers? Any new metric that should replace one of these?

---

### 6. Closed-loop referral verbiage — `/platform` Capabilities section

**Status:** Not added. Blocked on whether you want me to draft or someone is providing copy.

**What's needed from you:**
- [ ] Decision: do you want me to draft 2–3 options of closed-loop referral copy, or is the team providing the copy?

**If you want me to draft**, here's a starting option for you to react to:

> **Closed-Loop Referrals**
> Every match Linksi makes is tracked end-to-end. We confirm whether the resident was successfully connected to a service, where the gaps are, and what's missing in your community — so you can fill them. No more "we made a referral and don't know what happened."

Three angles to choose between:
- **Operational** — emphasizes tracking, verification, data integrity (above)
- **Equity** — emphasizes finding service gaps, ensuring no one falls through the cracks
- **Outcomes** — emphasizes results, success rates, verified connections

---

### 7. About page history content

**Status:** Not added. Per the May 4 list, "they will provide history" — implying copy is coming from your team.

**What's needed from you:**
- [ ] Copy for the About page history section. Could be:
  - Founding story
  - Key milestones with dates
  - "Why we built this" narrative
  - Any combination of the above
- [ ] Any photos/visuals to accompany the history (early team photos, key moments)?

The current About page has:
- "Our Story" hero
- Bento "Who We Are" + Vision/Stats
- Timeline section (currently 2024 + 2025 milestones — could expand back further once history copy is provided)
- Team grid (Connie, Michelle, Heather)
- Vision + Mission cards

---

### 8. Tab rename consideration: "Collaboration"

**Status:** Renamed in nav (was "Impact"). The page heading still reads "Community Impact" — was the May 4 intent to also rename the page heading?

**What's needed from:**
- [ ] Confirm: should the `/impact` page H1 ("Community Impact") also become "Collaboration" or "Impact Communities Network"? Currently:
  - Nav label: "Collaboration" ✅
  - URL: `/impact` (kept stable to avoid breaking links)
  - H1 on the page: "Community Impact" ❓
  - Eyebrow: "Measurable Results"
