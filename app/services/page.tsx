const services = [
  {
    title: "Operational Systems Design",
    description:
      "We help you build the workflows, processes, and tools that keep your team aligned and efficient.",
  },
  {
    title: "Strategic Consulting",
    description:
      "From vision-casting to execution planning, we partner with you to turn goals into action.",
  },
  {
    title: "Technology Implementation",
    description:
      "We identify and implement the right technology stack to support your mission at scale.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-navy mb-10">Services</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold text-navy mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
