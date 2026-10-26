import { clients } from "@/content/clients";

/**
 * Logos de empresas atendidas, en tres usos para no saturar:
 * - `white`: grilla blanca sobre banda oscura (home, después del hero).
 * - `footer`: fila compacta y discreta en el pie de todas las páginas.
 * - `color`: grilla a color sobre blanco (industrias).
 */
export function ClientLogos({ variant }: { variant: "white" | "footer" | "color" }) {
  if (variant === "white") {
    return (
      <section aria-labelledby="clientes-title" className="on-dark border-t border-white/10 bg-ink py-12 text-white md:py-14">
        <div className="wrap">
          <h2 id="clientes-title" className="mono-index flex items-center gap-3 text-steel-light">
            <span className="h-px w-8 bg-red" aria-hidden="true" />
            Empresas que han trabajado con FERKOR
          </h2>
          <ul className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-9 xs:grid-cols-3 md:grid-cols-5 lg:gap-x-12">
            {clients.map((c) => (
              <li key={c.name} className="flex h-12 items-center justify-center md:h-14">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.white} alt={c.name} loading="lazy" className="max-h-full w-auto max-w-[140px] object-contain opacity-80 transition-opacity hover:opacity-100" />
              </li>
            ))}
          </ul>
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
