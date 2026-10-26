import { whatsappHref, waMessages } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { TechnicalGrid } from "@/components/graphics/TechnicalGrid";

/** "¿No sabes qué pieza es?": muchos clientes llegan con piezas que no saben identificar. */
export function IdentifyBand() {
  const wa = whatsappHref(waMessages.identificar);
  return (
    <section aria-labelledby="identify-title" className="on-dark relative isolate overflow-hidden bg-red text-white">
      <TechnicalGrid className="text-white/[0.08]" minor={16} major={80} />
      <div className="wrap relative grid gap-8 py-14 md:py-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="mono-index text-white/80">Identificación de piezas</p>
          <h2 id="identify-title" className="display mt-4 text-[clamp(2.4rem,5.5vw,4.25rem)]">
            ¿No sabes qué pieza es?{" "}
            <span className="block text-ink">Mándanos una foto.</span>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            Cuchillo, rodamiento, correa o una pieza sin nombre: con una foto y una huincha al lado la identificamos y te
            decimos si la podemos fabricar, afilar o reponer.
          </p>
        </div>
        <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap lg:col-span-4 lg:col-start-9 lg:flex-col">
          <Button href="/contacto?servicio=asesoria-tecnica" variant="solido" size="lg" arrow>
            Enviar foto de mi pieza
          </Button>
          {wa && (
            <Button href={wa} variant="contorno-claro" size="lg" target="_blank" rel="noopener noreferrer">
              Por WhatsApp
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
