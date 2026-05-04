"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import HeroArcs from "@/components/HeroArcs";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

const features = [
  { title: "Instant Referrals", desc: "No waiting or paperwork. Direct connections in seconds.", color: "border-brand-orange" },
  { title: "Anonymous Access", desc: "Search for services privately and securely.", color: "border-brand-green" },
  { title: "Real-Time Data", desc: "Up-to-date service availability across all providers.", color: "border-brand-blue" },
  { title: "Provider Collaboration", desc: "Organizations coordinate seamlessly through shared data.", color: "border-brand-gold" },
  { title: "Analytics Dashboard", desc: "Track service needs and measure community impact.", color: "border-brand-blue" },
  { title: "Community Directory", desc: "Centralized, searchable database of all services.", color: "border-brand-green" },
];

export default function Platform() {
  return (
    <div>
      {/* Hero — dark */}
      <section className="relative min-h-[60vh] flex items-center section-dark overflow-hidden">
        <HeroArcs />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Linksi Platform</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white mb-6">
            AI-Powered Connections Between People &amp; <span className="gradient-text-blue">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 max-w-2xl mx-auto mb-8">
            Linksi uses intelligent matching to connect residents with the help they need — instantly and privately.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Link href="#demo" className="btn-primary">See How It Works <span>&darr;</span></Link>
          </motion.div>
        </div>
      </section>

      {/* Linksi Mascot + Demo — light */}
      <section id="demo" className="section-pad section-light">
        <div className="max-w-site mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <Image src="/images/linksi-mascot.png" alt="Linksi — AI assistant octopus" width={400} height={300} className="w-full max-w-sm mx-auto" />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="card-light overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-100 flex items-center gap-5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="font-mono text-[11px] text-slate-400">linksi.impactworks.dev</span>
              </div>
              <div className="p-6 space-y-4">
                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex justify-end">
                  <div className="bg-brand-blue text-white text-sm px-4 py-2.5 rounded-xl rounded-br-sm max-w-[240px]">I need help with housing.</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.8 }} className="flex justify-start">
                  <div className="bg-gray-50 text-slate-700 text-sm px-4 py-3 rounded-xl rounded-bl-sm max-w-[280px] border border-slate-100">
                    <p className="font-semibold mb-2">Here are organizations that can help:</p>
                    <ul className="space-y-1.5 text-slate-500">
                      {["Clay County Housing Authority", "Safe Shelter Alliance", "Habitat for Humanity — NE FL"].map((org) => (
                        <li key={org} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-green" />{org}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process — light alt */}
      <section className="section-pad section-light-alt">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="heading-section text-slate-800">A smarter path from need to <span className="gradient-text-orange">help</span></h2>
          </ScrollReveal>
          <ScrollReveal><Image src="/images/linksiprocessmap.png" alt="Linksi 3-step process" width={960} height={320} className="w-full max-w-4xl mx-auto" /></ScrollReveal>
        </div>
      </section>

      {/* Features — light */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-16">
            <p className="eyebrow mb-4">Capabilities</p>
            <h2 className="heading-section text-slate-800">Platform <span className="gradient-text-blue">Features</span></h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.06}>
                <div className={`card-light p-8 h-full border-l-4 ${f.color} group`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 rounded-lg ${f.color.replace('border-', 'bg-')} flex items-center justify-center`}>
                      <span className="text-white font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-800 group-hover:text-brand-orange transition-colors">{f.title}</h3>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture — light with proper SVG diagram */}
      <section className="section-pad section-light-alt">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-4">
            <p className="eyebrow mb-4">System Design</p>
            <h2 className="heading-section text-slate-800 mb-2">Platform <span className="gradient-text-blue">Architecture</span></h2>
            <p className="body-text-muted max-w-xl mx-auto">How data flows through the Linksi ecosystem.</p>
          </ScrollReveal>
          <ScrollReveal>
            <ArchitectureDiagram />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
