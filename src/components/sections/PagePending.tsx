import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { BlueprintPattern } from "@/components/graphics/BlueprintPattern";

type Props = { index: string; label: string; title: string; accent: string; text: string };

/**
 * Página interior provisional (Fase D). Mantiene la navegación funcionando
 * mientras se aprueba la home; se reemplaza por el diseño definitivo de cada ruta.
 */
export function PagePending({ index, label, title, accent, text }: Props) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-blueprint text-white">
      <BlueprintPattern tone="blueprint" drawing="circular" titleBlock code={`FK-${index}`} drawingClassName="top-1/2 right-[-30%] h-[110%] -translate-y-1/2 opacity-40 md:right-[-10%]" />
      <div className="wrap relative flex min-h-[70svh] flex-col justify-center py-24">
        <SectionLabel index={index} tone="dark">
          {label}
        </SectionLabel>
        <h1 className="display mt-6 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-black">
          {title}{" "}
          <span className="block text-red-light">{accent}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">{text}</p>
        <p className="mono-index mt-8 inline-flex w-fit border border-dashed border-white/40 px-3 py-2 text-white/80">
          Página en desarrollo · Fase D, tras la aprobación de la home
        </p>
        <div className="mt-10 flex flex-col gap-3 xs:flex-row">
          <Button href="/contacto" size="lg" arrow>
            Solicitar cotización
          </Button>
          <Button href="/" variant="contorno-claro" size="lg">
            Volver al inicio
          </Button>
        </div>
      </div>
    </section>
  );
}
