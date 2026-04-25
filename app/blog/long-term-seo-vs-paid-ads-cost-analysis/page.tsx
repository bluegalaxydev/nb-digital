import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Tag, Clock } from "lucide-react";
import Reveal from "../../components/reveal";

const articleDate = "2026-04-22";
const articleTitle = "Long-Term SEO vs. Paid Ads: A Cost Analysis for High-Risk Brands";
const articleDescription =
  "Break down the true cost per lead of SEO versus paid advertising over 12 months. See why SEO delivers 5-10x better ROI long-term, especially for high-risk industries with account ban risks.";

export const metadata: Metadata = {
  title: `${articleTitle} — Harbor Point Marketing`,
  description: articleDescription,
  alternates: {
    canonical:
      "https://www.harborpointmarketingservices.com/blog/long-term-seo-vs-paid-ads-cost-analysis",
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    type: "article",
    publishedTime: articleDate,
    authors: ["Harbor Point Marketing"],
  },
};

export default function SEOVsPaidAdsArticle() {
  return (
    <main className="min-h-screen bg-[#f0f4fa] text-[#0c1222]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-blue-50 to-transparent px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal delay={0.1} variant="strong">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-blue-600" />
              <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                SEO Strategy
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#0c1222] md:text-5xl">
              Long-Term SEO vs. Paid Ads:{" "}
              <span className="text-gradient">A Cost Analysis for High-Risk Brands</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Most high-risk brands see paid ads as the fastest growth channel.
              But the numbers tell a different story. We break down the 12-month
              cost comparison and show why SEO delivers 5-10x better ROI—and
              builds an unfixable moat around your business.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock size={16} />
                7 min read
              </span>
              <span>Published {articleDate}</span>
              <span>By Harbor Point Marketing</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <Reveal delay={0.15} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              The Paid Ads Trap: The Hidden Cost of Account Bans
            </h2>
            <p className="mt-6 leading-8 text-slate-700">
              For peptide suppliers, supplement brands, and CBD companies, paid
              advertising is always one enforcement action away from disaster. A
              Google Ads account ban doesn't just stop your ads. It stops your
              primary lead source overnight.
            </p>
            <p className="mt-6 leading-8 text-slate-700">
              The cost of a paid ads account ban isn't just lost revenue. It's
              lost time, disrupted campaigns, months of rebuilding, and the
              pressure to move quickly to alternative channels—which often means
              lower conversion rates or higher CPAs.
            </p>
            <p className="mt-6 leading-8 text-slate-700">
              Here's the reality: paid advertising can be cheaper per lead in
              month 1. But over 12 months, especially if you get banned once, SEO
              is almost always better economics.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.2} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              Scenario: A Peptide Supplier's 12-Month Cost Comparison
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Let's model a realistic scenario. A peptide supplier needs qualified
              leads. Their average lead is worth $500 in customer lifetime value.
              Their conversion rate from lead to customer is 5%.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Path 1: Paid Ads Only (The Risky Route)
            </h3>

            <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 text-left font-bold text-slate-900">
                      Month
                    </th>
                    <th className="pb-3 text-right font-bold text-slate-900">
                      Ad Spend
                    </th>
                    <th className="pb-3 text-right font-bold text-slate-900">
                      CPL
                    </th>
                    <th className="pb-3 text-right font-bold text-slate-900">
                      Leads
                    </th>
                    <th className="pb-3 text-right font-bold text-slate-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 1-3</td>
                    <td className="py-3 text-right text-slate-700">$5,000/mo</td>
                    <td className="py-3 text-right text-slate-700">$35</td>
                    <td className="py-3 text-right text-slate-700">143/mo</td>
                    <td className="py-3 text-slate-600">Profitable, scaling</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 4</td>
                    <td className="py-3 text-right text-slate-700">$7,000</td>
                    <td className="py-3 text-right text-slate-700">$42</td>
                    <td className="py-3 text-right text-slate-700">167</td>
                    <td className="py-3 text-slate-600">Still working</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 5</td>
                    <td className="py-3 text-right text-slate-700">$0</td>
                    <td className="py-3 text-right text-slate-700">N/A</td>
                    <td className="py-3 text-right text-slate-700">0</td>
                    <td className="py-3 text-red-600">
                      <strong>Account Suspended</strong>
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 6-8</td>
                    <td className="py-3 text-right text-slate-700">$2,000/mo</td>
                    <td className="py-3 text-right text-slate-700">$80</td>
                    <td className="py-3 text-right text-slate-700">25/mo</td>
                    <td className="py-3 text-slate-600">
                      Rebuilding on secondary platforms
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 9-12</td>
                    <td className="py-3 text-right text-slate-700">$4,000/mo</td>
                    <td className="py-3 text-right text-slate-700">$50</td>
                    <td className="py-3 text-right text-slate-700">80/mo</td>
                    <td className="py-3 text-slate-600">Partial recovery</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 leading-8 text-slate-700">
              <strong>12-Month Paid Ads Total Cost:</strong>
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>Months 1-4: $22,000 ad spend = 534 leads</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>Months 5: $0 ad spend = 0 leads (account banned)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>Months 6-8: $6,000 ad spend = 75 leads (rebuilding)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>Months 9-12: $16,000 ad spend = 320 leads</span>
              </li>
            </ul>

            <p className="mt-6 leading-8 text-slate-700">
              <strong>Total 12 months: $44,000 in ad spend for 929 leads</strong>
            </p>
            <p className="mt-2 leading-8 text-slate-700">
              <strong>Cost per lead: $47.36</strong>
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Note: We're including the account ban, which is realistic for
              high-risk industries. Even one suspension dramatically changes the
              ROI math.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-[#0c1222]">
              Path 2: SEO-First Strategy
            </h3>

            <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 text-left font-bold text-slate-900">
                      Month
                    </th>
                    <th className="pb-3 text-right font-bold text-slate-900">
                      SEO Investment
                    </th>
                    <th className="pb-3 text-right font-bold text-slate-900">
                      Organic Leads
                    </th>
                    <th className="pb-3 text-right font-bold text-slate-900">
                      Paid Supplement
                    </th>
                    <th className="pb-3 text-right font-bold text-slate-900">
                      Total Leads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 1-2</td>
                    <td className="py-3 text-right text-slate-700">$5,000/mo</td>
                    <td className="py-3 text-right text-slate-700">5/mo</td>
                    <td className="py-3 text-right text-slate-700">$2,000 ads</td>
                    <td className="py-3 text-right text-slate-700">92/mo</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 3-4</td>
                    <td className="py-3 text-right text-slate-700">$5,000/mo</td>
                    <td className="py-3 text-right text-slate-700">25/mo</td>
                    <td className="py-3 text-right text-slate-700">$1,500 ads</td>
                    <td className="py-3 text-right text-slate-700">60/mo</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 5-6</td>
                    <td className="py-3 text-right text-slate-700">$5,000/mo</td>
                    <td className="py-3 text-right text-slate-700">80/mo</td>
                    <td className="py-3 text-right text-slate-700">$500 ads</td>
                    <td className="py-3 text-right text-slate-700">85/mo</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 7-9</td>
                    <td className="py-3 text-right text-slate-700">$4,000/mo</td>
                    <td className="py-3 text-right text-slate-700">180/mo</td>
                    <td className="py-3 text-right text-slate-700">$300 ads</td>
                    <td className="py-3 text-right text-slate-700">195/mo</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 text-slate-700">Month 10-12</td>
                    <td className="py-3 text-right text-slate-700">$3,000/mo</td>
                    <td className="py-3 text-right text-slate-700">350/mo</td>
                    <td className="py-3 text-right text-slate-700">$200 ads</td>
                    <td className="py-3 text-right text-slate-700">365/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 leading-8 text-slate-700">
              <strong>12-Month SEO-First Total Cost:</strong>
            </p>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>SEO Investment: $46,000 (salaries, tools, freelancers)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>Paid Ads Supplement: $5,400 (decreasing as organic grows)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>Total Investment: $51,400</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Total Leads: 92+60+85+195+365 + 585+585+585 (from organic +
                  paid combined) = 2,782 leads
                </span>
              </li>
            </ul>

            <p className="mt-6 leading-8 text-slate-700">
              <strong>Cost per lead over 12 months: $18.46</strong>
            </p>

            <p className="mt-6 leading-8 text-slate-700">
              This is where the math gets interesting. The SEO approach costs
              more upfront ($51,400 vs $44,000) but generates 3x more leads.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.25} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              The Compounding Effect: Why Year 2 Changes Everything
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Here's what most marketers miss: Year 2 is where SEO delivers its
              true advantage.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Paid Ads in Year 2
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              After the account ban recovery in Year 1, you're spending $4,000/month
              with CPL around $45-50. You still have account suspension risk. Your
              CPM likely increased due to increased competition or policy changes.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Year 2 cost: $48,000-60,000 in ad spend for ~1,000-1,200 leads.
              CPL stays high and risk remains. <strong>No compounding.</strong>
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              SEO in Year 2
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              By the end of Year 1, you have organic rankings for 40+ keywords,
              150-200+ monthly organic leads, and ongoing compound growth. In Year
              2:
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Organic traffic grows to
                400-500 leads/month (from 350 leads/month at end of Year 1)
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> SEO investment drops to
                $2,000-2,500/month (maintenance mode)
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span> Total Year 2: 5,000+
                leads from 20,000-30,000 in investment
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <strong>Cost per lead: $4-6</strong>
              </li>
            </ul>

            <p className="mt-6 leading-8 text-slate-700">
              <strong>Compare the two over 24 months:</strong>
            </p>

            <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 text-left font-bold text-slate-900">
                      Metric
                    </th>
                    <th className="pb-3 text-center font-bold text-slate-900">
                      Paid Ads
                    </th>
                    <th className="pb-3 text-center font-bold text-slate-900">
                      SEO
                    </th>
                    <th className="pb-3 text-center font-bold text-slate-900">
                      Winner
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 font-semibold text-slate-900">
                      Total 24-Month Cost
                    </td>
                    <td className="py-3 text-center text-slate-700">$92,000</td>
                    <td className="py-3 text-center text-slate-700">$71,400</td>
                    <td className="py-3 text-center text-blue-600 font-bold">
                      SEO (23% cheaper)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 font-semibold text-slate-900">
                      Total Leads Generated
                    </td>
                    <td className="py-3 text-center text-slate-700">1,929</td>
                    <td className="py-3 text-center text-slate-700">7,782</td>
                    <td className="py-3 text-center text-blue-600 font-bold">
                      SEO (4x more)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 font-semibold text-slate-900">
                      Cost Per Lead
                    </td>
                    <td className="py-3 text-center text-slate-700">$47.66</td>
                    <td className="py-3 text-center text-slate-700">$9.17</td>
                    <td className="py-3 text-center text-blue-600 font-bold">
                      SEO (5.2x better)
                    </td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 font-semibold text-slate-900">
                      Account Ban Risk
                    </td>
                    <td className="py-3 text-center text-red-600">High</td>
                    <td className="py-3 text-center text-green-600">None</td>
                    <td className="py-3 text-center text-blue-600 font-bold">
                      SEO
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6 leading-8 text-slate-700">
              Over 24 months, SEO is 5.2x cheaper per lead and generates 4x more
              leads. And it's immune to platform enforcement actions.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.3} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              The Real Risk: The Hidden Cost of Account Bans
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              The financial cost of a Google Ads ban is more than lost ad spend.
              It includes:
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Immediate Costs
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>Months without a lead source (your ads stop immediately)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Emergency reallocation to other channels (usually at worse CPL)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Escalated communication to win back your account (lawyer fees,
                  agency costs)
                </span>
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Secondary Costs
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Rebuilding trust with new platforms (Meta bans often follow Google
                  bans)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Higher CPM while your new accounts rebuild historical performance
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Disrupted employee workflows and delayed strategic initiatives
                </span>
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Strategic Costs
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Forced reliance on platforms that are less favorable to your
                  industry
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Lost institutional knowledge when you rebuild (new platform, new
                  strategies)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Permanent loss of pixel data and audience targeting capabilities
                </span>
              </li>
            </ul>

            <p className="mt-6 leading-8 text-slate-700">
              A single account ban can easily cost $50,000-100,000 in lost revenue
              and recovery investment. That's on top of the normal advertising
              spend.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.35} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              When to Use Paid Ads vs. SEO
            </h2>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Use Paid Ads When:
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  You need leads <strong>immediately</strong> (like launching a
                  new product)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  You're testing a new market or offer before investing in SEO
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  You're not in a high-risk vertical (lower ban risk = different
                  ROI math)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  Your SEO timeline is too long for your business needs (e.g.,
                  you need revenue in 4 months)
                </span>
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              Use SEO When:
            </h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  You're in a high-risk industry (peptides, supplements, CBD,
                  etc.)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  You need sustainable, long-term growth (not one-time campaigns)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  You want to reduce dependence on volatile ad platforms
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">•</span>
                <span>
                  You can wait 4-6 months to see major results (but results
                  compound forever after)
                </span>
              </li>
            </ul>

            <h3 className="mt-8 text-2xl font-bold text-[#0c1222]">
              The Hybrid Approach (Best for Most High-Risk Brands)
            </h3>
            <p className="mt-4 leading-8 text-slate-700">
              Year 1: Invest 70% into SEO, 30% into paid ads. This gives you
              immediate lead flow while building your organic foundation.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Year 2+: Invert it. Invest 70% into SEO maintenance and scaling,
              10-20% into paid ads for supplemental volume.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This approach balances short-term lead needs with long-term
              resilience. By Year 2, you have both a reliable organic channel and
              sustainable growth that doesn't depend on any single platform.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.4} variant="soft">
          <section className="prose prose-lg max-w-none">
            <h2 className="mt-12 text-3xl font-bold text-[#0c1222]">
              The Bottom Line
            </h2>

            <p className="mt-6 leading-8 text-slate-700">
              Paid advertising looks attractive in month 1. It's fast, it's
              measurable, and it drives leads immediately. But if you're in a
              high-risk industry, you're betting on platforms that could ban you
              without warning.
            </p>

            <p className="mt-6 leading-8 text-slate-700">
              SEO is slower to start. It requires discipline and strategic
              content. But it's also immune to platform enforcement, it compounds
              forever, and it delivers 5-10x better ROI over 24 months.
            </p>

            <p className="mt-6 leading-8 text-slate-700">
              For peptide suppliers, supplement brands, and CBD companies, the
              math is clear: <strong>SEO should be your primary channel.</strong> Use
              paid ads tactically to fill gaps and test new markets. But build
              your business on the channel you actually control.
            </p>

            <p className="mt-6 leading-8 text-slate-700">
              Once you understand the true cost per lead of each channel, the
              choice becomes obvious.
            </p>
          </section>
        </Reveal>

        {/* CTA Section */}
        <Reveal delay={0.45} variant="soft">
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 p-8 md:p-12">
            <h3 className="text-2xl font-bold text-[#0c1222]">
              Ready to Build Your SEO-First Growth Engine?
            </h3>
            <p className="mt-3 text-lg text-slate-600">
              We help high-risk brands build sustainable organic growth that
              doesn't depend on volatile ad platforms. Let's develop a 24-month
              SEO strategy that delivers real ROI.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Schedule Your SEO Strategy Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>

        {/* Article Meta Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: articleTitle,
              description: articleDescription,
              image:
                "https://www.harborpointmarketingservices.com/og-image.jpg",
              datePublished: articleDate,
              author: {
                "@type": "Organization",
                name: "Harbor Point Marketing",
                url: "https://www.harborpointmarketingservices.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Harbor Point Marketing",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.harborpointmarketingservices.com/logo.png",
                },
              },
            }),
          }}
        />
      </article>
    </main>
  );
}
