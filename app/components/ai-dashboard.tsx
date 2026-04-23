"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/**
 * AI Code-Writing visualization — 30s loop.
 * Shows an IDE-like interface with AI auto-typing SEO-related code.
 * Code is PURELY DECORATIVE — generic schema markup, meta tags,
 * HTML structure. Nothing reveals real AI prompts or business logic.
 */

/* ── Decorative code snippets (30s worth, ~1.5s each) ── */
const codeBlocks = [
  {
    label: "schema.jsonld",
    lines: [
      { text: '{', color: 'white' },
      { text: '  "@context": "https://schema.org",', color: '#7dd3fc' },
      { text: '  "@type": "Product",', color: '#7dd3fc' },
      { text: '  "name": "Research Peptide — GHK-Cu",', color: '#86efac' },
      { text: '  "category": "Peptide Research",', color: '#86efac' },
      { text: '  "offers": {', color: 'white' },
      { text: '    "@type": "Offer",', color: '#7dd3fc' },
      { text: '    "availability": "InStock"', color: '#86efac' },
      { text: '  }', color: 'white' },
      { text: '}', color: 'white' },
    ],
  },
  {
    label: "meta-optimization.html",
    lines: [
      { text: '<head>', color: '#94a3b8' },
      { text: '  <title>', color: '#f9a8d4' },
      { text: '    Premium Research Peptides | 99%+ Purity', color: '#86efac' },
      { text: '  </title>', color: '#f9a8d4' },
      { text: '  <meta name="description"', color: '#f9a8d4' },
      { text: '    content="Laboratory-grade research', color: '#86efac' },
      { text: '    peptides with certificates of analysis.', color: '#86efac' },
      { text: '    Third-party tested. Ships same day."', color: '#86efac' },
      { text: '  />', color: '#f9a8d4' },
      { text: '  <link rel="canonical"', color: '#f9a8d4' },
      { text: '    href="/products/ghk-cu" />', color: '#7dd3fc' },
      { text: '</head>', color: '#94a3b8' },
    ],
  },
  {
    label: "sitemap-generator.xml",
    lines: [
      { text: '<?xml version="1.0" encoding="UTF-8"?>', color: '#94a3b8' },
      { text: '<urlset xmlns="http://www.sitemaps.org">', color: '#f9a8d4' },
      { text: '  <url>', color: 'white' },
      { text: '    <loc>/products/bpc-157</loc>', color: '#7dd3fc' },
      { text: '    <priority>0.9</priority>', color: '#86efac' },
      { text: '    <changefreq>weekly</changefreq>', color: '#86efac' },
      { text: '  </url>', color: 'white' },
      { text: '  <url>', color: 'white' },
      { text: '    <loc>/research/peptide-guide</loc>', color: '#7dd3fc' },
      { text: '    <priority>0.8</priority>', color: '#86efac' },
      { text: '  </url>', color: 'white' },
      { text: '</urlset>', color: '#f9a8d4' },
    ],
  },
  {
    label: "internal-links.tsx",
    lines: [
      { text: 'const linkGraph = buildLinks({', color: '#c4b5fd' },
      { text: '  source: "/blog/peptide-research",', color: '#7dd3fc' },
      { text: '  targets: [', color: 'white' },
      { text: '    "/products/ghk-cu",', color: '#86efac' },
      { text: '    "/products/bpc-157",', color: '#86efac' },
      { text: '    "/research/purity-testing",', color: '#86efac' },
      { text: '  ],', color: 'white' },
      { text: '  anchor: "contextual",', color: '#fbbf24' },
      { text: '  weight: "high-relevance",', color: '#fbbf24' },
      { text: '});', color: '#c4b5fd' },
    ],
  },
  {
    label: "keyword-cluster.config",
    lines: [
      { text: 'cluster: "research_peptides"', color: '#c4b5fd' },
      { text: 'primary_keyword:', color: '#f9a8d4' },
      { text: '  "buy research peptides online"', color: '#86efac' },
      { text: 'secondary:', color: '#f9a8d4' },
      { text: '  - "ghk-cu peptide research"', color: '#7dd3fc' },
      { text: '  - "bpc-157 lab grade"', color: '#7dd3fc' },
      { text: '  - "peptide purity certificate"', color: '#7dd3fc' },
      { text: '  - "third party tested peptides"', color: '#7dd3fc' },
      { text: 'search_volume: 12,400/mo', color: '#fbbf24' },
      { text: 'difficulty: 34 (achievable)', color: '#86efac' },
      { text: 'intent: "transactional"', color: '#fbbf24' },
    ],
  },
  {
    label: "content-brief.md",
    lines: [
      { text: '# SEO Content Brief — Auto Generated', color: '#c4b5fd' },
      { text: '', color: 'white' },
      { text: '## Target: "peptide purity testing"', color: '#f9a8d4' },
      { text: 'Word count: 1,800–2,200', color: '#86efac' },
      { text: 'H2s to include:', color: '#fbbf24' },
      { text: '  - What Is Peptide Purity Testing?', color: '#7dd3fc' },
      { text: '  - HPLC vs Mass Spectrometry', color: '#7dd3fc' },
      { text: '  - Reading a Certificate of Analysis', color: '#7dd3fc' },
      { text: '  - Why 99%+ Purity Matters', color: '#7dd3fc' },
      { text: 'Internal links: 4 product pages', color: '#86efac' },
      { text: 'Schema: FAQ + HowTo', color: '#86efac' },
    ],
  },
  {
    label: "backlink-outreach.yaml",
    lines: [
      { text: 'campaign: "peptide_authority"', color: '#c4b5fd' },
      { text: 'status: active', color: '#86efac' },
      { text: 'blogs_contacted: 14', color: '#fbbf24' },
      { text: 'articles_published: 10', color: '#86efac' },
      { text: 'avg_domain_authority: 42', color: '#7dd3fc' },
      { text: 'anchor_distribution:', color: '#f9a8d4' },
      { text: '  branded: 40%', color: '#7dd3fc' },
      { text: '  keyword: 30%', color: '#7dd3fc' },
      { text: '  generic: 30%', color: '#7dd3fc' },
      { text: 'referring_domains_gained: 10', color: '#86efac' },
    ],
  },
  {
    label: "robots-optimize.txt",
    lines: [
      { text: 'User-agent: *', color: '#94a3b8' },
      { text: 'Allow: /', color: '#86efac' },
      { text: 'Disallow: /api/', color: '#f9a8d4' },
      { text: 'Disallow: /admin/', color: '#f9a8d4' },
      { text: '', color: 'white' },
      { text: 'Sitemap: /sitemap.xml', color: '#7dd3fc' },
      { text: '', color: 'white' },
      { text: '# Crawl-delay optimized for', color: '#94a3b8' },
      { text: '# high-frequency indexing', color: '#94a3b8' },
      { text: 'Crawl-delay: 1', color: '#fbbf24' },
    ],
  },
];

/* ── Typing speed constants ── */
const CHAR_DELAY = 28; // ms per character
const LINE_PAUSE = 180; // ms between lines
const BLOCK_PAUSE = 1200; // ms between code blocks

export default function AiDashboard() {
  const [currentBlock, setCurrentBlock] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<
    { text: string; color: string }[]
  >([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const totalTimeRef = useRef(0);
  const LOOP_MS = 30000; // 30s loop

  const block = codeBlocks[currentBlock];

  const advanceBlock = useCallback(() => {
    const nextBlock = (currentBlock + 1) % codeBlocks.length;
    setCurrentBlock(nextBlock);
    setDisplayedLines([]);
    setCurrentLineIdx(0);
    setCurrentCharIdx(0);
    setIsTyping(true);
  }, [currentBlock]);

  // Typing effect
  useEffect(() => {
    if (!isTyping) return;

    const line = block.lines[currentLineIdx];
    if (!line) {
      // Block finished — pause then advance
      timerRef.current = setTimeout(() => {
        totalTimeRef.current += BLOCK_PAUSE;
        if (totalTimeRef.current >= LOOP_MS) {
          totalTimeRef.current = 0;
          setCurrentBlock(0);
          setDisplayedLines([]);
          setCurrentLineIdx(0);
          setCurrentCharIdx(0);
          return;
        }
        advanceBlock();
      }, BLOCK_PAUSE);
      return () => clearTimeout(timerRef.current);
    }

    if (currentCharIdx <= line.text.length) {
      timerRef.current = setTimeout(
        () => {
          const partial = line.text.slice(0, currentCharIdx);
          setDisplayedLines((prev) => {
            const updated = [...prev];
            updated[currentLineIdx] = { text: partial, color: line.color };
            return updated;
          });
          setCurrentCharIdx((c) => c + 1);
          totalTimeRef.current += CHAR_DELAY;
        },
        currentCharIdx === 0 ? LINE_PAUSE : CHAR_DELAY
      );
    } else {
      // Line finished → next line
      setCurrentLineIdx((l) => l + 1);
      setCurrentCharIdx(0);
    }

    return () => clearTimeout(timerRef.current);
  }, [isTyping, currentLineIdx, currentCharIdx, block, advanceBlock]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedLines]);

  // Right-side metrics
  const metrics = [
    { label: "Pages Optimized", value: "89", trend: "+12" },
    { label: "Keywords Tracked", value: "247", trend: "+34" },
    { label: "Backlinks Built", value: "10+", trend: "new" },
    { label: "SEO Score", value: "87", trend: "+56" },
  ];

  return (
    <div className="relative select-none overflow-hidden rounded-3xl bg-[#0c1222] shadow-2xl shadow-blue-950/40 ring-1 ring-white/10">
      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-3xl">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
          style={{ animation: "scanDown 6s ease-in-out infinite" }}
        />
      </div>

      {/* Top bar — IDE style */}
      <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[10px] font-medium text-slate-500">
            {block.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-400/60">
            AI Writing
          </span>
        </div>
      </div>

      <div className="grid grid-cols-7">
        {/* ── Left: Code editor (5 cols) ── */}
        <div className="col-span-5 border-r border-white/[0.04]">
          <div
            ref={scrollRef}
            className="h-[360px] overflow-hidden p-5 font-mono text-[12px] leading-[2]"
          >
            {displayedLines.map((line, i) => (
              <div key={`${currentBlock}-${i}`} className="flex">
                <span className="mr-4 inline-block w-5 text-right text-[10px] text-slate-700">
                  {i + 1}
                </span>
                <span style={{ color: line.color }}>{line.text}</span>
                {/* Cursor on last line */}
                {i === displayedLines.length - 1 && (
                  <span className="ml-px inline-block h-[14px] w-[2px] translate-y-[5px] animate-pulse bg-blue-400" />
                )}
              </div>
            ))}
            {displayedLines.length === 0 && (
              <div className="flex items-center gap-2 text-slate-600">
                <span className="inline-block h-[14px] w-[2px] animate-pulse bg-blue-400" />
                <span className="text-[10px]">AI engine generating...</span>
              </div>
            )}
          </div>
        </div>

        {/* ── Right: Mini metrics panel (2 cols) ── */}
        <div className="col-span-2 space-y-3 p-4">
          <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-blue-400/50">
            Live Metrics
          </p>
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-lg bg-white/[0.03] p-3 ring-1 ring-white/[0.04]"
            >
              <p className="text-[8px] font-semibold uppercase tracking-widest text-slate-600">
                {m.label}
              </p>
              <div className="mt-1 flex items-baseline justify-between">
                <span className="text-lg font-extrabold text-white">
                  {m.value}
                </span>
                <span className="text-[9px] font-semibold text-emerald-400">
                  {m.trend}
                </span>
              </div>
            </div>
          ))}
          {/* Mini progress bar */}
          <div className="rounded-lg bg-white/[0.03] p-3 ring-1 ring-white/[0.04]">
            <p className="text-[8px] font-semibold uppercase tracking-widest text-slate-600">
              Optimization
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                style={{
                  width: "87%",
                  animation: "growBar 3s ease-out both",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="flex items-center justify-between border-t border-white/[0.04] px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-[8px] font-medium tracking-[0.15em] text-slate-600">
            HARBOR POINT AI v3.2
          </span>
          <span className="text-[8px] text-slate-700">|</span>
          <span className="text-[8px] text-slate-600">
            SEO Framework Engine
          </span>
        </div>
        <span className="text-[8px] tracking-wider text-blue-500/40">
          ● ● ● GENERATING
        </span>
      </div>

      <style>{`
        @keyframes scanDown {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes growBar {
          from { width: 0; }
        }
      `}</style>
    </div>
  );
}
