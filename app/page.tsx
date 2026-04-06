import { Mail, Phone, MapPin } from "lucide-react";
import Reveal from "./components/reveal";
import ScrollButton from "./components/scroll-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harbor Point Marketing | High-Risk Business Marketing & Growth",
  description:
    "Harbor Point Marketing helps high-risk brands — peptides, supplements, and restricted industries — scale through compliant SEO, paid ads, automation, and conversion-focused marketing systems.",
  keywords: [
    "high risk marketing",
    "peptide marketing",
    "supplement marketing",
    "high risk SEO",
    "restricted industry marketing",
    "marketing automation",
    "conversion optimization",
    "Harbor Point Marketing",
  ],
  openGraph: {
    title: "Harbor Point Marketing | High-Risk Business Marketing & Growth",
    description:
      "We help high-risk brands scale through compliant growth systems, SEO, paid ads, and automation.",
    url: "https://www.harborpointmarketingservices.com",
    siteName: "Harbor Point Marketing Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.harborpointmarketingservices.com/logo.png",
        width: 800,
        height: 600,
        alt: "Harbor Point Marketing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harbor Point Marketing | High-Risk Business Growth",
    description:
      "Marketing systems for peptide companies, supplements, and restricted industries.",
  },
  alternates: {
    canonical: "https://www.harborpointmarketingservices.com",
  },
};

/* ── JSON-LD structured data ──────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Harbor Point Marketing Services",
  url: "https://www.harborpointmarketingservices.com",
  logo: "https://www.harborpointmarketingservices.com/logo.png",
  description:
    "Marketing agency specializing in high-risk industries including peptides, supplements, and restricted verticals. Services include SEO, paid ads, marketing automation, and conversion optimization.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6013 Warner Ave",
    addressLocality: "Huntington Beach",
    addressRegion: "CA",
    postalCode: "92647",
    addressCountry: "US",
  },
  telephone: "+16575774455",
  email: "info@notbadcapital.com",
  areaServed: "US",
  serviceType: [
    "SEO",
    "Paid Advertising",
    "Marketing Automation",
    "Conversion Rate Optimization",
    "Website Design",
    "Email Marketing",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#f7f7f8] text-[#111111]">
        {/* ═══ HERO ═══ */}
        <section
          id="home"
          aria-label="Hero"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2"
        >
          <div>
            <Reveal delay={0.1} variant="soft">
              <p className="inline-flex items-center rounded-full bg-[#ececf3] px-5 py-3 text-sm text-gray-600">
                ✨ Marketing &amp; Growth Experts
              </p>
            </Reveal>

            <Reveal delay={0.25} variant="strong">
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black md:text-7xl">
                Marketing That Helps
                <br />
                <span className="text-[#6366f1]">High Risk Businesses</span>
                <br />
                Grow Faster
              </h1>
            </Reveal>

            <Reveal delay={0.4} variant="soft">
              <p className="mt-6 text-lg text-gray-500 md:text-xl">
                Harbor Point Marketing helps high-risk brands—including peptide
                companies—scale through compliant growth systems, SEO,
                optimization and automation.
              </p>
            </Reveal>

            <Reveal delay={0.55} variant="soft">
              <div className="mt-6 flex justify-center">
                <p className="inline-flex items-center gap-2 rounded-full bg-[#eef2ff] px-4 py-2 text-sm text-[#3730a3]">
                  <span>⚡</span>
                  Specialized in high-risk marketing: peptides, supplements, and
                  restricted industries
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.65} variant="soft">
              <p className="mt-3 text-center text-sm text-gray-400">
                Platforms like TikTok &amp; Reddit often restrict these
                industries — we know how to work around it.
              </p>
            </Reveal>

            <Reveal delay={0.75} variant="soft">
              <div className="mt-10 flex flex-wrap gap-4">
                <ScrollButton
                  target="services"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#05051c] px-8 py-4 text-white transition hover:bg-[#1a1a3e]"
                >
                  See Our Services →
                </ScrollButton>
              </div>
            </Reveal>

            <Reveal delay={0.85} variant="soft">
              <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-lg text-[#5f657d]" role="list">
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
                  No long-term contracts
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
                  Done-for-you implementation
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-green-500" aria-hidden="true" />
                  Custom to your industry
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.4} variant="strong">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <img
                src="/peptides1.png"
                alt="Peptide marketing campaign dashboard showing growth metrics"
                className="w-full rounded-2xl shadow-lg"
                width={600}
                height={400}
                loading="eager"
              />
            </div>
          </Reveal>
        </section>

        {/* ═══ ABOUT ═══ */}
        <section
          id="about"
          aria-label="About Harbor Point Marketing"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2"
        >
          <Reveal delay={0.15} variant="strong">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80"
                alt="Business analytics dashboard on laptop showing marketing performance data"
                className="h-[500px] w-full object-cover"
                width={1200}
                height={500}
                loading="lazy"
              />
            </div>
          </Reveal>

          <div>
            <Reveal delay={0.3} variant="strong">
              <h2 className="text-5xl font-semibold leading-tight md:text-6xl">
                Your Complete Business
                <br />
                Operating System
              </h2>
            </Reveal>

            <Reveal delay={0.45} variant="soft">
              <p className="mt-8 text-[20px] leading-10 text-[#6a6f85]">
                We don&apos;t just run ads or post on social media. We build
                complete marketing and operational systems that work 24/7.
                Whether you need marketing automation, sales processes, or
                custom integrations—we create the infrastructure that lets niche
                businesses scale without burning out.
              </p>
            </Reveal>

            <Reveal delay={0.6} variant="soft">
              <ul className="mt-8 space-y-5 text-[18px] text-[#333]" role="list">
                {[
                  "Custom automation that runs your marketing 24/7",
                  "Industry-specific systems built for your niche",
                  "Complete integration of your sales and operations",
                  "Done-for-you implementation, not just consulting",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-green-500 text-green-500"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ═══ SERVICES + CONTACT FORM ═══ */}
        <section
          id="services"
          aria-label="Services and contact form"
          className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
        >
          <Reveal delay={0.15} variant="strong">
            <div className="text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-black md:text-6xl">
                Our Marketing Services
              </h2>
              <p className="mt-4 text-lg text-gray-500 md:text-xl">
                Select the services you need and submit your request.
              </p>
            </div>
          </Reveal>

          <form
            action="https://formspree.io/f/xlgplbkp"
            method="POST"
            className="mt-16 grid gap-10 md:grid-cols-2"
          >
            <Reveal delay={0.3} variant="soft">
              <fieldset className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
                <legend className="text-2xl font-semibold text-black">
                  Choose Services
                </legend>
                <p className="mt-2 text-gray-500">
                  Check all services you want us to help with.
                </p>

                <div className="mt-8 space-y-8">
                  <div role="group" aria-labelledby="group-web-seo">
                    <h3 id="group-web-seo" className="text-lg font-semibold text-black">
                      Website / SEO / Systems
                    </h3>
                    <div className="mt-4 space-y-3 text-gray-700">
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
                        "  ↳ Welcome email sequence",
                        "  ↳ Abandoned cart recovery setup",
                        "CRM setup & integration",
                        "Lead tracking system setup",
                        "Ongoing website maintenance",
                        "Initial audit & strategy report",
                        "Market positioning strategy",
                        "Offer / funnel optimization",
                        "Conversion rate optimization (CRO)",
                      ].map((service) => (
                        <label key={service} className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#6366f1]"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div role="group" aria-labelledby="group-ads">
                    <h3 id="group-ads" className="text-lg font-semibold text-black">
                      Ads / Growth / Reporting
                    </h3>
                    <div className="mt-4 space-y-3 text-gray-700">
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
                        <label key={service} className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#6366f1]"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div role="group" aria-labelledby="group-addons">
                    <h3 id="group-addons" className="text-lg font-semibold text-black">
                      Advanced Add-Ons
                    </h3>
                    <div className="mt-4 space-y-3 text-gray-700">
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
                        <label key={service} className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-1 h-4 w-4 rounded border-gray-300 accent-[#6366f1]"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>
            </Reveal>

            <Reveal delay={0.4} variant="soft">
              <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
                <input
                  type="hidden"
                  name="_subject"
                  value="New Service Request from Harbor Point Marketing"
                />

                <h3 className="text-2xl font-semibold text-black">
                  Submit Your Request
                </h3>
                <p className="mt-2 text-gray-500">
                  Tell us about your business and we&apos;ll review your service
                  request.
                </p>

                <div className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="field-name"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Name
                    </label>
                    <input
                      id="field-name"
                      type="text"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-email"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Email
                    </label>
                    <input
                      id="field-email"
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-company"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Company
                    </label>
                    <input
                      id="field-company"
                      type="text"
                      name="company"
                      className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-industry"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Industry
                    </label>
                    <input
                      id="field-industry"
                      type="text"
                      name="industry"
                      className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
                      placeholder="e.g. peptides, prediction/trading, cannabis"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="field-message"
                      className="mb-2 block text-sm font-medium text-black"
                    >
                      Extra Notes
                    </label>
                    <textarea
                      id="field-message"
                      name="message"
                      rows={6}
                      className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-[#6366f1] focus:ring-1 focus:ring-[#6366f1]"
                      placeholder="Tell us what you need most right now."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-[#05051c] px-8 py-4 text-lg font-medium text-white transition hover:bg-[#1a1a3e]"
                  >
                    Submit Request
                  </button>

                  {/* Contact info */}
                  <address className="mt-10 space-y-8 not-italic">
                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Email Us</p>
                        <a
                          href="mailto:info@notbadcapital.com"
                          className="mt-1 block text-base text-[#6a6f85] hover:text-[#6366f1] hover:underline"
                        >
                          info@notbadcapital.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Call Us</p>
                        <a
                          href="tel:+16575774455"
                          className="mt-1 block text-base text-[#6a6f85] hover:text-[#6366f1] hover:underline"
                        >
                          +1 (657) 577-4455
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Visit Us</p>
                        <p className="mt-1 text-base leading-7 text-[#6a6f85]">
                          6013 Warner Ave
                          <br />
                          Huntington Beach, CA 92647
                        </p>
                      </div>
                    </div>
                  </address>
                </div>
              </div>
            </Reveal>
          </form>
        </section>
      </main>
    </>
  );
}
