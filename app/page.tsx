import Link from "next/link";
import Image from "next/image";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <div>
      {/* ── Section 1: Hero ── */}
      <section className="relative bg-gradient-to-br from-deep-blue to-impact-blue text-white section-padding overflow-hidden">
        <div className="max-w-site mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connecting Communities to Critical Services
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              Impact Works develops data-driven solutions that make it easier for
              people to find the help they need while strengthening collaboration
              between organizations that serve the community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/platform"
                className="inline-block bg-teal-accent text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-500 transition-colors"
              >
                Explore Linksy
              </Link>
              <Link
                href="/impact"
                className="inline-block border border-white/30 text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                See Community Impact
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/hero-network.png"
              alt="Impact Works network connecting community organizations"
              width={560}
              height={560}
              className="w-full max-w-md md:max-w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/fragmented-system.png"
              alt="Person navigating disconnected social services"
              width={480}
              height={480}
              className="w-full max-w-sm md:max-w-md"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-impact-blue uppercase tracking-wider mb-3">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Why Finding Help Is Hard
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              People in need often face a confusing maze of phone calls, outdated
              directories, and disconnected organizations. Important services
              exist, but finding them quickly is often the biggest barrier.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 3: The Solution — How Linksy Works ── */}
      <section className="section-padding bg-white">
        <div className="max-w-site mx-auto text-center">
          <p className="text-sm font-semibold text-impact-blue uppercase tracking-wider mb-3">
            The Solution
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            How Linksy Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            A smarter path from need to help — in three simple steps.
          </p>

          <Image
            src="/images/linksy-process.png"
            alt="Linksy 3-step process: Ask for Help, AI Matches, Instant Referral"
            width={960}
            height={320}
            className="w-full max-w-4xl mx-auto mb-12"
          />

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                step: "01",
                title: "Ask for Help",
                desc: "Residents simply ask Linksy what they need — in plain language, on any device.",
              },
              {
                step: "02",
                title: "Smart Matching",
                desc: "Linksy analyzes available services and identifies the best organizations to help.",
              },
              {
                step: "03",
                title: "Instant Referral",
                desc: "The request is routed directly to the provider — no waiting, no paperwork.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-light-bg rounded-xl p-8">
                <span className="text-sm font-bold text-teal-accent">
                  Step {item.step}
                </span>
                <h3 className="text-xl font-bold text-text-dark mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 4: Ecosystem ── */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto text-center">
          <p className="text-sm font-semibold text-impact-blue uppercase tracking-wider mb-3">
            The Ecosystem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Collaboration Across Sectors
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Impact Works brings together organizations across sectors to build a
            coordinated network of services. Instead of operating in isolation,
            partners collaborate through shared technology and data.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Nonprofits", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
              { label: "Government", icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" },
              { label: "Hospitals", icon: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Faith Groups", icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" },
              { label: "Businesses", icon: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21" },
              { label: "Residents", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-impact-blue/30 hover:shadow-md transition-all"
              >
                <svg
                  className="w-8 h-8 text-impact-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <span className="text-sm font-semibold text-text-dark">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: Data Impact ── */}
      <section className="section-padding bg-gradient-to-br from-deep-blue to-impact-blue text-white">
        <div className="max-w-site mx-auto text-center">
          <p className="text-sm font-semibold text-teal-accent uppercase tracking-wider mb-3">
            Our Reach
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Community Impact
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 1500, suffix: "+", label: "Residents Connected" },
              { value: 50, suffix: "+", label: "Partner Organizations" },
              { value: 4000, suffix: "+", label: "Referrals Made" },
              { value: 100, suffix: "%", label: "Real-Time Data Access" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-bold text-teal-accent mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
