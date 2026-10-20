import Link from "next/link";
import { toolFamilies } from "@/content/projects";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Photo, ProvisionalBadge } from "@/components/ui/Photo";
import { Arrow } from "@/components/ui/Button";

export function Works() {
  return (
    <section aria-labelledby="trabajos-title" className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="05">Trabajos y herramientas</SectionLabel>
            <h2 id="trabajos-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              Familias de herramientas{" "}
              <span className="block text-red">que resolvemos.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-ink/75">
              Cada herramienta responde a una máquina y a un producto. Estas son las familias con las que trabajamos con
              mayor frecuencia.
            </p>
            <p className="mt-4 flex items-center gap-3 text-xs text-steel">
              <ProvisionalBadge className="shrink-0" />
              Imágenes referenciales. Portafolio documentado en preparación.
            </p>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-px bg-line md:mt-20 lg:grid-cols-3">
          {toolFamilies.map((f) => (
            <li key={f.code} className="group relative bg-paper">
              <div className="relative">
                <Photo
                  image={f.image}
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="aspect-[4/3]"
                  imgClassName="transition-[transform,filter] duration-700 ease-cut group-hover:scale-[1.05]"
                  badge={false}
                />
                <span
                  className="absolute top-0 right-0 h-10 w-10 origin-top-right scale-0 bg-red transition-transform duration-300 ease-cut [clip-path:polygon(0_0,100%_0,100%_100%)] group-hover:scale-100"
                  aria-hidden="true"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-3.5 sm:p-5 md:p-6">
                <div>
                  <p className="font-mono text-[11px] text-steel">{f.code}</p>
                  <h3 className="mt-1.5 font-display text-lg leading-none font-extrabold text-ink uppercase sm:text-2xl md:text-[1.7rem]">{f.title}</h3>
                  <p className="mt-1.5 text-xs text-ink/70 sm:mt-2 sm:text-sm">{f.application}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-end">
          <Link href="/trabajos" className="group inline-flex items-center gap-3 text-sm font-semibold text-ink hover:text-red">
            Ver portafolio técnico <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
