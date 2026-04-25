import type { MetadataRoute } from "next";

const BASE = "https://www.harborpointmarketingservices.com";

/* ── Blog posts with publish dates ── */
const blogPosts = [
  { slug: "why-seo-is-the-number-one-growth-channel", date: "2026-04-20" },
  { slug: "how-to-advertise-peptides-without-getting-banned", date: "2026-04-20" },
  { slug: "complete-seo-framework-supplement-brands", date: "2026-04-20" },
  { slug: "ai-marketing-engine-identifies-seo-gaps", date: "2026-04-22" },
  { slug: "cbd-marketing-compliance-guide", date: "2026-04-22" },
  { slug: "long-term-seo-vs-paid-ads-cost-analysis", date: "2026-04-22" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
