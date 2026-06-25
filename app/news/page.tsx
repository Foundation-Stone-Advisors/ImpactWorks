"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

interface Post {
  id: string;
  title: string;
  slug: string;
  author: string;
  excerpt: string;
  published_at: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function News() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/news")
      .then((r) => r.json())
      .then((data) => { setPosts(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = search
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.excerpt?.toLowerCase().includes(search.toLowerCase()) ||
          p.author.toLowerCase().includes(search.toLowerCase())
      )
    : posts;

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="eyebrow mb-5"
          >
            News &amp; Updates
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="heading-hero text-white max-w-3xl"
          >
            The Latest from{" "}
            <span className="gradient-text-orange">Impact Works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="body-text text-slate-300 mt-6 max-w-xl"
          >
            Events, announcements, and updates from the Linksi and Impact Works team.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Posts */}
            <div className="flex-1 min-w-0">
              {loading ? (
                <div className="space-y-6">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-48 bg-slate-100 rounded-2xl animate-pulse" />
                  ))}
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-24 text-slate-400">
                  {search ? (
                    <>
                      <p className="text-lg font-medium mb-1">No results for &ldquo;{search}&rdquo;</p>
                      <button onClick={() => setSearch("")} className="text-sm text-brand-orange hover:underline">
                        Clear search
                      </button>
                    </>
                  ) : (
                    <p>No posts yet — check back soon!</p>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {filtered.map((post, i) => (
                    <ScrollReveal key={post.id} delay={i * 0.06}>
                      <Link href={`/news/${post.slug}`} className="block group">
                        <article className="card-light p-8 border-l-4 border-brand-orange">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="font-mono text-xs text-slate-400">
                              {formatDate(post.published_at)}
                            </span>
                            <span className="text-slate-200">·</span>
                            <span className="font-mono text-xs text-brand-orange font-medium">
                              {post.author}
                            </span>
                          </div>
                          <h2 className="font-display text-xl md:text-2xl font-bold text-slate-800 group-hover:text-brand-orange transition-colors mb-3 leading-snug">
                            {post.title}
                          </h2>
                          {post.excerpt && (
                            <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          )}
                          <p className="text-sm font-semibold text-brand-orange mt-4 group-hover:underline">
                            Read more →
                          </p>
                        </article>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="w-full lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-28 space-y-5">
                {/* Search */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
                    Search
                  </p>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search posts…"
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
                  />
                </div>

                {/* All posts index */}
                {posts.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-4">
                      All Posts
                    </p>
                    <ul className="space-y-3">
                      {posts.map((post) => (
                        <li key={post.id}>
                          <Link
                            href={`/news/${post.slug}`}
                            className="block text-sm text-slate-700 hover:text-brand-orange transition-colors font-medium leading-snug"
                          >
                            {post.title}
                          </Link>
                          <p className="text-xs text-slate-400 mt-0.5">
                            {formatDate(post.published_at)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
