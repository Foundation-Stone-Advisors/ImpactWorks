"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "next/link";

const TiptapEditor = dynamic(() => import("./TiptapEditor"), { ssr: false });

const AUTHORS = ["Connie Thomas", "Michelle", "Heather Johnston"];

interface PostData {
  id?: string;
  title: string;
  author: string;
  content: string;
  excerpt: string;
  published: boolean;
}

export default function PostEditor({ initialPost }: { initialPost?: PostData }) {
  const router = useRouter();
  const isEditing = !!initialPost?.id;

  const [post, setPost] = useState<PostData>(
    initialPost ?? { title: "", author: AUTHORS[0], content: "", excerpt: "", published: false }
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function save(publish: boolean) {
    if (!post.title.trim()) { setError("A title is required."); return; }
    if (!post.content || post.content === "<p></p>") { setError("Post content cannot be empty."); return; }

    setSaving(true);
    setError("");

    const payload = { ...post, published: publish };
    const url = isEditing ? `/api/admin/news/${initialPost!.id}` : "/api/admin/news";
    const method = isEditing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Failed to save. Please try again.");
      setSaving(false);
      return;
    }

    router.push("/news/admin");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-2xl font-bold text-slate-800">
            {isEditing ? "Edit Post" : "New Post"}
          </h1>
          <Link href="/news/admin" className="text-sm text-slate-400 hover:text-slate-700 transition-colors">
            ← Back to all posts
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 space-y-7">
          {/* Title */}
          <div>
            <label className="block font-mono text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
              Title
            </label>
            <input
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Post title"
              className="w-full border border-slate-200 rounded-xl px-4 py-3 font-display text-xl font-bold text-slate-800 placeholder:font-normal placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-mono text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
              Author
            </label>
            <select
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              className="border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange bg-white"
            >
              {AUTHORS.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div>
            <label className="block font-mono text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
              Content
            </label>
            <TiptapEditor
              content={post.content}
              onChange={(html) => setPost({ ...post, content: html })}
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block font-mono text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">
              Excerpt{" "}
              <span className="normal-case text-slate-300 tracking-normal">
                — optional. Auto-generated from content if left blank.
              </span>
            </label>
            <textarea
              value={post.excerpt}
              onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
              placeholder="Short summary shown on the news listing page…"
              rows={3}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange resize-none"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
            <button
              onClick={() => save(false)}
              disabled={saving}
              className="px-5 py-2.5 text-sm border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 font-medium"
            >
              {saving ? "Saving…" : "Save as Draft"}
            </button>
            <button
              onClick={() => save(true)}
              disabled={saving}
              className="btn-primary !py-2.5 !px-6 text-sm disabled:opacity-40"
            >
              {saving ? "Publishing…" : isEditing && post.published ? "Save & Publish" : "Publish"}
            </button>
            {isEditing && post.published && (
              <button
                onClick={() => save(false)}
                disabled={saving}
                className="text-xs text-amber-600 hover:text-amber-800 transition-colors ml-2"
              >
                Unpublish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
