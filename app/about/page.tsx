import Image from "next/image";

const team = [
  {
    name: "Connie Thomas",
    title: "Chief Executive Officer",
    photo: "/team/connie.jpg",
    bio: "Connie is a Licensed Clinical Social Worker and President & CEO of Impact Clay since 2022. A Clay County native, she has led community initiatives across the business, faith-based, nonprofit, and government sectors — including the Impact Clay Train, which delivers vital care to underserved areas. She previously served as Mayor of Orange Park and has testified before the Georgia Senate and a federal CDC panel.",
    color: "border-brand-orange",
  },
  {
    name: "Michelle Reaves",
    title: "Chief Operating Officer",
    photo: "/team/michelle.jpg",
    bio: "Michelle Reaves brings expertise in project coordination, administrative operations, and grant writing. Certified in Six Sigma Lean Black Belt and Change Management, she previously secured critical funding and led process improvement at the Clay County Sheriff's Office. At Impact Works, Michelle supports the CEO, oversees project execution, and ensures smooth day-to-day operations. A lifelong Clay County resident, she sings with the Florida Worship Choir & Orchestra and her local worship team at River Christian Church.",
    color: "border-brand-blue",
  },
  {
    name: "Heather Johnson",
    title: "Administrative Assistant & Data Systems Analyst",
    photo: "/team/heather.jpg",
    bio: "Heather brings 20+ years of administrative experience across for-profit, nonprofit, and military settings as a Navy veteran. She holds a BA in Psychology from UNF and serves as a licensed Pastoral Care Lay Leader for the Diocese of North Florida.",
    color: "border-brand-green",
  },
  {
    // TODO: Update with Wesley's full name, title, and photo
    name: "Wesley [TBD]",
    title: "[Title TBD]",
    photo: null,
    bio: "[Placeholder — bio coming]",
    color: "border-brand-yellow",
  },
  {
    // TODO: Update with Eric's full name, title, and photo
    name: "Eric [TBD]",
    title: "[Title TBD]",
    photo: null,
    bio: "[Placeholder — bio coming]",
    color: "border-brand-orange",
  },
];

export default function About() {
  return (
    <div>
      {/* ===== ABOUT IMPACT WORKS ===== */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-dark-text mb-6">
            About Impact Works
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {/* TODO: Replace with finalized org description */}
            Impact Works exists to bridge the gaps between people and the
            critical services they need. Through technology, collaboration, and a
            commitment to community, we build systems that empower residents,
            providers, and organizations to create lasting change.
          </p>
        </div>
      </section>

      {/* ===== OUR TEAM ===== */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-dark-text text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className={`bg-white rounded-lg p-8 text-center shadow-sm border-t-4 ${member.color}`}
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-gray-400 text-4xl font-bold">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-dark-text">
                  {member.name}
                </h3>
                <p className="text-brand-orange font-medium text-sm mt-1 mb-4">
                  {member.title}
                </p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
