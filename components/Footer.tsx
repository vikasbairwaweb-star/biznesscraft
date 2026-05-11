"use client";

const NAV_COLS = [
  {
    title: "Practice",
    links: [
      { label: "Website Development", href: "#services" },
      { label: "App Development",     href: "#services" },
      { label: "AI Services",         href: "#services" },
      { label: "AI Automations",      href: "#services" },
      { label: "Data Annotation",     href: "#services" },
      { label: "Model Training",      href: "#services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "About",    href: "#about" },
      { label: "Why Us",   href: "#why" },
      { label: "Process",  href: "#process" },
      { label: "Contact",  href: "#contact" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { label: "hello@biznesscraft.com", href: "mailto:hello@biznesscraft.com" },
      { label: "Schedule a call",        href: "#" },
      { label: "Get a quote",            href: "#" },
      { label: "LinkedIn",               href: "#" },
      { label: "Twitter / X",            href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-14">
        {/* Top grid */}
        <div
          className="grid gap-12 pb-14 border-b border-white/10 max-md:grid-cols-2 max-sm:grid-cols-1"
          style={{ gridTemplateColumns: "1.4fr 1fr 1fr 1fr" }}
        >
          {/* Brand col */}
          <div>
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <span className="w-9 h-9 rounded-[9px] bg-orange text-ink grid place-items-center transition-transform duration-400 group-hover:-rotate-[8deg] group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <path d="M12 2c3 3 5 7 5 11 0 2.5-1 4.5-2 6H9c-1-1.5-2-3.5-2-6 0-4 2-8 5-11z" />
                  <path d="M9 13l-3 3v3l3-2" />
                  <path d="M15 13l3 3v3l-3-2" />
                  <circle cx="12" cy="10" r="1.6" />
                </svg>
              </span>
              <span className="font-display font-bold text-[19px] tracking-snug text-paper">
                <b className="text-orange">bizness</b>craft
              </span>
            </a>
            <p className="mt-6 text-white/60 text-[15px] leading-[1.5] max-w-[36ch]">
              A software studio crafting exceptional digital experiences at the intersection of technology,
              design, and artificial intelligence.
            </p>
          </div>

          {/* Nav cols */}
          {NAV_COLS.map((col) => (
            <div key={col.title}>
              <h5 className="font-mono text-[11px] tracking-[0.14em] uppercase text-white/45 mb-5">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/85 text-[15px] transition-colors duration-300 hover:text-orange"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Big wordmark */}
        <div
          className="font-display font-semibold leading-[0.9] tracking-[-0.05em] text-center whitespace-nowrap overflow-hidden"
          style={{
            fontSize: "clamp(80px, 18vw, 280px)",
            margin: "60px 0 -16px",
          }}
        >
          <b className="text-orange">bizness</b>
          <em className="font-serif italic text-orange font-normal">craft</em>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center gap-4 pt-7 flex-wrap font-mono text-[11px] tracking-[0.12em] uppercase text-white/45 max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <span>© 2026 Biznesscraft Studio. All rights reserved.</span>
          <span>
            Crafted with precision{" "}
            <span className="text-orange">— 52°N · 13°E</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
