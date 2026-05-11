"use client";

export function Quote() {
  return (
    <section className="py-[100px]" style={{ background: "var(--cream)" }}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-14">
        <div className="reveal">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted flex items-center gap-2 mb-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange" />
            From a client
          </span>

          <p
            className="font-display font-normal leading-[1.18] tracking-[-0.025em]"
            style={{ fontSize: "clamp(28px, 3.6vw, 48px)", maxWidth: "1120px" }}
          >
            "They didn't just{" "}
            <em className="font-serif italic text-orange font-normal">build</em> what we asked for — they
            helped us see what we actually needed. Six weeks in, our team was shipping faster than ever,
            with infrastructure that finally felt like ours."
          </p>

          <div className="mt-9 flex items-center gap-3.5 font-mono text-[12px] tracking-[0.12em] uppercase text-muted">
            <span
              className="w-10 h-10 rounded-full grid place-items-center text-paper font-display font-medium text-[16px] flex-shrink-0"
              style={{ background: "linear-gradient(135deg, var(--orange) 0%, #8a3a10 100%)" }}
            >
              A
            </span>
            <span>Aanya R. &nbsp;·&nbsp; CTO, Northbound Labs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
