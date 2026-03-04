import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Impact<span className="text-gold">Works</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Mission-Driven. Systems-Powered. Kingdom-Focused.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gold text-navy font-semibold px-8 py-3 rounded hover:bg-yellow-400 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Brief intro */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">
            Building Systems That Serve the Mission
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            ImpactWorks helps organizations design and implement the operational
            systems they need to scale their impact — without losing sight of
            what matters most.
          </p>
        </div>
      </section>
    </div>
  );
}
