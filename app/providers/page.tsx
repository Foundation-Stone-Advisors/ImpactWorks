"use client";

import ScrollReveal from "@/components/ScrollReveal";

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
      <section className="py-20 md:py-28 px-6 bg-gray-50">
        <ScrollReveal>
          <div className="max-w-site mx-auto">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-brand-orange via-brand-orange-light to-brand-gold">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-[400px] h-[400px] border-[3px] border-white/10 rounded-full" />
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] border-[2px] border-white/5 rounded-full" />
              </div>
              <div className="relative z-10 grid md:grid-cols-12 gap-8 items-center px-8 md:pl-16 md:pr-8 py-12 md:py-16">
                <div className="md:col-span-5">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 mb-3">Linksi Platform</p>
                  <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">Provider Portal</h2>
                  <p className="text-white/85 leading-relaxed">
                    Already part of the network? Sign in to your Linksi dashboard. New to Impact Works? Register your organization to start connecting residents with your services.
                  </p>
                </div>
                <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
                  <a
                    href="https://linksi.impact-works.us"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Existing Provider</span>
                    <span className="font-display text-xl font-extrabold text-white">Sign In</span>
                    <span className="text-sm text-white/75 leading-relaxed">Access your Linksi dashboard and manage your organization&apos;s services.</span>
                    <span className="mt-2 text-white font-bold group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </a>
                  <a
                    href="https://linksi.impact-works.us/join/provider"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-2 bg-white rounded-2xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange/70">New Organization</span>
                    <span className="font-display text-xl font-extrabold text-brand-orange">Register</span>
                    <span className="text-sm text-slate-600 leading-relaxed">Join the Linksi network and connect your organization with residents in need.</span>
                    <span className="mt-2 text-brand-orange font-bold group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

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
    </div>
  );
}
