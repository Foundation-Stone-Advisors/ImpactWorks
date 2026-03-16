import Link from "next/link";
import CountUp from "@/components/CountUp";
import HeroNetwork from "@/components/HeroNetwork";

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
            <HeroNetwork />
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem ── */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            {/* Illustration: inline SVG fallback */}
            <div className="w-full max-w-sm md:max-w-md bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
              <div className="flex flex-col items-center text-center gap-4">
                <svg className="w-24 h-24 text-impact-blue/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
                <div className="grid grid-cols-3 gap-3 w-full">
                  {["Phone calls", "Outdated info", "Long waits", "Paperwork", "Wrong referrals", "No coordination"].map((label) => (
                    <div key={label} className="bg-red-50 text-red-400 text-xs font-medium rounded-lg py-2 px-1">
                      {label}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-400 mt-2">The current experience for people seeking help</p>
              </div>
            </div>
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

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                step: "01",
                title: "Ask for Help",
                desc: "Residents simply ask Linksy what they need — in plain language, on any device.",
                icon: "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
              },
              {
                step: "02",
                title: "Smart Matching",
                desc: "Linksy analyzes available services and identifies the best organizations to help.",
                icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z",
              },
              {
                step: "03",
                title: "Instant Referral",
                desc: "The request is routed directly to the provider — no waiting, no paperwork.",
                icon: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5",
              },
            ].map((item) => (
              <div key={item.step} className="bg-light-bg rounded-xl p-8">
                <div className="w-12 h-12 bg-impact-blue/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-impact-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
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

          <div className="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: "Housing", icon: "M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" },
              { label: "Food", icon: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265z" },
              { label: "Healthcare", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
              { label: "Mental Health", icon: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" },
              { label: "Jobs", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" },
              { label: "Education", icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15v-3.75m0 0h-.008v.008H6.75v-.008zm0 0L12 8.25l5.25 3z" },
              { label: "Transportation", icon: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" },
              { label: "Childcare", icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" },
              { label: "Legal", icon: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" },
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
                  strokeWidth={2}
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
