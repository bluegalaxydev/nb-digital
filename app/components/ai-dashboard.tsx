"use client";

import { useEffect, useRef } from "react";

/**
 * Premium AI visualization — abstract, cinematic, 30s loop.
 * Shows an animated neural-network / particle field with
 * orbiting rings and data-flow arcs. Deliberately abstract
 * so viewers see "powerful AI" without learning HOW it works.
 *
 * Pure canvas — zero text, zero metrics, zero secrets.
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  pulse: number;
  speed: number;
  hue: number;
}

interface DataArc {
  from: number;
  to: number;
  progress: number;
  speed: number;
  width: number;
}

export default function AiDashboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // HiDPI
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const W = 640;
    const H = 440;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.scale(dpr, dpr);

    const cx = W / 2;
    const cy = H / 2;

    // ── Create particles ──
    const particles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 40 + Math.random() * 160;
      particles.push({
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: 1.5 + Math.random() * 2.5,
        pulse: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
        hue: 210 + Math.random() * 30, // blue range
      });
    }

    // ── Data flow arcs ──
    const arcs: DataArc[] = [];
    for (let i = 0; i < 8; i++) {
      arcs.push({
        from: Math.floor(Math.random() * particles.length),
        to: Math.floor(Math.random() * particles.length),
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.005,
        width: 0.5 + Math.random() * 1.5,
      });
    }

    // ── Orbit rings ──
    const rings = [
      { r: 80, speed: 0.0008, opacity: 0.08, dash: [4, 8] },
      { r: 130, speed: -0.0005, opacity: 0.06, dash: [2, 12] },
      { r: 185, speed: 0.0003, opacity: 0.04, dash: [6, 6] },
    ];

    let startTime = Date.now();

    function draw() {
      if (!ctx) return;
      const t = (Date.now() - startTime) / 1000; // seconds

      // ── Clear with fade trail ──
      ctx.fillStyle = "rgba(11, 17, 32, 0.15)";
      ctx.fillRect(0, 0, W, H);

      // ── Background radial glow ──
      const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 220);
      bgGrad.addColorStop(0, "rgba(37, 99, 235, 0.06)");
      bgGrad.addColorStop(0.5, "rgba(14, 165, 233, 0.03)");
      bgGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, W, H);

      // ── Center core ──
      const coreSize = 18 + Math.sin(t * 1.5) * 4;
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreSize * 2.5);
      coreGrad.addColorStop(0, "rgba(59, 130, 246, 0.5)");
      coreGrad.addColorStop(0.4, "rgba(37, 99, 235, 0.2)");
      coreGrad.addColorStop(1, "rgba(37, 99, 235, 0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, coreSize * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Core solid
      ctx.beginPath();
      ctx.arc(cx, cy, coreSize, 0, Math.PI * 2);
      const coreInner = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreSize);
      coreInner.addColorStop(0, "rgba(147, 197, 253, 0.9)");
      coreInner.addColorStop(1, "rgba(59, 130, 246, 0.4)");
      ctx.fillStyle = coreInner;
      ctx.fill();

      // ── Orbit rings ──
      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * ring.speed * 60);
        ctx.setLineDash(ring.dash);
        ctx.strokeStyle = `rgba(96, 165, 250, ${ring.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // ── Move + draw particles ──
      particles.forEach((p) => {
        // gentle drift
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.speed;

        // boundary bounce (soft)
        if (p.x < 20 || p.x > W - 20) p.vx *= -1;
        if (p.y < 20 || p.y > H - 20) p.vy *= -1;

        // gentle gravity toward center
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 190) {
          p.vx += dx * 0.00005;
          p.vy += dy * 0.00005;
        }

        const alpha = 0.3 + Math.sin(p.pulse) * 0.25;
        const size = p.r + Math.sin(p.pulse * 1.3) * 0.8;

        // glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4);
        glow.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${alpha * 0.3})`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2);
        ctx.fill();

        // dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${alpha + 0.2})`;
        ctx.fill();
      });

      // ── Connection lines between close particles ──
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.08 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Data flow arcs (traveling dots along connections) ──
      arcs.forEach((arc) => {
        arc.progress += arc.speed;
        if (arc.progress > 1) {
          arc.progress = 0;
          arc.from = Math.floor(Math.random() * particles.length);
          arc.to = Math.floor(Math.random() * particles.length);
        }

        const from = particles[arc.from];
        const to = particles[arc.to];
        const px = from.x + (to.x - from.x) * arc.progress;
        const py = from.y + (to.y - from.y) * arc.progress;

        // traveling dot
        const dotGrad = ctx.createRadialGradient(px, py, 0, px, py, 6);
        dotGrad.addColorStop(0, "rgba(147, 197, 253, 0.8)");
        dotGrad.addColorStop(0.5, "rgba(59, 130, 246, 0.3)");
        dotGrad.addColorStop(1, "transparent");
        ctx.fillStyle = dotGrad;
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        // trail
        const trail = 0.15;
        for (let s = 1; s <= 4; s++) {
          const tp = Math.max(0, arc.progress - s * trail * 0.03);
          const tx = from.x + (to.x - from.x) * tp;
          const ty = from.y + (to.y - from.y) * tp;
          ctx.beginPath();
          ctx.arc(tx, ty, 2 - s * 0.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${0.15 - s * 0.03})`;
          ctx.fill();
        }
      });

      // ── Hex grid overlay (very subtle) ──
      const hexR = 24;
      const hexH = hexR * Math.sqrt(3);
      ctx.strokeStyle = "rgba(59, 130, 246, 0.02)";
      ctx.lineWidth = 0.5;
      for (let row = -1; row < H / hexH + 1; row++) {
        for (let col = -1; col < W / (hexR * 1.5) + 1; col++) {
          const hx = col * hexR * 1.5;
          const hy = row * hexH + (col % 2 ? hexH / 2 : 0);
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = (Math.PI / 3) * i + Math.PI / 6;
            const px = hx + hexR * Math.cos(a);
            const py = hy + hexR * Math.sin(a);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }

      // ── Outer vignette ──
      const vignette = ctx.createRadialGradient(cx, cy, H * 0.3, cx, cy, H * 0.75);
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(1, "rgba(11, 17, 32, 0.7)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      frameRef.current = requestAnimationFrame(draw);
    }

    // Initial fill
    ctx.fillStyle = "#0b1120";
    ctx.fillRect(0, 0, W, H);

    frameRef.current = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-[#0b1120] shadow-2xl shadow-blue-950/40 ring-1 ring-white/10">
      {/* Scan line */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-3xl">
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
          style={{ animation: "scanDown 6s ease-in-out infinite" }}
        />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/5 px-5 py-3">
        <div className="flex items-center gap-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-400/60">
            AI Engine Active
          </span>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="block w-full"
        style={{ height: 440, imageRendering: "auto" }}
      />

      {/* Bottom status */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/5 px-5 py-2.5">
        <span className="text-[8px] font-medium tracking-[0.15em] text-slate-600">
          HARBOR POINT AI ENGINE v3.2
        </span>
        <span className="text-[8px] tracking-wider text-blue-500/40">
          ● ● ● PROCESSING
        </span>
      </div>

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
