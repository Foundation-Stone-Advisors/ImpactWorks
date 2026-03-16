"use client";

import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2024",
    title: "Community service access gaps identified",
    desc: "Research revealed critical disconnects between residents and available social services in Clay County.",
    icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  },
  {
    year: "2025",
    title: "Impact Works initiative launched",
    desc: "A cross-sector coalition formed to build technology that connects people to the help they need.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    year: "2025",
    title: "Linksy platform developed",
    desc: "AI-powered referral system built to match residents with services instantly and privately.",
    icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z",
  },
  {
    year: "Future",
    title: "Regional and statewide expansion",
    desc: "Scaling from Clay County to Northeast Florida and beyond — building a connected network across the state.",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
];

export default function AnimatedTimeline() {
  const [visible, setVisible] = useState<boolean[]>(milestones.map(() => false));
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setVisible((prev) => {
              const next = [...prev];
              next[idx] = true;
              return next;
            });
            // Animate line to this item's position
            if (containerRef.current) {
              const containerTop = containerRef.current.getBoundingClientRect().top;
              const itemBottom = entry.target.getBoundingClientRect().bottom;
              setLineHeight((prev) => Math.max(prev, itemBottom - containerTop));
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto">
      {/* Animated vertical line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-impact-blue/10 -translate-x-1/2" />
      <div
        className="absolute left-6 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-impact-blue to-teal-accent -translate-x-1/2 transition-all duration-1000 ease-out"
        style={{ height: lineHeight }}
      />

      {milestones.map((item, i) => (
        <div
          key={i}
          ref={(el) => { itemRefs.current[i] = el; }}
          data-index={i}
          className={`relative flex items-start gap-6 mb-16 last:mb-0 transition-all duration-700 ease-out ${
            visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${i * 150}ms` }}
        >
          {/* Node */}
          <div className="relative z-10 flex-shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
              visible[i]
                ? "bg-impact-blue shadow-lg shadow-impact-blue/30 scale-100"
                : "bg-impact-blue/30 scale-75"
            }`}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
            </div>
          </div>

          {/* Card — alternates sides on desktop */}
          <div className={`flex-1 md:w-5/12 ${
            i % 2 === 0
              ? "md:mr-auto md:pr-16 md:text-right"
              : "md:ml-auto md:pl-16"
          }`}>
            <div className={`bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow ${
              visible[i] ? "border-l-4 border-l-impact-blue md:border-l-0" : ""
            } ${i % 2 === 0 ? "md:border-r-4 md:border-r-impact-blue md:border-l-0" : "md:border-l-4 md:border-l-impact-blue"}`}>
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${
                item.year === "Future"
                  ? "bg-teal-accent/10 text-teal-accent"
                  : "bg-impact-blue/10 text-impact-blue"
              }`}>
                {item.year}
              </span>
              <h3 className="text-lg font-bold text-text-dark mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
