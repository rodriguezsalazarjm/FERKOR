import { allServices, type Service } from "@/content/services";
import { products } from "@/content/products";
import { productDrawings } from "@/components/graphics/ProductDrawings";
import { Button } from "@/components/ui/Button";
import { PageHero } from "./PageHero";
import { BlockHeader, CatalogStrip, FaqList, IncludesList, QuoteChecklist, ServiceLink } from "./Blocks";

/** Plantilla de página de servicio: problema → qué hacemos → piezas reales → cómo cotizar → FAQ → otros servicios. */
export function ServiceDetail({ service: s }: { service: Service }) {
  const isProduct = s.kind === "producto";
  const others = (isProduct ? [...products, ...allServices] : [...allServices, ...products]).filter((o) => o.slug !== s.slug).slice(0, 4);
  // Numeración de bloques según los que existan en esta página.
  let n = 0;
  const idx = () => String(++n).padStart(2, "0");
  const section = isProduct ? { label: "Productos", href: "/productos" } : { label: "Servicios", href: "/servicios" };
  return (
    <>
      <PageHero
        index={s.code}
        label={s.title}
        title={s.headline[0]}
        accent={s.headline[1]}
        lead={s.intro}
        trail={[section]}
        product={s.product}
        actions={
          <>
            <Button href={`/contacto?servicio=${encodeURIComponent(s.title)}`} size="lg" arrow>
              {isProduct ? "Cotizar con una foto" : `Cotizar ${s.title.toLowerCase()}`}
            </Button>
            {s.catalogRefs.length > 0 && (
              <Button href="#piezas" variant="contorno-claro" size="lg">
                Ver piezas reales
              </Button>
            )}
          </>
        }
      >
        <p className="mono-index mt-8 text-steel-light">
          {isProduct ? (
            <span className="text-white">{s.need}</span>
          ) : (
            <>
              Para quien dice: <span className="text-white">“{s.need}”</span>
            </>
          )}
        </p>
      </PageHero>

      {s.uses && (
        <section className="border-b border-line bg-white pt-20 md:pt-28">
          <div className="wrap">
            <BlockHeader index={idx()} label="Dónde se usa" title="¿En qué máquina" accent="trabaja?" />
            <ul className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
              {s.uses.map((u) => (
                <li key={u.title} className="bg-paper p-7">
                  <h3 className="font-display text-2xl leading-none font-extrabold text-ink uppercase">{u.title}</h3>
                  <p className="mt-2 text-ink/70">{u.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {s.drawings && s.drawings.length > 0 && (
        <section className="bg-paper py-20 md:py-28">
          <div className="wrap">
            <BlockHeader
              index={idx()}
              label="Cómo funciona"
              title="Así trabaja"
              accent="en tu máquina."
              lead={<p>Esquemas y planos referenciales para identificar la pieza. No son planos de fabricación: cada cuchillo se fabrica según tu muestra o medidas.</p>}
            />
            <div className={`mt-12 grid items-start gap-6 ${s.drawings.length > 1 ? "lg:grid-cols-[5fr_7fr]" : ""}`}>
              {s.drawings.map((k) => {
                const { C, caption } = productDrawings[k];
                return (
                  <figure key={k} className="border border-line bg-white p-5 md:p-8">
                    <C className="h-auto w-full text-ink/75" />
                    <figcaption className="mono-index mt-4 border-t border-line pt-3 text-steel">{caption}</figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-20 md:py-28">
        <div className="wrap">
          <BlockHeader index={idx()} label="Qué hacemos" title={isProduct ? "Qué te" : "Qué incluye"} accent={isProduct ? "ofrecemos." : "este servicio."} />
          <div className="mt-12 md:mt-16">
            <IncludesList items={s.includes} />
          </div>
        </div>
      </section>

      {s.catalogRefs.length > 0 && (
        <section id="piezas" className="scroll-mt-20 bg-paper py-20 md:py-28">
          <div className="wrap">
            <BlockHeader
              index={idx()}
              label="Piezas reales"
              title="Trabajos"
              accent="de esta línea."
              lead={<p>Fotografías de piezas fabricadas o suministradas por FERKOR. Cada una responde a un requerimiento específico.</p>}
            />
            <div className="mt-12 md:mt-16">
              <CatalogStrip refs={s.catalogRefs} />
            </div>
            <div className="mt-8 flex justify-end">
              <Button href="/productos#catalogo" variant="texto" arrow>
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
              <BlockHeader index={idx()} label="Preguntas frecuentes" title="Lo que" accent="más nos preguntan." stacked />
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FaqList faqs={s.faqs} />
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line bg-paper py-20 md:py-24">
        <div className="wrap">
          <BlockHeader index={idx()} label={isProduct ? "Más productos y servicios" : "Otros servicios"} title="También" accent="te podemos ayudar con." />
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
