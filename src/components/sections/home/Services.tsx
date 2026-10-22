import Link from "next/link";
import Image from "next/image";
import { services, packagingLine, advisory, type Service } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Arrow } from "@/components/ui/Button";
import { FerkorIcon } from "@/components/graphics/FerkorIcon";

/** Servicios presentados como "puertas de entrada" según la necesidad del cliente. */
export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="relative scroll-mt-20 bg-paper py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="01">Servicios</SectionLabel>
            <h2 id="servicios-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              ¿Qué necesitas{" "}
              <span className="block text-red">resolver hoy?</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-ink/75 lg:col-span-4 lg:col-start-9">
            Elige tu caso. Cada servicio parte de lo mismo: tu pieza, tu máquina y una evaluación técnica antes de
            cotizar.
          </p>
        </div>

        <ol className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-3 lg:gap-6">
          {services.map((s, i) => (
            <li key={s.slug}>
              <NeedCard service={s} n={i + 1} />
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-px bg-white/10 md:grid-cols-2">
          {[packagingLine, advisory].map((s) => (
            <Link
              key={s.slug}
              href={s.href}
              className="on-dark group flex items-start gap-5 bg-ink p-7 text-white transition-colors hover:bg-ink-800 md:p-8"
            >
              <FerkorIcon name={s.icon} size={40} className="mt-1 shrink-0 text-white/80" />
              <span className="flex-1">
                <span className="mono-index block text-red-light">{s.need}</span>
                <span className="mt-2 block font-display text-3xl leading-none font-extrabold uppercase">{s.title}</span>
                <span className="mt-2 block text-sm text-white/70">{s.summary}</span>
              </span>
              <Arrow className="mt-2 text-white/70" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeedCard({ service: s, n }: { service: Service; n: number }) {
  return (
    <article className="group chamfer-md relative flex h-full flex-col bg-white transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--color-ink)]">
      <p className="flex items-baseline gap-3 border-b border-line px-6 py-4 md:px-7">
        <span className="font-mono text-xs font-semibold text-red">{String(n).padStart(2, "0")}</span>
        <span className="font-display text-xl leading-none font-bold text-ink uppercase">“{s.need}”</span>
      </p>
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-white">
        <Image
          src={s.product.src}
          alt={s.product.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          quality={80}
          className="object-contain p-[4%] transition-transform duration-700 ease-cut group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-3xl leading-[0.95] font-extrabold text-ink uppercase md:text-[2.15rem]">{s.title}</h3>
          <FerkorIcon name={s.icon} size={36} className="shrink-0 text-ink" />
        </div>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{s.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Incluye">
          {s.tags.slice(0, 4).map((t) => (
            <li key={t} className="rounded-sm border border-line px-2 py-1 font-mono text-[11px] text-ink/80">
              {t}
            </li>
          ))}
        </ul>
        <Link
          href={s.href}
          className="mt-auto inline-flex items-center gap-3 pt-7 text-sm font-semibold text-ink after:absolute after:inset-0 hover:text-red"
        >
          Ver {s.title.toLowerCase()}
          <Arrow />
        </Link>
      </div>
    </article>
  );
}
