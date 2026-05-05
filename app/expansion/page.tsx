"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";
import FloridaExpansionMap from "@/components/FloridaExpansionMap";

export default function Expansion() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Growth Strategy</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white max-w-4xl">
            Scaling Community <span className="gradient-text-blue">Connections</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">From a single county pilot to a statewide network.</motion.p>
        </div>
      </section>

      {/* Florida Expansion Map — the main section */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-16">
            <p className="eyebrow mb-4">Expansion Roadmap</p>
            <h2 className="heading-section text-slate-800">Growing Across <span className="gradient-text-orange">Florida</span></h2>
          </ScrollReveal>

          <FloridaExpansionMap />
        </div>
      </section>

      {/* CTA — layered orange with depth */}
      <section className="relative overflow-hidden">
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-gold" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/5" />

        {/* Decorative arc shapes — brand motif */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] border-[3px] border-white/10 rounded-full" />
          <div className="absolute -top-16 -right-16 w-[450px] h-[450px] border-[2px] border-white/8 rounded-full" />
          <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] border-[3px] border-white/8 rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] border-[2px] border-white/5 rounded-full" />
          {/* Small accent circles */}
          <div className="absolute top-16 left-[12%] w-4 h-4 bg-white/15 rounded-full" />
          <div className="absolute top-28 left-[16%] w-2.5 h-2.5 bg-white/10 rounded-full" />
          <div className="absolute bottom-20 right-[15%] w-5 h-5 bg-white/8 rounded-full" />
          <div className="absolute bottom-32 right-[22%] w-3 h-3 bg-white/12 rounded-full" />
          <div className="absolute top-1/2 right-[8%] w-2 h-2 bg-white/15 rounded-full" />
          {/* Diagonal light streak */}
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent rotate-12" />
        </div>

        <div className="relative z-10 section-pad">
          <ScrollReveal>
            <div className="max-w-site mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Join the Movement</p>
                <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Bring Impact Works to your region
                </h2>
                <p className="text-base md:text-lg text-white/75 leading-relaxed mb-8">
                  Interested in expanding Impact Works to your community? We&apos;re looking for partners across Florida to build the next chapter.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-orange font-display font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
                    Get in Touch <span>&rarr;</span>
                  </Link>
                  <Link href="/partners" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white font-display font-semibold px-8 py-4 rounded-xl hover:bg-white/25 active:scale-[0.98] transition-all duration-300 cursor-pointer">
                    See Our Partners
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                  <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
                    <p className="font-mono text-3xl font-bold text-brand-orange">67</p>
                    <p className="text-xs text-slate-500 mt-1">FL Counties</p>
                  </div>
                  <div className="bg-brand-blue rounded-2xl p-5 text-center shadow-lg">
                    <p className="font-mono text-3xl font-bold text-white">22.6M</p>
                    <p className="text-xs text-white/70 mt-1">Residents</p>
                  </div>
                  <div className="bg-brand-green rounded-2xl p-5 text-center shadow-lg">
                    <p className="font-mono text-3xl font-bold text-white">50+</p>
                    <p className="text-xs text-white/70 mt-1">Partners Today</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 text-center shadow-lg">
                    <p className="font-mono text-3xl font-bold text-brand-blue">3</p>
                    <p className="text-xs text-slate-500 mt-1">Growth Phases</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
