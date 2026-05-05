"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import ScrollReveal from "@/components/ScrollReveal";
import HeroArcs from "@/components/HeroArcs";

export default function Home() {
  // Angles tuned to avoid mascot tentacle peaks — leans toward verticals/diagonals
  // 12 o'clock, 2, 5, 7, 10, plus 8 — uneven on purpose for editorial asymmetry
  const services = [
    { label: "Housing",       dot: "#2E8BC0", angle: -95  },
    { label: "Healthcare",    dot: "#E8751A", angle: -45  },
    { label: "Food",          dot: "#3DAA5C", angle: 45   },
    { label: "Jobs",          dot: "#F5A623", angle: 95   },
    { label: "Mental Health", dot: "#475569", angle: 165  },
    { label: "Childcare",     dot: "#4DA8D9", angle: 225  },
  ];

  return (
    <div>
      {/* ━━━ HERO — Sunlit Editorial Operating System ━━━ */}
      <section className="relative overflow-hidden bg-[#FAF6EE]">
        {/* Top scrim — keeps nav readable on warm bg */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(15,10,3,0.45)] via-[rgba(15,10,3,0.18)] to-transparent z-10 pointer-events-none" />

        {/* Atmospheric color mesh */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-[700px] h-[700px] bg-gradient-radial from-brand-orange/15 via-brand-orange/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-[15%] -left-[8%] w-[650px] h-[650px] bg-gradient-radial from-brand-blue/10 via-brand-blue/3 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[40%] left-[35%] w-[420px] h-[420px] bg-gradient-radial from-brand-gold/8 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Paper grain texture */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />

        {/* Editorial top hairline (just below nav scrim) */}
        <div className="absolute top-24 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent z-[5]" />

        {/* Content grid */}
        <div className="relative z-[5] max-w-site mx-auto px-6 pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 grid md:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[88vh]">
          {/* COPY COLUMN */}
          <div className="md:col-span-7 relative">
            {/* Vertical accent rule (desktop only) */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block absolute -left-6 top-2 bottom-32 w-[2px] bg-gradient-to-b from-brand-orange via-brand-orange/40 to-transparent origin-top"
            />

            {/* Lead-in */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xl md:text-2xl lg:text-[1.875rem] font-medium text-slate-600 mb-5 leading-snug tracking-[-0.01em]"
            >
              An Innovative Community Operating System
            </motion.p>

            {/* Main H1 — controlled wrap via block span */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-slate-900 mb-8 text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[5rem] leading-[0.98] tracking-[-0.035em]"
            >
              Connecting Communities
              <span className="block">
                to <span className="gradient-text-orange">Critical Services</span>
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-display text-base md:text-[17px] text-slate-600 max-w-md leading-[1.65] mb-10"
            >
              Impact Works develops data-driven solutions, making it easier for people to find the help they need while strengthening funding and collaboration among organizations serving the community.
            </motion.p>

            {/* CTAs — editorial pairing */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <Link
                href="/platform"
                className="group inline-flex items-center gap-2 bg-brand-orange text-white font-display font-bold px-7 py-3.5 rounded-xl hover:bg-brand-orange-light hover:shadow-[0_8px_24px_-6px_rgba(232,117,26,0.45)] active:scale-[0.97] transition-all duration-300 cursor-pointer"
              >
                Explore Linksi
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
              </Link>
              <Link
                href="/impact"
                className="group inline-flex items-center gap-1.5 font-display font-semibold text-slate-700 text-[15px] hover:text-brand-orange transition-colors duration-300"
              >
                <span className="relative">
                  Explore the Community Operating System
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </motion.div>
          </div>

          {/* MASCOT COLUMN — choreographed boot sequence */}
          <div className="md:col-span-5 relative aspect-square w-full max-w-md md:max-w-none mx-auto">
            {/* Soft halo container — fades in during boot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-[6%] rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(232,117,26,0.12) 0%, rgba(245,166,35,0.07) 40%, rgba(232,117,26,0.02) 70%, transparent 100%)",
              }}
            />

            {/* Single SVG canvas — boot sequence + ambient state */}
            <svg
              className="absolute inset-0 w-full h-full overflow-visible"
              viewBox="-50 -50 100 100"
              aria-hidden="true"
            >
              {/* Wake-up energy burst — expands outward at 0.5s as Linksi boots */}
              <motion.circle
                cx="0" cy="0"
                fill="none"
                stroke="#E8751A"
                strokeOpacity={0}
                strokeWidth={0.6}
                initial={{ r: 0, strokeOpacity: 0 }}
                animate={{ r: [0, 18, 38], strokeOpacity: [0, 0.7, 0] }}
                transition={{ duration: 1.4, delay: 0.4, ease: "easeOut", times: [0, 0.4, 1] }}
              />
              <motion.circle
                cx="0" cy="0"
                fill="none"
                stroke="#F5A623"
                strokeOpacity={0}
                strokeWidth={0.4}
                initial={{ r: 0, strokeOpacity: 0 }}
                animate={{ r: [0, 22, 44], strokeOpacity: [0, 0.5, 0] }}
                transition={{ duration: 1.6, delay: 0.55, ease: "easeOut", times: [0, 0.4, 1] }}
              />

              {/* Faint outer system ring — appears AFTER the network establishes */}
              <motion.circle
                cx="0" cy="0" r="48"
                fill="none"
                stroke="#E8751A"
                strokeOpacity={0.18}
                strokeWidth={0.25}
                strokeDasharray="0.8 1.5"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.6, rotate: 360 }}
                transition={{
                  rotate: { duration: 200, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 1.0, delay: 2.7 },
                }}
                style={{ transformOrigin: "0px 0px" }}
              />

              {/* Concentric warm arcs — fade in during wake-up phase */}
              {[
                { r: 38, color: "#E8751A", dasharray: "8 14", strokeWidth: 0.40, rotation: 0,   duration: 60 },
                { r: 33, color: "#F5A623", dasharray: "4 10", strokeWidth: 0.32, rotation: 45,  duration: 80 },
                { r: 28, color: "#2E8BC0", dasharray: "6 16", strokeWidth: 0.36, rotation: 90,  duration: 70 },
                { r: 23, color: "#3DAA5C", dasharray: "3 12", strokeWidth: 0.28, rotation: 135, duration: 90 },
              ].map((arc, i) => (
                <motion.circle
                  key={`arc-${i}`}
                  cx="0" cy="0"
                  r={arc.r}
                  fill="none"
                  stroke={arc.color}
                  strokeOpacity={0.55}
                  strokeWidth={arc.strokeWidth}
                  strokeDasharray={arc.dasharray}
                  strokeLinecap="round"
                  initial={{ rotate: arc.rotation, opacity: 0 }}
                  animate={{ rotate: arc.rotation + 360, opacity: 0.6 }}
                  transition={{
                    rotate: { duration: arc.duration, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 1.2, delay: 0.7 + i * 0.1 },
                  }}
                  style={{ transformOrigin: "0px 0px" }}
                />
              ))}

              {/* Connection lines — draw outward in sync with chip arrival.
                   Line draws from r=15 to r=47, "reaching for" the chip as it flies in. */}
              {services.map((chip, i) => {
                const rad = (chip.angle * Math.PI) / 180;
                const innerR = 15;
                const outerR = 47;
                const x1 = innerR * Math.cos(rad);
                const y1 = innerR * Math.sin(rad);
                const x2 = outerR * Math.cos(rad);
                const y2 = outerR * Math.sin(rad);
                const chipDelay = 1.0 + i * 0.18;
                return (
                  <g key={`wire-${chip.label}`}>
                    <motion.line
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={chip.dot}
                      strokeOpacity={0.5}
                      strokeWidth={0.4}
                      strokeDasharray="0.8 1.2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.55 }}
                      transition={{
                        pathLength: { duration: 0.7, delay: chipDelay, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.4, delay: chipDelay },
                      }}
                    />
                    {/* Tap-point dot at the inner end — pops with the line */}
                    <motion.circle
                      cx={x1} cy={y1} r={0.8}
                      fill={chip.dot}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0.5],
                        scale: [0, 1.3, 1],
                      }}
                      transition={{
                        duration: 0.6,
                        delay: chipDelay + 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        times: [0, 0.4, 1],
                      }}
                    />
                    {/* Ambient pulse on tap-point — starts after entry settles */}
                    <motion.circle
                      cx={x1} cy={y1} r={0.8}
                      fill={chip.dot}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.4, 0.9, 0.4] }}
                      transition={{
                        duration: 2.8,
                        delay: 3.2 + i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </g>
                );
              })}

              {/* Center glow ping — bursts at boot, then settles into ambient pulse */}
              <motion.circle
                cx="0" cy="0"
                fill="#E8751A"
                initial={{ r: 0, opacity: 0 }}
                animate={{
                  r: [0, 2.4, 0.7, 0.7],
                  opacity: [0, 1, 0.7, 0.7],
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.45,
                  times: [0, 0.3, 0.6, 1],
                  ease: "easeOut",
                }}
              />
              <motion.circle
                cx="0" cy="0" r="0.7" fill="#E8751A"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.9, 0.4], r: [0.5, 1.4, 0.5] }}
                transition={{
                  duration: 3,
                  delay: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Confirmation pulse — all tap points flash brighter once when network completes */}
              {services.map((chip, i) => {
                const rad = (chip.angle * Math.PI) / 180;
                const cx = 15 * Math.cos(rad);
                const cy = 15 * Math.sin(rad);
                return (
                  <motion.circle
                    key={`flash-${chip.label}`}
                    cx={cx} cy={cy}
                    fill="none"
                    stroke={chip.dot}
                    strokeOpacity={0.8}
                    strokeWidth={0.5}
                    initial={{ r: 0.5, opacity: 0 }}
                    animate={{ r: [0.5, 4], opacity: [0, 0.9, 0] }}
                    transition={{
                      duration: 0.8,
                      delay: 2.7,
                      ease: "easeOut",
                      times: [0, 0.3, 1],
                    }}
                  />
                );
              })}
            </svg>

            {/* Soft warm cast shadow under mascot */}
            <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 w-[42%] h-8 bg-brand-orange/35 rounded-full blur-2xl pointer-events-none" />

            {/* Linksi mascot — fades in clean, then settles into ambient bob */}
            <motion.div
              initial={{ scale: 0.78, opacity: 0, y: 14 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                scale:   { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.6, delay: 0.2 },
                y:       { duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Ongoing ambient bob */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5.5,
                  delay: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[55%] md:w-[60%]"
              >
                <Image
                  src="/images/linksi-mascot.png"
                  alt="Linksi — your guide to community services"
                  width={520}
                  height={520}
                  priority
                  className="w-full h-auto drop-shadow-[0_22px_36px_rgba(232,117,26,0.32)]"
                />
              </motion.div>
            </motion.div>

            {/* Service chips — fly in from outside along their angle, "reeled in" by connection lines */}
            {services.map((chip, i) => {
              const radius = 50;
              const rad = (chip.angle * Math.PI) / 180;
              const finalX = 50 + radius * Math.cos(rad);
              const finalY = 50 + radius * Math.sin(rad);
              const entryDistance = 240; // pixels offset along the angle
              const entryDx = entryDistance * Math.cos(rad);
              const entryDy = entryDistance * Math.sin(rad);
              const chipDelay = 1.0 + i * 0.18;
              return (
                <div
                  key={chip.label}
                  style={{ left: `${finalX}%`, top: `${finalY}%`, transform: "translate(-50%, -50%)" }}
                  className="absolute hidden md:block"
                >
                  <motion.div
                    initial={{ x: entryDx, y: entryDy, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      x:       { duration: 0.85, delay: chipDelay, ease: [0.34, 1.56, 0.64, 1] },
                      y:       { duration: 0.85, delay: chipDelay, ease: [0.34, 1.56, 0.64, 1] },
                      opacity: { duration: 0.4, delay: chipDelay },
                      scale:   { duration: 0.85, delay: chipDelay, ease: [0.34, 1.56, 0.64, 1] },
                    }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 0.5, delay: 2.7, times: [0, 0.5, 1], ease: "easeOut" }}
                      className="bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_2px_8px_rgba(15,15,20,0.06)] rounded-full px-2.5 py-1 flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: chip.dot, boxShadow: `0 0 6px ${chip.dot}99` }}
                      />
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-700 font-medium">
                        {chip.label}
                      </span>
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom hairline + soft fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/15 to-transparent z-[5]" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-white pointer-events-none" />

        {/* Scroll indicator — recolored for cream bg */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 z-[6]"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-8 border border-slate-400/50 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 bg-brand-orange rounded-full" />
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
