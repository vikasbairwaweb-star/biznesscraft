"use client";

import { useEffect, useRef } from "react";

export function CursorBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ cx: 0, cy: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    // Hide on touch devices
    if (!window.matchMedia("(hover: hover)").matches) return;

    const onMove = (e: MouseEvent) => {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
      blob.style.opacity = "1";
    };
    const onLeave = () => { blob.style.opacity = "0"; };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    // Expand on interactive elements
    const interactives = document.querySelectorAll("a, button, .svc-card, .why-card, .principle");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", () => { blob.style.width = "44px"; blob.style.height = "44px"; });
      el.addEventListener("mouseleave", () => { blob.style.width = "18px"; blob.style.height = "18px"; });
    });

    let raf: number;
    function loop() {
      pos.current.cx += (pos.current.tx - pos.current.cx) * 0.18;
      pos.current.cy += (pos.current.ty - pos.current.cy) * 0.18;
      blob.style.transform = `translate(${pos.current.cx}px, ${pos.current.cy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 w-[18px] h-[18px] rounded-full bg-orange pointer-events-none z-[9999] mix-blend-difference opacity-0 transition-[width,height,opacity] duration-200"
      style={{ transform: "translate(-50%, -50%)" }}
      aria-hidden="true"
    />
  );
}
