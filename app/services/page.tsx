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