"use client";

import { motion } from "framer-motion";

export default function ArchitectureDiagram() {
  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* INPUT LAYER */}
      <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-xl mx-auto">
        {[
          { label: "Residents &", sub: "Service Seekers" },
          { label: "Service Providers", sub: "& Organizations" },
        ].map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="bg-brand-blue rounded-2xl px-5 py-5 md:px-7 md:py-5 text-center text-white shadow-lg">
              <p className="font-display font-bold text-sm md:text-base">{node.label}</p>
              <p className="text-white/70 text-xs md:text-sm mt-0.5">{node.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* INPUT ARROWS — all SVG, labels inside SVG with bg rects */}
      <svg viewBox="0 0 500 90" className="w-full max-w-xl mx-auto block" style={{ height: "90px" }} preserveAspectRatio="xMidYMid meet">
        {/* Dashed lines */}
        <line x1="125" y1="2" x2="250" y2="88" stroke="#2E8BC0" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
        <line x1="375" y1="2" x2="250" y2="88" stroke="#2E8BC0" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
        {/* Particles — drawn first so they render behind labels */}
        <circle r="3" fill="#2E8BC0"><animateMotion dur="2.5s" repeatCount="indefinite" path="M125,2 L250,88" /><animate attributeName="opacity" values="0;0.7;0" dur="2.5s" repeatCount="indefinite" /></circle>
        <circle r="3" fill="#2E8BC0"><animateMotion dur="3s" repeatCount="indefinite" path="M375,2 L250,88" /><animate attributeName="opacity" values="0;0.7;0" dur="3s" repeatCount="indefinite" /></circle>
        {/* Labels — drawn after so they sit on top */}
        <rect x="148" y="33" width="62" height="22" rx="11" fill="white" stroke="#CBD5E1" strokeWidth="1" />
        <text x="179" y="48" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily="sans-serif">requests</text>
        <rect x="298" y="33" width="56" height="22" rx="11" fill="white" stroke="#CBD5E1" strokeWidth="1" />
        <text x="326" y="48" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily="sans-serif">listings</text>
      </svg>

      {/* LINKSI AI HUB */}
      <motion.div
        className="max-w-[280px] mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative">
          <div className="absolute -inset-3 bg-brand-green/10 rounded-3xl blur-md" />
          <div className="relative bg-gradient-to-br from-brand-green to-emerald-600 rounded-2xl px-8 py-6 text-center text-white shadow-2xl border-2 border-white/20">
            <p className="font-display font-extrabold text-xl md:text-2xl">Linksi AI</p>
            <p className="text-white/75 text-sm mt-1">Intelligent Matching Engine</p>
          </div>
        </div>
      </motion.div>

      {/* OUTPUT ARROWS — all SVG, labels inside SVG */}
      <svg viewBox="0 0 600 90" className="w-full max-w-2xl mx-auto block" style={{ height: "90px" }} preserveAspectRatio="xMidYMid meet">
        {/* Dashed lines */}
        <line x1="300" y1="2" x2="100" y2="88" stroke="#E8751A" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
        <line x1="300" y1="2" x2="300" y2="88" stroke="#3DAA5C" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
        <line x1="300" y1="2" x2="500" y2="88" stroke="#2E8BC0" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.35" />
        {/* Particles — behind labels */}
        <circle r="3" fill="#E8751A"><animateMotion dur="2.5s" repeatCount="indefinite" path="M300,2 L100,88" /><animate attributeName="opacity" values="0;0.7;0" dur="2.5s" repeatCount="indefinite" /></circle>
        <circle r="3" fill="#3DAA5C"><animateMotion dur="2.2s" repeatCount="indefinite" path="M300,2 L300,88" /><animate attributeName="opacity" values="0;0.7;0" dur="2.2s" repeatCount="indefinite" /></circle>
        <circle r="3" fill="#2E8BC0"><animateMotion dur="2.8s" repeatCount="indefinite" path="M300,2 L500,88" /><animate attributeName="opacity" values="0;0.7;0" dur="2.8s" repeatCount="indefinite" /></circle>
        {/* Labels — on top */}
        <rect x="158" y="37" width="64" height="22" rx="11" fill="white" stroke="#CBD5E1" strokeWidth="1" />
        <text x="190" y="52" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily="sans-serif">matches</text>
        <rect x="271" y="37" width="58" height="22" rx="11" fill="white" stroke="#CBD5E1" strokeWidth="1" />
        <text x="300" y="52" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily="sans-serif">queries</text>
        <rect x="388" y="37" width="42" height="22" rx="11" fill="white" stroke="#CBD5E1" strokeWidth="1" />
        <text x="409" y="52" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500" fontFamily="sans-serif">data</text>
      </svg>

      {/* OUTPUT LAYER */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
        {[
          { label: "Referral", sub: "Management", borderClass: "border-brand-orange" },
          { label: "Services", sub: "Database", borderClass: "border-brand-green" },
          { label: "Analytics &", sub: "Insights", borderClass: "border-brand-blue" },
        ].map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
          >
            <div className={`bg-white rounded-2xl border-2 ${node.borderClass} px-3 py-5 md:px-5 md:py-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
              <p className="font-display font-bold text-sm md:text-base text-slate-800">{node.label}</p>
              <p className="text-slate-400 text-xs md:text-sm mt-0.5">{node.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
