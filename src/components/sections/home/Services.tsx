import Link from "next/link";
import { services, complementaryServices, type Service } from "@/content/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Photo } from "@/components/ui/Photo";
import { Arrow } from "@/components/ui/Button";
import { FerkorIcon } from "@/components/graphics/FerkorIcon";

export function Services() {
  const [fab, rect, env] = services;
  return (
    <section aria-labelledby="servicios-title" className="relative bg-paper py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionLabel index="02">Servicios</SectionLabel>
            <h2 id="servicios-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              Soluciones de corte{" "}
              <span className="block text-red">a medida.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-ink/75 lg:col-span-4 lg:col-start-9">
            Tres líneas para mantener tu operación cortando: fabricamos, recuperamos y especializamos herramientas
            según tu máquina y tu producto.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 lg:grid-cols-12 lg:gap-6">
          <ServiceCard service={fab} layout="tall" className="lg:col-span-6 lg:row-span-2" />
          <ServiceCard service={rect} layout="wide" className="lg:col-span-6" />
          <ServiceCard service={env} layout="wide" className="lg:col-span-6" />
        </div>

        {/* Soluciones complementarias */}
        <div className="on-dark mt-6 grid bg-ink text-white md:grid-cols-[1.1fr_1fr_1fr]">
          <div className="flex flex-col justify-between gap-6 border-b border-white/10 p-7 md:border-r md:border-b-0 md:p-8">
            <p className="eyebrow text-steel-light">Soluciones complementarias</p>
            <Link
              href="/servicios/soluciones-a-medida"
              className="group inline-flex items-center gap-3 font-display text-3xl leading-none font-extrabold uppercase hover:text-red-light"
            >
              Ver soluciones a medida
              <Arrow />
            </Link>
          </div>
          {complementaryServices.map((c, i) => (
            <div key={c.code} className={`p-7 md:p-8 ${i === 0 ? "border-b border-white/10 md:border-r md:border-b-0" : ""}`}>
              <p className="font-mono text-xs text-red-light">{c.code}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight font-bold uppercase">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service: s, layout, className = "" }: { service: Service; layout: "tall" | "wide"; className?: string }) {
  const tall = layout === "tall";
  return (
    <article
      className={`group chamfer-md relative flex bg-white transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--color-ink)] ${
        tall ? "flex-col" : "flex-col sm:flex-row"
      } ${className}`}
    >
      <Photo
        image={s.image}
        sizes={tall ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"}
        className={tall ? "aspect-[4/3] w-full lg:aspect-auto lg:min-h-[340px] lg:flex-1" : "aspect-[16/10] w-full shrink-0 sm:aspect-auto sm:w-[42%]"}
        imgClassName="transition-transform duration-700 ease-cut group-hover:scale-[1.04]"
        badgePosition="tl"
      />
      <div className={`flex flex-1 flex-col p-6 md:p-8 ${tall ? "" : "sm:py-7"}`}>
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs font-medium text-red">{s.code}</p>
          <FerkorIcon name={s.icon} size={tall ? 44 : 36} className="text-ink" />
        </div>
        <h3 className={`mt-4 font-display leading-[0.95] font-extrabold text-ink uppercase ${tall ? "text-4xl md:text-5xl" : "text-3xl md:text-[2.15rem]"}`}>
          {s.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-ink/75">{s.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Herramientas">
          {s.tools.slice(0, tall ? 6 : 3).map((t) => (
            <li key={t} className="rounded-sm border border-line px-2 py-1 font-mono text-[11px] text-ink/80">
              {t}
            </li>
          ))}
          {s.tools.length > (tall ? 6 : 3) && (
            <li className="rounded-sm px-2 py-1 font-mono text-[11px] text-steel">+{s.tools.length - (tall ? 6 : 3)}</li>
          )}
        </ul>
        <Link
          href={s.href}
          className="mt-auto inline-flex items-center gap-3 pt-7 text-sm font-semibold text-ink after:absolute after:inset-0 hover:text-red"
        >
          Ver servicio
          <span className="sr-only">: {s.title}</span>
          <Arrow />
        </Link>
      </div>
    </article>
  );
}
