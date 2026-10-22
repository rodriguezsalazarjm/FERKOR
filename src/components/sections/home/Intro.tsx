import { company } from "@/content/company";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { StraightBladeDrawing } from "@/components/graphics/TechnicalDrawings";
import { TechnicalDivider } from "@/components/graphics/TechnicalDivider";

const facts: [string, string][] = [
  ["Modelo", "B2B · empresas e industria"],
  ["Líneas", "Fabricación · Rectificación · Envasado"],
  ["Trayectoria", `≈ ${company.experience.years} años en el sector`],
  ["Atención", "Directa con el responsable"],
  ["Cobertura", company.coverage],
];

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="relative overflow-hidden bg-white py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <TechnicalDivider label="06 / 09" meta="Empresa" className="mb-14 md:mb-20" />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <SectionLabel index="06">Quiénes somos</SectionLabel>
            <h2 id="intro-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              Conocimiento técnico{" "}
              <span className="block text-red">que se convierte en soluciones.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-14">
            <p className="text-xl leading-[1.55] text-ink">
              FERKOR se especializa en herramientas de corte para uso industrial: cuchillos y componentes para envasado, procesamiento de alimentos y transformación de papel y cartón.
            </p>
            <div className="mt-6 space-y-4 text-ink/80">
              <p>
                Complementamos la fabricación con mecanizado de piezas, suministro de repuestos industriales y apoyo técnico: elaboramos planos, visitamos tu planta y levantamos medidas en terreno.
              </p>
              <p>
                Conocemos aceros, tratamientos térmicos y especificaciones técnicas. Y hablas directamente con quien
                resuelve: sin intermediarios, con respuesta ágil.
              </p>
            </div>
            <Button href="/nosotros" variant="contorno" arrow className="mt-9">
              Conoce nuestra empresa
            </Button>
          </div>
        </div>

        {/* Ficha técnica de la empresa + dibujo de cuchilla */}
        <div className="mt-20 grid items-end gap-10 md:mt-28 lg:grid-cols-12 lg:gap-8">
          <dl className="border-t-2 border-ink lg:col-span-5">
            {facts.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-3.5 sm:grid-cols-[9rem_1fr]">
                <dt className="mono-index pt-0.5 text-steel">{k}</dt>
                <dd className="font-mono text-[14px] font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
          <figure className="lg:col-span-7">
            <figcaption className="mono-index mb-2 text-steel">Dibujo referencial · s/e</figcaption>
            <StraightBladeDrawing className="w-full text-ink/50" idPrefix="intro" />
          </figure>
        </div>
      </div>
    </section>
  );
}
