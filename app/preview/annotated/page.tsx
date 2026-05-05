"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Editorial annotations — each points to a part of the mascot with a brand fact.
// Anchor coords are SVG viewBox units (-50..50). Labels are positioned in the
// same coordinate space, rendered as HTML for sharp text.
const annotations = [
  {
    label: "ALWAYS LISTENING · 24/7",
    sublabel: "Linksi receives requests in plain language",
    anchor: { x: 0, y: -22 },        // Top of headphones
    line:   { x: 0, y: -42 },         // Label position (line endpoint)
    side: "top" as const,
    delay: 1.2,
  },
  {
    label: "9 SECTORS NETWORKED",
    sublabel: "Housing, food, healthcare, jobs & more",
    anchor: { x: 14, y: -2 },         // Right body
    line:   { x: 42, y: -2 },         // Right label
    side: "right" as const,
    delay: 1.45,
  },
  {
    label: "MATCHED IN SECONDS",
    sublabel: "Real-time referral routing, no waiting",
    anchor: { x: 4, y: 18 },          // Lower-center near tentacle
    line:   { x: 18, y: 38 },         // Lower-right label
    side: "bottom" as const,
    delay: 1.7,
  },
  {
    label: "LINKSI · v1.0",
    sublabel: "Community Operating System",
    anchor: { x: -8, y: -8 },         // Left eye area
    line:   { x: -38, y: -28 },       // Upper-left label
    side: "left" as const,
    delay: 1.95,
  },
];

export default function AnnotatedPreview() {
  return (
    <div>
      {/* Banner */}
      <div className="bg-amber-50 border-b border-amber-200 py-2 px-4 text-center text-xs text-amber-900 font-mono">
        PREVIEW · Option C · Editorial Annotation Labels &nbsp;·&nbsp;
        <Link href="/" className="underline font-bold">View Chip Version (Home)</Link>
      </div>

      {/* HERO — same composition, annotations instead of chips */}
      <section className="relative overflow-hidden">
        {/* Layered warm-tinted dark base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#141228] via-[#0E1126] to-[#0A0F1F]" />

        {/* Atmospheric color mesh — same as production hero */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-[18%] -translate-y-1/2 w-[1600px] h-[1600px] bg-gradient-radial from-brand-orange/30 via-brand-orange/12 via-30% to-transparent to-65% rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-gold/20 via-brand-orange/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute -top-[20%] -right-[15%] w-[1000px] h-[1000px] bg-gradient-radial from-[#3A2614]/50 via-[#3A2614]/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-[15%] right-[22%] w-[600px] h-[600px] bg-gradient-radial from-brand-gold/16 via-brand-gold/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute -top-[10%] -left-[8%] w-[750px] h-[750px] bg-gradient-radial from-brand-blue/26 via-brand-blue/9 to-transparent rounded-full blur-3xl" />
          <div className="absolute -bottom-[22%] -left-[14%] w-[900px] h-[900px] bg-gradient-radial from-[#1A4A78]/42 via-[#1A4A78]/13 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-[35%] left-[3%] w-[500px] h-[500px] bg-gradient-radial from-brand-blue/20 via-brand-blue/6 to-transparent rounded-full blur-3xl" />
        </div>

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px 180px",
          }}
        />

        <div className="absolute top-24 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent z-[5]" />

        <div className="relative z-[5] max-w-site mx-auto px-6 pt-32 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 grid md:grid-cols-12 gap-10 lg:gap-16 items-center min-h-[88vh]">
          {/* COPY (same as production) */}
          <div className="md:col-span-7 relative">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block absolute -left-6 top-2 bottom-32 w-[2px] bg-gradient-to-b from-brand-orange via-brand-orange/60 to-transparent origin-top shadow-[0_0_12px_rgba(232,117,26,0.4)]"
            />
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-xl md:text-2xl lg:text-[1.875rem] font-medium text-slate-300 mb-5 leading-snug tracking-[-0.01em]"
            >
              An Innovative Community Operating System
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-white mb-8 text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[5rem] leading-[0.98] tracking-[-0.035em]"
            >
              Connecting Communities
              <span className="block">
                to <span className="gradient-text-orange">Critical Services</span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-display text-base md:text-[17px] text-slate-300 max-w-md leading-[1.65] mb-10"
            >
              Impact Works develops data-driven solutions, making it easier for people to find the help they need while strengthening funding and collaboration among organizations serving the community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-x-7 gap-y-4"
            >
              <Link href="/platform" className="group inline-flex items-center gap-2 bg-brand-orange text-white font-display font-bold px-7 py-3.5 rounded-xl hover:bg-brand-orange-light hover:shadow-[0_8px_28px_-4px_rgba(232,117,26,0.55)] active:scale-[0.97] transition-all duration-300">
                Explore Linksi
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
              </Link>
              <Link href="/impact" className="group inline-flex items-center gap-1.5 font-display font-semibold text-slate-200 text-[15px] hover:text-brand-orange transition-colors duration-300">
                <span className="relative">
                  Explore the Community Operating System
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </Link>
            </motion.div>
          </div>

          {/* MASCOT + ANNOTATIONS (the C variation) */}
          <div className="md:col-span-5 relative aspect-square w-full max-w-md md:max-w-none mx-auto">
            {/* Inner concentrated glow only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-[22%] rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(245,166,35,0.25) 0%, rgba(232,117,26,0.10) 60%, transparent 100%)" }}
            />

            {/* SVG: orbital arcs (kept as ambient) + annotation lines */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="-50 -50 100 100" aria-hidden="true">
              {/* Ambient concentric arcs — keep for atmosphere */}
              {[
                { r: 38, color: "#E8751A", dasharray: "8 14", strokeWidth: 0.40, rotation: 0,   duration: 60 },
                { r: 33, color: "#F5A623", dasharray: "4 10", strokeWidth: 0.32, rotation: 45,  duration: 80 },
                { r: 28, color: "#2E8BC0", dasharray: "6 16", strokeWidth: 0.36, rotation: 90,  duration: 70 },
              ].map((arc, i) => (
                <motion.circle
                  key={`arc-${i}`}
                  cx="0" cy="0" r={arc.r}
                  fill="none" stroke={arc.color}
                  strokeOpacity={0.4}
                  strokeWidth={arc.strokeWidth}
                  strokeDasharray={arc.dasharray}
                  strokeLinecap="round"
                  initial={{ rotate: arc.rotation, opacity: 0 }}
                  animate={{ rotate: arc.rotation + 360, opacity: 0.4 }}
                  transition={{
                    rotate: { duration: arc.duration, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 1.2, delay: 0.7 + i * 0.1 },
                  }}
                  style={{ transformOrigin: "0px 0px" }}
                />
              ))}

              {/* Editorial annotation lines */}
              {annotations.map((a, i) => {
                // Anchor → label-near-end with elbow bend
                const elbowX = a.anchor.x + (a.line.x - a.anchor.x) * 0.7;
                const elbowY = a.anchor.y + (a.line.y - a.anchor.y) * 0.85;
                return (
                  <g key={a.label}>
                    {/* Thin connection line: anchor → elbow → terminal */}
                    <motion.path
                      d={`M ${a.anchor.x} ${a.anchor.y} L ${elbowX} ${elbowY} L ${a.line.x} ${a.line.y}`}
                      fill="none"
                      stroke="#94a3b8"
                      strokeOpacity={0.5}
                      strokeWidth={0.3}
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.55 }}
                      transition={{
                        pathLength: { duration: 0.9, delay: a.delay, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.5, delay: a.delay },
                      }}
                    />
                    {/* Anchor dot — small filled circle on the mascot */}
                    <motion.circle
                      cx={a.anchor.x} cy={a.anchor.y} r={0.7}
                      fill="#E8751A"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: [0, 1, 0.7], scale: [0, 1.4, 1] }}
                      transition={{
                        duration: 0.5,
                        delay: a.delay - 0.15,
                        ease: [0.16, 1, 0.3, 1],
                        times: [0, 0.5, 1],
                      }}
                    />
                    {/* Anchor pulsing glow ring */}
                    <motion.circle
                      cx={a.anchor.x} cy={a.anchor.y} r={1}
                      fill="none"
                      stroke="#E8751A"
                      strokeWidth={0.2}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.6, 0.2, 0.6], r: [1, 2.2, 1] }}
                      transition={{
                        duration: 3,
                        delay: 3 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    {/* Terminal dash at label end */}
                    <motion.line
                      x1={a.line.x - 2.5}
                      y1={a.line.y}
                      x2={a.line.x + 2.5}
                      y2={a.line.y}
                      stroke="#E8751A"
                      strokeOpacity={0.7}
                      strokeWidth={0.4}
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.85 }}
                      transition={{ duration: 0.4, delay: a.delay + 0.7, ease: "easeOut" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Cast shadow */}
            <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 w-[42%] h-8 bg-brand-orange/35 rounded-full blur-2xl pointer-events-none" />

            {/* Mascot */}
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
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, delay: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[55%] md:w-[60%]"
              >
                <Image
                  src="/images/linksi-mascot.png"
                  alt="Linksi — your guide to community services"
                  width={520} height={520} priority
                  className="w-full h-auto drop-shadow-[0_22px_36px_rgba(232,117,26,0.32)]"
                />
              </motion.div>
            </motion.div>

            {/* Annotation labels (HTML for sharp text) — positioned at the same coords as SVG endpoints */}
            {annotations.map((a, i) => {
              // Convert SVG -50..50 coords to 0..100% within the container
              const x = 50 + a.line.x;
              const y = 50 + a.line.y;
              const align =
                a.side === "top" ? "items-end pb-4 -translate-x-1/2"
                : a.side === "bottom" ? "items-start pt-4 -translate-x-1/2"
                : a.side === "left" ? "justify-end pr-4 -translate-y-1/2"
                : "justify-start pl-4 -translate-y-1/2";
              return (
                <motion.div
                  key={`label-${a.label}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: a.delay + 0.85 }}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                  className={`absolute hidden md:flex flex-col ${align} ${
                    a.side === "right" ? "items-start" : a.side === "left" ? "items-end" : ""
                  } pointer-events-none`}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange font-semibold whitespace-nowrap">
                    {a.label}
                  </span>
                  <span className="font-display text-[11px] text-slate-400 whitespace-nowrap mt-0.5">
                    {a.sublabel}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent z-[5]" />
      </section>

      {/* Footnote */}
      <div className="bg-slate-50 py-12 px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-3">Preview Note</p>
        <p className="text-slate-700 max-w-2xl mx-auto leading-relaxed">
          This is the editorial annotation variation. The orbital chips are replaced by four labels with thin lines pointing to specific parts of Linksi — like a museum specimen card or technical-drawing annotation. Compare against the chip version at <Link href="/" className="text-brand-orange font-semibold underline">/</Link>.
        </p>
      </div>
    </div>
  );
}
