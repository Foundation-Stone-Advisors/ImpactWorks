import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DarkBackdrop from "@/components/DarkBackdrop";

// A news post lives in Supabase, and a draft is not readable from the public
// site, so there is no way to look at a photo-heavy post before publishing it.
// This route renders a prepared file from docs/posts/ in exactly the shell
// /news/[slug] uses, so the layout can be checked and shared for approval
// first. The post itself is still created in /news/admin — paste the same file
// into the HTML view.
const PREVIEWS = {
  alice: {
    file: "meet-alice-experience-clay-county.html",
    title: "Meet A.L.I.C.E. Experience – Clay County",
    author: "David Petlansky",
    date: "October 28, 2026",
  },
  "podcast-01": {
    file: "linksi-podcast-01-mercy-support-services.html",
    title: "The Linksi Podcast #1 — Mercy Support Services",
    author: "David Petlansky",
    date: "November 23, 2026",
  },
} as const;

type PreviewSlug = keyof typeof PREVIEWS;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PREVIEWS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const preview = PREVIEWS[slug as PreviewSlug];
  return {
    title: preview
      ? `Preview — ${preview.title} | Impact Works`
      : "Preview | Impact Works",
    robots: { index: false, follow: false },
  };
}

export default async function PostPreview({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const preview = PREVIEWS[slug as PreviewSlug];
  if (!preview) notFound();

  const html = fs.readFileSync(
    path.join(process.cwd(), "docs/posts", preview.file),
    "utf8"
  );

  return (
    <div>
      <section className="relative min-h-[45vh] flex items-end overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 pb-16 md:pb-24 pt-36 w-full max-w-3xl">
          <p className="eyebrow mb-5">Preview &mdash; not published</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.07] tracking-[-0.02em] text-white max-w-3xl">
            {preview.title}
          </h1>
          <div className="flex items-center gap-3 mt-6 text-slate-300">
            <span className="font-mono text-sm font-medium text-brand-orange">
              {preview.author}
            </span>
            <span className="text-slate-500">·</span>
            <span className="font-mono text-sm">{preview.date}</span>
          </div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="max-w-3xl mx-auto px-6">
          <article
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>
    </div>
  );
}
