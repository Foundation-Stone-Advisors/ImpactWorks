"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  slug: string;
  author: string;
  published: boolean;
  published_at: string | null;
  scheduled_at: string | null;
  created_at: string;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadPosts() {
    const res = await fetch("/api/admin/news");
    if (res.ok) setPosts(await res.json());
    setLoading(false);
  }

  async function deletePost(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await fetch(`/api/admin/news/${id}`, { method: "DELETE" });
    loadPosts();
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    window.location.reload();
  }

  useEffect(() => { loadPosts(); }, []);

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  function formatDateTime(iso: string) {
    return new Date(iso).toLocaleString("en-US", {
      month: "short", day: "numeric", year: "numeric",
      hour: "numeric", minute: "2-digit",
    });
  }

  function getStatus(post: Post) {
    if (post.published) return { label: "Published", cls: "bg-green-100 text-green-700" };
    if (post.scheduled_at && new Date(post.scheduled_at) > new Date()) {
      return { label: "Scheduled", cls: "bg-blue-100 text-blue-700" };
    }
    return { label: "Draft", cls: "bg-amber-100 text-amber-700" };
  }

  function getDateLine(post: Post) {
    if (post.published && post.published_at) return formatDate(post.published_at);
    if (post.scheduled_at && new Date(post.scheduled_at) > new Date()) {
      return `Publishes ${formatDateTime(post.scheduled_at)}`;
    }
    return `Draft · created ${formatDate(post.created_at)}`;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-slate-800">News Admin</h1>
            {!loading && (
              <p className="text-slate-400 text-sm mt-1">
                {posts.length} post{posts.length !== 1 ? "s" : ""} total
              </p>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/news/admin/new" className="btn-primary !py-2.5 !px-5 text-sm">
              + New Post
            </Link>
            <button onClick={logout} className="text-sm text-slate-400 hover:text-slate-700 transition-colors">
              Sign out
            </button>
          </div>
        </div>

        {/* Post list */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-white rounded-xl border border-slate-100 animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-24 text-slate-400">
            <p className="text-lg font-medium mb-2">No posts yet</p>
            <p className="text-sm">Create your first post to get started.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => {
              const status = getStatus(post);
              return (
                <div
                  key={post.id}
                  className="bg-white rounded-xl border border-slate-100 p-5 flex items-center justify-between gap-4 shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-mono font-medium ${status.cls}`}>
                        {status.label}
                      </span>
                      <span className="text-xs text-slate-400">{post.author}</span>
                    </div>
                    <h2 className="font-display font-semibold text-slate-800 truncate">{post.title}</h2>
                    <p className="text-xs text-slate-400 mt-0.5">{getDateLine(post)}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {post.published && (
                      <Link
                        href={`/news/${post.slug}`}
                        target="_blank"
                        className="text-xs text-slate-400 hover:text-brand-orange transition-colors"
                      >
                        View ↗
                      </Link>
                    )}
                    <Link
                      href={`/news/admin/edit/${post.id}`}
                      className="text-xs font-medium text-brand-orange hover:text-brand-orange/80 transition-colors"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deletePost(post.id, post.title)}
                      className="text-xs text-red-400 hover:text-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/news" className="text-sm text-slate-400 hover:text-brand-orange transition-colors">
            ← View public News page
          </Link>
        </div>
      </div>
    </div>
  );
}
