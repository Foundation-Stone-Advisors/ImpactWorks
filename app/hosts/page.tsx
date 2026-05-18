"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

// Update this list as hosting sites are confirmed — each entry appears as a card in the directory.
const hostingSites: { name: string; location: string; url: string }[] = [
  // { name: "Example County Agency", location: "Clay County, FL", url: "https://example.gov" },
];

export default function Hosts() {
  return (
    <div>
      <section className="relative min-h-[55vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Hosting Organizations</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white">
              Linksi <span className="gradient-text-orange">Hosts</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">
              Government agencies and anchor institutions that bring the Linksi platform to their communities — connecting residents to services at scale.
            </motion.p>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="md:col-span-5 hidden md:flex justify-center">
            <div className="relative w-full max-w-[320px] bg-white/[0.05] backdrop-blur-md border border-white/12 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-5">
                <div className="w-8 h-8 rounded-lg bg-brand-blue/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-semibold">Host Model</span>
              </div>
              <div className="space-y-3">
                {["Deploy Linksi in your region", "Manage local provider network", "Access real-time community data", "Drive measurable outcomes"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 flex-shrink-0" />
                    <p className="font-display text-xs text-slate-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is a Host */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <ScrollReveal>
              <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-3">Who Hosts Linksi</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-800 mb-5">Government Agencies</h2>
              <p className="text-slate-500 leading-relaxed mb-4">
                Hosts are local and state government agencies — and anchor institutions like hospitals and universities — that deploy the Linksi platform across their region. They manage the local provider network and ensure residents can find and access services at scale.
              </p>
              <p className="text-slate-500 leading-relaxed">
                By hosting Linksi, these organizations gain real-time visibility into community needs, track referral outcomes, and coordinate cross-sector response — all in one platform.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="card-light p-8 border-l-4 border-brand-blue">
                <span className="font-mono text-xs text-slate-400">01</span>
                <h3 className="font-display text-xl font-bold text-slate-800 mt-2 mb-3">Government Agencies</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Local and state agencies managing public assistance and social programs — deploying Linksi to coordinate community-wide service delivery.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Linksi access */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-3">Access Linksi</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Find Help Through Linksi</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Know Linksi by name? Access the platform directly to find services, connect with providers, or manage your community network.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto card-light p-10 text-center border border-slate-200 rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-800 mb-3">Open Linksi</h3>
              <p className="text-slate-500 mb-8">
                The Linksi platform opens in a new tab — connecting Clay County residents to local services in real time.
              </p>
              <a
                href="https://linksy.impact-works.us"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Go to Linksi <span>&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hosting sites directory */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-10">
            <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-3">Directory</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Hosting Sites</h2>
            <p className="text-slate-500 max-w-2xl">
              Organizations currently hosting the Linksi platform in their region. This directory grows as new hosts come online.
            </p>
          </ScrollReveal>

          {hostingSites.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hostingSites.map((site, i) => (
                <ScrollReveal key={site.name} delay={i * 0.08}>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-light p-6 h-full border-l-4 border-brand-blue group flex flex-col gap-2 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-display text-lg font-bold text-slate-800 group-hover:text-brand-orange transition-colors">{site.name}</h3>
                    <p className="text-sm text-slate-400">{site.location}</p>
                    <span className="text-xs text-brand-blue mt-auto group-hover:text-brand-orange transition-colors">Visit site &rarr;</span>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal delay={0.1}>
              <div className="card-light p-10 text-center border border-dashed border-slate-200 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <p className="font-display font-semibold text-slate-700 mb-2">Directory Coming Soon</p>
                <p className="text-sm text-slate-400">Hosting sites are being confirmed and will appear here as they come online.</p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>
    </div>
  );
}
