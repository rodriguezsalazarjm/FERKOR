import { specialties } from "@/content/services";
import { CutGeometry } from "@/components/graphics/CutGeometry";

/** Franja de especialización en marquesina continua (se pausa al pasar el cursor; estática con reduced-motion). */
export function SpecialtyStrip() {
  const run = [...specialties, ...specialties];
  return (
    <section aria-label="Especialidades" className="marquee-wrap relative overflow-hidden bg-red text-white">
      <div className="marquee flex w-max">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
            {run.map((s, i) => (
              <li key={`${s}-${i}`} className="flex items-center gap-4 py-5 pr-10 lg:py-6 lg:pr-14">
                <CutGeometry variant="stack" className="h-4 w-8 text-ink" />
                <span className="font-display text-2xl leading-none font-extrabold tracking-[0.01em] whitespace-nowrap uppercase lg:text-3xl">
                  {s}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
