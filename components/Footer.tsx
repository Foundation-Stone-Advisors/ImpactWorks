import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="max-w-site mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="text-xl font-bold tracking-tight mb-3">
              Impact<span className="text-teal-accent">Works</span>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Connecting communities to critical services through data-driven
              technology and cross-sector collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/platform", label: "Linksy Platform" },
                { href: "/impact", label: "Community Impact" },
                { href: "/partners", label: "Partners" },
                { href: "/expansion", label: "Expansion" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-teal-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-accent transition-colors"
                >
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:info@impactworks.us" className="hover:text-teal-accent transition-colors">
                  info@impactworks.us
                </a>
              </li>
              <li>
                <a href="tel:9043301848" className="hover:text-teal-accent transition-colors">
                  904.330.1848
                </a>
              </li>
              <li>Clay County, Florida</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Impact Works. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
