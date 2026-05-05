"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import HeroArcs from "@/components/HeroArcs";
import HeroNetworkSVG from "@/components/HeroNetworkSVG";

export default function Home() {
  return (
    <div>
      {/* ━━━ HERO ━━━ */}
      <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
        <HeroArcs />
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-brand-blue/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="eyebrow mb-5">Community Impact Platform</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white mb-6">
              An Innovative Community Operating System Connecting Communities to{" "}<span className="gradient-text-orange">Critical Services</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="body-text text-slate-300 max-w-lg mb-10">
              Impact Works develops data-driven solutions, making it easier for people to find the help they need while strengthening funding and collaboration among organizations serving the community.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap gap-4">
              <Link href="/platform" className="btn-primary">Explore Linksi <span>&rarr;</span></Link>
              <Link href="/impact" className="btn-ghost">Explore the Community Operating System</Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="relative flex justify-center">
            <HeroNetworkSVG />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-brand-orange rounded-full" />
          </motion.div>
        </motion.div>

        {/* Linksi mascot — small friendly peek in bottom-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block absolute bottom-6 right-6 lg:right-12 z-20 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/linksi-mascot.png"
              alt="Linksi mascot"
              width={140}
              height={140}
              className="drop-shadow-[0_8px_24px_rgba(232,117,26,0.35)]"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ━━━ PROBLEM ━━━ */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <Image src="/images/fragmentedsystemimage.png" alt="Person navigating disconnected social services" width={480} height={480} className="w-full max-w-md mx-auto" />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="eyebrow mb-4">The Problem</p>
            <h2 className="heading-section text-slate-800 mb-6">Why Finding Help Is <span className="gradient-text-orange">Hard</span></h2>
            <p className="body-text-muted mb-8">
              People in need often face a confusing maze of phone calls, outdated directories, and disconnected organizations. Important services exist, but finding them quickly is often the biggest barrier.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "12+", label: "Avg. calls to find help" },
                { num: "3 wks", label: "Avg. wait for services" },
              ].map((s) => (
                <div key={s.num} className="bg-brand-orange/5 border border-brand-orange/15 rounded-2xl p-6">
                  <p className="font-mono text-3xl md:text-4xl text-brand-orange font-bold">{s.num}</p>
                  <p className="text-sm text-slate-500 mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ SOLUTION ━━━ */}
      <section className="section-pad section-light-alt">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="eyebrow mb-6">The Solution</p>
            <Image
              src="/images/linksi-full.png"
              alt="Linksi"
              width={400}
              height={267}
              className="w-full max-w-xs sm:max-w-sm mx-auto mb-4"
              priority={false}
            />
            <h2 className="heading-section text-slate-800 mb-4">How It Works</h2>
            <p className="body-text-muted max-w-2xl mx-auto">A smarter path from need to help — in three simple steps.</p>
          </ScrollReveal>

          <ScrollReveal className="mb-12">
            <Image src="/images/linksiprocessmap.png" alt="Linksi 3-step process" width={960} height={320} className="w-full max-w-4xl mx-auto" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Ask for Help", desc: "Residents simply ask Linksi what they need — in plain language, on any device.", color: "bg-brand-blue" },
              { step: "02", title: "Smart Matching", desc: "Linksi analyzes available services and identifies the best organizations to help.", color: "bg-brand-orange" },
              { step: "03", title: "Instant Referral", desc: "The request is routed directly to the provider — no waiting, no paperwork.", color: "bg-brand-green" },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.1}>
                <div className="card-light p-8 h-full group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${item.color}`} />
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-800 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ STATS ━━━ */}
      <section className="section-pad section-dark relative overflow-hidden">
        <HeroArcs />
        <div className="relative z-10 max-w-site mx-auto">
          <ScrollReveal className="text-center mb-16">
            <p className="eyebrow mb-4">Our Reach</p>
            <h2 className="heading-section text-white">Community <span className="gradient-text-orange">Impact</span></h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 1500, suffix: "+", label: "Residents Connected" },
              { value: 50, suffix: "+", label: "Partner Organizations" },
              { value: 4000, suffix: "+", label: "Referrals Made" },
              { value: 100, suffix: "%", label: "Real-Time Data Access" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="card-dark p-6 md:p-8 text-center">
                  <p className="font-mono text-3xl md:text-4xl lg:text-5xl text-brand-orange font-bold tabular-nums">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-sm text-slate-400 mt-3">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <ScrollReveal>
          <div className="max-w-site mx-auto">
            <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-gold" />
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] border-[3px] border-white/10 rounded-full" />
                <div className="absolute -top-10 -right-10 w-[400px] h-[400px] border-[2px] border-white/8 rounded-full" />
                <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] border-[3px] border-white/8 rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] border-[2px] border-white/5 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="relative z-10 w-full px-8 md:px-16 py-16 md:py-20">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-sm">
                    Ready to strengthen your community?
                  </h2>
                  <p className="text-base md:text-lg text-white/85 max-w-xl mx-auto mb-10 leading-relaxed">
                    Join the growing network of organizations using Impact Works to connect people with the services they need.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-orange font-display font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
                      Partner With Us <span>&rarr;</span>
                    </Link>
                    <Link href="/platform" className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-display font-semibold px-8 py-4 rounded-xl hover:bg-white/25 active:scale-[0.98] transition-all duration-300 cursor-pointer">
                      Learn About Linksi
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
