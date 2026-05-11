"use client";

type Item = string | { italic: string };

const TECHS: Item[] = [
  "Next.js",     "✦",  "React Native", "✦",
  { italic: "PyTorch" }, "✦", "Swift",  "✦",
  "TensorFlow",  "✦",  { italic: "OpenAI" }, "✦",
  "Kotlin",      "✦",  "Flutter",      "✦",
  { italic: "LangChain" }, "✦", "Postgres", "✦",
];

export function TechStrip() {
  // Duplicate for seamless infinite loop
  const all = [...TECHS, ...TECHS];

  return (
    <div
      className="border-b border-[var(--hairline)] bg-ink text-paper overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="flex items-center gap-16 py-[22px] whitespace-nowrap w-max"
        style={{ animation: "tick 36s linear infinite" }}
      >
        {all.map((item, i) => {
          if (typeof item === "string" && item === "✦") {
            return (
              <span key={i} className="font-serif italic text-orange font-light" style={{ fontSize: "clamp(22px,2.8vw,28px)" }}>
                ✦
              </span>
            );
          }
          if (typeof item === "object" && "italic" in item) {
            return (
              <span key={i} className="font-serif italic text-orange font-light" style={{ fontSize: "clamp(22px,2.8vw,28px)", letterSpacing: "-0.02em" }}>
                {item.italic}
              </span>
            );
          }
          return (
            <span key={i} className="font-display font-medium" style={{ fontSize: "clamp(22px,2.8vw,28px)", letterSpacing: "-0.02em" }}>
              {item as string}
            </span>
          );
        })}
      </div>
    </div>
  );
}
