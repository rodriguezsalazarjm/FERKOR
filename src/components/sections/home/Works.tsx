import Link from "next/link";
import { catalog, featuredRefs } from "@/content/catalog";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductTile } from "@/components/ui/ProductTile";
import { Arrow } from "@/components/ui/Button";

export function Works() {
  const featured = featuredRefs.map((r) => catalog.find((i) => i.ref === r)).filter((i) => i !== undefined);
  return (
    <section aria-labelledby="trabajos-title" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02">Trabajos reales</SectionLabel>
            <h2 id="trabajos-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              Herramientas reales,{" "}
              <span className="block text-red">hechas a medida.</span>
            </h2>
          </div>
          <p className="text-ink/75 lg:col-span-4 lg:col-start-9">
            Cuchillos circulares, dentados y rectangulares, piezas mecanizadas y repuestos fabricados y suministrados
            por FERKOR para líneas de envasado, alimentos y papel.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px border border-line bg-line md:mt-20 lg:grid-cols-4">
          {featured.map((item) => (
            <li key={item.ref}>
              <ProductTile item={item} sizes="(min-width: 1024px) 25vw, 50vw" className="h-full" />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-steel">
            {catalog.length} referencias fotografiadas · catálogo en ampliación
          </p>
          <Link href="/trabajos" className="group inline-flex items-center gap-3 text-sm font-semibold text-ink hover:text-red">
            Ver catálogo completo <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
