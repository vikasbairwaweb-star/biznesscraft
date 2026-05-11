import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14110F",
        "ink-2": "#1F1B17",
        cream: "#F2EBDD",
        paper: "#F8F3E7",
        "paper-2": "#EFE7D3",
        orange: "#F25C19",
        "orange-2": "#E04A0A",
        "orange-soft": "#FCE3D2",
        muted: "#7A7166",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        body: ["var(--font-geist)", "-apple-system", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Times New Roman", "serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.035em",
        tight: "-0.03em",
        snug: "-0.02em",
        normal: "0em",
        wide: "0.06em",
        wider: "0.08em",
        widest: "0.14em",
        "ultra-wide": "0.16em",
      },
      animation: {
        tick: "tick 38s linear infinite",
        "strip-tick": "tick 36s linear infinite",
        "float-a": "float-a 18s ease-in-out infinite",
        "float-b": "float-b 22s ease-in-out infinite",
        "float-c": "float-c 26s ease-in-out infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        trace: "trace 5s cubic-bezier(.2,.7,.2,1) 0.4s forwards",
        liftoff: "liftoff 16s cubic-bezier(.5,0,.5,1) infinite",
        flame: "flame 0.14s ease-in-out infinite alternate",
        puff: "puff 5s ease-out infinite",
        rotate: "rotate 24s linear infinite",
        bob: "bob 6s ease-in-out infinite",
        blink: "blink 1s steps(2) infinite",
        pulse: "pulse 1.6s ease-in-out infinite",
      },
      keyframes: {
        tick: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "float-a": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-40px, 30px) scale(1.06)" },
        },
        "float-b": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(50px, -40px) scale(1.08)" },
        },
        "float-c": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(80px, 50px) scale(0.92)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.6)" },
          "50%": { opacity: "0.7", transform: "scale(1)" },
        },
        trace: {
          to: { strokeDashoffset: "0" },
        },
        rise: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        draw: {
          to: { strokeDashoffset: "0" },
        },
        liftoff: {
          "0%": { transform: "translate(-50%, 32%)" },
          "4%": { transform: "translate(-50.4%, 33%)" },
          "6%": { transform: "translate(-49.6%, 31%)" },
          "8%": { transform: "translate(-50%, 32%)" },
          "10%": { transform: "translate(-50%, 30%)" },
          "50%": { transform: "translate(-50%, -20%)" },
          "78%": { transform: "translate(-50%, -120%)", opacity: "1" },
          "82%": { transform: "translate(-50%, -160%)", opacity: "0" },
          "83%": { transform: "translate(-50%, 32%)", opacity: "0" },
          "88%": { transform: "translate(-50%, 32%)", opacity: "1" },
          "100%": { transform: "translate(-50%, 32%)" },
        },
        flame: {
          from: { transform: "scaleY(1) scaleX(1)" },
          to: { transform: "scaleY(1.35) scaleX(0.92)" },
        },
        puff: {
          "0%": { opacity: "0", transform: "translate(-50%, 30%) scale(0.3)" },
          "15%": { opacity: "0.85", transform: "translate(-50%, 0%) scale(1)" },
          "60%": { opacity: "0.55", transform: "translate(calc(-50% + var(--dx, 0px)), -120%) scale(1.9)" },
          "100%": { opacity: "0", transform: "translate(calc(-50% + var(--dx, 0px)), -260%) scale(2.8)" },
        },
        rotate: {
          to: { transform: "rotate(360deg)" },
        },
        bob: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "50%": { transform: "translate(0, -8px) rotate(-1deg)" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
        pulse: {
          "50%": { opacity: "0.35", transform: "scale(0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
