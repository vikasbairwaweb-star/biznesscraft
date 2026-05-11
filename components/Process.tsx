"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  { phase: "Phase 01", title: "Discover.", body: "Deep dive into your goals and requirements to define the right solution.", dur: "1 — 2 Weeks" },
  { phase: "Phase 02", title: "Design.",   body: "Craft intuitive interfaces and robust architectures around your users' needs.", dur: "2 — 3 Weeks" },
  { phase: "Phase 03", title: "Build.",    body: "Agile development with continuous integration, testing, and milestone reviews.", dur: "4 — 12 Weeks" },
  { phase: "Phase 04", title: "Launch & grow.", body: "Deploy confidently and optimize continuously with data-driven feedback loops.", dur: "Ongoing" },
];

export function Process() {
  const rocketRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = timelineRef.current;
    const rocket = rocketRef.current;
    if (!tl || !rocket || window.innerWidth < 881) return;

    const steps = tl.querySelectorAll<HTMLElement>(".proc-step");
    let idx = 0;

    const positionRocket = () => {
      const step = steps[idx];
      if (!step) return;
      const tlRect = tl.getBoundingClientRect();
      const sRect = step.getBoundingClientRect();
      rocket.style.left = sRect.left - tlRect.left + 4 + "px";
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = parseInt((e.target as HTMLElement).dataset.idx ?? "0", 10);
            if (i > idx) { idx = i; positionRocket(); }
          }
        });
      },
      { threshold: 0.5 }
    );

    steps.forEach((s, i) => { s.dataset.idx = String(i); io.observe(s); });
    positionRocket();
    window.addEventListener("resize", positionRocket);
    return () => { io.disconnect(); window.removeEventListener("resize", positionRocket); };
  }, []);

  return (
    <section id="process" className="py-[120px] bg-ink text-paper relative overflow-hidden isolation-isolate">
      {/* Background graphics */}
      <ProcessBg />

      <div className="max-w-[1440px] mx-auto px-14 relative z-[2]">
        {/* Head */}
        <div className="reveal grid gap-14 mb-[68px] items-end max-md:grid-cols-1 max-md:gap-6" style={{ gridTemplateColumns: "240px 1fr" }}>
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-white/50 pt-2 border-t border-paper inline-block w-fit">
            N° 04 — Method
          </div>
          <div>
            <h2 className="font-display font-medium leading-[0.96] tracking-tightest text-paper" style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}>
              From idea to <em className="font-serif italic text-orange font-normal">liftoff</em>, in four stages.
            </h2>
            <p className="mt-5 text-white/70 text-[18px] max-w-[56ch]">Every project follows the same trusted method — one we've sharpened across 150+ launches.</p>
          </div>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative grid pt-9 gap-6 max-md:grid-cols-1"
          style={{ gridTemplateColumns: "repeat(4,1fr)" }}
        >
          {/* Horizontal rule */}
          <div className="absolute top-[52px] left-0 right-0 h-px bg-white/15 max-md:hidden" />

          {/* Rocket tracker */}
          <div
            ref={rocketRef}
            className="absolute top-[56px] left-0 -translate-y-1/2 w-7 h-7 transition-[left] duration-[1200ms] cubic-bezier(.2,.7,.2,1) max-md:hidden"
            style={{ transitionTimingFunction: "cubic-bezier(.2,.7,.2,1)" }}
          >
            <svg viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="6" fill="#F25C19"/>
              <circle cx="14" cy="14" r="13" stroke="rgba(242,92,25,0.3)" strokeWidth="1"/>
            </svg>
          </div>

          {STEPS.map((step, i) => (
            <div
              key={i}
              className="proc-step reveal relative pt-20 max-md:pt-0 max-md:pl-6 max-md:border-l max-md:border-white/15"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div
                className="absolute top-[52px] left-0 w-[9px] h-[9px] rounded-full bg-orange shadow-[0_0_0_4px_rgba(242,92,25,0.18)] max-md:hidden"
              />
              <div className="font-mono text-[11px] tracking-[0.16em] text-orange uppercase mb-3">
                {step.phase}
              </div>
              <h4 className="font-display font-medium text-[26px] tracking-snug leading-[1.15]">{step.title}</h4>
              <p className="mt-2.5 text-white/65 text-[14.5px] leading-[1.55] max-w-[28ch]">{step.body}</p>
              <div className="mt-4 font-mono text-[10.5px] tracking-[0.12em] uppercase text-white/50">{step.dur}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessBg() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1.5px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 90%)",
        }}
      />
      {/* Glows */}
      <div className="absolute rounded-full" style={{ width: 700, height: 700, top: -260, right: -200, background: "radial-gradient(circle, rgba(242,92,25,0.22) 0%, transparent 65%)", filter: "blur(40px)", animation: "float-a 20s ease-in-out infinite" }} />
      <div className="absolute rounded-full" style={{ width: 500, height: 500, bottom: -200, left: -160, background: "radial-gradient(circle, rgba(242,92,25,0.10) 0%, transparent 65%)", filter: "blur(60px)", animation: "float-b 26s ease-in-out infinite" }} />
      {/* Rings */}
      <div className="absolute rounded-full border border-dashed border-white/10" style={{ width: 540, height: 540, top: -180, right: -120 }} />
      <div className="absolute rounded-full border border-dashed border-[rgba(242,92,25,0.18)]" style={{ width: 320, height: 320, bottom: -80, left: "10%" }} />
      {/* Arcs */}
      <div className="absolute inset-0 opacity-45">
        <svg viewBox="0 0 1440 700" preserveAspectRatio="none" className="w-full h-full">
          <path className="proc-arc-solid" d="M -50 540 Q 320 360, 720 420 T 1500 280" />
          <path className="proc-arc-dashed" d="M -50 200 Q 380 320, 760 220 T 1500 460" />
          <path className="proc-arc-dashed" d="M -50 640 Q 480 580, 900 620 T 1500 540" />
        </svg>
      </div>
      {/* Giant numeral */}
      <div
        className="absolute font-display font-semibold pointer-events-none"
        style={{
          fontSize: "clamp(220px, 32vw, 460px)",
          color: "transparent",
          WebkitTextStroke: "1.2px rgba(255,255,255,0.06)",
          lineHeight: 0.9,
          letterSpacing: "-0.06em",
          bottom: "-8%",
          right: "-2%",
        }}
      >
        04
      </div>
      {/* Stars */}
      {[
        { top: "15%", left: "12%",  delay: "0.5s",  size: "12px" },
        { top: "8%",  right: "14%", delay: "1.8s",  size: "16px" },
        { bottom:"22%", left:"22%", delay: "2.6s",  size: "10px" },
        { top: "32%", right: "26%", delay: "3.2s",  size: "14px" },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute font-serif italic"
          style={{ ...s, fontSize: s.size, color: "rgba(242,92,25,0.7)", animation: `twinkle 4.4s ease-in-out ${s.delay} infinite` }}
        >
          {i % 2 === 0 ? "✦" : "✧"}
        </span>
      ))}
    </div>
  );
}
