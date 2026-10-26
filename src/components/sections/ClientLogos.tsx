import { clients } from "@/content/clients";

/**
 * Logos de empresas atendidas, en tres usos para no saturar:
 * - `marquee`: banda oscura en movimiento (home, después del hero).
 * - `footer`: fila compacta y discreta en el pie de todas las páginas.
 * - `color`: grilla a color sobre blanco (industrias).
 */
export function ClientLogos({ variant }: { variant: "marquee" | "footer" | "color" }) {
  if (variant === "marquee") {
    return (
      <section aria-labelledby="clientes-title" className="on-dark marquee-wrap overflow-hidden border-t border-white/10 bg-ink py-10 text-white md:py-12">
        <div className="wrap">
          <h2 id="clientes-title" className="mono-index flex items-center gap-3 text-steel-light">
            <span className="h-px w-8 bg-red" aria-hidden="true" />
            Empresas que han trabajado con FERKOR
          </h2>
        </div>
        <div className="mt-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="marquee marquee-slow flex w-max">
            {[0, 1].map((copy) => (
              <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
                {clients.map((c) => (
                  <li key={c.name} className="flex h-12 w-40 shrink-0 items-center justify-center px-6 md:h-14 md:w-48">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.white} alt={copy === 1 ? "" : c.name} loading="lazy" className="max-h-full w-auto max-w-full object-contain opacity-80" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (variant === "footer") {
    return (
      <div>
        <h2 className="eyebrow text-steel-light">Han confiado en FERKOR</h2>
        <ul className="mt-5 grid grid-cols-3 items-center gap-x-6 gap-y-5 sm:grid-cols-5 lg:grid-cols-10">
          {clients.map((c) => (
            <li key={c.name} className="flex h-8 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.white} alt={c.name} loading="lazy" className="max-h-full w-auto max-w-[96px] object-contain opacity-50 transition-opacity hover:opacity-90" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
      {clients.map((c) => (
        <li key={c.name} className="flex aspect-[3/2] items-center justify-center bg-white p-6 md:p-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.color} alt={c.name} loading="lazy" className="max-h-full w-auto max-w-full object-contain" />
        </li>
      ))}
    </ul>
  );
}
