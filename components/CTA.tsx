"use client";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden isolation-isolate text-ink py-[140px] max-md:py-[88px] max-sm:py-[72px]"
      style={{ background: "var(--orange)" }}
    >
      <CTABg />

      {/* Decorative rocket — bobs in corner */}
      <svg
        className="absolute right-[-30px] bottom-[-30px] w-[320px] h-[320px] pointer-events-none z-[1] opacity-85 max-md:w-[200px] max-md:h-[200px] max-sm:w-[140px] max-sm:h-[140px] max-sm:right-[-22px] max-sm:top-6 max-sm:bottom-auto max-sm:opacity-55"
        viewBox="0 0 200 200"
        aria-hidden="true"
        style={{ animation: "bob 6s ease-in-out infinite" }}
      >
        <g transform="rotate(35 100 100)">
          <path d="M100 20 C 140 60, 152 110, 142 160 L 142 175 L 58 175 L 58 160 C 48 110, 60 60, 100 20 Z" fill="#14110F"/>
          <circle cx="100" cy="78" r="16" fill="#F2EBDD"/>
          <circle cx="100" cy="78" r="10" fill="#F25C19"/>
          <path d="M58 140 L 30 178 L 58 168 Z" fill="#F2EBDD"/>
          <path d="M142 140 L 170 178 L 142 168 Z" fill="#F2EBDD"/>
          <g transform="translate(100 178)">
            <path d="M -22 0 Q 0 50 22 0 Q 10 -4 0 -4 Q -10 -4 -22 0 Z" fill="#F2EBDD" opacity="0.8"/>
          </g>
        </g>
      </svg>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-14 relative z-[2]">

        {/* Eyebrow */}
        <div className="reveal inline-flex items-center gap-3 mb-8">
          <span className="w-10 h-px bg-ink opacity-50" />
          <span className="font-mono text-[12px] tracking-[0.16em] uppercase">Let's build · 2026 cohort open</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal font-display font-medium leading-[0.92] tracking-tightest max-w-[14ch]"
          style={{ fontSize: "clamp(56px, 9vw, 144px)", transitionDelay: "0.1s" }}
        >
          Let's launch something{" "}
          <em className="font-serif italic font-normal">worth</em> shipping.
        </h2>

        {/* CTA foot */}
        <div
          className="reveal mt-16 grid gap-8 items-end max-sm:grid-cols-1 max-sm:mt-10 max-sm:gap-7"
          style={{ gridTemplateColumns: "1fr 1fr", transitionDelay: "0.2s" }}
        >
          <p className="text-[18px] leading-[1.5] max-w-[42ch] max-sm:text-[16px]">
            Tell us about your project — even if it's still half-formed. We'll come back with a plan,
            a timeline, and a no-strings consultation.
          </p>

          <div className="flex gap-3.5 flex-wrap max-sm:flex-col max-sm:gap-2.5">
            <a
              href="mailto:hello@biznesscraft.com"
              className="btn-magnetic inline-flex items-center justify-center gap-3 px-[26px] py-[18px] rounded-full font-mono text-[12px] tracking-[0.1em] uppercase bg-ink text-paper border border-transparent shadow-[0_12px_28px_-10px_rgba(20,17,15,0.4)] transition-all duration-300 hover:bg-paper hover:text-ink max-sm:w-full"
            >
              Start a conversation
              <span className="inline-grid place-items-center w-5 h-5 rounded-full bg-white/25">↗</span>
            </a>
            <a
              href="#"
              className="btn-magnetic inline-flex items-center justify-center gap-3 px-[26px] py-[18px] rounded-full font-mono text-[12px] tracking-[0.1em] uppercase bg-transparent text-ink border border-ink transition-all duration-300 hover:bg-ink hover:text-paper max-sm:w-full"
            >
              Schedule a call
              <span className="inline-grid place-items-center w-5 h-5 rounded-full bg-[rgba(20,17,15,0.08)]">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABg() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(20,17,15,0.18) 1px, transparent 1.5px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 80% 90% at 30% 60%, black 20%, transparent 80%)",
        }}
      />
      {/* Dashed rings */}
      <div className="absolute rounded-full border border-dashed border-[rgba(20,17,15,0.22)]"
        style={{ width: 620, height: 620, top: -200, left: -180 }} />
      <div className="absolute rounded-full border border-dashed border-[rgba(20,17,15,0.16)]"
        style={{ width: 360, height: 360, bottom: -120, right: "14%" }} />
      {/* Soft glows */}
      <div className="absolute rounded-full"
        style={{ width: 700, height: 700, top: -260, left: -120,
          background: "radial-gradient(circle, rgba(252,227,210,0.55) 0%, transparent 65%)",
          filter: "blur(60px)", animation: "float-a 22s ease-in-out infinite" }} />
      <div className="absolute rounded-full"
        style={{ width: 500, height: 500, bottom: -220, right: -120,
          background: "radial-gradient(circle, rgba(20,17,15,0.18) 0%, transparent 65%)",
          filter: "blur(70px)", animation: "float-b 28s ease-in-out infinite" }} />
      {/* Traced arcs */}
      <div className="absolute inset-0 opacity-50">
        <svg viewBox="0 0 1440 700" preserveAspectRatio="none" className="w-full h-full">
          <path className="cta-arc-solid"  d="M -50 540 Q 320 360, 720 420 T 1500 280" />
          <path className="cta-arc-dashed" d="M -50 180 Q 400 320, 780 220 T 1500 480" />
          <path className="cta-arc-dashed" d="M -50 640 Q 480 580, 900 620 T 1500 540" />
        </svg>
      </div>
      {/* Big italic "craft" watermark */}
      <div
        className="absolute font-serif italic font-semibold pointer-events-none"
        style={{
          fontSize: "clamp(180px, 26vw, 380px)",
          color: "transparent",
          WebkitTextStroke: "1.2px rgba(20,17,15,0.14)",
          lineHeight: 0.9,
          letterSpacing: "-0.06em",
          top: "12%",
          right: "-3%",
        }}
      >
        craft
      </div>
      {/* Twinkling stars */}
      {[
        { top: "18%",    left: "9%",   delay: "0.3s", size: "12px", color: "rgba(20,17,15,0.65)" },
        { top: "12%",    right: "22%", delay: "1.5s", size: "16px", color: "rgba(255,255,255,0.7)" },
        { bottom: "28%", left: "26%",  delay: "2.3s", size: "11px", color: "rgba(20,17,15,0.65)" },
        { top: "42%",    right: "10%", delay: "3.1s", size: "14px", color: "rgba(255,255,255,0.6)" },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute font-serif italic"
          style={{ ...s, fontSize: s.size, animation: `twinkle 4.4s ease-in-out ${s.delay} infinite` }}
        >
          {i % 2 === 0 ? "✦" : "✧"}
        </span>
      ))}
    </div>
  );
}
