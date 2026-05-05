import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-b from-[#0E1126] via-[#080B1A] to-[#05070F]">
      {/* Subtle paired circles — system-consistent atmospheric detail */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] border-[2px] border-[#212749]/55 rounded-full pointer-events-none" />
      <div className="absolute -top-16 -left-16 w-[320px] h-[320px] border-[2px] border-[#212749]/30 rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] border-[2px] border-[#212749]/55 rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] border-[2px] border-[#212749]/30 rounded-full pointer-events-none" />
      <div className="relative z-10 max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image src="/images/logo-white.png" alt="Impact Works" width={480} height={160} className="h-28 md:h-36 w-auto" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Connecting communities to critical services through data-driven
              technology and cross-sector collaboration.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/platform", label: "Linksi Platform" },
                { href: "/impact", label: "Collaboration" },
                { href: "/partners", label: "Partners" },
                { href: "/expansion", label: "Expansion" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-brand-orange transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">Contact</p>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="mailto:hello@impactworks.dev" className="hover:text-brand-blue transition-colors">hello@impactworks.dev</a></li>
              <li>Clay County, Florida</li>
            </ul>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange-light mt-6 transition-colors group">
              Partner with us <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Impact Works. All rights reserved.</p>
          <p>Built for stronger communities.</p>
        </div>
      </div>
    </footer>
  );
}
