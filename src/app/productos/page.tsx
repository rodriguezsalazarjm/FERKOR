import type { Metadata } from "next";
import { featuredProducts, complementaryProducts } from "@/content/products";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/inner/PageHero";
import { BlockHeader } from "@/components/sections/inner/Blocks";
import { ProductLineCard } from "@/components/sections/ProductLineCard";
import { ToolCatalog } from "@/components/sections/ToolCatalog";
import { IdentifyBand } from "@/components/sections/IdentifyBand";
import { FinalCta } from "@/components/sections/home/FinalCta";

export const metadata: Metadata = {
  title: "Productos: cuchillos dentados, zigzag flow pack, rodamientos y correas",
  description:
    "Cuchillos dentados para envasadoras y selladoras, cuchillos zigzag para flow pack, rodamientos lineales y correas de arrastre. Santiago de Chile.",
};

export default function ProductosPage() {
  return (
    <>
      <PageHero
        index="P1"
        label="Productos"
        title="Cuchillos y repuestos"
        accent="para envasadoras."
        lead="Cuchillos dentados y zigzag para envasadoras, selladoras y flow pack, y los repuestos que mantienen tu línea andando: rodamientos lineales y correas de arrastre."
        product={{ src: "/images/herramientas/107800.webp", alt: "Cuchillo zigzag para máquina flow pack" }}
        actions={
          <Button href="/contacto" size="lg" arrow>
            Cotizar con una foto
          </Button>
        }
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="wrap">
          <BlockHeader index="01" label="Líneas principales" title="Cuchillos dentados" accent="y zigzag." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
            {featuredProducts.map((p) => (
              <ProductLineCard key={p.slug} product={p} size="lg" />
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:gap-6">
            {complementaryProducts.map((p) => (
              <ProductLineCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <IdentifyBand />

      <section id="catalogo" aria-label="Catálogo" className="scroll-mt-20 bg-white py-20 md:py-28">
        <div className="wrap">
          <BlockHeader
            index="02"
            label="Catálogo"
            title="Piezas reales"
            accent="fabricadas y suministradas."
            lead={<p>Filtra por familia. Las medidas y materiales se definen para cada requerimiento; no se muestran precios.</p>}
          />
          <div className="mt-12">
            <ToolCatalog />
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
