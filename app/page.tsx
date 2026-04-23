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
  Bot,
  BrainCircuit,
  Clock,
  Layers,
  Sprout,
  LineChart,
} from "lucide-react";
import Reveal from "./components/reveal";
import ScrollButton from "./components/scroll-button";
import AiDashboard from "./components/ai-dashboard";
import type { Metadata } from "next";

/* ── SEO metadata ─────────────────────────────── */
export const metadata: Metadata = {
  title: "Harbor Point Marketing | AI-Powered SEO & Marketing for High-Risk Businesses",
  description:
    "Harbor Point Marketing uses proprietary AI marketing technology to help high-risk brands — peptides, supplements, CBD, nutraceuticals, and restricted industries — build long-term SEO frameworks, scale paid advertising, and automate growth systems.",
  keywords: [
    "high risk marketing agency",
    "AI SEO marketing",
    "high risk SEO agency",
    "peptide marketing",
    "supplement marketing agency",
    "CBD marketing",
    "nutraceutical marketing",
    "restricted industry marketing",
    "AI marketing robot",
    "long term SEO strategy",
    "SEO framework high risk",
    "marketing automation high risk",
    "conversion rate optimization",
    "Harbor Point Marketing",
    "compliant marketing",
    "high risk business growth",
    "AI powered marketing agency",
  ],
  openGraph: {
    title: "Harbor Point Marketing | AI-Powered SEO & Marketing for High-Risk Industries",
    description:
      "We use proprietary AI marketing technology to help high-risk brands build long-term SEO frameworks, run compliant paid ads, and automate growth. Peptides, supplements, CBD & more.",
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
    title: "Harbor Point Marketing | AI-Powered High-Risk Business Growth",
    description:
      "AI-powered SEO frameworks, paid ads & marketing systems for peptide companies, supplements, CBD, and restricted industries. Long-term growth, not quick fixes.",
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
    "AI-powered marketing agency specializing in high-risk industries including peptides, supplements, CBD, and restricted verticals. We use proprietary AI marketing technology to build long-term SEO frameworks, deliver compliant paid advertising, marketing automation, and conversion optimization.",
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
    "AI-powered SEO",
    "peptide marketing",
    "supplement marketing",
    "CBD marketing",
    "restricted industry advertising",
    "compliant digital marketing",
    "long-term SEO strategy",
    "AI marketing automation",
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
    {
      "@type": "Question",
      name: "What is your AI Marketing Robot and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our proprietary AI Marketing Engine continuously analyzes your website structure, keyword rankings, competitor movements, and content performance. It automatically identifies SEO gaps, generates optimization recommendations, monitors technical health, and helps produce compliant content — all customized for high-risk industries that require extra compliance awareness.",
      },
    },
    {
      "@type": "Question",
      name: "Why is SEO a long-term investment and not a one-time project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO is a compounding asset — unlike paid ads that stop the moment you stop paying, SEO builds equity over time. Search algorithms constantly evolve, competitors publish new content, and user behavior shifts. A long-term SEO strategy ensures your rankings grow month over month, your organic traffic compounds, and your cost per acquisition decreases over time. Most of our clients see their best ROI after 6-12 months of consistent SEO work.",
      },
    },
  ],
};

/* ── Service data ─────────────────────────────── */
const services = [
  {
    icon: Search,
    title: "AI-Powered SEO Framework",
    desc: "Our AI engine builds and continuously optimizes your SEO architecture — technical audits, keyword mapping, content gaps, and internal linking — for sustainable long-term rankings.",
  },
  {
    icon: BarChart3,
    title: "Paid Advertising",
    desc: "Run profitable ad campaigns on X, Reddit, and programmatic networks — even when other platforms restrict you. AI-optimized targeting and bidding.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    desc: "Build 24/7 AI-driven systems that nurture leads, recover carts, segment audiences, and drive repeat purchases on autopilot.",
  },
  {
    icon: Globe,
    title: "Website Design & CRO",
    desc: "High-converting websites and landing pages with SEO-first architecture engineered to turn visitors into customers.",
  },
  {
    icon: Shield,
    title: "Compliance Strategy",
    desc: "Navigate platform policies and ad restrictions with AI-informed messaging frameworks that stay compliant and convert.",
  },
  {
    icon: TrendingUp,
    title: "Content & Email Marketing",
    desc: "AI-assisted SEO content, email sequences, and retention flows that compound your organic authority month over month.",
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
    q: "What is your AI Marketing Robot and how does it work?",
    a: "Our proprietary AI Marketing Engine continuously analyzes your website structure, keyword rankings, competitor movements, and content performance. It automatically identifies SEO gaps, generates optimization recommendations, monitors technical health, and helps produce compliant content — all customized for high-risk industries that require extra compliance awareness.",
  },
  {
    q: "Why is SEO a long-term investment?",
    a: "SEO is a compounding asset — unlike paid ads that stop the moment you stop paying, SEO builds equity over time. Search algorithms constantly evolve, competitors publish new content, and user behavior shifts. A long-term SEO strategy ensures your rankings grow month over month, your organic traffic compounds, and your cost per acquisition decreases. Most clients see their best ROI after 6-12 months of consistent work.",
  },
  {
    q: "How do you run ads for restricted industries?",
    a: "We use a multi-platform approach focusing on channels with more flexible policies such as X (Twitter), Reddit, and select programmatic networks. We also build strong organic systems through SEO and content marketing to reduce dependence on any single ad platform.",
  },
  {
    q: "What does your SEO framework process look like?",
    a: "Our AI-powered SEO process starts with a deep technical audit, then builds a keyword architecture targeting buyer-intent terms in your niche. From there we create a content strategy with compliance-safe language, optimize on-page elements, build internal linking structures, and continuously produce and refine content. Our AI monitors everything 24/7 and flags opportunities in real-time.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. We operate month-to-month because we believe our results should earn your business, not a contract. That said, SEO is inherently a long-term strategy — clients who commit to 6-12 months see exponentially better results as their organic rankings compound.",
  },
  {
    q: "How quickly can I expect to see results?",
    a: "Paid advertising campaigns typically generate leads within 1-2 weeks. For SEO, you'll see initial improvements in 60-90 days, with significant ranking gains by month 4-6. The real magic of SEO is its compounding nature — months 6-12 is where organic traffic growth truly accelerates.",
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

      <main className="min-h-screen text-[#0c1222]">
        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section
          id="home"
          aria-label="Hero"
          className="noise-overlay relative overflow-hidden bg-gradient-to-b from-[#dbeafe] via-[#e8f1fe] to-[#f0f4fa]"
        >
          {/* Grid pattern */}
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />

          {/* Decorative orbs */}
          <div
            className="glow-orb glow-orb--animated"
            style={{
              width: 700,
              height: 700,
              top: -200,
              left: -180,
              background:
                "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 65%)",
            }}
          />
          <div
            className="glow-orb glow-orb--animated"
            style={{
              width: 500,
              height: 500,
              bottom: -120,
              right: -100,
              background:
                "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 65%)",
              animationDelay: "5s",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-28 md:grid-cols-2 md:py-36">
            <div>
              <Reveal delay={0.1} variant="soft">
                <p className="badge-shimmer inline-flex items-center gap-2.5 rounded-full border border-blue-200/50 bg-white/85 px-5 py-2.5 text-[13px] font-semibold text-blue-700 shadow-sm backdrop-blur-md">
                  <Bot size={15} className="text-blue-500" />
                  AI-Powered Marketing for High-Risk Brands
                </p>
              </Reveal>

              <Reveal delay={0.2} variant="strong">
                <h1 className="mt-8 text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-[3.75rem] lg:text-[4.5rem]">
                  AI-Driven SEO &amp;{" "}
                  <br className="hidden lg:block" />
                  Marketing for{" "}
                  <span className="text-gradient-hero">High-Risk Businesses</span>
                </h1>
              </Reveal>

              <Reveal delay={0.35} variant="soft">
                <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-slate-500 md:text-lg">
                  We use our proprietary AI Marketing Engine to build long-term
                  SEO frameworks, run compliant paid ads, and automate growth
                  systems — for peptide companies, supplements, CBD, and
                  restricted industries.
                </p>
              </Reveal>

              <Reveal delay={0.5} variant="soft">
                <div className="mt-9 flex flex-wrap gap-4">
                  <ScrollButton target="services" className="btn-primary">
                    <span className="flex items-center gap-2">
                      Explore Our Services
                      <ArrowRight size={18} />
                    </span>
                  </ScrollButton>
                  <ScrollButton target="contact" className="btn-secondary">
                    Get a Custom Audit
                  </ScrollButton>
                </div>
              </Reveal>

              <Reveal delay={0.6} variant="soft">
                <ul
                  className="mt-11 flex flex-wrap gap-x-8 gap-y-3 text-[14px] font-medium text-slate-400"
                  role="list"
                >
                  {[
                    "Proprietary AI Marketing Robot",
                    "Long-term SEO framework building",
                    "Done-for-you implementation",
                  ].map((item, i) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span
                        className="dot-pulse h-2 w-2 rounded-full bg-emerald-500"
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
              <AiDashboard />
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            SOCIAL PROOF / STATS
        ═══════════════════════════════════════ */}
        <section
          aria-label="Key metrics"
          className="relative border-y border-blue-100/40 bg-white/70 backdrop-blur-md"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-blue-100/40 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.1} variant="soft">
                <div className="stat-item px-6 py-11 text-center md:py-14">
                  <p className="stat-value text-3xl font-extrabold md:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2.5 text-[13px] font-semibold uppercase tracking-wider text-slate-400">
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
                  Your AI-Powered{" "}
                  <span className="text-gradient">Growth Engine</span>
                </h2>
              </Reveal>

              <Reveal delay={0.4} variant="soft">
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  We don&apos;t just run ads or post content. Our AI Marketing
                  Robot continuously analyzes your SEO framework, identifies
                  ranking opportunities, and builds the infrastructure — automation,
                  content, paid acquisition, and funnels — that compounds your
                  growth month over month.
                </p>
              </Reveal>

              <Reveal delay={0.5} variant="soft">
                <ul className="mt-8 space-y-4" role="list">
                  {[
                    "AI-powered SEO monitoring and optimization 24/7",
                    "Long-term framework building — not quick fixes",
                    "Industry-specific systems for your high-risk niche",
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
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  What We Do
                </p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  Marketing Services for{" "}
                  <span className="text-gradient">High-Risk Brands</span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
                  Everything you need to acquire customers, build authority, and
                  scale — even in the most restricted categories.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc, i) => (
                <Reveal key={svc.title} delay={0.15 + i * 0.08} variant="soft">
                  <article className="glass-card group rounded-2xl p-8">
                    <div className="icon-premium flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-lg shadow-blue-500/25 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-blue-500/30">
                      <svc.icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="mt-6 text-[19px] font-bold tracking-tight text-slate-900">
                      {svc.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-7 text-slate-500">
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
            AI MARKETING ENGINE
        ═══════════════════════════════════════ */}
        <section
          id="ai-engine"
          aria-label="Our AI Marketing Engine"
          className="relative overflow-hidden"
        >
          <div
            className="glow-orb glow-orb--animated"
            style={{
              width: 500,
              height: 500,
              top: -100,
              right: -100,
              background:
                "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
            <div className="grid items-center gap-14 md:grid-cols-2">
              <div>
                <Reveal delay={0.1} variant="strong">
                  <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                    Our Technology
                  </p>
                  <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                    Meet Our{" "}
                    <span className="text-gradient">AI Marketing Engine</span>
                  </h2>
                </Reveal>

                <Reveal delay={0.25} variant="soft">
                  <p className="mt-6 text-lg leading-8 text-slate-600">
                    Unlike traditional agencies that rely on manual processes, Harbor
                    Point deploys a proprietary AI Marketing Robot that works around
                    the clock to analyze, optimize, and grow your digital presence.
                    It&apos;s like having a full marketing team that never sleeps.
                  </p>
                </Reveal>

                <Reveal delay={0.4} variant="soft">
                  <ul className="mt-8 space-y-4" role="list">
                    {[
                      {
                        icon: BrainCircuit,
                        text: "Continuously scans your site architecture and identifies SEO gaps",
                      },
                      {
                        icon: LineChart,
                        text: "Monitors keyword rankings and competitor movements in real-time",
                      },
                      {
                        icon: Layers,
                        text: "Generates content briefs and optimization recommendations automatically",
                      },
                      {
                        icon: Shield,
                        text: "Flags compliance issues before they become platform violations",
                      },
                      {
                        icon: Clock,
                        text: "Produces monthly insight reports with actionable next steps",
                      },
                    ].map((item) => (
                      <li
                        key={item.text}
                        className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-[16px] text-slate-700 transition hover:bg-white/70"
                      >
                        <item.icon
                          size={20}
                          className="mt-0.5 shrink-0 text-blue-500"
                        />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal delay={0.2} variant="strong">
                <div className="relative">
                  {/* AI Engine visual card */}
                  <div className="gradient-border glass-card rounded-3xl p-10 text-center">
                    <div className="icon-premium mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-sky-400 shadow-2xl shadow-blue-500/30">
                      <Bot size={48} className="text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-7 text-2xl font-bold tracking-tight text-slate-900">
                      Harbor Point AI Engine
                    </h3>
                    <p className="mt-3 text-[15px] text-slate-500">
                      Proprietary marketing intelligence built for high-risk industries
                    </p>

                    <div className="mt-9 grid grid-cols-2 gap-4">
                      {[
                        { val: "24/7", label: "Always Monitoring" },
                        { val: "100+", label: "SEO Signals Tracked" },
                        { val: "Real-time", label: "Competitor Analysis" },
                        { val: "Auto", label: "Content Recommendations" },
                      ].map((m) => (
                        <div
                          key={m.label}
                          className="rounded-xl bg-gradient-to-br from-blue-50/90 to-sky-50/60 px-4 py-5 transition-colors hover:from-blue-50 hover:to-sky-50"
                        >
                          <p className="stat-value text-xl font-extrabold">{m.val}</p>
                          <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════
            WHY SEO IS A LONG-TERM INVESTMENT
        ═══════════════════════════════════════ */}
        <section
          id="why-seo"
          aria-label="Why SEO is a long-term investment"
          className="relative overflow-hidden bg-gradient-to-b from-[#eef4fb] via-white to-[#eef4fb]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <Reveal delay={0.1} variant="strong">
              <div className="text-center">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  The Long Game
                </p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  Why SEO Is Your Best{" "}
                  <span className="text-gradient">Long-Term Investment</span>
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
                  Paid ads deliver instant traffic — but the moment you stop paying,
                  it vanishes. SEO is different. It&apos;s a compounding asset that
                  builds equity in your brand and delivers increasing returns over time.
                </p>
              </div>
            </Reveal>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Sprout,
                  title: "Compounding Growth",
                  desc: "Every piece of optimized content, every backlink, every technical improvement builds on the last. Month 6 is stronger than month 1. Month 12 is exponentially stronger. Your organic traffic snowballs.",
                },
                {
                  icon: TrendingUp,
                  title: "Decreasing Cost Per Lead",
                  desc: "As your rankings climb, your organic traffic increases — but your monthly investment stays flat. Over time, your effective cost per lead drops dramatically compared to paid channels.",
                },
                {
                  icon: Shield,
                  title: "Platform-Independent",
                  desc: "High-risk businesses face constant risk of ad account bans and policy changes. SEO gives you a traffic source that no platform can shut off — it's your own digital asset.",
                },
                {
                  icon: Target,
                  title: "Buyer-Intent Traffic",
                  desc: "People searching for your products on Google have high purchase intent. SEO captures demand at the exact moment someone is ready to buy — the highest-quality traffic you can get.",
                },
                {
                  icon: Clock,
                  title: "24/7 Lead Generation",
                  desc: "Your optimized pages work around the clock. While you sleep, your content ranks, attracts visitors, and generates leads. No ad spend required — just consistent SEO investment.",
                },
                {
                  icon: BarChart3,
                  title: "Competitive Moat",
                  desc: "Strong SEO authority is incredibly hard for competitors to replicate. The longer you invest, the deeper your moat becomes. First-mover advantage in SEO is real and lasting.",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.12 + i * 0.07} variant="soft">
                  <div className="glass-card group rounded-2xl p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                      <item.icon size={22} />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* SEO timeline visual */}
            <Reveal delay={0.3} variant="soft">
              <div className="mx-auto mt-20 max-w-4xl">
                <div className="glass-card rounded-3xl p-8 md:p-12">
                  <h3 className="text-center text-2xl font-bold text-slate-900">
                    The SEO Growth Timeline
                  </h3>
                  <p className="mt-2 text-center text-slate-500">
                    SEO is a marathon, not a sprint. Here&apos;s what to expect:
                  </p>
                  <div className="mt-10 grid gap-6 md:grid-cols-4">
                    {[
                      {
                        period: "Month 1-2",
                        title: "Foundation",
                        desc: "Technical audit, keyword research, site architecture, and on-page fixes. Building the infrastructure.",
                        color: "from-blue-400 to-blue-500",
                      },
                      {
                        period: "Month 3-4",
                        title: "Traction",
                        desc: "Content production ramps up, internal linking matures, early keyword movements appear in search console.",
                        color: "from-blue-500 to-sky-500",
                      },
                      {
                        period: "Month 5-8",
                        title: "Acceleration",
                        desc: "Rankings climb, organic traffic grows noticeably. Content compounds. Competitors start falling behind.",
                        color: "from-sky-500 to-cyan-500",
                      },
                      {
                        period: "Month 9-12+",
                        title: "Dominance",
                        desc: "Top rankings for high-value terms. Organic traffic delivers consistent leads. SEO becomes your #1 channel.",
                        color: "from-cyan-500 to-emerald-500",
                      },
                    ].map((phase) => (
                      <div key={phase.period} className="text-center">
                        <div
                          className={`mx-auto h-2 w-full rounded-full bg-gradient-to-r ${phase.color}`}
                        />
                        <p className="mt-4 text-sm font-bold text-blue-600">
                          {phase.period}
                        </p>
                        <p className="mt-1 text-base font-bold text-slate-900">
                          {phase.title}
                        </p>
                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {phase.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
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
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  How It Works
                </p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  A Proven <span className="text-gradient">4-Step Process</span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
                  From audit to scale — we handle everything so you can focus on
                  your business.
                </p>
              </div>
            </Reveal>

            <div className="process-grid relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={0.15 + i * 0.1} variant="soft">
                  <div className="glass-card relative rounded-2xl p-8 text-center">
                    <span className="stat-value text-5xl font-extrabold opacity-30">
                      {p.step}
                    </span>
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-7 text-slate-500">
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
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Why Harbor Point
                </p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
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
            CASE STUDY — BEFORE / AFTER
        ═══════════════════════════════════════ */}
        <section
          id="case-study"
          aria-label="Case study showing AI audit results"
          className="relative overflow-hidden bg-gradient-to-b from-[#eef4fb] via-[#e8f0fe] to-[#eef4fb]"
        >
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <Reveal delay={0.1} variant="strong">
              <div className="text-center">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Real Results
                </p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  See What Our{" "}
                  <span className="text-gradient">Audit Reveals</span>
                </h2>
                <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-500">
                  Every engagement starts with our AI Marketing Engine running a
                  comprehensive audit. Here&apos;s a real example of what we deliver
                  — and the transformation that follows.
                </p>
              </div>
            </Reveal>

            {/* Before / After cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* BEFORE card */}
              <Reveal delay={0.2} variant="soft">
                <div className="glass-card rounded-3xl p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-red-100 px-4 py-1.5 text-sm font-bold text-red-600">
                      Initial Audit
                    </span>
                  </div>

                  {/* Score circle */}
                  <div className="mt-8 flex items-center gap-8">
                    <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[6px] border-red-200 bg-red-50">
                      <div className="text-center">
                        <p className="text-4xl font-extrabold text-red-500">31</p>
                        <p className="text-sm text-red-400">/100</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-red-600">Critical</p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        Overall Marketing Score — zero social proof, no structured
                        data, single-page architecture, thin copy, mismatched email
                        domain, and no SEO footprint.
                      </p>
                    </div>
                  </div>

                  {/* Score breakdown */}
                  <div className="mt-8 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Score Breakdown
                    </p>
                    {[
                      { cat: "Content & Messaging", score: 28, status: "Critical" },
                      { cat: "Conversion Optimization", score: 28, status: "Critical" },
                      { cat: "SEO & Discoverability", score: 32, status: "Critical" },
                      { cat: "Competitive Positioning", score: 38, status: "Critical" },
                      { cat: "Brand & Trust", score: 28, status: "Critical" },
                      { cat: "Growth & Strategy", score: 31, status: "Critical" },
                    ].map((row) => (
                      <div key={row.cat} className="flex items-center gap-3">
                        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-red-400"
                            style={{ width: `${row.score}%` }}
                          />
                        </div>
                        <span className="w-8 text-right text-sm font-bold text-red-500">
                          {row.score}
                        </span>
                        <span className="w-36 truncate text-xs text-slate-500">
                          {row.cat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key findings */}
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Findings
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {[
                        "Zero social proof — no testimonials, case studies, or client logos",
                        "No structured data (schema markup) implemented",
                        "Single-page site architecture limiting Google indexing",
                        "No team section — agency appears faceless",
                        "Only one CTA on the entire page",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="mt-1 text-red-400">&#x2717;</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>

              {/* AFTER card */}
              <Reveal delay={0.3} variant="soft">
                <div className="glass-card relative rounded-3xl border-blue-200/50 p-8 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-bold text-emerald-600">
                      Post Optimization
                    </span>
                  </div>

                  {/* Score circle */}
                  <div className="mt-8 flex items-center gap-8">
                    <div className="score-glow relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[6px] border-emerald-200 bg-emerald-50">
                      <div className="text-center">
                        <p className="text-4xl font-extrabold text-emerald-500">
                          85
                        </p>
                        <p className="text-sm text-emerald-400">/100</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-emerald-600">
                        Excellent
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        After implementing our AI engine&apos;s recommendations —
                        multi-page architecture, FAQ schema, structured data, new
                        content sections, SEO framework, and conversion optimization.
                      </p>
                    </div>
                  </div>

                  {/* Score breakdown */}
                  <div className="mt-8 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Score Breakdown
                    </p>
                    {[
                      { cat: "Content & Messaging", score: 82 },
                      { cat: "Conversion Optimization", score: 80 },
                      { cat: "SEO & Discoverability", score: 90 },
                      { cat: "Competitive Positioning", score: 85 },
                      { cat: "Brand & Trust", score: 82 },
                      { cat: "Growth & Strategy", score: 88 },
                    ].map((row) => (
                      <div key={row.cat} className="flex items-center gap-3">
                        <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-full rounded-full bg-emerald-400"
                            style={{ width: `${row.score}%` }}
                          />
                        </div>
                        <span className="w-8 text-right text-sm font-bold text-emerald-500">
                          {row.score}
                        </span>
                        <span className="w-36 truncate text-xs text-slate-500">
                          {row.cat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Improvements made */}
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      What We Implemented
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {[
                        "AI-powered SEO framework with JSON-LD structured data",
                        "Multi-section architecture with stats, process, FAQ, case study",
                        "7 FAQ items with schema markup for Google rich snippets",
                        "AI Marketing Engine showcase building trust and credibility",
                        "Multiple CTAs, conversion-optimized contact form",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Impact summary */}
            <Reveal delay={0.4} variant="soft">
              <div className="mx-auto mt-12 max-w-4xl">
                <div className="glass-card rounded-3xl p-8 md:p-10">
                  <div className="grid gap-8 text-center md:grid-cols-4">
                    {[
                      { before: "31", after: "85", label: "Overall Score", unit: "/100" },
                      { before: "0", after: "7", label: "FAQ Rich Snippets", unit: " items" },
                      { before: "1", after: "8+", label: "Indexed Pages", unit: " pages" },
                      { before: "0", after: "3", label: "Schema Types", unit: " schemas" },
                    ].map((m) => (
                      <div key={m.label}>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-lg font-bold text-red-400 line-through">
                            {m.before}
                          </span>
                          <ArrowRight size={16} className="text-slate-300" />
                          <span className="text-2xl font-extrabold text-emerald-500">
                            {m.after}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-slate-500">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-8 text-center text-slate-500">
                    This is the same report our AI Marketing Engine generates for every
                    new client. We audit first, then build a prioritized action plan
                    to maximize your marketing ROI — fast.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════
            TEAM / FOUNDER
        ═══════════════════════════════════════ */}
        <section
          id="team"
          aria-label="Our team"
          className="relative overflow-hidden bg-gradient-to-b from-[#eef4fb] via-white to-[#eef4fb]"
        >
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
            <Reveal delay={0.1} variant="strong">
              <div className="text-center">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  The Team Behind The AI
                </p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                  Real People,{" "}
                  <span className="text-gradient">Real Expertise</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2} variant="soft">
              <div className="mx-auto mt-14 max-w-3xl">
                <div className="glass-card rounded-3xl p-8 md:p-12">
                  <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                    <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-sky-400 text-4xl font-bold text-white shadow-xl shadow-blue-500/20">
                      HP
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">
                        Harbor Point Marketing Team
                      </h3>
                      <p className="mt-1 text-sm font-medium text-blue-600">
                        Huntington Beach, CA
                      </p>
                      <p className="mt-4 text-[15px] leading-7 text-slate-600">
                        We&apos;re a team of senior digital marketers, SEO
                        engineers, and AI specialists who have worked exclusively
                        with high-risk businesses for years. We built our proprietary
                        AI Marketing Engine because we saw how poorly traditional
                        agencies served restricted industries — they either didn&apos;t
                        understand compliance, or they treated high-risk clients as
                        an afterthought.
                      </p>
                      <p className="mt-4 text-[15px] leading-7 text-slate-600">
                        At Harbor Point, high-risk <em>is</em> our speciality. Every
                        member of our team understands the unique challenges of
                        marketing peptides, supplements, CBD, and other restricted
                        products. We combine deep industry knowledge with AI-powered
                        technology to deliver results that compound over time.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {[
                          "High-Risk Industry Specialists",
                          "AI & SEO Engineers",
                          "Compliance Experts",
                          "Conversion Strategists",
                        ].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
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
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  FAQ
                </p>
                <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
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
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-blue-600">
                Get Started
              </p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Start Your{" "}
                <span className="text-gradient">Growth Journey</span>
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
