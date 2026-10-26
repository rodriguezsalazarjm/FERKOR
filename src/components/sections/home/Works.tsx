import Image from "next/image";
import Link from "next/link";
import { portfolio, type PortfolioItem } from "@/content/portfolio";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Button";

/** Portafolio de trabajos reales: cada ficha muestra solo los datos confirmados. */
export function Works() {
  return (
    <section aria-labelledby="trabajos-title" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="03">Trabajos reales</SectionLabel>
            <h2 id="trabajos-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              Herramientas reales,{" "}
              <span className="block text-red">hechas a medida.</span>
            </h2>
          </div>
          <p className="text-ink/75 lg:col-span-4 lg:col-start-9">
            Fotos reales de piezas fabricadas, rectificadas y mecanizadas por FERKOR para sus clientes.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px border border-line bg-line md:mt-20 lg:grid-cols-5">
          {portfolio.map((item) => (
            <li key={item.image.src} className="bg-white">
              <WorkCard item={item} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-end">
          <Link href="/productos#catalogo" className="group inline-flex items-center gap-3 text-sm font-semibold text-ink hover:text-red">
            Ver catálogo completo <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WorkCard({ item: w }: { item: PortfolioItem }) {
  const details = [
    ["Industria", w.industry],
    ["Material", w.material],
    ["Medidas", w.dimensions],
    ["Proceso", w.process],
  ].filter((d): d is [string, string] => Boolean(d[1]));
  return (
    <figure className="group flex h-full flex-col">
      <div className="relative aspect-square overflow-hidden bg-paper">
        <Image
          src={w.image.src}
          alt={w.image.alt}
          fill
          sizes="(min-width: 1024px) 20vw, 50vw"
          quality={75}
          className="object-cover transition-transform duration-700 ease-cut group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="flex flex-1 flex-col border-t border-line px-4 py-3.5">
        <p className="font-mono text-[10px] tracking-[0.08em] text-red uppercase">{w.work}</p>
        <p className="mt-1 font-display text-lg leading-none font-extrabold text-ink uppercase">{w.piece}</p>
        {details.length > 0 && (
          <dl className="mt-3 space-y-1 text-xs">
            {details.map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <dt className="text-steel">{k}:</dt>
                <dd className="text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        )}
        {w.problem && <p className="mt-3 text-sm text-ink/75">{w.problem}</p>}
        {w.solution && <p className="mt-1 text-sm text-ink">{w.solution}</p>}
      </figcaption>
    </figure>
  );
}
