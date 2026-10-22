import type { Metadata } from "next";
import { industries } from "@/content/industries";
import { allServices } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { PageHero } from "@/components/sections/inner/PageHero";
import { CatalogStrip, ServiceLink } from "@/components/sections/inner/Blocks";
import { FinalCta } from "@/components/sections/home/FinalCta";

export const metadata: Metadata = {
  title: "Industrias",
  description: "Cuchillos industriales y repuestos para envasado alimentario, procesamiento de alimentos, papel y cartón, empaques y otras industrias.",
};

export default function IndustriasPage() {
  return (
    <>
      <PageHero
        index="P7"
        label="Industrias"
        title="Donde el corte"
        accent="no puede fallar."
        lead="Trabajamos con empresas que dependen de sus cuchillos para producir. Estos son los sectores que más atendemos y lo que les resolvemos."
        actions={
          <Button href="/contacto" size="lg" arrow>
            Cotizar para mi industria
          </Button>
        }
      >
        <nav aria-label="Sectores" className="mt-9 flex flex-wrap gap-2">
          {industries.map((i) => (
            <a key={i.slug} href={`#${i.slug}`} className="border border-white/25 px-3 py-1.5 text-sm text-white/85 transition-colors hover:border-white hover:text-white">
              {i.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {industries.map((ind, n) => {
        const related = allServices.filter((s) => ind.serviceSlugs.includes(s.slug));
        const tone = n % 2 === 0 ? "bg-white" : "bg-paper";
        return (
          <section key={ind.slug} id={ind.slug} aria-labelledby={`${ind.slug}-t`} className={`scroll-mt-20 py-20 md:py-24 ${tone}`}>
            <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <p className="flex items-center gap-3 font-mono text-xs text-red">
                  {ind.code}
                  {ind.featured && <span className="bg-red px-2 py-0.5 text-[10px] tracking-[0.08em] text-white uppercase">Sector principal</span>}
                </p>
                <h2 id={`${ind.slug}-t`} className="display mt-4 text-[clamp(2.4rem,5vw,3.75rem)] text-ink">
                  {ind.title}
                </h2>
                <p className="mt-5 text-lg text-ink/75">{ind.summary}</p>
                <h3 className="eyebrow mt-10 text-steel">Lo que resolvemos</h3>
                <ul className="mt-4 border-t-2 border-ink">
                  {ind.needs.map((need) => (
                    <li key={need} className="flex gap-4 border-b border-line py-3.5 text-ink">
                      <span className="mt-[0.55em] h-2 w-2 shrink-0 rotate-45 bg-red" aria-hidden="true" />
                      {need}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 lg:col-span-7">
                {ind.image && <Photo image={ind.image} sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[16/9]" badgePosition="tr" />}
                <CatalogStrip refs={ind.catalogRefs.slice(0, ind.image ? 2 : 4)} />
                <div className="grid gap-px border border-line bg-line">
                  {related.map((s) => (
                    <ServiceLink key={s.slug} href={s.href} need={s.need} title={s.title} summary={s.summary} icon={s.icon} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <FinalCta />
    </>
  );
}
