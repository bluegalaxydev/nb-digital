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
        {/* ═══════════════════════════════════════════
            HERO SECTION
        ═══════════════════════════════════════════ */}
        <section
          id="home"
          aria-label="Hero"
          className="relative overflow-hidden"
        >
          {/* Decorative glow orbs */}
          <div
            className="glow-orb glow-orb--animated"
            style={{
              width: 500,
              height: 500,
              top: -120,
              left: -100,
              background:
                "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
            }}
          />
          <div
            className="glow-orb glow-orb--animated"
            style={{
              width: 400,
              height: 400,
              bottom: -80,
              right: -60,
              background:
                "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
              animationDelay: "4s",
            }}
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
            <div>
              <Reveal delay={0.1} variant="soft">
                <p className="inline-flex items-center rounded-full border border-indigo-100 bg-white/80 px-5 py-3 text-sm text-gray-600 shadow-sm backdrop-blur-sm">
                  ✨ Marketing &amp; Growth Experts
                </p>
              </Reveal>

              <Reveal delay={0.25} variant="strong">
                <h1 className="mt-6 text-5xl font-semibold tracking-tight text-black md:text-7xl">
                  Marketing That Helps
                  <br />
                  <span className="text-gradient">High Risk Businesses</span>
                  <br />
                  Grow Faster
                </h1>
              </Reveal>

              <Reveal delay={0.4} variant="soft">
                <p className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl">
                  Harbor Point Marketing helps high-risk brands—including peptide
                  companies—scale through compliant growth systems, SEO,
                  optimization and automation.
                </p>
              </Reveal>

              <Reveal delay={0.55} variant="soft">
                <div className="mt-6 flex justify-center">
                  <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-[#eef2ff]/80 px-4 py-2 text-sm text-[#3730a3] backdrop-blur-sm">
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
                    className="btn-primary"
                  >
                    <span>See Our Services →</span>
                  </ScrollButton>
                </div>
              </Reveal>

              <Reveal delay={0.85} variant="soft">
                <ul
                  className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-lg text-[#5f657d]"
                  role="list"
                >
                  <li className="flex items-center gap-3">
                    <span
                      className="dot-pulse h-3 w-3 rounded-full bg-green-500"
                      aria-hidden="true"
                    />
                    No long-term contracts
                  </li>
                  <li className="flex items-center gap-3">
                    <span
                      className="dot-pulse h-3 w-3 rounded-full bg-green-500"
                      aria-hidden="true"
                      style={{ animationDelay: "0.5s" }}
                    />
                    Done-for-you implementation
                  </li>
                  <li className="flex items-center gap-3">
                    <span
                      className="dot-pulse h-3 w-3 rounded-full bg-green-500"
                      aria-hidden="true"
                      style={{ animationDelay: "1s" }}
                    />
                    Custom to your industry
                  </li>
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.4} variant="strong">
              <div className="image-shine overflow-hidden rounded-[28px] bg-white shadow-lg ring-1 ring-black/5">
                <img
                  src="/peptides1.png"
                  alt="Peptide marketing campaign dashboard showing growth metrics"
                  className="w-full"
                  width={600}
                  height={400}
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════════
            ABOUT SECTION
        ═══════════════════════════════════════════ */}
        <section
          id="about"
          aria-label="About Harbor Point Marketing"
          className="relative overflow-hidden"
        >
          {/* Subtle dot pattern */}
          <div
            className="dot-pattern pointer-events-none absolute inset-0 opacity-[0.03]"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
            <Reveal delay={0.15} variant="strong">
              <div className="image-shine overflow-hidden rounded-[28px] bg-white shadow-lg ring-1 ring-black/5">
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
                  <span className="text-gradient">Operating System</span>
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
                <ul
                  className="mt-8 space-y-5 text-[18px] text-[#333]"
                  role="list"
                >
                  {[
                    "Custom automation that runs your marketing 24/7",
                    "Industry-specific systems built for your niche",
                    "Complete integration of your sales and operations",
                    "Done-for-you implementation, not just consulting",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 rounded-xl px-3 py-2 transition hover:bg-white/60"
                    >
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
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider mx-auto max-w-5xl" />

        {/* ═══════════════════════════════════════════
            SERVICES + CONTACT FORM
        ═══════════════════════════════════════════ */}
        <section
          id="services"
          aria-label="Services and contact form"
          className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 scroll-mt-24"
        >
          {/* Background glow */}
          <div
            className="glow-orb"
            style={{
              width: 600,
              height: 600,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <Reveal delay={0.15} variant="strong">
            <div className="relative text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-black md:text-6xl">
                Our Marketing <span className="text-gradient">Services</span>
              </h2>
              <p className="mt-4 text-lg text-gray-500 md:text-xl">
                Select the services you need and submit your request.
              </p>
            </div>
          </Reveal>

          <form
            action="https://formspree.io/f/xlgplbkp"
            method="POST"
            className="relative mt-16 grid gap-10 md:grid-cols-2"
          >
            <Reveal delay={0.3} variant="soft">
              <fieldset className="glass-card rounded-3xl p-8">
                <legend className="text-2xl font-semibold text-black">
                  Choose Services
                </legend>
                <p className="mt-2 text-gray-500">
                  Check all services you want us to help with.
                </p>

                <div className="mt-8 space-y-8">
                  <div role="group" aria-labelledby="group-web-seo">
                    <h3
                      id="group-web-seo"
                      className="text-lg font-semibold text-black"
                    >
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
                        <label
                          key={service}
                          className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1 transition hover:bg-indigo-50/50"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-1 h-4 w-4 rounded border-gray-300"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div role="group" aria-labelledby="group-ads">
                    <h3
                      id="group-ads"
                      className="text-lg font-semibold text-black"
                    >
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
                        <label
                          key={service}
                          className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1 transition hover:bg-indigo-50/50"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-1 h-4 w-4 rounded border-gray-300"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div role="group" aria-labelledby="group-addons">
                    <h3
                      id="group-addons"
                      className="text-lg font-semibold text-black"
                    >
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
                        <label
                          key={service}
                          className="flex cursor-pointer items-start gap-3 rounded-lg px-2 py-1 transition hover:bg-indigo-50/50"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            className="mt-1 h-4 w-4 rounded border-gray-300"
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
              <div className="glass-card rounded-3xl p-8">
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
                      className="input-premium"
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
                      className="input-premium"
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
                      className="input-premium"
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
                      className="input-premium"
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
                      className="input-premium"
                      placeholder="Tell us what you need most right now."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full text-lg">
                    <span>Submit Request</span>
                  </button>

                  {/* Contact info */}
                  <address className="mt-10 space-y-8 not-italic">
                    <div className="flex items-start gap-6">
                      <div className="icon-glow flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Email Us</p>
                        <a
                          href="mailto:info@notbadcapital.com"
                          className="mt-1 block text-base text-[#6a6f85] transition hover:text-[#6366f1]"
                        >
                          info@notbadcapital.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="icon-glow flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Call Us</p>
                        <a
                          href="tel:+16575774455"
                          className="mt-1 block text-base text-[#6a6f85] transition hover:text-[#6366f1]"
                        >
                          +1 (657) 577-4455
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="icon-glow flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20">
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
