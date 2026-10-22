import { images } from "@/content/images";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Photo } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { TechnicalGrid } from "@/components/graphics/TechnicalGrid";
import { CircularBladeDrawing } from "@/components/graphics/TechnicalDrawings";
import { FerkorIcon } from "@/components/graphics/FerkorIcon";

const evaluable = [
  "Cuchillas rectas y guillotinas",
  "Cuchillas circulares",
  "Cuchillas dentadas y de prepicado",
  "Herramientas para envasadoras",
];

const steps = [
  { n: "A", t: "Nos envías la herramienta o sus datos", d: "Fotografías, medidas y la máquina donde trabaja." },
  { n: "B", t: "Evaluamos su estado", d: "Desgaste, material y geometría definen si es viable." },
  { n: "C", t: "Rectificamos o te lo decimos", d: "Si no conviene recuperarla, te proponemos alternativas." },
];

export function Rectification() {
  return (
    <section aria-labelledby="rect-title" className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <div className="grid lg:grid-cols-2">
        {/* Imagen protagonista con plano de muela superpuesto */}
        <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-full">
          <Photo image={images.rectificacion} sizes="(min-width: 1024px) 50vw, 100vw" className="absolute inset-0" badgePosition="br" />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-ink/10 lg:to-ink" aria-hidden="true" />
          <CircularBladeDrawing className="absolute top-1/2 left-1/2 h-[92%] -translate-x-1/2 -translate-y-1/2 text-white/30" />
          <div className="absolute bottom-0 left-0 hidden w-[42%] bg-red p-6 lg:block">
            <p className="font-display text-5xl leading-none font-black">FK-02</p>
            <p className="mt-2 eyebrow text-white/85">Servicio de rectificación</p>
          </div>
        </div>

        <div className="relative px-4 py-16 sm:px-8 md:px-12 md:py-24 lg:py-28 xl:px-20">
          <TechnicalGrid className="text-white/[0.04]" minor={16} major={80} />
          <div className="relative max-w-xl">
            <SectionLabel index="04" tone="dark">
              Rectificación y afilado
            </SectionLabel>
            <h2 id="rect-title" className="display mt-6 text-[clamp(2.8rem,6.4vw,5.25rem)] font-black">
              El filo importa.{" "}
              <span className="block text-red">La continuidad también.</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-white/80">
              Una herramienta sin filo detiene líneas, rompe empaques y aumenta el desperdicio. Rectificamos y afilamos
              herramientas de corte industrial para que vuelvan a trabajar, siempre sobre una evaluación técnica previa.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="eyebrow text-steel-light">Evaluamos, entre otras</h3>
                <ul className="mt-4 space-y-2.5">
                  {evaluable.map((e) => (
                    <li key={e} className="flex gap-3 text-[15px] text-white/90">
                      <span className="mt-[0.6em] h-px w-3 shrink-0 bg-red-light" aria-hidden="true" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
              <ol className="space-y-4 border-l border-white/15 pl-5">
                {steps.map((s) => (
                  <li key={s.n}>
                    <p className="flex items-baseline gap-2 text-[15px] font-semibold">
                      <span className="font-mono text-xs text-red-light">{s.n}</span>
                      {s.t}
                    </p>
                    <p className="mt-0.5 text-sm text-white/60">{s.d}</p>
                  </li>
                ))}
              </ol>
            </div>

            <p className="mt-10 flex gap-3 border border-white/15 p-4 text-sm text-white/70">
              <FerkorIcon name="precision" size={22} className="mt-0.5 shrink-0 text-white/70" />
              La viabilidad y el resultado dependen del estado, el material y la geometría de cada herramienta. No todas
              las piezas son recuperables: te lo informamos antes de trabajar.
            </p>

            <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <Button href="/contacto?servicio=rectificacion" size="lg" arrow>
                Cotizar rectificación
              </Button>
              <Button href="/servicios/rectificacion" variant="texto-claro" size="lg" arrow>
                Ver el servicio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
