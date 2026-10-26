import Link from "next/link";
import { CountUp } from "@/components/ui/CountUp";
import { images } from "@/content/images";
import { company } from "@/content/company";
import { Photo, ProvisionalBadge } from "@/components/ui/Photo";
import { Button } from "@/components/ui/Button";
import { TechnicalGrid } from "@/components/graphics/TechnicalGrid";
import { CircularBladeDrawing, TitleBlock } from "@/components/graphics/TechnicalDrawings";
import { CutGeometry } from "@/components/graphics/CutGeometry";

const heroLinks = [
  { href: "/productos/cuchillos-dentados-envasadora", label: "Cuchillos dentados" },
  { href: "/productos/cuchillos-zigzag-flow-pack", label: "Zigzag flow pack" },
  { href: "/productos/rodamientos-lineales", label: "Rodamientos" },
  { href: "/productos/correas-de-arrastre", label: "Correas" },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <TechnicalGrid className="text-white/[0.045]" minor={16} major={80} />

      {/* Fotografía macro: bloque derecho con corte diagonal a 28° */}
      <div className="absolute inset-y-0 right-0 hidden w-[52%] lg:block [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]">
        <div className="parallax absolute inset-x-0 -inset-y-[8%]">
          <Photo image={images.hero} sizes="(min-width: 768px) 52vw, 100vw" priority className="h-full w-full" imgClassName="hero-settle" badge={false} />
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-ink/80 via-ink/20 to-ink/10" aria-hidden="true" />
        <div className="absolute inset-0 bg-blueprint/25 mix-blend-multiply" aria-hidden="true" />
        <CircularBladeDrawing className="hero-plot absolute top-1/2 right-[-14%] h-[118%] -translate-y-1/2 text-white/40" />
      </div>
      <CutGeometry variant="hero" className="hero-cut absolute inset-y-0 left-[44%] hidden h-full w-[16%] lg:block" />

      <div className="wrap relative grid grid-rows-[1fr_auto] lg:min-h-[calc(100svh-76px)] lg:max-h-[960px]">
        <div className="flex flex-col justify-center pt-14 pb-12 lg:max-w-[44vw] lg:pt-16">
          <p className="hero-in mono-index flex items-center gap-3 text-steel-light" style={{ "--i": -3 } as React.CSSProperties}>
            <span className="h-px w-8 bg-red" aria-hidden="true" />
            Precisión para cortar · Respuesta para producir
          </p>

          <h1 id="hero-title" className="display mt-7 text-[clamp(3rem,11.5vw,4.25rem)] font-black md:text-[clamp(4.25rem,9vw,5.75rem)] lg:text-[clamp(3rem,5.5vw,6rem)]">
            <span className="hero-line">
              <span style={{ "--i": 0 } as React.CSSProperties}>Cuchillos dentados</span>
            </span>{" "}
            <span className="hero-line">
              <span style={{ "--i": 1 } as React.CSSProperties}>y zigzag</span>
            </span>{" "}
            <span className="hero-line mt-[0.06em] text-red">
              <span style={{ "--i": 2 } as React.CSSProperties}>para envasadoras.</span>
            </span>
          </h1>

          <p className="hero-in mt-7 max-w-[34rem] text-lg leading-relaxed text-white/85 md:text-xl md:leading-[1.55]" style={{ "--i": 0 } as React.CSSProperties}>
            Fabricamos y afilamos los cuchillos de tus envasadoras, selladoras y máquinas flow pack, más rodamientos y
            correas de arrastre. Envíanos una foto y te cotizamos desde {company.city} para todo Chile.
          </p>

          <div className="hero-in mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap" style={{ "--i": 1 } as React.CSSProperties}>
            <Button href="/contacto" size="lg" arrow>
              Cotizar con una foto
            </Button>
            <Button href="/productos" variant="contorno-claro" size="lg">
              Ver productos
            </Button>
          </div>

          <nav aria-label="Productos" className="hero-in mt-9 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm" style={{ "--i": 2 } as React.CSSProperties}>
            {heroLinks.map((i, n) => (
              <span key={i.href} className="flex items-center gap-1">
                {n > 0 && <span className="text-white/30" aria-hidden="true">/</span>}
                <Link href={i.href} className="px-1.5 py-1 font-medium text-white/85 underline-offset-4 hover:text-white hover:underline">
                  {i.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>

        {/* Barra de confianza: solo información confirmada. Sin plazos garantizados. */}
        <dl className="hero-in relative grid grid-cols-2 border-t border-white/15 sm:grid-cols-4 lg:max-w-[46vw]" style={{ "--i": 3 } as React.CSSProperties}>
          <HeroFact term="Experiencia" value={<CountUp to={company.experience.years} suffix=" años" />} note="Soluciones industriales y herramientas de corte" />
          <HeroFact term="Atención" value="B2B" note="Para empresas y procesos productivos" className="border-white/15 pl-3 sm:border-l sm:pl-5" />
          <HeroFact term="Cobertura" value="Nacional" note="Desde Santiago para todo Chile" className="border-t border-white/15 sm:border-t-0 sm:border-l sm:pl-5" />
          <HeroFact term="Urgencias" value="Directo" note="Atención directa para necesidades urgentes de producción" className="border-t border-l border-white/15 pl-3 sm:border-t-0 sm:pl-5" />
        </dl>
      </div>

      {/* Fotografía en móvil: franja inferior */}
      <div className="relative h-56 sm:h-72 md:h-96 lg:hidden">
        <Photo image={images.hero} sizes="100vw" className="h-full w-full" badgePosition="tr" />
        <div className="absolute inset-0 bg-linear-to-b from-ink via-ink/30 to-ink/10" aria-hidden="true" />
        <CutGeometry variant="corner" className="absolute right-0 bottom-0 h-20 w-20" />
      </div>

      <TitleBlock code="FK-HERO-01" className="absolute right-6 bottom-6 hidden text-white/55 xl:block" />
      {images.hero.provisional && (
        <div className="absolute top-4 right-4 hidden lg:block">
          <ProvisionalBadge />
        </div>
      )}
    </section>
  );
}

function HeroFact({ term, value, note, className = "" }: { term: string; value: React.ReactNode; note: string; className?: string }) {
  return (
    <div className={`min-w-0 py-5 pr-2 sm:pr-4 ${className}`}>
      <dt className="mono-index text-[10px] text-steel-light sm:text-xs">{term}</dt>
      <dd className="mt-2">
        <span className="block font-display text-[1.6rem] leading-none font-extrabold whitespace-nowrap uppercase sm:text-3xl">{value}</span>
        <span className="mt-1.5 block text-xs leading-snug text-white/60">{note}</span>
      </dd>
    </div>
  );
}
