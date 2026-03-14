"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Lost Times Library", href: "/#library" },
  { label: "Events", href: "/#workshops" },
  { label: "Interzone", href: "/#story" },
  { label: "Contact", href: "/join" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#EDE8DF] border-b border-[#906558]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="Interzone"
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-heading font-semibold uppercase tracking-widest text-xs text-[#1E120A] border-b-2 border-transparent hover:border-[#B08020]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-heading uppercase tracking-widest text-xs text-[#1E120A] border-b-2 border-transparent hover:border-[#B08020]"
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#906558] bg-[#EDE8DF]">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading font-semibold uppercase tracking-widest text-sm text-[#1E120A] border-b-2 border-transparent hover:border-[#B08020]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
