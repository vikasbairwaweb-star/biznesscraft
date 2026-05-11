"use client";

const PRINCIPLES = [
  { pn: "P / 01", title: "Quality first, always.",       body: "Every line of code, every pixel, every AI model crafted to the highest standard. No exceptions." },
  { pn: "P / 02", title: "Fast, predictable delivery.",  body: "Agile sprints with clear milestones — no surprises, just reliable progress you can plan against." },
  { pn: "P / 03", title: "True partnership.",            body: "We work as an extension of your team — transparent, responsive, and invested in your success." },
  { pn: "P / 04", title: "Built to scale with you.",     body: "Architectures designed from day one to grow seamlessly as your business does." },
];

function MissionBg() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(20,17,15,0.10) 1px, transparent 1.5px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 85% 80% at 15% 55%, black 20%, transparent 75%)",
        }}
      />

      {/* Drifting orange glow — top right */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 560, height: 560,
          background: "radial-gradient(circle, rgba(242,92,25,0.22) 0%, transparent 68%)",
          top: -200, right: -140,
          filter: "blur(90px)",
          animation: "float-a 20s ease-in-out infinite",
        }}
      />
      {/* Warm cream glow — bottom left */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 480, height: 480,
          background: "radial-gradient(circle, rgba(242,92,25,0.12) 0%, transparent 65%)",
          bottom: -180, left: -100,
          filter: "blur(80px)",
          animation: "float-b 25s ease-in-out infinite",
        }}
      />
      {/* Subtle mid glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 320, height: 320,
          background: "radial-gradient(circle, rgba(20,17,15,0.06) 0%, transparent 70%)",
          top: "45%", left: "55%",
          filter: "blur(70px)",
          animation: "float-c 30s ease-in-out infinite",
        }}
      />

      {/* Dashed rings */}
      <div
        className="absolute rounded-full border border-dashed border-[rgba(20,17,15,0.10)]"
        style={{ width: 680, height: 680, top: -240, right: -200 }}
      />
      <div
        className="absolute rounded-full border border-[rgba(242,92,25,0.14)]"
        style={{ width: 400, height: 400, bottom: -140, left: -100 }}
      />
      <div
        className="absolute rounded-full border border-dashed border-[rgba(20,17,15,0.07)]"
        style={{ width: 240, height: 240, top: "30%", left: "42%" }}
      />

      {/* Traced SVG arcs */}
      <div className="absolute inset-0 opacity-40">
        <svg viewBox="0 0 1440 840" preserveAspectRatio="none" className="w-full h-full">
          <path
            className="trace-path"
            d="M -50 680 Q 300 500, 600 560 T 1200 400 T 1500 200"
            fill="none" stroke="rgba(20,17,15,0.18)" strokeWidth="1"
          />
          <path
            className="trace-path accent"
            d="M -50 160 Q 280 300, 580 220 T 1160 360 T 1500 600"
            fill="none" stroke="rgba(242,92,25,0.22)" strokeWidth="1"
          />
          <path
            className="trace-path"
            d="M -50 420 Q 380 360, 740 460 T 1500 380"
            fill="none" stroke="rgba(20,17,15,0.10)" strokeWidth="1"
          />
        </svg>
      </div>

      {/* Giant italic watermark numeral */}
      <div
        className="absolute font-serif italic font-semibold pointer-events-none select-none"
        style={{
          fontSize: "clamp(200px, 28vw, 420px)",
          color: "transparent",
          WebkitTextStroke: "1px rgba(20,17,15,0.055)",
          lineHeight: 0.85,
          letterSpacing: "-0.06em",
          bottom: "-8%",
          right: "-2%",
        }}
      >
        03
      </div>

      {/* Twinkling stars */}
      {[
        { top: "14%",    left: "6%",    delay: "0.5s",  size: "13px" },
        { top: "9%",     right: "18%",  delay: "1.8s",  size: "17px" },
        { bottom: "30%", left: "22%",   delay: "2.6s",  size: "11px" },
        { bottom: "18%", right: "12%",  delay: "0.9s",  size: "14px" },
        { top: "52%",    left: "3%",    delay: "3.4s",  size: "12px" },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute text-orange font-serif italic"
          style={{ ...s, fontSize: s.size, animation: `twinkle 4.2s ease-in-out ${s.delay} infinite` }}
        >
          {i % 2 === 0 ? "✦" : "✧"}
        </span>
      ))}
    </div>
  );
}

export function Mission() {
  return (
    <section id="about" className="py-[120px] relative overflow-hidden isolation-isolate" style={{ background: "var(--cream)" }}>
      <MissionBg />
      <div className="max-w-[1440px] mx-auto px-14 relative z-[2]">

        {/* Section head */}
        <div className="grid gap-14 mb-16 items-end max-md:grid-cols-1 max-md:gap-6 reveal" style={{ gridTemplateColumns: "240px 1fr" }}>
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted pt-2 border-t border-ink inline-block w-fit">
            N° 03 — The Studio
          </div>
          <h2 className="font-display font-medium leading-[0.96] tracking-tightest" style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}>
            Built on craft,{" "}
            <em className="font-serif italic text-orange font-normal">driven</em> by intent.
          </h2>
        </div>

        <div className="grid gap-20 items-start max-md:grid-cols-1 max-md:gap-12" style={{ gridTemplateColumns: "1.05fr 1fr" }}>

          {/* Code card */}
          <div className="relative reveal">
            <div
              className="border border-[var(--hairline)] rounded-[18px] bg-ink text-paper p-7 overflow-hidden"
              style={{ position: "sticky", top: "100px" }}
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <span className="font-mono text-[11px] text-white/50">~/biznesscraft/manifest.ts</span>
              </div>
              <pre className="font-mono text-[13px] leading-[1.75] mt-4 whitespace-pre-wrap">
                <span className="text-white/40 italic">{"// crafted, not generated\n"}</span>
                <span className="text-orange">{"export const"}</span>
                {" studio = {\n  "}
                <span className="text-white/60">name</span>{": "}
                <span className="text-[#C8B89A]">"Biznesscraft"</span>
                {",\n  "}
                <span className="text-white/60">mission</span>{": "}
                <span className="text-[#C8B89A]">"Digital excellence"</span>
                {",\n  "}
                <span className="text-white/60">disciplines</span>
                {": [\n    "}
                <span className="text-[#C8B89A]">"web"</span>{", "}
                <span className="text-[#C8B89A]">"mobile"</span>
                {",\n    "}
                <span className="text-[#C8B89A]">"ai"</span>{", "}
                <span className="text-[#C8B89A]">"automation"</span>
                {",\n    "}
                <span className="text-[#C8B89A]">"data"</span>{", "}
                <span className="text-[#C8B89A]">"training"</span>
                {",\n  ],\n  "}
                <span className="text-white/60">delivers</span>
                {": "}
                <span className="text-orange">async</span>
                {" (vision) => {\n    "}
                <span className="text-orange">await</span>
                {" craft(vision);\n    "}
                <span className="text-orange">return</span>
                {" realResults;\n  },\n};"}
                <span className="code-cursor" />
              </pre>
            </div>
            <div
              className="absolute right-[-18px] top-[18px] bg-paper text-ink border border-[var(--hairline)] rounded-[14px] p-4 flex items-center gap-3 shadow-[0_16px_30px_-16px_rgba(0,0,0,0.25)]"
              style={{ transform: "rotate(3deg)" }}
            >
              <div>
                <div className="font-display font-medium text-[24px] tracking-snug leading-none">98<span className="text-orange">%</span></div>
                <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted">Retention rate</div>
              </div>
            </div>
          </div>

          {/* Statement + principles */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <p className="font-display font-normal leading-[1.18] tracking-snug mb-10" style={{ fontSize: "clamp(28px,3.2vw,42px)" }}>
              We are a software studio at the intersection of{" "}
              <em className="font-serif italic text-orange font-normal">technology</em> and business. We help
              startups and enterprises build, scale, and evolve their digital presence — using the latest in
              web, mobile, and AI.
            </p>

            <div className="flex flex-col border-t border-[var(--hairline)]">
              {PRINCIPLES.map((p, i) => (
                <div
                  key={i}
                  className="grid gap-6 items-start py-7 border-b border-[var(--hairline)] transition-all duration-300 hover:pl-4 cursor-default"
                  style={{ gridTemplateColumns: "56px 1fr auto" }}
                >
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase pt-1">{p.pn}</span>
                  <div>
                    <h4 className="font-display font-medium text-[22px] tracking-[-0.015em] leading-[1.2]">{p.title}</h4>
                    <p className="mt-2 text-muted text-[14.5px] leading-[1.55] max-w-[52ch]">{p.body}</p>
                  </div>
                  <span className="w-9 h-9 rounded-full border border-[var(--hairline)] grid place-items-center text-orange flex-shrink-0">
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 L7 12 L13 4"/>
                    </svg>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="btn-magnetic inline-flex items-center gap-3 px-[26px] py-[18px] rounded-full font-mono text-[12px] tracking-[0.1em] uppercase border border-[var(--hairline)] text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper"
              >
                Work with the studio
                <span className="inline-grid place-items-center w-5 h-5 rounded-full bg-[rgba(20,17,15,0.08)]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
