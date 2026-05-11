import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Newsreader,
  Inter,
  JetBrains_Mono,
} from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400", "500"],
  variable: "--font-newsreader",
  display: "swap",
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biznesscraft — Software, engineered with intent.",
  description:
    "Biznesscraft is a software studio engineering pixel-perfect websites, mobile apps, and intelligent AI systems for ambitious teams.",
  keywords: [
    "software studio",
    "web development",
    "AI services",
    "mobile apps",
    "automation",
  ],
  openGraph: {
    title: "Biznesscraft — Software, engineered with intent.",
    description:
      "A software studio crafting exceptional digital experiences at the intersection of technology, design, and AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bricolage.variable} ${newsreader.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased bg-paper text-ink overflow-x-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
