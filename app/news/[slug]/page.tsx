import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import DarkBackdrop from "@/components/DarkBackdrop";
import ShareButtons from "@/components/ShareButtons";

async function getPost(slug: string) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { data } = await supabase
    .from("news_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Impact Works News`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.impact-works.us/news/${post.slug}`,
      siteName: "Impact Works",
      type: "article",
    },
  };
}

export default async function NewsPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const postUrl = `https://www.impact-works.us/news/${post.slug}`;
  const dateStr = new Date(post.published_at).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 pb-16 md:pb-24 pt-36 w-full max-w-3xl">
          <p className="eyebrow mb-5">News &amp; Updates</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.07] tracking-[-0.02em] text-white max-w-3xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 mt-6 text-slate-300">
            <span className="font-mono text-sm font-medium text-brand-orange">
              {post.author}
            </span>
            <span className="text-slate-500">·</span>
            <time className="font-mono text-sm" dateTime={post.published_at}>
              {dateStr}
            </time>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section-pad section-light">
        <div className="max-w-3xl mx-auto px-6">
          <article
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-5">
              Share this post
            </p>
            <ShareButtons title={post.title} url={postUrl} />
          </div>

          {/* Back */}
          <div className="mt-10">
            <Link
              href="/news"
              className="text-sm font-medium text-brand-orange hover:underline"
            >
              ← Back to News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
