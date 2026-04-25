import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title:
    "Blog — SEO Strategies & Marketing Insights for High-Risk Businesses",
  description:
    "Expert SEO strategies, marketing guides, and industry insights for peptide companies, supplement brands, CBD businesses, and other high-risk industries. Learn how to build long-term organic growth.",
  alternates: {
    canonical: "https://www.harborpointmarketingservices.com/blog",
  },
  openGraph: {
    title: "Harbor Point Marketing Blog | High-Risk Business Marketing Insights",
    description:
      "Expert guides on SEO, paid advertising, and marketing automation for restricted industries.",
    url: "https://www.harborpointmarketingservices.com/blog",
    type: "website",
  },
};

const posts = [
  {
    slug: "/blog/why-seo-is-the-number-one-growth-channel",
    title: "Why SEO Is the #1 Growth Channel for High-Risk Businesses in 2026",
    excerpt:
      "Paid ads can be shut off overnight. SEO compounds. Here's why every peptide, supplement, and CBD brand should prioritize organic search as their primary acquisition channel.",
    category: "SEO Strategy",
    readTime: "8 min read",
    date: "Apr 20, 2026",
    featured: true,
  },
  {
    slug: "/blog/how-to-advertise-peptides-without-getting-banned",
    title: "How to Advertise Peptides Without Getting Banned: A Platform-by-Platform Guide",
    excerpt:
      "From TikTok to Reddit to Google — a detailed breakdown of what's allowed, what's restricted, and how to stay compliant while driving real revenue.",
    category: "Paid Ads",
    readTime: "12 min read",
    date: "Apr 20, 2026",
  },
  {
    slug: "/blog/complete-seo-framework-supplement-brands",
    title: "The Complete SEO Framework for Supplement Brands: From 0 to 10K Organic Visitors",
    excerpt:
      "A step-by-step guide to building a compliant SEO architecture that ranks for high-intent buyer keywords in the supplement space.",
    category: "SEO Framework",
    readTime: "15 min read",
    date: "Apr 20, 2026",
  },
  {
    slug: "/blog/ai-marketing-engine-identifies-seo-gaps",
    title: "AI in Marketing: How Our Engine Identifies SEO Gaps Your Team Misses",
    excerpt:
      "A behind-the-scenes look at how Harbor Point's AI Marketing Engine analyzes 100+ SEO signals to find compounding growth opportunities.",
    category: "AI & Technology",
    readTime: "6 min read",
    date: "Apr 22, 2026",
  },
  {
    slug: "/blog/cbd-marketing-compliance-guide",
    title: "CBD Marketing Compliance: FTC, FDA, and Platform Policies Explained",
    excerpt:
      "Navigate the regulatory maze of CBD marketing with clear guidance on what you can say, where you can advertise, and how to stay compliant.",
    category: "Compliance",
    readTime: "10 min read",
    date: "Apr 22, 2026",
  },
  {
    slug: "/blog/long-term-seo-vs-paid-ads-cost-analysis",
    title: "Long-Term SEO vs. Paid Ads: A Cost Analysis for High-Risk Brands",
    excerpt:
      "We break down the true cost per lead of SEO vs. paid advertising over 12 months — and show why SEO delivers 5-10x better ROI long-term.",
    category: "SEO Strategy",
    readTime: "7 min read",
    date: "Apr 22, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen text-[#0f172a]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#dbeafe] via-[#e8f0fe] to-[#eef4fb]">
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <Reveal delay={0.1} variant="strong">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Our Blog
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Marketing Insights for{" "}
              <span className="text-gradient">High-Risk Industries</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-500">
              Expert SEO strategies, compliance guides, and growth frameworks
              for peptide brands, supplement companies, CBD businesses, and
              other restricted verticals.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Posts grid */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Featured post */}
        {posts.filter((p) => p.featured).map((post) => (
          <Reveal key={post.title} delay={0.1} variant="strong">
            <Link href={post.slug} className="block">
              <article className="glass-card mb-12 rounded-3xl p-8 md:p-12 transition hover:shadow-lg">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                  <Tag size={12} />
                  {post.category}
                </span>
                <h2 className="mt-4 text-2xl font-bold text-slate-900 md:text-3xl">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-500">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                    {post.date}
                  </span>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.filter((p) => !p.featured).map((post, i) => (
            <Reveal key={post.title} delay={0.1 + i * 0.07} variant="soft">
              <Link href={post.slug} className="block">
                <article className="glass-card flex h-full flex-col rounded-2xl p-7 transition hover:shadow-lg">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                    <Tag size={12} />
                    {post.category}
                  </span>
                  <h3 className="mt-4 flex-1 text-lg font-bold leading-tight text-slate-900">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                      {post.date}
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Subscribe CTA */}
        <Reveal delay={0.3} variant="soft">
          <div className="mt-16 text-center">
            <div className="glass-card mx-auto max-w-2xl rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-slate-900">
                Get Notified When Articles Go Live
              </h3>
              <p className="mt-3 text-slate-500">
                We&apos;re building the most comprehensive resource library for
                high-risk business marketing. Join the waitlist.
              </p>
              <div className="mt-6">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Join the Waitlist
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
