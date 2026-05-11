"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about",    label: "Studio"   },
  { href: "#process",  label: "Process"  },
  { href: "#why",      label: "Why Us"   },
  { href: "#contact",  label: "Contact"  },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={clsx(
        "sticky top-0 z-40 border-b transition-all duration-300",
        scrolled
          ? "bg-[rgba(248,243,231,0.92)] backdrop-blur-[22px] border-[rgba(242,92,25,0.10)] shadow-[0_4px_32px_rgba(0,0,0,0.08)]"
          : "bg-[rgba(248,243,231,0.78)] backdrop-blur-[18px] border-[var(--hairline)]"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-14 flex items-center justify-between h-[72px] max-sm:h-[60px]">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Biznesscraft home">
          <span className="w-9 h-9 rounded-[9px] bg-ink grid place-items-center text-orange transition-transform duration-400 group-hover:-rotate-[8deg] group-hover:scale-105 max-sm:w-8 max-sm:h-8 max-sm:rounded-[8px]">
            <RocketIcon />
          </span>
          <span className="font-display font-bold text-[19px] tracking-snug max-sm:text-[17px]">
            <b className="text-orange">bizness</b>craft
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-9 items-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-mono text-[12px] tracking-wider uppercase py-1 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-ink after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA — magnetic */}
        <a
          href="#contact"
          className="btn-magnetic hidden md:inline-flex items-center gap-2 bg-ink text-paper px-[18px] py-3 rounded-full font-mono text-[12px] tracking-wide uppercase transition-all duration-300 hover:bg-orange"
        >
          Start a project
          <span className="inline-block">↗</span>
        </a>
      </div>
    </nav>
  );
}

function RocketIcon() {
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className="w-[18px] h-[18px] max-sm:w-4 max-sm:h-4"
    >
      <path d="M12 2c3 3 5 7 5 11 0 2.5-1 4.5-2 6H9c-1-1.5-2-3.5-2-6 0-4 2-8 5-11z" />
      <path d="M9 13l-3 3v3l3-2" />
      <path d="M15 13l3 3v3l-3-2" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M10 19l1 3 1-3" />
    </svg>
  );
}
