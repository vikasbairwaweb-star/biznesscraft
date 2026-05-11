"use client";

import { useEffect, useRef } from "react";

const STATS = [
  { count: 150, suffix: "+", label: "Projects Delivered" },
  { count: 80,  suffix: "+", label: "Clients Worldwide" },
  { count: 6,   suffix: "",  label: "Core Practices" },
  { count: 98,  suffix: "%", label: "Client Satisfaction" },
];

export function Hero() {
  return (
    <header className="relative overflow-hidden isolation-isolate" style={{ padding: "64px 0 80px" }}>
      <HeroBg />
      <div className="max-w-[1440px] mx-auto px-14 relative z-[2]">
        {/* Meta row */}
        <div className="grid grid-cols-3 gap-4 pb-6 border-b border-[var(--hairline)] max-md:grid-cols-1 max-md:gap-4">
          <MetaCell eyebrow="Volume 04 / 2026" strong="The Software Studio Issue" />
          <MetaCell eyebrow="Practice" strong="Web · Mobile · AI · Automation" />
          <MetaCell eyebrow="Availability" strong="2 new projects this quarter" strongOrange />
        </div>

        {/* Hero foot */}
        <div className="grid grid-cols-2 gap-16 items-stretch mt-6 max-md:grid-cols-1 max-md:gap-8">
          {/* Left: headline + lede + CTAs */}
          <div>
            <h1
              className="font-display font-medium leading-[0.92] tracking-tightest"
              style={{ fontSize: "clamp(56px, 10.5vw, 168px)" }}
            >
              <span className="hero-word">Software</span>{" "}
              <span className="hero-word">that</span>{" "}
              <span className="hero-word italic font-serif text-orange">moves</span>{" "}
              <span className="hero-word">your</span>{" "}
              <span className="hero-word" style={{ WebkitTextStroke: "1.5px var(--ink)", color: "transparent" }}>
                business
              </span>{" "}
              <span className="hero-word relative inline-block">
                forward.
                <svg
                  viewBox="0 0 400 30"
                  preserveAspectRatio="none"
                  className="absolute left-0 right-0 w-full overflow-visible"
                  style={{ bottom: "-8%", height: "22%" }}
                >
                  <path className="underline-path" d="M2 22 C 80 4, 200 4, 398 18" />
                </svg>
              </span>
            </h1>

            <div className="flex flex-col gap-7 mt-14">
              <p
                className="font-display font-normal text-ink leading-[1.45] tracking-[-0.01em] max-w-[56ch]"
                style={{ fontSize: "clamp(18px, 1.6vw, 22px)" }}
              >
                Biznesscraft is a software studio engineering{" "}
                <em className="font-serif italic text-orange not-italic">pixel-perfect</em> websites,
                mobile apps, and intelligent AI systems for ambitious teams.
                Built with craft, shipped with intent.
              </p>
              <div className="flex gap-3.5 items-center flex-wrap">
                <Btn href="#services" variant="primary">
                  See the work <Arrow />
                </Btn>
                <Btn href="#contact" variant="ghost">
                  Book an intro call <Arrow />
                </Btn>
              </div>
            </div>
          </div>

          {/* Right: rocket cell */}
          <RocketCell />
        </div>

        {/* Stats */}
        <HeroStats />
      </div>
    </header>
  );
}

/* ── Sub-components ───────────────────── */

function MetaCell({
  eyebrow,
  strong,
  strongOrange,
}: {
  eyebrow: string;
  strong: string;
  strongOrange?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-mono text-[11px] tracking-widest uppercase text-muted flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange" />
        {eyebrow}
      </span>
      <strong
        className={`font-display font-medium text-[15px] tracking-[-0.01em] ${strongOrange ? "text-orange" : ""}`}
      >
        {strong}
      </strong>
    </div>
  );
}

function Btn({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "ghost";
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`btn-magnetic inline-flex items-center gap-3 px-[26px] py-[18px] rounded-full font-mono text-[12px] tracking-[0.1em] uppercase transition-all duration-300 border border-transparent whitespace-nowrap
        ${
          variant === "primary"
            ? "bg-orange text-paper shadow-[0_12px_28px_-10px_rgba(242,92,25,0.55)] hover:-translate-y-0.5 hover:bg-ink"
            : "bg-transparent text-ink border-[var(--hairline)] hover:border-ink hover:bg-ink hover:text-paper"
        }`}
    >
      {children}
    </a>
  );
}

function Arrow() {
  return (
    <span className="inline-grid place-items-center w-5 h-5 rounded-full bg-white/25 transition-transform duration-300 group-hover:rotate-[-45deg]">
      ↗
    </span>
  );
}

function RocketCell() {
  return (
    <div
      className="relative max-w-[460px] justify-self-end max-md:justify-self-start max-md:max-w-[320px] max-md:w-full"
      style={{ aspectRatio: "1/1" }}
    >
      <div
        className="absolute inset-0 rounded-[22px] border border-[var(--hairline)] overflow-hidden"
        style={{
          background: `
            radial-gradient(80% 60% at 80% 0%, var(--orange-soft) 0%, transparent 60%),
            radial-gradient(60% 50% at 10% 100%, rgba(20,17,15,0.06) 0%, transparent 60%),
            var(--paper)
          `,
        }}
      >
        {/* grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--hairline-2) 1px, transparent 1px), linear-gradient(90deg, var(--hairline-2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(circle at 50% 50%, black 60%, transparent 100%)",
          }}
        />

        {/* Corner labels */}
        {[
          { pos: "top-0 left-0",  text: "N° 01 — Mission",  align: "" },
          { pos: "top-0 right-0", text: "52°N 13°E\nRemote · Global", align: "text-right" },
          { pos: "bottom-0 left-0", text: "Status: Cleared for launch", align: "" },
          { pos: "bottom-0 right-0", text: "T-00:00:01", align: "text-right text-orange" },
        ].map((c, i) => (
          <div
            key={i}
            className={`absolute p-[18px] font-mono text-[10px] tracking-[0.14em] uppercase text-muted ${c.pos} ${c.align}`}
            style={{ whiteSpace: "pre-line" }}
          >
            {c.text}
          </div>
        ))}

        {/* Orbit ring */}
        <div className="orbit-ring" />

        {/* Launch pad */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-[2] rounded-sm"
          style={{
            bottom: "16%",
            width: "32%",
            height: "4px",
            background: "linear-gradient(90deg, transparent 0%, rgba(20,17,15,0.25) 20%, rgba(20,17,15,0.25) 80%, transparent 100%)",
          }}
        >
          <span
            className="absolute top-0 w-[2px] rounded-sm"
            style={{ left: "12%", height: "18px", background: "linear-gradient(180deg, rgba(20,17,15,0.25) 0%, transparent 100%)" }}
          />
          <span
            className="absolute top-0 w-[2px] rounded-sm"
            style={{ right: "12%", height: "18px", background: "linear-gradient(180deg, rgba(20,17,15,0.25) 0%, transparent 100%)" }}
          />
        </div>

        {/* Smoke */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-[2] pointer-events-none"
          style={{ bottom: "14%", width: "70%", height: "30%" }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`puff${i % 2 === 1 ? " dark" : ""}`} />
          ))}
        </div>

        {/* Rocket SVG */}
        <svg className="rocket" viewBox="0 0 100 160">
          <path d="M50 5 C 70 30, 78 60, 72 95 L 72 115 L 28 115 L 28 95 C 22 60, 30 30, 50 5 Z" fill="#14110F" />
          <path d="M50 5 C 60 30, 64 55, 60 90 L 60 110 L 40 110 L 40 90 C 36 55, 40 30, 50 5 Z" fill="#1F1B17" opacity="0.6" />
          <circle cx="50" cy="50" r="9" fill="#F2EBDD" />
          <circle cx="50" cy="50" r="6" fill="#F25C19" />
          <circle cx="48" cy="48" r="2" fill="#FCE3D2" />
          <path d="M28 95 L 12 130 L 28 120 Z" fill="#F25C19" />
          <path d="M72 95 L 88 130 L 72 120 Z" fill="#F25C19" />
          <rect x="32" y="115" width="36" height="6" rx="2" fill="#0A0908" />
          <g transform="translate(50 116)">
            <g className="flame">
              <path d="M 0 0 L -10 18 Q 0 28 10 18 Z" fill="#F25C19" />
              <path d="M 0 4 L -5 14 Q 0 22 5 14 Z" fill="#FCE3D2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function HeroStats() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const spanEl = el.querySelector(".stat-num") as HTMLSpanElement;
          const end = parseInt(el.dataset.count ?? "0", 10);
          const dur = 1600;
          const start = performance.now();
          function step(t: number) {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            spanEl.textContent = String(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          io.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className="mt-20 grid border-t border-b border-[var(--hairline)] max-sm:grid-cols-2"
      style={{ gridTemplateColumns: "repeat(4,1fr)" }}
    >
      {STATS.map((s, i) => (
        <div
          key={i}
          className="p-7 border-r border-[var(--hairline)] flex flex-col gap-1.5 last:border-r-0 max-sm:even:border-r-0 max-sm:[&:nth-child(1)]:border-b max-sm:[&:nth-child(2)]:border-b"
          data-count={s.count}
          ref={(el) => { refs.current[i] = el as HTMLSpanElement; }}
        >
          <div className="font-display font-medium text-[48px] tracking-[-0.03em] leading-none flex items-baseline gap-0.5 max-md:text-[36px]">
            <span className="stat-num">0</span>
            {s.suffix && <sup className="text-[22px] text-orange relative top-[-10px] font-medium">{s.suffix}</sup>}
          </div>
          <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-muted">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function HeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(20,17,15,0.13) 1px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 80%)",
        }}
      />
      {/* Blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 520, height: 520,
          background: "radial-gradient(circle, rgba(242,92,25,0.45) 0%, transparent 70%)",
          top: -160, right: -120,
          filter: "blur(80px)", opacity: 0.55,
          animation: "float-a 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 460, height: 460,
          background: "radial-gradient(circle, rgba(242,92,25,0.22) 0%, transparent 70%)",
          bottom: -180, left: -120,
          filter: "blur(80px)", opacity: 0.55,
          animation: "float-b 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280, height: 280,
          background: "radial-gradient(circle, rgba(20,17,15,0.18) 0%, transparent 70%)",
          top: "40%", left: "30%",
          filter: "blur(80px)", opacity: 0.55,
          animation: "float-c 26s ease-in-out infinite",
        }}
      />
      {/* Rings */}
      <div className="absolute rounded-full border border-[rgba(20,17,15,0.08)]" style={{ width: 720, height: 720, top: -200, right: -200 }} />
      <div className="absolute rounded-full border border-dashed border-[rgba(242,92,25,0.18)]" style={{ width: 480, height: 480, bottom: -120, left: -120 }} />
      {/* Traced SVG lines */}
      <div className="absolute inset-0 opacity-50">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full">
          <path className="trace-path" d="M -50 720 Q 280 540, 540 600 T 1080 460 T 1500 240" />
          <path className="trace-path accent" d="M -50 200 Q 260 360, 540 280 T 1100 380 T 1500 660" />
          <path className="trace-path" d="M -50 480 Q 360 420, 720 520 T 1500 460" />
        </svg>
      </div>
      {/* Stars */}
      {[
        { top: "18%", left: "8%",   delay: "0.4s",  size: "14px" },
        { top: "12%", right: "22%", delay: "1.6s",  size: "18px" },
        { bottom:"32%", left: "18%", delay: "2.4s", size: "11px" },
        { bottom:"22%", right: "8%",delay: "0.8s",  size: "14px" },
        { top: "48%", left: "4%",   delay: "3.2s",  size: "12px" },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute text-orange font-serif italic"
          style={{ ...s, fontSize: s.size, animation: `twinkle 4s ease-in-out ${s.delay} infinite` }}
        >
          {i % 2 === 0 ? "✦" : "✧"}
        </span>
      ))}
    </div>
  );
}
