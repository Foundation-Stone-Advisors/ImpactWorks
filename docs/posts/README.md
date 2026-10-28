# Prepared news posts

A news post lives in Supabase (`news_posts`), not in this repo — it is written
in `/news/admin` and stored as a block of HTML. That works well for a post that
is mostly text, and badly for one built around photographs: the visual editor
keeps only what its schema knows about, so a gallery or a captioned figure
typed into it would be dropped again on save.

So a photo-led post is written here first, as the exact HTML the post will
hold, and pasted in whole.

## Publishing one

1. Put the photos in `public/images/<topic>/` and commit them. Paths in the
   HTML are absolute from the site root (`/images/alice/alice-breakfast.jpg`),
   so they only resolve once that commit is deployed.
2. Open `https://www.impact-works.us/news/admin/new` and log in.
3. Fill in the title and author. The slug is generated from the title, so
   *Meet A.L.I.C.E. Experience – Clay County* becomes
   `/news/meet-alice-experience-clay-county`.
4. In the content toolbar click **`</>` HTML**, then paste the whole file.
5. Write the excerpt by hand — it is what the `/news` card and the social
   preview show. Left blank, it is taken from the first 220 characters of the
   post, which for a photo-led post is the opening sentence and nothing else.
6. Publish, or schedule.

**Reopening the post to edit it:** it opens in the HTML view, and it has to
stay there. Switching to the visual editor asks for confirmation first, because
that switch is what removes the galleries and captions.

## What the styles support

`app/globals.css` styles these inside `.prose-content`:

| Markup | Renders as |
| --- | --- |
| `<figure><img><figcaption>` | full-width photo with a caption under it |
| `<div class="photo-grid">` of `<a><img></a>` | thumbnail gallery, 2 / 3 / 4 columns; each tile opens the full photo |
| `<div data-youtube-video><iframe>` | responsive 16:9 video, the same markup the editor's YouTube button writes |

A gallery tile is a plain link rather than a lightbox on purpose: the post body
is injected with `dangerouslySetInnerHTML`, which carries markup but never
JavaScript.

## Current files

| File | Status |
| --- | --- |
| `meet-alice-experience-clay-county.html` | Written 2026-10-28. Preview at `/preview/alice`. |
