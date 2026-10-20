import { whatsappHref } from "@/content/company";
import { Button } from "@/components/ui/Button";
import { BlueprintPattern } from "@/components/graphics/BlueprintPattern";
import { CutGeometry } from "@/components/graphics/CutGeometry";
import { Pending } from "@/components/ui/Pending";

/** CTA final: bloque negro con geometría técnica blanca, montado sobre el corte blanco/negro del pie. */
export function FinalCta() {
  const wa = whatsappHref("Hola FERKOR, quiero cotizar una herramienta de corte.");
  return (
    <section aria-labelledby="cta-title" className="relative bg-[linear-gradient(to_bottom,var(--color-white)_50%,var(--color-ink)_50%)]">
      <div className="wrap">
        <div className="on-dark chamfer-xl relative isolate overflow-hidden bg-ink-700 px-6 py-16 text-white sm:px-10 md:px-16 md:py-24">
          <BlueprintPattern tone="dark" drawing="circular" code="FK-CTA-11" titleBlock drawingClassName="top-[-12%] right-[-22%] h-[125%] md:right-[-6%]" />
          <CutGeometry variant="band" className="absolute right-0 bottom-0 h-24 w-[60%] md:h-32" />

          <div className="relative max-w-3xl">
            <p className="mono-index flex items-center gap-3 text-steel-light">
              <span className="h-px w-8 bg-red" aria-hidden="true" />
              Cotización B2B
            </p>
            <h2 id="cta-title" className="display mt-6 text-[clamp(2.8rem,7vw,6rem)] font-black">
              Tu próxima solución de corte{" "}
              <span className="block text-red">comienza aquí.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              Cuéntanos qué herramienta necesitas, en qué máquina trabaja y qué problema quieres resolver. Planos,
              medidas o una fotografía son un buen punto de partida.
            </p>
            <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-center">
              <Button href="/contacto" size="lg" arrow>
                Solicitar cotización
              </Button>
              {wa ? (
                <Button href={wa} variant="contorno-claro" size="lg" target="_blank" rel="noopener noreferrer">
                  Cotizar por WhatsApp
                </Button>
              ) : (
                <span className="inline-flex min-h-13 items-center border border-dashed border-white/35 px-6 text-[15px] text-white/70">
                  WhatsApp <Pending label="número por confirmar" />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
