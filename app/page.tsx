import {
  Mail,
  Phone,
  MapPin,
  Search,
  BarChart3,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Target,
  Users,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import Reveal from "./components/reveal";
import ScrollButton from "./components/scroll-button";
import type { Metadata } from "next";

/* ── SEO metadata ─────────────────────────────── */
export const metadata: Metadata = {
  title: "Harbor Point Marketing | High-Risk Business Marketing & SEO Growth",
  description:
    "Harbor Point Marketing helps high-risk brands — peptides, supplements, CBD, nutraceuticals, and restricted industries — scale through compliant SEO, paid advertising, automation, and conversion-focused marketing systems.",
  keywords: [
    "high risk marketing agency",
    "high risk SEO",
    "peptide marketing",
    "supplement marketing agency",
    "CBD marketing",
    "nutraceutical marketing",
    "restricted industry marketing",
    "high risk paid ads",
    "marketing automation high risk",
    "conversion rate optimization",
    "Harbor Point Marketing",
    "compliant marketing",
    "high risk business growth",
  ],
  openGraph: {
    title: "Harbor Point Marketing | Marketing & SEO for High-Risk Industries",
    description:
      "We help high-risk brands scale through compliant growth systems, SEO, paid advertising, and marketing automation. Peptides, supplements, CBD & more.",
    url: "https://www.harborpointmarketingservices.com",
    siteName: "Harbor Point Marketing Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.harborpointmarketingservices.com/logo.png",
        width: 800,
        height: 600,
        alt: "Harbor Point Marketing Services — High-Risk Business Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harbor Point Marketing | High-Risk Business Growth",
    description:
      "SEO, paid ads & marketing systems for peptide companies, supplements, CBD, and restricted industries.",
  },
  alternates: {
    canonical: "https://www.harborpointmarketingservices.com",
  },
};

/* ── JSON-LD: Organization ────────────────────── */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.harborpointmarketingservices.com/#organization",
  name: "Harbor Point Marketing Services",
  url: "https://www.harborpointmarketingservices.com",
  logo: "https://www.harborpointmarketingservices.com/logo.png",
  image: "https://www.harborpointmarketingservices.com/logo.png",
  description:
    "Full-service marketing agency specializing in high-risk industries including peptides, supplements, CBD, and restricted verticals. We deliver compliant SEO, paid advertising, marketing automation, and conversion optimization.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6013 Warner Ave",
    addressLocality: "Huntington Beach",
    addressRegion: "CA",
    postalCode: "92647",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.7366,
    longitude: -117.9897,
  },
  telephone: "+16575774455",
  email: "info@notbadcapital.com",
  areaServed: {
    "@type": "Country",
    name: "US",
  },
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [],
  serviceType: [
    "Search Engine Optimization (SEO)",
    "Paid Advertising Management",
    "Marketing Automation",
    "Conversion Rate Optimization",
    "Website Design & Development",
    "Email Marketing",
    "Content Marketing",
    "High-Risk Industry Marketing",
  ],
  knowsAbout: [
    "high-risk marketing",
    "peptide marketing",
    "supplement marketing",
    "CBD marketing",
    "restricted industry advertising",
    "compliant digital marketing",
  ],
};

/* ── JSON-LD: FAQ ─────────────────────────────── */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries does Harbor Point Marketing specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We specialize in high-risk industries that most agencies won't touch — including peptides, supplements, nutraceuticals, CBD, prediction markets, and other restricted verticals. Our team understands the compliance landscape and platform restrictions specific to these categories.",
      },
    },
    {
      "@type": "Question",
      name: "How do you run ads for restricted industries?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use a multi-platform approach focusing on channels with more flexible policies such as X (Twitter), Reddit, and select programmatic networks. We also build strong organic systems through SEO and content marketing to reduce dependence on any single ad platform.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require long-term contracts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We operate on a month-to-month basis because we believe our results should earn your business, not a contract. Most clients stay because the ROI speaks for itself.",
      },
    },
    {
      "@type": "Question",
      name: "What does your SEO process look like for high-risk businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our SEO process includes a comprehensive technical audit, keyword research targeting buyer-intent terms in your niche, content strategy built around compliance-safe language, on-page optimization, internal linking architecture, and ongoing content production. We focus on building sustainable organic traffic that doesn't rely on risky tactics.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I expect to see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paid advertising campaigns typically generate leads within the first 1-2 weeks. SEO results generally begin appearing within 60-90 days, with significant ranking improvements by month 4-6. We provide transparent monthly reporting so you can track progress at every stage.",
      },
    },
  ],
};

/* ── Service data ─────────────────────────────── */
const services = [
  {
    icon: Search,
    title: "SEO & Organic Growth",
    desc: "Dominate search results with compliant, high-intent keyword strategies built for restricted industries.",
  },
  {
    icon: BarChart3,
    title: "Paid Advertising",
    desc: "Run profitable ad campaigns on X, Reddit, and programmatic networks — even when other platforms restrict you.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    desc: "Build 24/7 systems that nurture leads, recover carts, and drive repeat purchases on autopilot.",
  },
  {
    icon: Globe,
    title: "Website Design & CRO",
    desc: "High-converting websites and landing pages engineered to turn visitors into customers.",
  },
  {
    icon: Shield,
    title: "Compliance Strategy",
    desc: "Navigate platform policies and ad restrictions with messaging that stays compliant and converts.",
  },
  {
    icon: TrendingUp,
    title: "Content & Email Marketing",
    desc: "SEO content, email sequences, and retention flows that build long-term brand authority and revenue.",
  },
];

/* ── Stats ─────────────────────────────────────── */
const stats = [
  { value: "150+", label: "Clients Served" },
  { value: "3.5x", label: "Avg. ROAS" },
  { value: "89%", label: "Client Retention" },
  { value: "2M+", label: "Leads Generated" },
];

/* ── Process steps ─────────────────────────────── */
const process = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We analyze your business, competitors, and market position to identify the highest-impact growth opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    desc: "A custom marketing blueprint with clear milestones, KPIs, and a compliant approach tailored to your industry.",
  },
  {
    step: "03",
    title: "Build & Launch",
    desc: "We implement everything — SEO, ads, automation, landing pages — so you can focus on running your business.",
  },
  {
    step: "04",
    title: "Optimize & Scale",
    desc: "Continuous data-driven optimization, monthly reporting, and strategic scaling to maximize your ROI.",
  },
];

/* ── FAQ data ──────────────────────────────────── */
const faqs = [
  {
    q: "What industries does Harbor Point Marketing specialize in?",
    a: "We specialize in high-risk industries that most agencies won't touch — including peptides, supplements, nutraceuticals, CBD, prediction markets, and other restricted verticals. Our team understands the compliance landscape and platform restrictions specific to these categories.",
  },
  {
    q: "How do you run ads for restricted industries?",
    a: "We use a multi-platform approach focusing on channels with more flexible policies such as X (Twitter), Reddit, and select programmatic networks. We also build strong organic systems through SEO and content marketing to reduce dependence on any single ad platform.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. We operate on a month-to-month basis because we believe our results should earn your business, not a contract. Most clients stay because the ROI speaks for itself.",
  },
  {
    q: "What does your SEO process look like for high-risk businesses?",
    a: "Our SEO process includes a comprehensive technical audit, keyword research targeting buyer-intent terms in your niche, content strategy built around compliance-safe language, on-page optimization, internal linking architecture, and ongoing content production.",
  },
  {
    q: "How quickly can I expect to see results?",
    a: "Paid advertising campaigns typically generate leads within the first 1-2 weeks. SEO results generally begin appearing within 60-90 days, with significant ranking improvements by month 4-6. We provide transparent monthly reporting so you can track progress.",
  },
];

/* ══════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="min-h-screen text-[#0f172a]">
        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section
          id="home"
          aria-label="Hero"
          className="relative overflow-hidden bg-gradient-to-b from-[#dbeafe] via-[#e8f0fe] to-[#eef4fb]"
        >
          {/* Decorative orbs */}
          <div
            className="glow-orb glow-orb--animated"
            style={{
              width: 600,
              height: 600,
              top: -180,
              left: -150,
              background:
                "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
            }}
          />
          <div
            className="glow-orb glow-orb--animated"
            style={{
              width: 450,
              height: 450,
              bottom: -100,
              right: -80,
              background:
                "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)",
              animationDelay: "5s",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
            <div>
              <Reveal delay={0.1} variant="soft">
                <p className="badge-shimmer inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/80 px-5 py-2.5 text-sm font-medium text-blue-700 shadow-sm backdrop-blur-sm">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                  Trusted by 150+ High-Risk Brands
                </p>
              </Reveal>

              <Reveal delay={0.2} variant="strong">
                <h1 className="mt-7 text-[2.75rem] font-bold leading-[1.1] tracking-tight text-slate-900 md:text-[3.75rem] lg:text-[4.25rem]">
                  Marketing That Helps{" "}
                  <span className="text-gradient-hero">High-Risk Businesses</span>{" "}
                  Grow Faster
                </h1>
              </Reveal>

              <Reveal delay={0.35} variant="soft">
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
                  We build compliant growth systems — SEO, paid ads, automation &
                  conversion optimization — for peptide companies, supplements,
                  CBD, and restricted industries.
                </p>
              </Reveal>

              <Reveal delay={0.5} variant="soft">
                <div className="mt-8 flex flex-wrap gap-4">
                  <ScrollButton target="services" className="btn-primary">
                    <span className="flex items-center gap-2">
                      Explore Our Services
                      <ArrowRight size={18} />
                    </span>
                  </ScrollButton>
                  <ScrollButton target="contact" className="btn-secondary">
                    Get a Free Audit
                  </ScrollButton>
                </div>
              </Reveal>

              <Reveal delay={0.6} variant="soft">
                <ul
                  className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-slate-500"
                  role="list"
                >
                  {[
                    "No long-term contracts",
                    "Done-for-you implementation",
                    "Custom to your industry",
                  ].map((item, i) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        className="dot-pulse h-2.5 w-2.5 rounded-full bg-emerald-500"
                        aria-hidden="true"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.35} variant="strong">
              <div className="image-shine overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-900/8 ring-1 ring-blue-100/50">
                <img
                  src="/peptides1.png"
                  alt="Marketing analytics dashboard showing growth metrics for a high-risk peptide brand"
                  className="w-full"
                  width={600}
                  height={400}
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SOCIAL PROOF / STATS
        ═══════════════════════════════════════ */}
        <section
          aria-label="Key metrics"
          className="relative border-y border-blue-100/50 bg-white/60 backdrop-blur-sm"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-blue-100/50 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.1} variant="soft">
                <div className="stat-item px-6 py-10 text-center md:py-12">
                  <p className="text-3xl font-bold text-blue-600 md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ABOUT
        ═══════════════════════════════════════ */}
        <section
          id="about"
          aria-label="About Harbor Point Marketing"
          className="relative overflow-hidden"
        >
          <div
            className="dot-pattern pointer-events-none absolute inset-0 opacity-[0.025]"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
            <Reveal delay={0.15} variant="strong">
              <div className="image-shine overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-900/8 ring-1 ring-blue-100/50">
                <img
                  src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80"
                  alt="Business analytics dashboard on laptop showing marketing performance data"
                  className="h-[480px] w-full object-cover"
                  width={1200}
                  height={480}
                  loading="lazy"
                />
              </div>
            </Reveal>

            <div>
              <Reveal delay={0.25} variant="strong">
                <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
                  Your Complete Growth{" "}
                  <span className="text-gradient">Operating System</span>
                </h2>
              </Reveal>

              <Reveal delay={0.4} variant="soft">
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  We don&apos;t just run ads or post content. We build
                  end-to-end marketing infrastructure — automation, SEO, paid
                  acquisition, and sales funnels — that works around the clock
                  so your high-risk business can scale without limits.
                </p>
              </Reveal>

              <Reveal delay={0.5} variant="soft">
                <ul className="mt-8 space-y-4" role="list">
                  {[
                    "Custom automation that runs your marketing 24/7",
                    "Industry-specific systems built for your niche",
                    "Full integration of your sales and operations",
                    "Done-for-you implementation — not just consulting",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-[16px] text-slate-700 transition hover:bg-white/70"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-blue-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════
            SERVICES
        ═══════════════════════════════════════ */}
        <section
          id="services"
          aria-label="Our marketing services"
          className="relative overflow-hidden scroll-mt-24"
        >
          <div
            className="glow-orb"
            style={{
              width: 700,
              height: 700,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <Reveal delay={0.1} variant="strong">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  What We Do
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Marketing Services for{" "}
                  <span className="text-gradient">High-Risk Brands</span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
                  Everything you need to acquire customers, build authority, and
                  scale — even in the most restricted categories.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc, i) => (
                <Reveal key={svc.title} delay={0.15 + i * 0.08} variant="soft">
                  <article className="glass-card group rounded-2xl p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                      <svc.icon size={22} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-500">
                      {svc.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════
            PROCESS
        ═══════════════════════════════════════ */}
        <section
          id="process"
          aria-label="Our process"
          className="relative overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <Reveal delay={0.1} variant="strong">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  How It Works
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  A Proven <span className="text-gradient">4-Step Process</span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
                  From audit to scale — we handle everything so you can focus on
                  your business.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={0.15 + i * 0.1} variant="soft">
                  <div className="glass-card relative rounded-2xl p-8 text-center">
                    <span className="text-5xl font-extrabold text-blue-100">
                      {p.step}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-500">
                      {p.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════
            WHY US / TRUST
        ═══════════════════════════════════════ */}
        <section aria-label="Why choose us" className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <Reveal delay={0.1} variant="strong">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Why Harbor Point
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Built for Businesses{" "}
                  <span className="text-gradient">Others Won&apos;t Touch</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Compliance-First Approach",
                  desc: "We understand the rules — from platform ad policies to FTC regulations — so your marketing stays live and your brand stays protected.",
                },
                {
                  icon: Target,
                  title: "Industry Expertise",
                  desc: "Peptides, supplements, CBD, prediction markets — we've scaled businesses in every high-risk vertical and know what works.",
                },
                {
                  icon: Users,
                  title: "Dedicated Partnership",
                  desc: "No junior account managers or cookie-cutter strategies. You work directly with senior marketers who treat your business as their own.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.15 + i * 0.1} variant="soft">
                  <div className="glass-card group rounded-2xl p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                      <item.icon size={24} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════
            FAQ (SEO-rich)
        ═══════════════════════════════════════ */}
        <section
          id="faq"
          aria-label="Frequently asked questions"
          className="relative overflow-hidden"
        >
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Reveal delay={0.1} variant="strong">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  FAQ
                </p>
                <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  Common <span className="text-gradient">Questions</span>
                </h2>
              </div>
            </Reveal>

            <div className="mt-14 space-y-4">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={0.12 + i * 0.06} variant="soft">
                  <details className="glass-card group rounded-2xl">
                    <summary className="flex cursor-pointer items-center justify-between px-7 py-5">
                      <h3 className="pr-4 text-[16px] font-semibold text-slate-900">
                        {faq.q}
                      </h3>
                      <ChevronDown
                        size={20}
                        className="faq-chevron shrink-0 text-slate-400"
                      />
                    </summary>
                    <div className="px-7 pb-6 text-[15px] leading-7 text-slate-600">
                      {faq.a}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════
            CONTACT / SERVICE REQUEST
        ═══════════════════════════════════════ */}
        <section
          id="contact"
          aria-label="Contact and service request form"
          className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 scroll-mt-24 md:py-32"
        >
          <div
            className="glow-orb"
            style={{
              width: 600,
              height: 600,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <Reveal delay={0.1} variant="strong">
            <div className="relative text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Get Started
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                Request Your{" "}
                <span className="text-gradient">Free Consultation</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
                Select the services you need, tell us about your business, and
                we&apos;ll build a custom growth plan for you.
              </p>
            </div>
          </Reveal>

          <form
            action="https://formspree.io/f/xlgplbkp"
            method="POST"
            className="relative mt-16 grid gap-10 md:grid-cols-2"
          >
            {/* ── Service checkboxes ── */}
            <Reveal delay={0.2} variant="soft">
              <fieldset className="glass-card rounded-2xl p-8">
                <legend className="text-xl font-bold text-slate-900">
                  Choose Services
                </legend>
                <p className="mt-1.5 text-sm text-slate-500">
                  Check all services you&apos;re interested in.
                </p>

                <div className="mt-7 space-y-7">
                  <div role="group" aria-labelledby="group-web-seo">
                    <h3
                      id="group-web-seo"
                      className="text-sm font-bold uppercase tracking-wider text-blue-600"
                    >
                      Website / SEO / Systems
                    </h3>
                    <div className="mt-3 space-y-2 text-[15px] text-slate-700">
                      {[
                        "Website build / redesign",
                        "Website optimization (speed, mobile, UX)",
                        "Landing page creation (high-converting)",
                        "Sales funnel setup",
                        "Basic SEO setup (site-wide)",
                        "Keyword research & targeting",
                        "Content creation (SEO articles)",
                        "On-page SEO optimization",
                        "Product page optimization",
                        "Internal linking optimization",
                        "Email capture setup (popups / forms)",
                        "  \u21B3 Welcome email sequence",
                        "  \u21B3 Abandoned cart recovery setup",
                        "CRM setup & integration",
                        "Lead tracking system setup",
                        "Ongoing website maintenance",
                        "Initial audit & strategy report",
                        "Market positioning strategy",
                        "Offer / funnel optimization",
                        "Conversion rate optimization (CRO)",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1.5 transition hover:bg-blue-50/60"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-0.5 h-4 w-4 rounded border-slate-300"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div role="group" aria-labelledby="group-ads">
                    <h3
                      id="group-ads"
                      className="text-sm font-bold uppercase tracking-wider text-blue-600"
                    >
                      Ads / Growth / Reporting
                    </h3>
                    <div className="mt-3 space-y-2 text-[15px] text-slate-700">
                      {[
                        "Ad account setup (Meta / TikTok / etc.)",
                        "Campaign launch & management",
                        "Creative production (images)",
                        "AI-assisted + edited creatives",
                        "Ad copywriting",
                        "Retargeting setup",
                        "Traffic campaign setup",
                        "Low-restriction platform ads (X / Reddit)",
                        "Google Ads compliance guidance",
                        "Email marketing campaigns",
                        "Upsell & cross-sell flows",
                        "Re-engagement campaigns",
                        "Retention email sequences",
                        "Monthly performance report",
                        "ROAS tracking",
                        "Conversion tracking setup",
                        "Funnel performance tracking",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1.5 transition hover:bg-blue-50/60"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-0.5 h-4 w-4 rounded border-slate-300"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div role="group" aria-labelledby="group-addons">
                    <h3
                      id="group-addons"
                      className="text-sm font-bold uppercase tracking-wider text-blue-600"
                    >
                      Advanced Add-Ons
                    </h3>
                    <div className="mt-3 space-y-2 text-[15px] text-slate-700">
                      {[
                        "AI chatbot (website)",
                        "UGC video creatives / editing",
                        "Influencer outreach setup",
                        "Affiliate program setup",
                        "Programmatic SEO setup (scaled pages)",
                        "Lead generation system (automated)",
                        "Custom automation workflows (Zapier / Make)",
                        "Reputation / review management",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1.5 transition hover:bg-blue-50/60"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-0.5 h-4 w-4 rounded border-slate-300"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>
            </Reveal>

            {/* ── Contact form ── */}
            <Reveal delay={0.3} variant="soft">
              <div className="glass-card rounded-2xl p-8">
                <input
                  type="hidden"
                  name="_subject"
                  value="New Service Request from Harbor Point Marketing"
                />

                <h3 className="text-xl font-bold text-slate-900">
                  Tell Us About Your Business
                </h3>
                <p className="mt-1.5 text-sm text-slate-500">
                  We&apos;ll review your request and get back to you within 24
                  hours.
                </p>

                <div className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="field-name"
                      className="mb-1.5 block text-sm font-medium text-slate-900"
                    >
                      Name
                    </label>
                    <input
                      id="field-name"
                      type="text"
                      name="name"
                      required
                      className="input-premium"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-email"
                      className="mb-1.5 block text-sm font-medium text-slate-900"
                    >
                      Email
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      name="email"
                      required
                      className="input-premium"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-company"
                      className="mb-1.5 block text-sm font-medium text-slate-900"
                    >
                      Company
                    </label>
                    <input
                      id="field-company"
                      type="text"
                      name="company"
                      className="input-premium"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-industry"
                      className="mb-1.5 block text-sm font-medium text-slate-900"
                    >
                      Industry
                    </label>
                    <input
                      id="field-industry"
                      type="text"
                      name="industry"
                      className="input-premium"
                      placeholder="e.g. peptides, supplements, CBD, prediction markets"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-message"
                      className="mb-1.5 block text-sm font-medium text-slate-900"
                    >
                      What do you need most right now?
                    </label>
                    <textarea
                      id="field-message"
                      name="message"
                      rows={5}
                      className="input-premium"
                      placeholder="Tell us about your goals, challenges, and timeline."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-base">
                    <span className="flex items-center justify-center gap-2">
                      Submit Request
                      <ArrowRight size={18} />
                    </span>
                  </button>
                </div>

                {/* Contact info */}
                <address className="mt-10 space-y-6 not-italic">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: (
                        <a
                          href="mailto:info@notbadcapital.com"
                          className="text-slate-500 transition hover:text-blue-600"
                        >
                          info@notbadcapital.com
                        </a>
                      ),
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: (
                        <a
                          href="tel:+16575774455"
                          className="text-slate-500 transition hover:text-blue-600"
                        >
                          +1 (657) 577-4455
                        </a>
                      ),
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      content: (
                        <p className="text-slate-500">
                          6013 Warner Ave
                          <br />
                          Huntington Beach, CA 92647
                        </p>
                      ),
                    },
                  ].map((c) => (
                    <div key={c.title} className="flex items-start gap-4">
                      <div className="icon-glow flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/15">
                        <c.icon size={20} />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{c.title}</p>
                        <div className="mt-0.5 text-sm">{c.content}</div>
                      </div>
                    </div>
                  ))}
                </address>
              </div>
            </Reveal>
          </form>
        </section>
      </main>
    </>
  );
}
