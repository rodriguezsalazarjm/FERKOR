import type { Metadata } from "next";
import { images } from "@/content/images";
import { company } from "@/content/company";
import { differentials } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { FerkorIcon } from "@/components/graphics/FerkorIcon";
import { StraightBladeDrawing } from "@/components/graphics/TechnicalDrawings";
import { PageHero } from "@/components/sections/inner/PageHero";
import { BlockHeader, CatalogStrip } from "@/components/sections/inner/Blocks";
import { Reviews } from "@/components/sections/Reviews";
import { ProductImage } from "@/components/ui/ProductImage";
import { FinalCta } from "@/components/sections/home/FinalCta";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "FERKOR: herramientas de corte industrial, mecanizado y asesoría técnica en Santiago, con atención directa y conocimiento técnico.",
};

const { experience: xp } = company;

// TODO(cliente): confirmar el desglose de la trayectoria (años en terreno y años de FERKOR) para que sume la cifra declarada.
const timeline = [
  { n: "Origen", t: "En terreno", d: "Como vendedor técnico, conociendo las líneas de producción y los problemas de corte de cada cliente." },
  { n: `${xp.years} años`, t: "Experiencia", d: "Desarrollando soluciones propias: cuchillos a medida, afilado, mecanizado y repuestos." },
  { n: "Hoy", t: "Atención directa", d: "Cada requerimiento lo evalúa quien conoce aceros, tratamientos térmicos y planos." },
];

/** Espacios para fotografía real de FERKOR. Sin `src` = pendiente del cliente (no usar fotos de stock). */
const photoSlots: { label: string; src?: string; alt?: string }[] = [
  { label: "Responsable de FERKOR" },
  { label: "Trabajo en taller", src: "/images/trabajos/rectificado-placas.webp", alt: "Piezas planas montadas para rectificado" },
  { label: "Procesos industriales" },
  { label: "Visitas técnicas" },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        background={images.tallerRectificado}
        index="P1"
        label="Nosotros"
        title="Conocimiento técnico,"
        accent="atención directa."
        lead={`FERKOR se especializa en herramientas de corte para uso industrial: cuchillos y componentes para envasado, procesamiento de alimentos y papel y cartón, con mecanizado, repuestos y asesoría técnica. ${company.coverage}.`}
        product={{ src: "/images/trabajos/pinones.webp", alt: "Piñones mecanizados por FERKOR" }}
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
              experiencia práctica es la base de cómo trabajamos: entender primero la máquina y el proceso productivo, y
              después proponer la pieza.
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
          <BlockHeader index="03" label="Equipo y taller" title="Quienes" accent="están detrás." />
          <ul className="mt-12 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
            {photoSlots.map((p) => (
              <li key={p.label} className="bg-white">
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                    <ProductImage product={p.src ? { src: p.src, alt: p.alt ?? p.label } : undefined} icon="asesoria" sizes="(min-width: 1024px) 25vw, 50vw" cover />
                  </div>
                  <figcaption className="border-t border-line px-4 py-3 font-mono text-[11px] tracking-[0.06em] text-ink uppercase">{p.label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <CatalogStrip refs={["FK-DE-10", "FK-CI-10", "FK-ME-10", "FK-RE-06"]} />
          </div>
        </div>
      </section>

      <Reviews index="04" />
      <FinalCta />
    </>
  );
}
