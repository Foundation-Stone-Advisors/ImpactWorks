export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-blue to-impact-blue text-white section-padding">
        <div className="max-w-site mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Impact Works
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technology for Stronger Communities
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-site mx-auto max-w-3xl">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Impact Works is a collaborative initiative created to solve one of
            the most persistent challenges in social services: connecting people
            with the help they need quickly and efficiently.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            By combining community partnerships with modern technology, Impact
            Works builds tools that improve access to services while helping
            organizations coordinate their efforts.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-16">
            Our Journey
          </h2>

          <div className="relative max-w-2xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-impact-blue/20 -translate-x-1/2" />

            {[
              { year: "2024", text: "Community service access gaps identified" },
              { year: "2025", text: "Impact Works initiative launched" },
              { year: "2025", text: "Linksy platform developed" },
              { year: "Future", text: "Regional and statewide expansion" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex items-start gap-6 mb-12 last:mb-0"
              >
                <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-impact-blue flex items-center justify-center md:ml-auto md:mr-auto">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex-1">
                  <span className="text-sm font-bold text-impact-blue">
                    {item.year}
                  </span>
                  <p className="text-text-dark font-medium mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-site mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-light-bg rounded-2xl p-10">
            <p className="text-sm font-semibold text-impact-blue uppercase tracking-wider mb-3">
              Mission
            </p>
            <p className="text-lg text-text-dark leading-relaxed">
              To empower communities through real-time access to reliable service
              data that connects individuals with the support systems they need.
            </p>
          </div>
          <div className="bg-light-bg rounded-2xl p-10">
            <p className="text-sm font-semibold text-teal-accent uppercase tracking-wider mb-3">
              Vision
            </p>
            <p className="text-lg text-text-dark leading-relaxed">
              A connected community where every resident can easily access the
              services that support stability, health, and opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Expansion Section */}
      <section className="section-padding bg-gradient-to-br from-deep-blue to-impact-blue text-white">
        <div className="max-w-site mx-auto text-center">
          <p className="text-sm font-semibold text-teal-accent uppercase tracking-wider mb-3">
            Growth
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Scaling Community Connections
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            From Clay County to statewide networks.
          </p>

          {/* Expansion visual */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
            {[
              { label: "Clay County", status: "active" },
              { label: "Northeast Florida", status: "next" },
              { label: "Florida", status: "future" },
            ].map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-4">
                <div
                  className={`rounded-2xl px-8 py-6 font-semibold text-lg ${
                    stage.status === "active"
                      ? "bg-teal-accent text-white"
                      : stage.status === "next"
                      ? "bg-white/20 text-white border border-white/30"
                      : "bg-white/10 text-gray-400 border border-white/10"
                  }`}
                >
                  {stage.label}
                </div>
                {i < 2 && (
                  <svg
                    className="w-6 h-6 text-teal-accent hidden md:block"
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
    </div>
  );
}
