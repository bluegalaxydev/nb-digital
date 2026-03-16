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
      Marketing Services
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

<h1 className="mt-8 text-5xl font-semibold leading-[1.02] md:text-7xl">
  Marketing That Helps
  <br />
  <span className="text-[#6a5cff]">Small Businesses</span>
  <br />
  Grow Faster
</h1>

<p className="mt-8 max-w-xl text-2xl leading-10 text-[#6a6f85]">
  Harbor Point Marketing Services helps small businesses grow with digital marketing, lead generation, automation, and clear growth strategy.
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Analytics dashboard"
              className="h-[540px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-semibold">
  Marketing Services for Small Businesses
</h2>
<p className="mt-6 text-2xl text-[#6a6f85]">
We help small businesses grow with smart marketing strategy, lead generation, automation, and brand positioning.
</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
{[
  {
    title: "Digital Marketing Strategy",
    text: "Clear marketing plans designed to help small businesses attract better leads and grow consistently.",
  },
  {
    title: "Lead Generation Campaigns",
    text: "Targeted campaigns that bring in qualified leads through paid ads, funnels, and conversion-focused landing pages.",
  },
  {
    title: "Marketing Automation",
    text: "Automated follow-up systems for email, SMS, and customer journeys so no opportunity gets missed.",
  },
  {
    title: "Content & Brand Positioning",
    text: "Messaging, offers, and brand presentation that make your business look trustworthy and stand out online.",
  },
  {
    title: "Analytics & Reporting",
    text: "Simple performance tracking so you can understand what is working and where to invest next.",
  },
  {
    title: "Custom Growth Support",
    text: "Flexible marketing support tailored to your business stage, industry, and goals.",
  },
].map((item) => (
            <div key={item.title} className="rounded-[28px] border border-gray-200 bg-white p-9">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl text-white">
                ✦
              </div>
              <h3 className="text-[34px] font-semibold leading-tight">{item.title}</h3>
              <p className="mt-6 text-[18px] leading-9 text-[#6a6f85]">{item.text}</p>
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
      Three scalable growth systems designed to increase leads and revenue.
    </p>
  </div>

  <div className="mt-16 grid gap-8 md:grid-cols-3">
    {/* Tier 1 */}
<div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
  <div className="flex items-center justify-between">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl text-white">
      ✦
    </div>
    <span className="rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
      Tier 1
    </span>
  </div>

  <h3 className="mt-8 text-3xl font-semibold text-black">
    Tier 1 — AI Growth Foundation
  </h3>

  <p className="mt-2 text-gray-500 text-sm">
    (For companies already selling but with weak marketing systems)
  </p>

  <p className="mt-4 font-semibold text-lg">Goal</p>
  <p className="text-gray-600">
    Fix their funnel and automate customer acquisition basics.
  </p>

  <p className="mt-5 font-semibold text-lg">Services</p>
  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• AI-generated ad creatives (images + copy)</li>
    <li>• Landing page optimization</li>
    <li>• Email marketing automation</li>
    <li>• Basic CRM funnel setup</li>
    <li>• Retargeting pixel installation</li>
    <li>• Weekly analytics reports</li>
    <li>• SEO blog content (AI assisted)</li>
    <li>• Compliance-safe messaging guidance</li>
  </ul>

  <p className="mt-5 font-semibold text-lg">Platforms</p>
  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• Google Ads (careful wording)</li>
    <li>• Microsoft Advertising</li>
    <li>• Reddit Ads</li>
    <li>• SEO</li>
    <li>• Email</li>
  </ul>

  <p className="mt-5 font-semibold text-lg">AI Automation Used</p>
  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• AI ad copy generation</li>
    <li>• Automated reporting</li>
    <li>• Automated email sequences</li>
    <li>• AI blog generation</li>
  </ul>

  <div className="mt-6 border-t pt-4">
    <p className="text-sm text-gray-500">Setup Fee</p>
    <p className="font-semibold">$2,500 – $4,000</p>

    <p className="mt-2 text-sm text-gray-500">Monthly</p>
    <p className="font-semibold">$1,500 – $2,500</p>
  </div>
</div>
    {/* Tier 2 */}
<div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
  <div className="flex items-center justify-between">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl text-white">
      ✦
    </div>

    <span className="rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
      Tier 2
    </span>
  </div>

  <h3 className="mt-8 text-3xl font-semibold text-black">
    Tier 2 — AI Lead Generation Engine
  </h3>

  <p className="mt-2 text-gray-500 text-sm">
    (Most of your clients will land here)
  </p>

  <p className="mt-4 font-semibold text-lg">Goal</p>
  <p className="text-gray-600">
    Generate consistent qualified leads + repeat buyers.
  </p>

  <p className="mt-5 font-semibold text-lg">Services</p>
  <p className="text-gray-600 text-sm">
    Everything in Tier 1 PLUS:
  </p>

  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• AI lead generation funnels</li>
    <li>• Influencer / affiliate program setup</li>
    <li>• Conversion rate optimization</li>
    <li>• AI chatbot for customer questions</li>
    <li>• SMS marketing automation</li>
    <li>• Retargeting campaigns</li>
    <li>• Landing page A/B testing</li>
    <li>• Advanced analytics dashboards</li>
    <li>• Review / reputation automation</li>
  </ul>

  <p className="mt-5 font-semibold text-lg">Ad Platforms</p>

  <p className="text-gray-600 text-sm">
    You can legally advertise peptides indirectly through:
  </p>

  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• Taboola native ads</li>
    <li>• Outbrain native ads</li>
    <li>• Reddit Ads</li>
    <li>• SEO + advertorial pages</li>
    <li>• Influencer traffic</li>
    <li>• Email list building</li>
  </ul>

  <p className="mt-4 text-gray-600 text-sm">
    Avoid direct peptide claims. Instead run educational ads like:
  </p>

  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• “Longevity research peptides explained”</li>
    <li>• “Anti-aging research compounds”</li>
  </ul>

  <p className="mt-4 text-gray-600 text-sm">
    Then send traffic to an education page → store.
  </p>

  <p className="mt-5 font-semibold text-lg">AI Automation Used</p>

  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• AI chatbots</li>
    <li>• AI ad optimization</li>
    <li>• Automated retargeting</li>
    <li>• AI copywriting</li>
    <li>• Predictive analytics</li>
  </ul>

  <div className="mt-6 border-t pt-4">
    <p className="text-sm text-gray-500">Setup Fee</p>
    <p className="font-semibold">$4,000 – $7,000</p>

    <p className="mt-2 text-sm text-gray-500">Monthly</p>
    <p className="font-semibold">$3,000 – $6,000</p>

    <p className="mt-3 text-sm text-gray-500">Optional</p>
    <p className="font-semibold">5–10% ad spend management</p>
  </div>
</div>
    {/* Tier 3 */}
<div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
  <div className="flex items-center justify-between">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl text-white">
      ✦
    </div>

    <span className="rounded-full bg-black px-4 py-1 text-sm font-medium text-white">
      Tier 3
    </span>
  </div>

  <h3 className="mt-8 text-3xl font-semibold text-black">
    Tier 3 — AI Revenue Scaling Partner
  </h3>

  <p className="mt-2 text-gray-500 text-sm">
    (High revenue peptide companies doing $1M+ yearly)
  </p>

  <p className="mt-4 font-semibold text-lg">Goal</p>
  <p className="text-gray-600">
    Turn your agency into their growth department.
  </p>

  <p className="mt-5 font-semibold text-lg">Services</p>

  <p className="text-gray-600 text-sm">
    Everything above PLUS:
  </p>

  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• Full funnel growth strategy</li>
    <li>• AI predictive marketing</li>
    <li>• Influencer network management</li>
    <li>• Affiliate network creation</li>
    <li>• High-volume advertorial campaigns</li>
    <li>• Advanced CRO</li>
    <li>• Product launch campaigns</li>
    <li>• UGC ad production</li>
    <li>• Brand positioning strategy</li>
    <li>• AI audience targeting models</li>
  </ul>

  <p className="mt-5 font-semibold text-lg">Traffic Sources</p>

  <p className="text-gray-600 text-sm">
    High-volume channels:
  </p>

  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• Taboola</li>
    <li>• Outbrain</li>
    <li>• Reddit Ads</li>
    <li>• SEO content farms</li>
    <li>• Influencer networks</li>
    <li>• Email + SMS scaling</li>
  </ul>

  <p className="mt-4 text-gray-600 text-sm">
    You basically run all acquisition channels except restricted ones like
    Facebook for peptides.
  </p>

  <p className="mt-5 font-semibold text-lg">AI Automation Used</p>

  <ul className="mt-2 space-y-1 text-gray-600 text-sm">
    <li>• AI customer segmentation</li>
    <li>• Automated ad testing</li>
    <li>• AI ad creatives</li>
    <li>• AI customer lifetime value modeling</li>
    <li>• Predictive campaign scaling</li>
  </ul>

  <div className="mt-6 border-t pt-4">
    <p className="text-sm text-gray-500">Setup Fee</p>
    <p className="font-semibold">$8,000 – $15,000</p>

    <p className="mt-2 text-sm text-gray-500">Monthly</p>
    <p className="font-semibold">$8,000 – $15,000</p>

    <p className="mt-3 text-sm text-gray-500">Performance Bonus</p>
    <p className="font-semibold">5–12% of revenue generated</p>
  </div>

  <p className="mt-4 text-sm text-gray-500 italic">
    This is where real money is.
  </p>
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
                  <p className="mt-1 text-xl text-[#6a6f85]">+1 (770) 826-0555</p>
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