import CountUp from "@/components/CountUp";

const stories = [
  {
    title: "Veteran Finds Housing Support",
    desc: "After months of searching, a local veteran was connected to housing assistance within 24 hours through Linksy.",
    category: "Housing",
  },
  {
    title: "Parent Finds Childcare Resources",
    desc: "A single parent found affordable childcare options through the platform, enabling them to maintain employment.",
    category: "Childcare",
  },
  {
    title: "Senior Receives Healthcare Referral",
    desc: "An elderly resident was matched with a healthcare provider offering specialized services close to home.",
    category: "Healthcare",
  },
];

const demandCategories = [
  { label: "Housing Requests", pct: 35, color: "bg-impact-blue" },
  { label: "Food Assistance", pct: 28, color: "bg-teal-accent" },
  { label: "Healthcare Access", pct: 22, color: "bg-deep-blue" },
  { label: "Mental Health Support", pct: 15, color: "bg-amber-500" },
];

export default function Impact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-blue to-impact-blue text-white section-padding">
        <div className="max-w-site mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Community Impact
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Turning data into stronger support systems.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 1500, suffix: "+", label: "Residents Connected" },
              { value: 50, suffix: "+", label: "Partner Organizations" },
              { value: 4000, suffix: "+", label: "Referrals Made" },
              { value: 100, suffix: "%", label: "Real-Time Data Access" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-8 text-center border border-gray-100"
              >
                <p className="text-3xl md:text-4xl font-bold text-impact-blue mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Demand Data */}
      <section className="section-padding bg-white">
        <div className="max-w-site mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-12">
            Service Demand Data
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {demandCategories.map((cat) => (
              <div key={cat.label}>
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span className="text-text-dark">{cat.label}</span>
                  <span className="text-gray-500 font-data">{cat.pct}%</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${cat.color} rounded-full`}
                    style={{ width: `${cat.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Data Dashboard
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Real-time visibility into community service needs and outcomes.
          </p>
          {/* Dashboard mockup */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10 text-left">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-bold text-text-dark">Community Service Dashboard</h3>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: "Total Referrals", value: "2,850" },
                { label: "Active Cases", value: "1,120" },
                { label: "Successful Outcomes", value: "87%" },
              ].map((m) => (
                <div key={m.label} className="border border-gray-100 rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500 mb-1">{m.label}</p>
                  <p className="text-2xl font-bold font-data text-text-dark">{m.value}</p>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Monthly Referrals", value: "850", sub: "Conversion Rate: 72%" },
                { label: "Top Category", value: "Housing", sub: "35% of all requests" },
                { label: "Avg. Resolution", value: "5.4 Days", sub: "Down from 12 days" },
              ].map((m) => (
                <div key={m.label} className="border border-gray-100 rounded-xl p-4">
                  <p className="text-xs text-gray-500 mb-1">{m.label}</p>
                  <p className="text-xl font-bold font-data text-impact-blue">{m.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section-padding bg-white">
        <div className="max-w-site mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-12">
            Community Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div
                key={story.title}
                className="bg-light-bg rounded-xl p-8 border border-gray-100"
              >
                <span className="inline-block text-xs font-semibold text-impact-blue bg-impact-blue/10 px-3 py-1 rounded-full mb-4">
                  {story.category}
                </span>
                <h3 className="text-lg font-bold text-text-dark mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {story.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
