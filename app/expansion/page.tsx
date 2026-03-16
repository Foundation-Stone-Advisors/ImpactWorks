"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const phases = [
  {
    label: "Clay County",
    status: "Active",
    desc: "Our foundation — where Impact Works began. Linksy is live and connecting residents to critical services across Clay County.",
    color: "bg-teal-accent",
    textColor: "text-teal-accent",
    stats: [
      { value: "1,500+", label: "Residents Connected" },
      { value: "50+", label: "Partner Orgs" },
    ],
  },
  {
    label: "Northeast Florida",
    status: "Next Phase",
    desc: "Expanding to Duval, St. Johns, Nassau, and Baker counties — building regional partnerships to serve a broader population.",
    color: "bg-impact-blue",
    textColor: "text-impact-blue",
    stats: [
      { value: "1.6M", label: "Regional Population" },
      { value: "6", label: "Counties Targeted" },
    ],
  },
  {
    label: "Statewide — Florida",
    status: "Future Vision",
    desc: "A connected network of community service platforms across the entire state of Florida, ensuring no resident is left without access.",
    color: "bg-deep-blue",
    textColor: "text-deep-blue",
    stats: [
      { value: "22M+", label: "Florida Residents" },
      { value: "67", label: "Counties" },
    ],
  },
];

export default function Expansion() {
  const [activePhase, setActivePhase] = useState(0);
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMapVisible(true);
      },
      { threshold: 0.3 }
    );
    if (mapRef.current) observer.observe(mapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-blue to-impact-blue text-white section-padding">
        <div className="max-w-site mx-auto text-center">
          <p className="text-sm font-semibold text-teal-accent uppercase tracking-wider mb-4">
            Growth Strategy
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Expanding Community Connections
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From Clay County to all of Florida — scaling technology that
            connects people with the services they need.
          </p>
        </div>
      </section>

      {/* Florida Map Section */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto">
          <div ref={mapRef} className="grid md:grid-cols-2 gap-12 items-center">
            {/* SVG Map */}
            <div className={`transition-all duration-1000 ${mapVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <svg viewBox="0 0 400 480" className="w-full max-w-md mx-auto" aria-label="Florida expansion map showing Clay County, Northeast Florida, and statewide growth">
                {/* Florida state outline (simplified) */}
                <path
                  d="M120 20 L280 20 L300 40 L310 80 L320 120 L340 140 L360 160 L370 200 L370 240 L360 280 L340 320 L320 340 L300 360 L280 380 L260 400 L240 420 L220 440 L200 460 L180 450 L160 430 L140 400 L120 360 L100 320 L80 280 L70 240 L60 200 L60 160 L70 120 L80 80 L100 40 Z"
                  fill={activePhase === 2 ? "#1E3A8A" : "#E2E8F0"}
                  stroke="#94A3B8"
                  strokeWidth="2"
                  className="transition-all duration-700"
                  opacity={activePhase === 2 ? 0.3 : 0.5}
                />

                {/* Northeast Florida region */}
                <path
                  d="M240 60 L310 60 L320 80 L330 110 L340 140 L330 160 L310 170 L280 170 L260 160 L240 140 L230 110 L230 80 Z"
                  fill={activePhase >= 1 ? "#1F4ED8" : "#CBD5E1"}
                  stroke={activePhase >= 1 ? "#1F4ED8" : "#94A3B8"}
                  strokeWidth="2"
                  className="transition-all duration-700"
                  opacity={activePhase >= 1 ? 0.5 : 0.3}
                />

                {/* Clay County (highlighted) */}
                <path
                  d="M255 105 L295 100 L305 120 L300 145 L275 155 L255 145 L245 125 Z"
                  fill="#14B8A6"
                  stroke="#0D9488"
                  strokeWidth="2.5"
                  className="transition-all duration-700"
                  opacity={activePhase >= 0 ? 1 : 0.3}
                />

                {/* Clay County label */}
                <g className={`transition-opacity duration-500 ${activePhase === 0 ? "opacity-100" : "opacity-60"}`}>
                  <line x1="275" y1="130" x2="180" y2="180" stroke="#14B8A6" strokeWidth="1.5" strokeDasharray="4 3" />
                  <rect x="100" y="168" width="90" height="28" rx="6" fill="#14B8A6" />
                  <text x="145" y="187" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Clay County</text>
                </g>

                {/* NE Florida label */}
                <g className={`transition-opacity duration-500 ${activePhase === 1 ? "opacity-100" : "opacity-40"}`}>
                  <line x1="300" y1="115" x2="350" y2="90" stroke="#1F4ED8" strokeWidth="1.5" strokeDasharray="4 3" />
                  <rect x="310" y="72" width="80" height="28" rx="6" fill="#1F4ED8" />
                  <text x="350" y="91" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">NE Florida</text>
                </g>

                {/* Statewide label */}
                <g className={`transition-opacity duration-500 ${activePhase === 2 ? "opacity-100" : "opacity-30"}`}>
                  <rect x="90" y="300" width="80" height="28" rx="6" fill="#1E3A8A" />
                  <text x="130" y="319" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Statewide</text>
                </g>

                {/* Pulse on Clay County */}
                <circle cx="275" cy="130" r="8" fill="#14B8A6" opacity="0.6">
                  <animate attributeName="r" values="6;14;6" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="275" cy="130" r="4" fill="#14B8A6" />
              </svg>
            </div>

            {/* Phase selector */}
            <div className={`space-y-4 transition-all duration-1000 delay-300 ${mapVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              {phases.map((phase, i) => (
                <button
                  key={phase.label}
                  onClick={() => setActivePhase(i)}
                  className={`w-full text-left rounded-2xl p-6 border-2 transition-all duration-300 ${
                    activePhase === i
                      ? `border-current ${phase.textColor} bg-white shadow-lg`
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`inline-block w-3 h-3 rounded-full ${phase.color}`} />
                    <span className="text-lg font-bold text-text-dark">
                      {phase.label}
                    </span>
                    <span className={`text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      i === 0 ? "bg-teal-accent/10 text-teal-accent"
                      : i === 1 ? "bg-impact-blue/10 text-impact-blue"
                      : "bg-deep-blue/10 text-deep-blue"
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {phase.desc}
                  </p>
                  {activePhase === i && (
                    <div className="flex gap-6 pt-2 border-t border-gray-100">
                      {phase.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className={`text-xl font-bold font-data ${phase.textColor}`}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Roadmap */}
      <section className="section-padding bg-white">
        <div className="max-w-site mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Expansion Roadmap
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            A phased approach to scaling impact across the state.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {phases.map((phase, i) => (
              <div key={phase.label} className="flex items-center gap-4">
                <div className={`rounded-2xl px-8 py-6 ${phase.color} text-white font-semibold text-lg min-w-[200px]`}>
                  <p className="font-bold">{phase.label}</p>
                  <p className="text-sm opacity-80 mt-1">{phase.status}</p>
                </div>
                {i < 2 && (
                  <svg
                    className="w-8 h-8 text-impact-blue hidden md:block flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-deep-blue to-impact-blue text-white">
        <div className="max-w-site mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Us Grow
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Partner with Impact Works to bring connected community services to
            your region.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-500 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
