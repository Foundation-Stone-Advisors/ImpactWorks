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
                { href: "/impact", label: "Impact" },
                { href: "/news", label: "News" },
                { href: "/events", label: "Events" },
                { href: "/providers", label: "Providers" },
                { href: "/hosts", label: "Hosts" },
                { href: "/foundation", label: "Foundation" },
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
              <li>Clay County, Florida</li>
            </ul>
            <a href="https://linksi.impact-works.us/join/provider" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange-light mt-6 transition-colors group">
              Partner with us <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
            <div className="flex items-center gap-4 mt-6">
              {/* Facebook */}
              <a href="https://www.facebook.com/linksihelps" target="_blank" rel="noopener noreferrer" aria-label="Linksi on Facebook" className="text-slate-500 hover:text-brand-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/linksihelps" target="_blank" rel="noopener noreferrer" aria-label="Linksi on Instagram" className="text-slate-500 hover:text-brand-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@linksihelps" target="_blank" rel="noopener noreferrer" aria-label="Linksi on YouTube" className="text-slate-500 hover:text-brand-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clipRule="evenodd" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/linksihelps" target="_blank" rel="noopener noreferrer" aria-label="Linksi on LinkedIn" className="text-slate-500 hover:text-brand-orange transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
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
