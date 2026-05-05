"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

const categories = [
  { title: "Nonprofits", desc: "Community organizations providing direct services to residents in need.", color: "border-brand-orange" },
  { title: "Healthcare Systems", desc: "Hospitals and clinics coordinating care access for underserved populations.", color: "border-brand-green" },
  { title: "Government Agencies", desc: "Local and state agencies managing public assistance and social programs.", color: "border-brand-blue" },
  { title: "Faith Organizations", desc: "Churches and faith-based groups offering support and outreach programs.", color: "border-brand-gold" },
  { title: "Community Initiatives", desc: "Grassroots programs and local efforts building stronger neighborhoods.", color: "border-brand-blue" },
  { title: "Educational Institutions", desc: "Schools and colleges connecting students and families with wraparound support services.", color: "border-brand-green" },
];

export default function Partners() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Our Network</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white">
              Community <span className="gradient-text-orange">Partners</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">Organizations working together to strengthen access to services.</motion.p>
          </div>
          {/* Page-specific visual: stacked partner-category badges with brand colors */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-5 hidden md:flex flex-col items-end gap-2.5">
            {[
              { label: "Nonprofits",        dot: "#E8751A" },
              { label: "Healthcare",        dot: "#3DAA5C" },
              { label: "Government",        dot: "#2E8BC0" },
              { label: "Faith Orgs",        dot: "#F5A623" },
              { label: "Community Initiatives", dot: "#4DA8D9" },
              { label: "Education",         dot: "#5EC87A" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-full px-4 py-2 shadow-lg"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.dot, boxShadow: `0 0 8px ${item.dot}` }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-100 font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6 categories — fills 2x3 grid perfectly */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </section>

      {/* CTA — orange with mascot */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <ScrollReveal>
          <div className="max-w-site mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-gold">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] border-[3px] border-white/10 rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border-[2px] border-white/5 rounded-full" />
              </div>
              <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center px-8 md:pl-16 md:pr-8 py-12 md:py-16">
                <div className="md:col-span-6">
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">Join Our Network</h2>
                  <p className="text-white/85 mb-8 leading-relaxed">
                    Whether you&apos;re a nonprofit, healthcare provider, government agency, or community organization — there&apos;s a place for you in the Impact Works ecosystem.
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-orange font-display font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                    Partner With Us <span>&rarr;</span>
                  </Link>
                </div>
                <div className="md:col-span-6 relative flex justify-center items-center">
                  <Image src="/images/linksi-full.png" alt="Linksi" width={800} height={430} className="w-full max-w-[500px] md:max-w-[560px] drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
