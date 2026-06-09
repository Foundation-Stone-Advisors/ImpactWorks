"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";
import CountUp from "@/components/CountUp";

const metrics = [
  {
    label: "Operational Efficiency",
    desc: "How effectively providers deliver services relative to their available resources.",
    color: "border-brand-orange",
    dot: "bg-brand-orange",
    pct: 78,
    bar: "from-brand-orange to-brand-gold",
  },
  {
    label: "Client Reach",
    desc: "The number of residents actively served within the Linksi network over time.",
    color: "border-brand-blue",
    dot: "bg-brand-blue",
    pct: 65,
    bar: "from-brand-blue to-brand-blue-light",
  },
  {
    label: "Platform Engagement",
    desc: "Consistency of provider activity — referrals accepted, profiles updated, outcomes logged.",
    color: "border-brand-green",
    dot: "bg-brand-green",
    pct: 84,
    bar: "from-brand-green to-emerald-400",
  },
];

const steps = [
  {
    num: "01",
    title: "Revenue Streams",
    desc: "Proceeds from Linksi hosting memberships and philanthropic donations are pooled into the Foundation's grant fund.",
    color: "bg-brand-orange",
  },
  {
    num: "02",
    title: "COS DNA Analysis",
    desc: "The platform continuously scores every active provider across efficiency, reach, and engagement — surfacing who is delivering the greatest measurable impact.",
    color: "bg-brand-blue",
  },
  {
    num: "03",
    title: "Grants to Top Performers",
    desc: "Funds flow directly to providers demonstrating consistent, meaningful service — ensuring resources go where they are needed most and proven to work.",
    color: "bg-brand-green",
  },
];

export default function Foundation() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly" | "annually">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");
  const [taxOpen, setTaxOpen] = useState(false);

  return (
    <div>
      {/* Hero — dark */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-asymmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="eyebrow mb-5"
            >
              Impact Works Foundation
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="heading-hero text-white"
            >
              The Community <span className="gradient-text-orange">Operating System</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="body-text text-slate-300 mt-6 max-w-xl"
            >
              A performance-informed framework that distinguishes Impact Works from traditional nonprofits,
              for-profit entities, and conventional foundations alike.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Link href="/contact" className="btn-primary">
                Get Involved <span>&rarr;</span>
              </Link>
            </motion.div>
          </div>

          {/* Hero visual: COS DNA live monitor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 hidden md:flex justify-center"
          >
            <div className="relative w-full max-w-[340px] bg-white/[0.05] backdrop-blur-md border border-white/12 rounded-2xl p-6 shadow-2xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" style={{ boxShadow: "0 0 8px #E8751A" }} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold">COS DNA Monitor</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">Live</span>
              </div>

              {[
                { label: "Operational Efficiency", pct: 78, color: "from-brand-orange to-brand-gold", delay: 0.7 },
                { label: "Client Reach", pct: 65, color: "from-brand-blue to-brand-blue-light", delay: 0.9 },
                { label: "Platform Engagement", pct: 84, color: "from-brand-green to-emerald-400", delay: 1.1 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400">{m.label}</span>
                    <span className="font-mono text-sm font-bold text-white tabular-nums">{m.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${m.pct}%` }}
                      transition={{ duration: 1.4, delay: m.delay, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full bg-gradient-to-r ${m.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                <svg className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-display text-xs text-slate-300">Top performers receive grant funding</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COS DNA Definition — light */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto grid md:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="md:col-span-5">
            <p className="eyebrow mb-4">What Is COS DNA?</p>
            <h2 className="heading-section text-slate-800 mb-6">
              A Framework Built for <span className="gradient-text-orange">Accountability</span>
            </h2>
            <p className="body-text-muted">
              The Community Operating System (COS) DNA is the defining framework that distinguishes the Impact Works
              Foundation from traditional nonprofit organizations, for-profit entities, and conventional foundations alike.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="md:col-span-7">
            <div className="grid gap-5">
              {metrics.map((m, i) => (
                <div key={m.label} className={`card-light p-6 border-l-4 ${m.color} group`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${m.dot}`} />
                    <h3 className="font-display font-bold text-slate-800 group-hover:text-brand-orange transition-colors">
                      {m.label}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed pl-5">{m.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Performance Model — light-alt */}
      <section className="section-pad section-light-alt">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-14">
            <p className="eyebrow mb-4">The Performance Model</p>
            <h2 className="heading-section text-slate-800">
              Fueling the <span className="gradient-text-blue">Changemakers</span>
            </h2>
            <p className="body-text-muted max-w-2xl mx-auto mt-4">
              Impact Works Foundation fuels the changemakers within the Linksi system — empowering providers to reach
              further, serve deeper, and transform more lives. The COS DNA framework helps the Foundation understand
              where community need is greatest and where providers are making a real difference, so every grant goes
              to the organizations already doing the work.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <ScrollReveal key={m.label} delay={i * 0.1}>
                <div className={`card-light p-8 h-full border-l-4 ${m.color} group`}>
                  <span className="font-mono text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl font-bold text-slate-800 mt-2 mb-4 group-hover:text-brand-orange transition-colors">
                    {m.label}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-400 font-mono uppercase tracking-wide">Network avg.</span>
                      <span className="font-mono font-bold text-slate-700">{m.pct}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.1 }}
                        className={`h-full bg-gradient-to-r ${m.bar} rounded-full`}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mt-4">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Pipeline — light */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-14">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="heading-section text-slate-800">
              Performance-Informed <span className="gradient-text-orange">Grant Disbursement</span>
            </h2>
            <p className="body-text-muted max-w-2xl mt-4">
              Proceeds generated through Linksi hosting memberships and philanthropic donations are strategically
              reinvested into the ecosystem through a structured grant disbursement program. These grants are awarded
              directly to active providers who demonstrate consistent, meaningful service to the clients they serve
              within the Linksi network — ensuring that resources flow to where they are needed most and where they
              are proven to work.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector line — desktop only */}
            <div className="hidden md:block absolute top-9 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-[2px] bg-gradient-to-r from-brand-orange via-brand-blue to-brand-green opacity-20 pointer-events-none" />

            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.12}>
                <div className="card-light p-8 h-full group relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${step.color} mb-5 shadow-lg`}>
                    <span className="font-mono text-xs font-bold text-white">{step.num}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-800 mb-3 group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Funding & Allocation — light-alt */}
      <section className="section-pad section-light-alt">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-14">
            <p className="eyebrow mb-4">Funding &amp; Transparency</p>
            <h2 className="heading-section text-slate-800">
              Where Every Dollar <span className="gradient-text-blue">Comes From</span>
            </h2>
            <p className="body-text-muted max-w-2xl mt-4">
              The Impact Works Foundation is funded primarily through proceeds generated by Linksi via Impact Works,
              as well as contributions from generous donors who share our vision for community impact.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Funding sources */}
            <ScrollReveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-5">Revenue Sources</p>
              <div className="space-y-4">
                <div className="card-light p-6 border-l-4 border-brand-orange group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-slate-800 group-hover:text-brand-orange transition-colors">
                      Linksi Network Proceeds
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed pl-11">
                    Revenue generated through Linksi hosting memberships flows directly through Impact Works into the Foundation's grant fund.
                  </p>
                </div>
                <div className="card-light p-6 border-l-4 border-brand-blue group">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-slate-800 group-hover:text-brand-blue transition-colors">
                      Donor Contributions
                    </h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed pl-11">
                    Philanthropic donations from individuals and organizations who share our vision for sustainable, community-centered impact.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Allocation flow */}
            <ScrollReveal delay={0.15}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-5">How Proceeds Are Allocated</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Once Impact Works has met its operational obligations — including staff compensation and organizational
                expenses — remaining proceeds are allocated with intention and purpose.
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Financial Safety Net Reserve",
                    desc: "A portion is set aside to ensure long-term organizational stability.",
                    color: "bg-brand-gold/10 border-brand-gold",
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    iconColor: "text-brand-gold",
                  },
                  {
                    label: "Impact Works Growth",
                    desc: "A share supports the continued expansion and scale of Impact Works itself.",
                    color: "bg-brand-blue/10 border-brand-blue",
                    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                    iconColor: "text-brand-blue",
                  },
                  {
                    label: "Foundation Contribution",
                    desc: "The remaining balance flows directly into the Impact Works Foundation grant fund.",
                    color: "bg-brand-green/10 border-brand-green",
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    iconColor: "text-brand-green",
                  },
                ].map((item) => (
                  <div key={item.label} className={`flex items-start gap-4 rounded-xl border p-4 ${item.color}`}>
                    <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                    </svg>
                    <div>
                      <p className="font-display font-bold text-sm text-slate-800">{item.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 100% Pledge — dark navy strip */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0E1126] via-[#080B1A] to-[#05070F] py-20 md:py-28 px-6">
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] border-[2px] border-white/[0.04] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[560px] h-[560px] border-[2px] border-white/[0.04] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-site mx-auto grid md:grid-cols-12 gap-10 items-center">
          <ScrollReveal className="md:col-span-4 text-center md:text-left">
            <p className="font-mono text-[80px] md:text-[120px] font-bold leading-none text-white tabular-nums">
              <CountUp end={100} suffix="%" duration={1800} />
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-brand-green mt-2">
              To Service Providers
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="md:col-span-8">
            <p className="eyebrow mb-4">The Provider Pledge</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
              Zero Overhead. <span className="gradient-text-green">Every Dollar Counts.</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-8 max-w-xl">
              Once funds enter the Impact Works Foundation, 100% go directly to service providers within the Linksi
              network — no administrative overhead, no diversions. Every dollar is committed to helping providers
              sustain and expand their outreach to the communities they serve.
            </p>
            <div className="flex flex-wrap gap-3">
              {["No Administrative Overhead", "No Diversions", "Proven Providers Only"].map((pill) => (
                <span key={pill} className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  {pill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Donation — light */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-12">
            <p className="eyebrow mb-4">Make a Difference</p>
            <h2 className="heading-section text-slate-800">
              Support the <span className="gradient-text-orange">Foundation</span>
            </h2>
            <p className="body-text-muted max-w-2xl mt-4">
              Your contribution helps ensure that proven service providers can continue reaching the residents who need them most.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Donation widget */}
            <ScrollReveal className="md:col-span-2">
              <div className="card-light p-8">
                {/* Coming soon banner */}
                <div className="flex items-start gap-3 bg-brand-blue/[0.06] border border-brand-blue/20 rounded-xl px-4 py-3.5 mb-8">
                  <svg className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-brand-blue leading-relaxed">
                    <span className="font-semibold">Secure online giving is coming soon.</span> Mail donations are accepted now — see the address to the right.
                  </p>
                </div>

                {/* Frequency */}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Giving Frequency</p>
                <div className="inline-flex rounded-xl border border-slate-200 overflow-hidden mb-8">
                  {(["one-time", "monthly", "annually"] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f)}
                      className={`px-5 py-2.5 text-sm font-display font-semibold transition-colors ${
                        frequency === f
                          ? "bg-brand-orange text-white"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {f === "one-time" ? "One-Time" : f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Amount grid */}
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">Select Amount</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  {([25, 50, 100, 500] as const).map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setSelectedAmount(amt)}
                      className={`py-3 rounded-xl border-2 font-display font-bold text-sm transition-all ${
                        selectedAmount === amt
                          ? "border-brand-orange bg-brand-orange/[0.06] text-brand-orange"
                          : "border-slate-200 text-slate-700 hover:border-brand-orange/40 hover:text-brand-orange"
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedAmount("custom")}
                  className={`w-full py-3 rounded-xl border-2 font-display font-semibold text-sm transition-all mb-3 ${
                    selectedAmount === "custom"
                      ? "border-brand-orange bg-brand-orange/[0.06] text-brand-orange"
                      : "border-slate-200 text-slate-500 hover:border-brand-orange/40 hover:text-brand-orange"
                  }`}
                >
                  Custom Amount
                </button>
                <AnimatePresence>
                  {selectedAmount === "custom" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="relative mb-3">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-display font-bold pointer-events-none">$</span>
                        <input
                          type="number"
                          min="1"
                          placeholder="Enter amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-brand-orange/30 focus:border-brand-orange focus:outline-none text-slate-800 font-display font-semibold"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Donate button — disabled until GiveButter is live */}
                <button
                  disabled
                  className="w-full mt-2 flex items-center justify-center gap-2 bg-slate-200 text-slate-400 font-display font-bold px-8 py-4 rounded-xl cursor-not-allowed select-none"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Donate Securely
                </button>
                <p className="text-center text-xs text-slate-400 mt-2.5">Powered by GiveButter &mdash; coming soon</p>
              </div>
            </ScrollReveal>

            {/* Mail address */}
            <div className="space-y-5">
              <ScrollReveal delay={0.1}>
                <div className="card-light p-7 border-l-4 border-brand-blue">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-display font-bold text-slate-800">Give by Mail</h3>
                  </div>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                    Make checks payable to <span className="font-semibold text-slate-700">Impact Works</span>.
                  </p>
                  <address className="not-italic text-sm text-slate-700 leading-[1.9] bg-slate-50 rounded-xl p-4 font-display">
                    <span className="font-semibold">Impact Works</span><br />
                    Attn: Foundation<br />
                    151 College Dr Ste 1<br />
                    Orange Park, FL 32065
                  </address>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Legal & Tax Disclosure — collapsible */}
          <ScrollReveal className="mt-8">
            <div className="card-light overflow-hidden">
              <button
                onClick={() => setTaxOpen(!taxOpen)}
                className="w-full flex items-center justify-between px-7 py-5 text-left group"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="font-display font-semibold text-slate-800 group-hover:text-brand-orange transition-colors">
                    Legal &amp; Tax Information
                  </span>
                  <span className="hidden sm:inline font-mono text-xs text-slate-400 uppercase tracking-wide">· 501(c)(3) · EIN 41-5141462</span>
                </div>
                <motion.svg
                  animate={{ rotate: taxOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 text-slate-400 flex-shrink-0"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {taxOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-8 border-t border-slate-100">
                      <div className="pt-6 space-y-4 max-w-3xl">
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Impact Works is a nonprofit organization registered in the State of Florida and recognized
                          by the Internal Revenue Service as a tax-exempt organization under Section 501(c)(3) of the
                          Internal Revenue Code.{" "}
                          <span className="font-semibold text-slate-700">EIN: 41-5141462</span>
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Contributions made to Impact Works are tax-deductible to the full extent permitted by federal
                          and state law. No goods or services were provided to the donor in exchange for this
                          contribution unless otherwise explicitly stated at the time of giving.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          In accordance with IRS requirements, donors who make a single contribution of $250 or more
                          will receive a written acknowledgment for tax purposes. We encourage all donors to retain
                          their donation receipt and consult a qualified tax professional regarding the deductibility
                          of their contribution.
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          Impact Works is committed to full financial transparency. In keeping with that commitment,
                          100% of all funds received by the Foundation are distributed directly to verified service
                          providers within the Linksi network. Financial records and annual filings are available upon
                          request in compliance with Florida state law and IRS regulations.
                        </p>
                        <p className="text-xs text-slate-400 border-t border-slate-100 pt-4 leading-relaxed">
                          Impact Works is registered to solicit charitable contributions in the State of Florida.
                          Registration does not imply endorsement, approval, or recommendation by the State.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Commitment — orange CTA strip */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <ScrollReveal>
          <div className="max-w-site mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-gold">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] border-[3px] border-white/10 rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border-[2px] border-white/5 rounded-full" />
              </div>
              <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center px-8 md:pl-16 md:pr-12 py-14 md:py-18">
                <div className="md:col-span-8">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 mb-3">Our Commitment</p>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                    Accountability, Transparency &amp; Sustainable Growth
                  </h2>
                  <p className="text-white/85 leading-relaxed max-w-2xl">
                    This performance-informed model of giving reflects the Impact Works Foundation's unwavering commitment
                    to accountability, transparency, and the sustainable growth of community-centered care.
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-display font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  >
                    Contact Us <span>&rarr;</span>
                  </Link>
                  <Link
                    href="/providers"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-display font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    See Our Providers
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
