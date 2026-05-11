"use client";

import { useEffect, useRef } from "react";

const SERVICES = [
  {
    num: "01 / Engineering",
    title: "Website Development",
    desc: "High-performance marketing sites and web apps engineered with modern frameworks. Lightning-fast, SEO-sound, accessibility-first.",
    tags: ["React", "Next.js", "UI/UX", "SEO"],
    icon: (
      <svg viewBox="0 0 56 56" className="w-14 h-14 fill-none stroke-current" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="44" height="32" rx="3"/>
        <path d="M6 18 H 50"/>
        <circle cx="10" cy="14" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="18" cy="14" r="1"/>
        <path d="M16 26 L 22 32 L 16 38 M40 26 L 34 32 L 40 38 M28 24 L 26 40"/>
      </svg>
    ),
  },
  {
    num: "02 / Mobile",
    title: "App Development",
    desc: "Native and cross-platform mobile experiences for iOS and Android. Polished interactions, offline-first, store-ready.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
    icon: (
      <svg viewBox="0 0 56 56" className="w-14 h-14 fill-none stroke-current" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="16" y="6" width="24" height="44" rx="4"/>
        <path d="M24 10 H 32"/><circle cx="28" cy="44" r="2"/>
        <path d="M22 18 H 34 M22 24 H 30 M22 32 H 34 M22 38 H 28"/>
      </svg>
    ),
  },
  {
    num: "03 / Intelligence",
    title: "AI Services",
    desc: "Custom AI integrated into your workflows — intelligent chatbots, recommendation engines, computer vision, and NLP at scale.",
    tags: ["LLM Integration", "NLP", "Vision"],
    icon: (
      <svg viewBox="0 0 56 56" className="w-14 h-14 fill-none stroke-current" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="3"/><circle cx="42" cy="14" r="3"/>
        <circle cx="14" cy="42" r="3"/><circle cx="42" cy="42" r="3"/>
        <circle cx="28" cy="28" r="5"/>
        <path d="M17 14 H 39 M17 42 H 39 M14 17 V 39 M42 17 V 39 M17 17 L 24 24 M39 17 L 32 24 M17 39 L 24 32 M39 39 L 32 32"/>
      </svg>
    ),
  },
  {
    num: "04 / Automation",
    title: "AI Automations",
    desc: "Streamline operations with intelligent pipelines. Reduce manual work and scale effortlessly with AI-powered workflows.",
    tags: ["n8n", "Make", "Custom Bots"],
    icon: (
      <svg viewBox="0 0 56 56" className="w-14 h-14 fill-none stroke-current" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="28" cy="28" r="8"/>
        <path d="M28 6 V 14 M28 42 V 50 M6 28 H 14 M42 28 H 50 M12 12 L 18 18 M38 38 L 44 44 M44 12 L 38 18 M18 38 L 12 44"/>
      </svg>
    ),
  },
  {
    num: "05 / Data",
    title: "AI Data Annotation",
    desc: "High-quality, precise labeling to fuel ML models with clean, structured, and production-ready training datasets.",
    tags: ["Image", "NLP", "RLHF"],
    icon: (
      <svg viewBox="0 0 56 56" className="w-14 h-14 fill-none stroke-current" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="28" cy="14" rx="18" ry="6"/>
        <path d="M10 14 V 28 C 10 31, 18 34, 28 34 C 38 34, 46 31, 46 28 V 14"/>
        <path d="M10 28 V 42 C 10 45, 18 48, 28 48 C 38 48, 46 45, 46 42 V 28"/>
      </svg>
    ),
  },
  {
    num: "06 / Training",
    title: "Model Evaluation & Training",
    desc: "Expert fine-tuning, benchmarking, and training to build reliable, accurate, and production-ready AI at scale.",
    tags: ["Fine-tuning", "Benchmarking", "MLOps"],
    icon: (
      <svg viewBox="0 0 56 56" className="w-14 h-14 fill-none stroke-current" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 46 V 30 M20 46 V 22 M32 46 V 14 M44 46 V 6"/>
        <path d="M8 46 H 48"/>
        <path d="M6 22 L 18 14 L 30 8 L 44 4"/>
        <circle cx="20" cy="22" r="2"/><circle cx="32" cy="14" r="2"/><circle cx="44" cy="6" r="2"/>
      </svg>
    ),
  },
];

export function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    gridRef.current.querySelectorAll(".svc-card").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="bg-paper py-[120px]">
      <div className="max-w-[1440px] mx-auto px-14">
        {/* Section head */}
        <div className="reveal grid gap-14 mb-16 items-end max-md:grid-cols-1 max-md:gap-6" style={{ gridTemplateColumns: "240px 1fr" }}>
          <div>
            <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-muted pt-2 border-t border-ink inline-block">
              N° 02 — Practice
            </div>
          </div>
          <h2
            className="font-display font-medium leading-[0.96] tracking-tightest"
            style={{ fontSize: "clamp(40px, 5.5vw, 84px)" }}
          >
            Six disciplines,{" "}
            <em className="font-serif italic text-orange font-normal">one</em> studio.
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid border-t border-ink"
          style={{ gridTemplateColumns: "repeat(12, 1fr)" }}
        >
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="svc-card opacity-0 translate-y-6 transition-all duration-700 col-span-4 relative overflow-hidden cursor-pointer group bg-paper"
              style={{
                borderRight: "1px solid var(--hairline)",
                borderBottom: "1px solid var(--hairline)",
                padding: "36px 32px 32px",
                transitionDelay: `${i * 0.07}s`,
              }}
            >
              {/* Full-card orange wipe */}
              <div className="absolute left-0 right-0 top-0 h-0 bg-orange transition-all duration-[450ms] cubic-bezier(.2,.7,.2,1) group-hover:h-full z-0" />

              {/* Content */}
              <div className="relative z-10 transition-colors duration-400">
                <div className="flex justify-between items-start gap-4">
                  <span className="font-mono text-[11px] tracking-[0.14em] text-muted uppercase group-hover:text-white/60 transition-colors duration-400">
                    {svc.num}
                  </span>
                  <span className="w-9 h-9 grid place-items-center rounded-full border border-[var(--hairline)] group-hover:border-white/40 transition-colors duration-300">
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 12 L12 4 M5 4 H12 V11"/>
                    </svg>
                  </span>
                </div>

                <div className="mt-8 w-16 h-16 grid place-items-center text-ink group-hover:text-paper transition-colors duration-400">
                  {svc.icon}
                </div>

                <h3 className="mt-7 font-display font-medium text-[26px] tracking-snug leading-[1.1] group-hover:text-paper transition-colors duration-400">
                  {svc.title}
                </h3>
                <p className="mt-2.5 text-muted text-[14.5px] leading-[1.55] max-w-[36ch] group-hover:text-white/85 transition-colors duration-400">
                  {svc.desc}
                </p>
                <div className="mt-[22px] flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10.5px] tracking-wider uppercase px-2.5 py-1 rounded-full bg-paper-2 text-ink border border-[var(--hairline)] group-hover:bg-white/18 group-hover:text-paper group-hover:border-transparent transition-all duration-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
