import type { Metadata } from "next";
import {
  Search,
  BarChart3,
  Zap,
  Globe,
  Shield,
  TrendingUp,
  Megaphone,
  LineChart,
  Layers,
} from "lucide-react";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title: "Services — SEO, Paid Ads & Automation for High-Risk Businesses",
  description:
    "Harbor Point Marketing offers SEO, paid advertising, marketing automation, compliance strategy, and conversion optimization built specifically for peptide companies, supplements, CBD, and restricted industries.",
  alternates: {
    canonical: "https://www.harborpointmarketingservices.com/services",
  },
  openGraph: {
    title: "Our Services | Harbor Point Marketing",
    description:
      "Full-service marketing solutions for high-risk industries. SEO, paid ads, automation & more.",
    url: "https://www.harborpointmarketingservices.com/services",
    type: "website",
  },
};

const services = [
  {
    icon: Search,
    title: "SEO & Organic Growth",
    text: "Technical audits, keyword targeting, content strategy, and on-page optimization that builds long-term organic visibility for high-risk products.",
  },
  {
    icon: BarChart3,
    title: "Paid Advertising",
    text: "Multi-platform campaigns on X, Reddit, and programmatic networks designed to drive traffic, leads, and revenue — even in restricted categories.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    text: "Email sequences, lead nurturing, abandoned cart recovery, and CRM integrations that work 24/7 to grow your revenue on autopilot.",
  },
  {
    icon: Globe,
    title: "Website Design & CRO",
    text: "High-converting websites and landing pages engineered with speed, mobile-first UX, and conversion rate optimization at their core.",
  },
  {
    icon: Shield,
    title: "Compliance Strategy",
    text: "Navigate platform ad policies, FTC regulations, and industry restrictions with messaging frameworks that stay compliant and convert.",
  },
  {
    icon: TrendingUp,
    title: "Content & Email Marketing",
    text: "SEO blog content, email campaigns, retention flows, and re-engagement sequences that build authority and drive repeat purchases.",
  },
  {
    icon: Megaphone,
    title: "Social Media & UGC",
    text: "Platform-native content, UGC video production, and community-building strategies tailored for high-risk brands that need creative workarounds.",
  },
  {
    icon: LineChart,
    title: "Analytics & Reporting",
    text: "Conversion tracking, ROAS measurement, funnel analytics, and monthly performance reports that give you full visibility into your growth.",
  },
  {
    icon: Layers,
    title: "Sales Funnel Design",
    text: "End-to-end funnel architecture — from lead capture to upsell flows — built to maximize customer lifetime value in your niche.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen text-[#0f172a]">
      <section
        id="services"
        aria-label="Marketing services overview"
        className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:py-32"
      >
        {/* Background glow */}
        <div
          className="glow-orb"
          style={{
            width: 600,
            height: 600,
            top: -120,
            right: -120,
            background:
              "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <Reveal delay={0.1} variant="strong">
          <div className="relative text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Services
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Marketing Solutions for{" "}
              <span className="text-gradient">High-Risk Businesses</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
              We help high-risk businesses grow through SEO, paid advertising,
              automation, and conversion-focused marketing systems built for
              compliance.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <Reveal key={item.title} delay={0.12 + i * 0.06} variant="soft">
              <article className="glass-card group rounded-2xl p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                  <item.icon size={22} />
                </div>
                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-slate-500">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
