import type { Metadata } from "next";
import { images } from "@/content/images";
import Link from "next/link";
import { services, advisory } from "@/content/services";
import { complementaryProducts } from "@/content/products";
import { ProductImage } from "@/components/ui/ProductImage";
import { industries } from "@/content/industries";
import { Button, Arrow } from "@/components/ui/Button";
import { FerkorIcon } from "@/components/graphics/FerkorIcon";
import { PageHero } from "@/components/sections/inner/PageHero";
import { BlockHeader, ServiceLink } from "@/components/sections/inner/Blocks";
import { Process } from "@/components/sections/home/Process";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Fabricación de cuchillos industriales a medida, afilado y rectificación, mecanizado de piezas, repuestos y asesoría técnica en Santiago.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        background={images.fabricacion}
        index="P2"
        label="Servicios"
        title="Elige tu caso."
        accent="Nosotros lo resolvemos."
        lead="Cuchillos nuevos a medida, afilado y rectificación de los que ya tienes, piezas mecanizadas y repuestos. Siempre con evaluación técnica antes de cotizar."
        actions={
          <Button href="/contacto" size="lg" arrow>
            Solicitar cotización
          </Button>
        }
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="wrap">
          <BlockHeader index="01" label="Servicios principales" title="Tres necesidades," accent="tres soluciones." />
          <ol className="mt-12 space-y-5 md:mt-16">
            {services.map((s, i) => (
              <li key={s.slug}>
                <article className="group chamfer-md relative grid bg-white transition-shadow hover:shadow-[0_0_0_1px_var(--color-ink)] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
                  <div className="relative aspect-[4/3] border-b border-line md:aspect-auto md:min-h-[320px] md:border-r md:border-b-0">
                    <ProductImage product={s.product} icon={s.icon} sizes="(min-width: 768px) 40vw, 100vw" pad="p-[5%]" />
                  </div>
                  <div className="flex flex-col p-7 md:p-10">
                    <p className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-semibold text-red">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-display text-xl leading-none font-bold text-ink uppercase">“{s.need}”</span>
                    </p>
                    <div className="mt-6 flex items-start justify-between gap-4">
                      <h2 className="font-display text-4xl leading-[0.95] font-extrabold text-ink uppercase md:text-5xl">{s.title}</h2>
                      <FerkorIcon name={s.icon} size={44} className="shrink-0 text-ink" />
                    </div>
                    <p className="mt-4 max-w-xl text-lg text-ink/75">{s.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <li key={t} className="rounded-sm border border-line px-2 py-1 font-mono text-[11px] text-ink/80">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link href={s.href} className="mt-auto inline-flex items-center gap-3 pt-8 text-sm font-semibold text-ink after:absolute after:inset-0 hover:text-red">
                      Ver {s.title.toLowerCase()}
                      <Arrow />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-3">
            {[advisory, ...complementaryProducts].map((s) => (
              <ServiceLink key={s.slug} href={s.href} need={s.need} title={s.title} summary={s.summary} icon={s.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="wrap">
          <BlockHeader index="02" label="Por industria" title="¿Buscas por" accent="tu industria?" />
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((ind) => (
              <li key={ind.slug}>
                <Link href={`/industrias#${ind.slug}`} className="group flex h-full flex-col bg-white p-6 transition-colors hover:bg-paper">
                  <span className="font-mono text-xs text-red">{ind.code}</span>
                  <span className="mt-3 font-display text-2xl leading-none font-extrabold text-ink uppercase">{ind.title}</span>
                  <span className="mt-2 text-sm text-ink/70">{ind.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Process />
    </>
  );
}
