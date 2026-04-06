import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import MobileNav from "./components/mobile-nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.harborpointmarketingservices.com"),
  title: {
    default: "Harbor Point Marketing | High-Risk Business Marketing & Growth",
    template: "%s | Harbor Point Marketing",
  },
  description:
    "Harbor Point Marketing Services helps high-risk businesses grow with compliant marketing strategy, automation, SEO, and digital solutions.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f7f8] text-[#111111]`}
      >
        {/* ── Header ── */}
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/70 backdrop-blur-xl">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center gap-3 transition hover:opacity-80"
              aria-label="Harbor Point Marketing — Home"
            >
              <img
                src="/logo.png"
                alt=""
                className="h-12 w-auto object-contain"
                width={48}
                height={48}
              />
              <div className="leading-tight">
                <span className="block text-xl font-semibold tracking-tight text-slate-900">
                  Harbor Point
                </span>
                <span className="block text-[11px] uppercase tracking-[0.18em] text-slate-500">
                  Marketing Services
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-10 md:flex"
              aria-label="Main navigation"
            >
              {[
                { href: "/", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/#about", label: "About" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
                { href: "/privacy", label: "Privacy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-[15px] text-gray-600 transition hover:text-black after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#6366f1] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile nav */}
            <MobileNav />
          </div>
        </header>

        {children}

        {/* ── Footer ── */}
        <footer
          className="relative overflow-hidden border-t border-gray-200/60 bg-white"
          role="contentinfo"
        >
          {/* Subtle gradient accent at top edge */}
          <div
            className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <Link
                  href="/"
                  className="flex items-center gap-3 transition hover:opacity-80"
                >
                  <img
                    src="/logo.png"
                    alt=""
                    className="h-10 w-auto object-contain"
                    width={40}
                    height={40}
                  />
                  <span className="text-lg font-semibold text-slate-900">
                    Harbor Point
                  </span>
                </Link>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Marketing systems for high-risk businesses. Peptides,
                  supplements, and restricted industries.
                </p>
              </div>

              <nav aria-label="Footer navigation">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/#services", label: "Services" },
                    { href: "/#about", label: "About" },
                    {
                      href: "/terms-and-conditions",
                      label: "Terms & Conditions",
                    },
                    { href: "/privacy", label: "Privacy Policy" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 transition hover:text-[#6366f1]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Contact
                </h4>
                <address className="mt-4 space-y-3 text-sm not-italic text-gray-500">
                  <p>
                    <a
                      href="mailto:info@notbadcapital.com"
                      className="transition hover:text-[#6366f1]"
                    >
                      info@notbadcapital.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+16575774455"
                      className="transition hover:text-[#6366f1]"
                    >
                      +1 (657) 577-4455
                    </a>
                  </p>
                  <p>
                    6013 Warner Ave
                    <br />
                    Huntington Beach, CA 92647
                  </p>
                </address>
              </div>
            </div>

            <div className="section-divider mx-auto mt-10 max-w-3xl" />
            <p className="mt-6 text-center text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Harbor Point Marketing Services.
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
