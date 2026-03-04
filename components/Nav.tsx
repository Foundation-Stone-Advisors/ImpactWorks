"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/services", label: "News" },
  { href: "/contact", label: "Contact" },
  { href: "/foundation", label: "Foundation" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-dark-text sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left — Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Impact Works"
            width={120}
            height={60}
            className="h-[60px] w-auto"
            priority
          />
        </Link>

        {/* Center — Desktop links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-brand-orange transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right — Donate + Linksy (always visible) */}
        <div className="flex items-center gap-3">
          <a
            href="https://givebutter.com/impactclaygiving"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-orange text-white font-semibold text-sm px-5 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            Donate
          </a>
          <Image
            src="/images/linksy.png"
            alt="Linksy mascot"
            width={70}
            height={70}
            className="h-[70px] w-auto hidden sm:block"
          />

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden px-4 pb-4 flex flex-col gap-3 border-t border-gray-200">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand-orange transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
