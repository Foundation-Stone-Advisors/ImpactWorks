"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import DarkBackdrop from "@/components/DarkBackdrop";

const PORTAL = "https://impactclayportal.powerappsportals.com";

const pathways = [
  {
    eyebrow: "Existing Members",
    eyebrowColor: "text-brand-blue",
    title: "Sign In",
    description:
      "Already have a Linksi account? Sign in to manage referrals, update your nonprofit profile, and stay connected with the network.",
    cta: "Sign In to Portal",
    href: `${PORTAL}/SignIn?returnUrl=%2F`,
    external: true,
    borderAccent: "border-l-brand-blue",
    iconColor: "text-brand-blue",
    iconBg: "bg-brand-blue/10 border border-brand-blue/20",
    btnClass: "btn-outline-dark",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
      </svg>
    ),
  },
  {
    eyebrow: "Nonprofits",
    eyebrowColor: "text-brand-green",
    title: "Register Your Organization",
    description:
      "Add your nonprofit to the Clay County directory. Connect with providers, expand your reach, and coordinate services more effectively.",
    cta: "Start Registration",
    href: `${PORTAL}/nonprofit-directory/Directory-Companies`,
    external: true,
    borderAccent: "border-l-brand-green",
    iconColor: "text-brand-green",
    iconBg: "bg-brand-green/10 border border-brand-green/20",
    btnClass: "btn-primary",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    eyebrow: "Invited Users",
    eyebrowColor: "text-brand-orange",
    title: "Redeem an Invitation",
    description:
      "Received an invitation from Impact Works? Create your account here to activate your access and join the Linksi platform.",
    cta: "Redeem Invitation",
    href: `${PORTAL}/Register?returnUrl=%2F`,
    external: true,
    borderAccent: "border-l-brand-orange",
    iconColor: "text-brand-orange",
    iconBg: "bg-brand-orange/10 border border-brand-orange/20",
    btnClass: "btn-primary",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    eyebrow: "New to Impact Works?",
    eyebrowColor: "text-slate-400",
    title: "Request Access",
    description:
      "Not sure where to start? Reach out to our team and we’ll help you find the right pathway to get involved with the community.",
    cta: "Contact Us",
    href: "/contact",
    external: false,
    borderAccent: "border-l-slate-300",
    iconColor: "text-slate-400",
    iconBg: "bg-slate-100 border border-slate-200",
    btnClass: "btn-outline-dark",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

export default function Join() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden text-white">
        <DarkBackdrop variant="hero-symmetric" />
        <div className="relative z-10 max-w-site mx-auto px-6 py-32 md:py-40 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="eyebrow mb-5"
            >
              Get Started
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="heading-hero text-white"
            >
              Join the <span className="gradient-text-orange">Network</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="body-text text-slate-300 mt-6 max-w-xl"
            >
              Choose the pathway that fits your role — whether you&apos;re signing in,
              registering your organization, or reaching out for the first time.
            </motion.p>
          </div>

          {/* Decorative access card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 hidden md:flex justify-center"
          >
            <div className="relative w-full max-w-[300px]">
              <div className="bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-2xl p-6 shadow-2xl space-y-3">
                <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                  <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-[0.18em]">
                    Linksi Portal
                  </span>
                </div>
                {[
                  { label: "Sign In", color: "#2E8BC0" },
                  { label: "Register Nonprofit", color: "#3DAA5C" },
                  { label: "Redeem Invitation", color: "#E8751A" },
                  { label: "Request Access", color: "#94A3C4" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-display text-sm text-white/80">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-orange/20 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pathway cards */}
      <section className="section-pad section-light">
        <div className="max-w-site mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pathways.map((p, i) => {
              const Tag = p.external ? "a" : Link;
              const externalProps = p.external
                ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: p.href };

              return (
                <ScrollReveal key={p.title} delay={i * 0.08}>
                  <div
                    className={`card-light p-8 border-l-4 ${p.borderAccent} h-full flex flex-col`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${p.iconBg} ${p.iconColor}`}
                    >
                      {p.icon}
                    </div>

                    {/* Eyebrow */}
                    <p className={`font-mono text-xs uppercase tracking-[0.2em] mb-2 ${p.eyebrowColor}`}>
                      {p.eyebrow}
                    </p>

                    {/* Title */}
                    <h2 className="font-display text-xl font-bold text-slate-800 mb-3">
                      {p.title}
                    </h2>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {p.description}
                    </p>

                    {/* CTA */}
                    <Tag
                      {...externalProps}
                      className={`${p.btnClass} !py-3 !px-6 !text-sm !rounded-lg self-start`}
                    >
                      {p.cta}
                      {p.external ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      ) : (
                        <span>&rarr;</span>
                      )}
                    </Tag>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
