"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

export default function Impact() {
  return (
    <div>
      {/* Hero — dark, compact */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Measurable Results</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white max-w-3xl">
            Community <span className="gradient-text-orange">Impact</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">
            Real numbers, real stories — how Impact Works is changing lives across Clay County.
          </motion.p>
        </div>
      </section>

      {/* Stats — orange bg strip for contrast */}
      <section className="bg-brand-orange py-12 px-6">
        <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: 1500, suffix: "+", label: "Residents Connected" },
            { value: 50, suffix: "+", label: "Partner Organizations" },
            { value: 4000, suffix: "+", label: "Referrals Made" },
            { value: 100, suffix: "%", label: "Real-Time Data" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-mono text-3xl md:text-4xl lg:text-5xl text-white font-bold tabular-nums">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-white/70 mt-2">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Service Demand — thicker bars */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto grid md:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <p className="eyebrow mb-4">Data Insights</p>
            <h2 className="heading-section text-slate-800 mb-4">Service Demand <span className="gradient-text-blue">Data</span></h2>
            <p className="body-text-muted">Understanding what communities need most helps us allocate resources effectively.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="space-y-6">
              {[
                { label: "Housing Requests", pct: 35, color: "bg-brand-blue" },
                { label: "Food Assistance", pct: 28, color: "bg-brand-green" },
                { label: "Healthcare Access", pct: 22, color: "bg-brand-orange" },
                { label: "Mental Health Support", pct: 15, color: "bg-brand-gold" },
              ].map((cat) => (
                <div key={cat.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-700 font-semibold">{cat.label}</span>
                    <span className="font-mono text-slate-400">{cat.pct}%</span>
                  </div>
                  <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${cat.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }} className={`h-full ${cat.color} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dashboard */}
      <section className="section-pad section-light-alt">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="eyebrow mb-4">Live Dashboard</p>
            <h2 className="heading-section text-slate-800">Data <span className="gradient-text-orange">Dashboard</span></h2>
          </ScrollReveal>
          <ScrollReveal>
            <Image src="/images/datadashboard.png" alt="Community Service Dashboard" width={1120} height={640} className="w-full rounded-2xl shadow-xl border border-slate-200" />
          </ScrollReveal>
        </div>
      </section>

      {/* Stories — with colored left border and quote-style */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-16">
            <p className="eyebrow mb-4">Real Stories</p>
            <h2 className="heading-section text-slate-800">Community <span className="gradient-text-blue">Stories</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Veteran Finds Housing Support", desc: "After months of searching, a local veteran was connected to housing assistance within 24 hours through Linksi.", category: "Housing", color: "border-l-brand-blue bg-brand-blue" },
              { title: "Parent Finds Childcare Resources", desc: "A single parent found affordable childcare options through the platform, enabling them to maintain employment.", category: "Childcare", color: "border-l-brand-orange bg-brand-orange" },
              { title: "Senior Receives Healthcare Referral", desc: "An elderly resident was matched with a healthcare provider offering specialized services close to home.", category: "Healthcare", color: "border-l-brand-green bg-brand-green" },
            ].map((story, i) => (
              <ScrollReveal key={story.title} delay={i * 0.1}>
                <div className="card-light p-0 h-full overflow-hidden border-l-4 border-l-brand-blue">
                  <div className={`${story.color.split(' ')[1]} px-6 py-3`}>
                    <span className="font-mono text-xs text-white/90 uppercase tracking-wider">{story.category}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold text-slate-800 mb-3">{story.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed italic">&ldquo;{story.desc}&rdquo;</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
