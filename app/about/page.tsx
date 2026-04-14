"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import HeroArcs from "@/components/HeroArcs";

const team = [
  { name: "Connie Thomas", title: "Chief Executive Officer", photo: "/team/connie.jpg",
    objectPosition: "center 25%",
    bio: "Connie is a Licensed Clinical Social Worker and President & CEO of Impact Clay since 2022. A Clay County native, she has led community initiatives across the business, faith-based, nonprofit, and government sectors — including the Impact Clay Train, which delivers vital care to underserved areas." },
  { name: "Michelle Reaves", title: "Chief Operating Officer", photo: "/team/michelle.jpg",
    objectPosition: "center 25%",
    bio: "Michelle Reaves brings expertise in project coordination, administrative operations, and grant writing. Certified in Six Sigma Lean Black Belt and Change Management, she previously secured critical funding and led process improvement at the Clay County Sheriff\u2019s Office." },
  { name: "Heather Johnson", title: "Admin Assistant & Data Systems Analyst", photo: "/team/heather.jpg",
    objectPosition: "center 8%",
    bio: "Heather brings 20+ years of administrative experience across for-profit, nonprofit, and military settings as a Navy veteran. She holds a BA in Psychology from UNF and serves as a licensed Pastoral Care Lay Leader for the Diocese of North Florida." },
];

export default function About() {
  return (
    <div>
      {/* ━━━ HERO — matches site pattern ━━━ */}
      <section className="relative min-h-[55vh] flex items-center section-dark overflow-hidden">
        <HeroArcs />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Our Story</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white">
              About Impact<span className="gradient-text-orange">Works</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-lg">
              Technology for Stronger Communities
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="flex justify-center">
            <Image src="/images/logo-full.png" alt="Impact Works" width={320} height={320} className="w-full max-w-[280px] drop-shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* ━━━ STORY — bento layout with pull quote ━━━ */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <div className="grid md:grid-cols-5 gap-6">
            {/* Main story — takes 3 cols */}
            <ScrollReveal className="md:col-span-3">
              <div className="card-light p-8 md:p-10 h-full border-l-4 border-brand-blue">
                <p className="eyebrow !text-brand-blue mb-4">Who We Are</p>
                <p className="body-text text-slate-600 text-lg leading-relaxed mb-6">
                  Impact Works is a collaborative initiative created to solve one of the most persistent challenges in social services: connecting people with the help they need quickly and efficiently.
                </p>
                <p className="body-text-muted">
                  By combining community partnerships with modern technology, Impact Works builds tools that improve access to services while helping organizations coordinate their efforts.
                </p>
              </div>
            </ScrollReveal>

            {/* Pull quote + stats — takes 2 cols, stacked */}
            <div className="md:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-brand-orange rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-white/10 rounded-full" />
                  <p className="font-display text-xl md:text-2xl font-bold leading-snug relative z-10">
                    &ldquo;A connected community where every resident can easily access services.&rdquo;
                  </p>
                  <p className="font-mono text-xs text-white/60 mt-4">Our Vision</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-blue rounded-2xl p-6 text-white text-center">
                    <p className="font-mono text-3xl font-bold">2022</p>
                    <p className="text-xs text-white/60 mt-1">Founded</p>
                  </div>
                  <div className="bg-brand-green rounded-2xl p-6 text-white text-center">
                    <p className="font-mono text-3xl font-bold">FL</p>
                    <p className="text-xs text-white/60 mt-1">Clay County</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TIMELINE — journey with milestones and progression ━━━ */}
      <section className="section-pad section-light-alt overflow-hidden relative">
        {/* Background dot grid */}
        <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-site mx-auto">
          <ScrollReveal className="mb-16">
            <p className="eyebrow mb-4">Timeline</p>
            <h2 className="heading-section text-slate-800">Our <span className="gradient-text-blue">Journey</span></h2>
            <p className="body-text-muted mt-4 max-w-xl">From a simple observation to a statewide mission — the story so far.</p>
          </ScrollReveal>

          {/* Alternating milestone cards */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical spine line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-green via-brand-blue to-brand-orange/50 md:-translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  year: "2024",
                  title: "The Spark",
                  text: "Community service access gaps identified across Clay County, Florida — sparking the need for a coordinated solution.",
                  done: true,
                  borderClass: "border-brand-green",
                  textClass: "text-brand-green",
                  ringClass: "border-brand-green/30",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                },
                {
                  year: "2025",
                  title: "The Launch",
                  text: "Impact Works initiative formally launched to unify nonprofits, government, and community organizations.",
                  done: true,
                  borderClass: "border-brand-blue",
                  textClass: "text-brand-blue",
                  ringClass: "border-brand-blue/30",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  year: "2025",
                  title: "The Platform",
                  text: "Linksy platform developed and deployed, giving residents instant AI-powered access to critical community services.",
                  done: true,
                  borderClass: "border-brand-blue",
                  textClass: "text-brand-blue",
                  ringClass: "border-brand-blue/30",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                },
                {
                  year: "2026+",
                  title: "The Expansion",
                  text: "Regional and statewide expansion — bringing Impact Works to every community that needs it.",
                  done: false,
                  borderClass: "border-brand-orange",
                  textClass: "text-brand-orange",
                  ringClass: "border-brand-orange/30",
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                },
              ].map((item, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="relative grid md:grid-cols-2 gap-8 items-center">
                      {/* Node on spine */}
                      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                        <div className={`relative w-12 h-12 rounded-full bg-white shadow-lg border-4 ${item.borderClass} flex items-center justify-center`}>
                          <svg className={`w-5 h-5 ${item.textClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                          </svg>
                          {!item.done && (
                            <div className={`absolute -inset-2 rounded-full border-2 ${item.ringClass} animate-ping`} />
                          )}
                        </div>
                      </div>

                      {/* Content card */}
                      <div className={`md:col-span-1 pl-24 md:pl-0 ${isLeft ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                        <div className={`inline-flex items-center gap-2 mb-2 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <span className={`font-mono text-xs uppercase tracking-wider ${item.textClass}`}>
                            {item.year}
                          </span>
                          <span className="w-6 h-[1px] bg-slate-300" />
                          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                            {item.done ? "Completed" : "In Progress"}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-800 mb-3">{item.title}</h3>
                        <p className={`text-slate-500 leading-relaxed ${isLeft ? "md:ml-auto" : ""}`} style={{ maxWidth: "420px" }}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ MISSION & VISION — contrasting now/future ━━━ */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-12">
            <p className="eyebrow mb-4">What Drives Us</p>
            <h2 className="heading-section text-slate-800">
              Present <span className="gradient-text-blue">purpose</span>, future <span className="gradient-text-orange">promise</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* MISSION — dark, grounded, "now" */}
            <ScrollReveal className="flex">
              <div className="relative bg-navy-900 rounded-3xl p-10 md:p-12 w-full overflow-hidden flex flex-col">
                {/* Decorative arcs */}
                <div className="absolute -top-20 -right-20 w-64 h-64 border-[2px] border-brand-blue/15 rounded-full" />
                <div className="absolute -top-8 -right-8 w-40 h-40 border-[2px] border-brand-blue/10 rounded-full" />
                {/* Glow */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-brand-blue/20 to-transparent blur-3xl" />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Label with animated dot */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative w-2 h-2">
                      <div className="absolute inset-0 bg-brand-blue rounded-full" />
                      <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping" />
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-blue">Our Mission — Today</p>
                  </div>

                  <p className="font-display text-2xl md:text-3xl leading-tight font-bold text-white">
                    To empower <span className="text-brand-blue-light">communities</span> through{" "}
                    <span className="text-brand-blue-light">real-time access</span> to reliable service data that connects individuals with the support systems they need.
                  </p>

                  {/* Spacer to push footer down */}
                  <div className="flex-1 min-h-[2rem]" />

                  {/* Footer mission pillars — matches height of Vision footer */}
                  <div className="pt-8 border-t border-white/10 flex items-baseline gap-6">
                    {["Data-driven", "Community-first", "Always on"].map((pillar, i) => (
                      <div key={pillar} className="flex items-baseline gap-6">
                        {i > 0 && <div className="w-px h-4 bg-white/15 -ml-3" />}
                        <p className="font-display text-sm font-semibold text-white">{pillar}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* VISION — light, aspirational, "future" */}
            <ScrollReveal delay={0.1} className="flex">
              <div className="relative bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-gold rounded-3xl p-10 md:p-12 w-full overflow-hidden flex flex-col">
                {/* Decorative arcs — sunrise metaphor */}
                <div className="absolute -bottom-32 -left-16 w-96 h-96 border-[3px] border-white/15 rounded-full" />
                <div className="absolute -bottom-20 -left-8 w-72 h-72 border-[2px] border-white/10 rounded-full" />
                <div className="absolute -bottom-12 left-0 w-56 h-56 border-[2px] border-white/8 rounded-full" />

                <div className="relative z-10 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <svg className="w-4 h-4 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-navy-900">Our Vision — Tomorrow</p>
                  </div>

                  <p className="font-display text-2xl md:text-3xl leading-tight font-bold text-white">
                    A <span className="text-navy-900">connected community</span> where{" "}
                    <span className="text-navy-900">every resident</span> can easily access the services that support stability, health, and opportunity.
                  </p>

                  {/* Spacer */}
                  <div className="flex-1 min-h-[2rem]" />

                  {/* Aspirational markers — inline to match Mission footer height */}
                  <div className="pt-8 border-t border-white/20 flex items-baseline gap-6">
                    <div className="flex items-baseline gap-2">
                      <p className="font-mono text-lg font-bold text-white">22.6M</p>
                      <p className="text-xs text-white/70">reached</p>
                    </div>
                    <div className="w-px h-4 bg-white/20" />
                    <div className="flex items-baseline gap-2">
                      <p className="font-mono text-lg font-bold text-white">2030</p>
                      <p className="text-xs text-white/70">statewide</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ TEAM — unified 3-column, equal weight ━━━ */}
      <section className="section-pad section-light-alt">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-12">
            <p className="eyebrow mb-4">Leadership</p>
            <h2 className="heading-section text-slate-800">
              The people behind <span className="gradient-text-orange">Impact Works</span>
            </h2>
            <p className="body-text-muted mt-4 max-w-xl">A team combining clinical expertise, operational rigor, and community roots.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => {
              const styles = [
                { accent: "bg-brand-blue", bg: "bg-brand-blue/5", line: "bg-brand-blue" },
                { accent: "bg-brand-green", bg: "bg-brand-green/5", line: "bg-brand-green" },
                { accent: "bg-brand-orange", bg: "bg-brand-orange/5", line: "bg-brand-orange" },
              ][i];
              return (
                <ScrollReveal key={member.name} delay={i * 0.1}>
                  <div className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full">
                    {/* Portrait area */}
                    <div className={`relative aspect-square overflow-hidden ${styles.bg}`}>
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{ objectPosition: member.objectPosition }}
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                      {/* Colored gradient overlay on hover */}
                      <div className={`absolute inset-0 ${styles.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-multiply`} />
                      {/* Corner accent number */}
                      <div className={`absolute top-4 left-4 w-9 h-9 rounded-full ${styles.accent} flex items-center justify-center shadow-lg`}>
                        <span className="font-mono text-[10px] text-white font-bold">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 relative">
                      {/* Accent line */}
                      <div className={`absolute top-0 left-6 right-6 h-[3px] ${styles.line} rounded-full`} />

                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">{member.title}</p>
                      <h3 className="font-display text-xl font-bold text-slate-800 mb-4">{member.name}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ CTA — orange, matches site pattern ━━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-gold" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] border-[3px] border-white/10 rounded-full" />
          <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] border-[3px] border-white/8 rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
        <ScrollReveal>
          <div className="relative z-10 section-pad text-center">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-6">
              Want to work with us?
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-lg mx-auto mb-10">
              We&apos;re always looking for partners who share our vision of connected communities.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-orange font-display font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer">
              Get in Touch <span>&rarr;</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
