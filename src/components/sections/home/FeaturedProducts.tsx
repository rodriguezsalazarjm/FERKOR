import { featuredProducts, complementaryProducts } from "@/content/products";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { ProductLineCard } from "@/components/sections/ProductLineCard";

/** Líneas principales: dentados y zigzag (más vendidos), más repuestos complementarios. */
export function FeaturedProducts() {
  return (
    <section id="productos" aria-labelledby="productos-title" className="scroll-mt-20 bg-paper py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="01">Productos</SectionLabel>
            <h2 id="productos-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              Lo que más nos piden:{" "}
              <span className="block text-red">dentados y zigzag.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-ink/75 lg:col-span-4 lg:col-start-9">
            Los cuchillos que cortan y sellan en envasadoras, selladoras y flow pack, y los repuestos que las mantienen
            funcionando.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:gap-6">
          {featuredProducts.map((p) => (
            <ProductLineCard key={p.slug} product={p} size="lg" />
          ))}
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:gap-6">
          {complementaryProducts.map((p) => (
            <ProductLineCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <Button href="/productos" variant="texto" arrow>
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  );
}
