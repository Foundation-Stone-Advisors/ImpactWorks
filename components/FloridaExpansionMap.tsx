"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Geographic expansion story — told through data, distance, and scale.
 * No map. Instead: a visual journey from Clay County outward.
 */

const phases = [
  {
    phase: "01",
    region: "Clay County",
    status: "Active",
    statusColor: "bg-brand-green text-white",
    accentColor: "bg-brand-green",
    borderColor: "border-brand-green",
    location: "Green Cove Springs, FL",
    population: "225K",
    coverage: "1 county",
    distance: null as string | null,
    stats: [
      { num: 1500, suffix: "+", label: "Residents Connected" },
      { num: 50, suffix: "+", label: "Partner Organizations" },
      { num: 4000, suffix: "+", label: "Referrals Made" },
    ],
    desc: "Our foundation — where Impact Works began. Linksi is live and connecting residents to critical services across Clay County.",
    isActive: true,
  },
  {
    phase: "02",
    region: "Northeast Florida",
    status: "Next Phase",
    statusColor: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20",
    accentColor: "bg-brand-blue",
    borderColor: "border-brand-blue",
    location: "Jacksonville Metro Area",
    population: "1.7M",
    coverage: "5 counties",
    distance: "30 mi from Clay County",
    stats: null,
    desc: "Expanding to Duval, St. Johns, Nassau, and Baker counties — building regional partnerships to serve a broader population.",
    isActive: false,
  },
  {
    phase: "03",
    region: "Statewide — Florida",
    status: "Future Vision",
    statusColor: "bg-slate-100 text-slate-500 border border-slate-200",
    accentColor: "bg-brand-orange",
    borderColor: "border-brand-orange",
    location: "All of Florida",
    population: "22.6M",
    coverage: "67 counties",
    distance: "400+ mi coverage",
    stats: null,
    desc: "A connected network of community service platforms across the entire state, ensuring no resident is left without access.",
    isActive: false,
  },
];

export default function FloridaExpansionMap() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Journey visualization */}
      <div className="space-y-0">
        {phases.map((phase, i) => (
          <div key={phase.phase}>
            <ScrollReveal delay={i * 0.15}>
              <div className={`relative grid md:grid-cols-12 gap-6 md:gap-10 ${
                phase.isActive
                  ? "bg-white rounded-3xl shadow-xl border border-brand-green/20 p-8 md:p-10"
                  : "bg-white/60 rounded-2xl border border-slate-100 p-6 md:p-8"
              }`}>
                {/* Left: Phase number + connection line */}
                <div className="md:col-span-1 flex md:flex-col items-center gap-3">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${phase.accentColor} flex items-center justify-center flex-shrink-0 ${phase.isActive ? "shadow-lg" : ""}`}>
                    <span className="text-white font-mono font-bold text-sm">{phase.phase}</span>
                  </div>
                </div>

                {/* Center: Main content */}
                <div className="md:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className={`font-display font-bold ${phase.isActive ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"} text-slate-800`}>
                      {phase.region}
                    </h3>
                    <span className={`font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full ${phase.statusColor}`}>
                      {phase.status}
                    </span>
                  </div>

                  <p className={`text-slate-500 leading-relaxed mb-5 ${phase.isActive ? "text-base" : "text-sm"}`}>
                    {phase.desc}
                  </p>

                  {/* Stats row — only for active phase */}
                  {phase.stats && (
                    <div className="flex flex-wrap gap-6 md:gap-8">
                      {phase.stats.map((s) => (
                        <div key={s.label}>
                          <p className="font-mono text-2xl md:text-3xl text-brand-green font-bold tabular-nums">
                            <CountUp end={s.num} suffix={s.suffix} />
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: Geographic data pills */}
                <div className="md:col-span-4 flex flex-col gap-2">
                  <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3">
                    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-slate-600">{phase.location}</span>
                  </div>
                  <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3">
                    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-slate-600">{phase.population} residents</span>
                  </div>
                  <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3">
                    <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span className="text-sm text-slate-600">{phase.coverage}</span>
                  </div>
                  {phase.distance && (
                    <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center gap-3">
                      <svg className="w-4 h-4 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="text-sm text-slate-600">{phase.distance}</span>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Connection arrow between phases */}
            {i < phases.length - 1 && (
              <div className="flex justify-center py-3">
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  whileInView={{ opacity: 1, scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col items-center gap-1 origin-top"
                >
                  <div className="w-px h-8 bg-gradient-to-b from-slate-300 to-slate-200" />
                  <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Scale visualization — the growth story */}
      <ScrollReveal>
        <div className="mt-16 bg-navy-900 rounded-2xl p-8 md:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-orange mb-6">The Scale of Impact</p>
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Clay County", pop: "225K", pct: 12, color: "bg-brand-green" },
              { label: "NE Florida", pop: "1.7M", pct: 45, color: "bg-brand-blue" },
              { label: "Statewide", pop: "22.6M", pct: 100, color: "bg-brand-orange" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="h-32 md:h-40 flex items-end justify-center mb-3">
                  <motion.div
                    className={`${item.color} rounded-t-lg w-full max-w-[80px]`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <p className="font-mono text-lg md:text-xl text-white font-bold">{item.pop}</p>
                <p className="text-xs text-slate-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
