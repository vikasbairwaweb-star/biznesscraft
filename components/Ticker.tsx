"use client";

export function Ticker() {
  const items = [
    { type: "live", text: "Booking Q3 — Q4 / 2026" },
    { type: "dot", text: "✦" },
    { type: "text", text: "Based in remote-first studios" },
    { type: "dot", text: "✦" },
    { type: "text", text: "Software · AI · Mobile · Automation" },
    { type: "dot", text: "✦" },
    { type: "text", text: "150+ projects delivered worldwide" },
    { type: "dot", text: "✦" },
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="border-b border-[var(--hairline)] bg-paper overflow-hidden relative z-50">
      <div
        className="flex items-center gap-14 py-2.5 whitespace-nowrap w-max"
        style={{ animation: "tick 38s linear infinite" }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[11px] tracking-[0.12em] uppercase ${
              item.type === "live"
                ? "text-orange"
                : item.type === "dot"
                ? "text-orange"
                : "text-ink opacity-70"
            }`}
          >
            {item.type === "live" && (
              <span
                className="inline-block w-[7px] h-[7px] rounded-full bg-orange mr-1.5 align-middle"
                style={{ animation: "pulse-dot 1.6s ease-in-out infinite" }}
              />
            )}
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
