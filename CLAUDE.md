# ImpactWorks — project context

Marketing and content site for Impact Works, live at
<https://www.impact-works.us>. Next.js App Router, Tailwind, deployed on Vercel.

Repo: `Foundation-Stone-Advisors/ImpactWorks`, branch `main`.

---

## 1. What this site is, and what it is not

This is the **public site**. The application it markets — Linksi — is a
separate product at `linksi.impact-works.us`, in a different repository. Most
of the "Join", "Find Help", provider and host sign-in links here point out to
Linksi rather than to anything in this codebase.

That split is the single most common source of wasted time here: a request
that sounds like a site change is often a Linksi change. Before editing,
confirm the string actually exists in this repo. Two past sessions searched,
found nothing, and correctly handed the work back (`help@impact-works.us` and
the Facebook referrer allowlist, both recorded in `docs/`).

Note the historical spelling: the product was renamed **Linksy → Linksi**.
`linksy.impact-works.us` is dead and has broken links before — it is `linksi.`

## 2. Deployment

Vercel builds and deploys on push to `main`, so **a push is a publish.** There
are no pull requests in the history; straight to `main` is the convention.

`vercel.json` also registers one cron: `/api/cron/publish-scheduled` every five
minutes, which is what makes scheduled news posts appear. It authenticates with
`CRON_SECRET`.

## 3. Environment

Everything server-side is read from Vercel environment variables. Nothing is
committed, and there is no `.env` in the repo.

| Variable | Used by | Fails like |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` / `..._ANON_KEY` | `/api/events`, `/api/impact-stats`, news reads | calendar empty, stats show zeros |
| `SUPABASE_SERVICE_ROLE_KEY` | admin news writes | admin save fails |
| `NEWS_ADMIN_PASSWORD` | `/news/admin` password gate | nobody can log in |
| `CRON_SECRET` | scheduled-publish cron | scheduled posts never publish |
| `RESEND_API_KEY` | `/api/contact` | **contact form fails silently** |

The Supabase project behind this site is **Linksi's** (`vjusthretnfmxmgdiwtw`),
not a project of its own. Tables touched from here: `events` and `news_posts`.
Treat it as someone else's database — read patterns are fine, schema changes
belong to whoever owns Linksi.

## 4. Running it

    devports          # check first — ports collide across projects on this box
    npm run dev       # Next defaults to 3000
    npm run build     # the real gate; CI is not a safety net here
    npm run lint

## 5. `docs/outstanding-content-checklist.md` is the source of truth

It carries both halves of the history: what shipped in each session, and what
is still blocked waiting on a person (stats numbers, About-page history copy,
the flyer QR code, Eric's email-alias change). **Update it in the same commit
as the change it describes** — its value is that it is the one place a
stakeholder can look without reading the git log, and it loses that the moment
it lags.

When work closes out, the convention in the log is a `docs:` commit naming the
session, e.g. *"docs: close out session 12 — events calendar read-only."*

## 6. Language

US English in code, UI strings, docs and commit messages — standing Foundation
Stone rule, and this site is public copy, so it is also visible to the client.
