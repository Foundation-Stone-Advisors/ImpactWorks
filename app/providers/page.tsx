"use client";

import Link from "next/link";
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
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-5 hidden md:flex justify-center">
            <div className="relative w-full max-w-[340px] bg-white/[0.05] backdrop-blur-md border border-white/12 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-baseline justify-between pb-4 border-b border-white/10 mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold">Provider Growth</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">2022 → Today</span>
              </div>
              <div className="space-y-4">
                {[
                  { year: "2022", count: 5,  width: "10%",  color: "#475569" },
                  { year: "2023", count: 18, width: "36%",  color: "#2E8BC0" },
                  { year: "2024", count: 35, width: "70%",  color: "#3DAA5C" },
                  { year: "2025", count: 50, width: "100%", color: "#E8751A", live: true },
                ].map((row, i) => (
                  <div key={row.year} className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-slate-400 w-10 flex-shrink-0">{row.year}</span>
                    <div className="flex-1 h-2 bg-white/[0.05] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: row.width }}
                        transition={{ duration: 1.0, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: row.color, boxShadow: row.live ? `0 0 10px ${row.color}` : "none" }}
                      />
                    </div>
                    <span className="font-mono text-xs font-bold text-white tabular-nums w-10 text-right flex-shrink-0">
                      {row.count}{row.live ? "+" : ""}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 pt-5 mt-5 border-t border-white/10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-orange" />
                </span>
                <span className="font-display text-xs text-slate-300">Adding new providers every quarter</span>
              </div>
            </div>
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

      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <ScrollReveal>
          <div className="max-w-site mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-gold">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] border-[3px] border-white/10 rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border-[2px] border-white/5 rounded-full" />
              </div>
              <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center px-8 md:pl-16 md:pr-8 py-12 md:py-16">
                <div className="md:col-span-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 mb-3">Linksi Platform</p>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">Provider Portal</h2>
                  <p className="text-white/85 leading-relaxed">
                    Already part of the network? Sign in to your Linksi dashboard. New to Impact Works? Register your organization to start connecting residents with your services.
                  </p>
                </div>
                <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
                  <a
                    href="https://linksi.impact-works.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Existing Provider</span>
                    <span className="font-display text-xl font-extrabold text-white">Sign In</span>
                    <span className="text-sm text-white/75 leading-relaxed">Access your Linksi dashboard and manage your organization&apos;s services.</span>
                    <span className="mt-2 text-white font-bold group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </a>
                  <a
                    href="https://linksi.impact-works.us/join/provider"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 bg-white rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange/70">New Organization</span>
                    <span className="font-display text-xl font-extrabold text-brand-orange">Register</span>
                    <span className="text-sm text-slate-600 leading-relaxed">Join the Linksi network and connect your organization with residents in need.</span>
                    <span className="mt-2 text-brand-orange font-bold group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
