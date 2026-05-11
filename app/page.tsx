import { CursorBlob } from "@/components/CursorBlob";
import { Ticker }     from "@/components/Ticker";
import { Nav }        from "@/components/Nav";
import { Hero }       from "@/components/Hero";
import { TechStrip }  from "@/components/TechStrip";
import { Services }   from "@/components/Services";
import { Mission }    from "@/components/Mission";
import { Process }    from "@/components/Process";
import { WhyUs }      from "@/components/WhyUs";
import { Quote }      from "@/components/Quote";
import { CTA }        from "@/components/CTA";
import { Footer }     from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorBlob />
      <Ticker />
      <Nav />
      <Hero />
      <TechStrip />
      <Services />
      <Mission />
      <Process />
      <WhyUs />
      <Quote />
      <CTA />
      <Footer />
    </>
  );
}
