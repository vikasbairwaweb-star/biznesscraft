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
    <section id="why" className="py-[120px] bg-paper">
      <div className="max-w-[1440px] mx-auto px-14">

        {/* Head */}
        <div
          className="reveal grid gap-14 mb-16 items-end max-md:grid-cols-1 max-md:gap-6"
          style={{ gridTemplateColumns: "240px 1fr" }}
        >
          <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted pt-2 border-t border-ink inline-block w-fit">
            N° 05 — Why Biznesscraft
          </div>
          <h2
            className="font-display font-medium leading-[0.96] tracking-tightest"
            style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}
          >
            Technical depth,{" "}
            <em className="font-serif italic text-orange font-normal">business</em> thinking.
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="reveal-stagger grid border border-[var(--hairline)]"
          style={{ gridTemplateColumns: "repeat(12,1fr)" }}
        >
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="relative overflow-hidden col-span-6 transition-colors duration-400 group hover:bg-paper-2 cursor-default max-sm:col-span-12"
              style={{
                padding: "40px 36px",
                borderRight:  i % 2 === 0 ? "1px solid var(--hairline)" : "none",
                borderBottom: i < 2       ? "1px solid var(--hairline)" : "none",
              }}
            >
              {/* Header row */}
              <div className="flex justify-between items-start gap-4 mb-7">
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted">{card.num}</span>
                <span className="font-serif italic text-orange text-[14px]">{card.badge}</span>
              </div>

              <h4 className="font-display font-medium text-[30px] tracking-snug leading-[1.1] max-w-[14ch]">
                {card.title}
              </h4>
              <p className="mt-3.5 text-muted text-[15px] leading-[1.55] max-w-[50ch]">{card.body}</p>

              {/* Giant numeral — reveals orange on hover */}
              <span
                className="absolute right-[-10px] bottom-[-16px] font-display font-medium pointer-events-none leading-none tracking-[-0.05em] transition-all duration-[600ms] text-[rgba(20,17,15,0.04)] group-hover:text-orange group-hover:-translate-x-2 group-hover:-translate-y-1"
                style={{ fontSize: "180px" }}
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
