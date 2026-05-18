# Outstanding Content Checklist

**Last updated:** 2026-05-18
**Status:** Site is live at [https://www.impact-works.us](https://www.impact-works.us). The items below are content, copy, decisions, or new pages that were deferred because they require input from stakeholders (numbers, copy, page content, donation flow decisions) rather than design/code work.

This file is the single source of truth for what's still needed to fully complete the site.

---

## ✅ What's already shipped

### May 4 scope
- **Home page**
  - New headline, subhead, secondary CTA copy
  - Small Linksi mascot added (now full mascot composition with chip orbits)
  - Ecosystem section removed
  - Linksi logo refreshed in the "How It Works" section (process map illustration)
- **Linksy → Linksi rebrand** — every page, every image filename
- **Heather Johnston name correction** — was "Johnson" across about page and docs
- **Connie Thomas headshot** → replaced with new professional photo
- **Platform page** — mascot now wearing Impact Works branded headphones (auto via asset swap)
- **Navigation tabs**
  - "Platform" → "Linksi Platform"
  - "Get Started" CTA → "Join Us"

### May 11–12 scope
- **`/join` page** — new dedicated page for "Join Us" nav button
- **"Join Us" nav button** — desktop + mobile routes to `/join`
- **Footer "Partner with us" link** → `https://linksy.impact-works.us/join/provider`
- **Homepage "Partner With Us" CTA** → `https://linksy.impact-works.us/join/provider`
- **Contact page** — visible email address removed from sidebar
- **Contact form** — wired to `/api/contact` via Resend

### May 18 scope
- **Contact form — reason dropdown** — "Reason for contact" is now the first required field with four options; "I Need Help Finding Services" replaces the form with a find-help panel linking to `https://linksy.impact-works.us/find-help`
- **Contact form — response time** — updated to "2 business days" on page and in confirmation email
- **Contact form — reason in admin email** — reason field now included in notification to eric@impactclay.org
- **Footer** — `mailto:hello@impactworks.dev` link removed
- **Nav** — "Collaboration" renamed back to "Impact"
- **`/providers` page** — new page for service-delivering organizations (Nonprofits, Healthcare Systems, Faith Organizations, Community Initiatives, Educational Institutions); CTA links to Linksi provider signup
- **`/hosts` page** — new page for hosting organizations (Government Agencies); includes Linksi access card and hosting sites directory (placeholder, ready to populate)
- **`/partners`** — 301 redirect to `/providers`
- **Nav + Footer** — "Partners" replaced by "Providers" and "Hosts" as separate top-level items
- **Expansion page** — Phase 2 description updated to include Putnam County (now lists Duval, St. Johns, Nassau, Baker, and Putnam); stale "See Our Partners" CTA updated to "See Our Providers"
- **Impact page** — community service dashboard section removed
- **Platform page** — "Closed-Loop Referrals" added to Capabilities section (Equity angle: surfaces where residents fall through the cracks so communities can close service gaps)
- **Platform page process map image** — "Linksy Matches Services" corrected to "Linksi Matches Services" in step 2 label
- **`/join` page** — simplified to two cards: Sign In (→ `https://linksy.impact-works.us/auth/login`) and Register Your Organization (→ `https://linksy.impact-works.us/join/provider`); Redeem an Invitation and Request Access removed

---

## 🚧 Outstanding items

### 1. Foundation page (NEW route) — `/foundation`

**Status:** Deferred. Connie confirmed the Foundation tab should be removed from the nav for now to keep nav manageable. Page not built — blocked on content + donation flow decision.

**What's needed from you:**
- [ ] **Page copy** — what does the Foundation page say?
- [ ] **Donation flow decision** — pick one:
  - **Option A:** Stripe Checkout (custom donation flow)
  - **Option B:** External link to a third-party donation platform (Givebutter, Donorbox, PayPal Giving)
  - **Option C:** Just a "Donate" button linking to the contact form for now
- [ ] **Donation amounts** — suggested tiers and recurring options
- [ ] **501(c)(3) status** — registered nonprofit? Affects donation language and tax-deduction notice
- [ ] **Nav placement** — footer-only for now, or add back to main nav when page is ready?

---

### 2. Hosting sites directory — `/hosts` page

**Status:** Directory section is built and ready. Blocked on the list of hosting sites.

**What's needed from you:**
- [ ] List of current hosting sites with name, location, and URL — Connie confirmed this is being built and will grow over time. Update the `hostingSites` array in `app/hosts/page.tsx` as sites are confirmed.

---

### 3. Stats refresh — Clay County numbers (`/expansion` page)

**Status:** Not updated. Blocked on having the new numbers. Connie raised whether these are live from Linksi — pending confirmation from Eric.

**What's needed from you:**
- [ ] Updated stats. Currently showing:
  - 67 FL Counties
  - 22.6M Residents
  - 50+ Partners Today
  - 3 Growth Phases
  Are these still accurate?

---

### 4. Stats refresh — Impact page orange ribbon

**Status:** Not updated. Blocked on having the new numbers. Same question about live data from Linksi (see item #3).

**What's needed from you:**
- [ ] Updated stats for the orange ribbon on `/impact`. Currently showing:
  - 1,500+ Residents Connected
  - 50+ Partner Organizations
  - 4,000+ Referrals Made
  - 100% Real-Time Data

---

### 5. Live stats from Linksi — pending Eric

**Status:** Drafted a message to Eric requesting read-only Dataverse API access. If granted, stats on `/expansion` and `/impact` can be pulled live from the Linksi system.

**What's needed:**
- [ ] Eric to provide: Dataverse environment URL, Azure AD app credentials (Client ID, Secret, Tenant ID), and table/field names for the three key counts
- [ ] Once received: wire up server-side API calls in Next.js to replace hardcoded numbers

---

### 6. About page history content

**Status:** Not added. Copy is coming from the team.

**What's needed from you:**
- [ ] Founding story, key milestones, or "why we built this" narrative
- [ ] Any photos/visuals to accompany the history

The current About page has a Timeline section (2024 + 2025 milestones) ready to expand once copy is provided.

---

### 7. Contact form delivery — confirm Resend API key

**Status:** Form is fully built and wired. Uses Resend (`noreply@impact-works.us`) to send admin notification to eric@impactclay.org and a confirmation to the submitter. Delivery is live **only if** `RESEND_API_KEY` is set in Vercel.

**What's needed:**
- [ ] Verify `RESEND_API_KEY` is configured in Vercel environment variables. If not set, contact form submissions will silently fail.
