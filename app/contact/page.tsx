"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

const REASONS = [
  "I Need Help Finding Services",
  "I'm interested in becoming a Linksi Host or partner organization",
  "I'm an existing Host or partner with a question",
  "Media, donor, or general inquiry",
] as const;

type Reason = (typeof REASONS)[number];

const FIND_HELP_URL = "https://linksy.impact-works.us/find-help";

export default function Contact() {
  const [reason, setReason] = useState<Reason | "">("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const r = params.get("reason");
    if (r && (REASONS as readonly string[]).includes(r)) {
      setReason(r as Reason);
    }
  }, []);

  const showFindHelp = reason === "I Need Help Finding Services";
  const showFormFields = reason !== "" && !showFindHelp;

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Get in Touch</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white">
              Let&apos;s <span className="gradient-text-orange">Connect</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">
              Questions about partnerships, Linksi access, or collaboration?
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.85, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-5 hidden md:flex justify-center">
            <div className="relative w-full max-w-[320px]">
              <div className="bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="font-mono text-[10px] text-slate-400 ml-2">message.draft</span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange mb-2">To</p>
                <p className="font-display text-sm text-white mb-4">Impact Works Team</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange mb-2">Subject</p>
                <p className="font-display text-sm text-white">Partnership inquiry</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-orange/20 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="max-w-site mx-auto grid md:grid-cols-5 gap-12 max-w-4xl mx-auto">
          <ScrollReveal className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-2">Location</p>
                <p className="text-slate-600">Clay County, Florida</p>
              </div>
              <div>
                <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-2">Response Time</p>
                <p className="text-slate-600">We typically respond within 2 business days.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="md:col-span-3">
            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card-light p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-800 mb-3">Message Sent</h2>
                <p className="text-slate-500">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              </motion.div>
            ) : showFindHelp ? (
              <motion.div key="find-help" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card-light p-8 md:p-10">
                <div className="w-14 h-14 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="font-display text-2xl font-bold text-slate-800 mb-3">Find Services Near You</h2>
                <p className="text-slate-500 mb-8">
                  The Linksi directory connects Clay County residents to local services — housing, food, healthcare, and more. Search by need or location to find help right now.
                </p>
                <a
                  href={FIND_HELP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 w-full"
                >
                  Search the Linksi Directory <span>&rarr;</span>
                </a>
                <button
                  type="button"
                  onClick={() => setReason("")}
                  className="mt-4 w-full text-sm text-slate-400 hover:text-slate-600 transition-colors"
                >
                  &larr; Back to contact form
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setLoading(true);
                  setError("");
                  const form = e.currentTarget;
                  const data = {
                    reason,
                    name: (form.elements.namedItem("name") as HTMLInputElement).value,
                    email: (form.elements.namedItem("email") as HTMLInputElement).value,
                    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
                  };
                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
                    if (!res.ok) throw new Error();
                    setSubmitted(true);
                  } catch {
                    setError("Something went wrong. Please try again.");
                  } finally {
                    setLoading(false);
                  }
                }}
                className="card-light p-8 md:p-10"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="reason" className="block text-sm font-semibold text-slate-700 mb-2">Reason for contact</label>
                    <select
                      id="reason"
                      name="reason"
                      required
                      value={reason}
                      onChange={(e) => setReason(e.target.value as Reason | "")}
                      className="w-full bg-gray-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                    >
                      <option value="" disabled>Select a reason…</option>
                      {REASONS.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>

                  {showFormFields && (
                    <>
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                        <input type="text" id="name" name="name" required className="w-full bg-gray-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all" placeholder="Your name" />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                        <input type="email" id="email" name="email" required className="w-full bg-gray-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all" placeholder="you@example.com" />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                        <textarea id="message" name="message" rows={5} required className="w-full bg-gray-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none" placeholder="Tell us how we can help..." />
                      </motion.div>
                      {error && <p className="text-sm text-red-500">{error}</p>}
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                        <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                          {loading ? "Sending…" : <>Send Message <span>&rarr;</span></>}
                        </button>
                      </motion.div>
                    </>
                  )}
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
