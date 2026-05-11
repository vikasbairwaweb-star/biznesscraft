"use client";

const CARDS = [
  {
    num: "Reason 01", badge: "★ Expertise",
    title: "Expert team, proven results.",
    body: "Specialists in web, mobile, and AI delivering solutions that consistently exceed expectations at real-world scale.",
    glyph: "01",
  },
  {
    num: "Reason 02", badge: "✦ Frontier",
    title: "AI-first by default.",
    body: "We thoughtfully integrate AI into every solution, giving your business a lasting competitive edge in the digital economy.",
    glyph: "02",
  },
  {
    num: "Reason 03", badge: "◐ Clarity",
    title: "Transparent communication.",
    body: "No surprises. Regular updates, clear timelines, and honest dialogue — so you always know exactly where things stand.",
    glyph: "03",
  },
  {
    num: "Reason 04", badge: "↗ Scale",
    title: "Built to scale with you.",
    body: "Architectures designed for scale from day one — your solution grows seamlessly as your business does.",
    glyph: "04",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-[80px] md:py-[120px] bg-paper">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-14">

        {/* Head */}
        <div className="reveal grid gap-6 md:gap-14 mb-12 md:mb-16 items-end grid-cols-1 md:grid-cols-[240px_1fr]">
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted pt-2 border-t border-ink inline-block w-fit">
            N° 05 — Why Biznesscraft
          </div>
          <h2
            className="font-display font-medium leading-[0.96] tracking-tightest"
            style={{ fontSize: "clamp(36px, 5.5vw, 84px)" }}
          >
            Technical depth,{" "}
            <em className="font-serif italic text-orange font-normal">business</em> thinking.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 border border-[var(--hairline)]">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="relative overflow-hidden transition-colors duration-400 group hover:bg-paper-2 cursor-default"
              style={{
                padding: "32px 28px",
                borderRight:  i % 2 === 0 ? "1px solid var(--hairline)" : "none",
                borderBottom: i < 2       ? "1px solid var(--hairline)" : "none",
              }}
            >
              {/* Header row */}
              <div className="flex justify-between items-start gap-4 mb-7">
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">{card.num}</span>
                <span className="font-serif italic text-orange text-[14px]">{card.badge}</span>
              </div>

              <h4 className="font-display font-medium text-[26px] md:text-[30px] tracking-snug leading-[1.1] max-w-[14ch]">
                {card.title}
              </h4>
              <p className="mt-3.5 text-muted text-[15px] leading-[1.55] max-w-[50ch]">{card.body}</p>

              {/* Giant numeral — reveals orange on hover */}
              <span
                className="absolute right-[-10px] bottom-[-16px] font-display font-medium pointer-events-none leading-none tracking-[-0.05em] transition-all duration-[600ms] text-[rgba(20,17,15,0.04)] group-hover:text-orange group-hover:-translate-x-2 group-hover:-translate-y-1"
                style={{ fontSize: "clamp(100px, 14vw, 180px)" }}
              >
                {card.glyph}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
