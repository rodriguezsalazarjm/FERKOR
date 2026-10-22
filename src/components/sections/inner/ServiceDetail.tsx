import { allServices, type Service } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { PageHero } from "./PageHero";
import { BlockHeader, CatalogStrip, FaqList, IncludesList, QuoteChecklist, ServiceLink } from "./Blocks";

/** Plantilla de página de servicio: problema → qué hacemos → piezas reales → cómo cotizar → FAQ → otros servicios. */
export function ServiceDetail({ service: s }: { service: Service }) {
  const others = allServices.filter((o) => o.slug !== s.slug);
  return (
    <>
      <PageHero
        index={s.code}
        label={s.title}
        title={s.headline[0]}
        accent={s.headline[1]}
        lead={s.intro}
        trail={[{ label: "Servicios", href: "/servicios" }]}
        product={s.product}
        actions={
          <>
            <Button href={`/contacto?servicio=${encodeURIComponent(s.title)}`} size="lg" arrow>
              Cotizar {s.title.toLowerCase()}
            </Button>
            <Button href="#piezas" variant="contorno-claro" size="lg">
              Ver piezas reales
            </Button>
          </>
        }
      >
        <p className="mono-index mt-8 text-steel-light">
          Para quien dice: <span className="text-white">“{s.need}”</span>
        </p>
      </PageHero>

      <section className="bg-white py-20 md:py-28">
        <div className="wrap">
          <BlockHeader index="01" label="Qué hacemos" title="Qué incluye" accent="este servicio." />
          <div className="mt-12 md:mt-16">
            <IncludesList items={s.includes} />
          </div>
        </div>
      </section>

      {s.catalogRefs.length > 0 && (
        <section id="piezas" className="scroll-mt-20 bg-paper py-20 md:py-28">
          <div className="wrap">
            <BlockHeader
              index="02"
              label="Piezas reales"
              title="Trabajos"
              accent="de esta línea."
              lead={<p>Fotografías de piezas fabricadas o suministradas por FERKOR. Cada una responde a un requerimiento específico.</p>}
            />
            <div className="mt-12 md:mt-16">
              <CatalogStrip refs={s.catalogRefs} />
            </div>
            <div className="mt-8 flex justify-end">
              <Button href="/trabajos" variant="texto" arrow>
                Ver catálogo completo
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20 md:py-28">
        <div className="wrap">
          <QuoteChecklist items={s.quoteNeeds} service={s.title} />
        </div>
      </section>

      {s.faqs.length > 0 && (
        <section className="bg-white pb-20 md:pb-28">
          <div className="wrap grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <BlockHeader index="03" label="Preguntas frecuentes" title="Lo que" accent="más nos preguntan." stacked />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FaqList faqs={s.faqs} />
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-paper py-20 md:py-24">
        <div className="wrap">
          <BlockHeader index="04" label="Otros servicios" title="También" accent="te podemos ayudar con." />
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            {others.map((o) => (
              <ServiceLink key={o.slug} href={o.href} need={o.need} title={o.title} summary={o.summary} icon={o.icon} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
