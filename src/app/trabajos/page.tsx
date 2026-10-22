import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ToolCatalog } from "@/components/sections/ToolCatalog";
import { TechnicalGrid } from "@/components/graphics/TechnicalGrid";
import { FinalCta } from "@/components/sections/home/FinalCta";

export const metadata: Metadata = {
  title: "Trabajos",
  description:
    "Catálogo de herramientas de corte y piezas fabricadas por FERKOR: cuchillos circulares, dentados y rectangulares, mecanizado y repuestos.",
};

export default function TrabajosPage() {
  return (
    <>
      <section className="on-dark relative isolate overflow-hidden bg-ink text-white">
        <TechnicalGrid className="text-white/[0.045]" minor={16} major={80} />
        <div className="wrap relative py-20 md:py-28">
          <SectionLabel index="P8" tone="dark">
            Trabajos
          </SectionLabel>
          <h1 className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-black">
            Catálogo{" "}
            <span className="block text-red">técnico.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Herramientas de corte, piezas mecanizadas y repuestos fabricados y suministrados por FERKOR. Cada pieza se
            desarrolla según la máquina y la aplicación de tu proceso.
          </p>
          <div className="mt-10">
            <Button href="/contacto" size="lg" arrow>
              Cotizar una pieza similar
            </Button>
          </div>
        </div>
      </section>

      <section aria-label="Catálogo" className="bg-paper py-16 md:py-24">
        <div className="wrap">
          <ToolCatalog />
          <p className="mt-8 max-w-2xl text-sm text-steel">
            Fotografías de piezas reales. Las medidas, materiales y tolerancias se definen para cada requerimiento; no
            se muestran precios.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
