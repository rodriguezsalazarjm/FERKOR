import Link from "next/link";
import { getIndustry, type Industry } from "@/content/industries";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Photo } from "@/components/ui/Photo";
import { Arrow } from "@/components/ui/Button";
import { BlueprintPattern } from "@/components/graphics/BlueprintPattern";

export function Industries() {
  const food = getIndustry("envasado");
  const bags = getIndustry("empaques");
  const paper = getIndustry("papel");
  const products = getIndustry("alimentos");
  const other = getIndustry("otras");
  return (
    <section aria-labelledby="industrias-title" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="05">Industrias</SectionLabel>
            <h2 id="industrias-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              Donde el corte{" "}
              <span className="block text-red">no puede fallar.</span>
            </h2>
          </div>
          <Link href="/industrias" className="group inline-flex items-center gap-3 self-start text-sm font-semibold text-ink hover:text-red md:self-auto">
            Ver todas las industrias <Arrow />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:mt-20 md:grid-cols-6 md:gap-5 lg:grid-cols-12">
          {/* Destacado: envasado alimentario */}
          <article className="on-dark group relative flex min-h-[460px] flex-col justify-end overflow-hidden bg-ink text-white md:col-span-6 lg:col-span-7 lg:row-span-2">
            {food.image && (
              <Photo image={food.image} sizes="(min-width: 1024px) 58vw, 100vw" className="absolute inset-0" imgClassName="transition-transform duration-700 ease-cut group-hover:scale-[1.03]" badgePosition="tr" />
            )}
            <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/60 to-ink/0" aria-hidden="true" />
            <div className="relative p-6 md:p-10">
              <p className="flex items-center gap-3 font-mono text-xs text-red-light">
                {food.code} <span className="bg-red px-2 py-0.5 text-[10px] tracking-[0.08em] text-white uppercase">Sector principal</span>
              </p>
              <h3 className="display mt-4 text-5xl font-black md:text-6xl">{food.title}</h3>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2 md:max-w-xl">
                {food.needs.map((n) => (
                  <li key={n} className="border-t border-white/20 pt-2 text-sm text-white/85">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <IndustryPhotoTile industry={bags} className="md:col-span-6 lg:col-span-5" />

          <div className="grid gap-4 sm:grid-cols-2 md:col-span-6 md:gap-5 lg:col-span-5">
            <IndustryPhotoTile industry={paper} compact />
            <article className="relative flex min-h-[260px] flex-col justify-between overflow-hidden border border-line bg-paper p-6">
              <BlueprintPattern tone="light" drawing="none" />
              <p className="relative font-mono text-xs text-red">{products.code}</p>
              <div className="relative">
                <h3 className="font-display text-[1.7rem] leading-[0.95] font-extrabold text-ink uppercase">{products.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{products.summary}</p>
              </div>
            </article>
          </div>

          <article className="on-dark relative flex flex-col gap-4 bg-ink-800 p-6 text-white md:col-span-6 md:flex-row md:items-center md:justify-between md:px-10 md:py-8 lg:col-span-12">
            <div className="flex items-baseline gap-4">
              <p className="shrink-0 font-mono text-xs text-red-light">{other.code}</p>
              <h3 className="font-display text-[1.7rem] leading-[0.95] font-extrabold uppercase md:text-3xl">{other.title}</h3>
            </div>
            <p className="text-sm text-white/70 md:max-w-md md:text-right">{other.summary}</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function IndustryPhotoTile({ industry: i, className = "", compact = false }: { industry: Industry; className?: string; compact?: boolean }) {
  return (
    <article className={`on-dark group relative flex min-h-[260px] flex-col justify-end overflow-hidden bg-ink text-white ${className}`}>
      {i.image && (
        <Photo image={i.image} sizes="(min-width: 1024px) 30vw, 50vw" className="absolute inset-0" imgClassName="transition-transform duration-700 ease-cut group-hover:scale-[1.04]" badgePosition="tr" />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-ink/95 via-ink/40 to-ink/0" aria-hidden="true" />
      <div className={`relative ${compact ? "p-6" : "p-6 md:p-8"}`}>
        <p className="font-mono text-xs text-red-light">{i.code}</p>
        <h3 className={`mt-2 font-display leading-[0.95] font-extrabold uppercase ${compact ? "text-[1.7rem]" : "text-3xl md:text-4xl"}`}>{i.title}</h3>
        <p className="mt-2 text-sm text-white/75">{i.summary}</p>
      </div>
    </article>
  );
}
