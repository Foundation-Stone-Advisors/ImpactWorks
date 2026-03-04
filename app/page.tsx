import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* ===== 1. HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4 bg-[#0f2044]/90">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Image
            src="/images/logo.jpg"
            alt="Impact Works"
            width={320}
            height={160}
            className="mx-auto mb-8 w-[320px] h-auto"
            priority
          />
          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            {/* PLACEHOLDER — awaiting motto */}
            [PLACEHOLDER &mdash; awaiting motto]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://impactclayportal.powerappsportals.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-orange text-white font-semibold px-8 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              Provider Portal
            </a>
            <a
              href="#origin-story"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded hover:bg-white hover:text-dark-text transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ===== 2. ORIGIN STORY ===== */}
      <section id="origin-story" className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-dark-text mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              In 2024, gaps in how our community accessed critical services led
              to the creation of Impact Works &mdash; a platform built to
              connect people with the support they need, when they need it.
            </p>
            {/* TODO: Add Mission Statement here */}
            <div className="bg-gray-50 border-l-4 border-brand-blue p-4 mb-4">
              <p className="font-semibold text-dark-text">Mission Statement</p>
              <p className="text-gray-500 italic">[Coming soon]</p>
            </div>
            {/* TODO: Add Vision Statement here */}
            <div className="bg-gray-50 border-l-4 border-brand-green p-4">
              <p className="font-semibold text-dark-text">Vision Statement</p>
              <p className="text-gray-500 italic">[Coming soon]</p>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo.jpg"
              alt="Impact Works"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* ===== 3. LINKSY SECTION ===== */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <Image
              src="/images/linksy.png"
              alt="Linksy mascot"
              width={320}
              height={320}
              className="rounded-lg"
            />
          </div>
          <div className="grid gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-orange">
              <h3 className="text-xl font-semibold text-dark-text mb-2">
                For Residents
              </h3>
              <p className="text-gray-600">
                Quickly find food, housing, mental health care, job support, and
                more.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-blue">
              <h3 className="text-xl font-semibold text-dark-text mb-2">
                For Providers
              </h3>
              <p className="text-gray-600">
                Assist clients, automate referrals, update and track services in
                real time.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-brand-green">
              <h3 className="text-xl font-semibold text-dark-text mb-2">
                For the Community
              </h3>
              <p className="text-gray-600">
                Analyze needs and gaps through live data dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. PROGRAM BUTTONS ===== */}
      {/* TODO: Replace with actual Host page links */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-text text-center mb-12">
            Our Programs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Program 1", dot: "bg-brand-orange" },
              { title: "Program 2", dot: "bg-brand-blue" },
              { title: "Program 3", dot: "bg-brand-green" },
              { title: "Program 4", dot: "bg-brand-yellow" },
            ].map((program) => (
              <div
                key={program.title}
                className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-full mx-auto mb-4 ${program.dot}`}
                />
                <h3 className="text-lg font-semibold text-dark-text mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  [Program description coming soon]
                </p>
                <Link
                  href="#"
                  className="text-brand-orange font-semibold text-sm hover:underline"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. IMPACT WORKS FOUNDATION ===== */}
      <section className="bg-dark-text text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Impact Works Foundation
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            [Foundation description coming soon]
          </p>
          <a
            href="https://givebutter.com/impactclaygiving"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-dark-text font-semibold px-8 py-3 rounded hover:bg-yellow-400 transition-colors"
          >
            Donate
          </a>
        </div>
      </section>
    </div>
  );
}
