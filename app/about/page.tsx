import type { Metadata } from "next";
import {
  Bot,
  Shield,
  Users,
  Target,
  TrendingUp,
  Award,
  CheckCircle2,
} from "lucide-react";
import Reveal from "../components/reveal";
import ScrollButton from "../components/scroll-button";

export const metadata: Metadata = {
  title: "About Us — AI-Powered Marketing Agency for High-Risk Industries",
  description:
    "Learn about Harbor Point Marketing — the AI-powered marketing agency built exclusively for high-risk businesses. Our team of SEO engineers, AI specialists, and compliance experts help peptide, supplement, and CBD brands scale with long-term growth strategies.",
  alternates: {
    canonical: "https://www.harborpointmarketingservices.com/about",
  },
  openGraph: {
    title: "About Harbor Point Marketing | AI-Powered High-Risk Marketing",
    description:
      "Meet the team and technology behind Harbor Point Marketing — AI-driven SEO and marketing systems for restricted industries.",
    url: "https://www.harborpointmarketingservices.com/about",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Harbor Point Marketing Services",
  description:
    "Harbor Point Marketing is an AI-powered marketing agency specializing in high-risk industries including peptides, supplements, CBD, and restricted verticals.",
  url: "https://www.harborpointmarketingservices.com/about",
  mainEntity: {
    "@type": "Organization",
    name: "Harbor Point Marketing Services",
    url: "https://www.harborpointmarketingservices.com",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen text-[#0f172a]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#dbeafe] via-[#e8f0fe] to-[#eef4fb]">
          <div
            className="glow-orb glow-orb--animated"
            style={{
              width: 500,
              height: 500,
              top: -150,
              right: -100,
              background:
                "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
            <Reveal delay={0.1} variant="strong">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                About Us
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                The Agency Built for{" "}
                <span className="text-gradient">Industries Others Won&apos;t Touch</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                We combine deep high-risk industry expertise with proprietary AI
                technology to build marketing systems that grow your business
                month over month — compliantly and sustainably.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Our Story */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-14 md:grid-cols-2">
            <Reveal delay={0.15} variant="strong">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  Why We Exist
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">
                  High-risk businesses face a unique problem: most marketing
                  agencies either refuse to work with them, or treat them as an
                  afterthought. Ad accounts get banned, SEO agencies don&apos;t
                  understand compliance nuances, and growth stalls.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  We founded Harbor Point Marketing to solve exactly this. We
                  built a proprietary AI Marketing Engine specifically trained on
                  the challenges of restricted industries — platform ad policies,
                  FTC compliance language, content regulations, and the constant
                  shifting landscape of what&apos;s allowed and where.
                </p>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Our approach is fundamentally different: we focus on
                  <strong> long-term SEO frameworks</strong> that build
                  compounding organic traffic, complemented by compliant paid
                  campaigns and AI-powered automation. The result is a growth
                  engine that gets stronger every month — and doesn&apos;t depend
                  on any single platform.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.25} variant="soft">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "150+", label: "Clients Served", icon: Users },
                  { val: "3.5x", label: "Avg. ROAS", icon: TrendingUp },
                  { val: "89%", label: "Client Retention", icon: Award },
                  { val: "24/7", label: "AI Monitoring", icon: Bot },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="glass-card rounded-2xl p-6 text-center"
                  >
                    <s.icon size={28} className="mx-auto text-blue-500" />
                    <p className="mt-3 text-3xl font-extrabold text-blue-600">
                      {s.val}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* Our Values */}
        <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal delay={0.1} variant="strong">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                How We <span className="text-gradient">Work</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                Our principles guide every engagement, every strategy, and every
                line of code in our AI engine.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Compliance First",
                desc: "Every strategy, ad copy, and content piece is built with compliance in mind. We understand FTC regulations, platform policies, and industry-specific restrictions inside and out.",
              },
              {
                icon: TrendingUp,
                title: "Long-Term Thinking",
                desc: "We build SEO frameworks and marketing systems designed to compound over time. Quick wins matter, but sustainable growth is what transforms businesses.",
              },
              {
                icon: Bot,
                title: "AI-Augmented",
                desc: "Our proprietary AI Marketing Engine works 24/7 — analyzing competitors, identifying keyword gaps, monitoring rankings, and generating optimization recommendations.",
              },
              {
                icon: Target,
                title: "Results-Driven",
                desc: "Every recommendation is tied to measurable business outcomes. We track rankings, traffic, leads, and revenue — not vanity metrics.",
              },
              {
                icon: Users,
                title: "Senior Team Only",
                desc: "No junior account managers learning on your dime. You work directly with experienced marketers who have deep expertise in high-risk verticals.",
              },
              {
                icon: Award,
                title: "No Contracts",
                desc: "We operate month-to-month because our results earn your continued business. Most clients stay for years because the ROI speaks for itself.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={0.12 + i * 0.07} variant="soft">
                <div className="glass-card group rounded-2xl p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-sky-500 text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-110">
                    <v.icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-500">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <div className="section-divider mx-auto max-w-5xl" />

        {/* Industries */}
        <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
          <Reveal delay={0.1} variant="strong">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                Industries We <span className="text-gradient">Specialize In</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2} variant="soft">
            <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                "Peptide Research Companies",
                "Dietary Supplements",
                "CBD & Hemp Products",
                "Nutraceuticals",
                "Prediction & Trading Platforms",
                "Alternative Health",
                "Kratom & Botanicals",
                "Vape & Nicotine",
                "Other Restricted Verticals",
              ].map((ind) => (
                <div
                  key={ind}
                  className="flex items-center gap-3 rounded-xl bg-white/60 px-5 py-4 text-[15px] font-medium text-slate-700 shadow-sm ring-1 ring-blue-100/40"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-blue-500" />
                  {ind}
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-sky-500">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <Reveal delay={0.1} variant="strong">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to Grow Your High-Risk Business?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Get an AI-powered marketing audit and see exactly where your
                biggest growth opportunities are.
              </p>
              <div className="mt-8">
                <ScrollButton
                  target="contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-600 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  Get Your Custom Audit
                </ScrollButton>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
