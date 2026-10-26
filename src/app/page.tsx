import { Hero } from "@/components/sections/home/Hero";
import { SpecialtyStrip } from "@/components/sections/home/SpecialtyStrip";
import { FeaturedProducts } from "@/components/sections/home/FeaturedProducts";
import { Services } from "@/components/sections/home/Services";
import { IdentifyBand } from "@/components/sections/IdentifyBand";
import { Works } from "@/components/sections/home/Works";
import { Rectification } from "@/components/sections/home/Rectification";
import { Industries } from "@/components/sections/home/Industries";
import { Process } from "@/components/sections/home/Process";
import { Differentials } from "@/components/sections/home/Differentials";
import { Reviews } from "@/components/sections/Reviews";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { FinalCta } from "@/components/sections/home/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SpecialtyStrip />
      <ClientLogos variant="marquee" />
      <FeaturedProducts />
      <Services />
      <IdentifyBand />
      <Works />
      <Rectification />
      <Industries />
      {/* Testimonios reales (reemplaza "Quiénes somos"); no se muestra hasta tener reseñas autorizadas. */}
      <Reviews index="06" />
      <Process />
      <Differentials />
      <FinalCta />
    </>
  );
}
