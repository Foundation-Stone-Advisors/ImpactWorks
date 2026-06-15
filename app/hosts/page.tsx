"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

// Update this list as hosting sites are confirmed — each entry appears as a card in the directory.
const hostingSites: { name: string; location: string; url: string }[] = [
  // { name: "Example County Agency", location: "Clay County, FL", url: "https://example.gov" },
];

const whyHost = [
  {
    title: "Become the Front Door to Community Support",
    desc: "People already trust your organization. Hosting Linksi allows them to begin their search for help right where they are — without leaving your website or facility. Instead of sending visitors elsewhere, you become the starting point for solutions.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    ),
  },
  {
    title: "Reduce Misrouted Requests",
    desc: "Your staff shouldn't have to act as a community switchboard. Linksi helps direct people to the right services before they call, email, or walk through your doors — reducing interruptions and improving efficiency.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    ),
  },
  {
    title: "Extend Your Impact",
    desc: "Support individuals beyond the services you directly provide. Linksi connects people with resources across your entire community, allowing your organization to create greater impact without increasing workload.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: "Gain Meaningful Community Insights",
    desc: "As a Linksi Host, you'll receive anonymized reporting to better understand community needs — most requested service categories, emerging trends, resource gaps, and utilization patterns. These insights strengthen strategic planning, board reporting, and grant applications.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    ),
  },
  {
    title: "No Data Management Required",
    desc: "Linksi operates as a shared community platform. Service providers maintain their own information and referrals, while Linksi manages the technology infrastructure. You don't collect personal information, maintain databases, or administer the system.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
  },
  {
    title: "Strengthen Community Leadership",
    desc: "Hosting Linksi demonstrates your organization's commitment to collaboration, accessibility, and community impact. It positions you as a trusted connector helping residents navigate available resources more effectively.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: "Geographic Relevance",
    desc: "Linksi already operates at the county level. Zip code and geographic filtering are coming, automatically increasing accuracy without any work on your end.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    title: "Credibility and Visibility",
    desc: "Hosting signals that your organization is connected, neutral, and aligned with broader community impact infrastructure. Public recognition as a community connector comes standard.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
];

const howOptions = [
  {
    num: "01",
    title: "Website Integration",
    desc: "Embed Linksi directly into your website, allowing visitors to search for local services without leaving your online presence.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    ),
  },
  {
    num: "02",
    title: "QR Code Access",
    desc: "Display a Linksi QR code in your office, lobby, waiting room, classroom, community center, or event space for instant access from any smartphone.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
    ),
  },
  {
    num: "03",
    title: "Multiple Access Points",
    desc: "Combine website integration and physical access points to maximize community reach.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    ),
  },
];

const sectors = [
  {
    name: "Nonprofits",
    desc: "Your website becomes a place where people find help — even if it is not with you.",
    color: "border-brand-blue",
  },
  {
    name: "Government Agencies",
    desc: "One consistent access point for residents without building new technology infrastructure.",
    color: "border-brand-orange",
  },
  {
    name: "Hospitals & Health Systems",
    desc: "Discharge planning and community health teams gain a reliable referral surface.",
    color: "border-brand-green",
  },
  {
    name: "United Ways & Foundations",
    desc: "Guide people to services across the region, not just one organization.",
    color: "border-brand-gold",
  },
  {
    name: "Schools, Colleges & Universities",
    desc: "Connect students, families, and members to support quietly and immediately.",
    color: "border-brand-blue",
  },
  {
    name: "Faith Communities",
    desc: "Connect congregation members and neighbors to support quietly and immediately.",
    color: "border-brand-orange",
  },
  {
    name: "Employers",
    desc: "Support employees by connecting them to help without handling sensitive data.",
    color: "border-brand-green",
  },
];

export default function Hosts() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="eyebrow mb-5">Hosting Organizations</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="heading-hero text-white">
              Help Begins <span className="gradient-text-orange">With You</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="body-text text-slate-300 mt-6 max-w-xl">
              Every day, people turn to organizations they already trust when they need help. By becoming a Linksi Host, you transform your website, office, or community space into a trusted gateway to verified local services.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="font-mono text-xs text-slate-400 mt-4 tracking-wide">
              No additional staff.&nbsp;&nbsp;No complicated systems.&nbsp;&nbsp;No data management.
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
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blue font-semibold">Become a Host</span>
              </div>
              <div className="space-y-3">
                {["Serve your community better", "Reduce misrouted requests", "Gain anonymized insights", "No data management required", "Strengthen community leadership"].map((item) => (
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

      {/* Find Help Now — CTA band */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="max-w-site mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-slate-600 text-lg font-display font-semibold text-center sm:text-left">
            Looking for community resources?<br className="hidden sm:block" /> Residents can find help directly through Linksi.
          </p>
          <a
            href="https://linksi.impact-works.us/find-help"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 hover:opacity-90 transition-opacity"
            aria-label="Find Help Now with Linksi"
          >
            <Image
              src="/images/find-help-now-linksi.png"
              alt="Find Help Now with Linksi"
              width={200}
              height={200}
              className="h-36 w-auto"
            />
          </a>
        </div>
      </section>

      {/* What is Linksi */}
      <section className="section-pad bg-brand-blue">
        <div className="max-w-site mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow text-blue-200 mb-4">What is Linksi?</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-5">
              An AI-Powered Community Resource Platform
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed mb-3">
              Linksi connects individuals to verified health and human services available in their county. With simple, plain-language search, anyone can find the support they need — without creating an account or navigating complex directories.
            </p>
            <p className="font-mono text-xs text-blue-200 tracking-widest uppercase">
              Free for community members.&nbsp;&nbsp;Free for service providers.&nbsp;&nbsp;Built for communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What Hosting Means */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-10 text-center">
            <p className="eyebrow mb-4">What Hosting Means</p>
            <h2 className="heading-section text-slate-800">
              Your Organization Becomes the <span className="gradient-text-blue">Starting Point</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
              {[
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />, text: "Linksi embedded on your website or accessible via QR code" },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />, text: "Visitors find help without leaving your space" },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />, text: "Anonymized data on what your community needs" },
                { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />, text: "Public recognition as a community connector" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Host Linksi */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-12">
            <p className="eyebrow mb-4">Why Host Linksi?</p>
            <h2 className="heading-section text-slate-800">
              Six Reasons to <span className="gradient-text-blue">Get Started</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyHost.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="card-light p-6 h-full flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Hosting Works */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-12">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="heading-section text-slate-800">
              Three Ways to <span className="gradient-text-orange">Host Linksi</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {howOptions.map((opt, i) => (
              <ScrollReveal key={opt.title} delay={i * 0.1}>
                <div className="card-light p-8 h-full border-t-4 border-brand-orange flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-slate-400">{opt.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {opt.icon}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-800 mb-2">{opt.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{opt.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Designed for Every Sector */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-12">
            <p className="eyebrow mb-4">Who Can Host</p>
            <h2 className="heading-section text-slate-800">
              Designed for <span className="gradient-text-blue">Every Sector</span>
            </h2>
            <p className="body-text-muted mt-3 max-w-2xl">
              Any organization that serves the community — in any sector — can become a Linksi Host.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map((sector, i) => (
              <ScrollReveal key={sector.name} delay={i * 0.07}>
                <div className={`card-light p-6 h-full border-l-4 ${sector.color}`}>
                  <h3 className="font-display text-base font-bold text-slate-800 mb-2">{sector.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{sector.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Linksi access — provider/host/admin */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="text-center mb-10">
            <p className="eyebrow mb-3">Provider &amp; Admin Access</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Linksi Provider, Host &amp; Admin Login</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Are you a registered Linksi provider, host organization, or system administrator? Log in to manage your organization's profile, referrals, and community network.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto card-light p-10 text-center border border-slate-200 rounded-2xl shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-800 mb-3">Provider / Host / Admin Login</h3>
              <p className="text-slate-500 mb-8">
                Sign in to your Linksi account to manage referrals, update your organization's services, and access your community dashboard.
              </p>
              <a
                href="https://linksi.impact-works.us/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Sign In to Linksi <span>&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Hosting sites directory */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <ScrollReveal className="mb-10">
            <p className="eyebrow mb-3">Directory</p>
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

      {/* CTA */}
      <section className="section-pad bg-brand-blue">
        <div className="max-w-site mx-auto text-center">
          <ScrollReveal>
            <p className="eyebrow text-blue-200 mb-4">Ready to Host?</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-5">
              Host Linksi. Strengthen Connections.<br className="hidden md:block" /> Increase Community Impact.
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto mb-8">
              Join the growing network of organizations helping connect people to verified community resources. Together, we can make it easier for every resident to find the help they need — when they need it most.
            </p>
            <a
              href="https://linksi.impact-works.us/join/host"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-brand-blue font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Become a Host <span>&rarr;</span>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
