import { Hero } from "@/components/sections/home/Hero";
import { SpecialtyStrip } from "@/components/sections/home/SpecialtyStrip";
import { Intro } from "@/components/sections/home/Intro";
import { Services } from "@/components/sections/home/Services";
import { Rectification } from "@/components/sections/home/Rectification";
import { Industries } from "@/components/sections/home/Industries";
import { Works } from "@/components/sections/home/Works";
import { Process } from "@/components/sections/home/Process";
import { Differentials } from "@/components/sections/home/Differentials";
import { FinalCta } from "@/components/sections/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpecialtyStrip />
      <Intro />
      <Services />
      <Rectification />
      <Industries />
      <Works />
      <Process />
      <Differentials />
      <FinalCta />
    </>
  );
}
