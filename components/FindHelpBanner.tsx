"use client";

import Image from "next/image";
import { getHostOfMonth } from "@/lib/findHelpHosts";

export default function FindHelpBanner() {
  const host = getHostOfMonth();

  return (
    <a
      href={host.url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 left-0 right-0 z-[60] h-10 bg-brand-orange flex items-center justify-center gap-2 px-4 hover:bg-brand-orange/90 transition-colors"
      aria-label={`Find Help Now — Hosted by ${host.name}`}
    >
      <Image
        src="/images/linksi-mascot.png"
        alt="Linksi"
        width={22}
        height={22}
        className="flex-shrink-0"
      />
      <span className="font-display font-extrabold text-white text-xs uppercase tracking-widest">
        Find Help Now
      </span>
      <span className="hidden sm:block text-white/50 text-xs mx-1">·</span>
      <span className="hidden sm:block text-white/80 text-xs font-medium">
        Hosted by:{" "}
        <span className="text-white font-semibold">{host.name}</span>
      </span>
      <span className="text-white/60 text-xs ml-1">→</span>
    </a>
  );
}
