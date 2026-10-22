import type { Metadata } from "next";
import { company } from "@/content/company";
import { differentials } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { FerkorIcon } from "@/components/graphics/FerkorIcon";
import { StraightBladeDrawing } from "@/components/graphics/TechnicalDrawings";
import { PageHero } from "@/components/sections/inner/PageHero";
import { BlockHeader, CatalogStrip } from "@/components/sections/inner/Blocks";
import { Reviews } from "@/components/sections/Reviews";
import { FinalCta } from "@/components/sections/home/FinalCta";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "FERKOR: herramientas de corte industrial, mecanizado y asesoría técnica en Santiago, con atención directa y conocimiento técnico.",
};

const { experience: xp } = company;

const timeline = [
  { n: `${xp.fieldSalesYears} años`, t: "En terreno", d: "Como vendedor técnico, conociendo las líneas de producción y los problemas de corte de cada cliente." },
  { n: `${xp.ventureYears} años`, t: "FERKOR", d: "Desarrollando soluciones propias: cuchillos a medida, afilado, mecanizado y repuestos." },
  { n: "Hoy", t: "Atención directa", d: "Cada requerimiento lo evalúa quien conoce aceros, tratamientos térmicos y planos." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        index="P1"
        label="Nosotros"
        title="Conocimiento técnico,"
        accent="atención directa."
        lead={`FERKOR se especializa en herramientas de corte para uso industrial: cuchillos y componentes para envasado, procesamiento de alimentos y papel y cartón, con mecanizado, repuestos y asesoría técnica. Atendemos desde ${company.coverage}.`}
        product={{ src: "/images/herramientas/9d328c.webp", alt: "Piñón mecanizado" }}
        actions={
          <Button href="/contacto" size="lg" arrow>
            Hablar con FERKOR
          </Button>
        }
      />

      <section className="bg-white py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <BlockHeader index="01" label="Trayectoria" title={`≈ ${xp.years} años`} accent="en el sector." />
            <p className="mt-8 text-lg text-ink/75">
              {xp.owner}, responsable de FERKOR, acumula cerca de {xp.years} años en herramientas de corte industrial. Esa
              experiencia en terreno es la base de cómo trabajamos: entender primero la máquina y el proceso, y después
              proponer la pieza.
            </p>
          </div>
          <ol className="border-t-2 border-ink lg:col-span-6 lg:col-start-7">
            {timeline.map((t) => (
              <li key={t.t} className="grid grid-cols-[6.5rem_1fr] gap-x-5 border-b border-line py-7 sm:grid-cols-[8rem_1fr]">
                <span className="font-display text-3xl leading-none font-black text-red uppercase">{t.n}</span>
                <div>
                  <h3 className="font-display text-2xl leading-none font-extrabold text-ink uppercase">{t.t}</h3>
                  <p className="mt-2 text-ink/70">{t.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="wrap mt-16 md:mt-24">
          <StraightBladeDrawing className="w-full text-ink/35" idPrefix="nos" />
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="wrap">
          <BlockHeader index="02" label="Cómo trabajamos" title="Lo que" accent="nos define." />
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {differentials.map((d) => (
              <li key={d.title} className="flex flex-col bg-white p-6">
                <FerkorIcon name={d.icon} size={40} className="text-ink" />
                <h3 className="mt-6 font-display text-2xl leading-none font-extrabold text-ink uppercase">{d.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{d.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="wrap">
          <BlockHeader index="03" label="Trabajos" title="Piezas que" accent="hablan por nosotros." />
          <div className="mt-12">
            <CatalogStrip refs={["FK-DE-01", "FK-CI-03", "FK-ME-01", "FK-RE-01"]} />
          </div>
        </div>
      </section>

      <Reviews index="04" />
      <FinalCta />
    </>
  );
}
