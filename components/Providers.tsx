"use client";

import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/** Client-side providers: Lenis smooth scroll + global scroll reveals */
export function Providers({ children }: { children: React.ReactNode }) {
  useLenis();
  useScrollReveal();

  // Magnetic buttons — global effect on all .btn-magnetic elements
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>(".btn-magnetic");
    const handlers: Array<{ el: HTMLElement; move: (e: MouseEvent) => void; leave: () => void }> = [];

    btns.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`;
      };
      const leave = () => {
        btn.style.transform = "";
      };
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      handlers.push({ el: btn, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener("mousemove", move);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return <>{children}</>;
}
