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
        <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Harbor Point Marketing — Home">
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
            <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
              <Link href="/" className="text-[15px] text-gray-700 transition hover:text-black">
                Home
              </Link>
              <Link href="/#services" className="text-[15px] text-gray-700 transition hover:text-black">
                Services
              </Link>
              <Link href="/#about" className="text-[15px] text-gray-700 transition hover:text-black">
                About
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-[15px] text-gray-700 transition hover:text-black"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-[15px] text-gray-700 transition hover:text-black"
              >
                Privacy
              </Link>
            </nav>

            {/* Mobile nav */}
            <MobileNav />
          </div>
        </header>

        {children}

        {/* ── Footer ── */}
        <footer className="border-t border-gray-200 bg-white" role="contentinfo">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <Link href="/" className="flex items-center gap-3">
                  <img src="/logo.png" alt="" className="h-10 w-auto object-contain" width={40} height={40} />
                  <span className="text-lg font-semibold text-slate-900">Harbor Point</span>
                </Link>
                <p className="mt-4 text-sm leading-6 text-gray-500">
                  Marketing systems for high-risk businesses. Peptides,
                  supplements, and restricted industries.
                </p>
              </div>

              <nav aria-label="Footer navigation">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-3">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/#services", label: "Services" },
                    { href: "/#about", label: "About" },
                    { href: "/terms-and-conditions", label: "Terms & Conditions" },
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
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
                  Contact
                </h4>
                <address className="mt-4 space-y-3 text-sm not-italic text-gray-500">
                  <p>
                    <a href="mailto:info@notbadcapital.com" className="hover:text-[#6366f1]">
                      info@notbadcapital.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+16575774455" className="hover:text-[#6366f1]">
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

            <div className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Harbor Point Marketing Services. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
