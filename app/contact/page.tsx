"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import HeroArcs from "@/components/HeroArcs";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center section-dark overflow-hidden">
        <HeroArcs />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white max-w-3xl">
            Contact Impact<span className="gradient-text-orange">Works</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">
            Questions about partnerships, Linksi access, or collaboration?
          </motion.p>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="max-w-site mx-auto grid md:grid-cols-5 gap-12 max-w-4xl mx-auto">
          <ScrollReveal className="md:col-span-2">
            <div className="space-y-8">
              <div>
                <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-2">Email</p>
                <a href="mailto:hello@impactworks.dev" className="text-slate-800 hover:text-brand-blue transition-colors font-semibold">hello@impactworks.dev</a>
              </div>
              <div>
                <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-2">Location</p>
                <p className="text-slate-600">Clay County, Florida</p>
              </div>
              <div>
                <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-2">Response Time</p>
                <p className="text-slate-600">We typically respond within 24 hours.</p>
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
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="card-light p-8 md:p-10">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                    <input type="text" id="name" name="name" required className="w-full bg-gray-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                    <input type="email" id="email" name="email" required className="w-full bg-gray-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} required className="w-full bg-gray-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Message <span>&rarr;</span></button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
