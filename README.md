# Biznesscraft — Next.js

## Quick start (run these in your terminal)

```bash
cd biznesscraft
npm install
npm run dev
```

Then open http://localhost:3000

## Stack
- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with custom design tokens (ink/cream/paper/orange)
- **Framer Motion** — hero word animations
- **GSAP** — process timeline rocket scroll tracker
- **Lenis** — buttery smooth scroll
- **Fonts**: Bricolage Grotesque · Newsreader · Geist · Geist Mono

## Project structure
```
app/
  layout.tsx     → fonts (next/font), Lenis init, metadata
  page.tsx       → assembles all sections
  globals.css    → design tokens, keyframes (rocket/smoke/flame/orbit)
components/
  Ticker.tsx     → top scrolling availability ticker
  Nav.tsx        → sticky glass nav
  Hero.tsx       → headline + rocket cell + stats
  TechStrip.tsx  → dark tech marquee
  Services.tsx   → 6 service cards (orange wipe on hover)
  Mission.tsx    → code card + principles
  Process.tsx    → dark 4-step timeline + bg graphics
  WhyUs.tsx      → 4 reasons grid (giant numeral reveal)
  Quote.tsx      → client testimonial
  CTA.tsx        → full-bleed orange CTA + bg graphics
  Footer.tsx     → wordmark + nav links
  CursorBlob.tsx → custom cursor follower
hooks/
  useLenis.ts    → smooth scroll setup
```

## Deploy to Vercel
```bash
npm install -g vercel
vercel
```
