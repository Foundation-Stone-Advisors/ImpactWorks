# Impact Works

The public marketing and content site for Impact Works, live at
<https://www.impact-works.us>. Next.js App Router, Tailwind, deployed on Vercel.

**This is not the application.** Linksi — the service-matching product this site
markets — lives at `linksi.impact-works.us` in a separate repository, and most
of the "Join", "Find Help", provider and host links here point out to it. A
request that sounds like a site change is often a Linksi change, so confirm the
string exists in this repo before editing. See `CLAUDE.md` for the rest of the
context a newcomer needs.

## Running it

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # the real gate — CI does not run on this repo

On a shared dev box, run `devports` first and start on a free port:
`npx next dev -p <port>`.

## Deployment

Vercel builds and deploys on push to `main`, so **a push is a publish.**
`vercel.json` also registers a cron that publishes scheduled news posts every
five minutes.

Server-side configuration is entirely Vercel environment variables; nothing is
committed and there is no `.env` in the repo. `CLAUDE.md` lists each variable
and how its absence shows up.

## Where things are

| | |
| --- | --- |
| `app/` | routes — one directory per page, plus `api/` route handlers |
| `components/` | shared UI (`Nav`, `Footer`, `ScrollReveal`, `DarkBackdrop`) |
| `lib/` | data and helpers, including the Find Help host rotation |
| `public/team/` | leadership headshots used by `/about` |
| `docs/outstanding-content-checklist.md` | what shipped, and what is still waiting on a person |

The checklist is the single source of truth for outstanding work. Update it in
the same commit as the change it describes.
