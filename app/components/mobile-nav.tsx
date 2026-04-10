"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-blue-50"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? (
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <nav
          className="absolute left-0 right-0 top-full z-50 border-b border-blue-100/50 bg-white/95 px-6 py-4 shadow-lg backdrop-blur-xl"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 border-t border-blue-100/50 pt-3">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-4 py-3 text-center text-[15px] font-semibold text-white shadow-md"
            >
              Get Started
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
