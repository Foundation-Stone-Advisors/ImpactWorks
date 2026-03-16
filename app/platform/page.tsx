import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Instant Referrals",
    desc: "No waiting or paperwork.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Anonymous Access",
    desc: "Search for services privately.",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
  {
    title: "Real-Time Data",
    desc: "Up-to-date service availability.",
    icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  },
  {
    title: "Provider Collaboration",
    desc: "Organizations coordinate more easily.",
    icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
  },
  {
    title: "Analytics",
    desc: "Track service needs and impact.",
    icon: "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z",
  },
  {
    title: "Community Directory",
    desc: "Centralized database of services.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
];

export default function Platform() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-blue to-impact-blue text-white section-padding">
        <div className="max-w-site mx-auto text-center">
          <p className="text-sm font-semibold text-teal-accent uppercase tracking-wider mb-4">
            Linksy Platform
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            AI-Powered Connections Between People and Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Linksy uses intelligent matching to connect residents with the help
            they need — instantly and privately.
          </p>
          <Link
            href="#how-it-works"
            className="inline-block bg-teal-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-500 transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </section>

      {/* Product Screenshot */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-3xl mx-auto">
            <div className="bg-deep-blue/5 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="p-8 md:p-12">
              <div className="space-y-6">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-impact-blue text-white rounded-2xl rounded-br-md px-6 py-3 max-w-sm">
                    I need help with housing.
                  </div>
                </div>
                {/* Bot response */}
                <div className="flex justify-start">
                  <div className="bg-light-bg text-text-dark rounded-2xl rounded-bl-md px-6 py-4 max-w-md">
                    <p className="font-medium mb-2">
                      Here are organizations that can help:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-accent rounded-full" />
                        Clay County Housing Authority
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-accent rounded-full" />
                        Safe Shelter Alliance
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-accent rounded-full" />
                        Habitat for Humanity — NE Florida
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="max-w-site mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            A smarter path from need to help.
          </p>

          <Image
            src="/images/linksyprocessmap.png"
            alt="Linksy 3-step process: Resident requests help, Linksy matches services, Organization receives referral"
            width={960}
            height={320}
            className="w-full max-w-4xl mx-auto mb-12"
          />
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:border-impact-blue/20 hover:shadow-md transition-all"
              >
                <svg
                  className="w-8 h-8 text-impact-blue mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
                <h3 className="text-lg font-bold text-text-dark mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section-padding bg-white">
        <div className="max-w-site mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Platform Architecture
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            How data flows through the Linksy ecosystem.
          </p>

          <div className="max-w-4xl mx-auto">
            <svg viewBox="0 0 800 500" className="w-full" aria-label="Linksy platform architecture diagram">
              <defs>
                <linearGradient id="archGrad1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1F4ED8" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
                <linearGradient id="archGrad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#0D9488" />
                </linearGradient>
                <filter id="archShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.1" />
                </filter>
              </defs>

              {/* Connection lines with animation */}
              <line x1="200" y1="120" x2="400" y2="220" stroke="#1F4ED8" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="6 4">
                <animate attributeName="strokeDashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="600" y1="120" x2="400" y2="220" stroke="#1F4ED8" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="6 4">
                <animate attributeName="strokeDashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="280" x2="200" y2="380" stroke="#14B8A6" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="6 4">
                <animate attributeName="strokeDashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="280" x2="400" y2="380" stroke="#14B8A6" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="6 4">
                <animate attributeName="strokeDashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="400" y1="280" x2="600" y2="380" stroke="#14B8A6" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="6 4">
                <animate attributeName="strokeDashoffset" values="0;-20" dur="2s" repeatCount="indefinite" />
              </line>

              {/* Top: Residents node */}
              <g filter="url(#archShadow)">
                <rect x="100" y="50" width="200" height="70" rx="16" fill="url(#archGrad1)" />
                <text x="200" y="82" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">Residents &amp;</text>
                <text x="200" y="100" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">Service Seekers</text>
                {/* Person icon */}
                <circle cx="145" cy="85" r="8" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <path d="M137 100a8 8 0 0116 0" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
              </g>

              {/* Top: Providers node */}
              <g filter="url(#archShadow)">
                <rect x="500" y="50" width="200" height="70" rx="16" fill="url(#archGrad1)" />
                <text x="600" y="82" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">Service Providers</text>
                <text x="600" y="100" textAnchor="middle" fill="white" fontSize="13" fontWeight="600">&amp; Organizations</text>
                {/* Building icon */}
                <rect x="545" y="72" width="12" height="18" rx="2" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="549" y1="78" x2="549" y2="78.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="553" y1="78" x2="553" y2="78.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="549" y1="83" x2="549" y2="83.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <line x1="553" y1="83" x2="553" y2="83.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
              </g>

              {/* Center: Linksy AI hub */}
              <g filter="url(#archShadow)">
                <rect x="300" y="210" width="200" height="80" rx="20" fill="url(#archGrad2)" />
                <text x="400" y="245" textAnchor="middle" fill="white" fontSize="16" fontWeight="700">Linksy AI</text>
                <text x="400" y="268" textAnchor="middle" fill="white" fontSize="11" fontWeight="400" opacity="0.8">Intelligent Matching Engine</text>
                {/* Pulse ring */}
                <rect x="300" y="210" width="200" height="80" rx="20" fill="none" stroke="#14B8A6" strokeWidth="2">
                  <animate attributeName="strokeOpacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="strokeWidth" values="2;4;2" dur="3s" repeatCount="indefinite" />
                </rect>
              </g>

              {/* Bottom: Output nodes */}
              <g filter="url(#archShadow)">
                <rect x="90" y="370" width="180" height="65" rx="14" fill="white" stroke="#1F4ED8" strokeWidth="2" />
                <text x="180" y="400" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="600">Referral</text>
                <text x="180" y="418" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="600">Management</text>
              </g>

              <g filter="url(#archShadow)">
                <rect x="310" y="370" width="180" height="65" rx="14" fill="white" stroke="#14B8A6" strokeWidth="2" />
                <text x="400" y="400" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="600">Services</text>
                <text x="400" y="418" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="600">Database</text>
              </g>

              <g filter="url(#archShadow)">
                <rect x="530" y="370" width="180" height="65" rx="14" fill="white" stroke="#1F4ED8" strokeWidth="2" />
                <text x="620" y="400" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="600">Analytics &amp;</text>
                <text x="620" y="418" textAnchor="middle" fill="#1E3A8A" fontSize="12" fontWeight="600">Insights</text>
              </g>

              {/* Data flow arrows */}
              <text x="280" y="170" textAnchor="middle" fill="#1F4ED8" fontSize="10" fontWeight="500" opacity="0.6">requests</text>
              <text x="520" y="170" textAnchor="middle" fill="#1F4ED8" fontSize="10" fontWeight="500" opacity="0.6">listings</text>
              <text x="270" y="340" textAnchor="middle" fill="#14B8A6" fontSize="10" fontWeight="500" opacity="0.6">matches</text>
              <text x="400" y="340" textAnchor="middle" fill="#14B8A6" fontSize="10" fontWeight="500" opacity="0.6">queries</text>
              <text x="530" y="340" textAnchor="middle" fill="#14B8A6" fontSize="10" fontWeight="500" opacity="0.6">data</text>

              {/* Decorative dots */}
              {[{x:50,y:150},{x:750,y:150},{x:50,y:350},{x:750,y:350},{x:400,y:470}].map((dot, i) => (
                <circle key={`dot-${i}`} cx={dot.x} cy={dot.y} r="3" fill="#1F4ED8" opacity="0.1">
                  <animate attributeName="opacity" values="0.05;0.15;0.05" dur="4s" begin={`${i * 0.8}s`} repeatCount="indefinite" />
                </circle>
              ))}
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
