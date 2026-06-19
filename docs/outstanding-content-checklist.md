# Outstanding Content Checklist

**Last updated:** 2026-06-18
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

### May 19 scope
- **`/foundation` page** — built with full COS DNA framework content, grant disbursement model, funding & allocation flow, 100% provider pledge section
- **`/foundation` donation section** — amount tiers ($25/$50/$100/$500/custom), frequency toggle (one-time/monthly/annually); donate button disabled pending GiveButter account; Give by Mail address card; collapsible Legal & Tax Information accordion with 501(c)(3) notice, EIN 41-5141462, and all required legal disclosures
- **Nav** — "Foundation" added between Hosts and Expansion (desktop + mobile)
- **Footer** — "Foundation" added to Navigate column
- **`gradient-text-green` utility** — added to globals.css

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

### June 15 scope
- **Find Help Now — nav** — "FIND HELP NOW" added to desktop and mobile nav as large bold brand-orange stacked text (3 words, each on own line), linking to `https://linksi.impact-works.us/find-help`; image version was tried first but replaced with text for legibility
- **Find Help Now — Linksi Platform page** — callout band added below hero with supporting copy and the Find Help Now mascot image (`public/images/find-help-now-linksi.png`), linking to `https://linksi.impact-works.us/find-help`
- **Find Help Now — Hosts page** — same callout band added below hero
- **`/hosts` page — Provider/Host/Admin login card** — "Access Linksi" section relabeled as "Provider, Host & Admin Login"; copy updated to clarify it is for registered providers/hosts/admins only; button updated to "Sign In to Linksi"; URL corrected to `https://linksi.impact-works.us/dashboard`
- **`/foundation` page — GiveButter donate button** — disabled placeholder replaced with live orange link to `https://givebutter.com/Linksi-Launch-bcdvbm`, opens in new tab; "coming soon" label removed
- **`/providers` page — Provider Portal section** — bottom CTA rebuilt from single "Register Your Organization" button into a two-card "Provider Portal" section; left card (frosted glass) links existing providers to sign in at `https://linksi.impact-works.us`; right card (white) links new orgs to register at `https://linksy.impact-works.us/join/provider`

### June 9 scope
- **`/hosts` page — CTA updated** — closing "Get in Touch" button replaced with direct link to `https://linksi.impact-works.us/join/host` ("Become a Host"), opens in new tab; no longer routes through the contact form
- **`/foundation` page — Performance Model copy** — section heading changed from "Data-Driven Impact Assessment" to "Fueling the Changemakers"; body paragraph rewritten to friendlier, mission-forward language per Wesley/team feedback ("fuels the changemakers within the Linksi system…")

### June 8 scope
- **`/hosts` page — full rebuild** — expanded from Government Agencies only to all sectors; sourced from *Become a Linksi Host* and *Linksi Host Benefits Overview* PDFs:
  - New "What Hosting Means" quick-reference box (4 bullet points)
  - "Why Host Linksi" — 8 benefit cards (added Geographic Relevance and Credibility & Visibility)
  - "How Hosting Works" — 3 options (Website Integration, QR Code, Multiple Access Points)
  - "Designed for Every Sector" — 7 cards; Healthcare Organizations renamed to Hospitals & Health Systems; all descriptions updated to match Benefits Overview copy
  - Closing CTA "Become a Host" links directly to `https://linksi.impact-works.us/join/host` (opens new tab)
- **Contact form — deep-link support**
 — `/contact?reason=...` now pre-populates the reason dropdown; used by the `/hosts` CTA
- **Footer — social media icons** — Facebook (`facebook.com/impactworksfl`), Instagram (`instagram.com/impactworksfl`), YouTube (`youtube.com/@ImpactWorksFL`) added to Contact column
- **Live stats — Supabase integration** — `app/api/impact-stats/route.ts` calls Supabase RPC `get_impact_stats` (cached 10 min); `/impact` page fetches and animates live numbers into the orange stats ribbon via CountUp
- **Linksi 2.0 rollout calendar invite** — `public/events/linksi-2.0-rollout.ics` added; `next.config.mjs` serves it with `Content-Disposition: attachment` so iOS shows "Add Event" not "Subscribe to Calendar"
- **New Linksi co-brand images** — `linksi-powered-by-impactworks` in PNG, WebP, and transparent WebP variants
- **Favicon refresh** — new `app/favicon.ico`, `apple-icon.png`, and `icon.png`

---

## 🚧 Outstanding items

### 1. Foundation page — `/foundation`

**Status:** ✅ Fully complete as of 2026-06-15.

**Shipped:**
- Full page with COS DNA framework, grant disbursement model, funding & allocation flow, 100% provider pledge
- Donation widget with $25/$50/$100/$500/custom tiers and one-time/monthly/annually frequency toggle
- Donate button live — links to `https://givebutter.com/Linksi-Launch-bcdvbm`, opens in new tab
- Give by Mail card: Impact Works / Attn: Foundation / 151 College Dr Ste 1 / Orange Park, FL 32065
- Collapsible Legal & Tax Information accordion with 501(c)(3), EIN 41-5141462, and all required disclosures
- Nav placement: between Hosts and Expansion

---

### 2. Hosting sites directory — `/hosts` page

**Status:** ✅ Live as of 2026-06-18. 16 sites added. To add more, update the `hostingSites` array in `app/hosts/page.tsx`.

---

### 3. Stats refresh — Clay County numbers (`/expansion` page)

**Status:** Not updated. Blocked on having the new numbers.

**What's needed from you:**
- [ ] Updated stats. Currently showing:
  - 67 FL Counties
  - 22.6M Residents
  - 50+ Partners Today
  - 3 Growth Phases
  Are these still accurate?

---

### 4. Live stats — Supabase (`/impact` page)

**Status:** Infrastructure complete. The `/impact` page pulls live from Supabase via `get_impact_stats` RPC (10-min cache). Stats will show zeros until the RPC and env vars are in place.

**What's needed:**
- [ ] Confirm `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set in Vercel environment variables
- [ ] Confirm `get_impact_stats` RPC exists in Supabase and returns `{ referrals, individuals, partner_organizations }`

---

### 5. About page history content

**Status:** Not added. Copy is coming from the team.

**What's needed from you:**
- [ ] Founding story, key milestones, or "why we built this" narrative
- [ ] Any photos/visuals to accompany the history

The current About page has a Timeline section (2024 + 2025 milestones) ready to expand once copy is provided.

---

### 6. Contact form delivery — confirm Resend API key

**Status:** Form is fully built and wired. Uses Resend (`noreply@impact-works.us`) to send admin notification to eric@impactclay.org and a confirmation to the submitter. Delivery is live **only if** `RESEND_API_KEY` is set in Vercel.

**What's needed:**
- [ ] Verify `RESEND_API_KEY` is configured in Vercel environment variables. If not set, contact form submissions will silently fail.
