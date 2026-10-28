import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import DarkBackdrop from "@/components/DarkBackdrop";

// A news post lives in Supabase, and a draft is not readable from the public
// site, so there is no way to look at a photo-heavy post before publishing it.
// This route renders the prepared HTML in exactly the shell /news/[slug] uses,
// so the layout can be checked and shared for approval first. The post itself
// is still created in /news/admin — paste the same file into the HTML view.
const POST = "docs/posts/meet-alice-experience-clay-county.html";

export const metadata: Metadata = {
  title: "Preview — Meet A.L.I.C.E. Experience | Impact Works",
  robots: { index: false, follow: false },
};

export default function AlicePostPreview() {
  const html = fs.readFileSync(path.join(process.cwd(), POST), "utf8");

  return (
    <div>
      <section className="relative min-h-[45vh] flex items-end overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 pb-16 md:pb-24 pt-36 w-full max-w-3xl">
          <p className="eyebrow mb-5">Preview &mdash; not published</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.07] tracking-[-0.02em] text-white max-w-3xl">
            Meet A.L.I.C.E. Experience &ndash; Clay County
          </h1>
          <div className="flex items-center gap-3 mt-6 text-slate-300">
            <span className="font-mono text-sm font-medium text-brand-orange">
              David Petlansky
            </span>
            <span className="text-slate-500">·</span>
            <span className="font-mono text-sm">October 28, 2026</span>
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="max-w-3xl mx-auto px-6">
          <article className="prose-content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </section>
    </div>
  );
}
