import { specialties } from "@/content/services";

/** Franja de especialización: compacta, roja, con cortes diagonales como separadores. */
export function SpecialtyStrip() {
  return (
    <section aria-label="Especialidades" className="relative overflow-hidden bg-red text-white">
      <ul className="wrap grid grid-cols-2 lg:grid-cols-4">
        {specialties.map((s, i) => (
          <li
            key={s}
            className={`relative flex items-center gap-3 py-5 lg:py-6 ${i % 2 === 1 ? "pl-4 lg:pl-0" : ""} ${
              i > 1 ? "border-t border-white/20 lg:border-t-0" : ""
            } ${i > 0 ? "lg:pl-8" : ""}`}
          >
            {i > 0 && (
              <span
                className={`absolute top-1/2 left-0 h-8 w-px -translate-y-1/2 rotate-[28deg] bg-white/55 ${i === 2 ? "hidden lg:block" : ""}`}
                aria-hidden="true"
              />
            )}
            <span className="font-mono text-[11px] text-white/70">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-display text-xl leading-none font-extrabold tracking-[0.01em] uppercase sm:text-2xl">{s}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
