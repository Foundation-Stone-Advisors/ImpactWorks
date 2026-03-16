import Link from "next/link";

const categories = [
  {
    title: "Nonprofits",
    desc: "Community organizations providing direct services to residents in need.",
    icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
  },
  {
    title: "Healthcare Systems",
    desc: "Hospitals and clinics coordinating care access for underserved populations.",
    icon: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Government Agencies",
    desc: "Local and state agencies managing public assistance and social programs.",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    title: "Faith Organizations",
    desc: "Churches and faith-based groups offering support and outreach programs.",
    icon: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582",
  },
  {
    title: "Community Initiatives",
    desc: "Grassroots programs and local efforts building stronger neighborhoods.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
];

export default function Partners() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-deep-blue to-impact-blue text-white section-padding">
        <div className="max-w-site mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Community Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Organizations working together to strengthen access to services.
          </p>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:border-impact-blue/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-impact-blue/10 rounded-xl flex items-center justify-center mb-5">
                  <svg
                    className="w-6 h-6 text-impact-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={cat.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {cat.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-site mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Join Our Network
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Whether you&apos;re a nonprofit, healthcare provider, government
            agency, or community organization — there&apos;s a place for you in
            the Impact Works ecosystem.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-impact-blue text-white font-semibold px-8 py-3 rounded-lg hover:bg-deep-blue transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </div>
  );
}
