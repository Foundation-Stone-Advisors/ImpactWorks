"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

const providerBenefits = [
  {
    title: "Instant Visibility to Residents",
    desc: "Your organization and services appear in Linksi search results for every Clay County resident looking for help — at no cost and with no advertising required.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />,
  },
  {
    title: "Referral Activity Tracking",
    desc: "See how many people viewed your organization's listing and followed through to contact you — so you can understand where residents are coming from.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
  },
  {
    title: "Closed-Loop Referral Tracking",
    desc: "Linksi tracks whether referrals you send result in a successful connection. Know which of your outgoing referrals actually help people — and which slip through the cracks.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: "Community Demand Reports",
    desc: "Access anonymized data showing which service categories residents are searching for most — helping you plan capacity, identify gaps, and make the case for funding.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  },
  {
    title: "Easy Profile Management",
    desc: "Update your services, hours, eligibility requirements, and contact information anytime through your provider dashboard — no IT help needed.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />,
  },
  {
    title: "Free to Participate",
    desc: "No subscription fees, no per-referral charges, no hidden costs. Linksi is free for service providers — always. Focus on serving people, not managing software costs.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
];

const providerTools = [
  {
    name: "Service Listing Manager",
    desc: "Add, edit, and deactivate your services — control exactly what residents see.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />,
  },
  {
    name: "Referral Activity Feed",
    desc: "View incoming and outgoing referrals with status tracking and timestamps.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />,
  },
  {
    name: "Closed-Loop Reports",
    desc: "Track which referrals resulted in connections and flag those that didn't.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    name: "Community Demand Data",
    desc: "Anonymized reports on what your community is searching for, updated monthly.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  },
];

const categories = [
  { title: "Nonprofits", desc: "Community organizations providing direct services to residents in need.", color: "border-brand-orange" },
  { title: "Healthcare Systems", desc: "Hospitals and clinics coordinating care access for underserved populations.", color: "border-brand-green" },
  { title: "Faith Organizations", desc: "Churches and faith-based groups offering support and outreach programs.", color: "border-brand-gold" },
  { title: "Community Initiatives", desc: "Grassroots programs and local efforts building stronger neighborhoods.", color: "border-brand-blue" },
  { title: "Educational Institutions", desc: "Schools and colleges connecting students and families with wraparound support services.", color: "border-brand-green" },
];

export default function Providers() {
  return (
    <div>
      <section className="relative min-h-[55vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Service Providers</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white">
              Community <span className="gradient-text-orange">Providers</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">
              Organizations delivering essential services to Clay County residents through the Linksi network.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 hidden md:flex flex-col gap-3"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-1">Provider Portal</p>
            <a
              href="https://linksi.impact-works.us"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white/[0.07] backdrop-blur-md border border-white/12 rounded-xl px-5 py-4 hover:bg-white/[0.13] hover:border-white/20 transition-all duration-200 group"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 mb-0.5">Existing Provider</p>
                <p className="font-display text-base font-bold text-white">Sign In</p>
              </div>
              <span className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
            </a>
            <a
              href="https://linksi.impact-works.us/join/provider"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-brand-orange/90 backdrop-blur-md border border-brand-orange rounded-xl px-5 py-4 hover:bg-brand-orange transition-all duration-200 group"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/70 mb-0.5">New Organization</p>
                <p className="font-display text-base font-bold text-white">Register</p>
              </div>
              <span className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What You Get as a Provider — benefits & tools */}
      <section className="section-pad bg-white border-b border-slate-100">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-10">
            <p className="eyebrow mb-3">Provider Benefits</p>
            <h2 className="heading-section text-slate-800">
              What You Get as a <span className="gradient-text-orange">Linksi Provider</span>
            </h2>
            <p className="body-text-muted mt-3 max-w-2xl">
              Joining Linksi puts your services in front of the people who need them most — and gives you the reporting tools to measure and grow your impact.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {providerBenefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.07}>
                <div className="card-light p-6 h-full flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {b.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-800 mb-2">{b.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Tools panel */}
          <ScrollReveal>
            <div className="bg-brand-orange/5 border border-brand-orange/15 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-brand-orange/15 border border-brand-orange/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange font-semibold">Your Provider Dashboard</p>
                  <p className="font-display text-sm font-semibold text-slate-700">Tools available once your organization is registered</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {providerTools.map((tool) => (
                  <div key={tool.name} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-brand-orange/10 shadow-sm">
                    <div className="w-7 h-7 rounded-md bg-brand-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {tool.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-slate-700">{tool.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Provider Organizations */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-12">
            <p className="font-mono text-xs text-brand-orange uppercase tracking-[0.2em] mb-3">Who We Work With</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-800">Provider Organizations</h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              These organizations connect Clay County residents to the services they need — all through the Linksi platform.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-brand-orange">
        <div className="max-w-site mx-auto text-center">
          <ScrollReveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-200 mb-4">Join the Network</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-5">
              Ready to List Your Organization<br className="hidden md:block" /> on Linksi?
            </h2>
            <p className="text-orange-100 max-w-xl mx-auto mb-8">
              Registration is free. Your services go live on the Linksi platform immediately — connecting you to Clay County residents searching for exactly what you offer.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://linksi.impact-works.us/join/provider"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-brand-orange font-semibold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors"
              >
                Register Your Organization <span>&rarr;</span>
              </a>
              <a
                href="https://linksi.impact-works.us"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                Existing Provider Sign In
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
