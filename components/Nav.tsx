"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getHostOfMonth } from "@/lib/findHelpHosts";

type NavLink =
  | { type?: "link"; href: string; label: string }
  | { type: "dropdown"; label: string; items: { href: string; label: string }[] };

const links: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    type: "dropdown",
    label: "Linksi",
    items: [
      { href: "/platform", label: "Platform" },
      { href: "/providers", label: "Providers" },
      { href: "/hosts", label: "Hosts" },
    ],
  },
  { href: "/impact", label: "Impact" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/foundation", label: "Foundation" },
  { href: "/expansion", label: "Expansion" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [linksiOpen, setLinksiOpen] = useState(false);
  const [linksiMobileOpen, setLinksiMobileOpen] = useState(false);
  const hostOfMonth = getHostOfMonth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-slate-800" : "text-white";
  const activeColor = "text-brand-orange";

  const linksiPaths = ["/platform", "/providers", "/hosts"];
  const linksiActive = linksiPaths.includes(pathname);

  return (
    <nav
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-site mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo-variant.png"
            alt="Impact Works"
            width={180}
            height={48}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link, i) => {
            if (link.type === "dropdown") {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setLinksiOpen(true)}
                  onMouseLeave={() => setLinksiOpen(false)}
                >
                  <button
                    className={`relative flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${
                      linksiActive ? activeColor : `${textColor} hover:text-brand-orange`
                    }`}
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${linksiOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                    {linksiActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {linksiOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -4, scale: 0.97 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 pt-1.5 z-50"
                      >
                        <div className="bg-white border border-slate-200/80 rounded-xl shadow-lg overflow-hidden w-44">
                          {link.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-4 py-3 text-sm font-medium transition-colors ${
                                pathname === item.href
                                  ? "text-brand-orange bg-brand-orange/5"
                                  : "text-slate-600 hover:text-brand-orange hover:bg-slate-50"
                              }`}
                              onClick={() => setLinksiOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === link.href
                    ? activeColor
                    : `${textColor} hover:text-brand-orange`
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}

          <a
            href={hostOfMonth.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label={`Find Help Now — Hosted by ${hostOfMonth.name}`}
          >
            <Image
              src="/images/linksi-mascot.png"
              alt="Linksi"
              width={36}
              height={36}
              className="flex-shrink-0"
            />
            <div className="leading-tight font-display font-extrabold text-[15px] uppercase tracking-wide text-brand-orange">
              <span className="block">FIND</span>
              <span className="block">HELP</span>
              <span className="block">NOW</span>
              <span className="block text-[8px] font-medium normal-case tracking-normal text-brand-orange/60 leading-tight mt-0.5">Hosted by:</span>
              <span className="block text-[9px] font-semibold normal-case tracking-normal text-brand-orange/80 leading-tight">{hostOfMonth.name}</span>
            </div>
          </a>
          <Link href="/join" className="ml-2 btn-primary !py-2.5 !px-5 text-sm !rounded-lg">
            Join Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-[5px]">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className={`block h-[1.5px] w-full origin-center ${scrolled ? "bg-slate-800" : "bg-white"}`}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`block h-[1.5px] w-full ${scrolled ? "bg-slate-800" : "bg-white"}`}
              transition={{ duration: 0.15 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className={`block h-[1.5px] w-full origin-center ${scrolled ? "bg-slate-800" : "bg-white"}`}
              transition={{ duration: 0.25 }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((link, i) => {
                if (link.type === "dropdown") {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <button
                        onClick={() => setLinksiMobileOpen(!linksiMobileOpen)}
                        className={`w-full flex items-center justify-between py-3 px-3 rounded-lg text-sm transition-colors ${
                          linksiActive
                            ? "text-brand-orange bg-brand-orange/5 font-semibold"
                            : "text-slate-600 hover:text-brand-orange hover:bg-slate-50"
                        }`}
                      >
                        {link.label}
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${linksiMobileOpen ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {linksiMobileOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 pb-1 space-y-0.5 border-l-2 border-brand-orange/20 ml-3 mt-1">
                              {link.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className={`block py-2.5 px-3 rounded-lg text-sm transition-colors ${
                                    pathname === item.href
                                      ? "text-brand-orange font-semibold"
                                      : "text-slate-500 hover:text-brand-orange hover:bg-slate-50"
                                  }`}
                                  onClick={() => { setMenuOpen(false); setLinksiMobileOpen(false); }}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 px-3 rounded-lg text-sm transition-colors ${
                        pathname === link.href
                          ? "text-brand-orange bg-brand-orange/5 font-semibold"
                          : "text-slate-600 hover:text-brand-orange hover:bg-slate-50"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.04 }}
                className="pt-2 flex flex-col gap-3"
              >
                <a
                  href={hostOfMonth.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center gap-3 hover:opacity-90 transition-opacity py-2"
                  onClick={() => setMenuOpen(false)}
                  aria-label={`Find Help Now — Hosted by ${hostOfMonth.name}`}
                >
                  <Image
                    src="/images/linksi-mascot.png"
                    alt="Linksi"
                    width={44}
                    height={44}
                    className="flex-shrink-0"
                  />
                  <div>
                    <span className="block font-display font-extrabold text-[22px] uppercase tracking-wide text-brand-orange leading-tight">FIND HELP NOW</span>
                    <span className="block text-[10px] font-medium text-brand-orange/60 leading-tight mt-0.5">Hosted by:</span>
                    <span className="block text-[11px] font-semibold text-brand-orange/80 leading-tight">{hostOfMonth.name}</span>
                  </div>
                </a>
                <Link
                  href="/join"
                  className="btn-primary w-full justify-center !py-3 !text-sm !rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  Join Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
