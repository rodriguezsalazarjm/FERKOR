import { processSteps } from "@/content/home";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlueprintPattern } from "@/components/graphics/BlueprintPattern";
import { FerkorIcon, type FerkorIconName } from "@/components/graphics/FerkorIcon";

const stepIcons: FerkorIconName[] = ["planos", "precision", "materiales", "respuesta"];

/** Proceso de trabajo sobre azul blueprint: cuatro etapas unidas por una línea de cota. */
export function Process() {
  return (
    <section aria-labelledby="proceso-title" className="on-dark relative isolate overflow-hidden bg-blueprint py-20 text-white md:py-28 lg:py-32">
      <BlueprintPattern tone="blueprint" drawing="circular" titleBlock code="FK-PR-04" drawingClassName="top-[-30%] right-[-18%] h-[95%] opacity-35 lg:top-[-36%] lg:right-[-8%] lg:h-[120%]" />

      <div className="wrap relative">
        <SectionLabel index="06" tone="dark">
          Proceso de trabajo
        </SectionLabel>
        <h2 id="proceso-title" className="display mt-6 max-w-3xl text-[clamp(2.6rem,6vw,4.75rem)]">
          Del requerimiento{" "}
          <span className="block text-red-light">a la herramienta.</span>
        </h2>

        <ol className="relative mt-16 grid gap-0 md:mt-24 lg:grid-cols-4">
          {/* Línea de cota que une las etapas (escritorio) */}
          <span className="absolute top-[27px] right-0 left-0 hidden h-px bg-white/45 lg:block" aria-hidden="true" />
          <span className="absolute top-[21px] left-0 hidden h-3 w-px bg-white/70 lg:block" aria-hidden="true" />
          <span className="absolute top-[21px] right-0 hidden h-3 w-px bg-white/70 lg:block" aria-hidden="true" />

          {processSteps.map((s, i) => (
            <li key={s.n} className="relative grid grid-cols-[56px_1fr] gap-5 pb-12 last:pb-0 lg:block lg:pr-8 lg:pb-0">
              {/* Línea vertical (móvil/tablet) */}
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
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
