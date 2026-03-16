import Image from "next/image";
import AnimatedTimeline from "@/components/AnimatedTimeline";

const team = [
  {
    name: "Connie Thomas",
    title: "Chief Executive Officer",
    photo: "/team/connie.jpg",
    bio: "Connie is a Licensed Clinical Social Worker and President & CEO of Impact Clay since 2022. A Clay County native, she has led community initiatives across the business, faith-based, nonprofit, and government sectors — including the Impact Clay Train, which delivers vital care to underserved areas.",
    color: "border-impact-blue",
  },
  {
    name: "Michelle Reaves",
    title: "Chief Operating Officer",
    photo: "/team/michelle.jpg",
    bio: "Michelle Reaves brings expertise in project coordination, administrative operations, and grant writing. Certified in Six Sigma Lean Black Belt and Change Management, she previously secured critical funding and led process improvement at the Clay County Sheriff\u2019s Office.",
    color: "border-teal-accent",
  },
  {
    name: "Heather Johnson",
    title: "Administrative Assistant & Data Systems Analyst",
    photo: "/team/heather.jpg",
    bio: "Heather brings 20+ years of administrative experience across for-profit, nonprofit, and military settings as a Navy veteran. She holds a BA in Psychology from UNF and serves as a licensed Pastoral Care Lay Leader for the Diocese of North Florida.",
    color: "border-impact-blue",
  },
];

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
          <AnimatedTimeline />
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

      {/* Our Team */}
      <section className="section-padding bg-light-bg">
        <div className="max-w-site mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className={`bg-white rounded-xl p-8 text-center border-t-4 ${member.color}`}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-semibold text-text-dark">
                  {member.name}
                </h3>
                <p className="text-impact-blue font-medium text-sm mt-1 mb-4">
                  {member.title}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
