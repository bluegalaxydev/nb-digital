import { Mail, Phone, MapPin } from "lucide-react";

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
    High Risk Company Marketing
  </div>
</div>
</div>

          <nav className="hidden items-center gap-10 md:flex">
            <a href="#home" className="text-[15px] text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#services" className="text-[15px] text-gray-700 hover:text-black">
              Services
            </a>
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
  Harbor Point Marketing Services helps high-risk businesses, including peptide companies, grow through digital marketing, SEO, automation, and clear growth strategies.
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

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
<h2 className="text-5xl font-semibold">
  Marketing Services for High-Risk Businesses
</h2>
<p className="mt-6 text-2xl text-[#6a6f85]">
  We help high-risk businesses grow through SEO, paid advertising, and conversion-focused marketing systems.
</p>
        </div>

<div className="mt-14 grid gap-8 md:grid-cols-3">
  {[
    {
      title: "SEO",
      text: "We improve your rankings, increase organic traffic, and build long-term visibility for high-risk products.",
    },
    {
      title: "Paid Ads",
      text: "We run ads on TikTok, Reddit, and X to drive traffic, leads, and revenue.",
    },
    {
      title: "Offer Refinement",
      text: "We revise your proposal and messaging until it is clear, persuasive, and ready to convert.",
    },
  ].map((item) => (
    <div
      key={item.title}
      className="rounded-[28px] border border-gray-200 bg-white p-10 shadow-sm"
    >
      <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl text-white">
        ✦
      </div>
      <h3 className="text-[34px] font-semibold leading-tight">
        {item.title}
      </h3>
      <p className="mt-6 text-[18px] leading-9 text-[#6a6f85]">
        {item.text}
      </p>
    </div>
  ))}
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
      Simple one-time pricing for core marketing services.
    </p>
  </div>

<div className="mt-16 space-y-6">
  <div className="flex items-center justify-between border-b pb-4">
    <span className="text-lg font-medium text-black">
      SEO
    </span>
    <span className="text-lg font-semibold text-[#05051c]">
      $800 one-time
    </span>
  </div>

  <div className="flex items-center justify-between border-b pb-4">
    <span className="text-lg font-medium text-black">
      Reddit Ads Fee
    </span>
    <span className="text-lg font-semibold text-[#05051c]">
      $600 one-time
    </span>
  </div>

  <div className="flex items-center justify-between border-b pb-4">
    <span className="text-lg font-medium text-black">
      TikTok Ads Fee
    </span>
    <span className="text-lg font-semibold text-[#05051c]">
      $600 one-time
    </span>
  </div>

  <div className="flex items-center justify-between border-b pb-4">
    <span className="text-lg font-medium text-black">
      X Ads Fee
    </span>
    <span className="text-lg font-semibold text-[#05051c]">
      $600 one-time
    </span>
  </div>
</div>

  <div className="mt-14 flex justify-center">
    <a
      href="#contact"
      className="rounded-2xl bg-[#05051c] px-8 py-4 text-lg font-medium text-white transition hover:opacity-90"
    >
      Book a Strategy Call
    </a>
  </div>
</section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-semibold">Ready to Grow Your Business?</h2>
          <p className="mt-6 text-2xl text-[#6a6f85]">
            Book a free consultation and we will show you how Harbor Point Marketing Services can help you attract more leads and grow with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <form
  action="https://formspree.io/f/xlgplbkp"
  method="POST"
  className="space-y-6"
>
  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full border p-3 rounded-lg"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="w-full border p-3 rounded-lg"
    required
  />

  <input
    type="text"
    name="company"
    placeholder="Company"
    className="w-full border p-3 rounded-lg"
  />

  <textarea
    name="message"
    placeholder="Tell us about your project"
    className="w-full border p-3 rounded-lg"
    rows={4}
  ></textarea>

  <button
    type="submit"
    className="bg-[#05051c] text-white px-6 py-3 rounded-lg"
  >
    Start Your Free Audit
  </button>
</form>
          <div>
            <h3 className="text-4xl font-semibold">Book Your Free Audit</h3>
            <p className="mt-6 max-w-xl text-[20px] leading-10 text-[#6a6f85]">
              Tell us about your business and we&apos;ll show you the exact systems
              and automation you need to scale. Response within 24 hours.
            </p>

            <div className="mt-10 space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-2xl font-semibold">Email Us</p>
                  <p className="mt-1 text-xl text-[#6a6f85]">info@notbadcapital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-2xl font-semibold">Call Us</p>
                  <a href="tel:+16575774455" className="mt-1 text-xl text-[#6a6f85] hover:underline">
  +1 (657) 577-4455
</a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-2xl font-semibold">Visit Us</p>
                  <p className="mt-1 text-xl leading-9 text-[#6a6f85]">
                    266 Robledo St
                    <br />
                    Las Vegas, NV, 89138
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="rounded-[28px] border border-gray-200 bg-white p-9">
            <div className="space-y-7">
              <div>
                <label className="mb-3 block text-2xl font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f6f7] px-5 py-5 text-lg outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-2xl font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f6f7] px-5 py-5 text-lg outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-2xl font-medium">Industry</label>
                <input
                  type="text"
                  placeholder="e.g., Healthcare, Legal, Construction"
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f6f7] px-5 py-5 text-lg outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block text-2xl font-medium">
                  What do you need help with?
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your biggest challenges with marketing, lead generation, or business operations..."
                  className="w-full rounded-2xl border border-gray-200 bg-[#f6f6f7] px-5 py-5 text-lg outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-[#05051c] px-6 py-5 text-xl font-medium text-white"
              >
                Book My Free Consultation
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}