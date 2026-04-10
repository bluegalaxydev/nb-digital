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
    default:
      "Harbor Point Marketing | High-Risk Business Marketing, SEO & Growth",
    template: "%s | Harbor Point Marketing",
  },
  description:
    "Harbor Point Marketing Services helps high-risk businesses grow with compliant marketing strategy, SEO, paid advertising, automation, and digital solutions for peptides, supplements, CBD & restricted industries.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "3f433610150544de",
  },
};

/* ── WebSite schema for Google Sitelinks search box ── */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Harbor Point Marketing Services",
  url: "https://www.harborpointmarketingservices.com",
  description:
    "AI-powered marketing agency for high-risk industries — peptides, supplements, CBD, and restricted verticals.",
  publisher: {
    "@type": "Organization",
    name: "Harbor Point Marketing Services",
    logo: {
      "@type": "ImageObject",
      url: "https://www.harborpointmarketingservices.com/logo.png",
    },
  },
};

/* ── BreadcrumbList schema ── */
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.harborpointmarketingservices.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.harborpointmarketingservices.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "About",
      item: "https://www.harborpointmarketingservices.com/about",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Blog",
      item: "https://www.harborpointmarketingservices.com/blog",
    },
  ],
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#eef4fb] text-[#0f172a]`}
      >
        {/* ── Global structured data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        {/* ── Header ── */}
        <header className="sticky top-0 z-40 border-b border-blue-100/50 bg-white/75 backdrop-blur-xl">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
            <Link
              href="/"
              className="flex items-center gap-3 transition hover:opacity-80"
              aria-label="Harbor Point Marketing — Home"
            >
              <img
                src="/logo.png"
                alt=""
                className="h-11 w-auto object-contain"
                width={44}
                height={44}
              />
              <div className="leading-tight">
                <span className="block text-lg font-bold tracking-tight text-slate-900">
                  Harbor Point
                </span>
                <span className="block text-[10px] font-medium uppercase tracking-[0.2em] text-blue-600/70">
                  Marketing Services
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-[14px] font-medium text-slate-600 transition hover:bg-blue-50/60 hover:text-blue-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="ml-3 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2.5 text-[14px] font-semibold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/30"
              >
                Get Started
              </Link>
            </nav>

            {/* Mobile nav */}
            <MobileNav />
          </div>
        </header>

        {children}

        {/* ── Footer ── */}
        <footer
          className="relative overflow-hidden border-t border-blue-100/50 bg-white"
          role="contentinfo"
        >
          <div
            className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid gap-10 md:grid-cols-4">
              {/* Brand */}
              <div className="md:col-span-2">
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
                  <span className="text-lg font-bold text-slate-900">
                    Harbor Point
                  </span>
                </Link>
                <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
                  Full-service marketing agency for high-risk businesses.
                  Peptides, supplements, CBD, and restricted industries — we
                  build the growth systems others can&apos;t.
                </p>
              </div>

              {/* Links */}
              <nav aria-label="Footer navigation">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Quick Links
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/services", label: "Services" },
                    { href: "/about", label: "About" },
                    { href: "/blog", label: "Blog" },
                    { href: "/#contact", label: "Contact" },
                    { href: "/terms-and-conditions", label: "Terms & Conditions" },
                    { href: "/privacy", label: "Privacy Policy" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 transition hover:text-blue-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Contact
                </h4>
                <address className="mt-4 space-y-2.5 text-sm not-italic text-slate-500">
                  <p>
                    <a
                      href="mailto:info@notbadcapital.com"
                      className="transition hover:text-blue-600"
                    >
                      info@notbadcapital.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+16575774455"
                      className="transition hover:text-blue-600"
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
            <p className="mt-6 text-center text-xs text-slate-400">
              &copy; {new Date().getFullYear()} Harbor Point Marketing Services.
              All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
