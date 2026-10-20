import { images } from "@/content/images";
import { company } from "@/content/company";
import { Photo, ProvisionalBadge } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { TechnicalGrid } from "@/components/graphics/TechnicalGrid";
import { CircularBladeDrawing, TitleBlock } from "@/components/graphics/TechnicalDrawings";
import { CutGeometry } from "@/components/graphics/CutGeometry";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <TechnicalGrid className="text-white/[0.045]" minor={16} major={80} />

      {/* Fotografía macro: bloque derecho con corte diagonal a 28° */}
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
        <Photo image={images.hero} sizes="(min-width: 768px) 52vw, 100vw" priority className="h-full w-full" badge={false} />
        <div className="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/20 to-ink/10" aria-hidden="true" />
        <div className="absolute inset-0 bg-blueprint/25 mix-blend-multiply" aria-hidden="true" />
        <CircularBladeDrawing className="absolute top-1/2 right-[-14%] h-[118%] -translate-y-1/2 text-white/40" />
      </div>
      <CutGeometry variant="hero" className="absolute inset-y-0 left-[44%] hidden h-full w-[16%] lg:block" />

      <div className="wrap relative grid grid-rows-[1fr_auto] lg:min-h-[calc(100svh-76px)] lg:max-h-[960px]">
        <div className="flex flex-col justify-center pt-14 pb-12 lg:max-w-[44vw] lg:pt-16">
          <p className="mono-index flex items-center gap-3 text-steel-light">
            <span className="h-px w-8 bg-red" aria-hidden="true" />
            {company.descriptor} · {company.city}
          </p>

          <h1 id="hero-title" className="display mt-7 text-[clamp(3.25rem,12.5vw,4.5rem)] font-black md:text-[clamp(4.5rem,10vw,6rem)] lg:text-[clamp(3rem,6.1vw,6.75rem)]">
            <span className="block">Precisión</span>{" "}
            <span className="block">para cortar.</span>{" "}
            <span className="mt-[0.06em] block text-red">Respuesta</span>{" "}
            <span className="block text-red">para producir.</span>
          </h1>

          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-white/80 md:text-xl md:leading-[1.55]">
            Fabricación, adaptación y rectificación de herramientas de corte industrial según los requerimientos técnicos
            de cada operación.
          </p>

          <div className="mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <Button href="/contacto" size="lg" arrow>
              Solicitar cotización
            </Button>
            <Button href="/servicios" variant="contorno-claro" size="lg">
              Explorar soluciones
            </Button>
          </div>
        </div>

        {/* Franja inferior de datos: solo información confirmada */}
        <dl className="relative grid grid-cols-3 border-t border-white/15 lg:max-w-[42vw]">
          <HeroFact term="Trayectoria" value="≈ 10 años" note="en el sector" />
          <HeroFact term="Modelo" value="B2B" note="atención directa" className="border-l border-white/15 pl-3 sm:pl-6" />
          <HeroFact term="Base" value="Santiago" note="de Chile" className="border-l border-white/15 pl-3 sm:pl-6" />
        </dl>
      </div>

      {/* Fotografía en móvil: franja inferior */}
      <div className="relative h-56 sm:h-72 md:h-96 lg:hidden">
        <Photo image={images.hero} sizes="100vw" className="h-full w-full" badgePosition="tr" />
        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/30 to-ink/10" aria-hidden="true" />
        <CutGeometry variant="corner" className="absolute right-0 bottom-0 h-20 w-20" />
      </div>

      <TitleBlock code="FK-HERO-01" className="absolute right-6 bottom-6 hidden text-white/55 xl:block" />
      <div className="absolute top-4 right-4 hidden lg:block">
        <ProvisionalBadge />
      </div>
    </section>
  );
}

function HeroFact({ term, value, note, className = "" }: { term: string; value: string; note: string; className?: string }) {
  return (
    <div className={`min-w-0 py-5 pr-2 sm:pr-4 ${className}`}>
      <dt className="mono-index text-[10px] text-steel-light sm:text-xs">{term}</dt>
      <dd className="mt-2">
        <span className="block font-display text-[1.6rem] leading-none font-extrabold whitespace-nowrap uppercase sm:text-3xl lg:text-4xl">{value}</span>
        <span className="mt-1 block text-xs text-white/60 sm:text-sm">{note}</span>
      </dd>
    </div>
  );
}
