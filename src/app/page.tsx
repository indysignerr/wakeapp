import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Bento } from "@/components/sections/bento";
import { Themes } from "@/components/sections/themes";
import { Focus } from "@/components/sections/focus";
import { Blackout } from "@/components/sections/blackout";
import { ScreenTime } from "@/components/sections/screen-time";
import { Ranks } from "@/components/sections/ranks";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative">
        <Hero />
        <Manifesto />
        <Bento />
        <Themes />
        <Focus />
        <Blackout />
        <ScreenTime />
        <Ranks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
