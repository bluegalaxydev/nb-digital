import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — SEO, Paid Ads & Automation for High-Risk Businesses",
  description:
    "Harbor Point Marketing offers SEO, paid advertising, offer refinement, and marketing automation built specifically for peptide companies, supplements, and restricted industries.",
  alternates: {
    canonical: "https://www.harborpointmarketingservices.com/services",
  },
};

const services = [
  {
    title: "SEO",
    text: "We improve your rankings, increase organic traffic, and build long-term visibility for high-risk products.",
  },
  {
    title: "Paid Ads",
    text: "We run ads on TikTok, Reddit, and X to drive traffic, leads, and revenue — even in restricted categories.",
  },
  {
    title: "Offer Refinement",
    text: "We revise your proposal and messaging until it is clear, persuasive, and ready to convert.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f8] text-[#111111]">
      <section
        id="services"
        aria-label="Marketing services overview"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <div className="text-center">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Marketing Services for High-Risk Businesses
          </h1>
          <p className="mt-6 text-xl text-[#6a6f85] md:text-2xl">
            We help high-risk businesses grow through SEO, paid advertising, and
            conversion-focused marketing systems.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-gray-200 bg-white p-10 shadow-sm"
            >
              <div
                className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 text-2xl text-white"
                aria-hidden="true"
              >
                ✦
              </div>

              <h2 className="text-[34px] font-semibold leading-tight">
                {item.title}
              </h2>

              <p className="mt-6 text-[18px] leading-9 text-[#6a6f85]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
