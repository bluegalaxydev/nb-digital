import { Mail, Phone, MapPin } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7f8] text-[#111111]">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
<div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Harbor Point Marketing Services"
    className="h-12 w-auto object-contain"
  />

<div className="leading-tight">
  <div className="font-semibold text-xl tracking-tight text-slate-900">
    Harbor Point
  </div>
<div className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
  Marketing Services
</div>
</div>
</div>

          <nav className="hidden items-center gap-10 md:flex">
<Link href="/" className="text-[15px] text-gray-700 hover:text-black">
  Home
</Link>
<Link href="/services" className="text-[15px] text-gray-700 hover:text-black">
  Services
</Link>
            <a href="#about" className="text-[15px] text-gray-700 hover:text-black">
              About
            </a>
            <a href="#how" className="text-[15px] text-gray-700 hover:text-black">
              How It Works
            </a>
            <a href="#contact" className="text-[15px] text-gray-700 hover:text-black">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-[#05051c] px-7 py-3 text-[15px] font-medium text-white"
          >
            Book a Free Consultation
          </a>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2"
      >
        <div>
          <div className="inline-flex items-center rounded-full bg-[#ececf3] px-5 py-3 text-sm text-gray-600">
            ✨ Marketing & Growth Experts
          </div>

<h1 className="text-5xl font-semibold tracking-tight text-black md:text-7xl">
  Marketing That Helps
  <br />
  <span className="text-[#6366f1]">High Risk Businesses</span>
  <br />
  Grow Faster
</h1>

<p className="mt-6 text-lg text-gray-500 md:text-xl">
  Harbor Point Marketing helps high-risk brands—including peptide companies—scale through compliant growth systems, SEO, optimization and automation
</p>
<div className="mt-6 flex justify-center">
  <div className="inline-flex items-center gap-2 rounded-full bg-[#eef2ff] px-4 py-2 text-sm text-[#3730a3]">
    <span>⚡</span>
    Specialized in high-risk marketing: peptides, supplements, and restricted industries
  </div>
</div>

<p className="mt-3 text-sm text-gray-400 text-center">
  Platforms like tiktok & reddit often restrict these industries — we know how to work around it.
</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-2xl bg-[#05051c] px-8 py-4 text-lg font-medium text-white"
            >
              Book Your Free Consultation →
            </a>
            <a
              href="#services"
              className="rounded-2xl border border-gray-300 bg-white px-8 py-4 text-lg font-medium text-[#222]"
            >
              See Our Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-lg text-[#5f657d]">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              No long-term contracts
            </div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              Done-for-you implementation
            </div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              Custom to your industry
            </div>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
<img
  src="/peptides.png"
  alt="Peptide marketing"
  className="w-full rounded-2xl shadow-lg"
/>
          </div>
        </div>
      </section>



      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2"
      >
        <div className="overflow-hidden rounded-[28px] bg-white shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=1200&q=80"
            alt="Business dashboard on laptop"
            className="h-[500px] w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-6xl font-semibold leading-tight">
            Your Complete Business
            <br />
            Operating System
          </h2>

          <p className="mt-8 text-[20px] leading-10 text-[#6a6f85]">
            We don&apos;t just run ads or post on social media. We build complete
            marketing and operational systems that work 24/7. Whether you need
            marketing automation, sales processes, or custom integrations—we create
            the infrastructure that lets niche businesses scale without burning out.
          </p>

          <div className="mt-8 space-y-5 text-[18px] text-[#333]">
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                ✓
              </span>
              Custom automation that runs your marketing 24/7
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                ✓
              </span>
              Industry-specific systems built for your niche
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                ✓
              </span>
              Complete integration of your sales and operations
            </div>
            <div className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
                ✓
              </span>
              Done-for-you implementation, not just consulting
            </div>
          </div>

          <a
            href="#services"
            className="mt-10 inline-block rounded-2xl bg-[#05051c] px-8 py-4 text-lg font-medium text-white"
          >
            See How We Work
          </a>
        </div>
      </section>

<section
  id="how"
  className="mx-auto max-w-7xl px-6 py-24"
>
  <div className="text-center">
    <h2 className="text-4xl font-semibold tracking-tight text-black md:text-6xl">
      Our Marketing Services
    </h2>
    <p className="mt-4 text-lg text-gray-500 md:text-xl">
      Select the services you need and submit your request.
    </p>
  </div>

  <form
    action="https://formspree.io/f/xlgplbkp"
    method="POST"
    className="mt-16 grid gap-10 md:grid-cols-2"
  >
    {/* Left: service checkboxes */}
    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
      <h3 className="text-2xl font-semibold text-black">Choose Services</h3>
      <p className="mt-2 text-gray-500">
        Check all services you want us to help with.
      </p>

      <div className="mt-8 space-y-8">
        <div>
          <h4 className="text-lg font-semibold text-black">Website / SEO / Systems</h4>
          <div className="mt-4 space-y-3 text-gray-700">
            {[
              "Website creation / optimization",
              "Basic SEO implementation",
              "Basic SEO developing",
              "Keyword search",
              "On-page optimization (ranking)",
              "Email flow setup",
              "Welcome sequence (10% off with email signup)",
              "Abandoned cart recovery",
              "CRM setup",
              "Ongoing system maintenance & optimization",
              "Free initial business audit / strategy report",
              "Market positioning",
              "Funnel recommendations",
              "Growth opportunities",
            ].map((service) => (
              <label key={service} className="flex items-start gap-3">
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

        <div>
          <h4 className="text-lg font-semibold text-black">Ads / Growth / Reporting</h4>
          <div className="mt-4 space-y-3 text-gray-700">
            {[
              "Basic UGC ads (images)",
              "4 creatives / month",
              "AI-assisted + edited creatives",
              "Advanced email automation",
              "Upsell flows",
              "Re-engagement campaigns",
              "Retention sequences",
              "Traffic / ad setup",
              "X / Reddit ads",
              "Platforms with little to no restrictions",
              "Google compliance",
              "Monthly KPI report",
              "ROAS tracking",
              "Conversion rates tracking",
              "Funnel performance reporting",
            ].map((service) => (
              <label key={service} className="flex items-start gap-3">
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

<div>
  <h4 className="text-lg font-semibold text-black">Advanced Add-Ons</h4>
  <div className="mt-4 space-y-3 text-gray-700">
    {[
      "AI chatbot",
      "Advanced UGC / AI video contents",
      "Social media management",
      "Influencer / affiliate setup",
    ].map((service) => (
      <label key={service} className="flex items-start gap-3">
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
    </div>

{/* Right: contact form */}
<div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
  <input
    type="hidden"
    name="_subject"
    value="New Service Request from Harbor Point Marketing"
  />

  <h3 className="text-2xl font-semibold text-black">Submit Your Request</h3>
  <p className="mt-2 text-gray-500">
    Tell us about your business and we’ll review your service request.
  </p>

  <div className="mt-8 space-y-5">
    <div>
      <label className="mb-2 block text-sm font-medium text-black">Name</label>
      <input
        type="text"
        name="name"
        required
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        placeholder="Your name"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-black">Email</label>
      <input
        type="email"
        name="email"
        required
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        placeholder="you@example.com"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-black">Company</label>
      <input
        type="text"
        name="company"
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        placeholder="Company name"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-black">Industry</label>
      <input
        type="text"
        name="industry"
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        placeholder="e.g. peptides, prediction/trading, cannabis"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-black">
        Extra Notes
      </label>
      <textarea
        name="message"
        rows={6}
        className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
        placeholder="Tell us what you need most right now."
      />
    </div>

    <button
      type="submit"
      className="w-full rounded-2xl bg-[#05051c] px-8 py-4 text-lg font-medium text-white transition hover:opacity-90"
    >
      Submit Request
    </button>

    <div className="mt-10 space-y-8">
      <div className="flex items-start gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <Mail size={24} />
        </div>
        <div>
          <p className="text-lg font-semibold">Email Us</p>
          <a
            href="mailto:info@notbadcapital.com"
            className="mt-1 block text-base text-[#6a6f85] hover:underline"
          >
            info@notbadcapital.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
          <Phone size={24} />
        </div>
        <div>
          <p className="text-lg font-semibold">Call Us</p>
          <a
            href="tel:+16575774455"
            className="mt-1 block text-base text-[#6a6f85] hover:underline"
          >
            +1 (657) 577-4455
          </a>
        </div>
      </div>

      <div className="flex items-start gap-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
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
    </div>
  </div>
</div>
</form>
</section>
</main>
  );
}