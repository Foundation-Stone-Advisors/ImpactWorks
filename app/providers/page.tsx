"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

const categories = [
  { title: "Nonprofits", desc: "Community organizations providing direct services to residents in need.", color: "border-brand-orange" },
  { title: "Healthcare Systems", desc: "Hospitals and clinics coordinating care access for underserved populations.", color: "border-brand-green" },
  { title: "Faith Organizations", desc: "Churches and faith-based groups offering support and outreach programs.", color: "border-brand-gold" },
  { title: "Community Initiatives", desc: "Grassroots programs and local efforts building stronger neighborhoods.", color: "border-brand-blue" },
  { title: "Educational Institutions", desc: "Schools and colleges connecting students and families with wraparound support services.", color: "border-brand-green" },
];

export default function Providers() {
  return (
    <div>
      <section className="relative min-h-[55vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Service Providers</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white">
              Community <span className="gradient-text-orange">Providers</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">
              Organizations delivering essential services to Clay County residents through the Linksi network.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 hidden md:flex flex-col gap-3"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Provider Portal</p>
            <a
              href="https://linksi.impact-works.us"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/[0.07] backdrop-blur-md border border-white/12 rounded-xl px-5 py-4 hover:bg-white/[0.13] hover:border-white/20 transition-all duration-200 group"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-0.5">Existing Provider</p>
                <p className="font-display text-base font-bold text-white">Sign In</p>
              </div>
              <span className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
            </a>
            <a
              href="https://linksi.impact-works.us/join/provider"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-brand-orange/90 backdrop-blur-md border border-brand-orange rounded-xl px-5 py-4 hover:bg-brand-orange transition-all duration-200 group"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-0.5">New Organization</p>
                <p className="font-display text-base font-bold text-white">Register</p>
              </div>
              <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-3">Who We Work With</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-800">Provider Organizations</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              These organizations connect Clay County residents to the services they need — all through the Linksi platform.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <ScrollReveal key={cat.title} delay={i * 0.08}>
                <div className={`card-light p-8 h-full border-l-4 ${cat.color} group`}>
                  <span className="font-mono text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-bold text-slate-800 mt-2 mb-3 group-hover:text-brand-orange transition-colors">{cat.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{cat.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
