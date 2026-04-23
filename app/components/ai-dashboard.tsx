"use client";

import { useEffect, useState, useRef } from "react";

/* ── Fake log lines the "AI engine" streams ── */
const logLines = [
  "▸ Initializing SEO framework analysis...",
  "▸ Scanning site architecture — 247 pages indexed",
  "▸ Running keyword gap analysis — 1,842 terms evaluated",
  "▸ Competitor matrix: 12 domains mapped",
  "▸ Technical audit: Core Web Vitals ✓ PASS",
  "▸ Schema markup coverage: 38% → optimizing...",
  "▸ Backlink profile: 94 referring domains detected",
  "▸ Content velocity: 2.3x industry average — scaling",
  "▸ Internal link graph: 17 orphan pages flagged",
  "▸ Keyword cluster #4: +12 positions this week",
  "▸ Compliance filter: all ad creatives PASS",
  "▸ Generating monthly insight report...",
  "▸ Deploying optimized meta descriptions — batch 3/5",
  "▸ Indexation request sent: 14 new pages",
  "▸ Rank tracker: 67% of target keywords in top 20",
  "▸ Content brief generated — \"peptide purity guide\"",
  "▸ A/B test #12 concluded — variant B +34% CTR",
  "▸ Link prospect scoring: 23 opportunities queued",
  "▸ Page speed audit: LCP 1.2s ✓ FID 18ms ✓",
  "▸ Semantic enrichment: 8 topic clusters expanded",
];

/* ── Simulated traffic data for the mini chart ── */
function generateTrafficData() {
  const data = [];
  let val = 3;
  for (let i = 0; i < 30; i++) {
    val = Math.max(1, val + (Math.random() - 0.35) * 4);
    data.push(Math.round(val));
  }
  // Ensure it trends to ~50
  for (let i = 20; i < 30; i++) {
    data[i] = Math.round(30 + Math.random() * 20);
  }
  data[29] = 50;
  return data;
}

function MiniChart({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const w = 240;
  const h = 60;
  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - (v / max) * h;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPoints = `0,${h} ${points} ${w},${h}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill="url(#chartGrad)" />
      <polyline
        points={points}
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Animated counter ── */
function AnimatedNumber({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);

  return <>{value}</>;
}

/* ── Scanning line animation ── */
function ScanLine() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl">
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
        style={{
          animation: "scanDown 4s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes scanDown {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */
export default function AiDashboard() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const trafficData = useRef(generateTrafficData());

  // Stream log lines
  useEffect(() => {
    const interval = setInterval(() => {
      setLineIndex((prev) => {
        const next = (prev + 1) % logLines.length;
        setVisibleLines((lines) => {
          const updated = [...lines, logLines[next]];
          return updated.slice(-8); // keep last 8 lines
        });
        return next;
      });
    }, 2200);

    // Start with first line
    setVisibleLines([logLines[0]]);

    return () => clearInterval(interval);
  }, []);

  // Auto-scroll log
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines]);

  return (
    <div className="relative select-none overflow-hidden rounded-3xl bg-[#0b1120] shadow-2xl shadow-blue-950/40 ring-1 ring-white/10">
      <ScanLine />

      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/80">
            Engine Active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-px bg-white/[0.03]">
        {/* ── Left panel: Metrics ── */}
        <div className="col-span-2 space-y-4 p-5">
          {/* KPI Cards */}
          <div className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/5">
            <p className="text-[9px] font-bold uppercase tracking-widest text-blue-400/70">
              Daily Visitors
            </p>
            <p className="mt-1.5 text-3xl font-extrabold text-white">
              <AnimatedNumber target={50} duration={3000} />
              <span className="ml-1 text-sm font-medium text-emerald-400">
                /day
              </span>
            </p>
            <p className="mt-0.5 text-[10px] text-emerald-400/80">
              ↑ from 3/day at start
            </p>
            <div className="mt-3 h-[50px]">
              <MiniChart data={trafficData.current} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
              <p className="text-[8px] font-bold uppercase tracking-widest text-blue-400/60">
                Keywords
              </p>
              <p className="mt-1 text-xl font-extrabold text-white">
                <AnimatedNumber target={247} duration={2500} />
              </p>
              <p className="text-[9px] text-slate-500">tracked</p>
            </div>
            <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
              <p className="text-[8px] font-bold uppercase tracking-widest text-blue-400/60">
                Pages
              </p>
              <p className="mt-1 text-xl font-extrabold text-white">
                <AnimatedNumber target={89} duration={2000} />
              </p>
              <p className="text-[9px] text-slate-500">optimized</p>
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
            <p className="text-[8px] font-bold uppercase tracking-widest text-blue-400/60">
              SEO Score
            </p>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400"
                  style={{
                    width: "87%",
                    animation: "growBar 2.5s ease-out both",
                  }}
                />
              </div>
              <span className="text-sm font-bold text-emerald-400">87</span>
            </div>
          </div>
        </div>

        {/* ── Right panel: AI Log Stream ── */}
        <div className="col-span-3 flex flex-col border-l border-white/[0.04]">
          <div className="border-b border-white/[0.04] px-4 py-2.5">
            <p className="text-[9px] font-bold uppercase tracking-widest text-blue-400/60">
              AI Engine Output — Live
            </p>
          </div>
          <div
            ref={scrollRef}
            className="flex-1 overflow-hidden p-4 font-mono text-[11px] leading-[1.8]"
            style={{ maxHeight: 260 }}
          >
            {visibleLines.map((line, i) => (
              <div
                key={`${lineIndex}-${i}`}
                className="text-slate-400"
                style={{
                  animation: "fadeInLine 0.4s ease both",
                  opacity: i === visibleLines.length - 1 ? 1 : 0.5,
                }}
              >
                <span className="mr-2 text-blue-500/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {line}
              </div>
            ))}
            {/* Blinking cursor */}
            <span className="inline-block h-4 w-[2px] animate-pulse bg-blue-400" />
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="flex items-center justify-between border-t border-white/[0.04] px-5 py-2.5">
        <div className="flex items-center gap-4">
          <span className="text-[9px] font-medium text-slate-600">
            HARBOR POINT AI v3.2
          </span>
          <span className="text-[9px] text-slate-600">|</span>
          <span className="text-[9px] text-slate-600">
            Peptide Client — Website Traffic Module
          </span>
        </div>
        <span className="text-[9px] font-medium text-slate-600">
          Processing...
        </span>
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes fadeInLine {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes growBar {
          from { width: 0; }
        }
      `}</style>
    </div>
  );
}
