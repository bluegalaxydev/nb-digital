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
      <head>
        {/* ── Google Analytics (GA4) ── */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H6L176DVXK"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-H6L176DVXK');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#f0f4fa] text-[#0c1222]`}
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

        {/* ── Top accent stripe ── */}
        <div className="accent-stripe" aria-hidden="true" />

        {/* ── Header ── */}
        <header className="header-glass sticky top-0 z-40 border-b border-blue-100/40">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="flex items-center gap-3 transition-opacity hover:opacity-85"
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
                <span className="block text-[17px] font-bold tracking-tight text-slate-900">
                  Harbor Point
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600/80">
                  Marketing Services
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden items-center gap-0.5 md:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-[13.5px] font-medium text-slate-500 transition-all hover:bg-blue-50/70 hover:text-blue-700"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                className="ml-4 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30"
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
          className="relative overflow-hidden border-t border-blue-100/40 bg-gradient-to-b from-white to-slate-50/80"
          role="contentinfo"
        >
          {/* Decorative top gradient line */}
          <div
            className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"
            aria-hidden="true"
          />

          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-12 md:grid-cols-4">
              {/* Brand */}
              <div className="md:col-span-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 transition-opacity hover:opacity-85"
                >
                  <img
                    src="/logo.png"
                    alt=""
                    className="h-10 w-auto object-contain"
                    width={40}
                    height={40}
                  />
                  <div className="leading-tight">
                    <span className="block text-lg font-bold text-slate-900">
                      Harbor Point
                    </span>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-600/70">
                      Marketing Services
                    </span>
                  </div>
                </Link>
                <p className="mt-5 max-w-sm text-[13.5px] leading-6 text-slate-500">
                  AI-powered marketing agency for high-risk businesses.
                  Peptides, supplements, CBD, and restricted industries — we
                  build the growth systems others can&apos;t.
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <span className="dot-pulse h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-slate-400">Available for new clients</span>
                </div>
              </div>

              {/* Links */}
              <nav aria-label="Footer navigation">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Quick Links
                </h4>
                <ul className="mt-5 space-y-3">
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
                        className="text-[13.5px] text-slate-500 transition-colors hover:text-blue-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Contact
                </h4>
                <address className="mt-5 space-y-3 text-[13.5px] not-italic text-slate-500">
                  <p>
                    <a
                      href="mailto:info@notbadcapital.com"
                      className="transition-colors hover:text-blue-600"
                    >
                      info@notbadcapital.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+16575774455"
                      className="transition-colors hover:text-blue-600"
                    >
                      +1 (657) 577-4455
                    </a>
                  </p>
                  <p className="leading-6">
                    6013 Warner Ave
                    <br />
                    Huntington Beach, CA 92647
                  </p>
                </address>
              </div>
            </div>

            <div className="section-divider mx-auto mt-12 max-w-4xl" />
            <p className="mt-7 text-center text-[12px] tracking-wide text-slate-400">
              &copy; {new Date().getFullYear()} Harbor Point Marketing Services.
              All rights reserved.
            </p>
          </div>

          {/* Bottom accent stripe */}
          <div className="accent-stripe" aria-hidden="true" />
        </footer>
      </body>
    </html>
  );
}
