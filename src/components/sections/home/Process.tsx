import { processSteps } from "@/content/home";
import { whatsappHref } from "@/content/company";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { BlueprintPattern } from "@/components/graphics/BlueprintPattern";
import { FerkorIcon, type FerkorIconName } from "@/components/graphics/FerkorIcon";

const stepIcons: FerkorIconName[] = ["planos", "precision", "respuesta"];

/** "Cotiza en 3 pasos" sobre azul blueprint: etapas unidas por una línea de cota. */
export function Process() {
  const wa = whatsappHref("Hola FERKOR, quiero cotizar. Adjunto foto/plano de la pieza.");
  return (
    <section aria-labelledby="proceso-title" className="on-dark relative isolate overflow-hidden bg-blueprint py-20 text-white md:py-28 lg:py-32">
      <BlueprintPattern tone="blueprint" drawing="circular" titleBlock code="FK-PR-03" drawingClassName="top-[-30%] right-[-18%] h-[95%] opacity-35 lg:top-[-36%] lg:right-[-8%] lg:h-[120%]" />

      <div className="wrap relative">
        <SectionLabel index="07" tone="dark">
          Cómo cotizar
        </SectionLabel>
        <h2 id="proceso-title" className="display mt-6 max-w-3xl text-[clamp(2.6rem,6vw,4.75rem)]">
          Cotiza en{" "}
          <span className="block text-red-light">3 pasos.</span>
        </h2>

        <ol className="relative mt-16 grid gap-0 md:mt-24 lg:grid-cols-3">
          {/* Línea de cota que une las etapas (escritorio) */}
          <span className="grow-x absolute top-[27px] right-0 left-0 hidden h-px bg-white/45 lg:block" aria-hidden="true" />
          <span className="absolute top-[21px] left-0 hidden h-3 w-px bg-white/70 lg:block" aria-hidden="true" />
          <span className="absolute top-[21px] right-0 hidden h-3 w-px bg-white/70 lg:block" aria-hidden="true" />

          {processSteps.map((s, i) => (
            <li key={s.n} className="relative grid grid-cols-[56px_1fr] gap-5 pb-12 last:pb-0 lg:block lg:pr-10 lg:pb-0">
              {i < processSteps.length - 1 && (
                <span className="absolute top-14 bottom-0 left-[27px] w-px bg-white/30 lg:hidden" aria-hidden="true" />
              )}
              <span className="relative flex h-14 w-14 items-center justify-center border border-white/60 bg-blueprint font-mono text-sm font-semibold">
                {s.n}
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-red" aria-hidden="true" />
              </span>
              <div className="lg:mt-8">
                <FerkorIcon name={stepIcons[i]} size={34} className="text-blueprint-line" />
                <h3 className="mt-4 font-display text-[1.75rem] leading-[0.95] font-extrabold uppercase">{s.title}</h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/15 pt-10 xs:flex-row xs:flex-wrap xs:items-center">
          <Button href="/contacto" size="lg" arrow>
            Enviar mi requerimiento
          </Button>
          {wa && (
            <Button href={wa} variant="contorno-claro" size="lg" target="_blank" rel="noopener noreferrer">
              Cotizar por WhatsApp
            </Button>
          )}
          <p className="text-sm text-white/65 xs:ml-4">Sin compromiso. Si la pieza no es viable, te lo decimos.</p>
        </div>
      </div>
    </section>
  );
}
