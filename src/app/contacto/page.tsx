import type { Metadata } from "next";
import { Suspense } from "react";
import { company, whatsappHref, waMessages } from "@/content/company";
import { Pending } from "@/components/ui/Pending";
import { PageHero } from "@/components/sections/inner/PageHero";
import { QuoteForm } from "@/components/sections/inner/QuoteForm";

export const metadata: Metadata = {
  title: "Contacto y cotización",
  description: "Cotiza cuchillos industriales, afilado, mecanizado o repuestos: envíanos fotos, planos o medidas.",
};

const tips = [
  "Una foto del cuchillo o pieza, con una regla o huincha al lado",
  "Medidas principales y, si existe, el plano",
  "Máquina en la que trabaja y qué producto corta",
  "Cantidad que necesitas",
];

export default function ContactoPage() {
  const wa = whatsappHref(waMessages.general);
  return (
    <>
      <PageHero
        index="P9"
        label="Contacto"
        title="Cuéntanos qué"
        accent="necesitas cortar."
        lead="Completa el formulario con fotos o planos de la pieza. Si prefieres, escríbenos por WhatsApp. Evaluamos cada requerimiento antes de cotizar."
      />

      <section className="bg-paper py-14 md:py-20">
        <div className="wrap grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="min-h-[600px] bg-white" />}>
              <QuoteForm />
            </Suspense>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <div className="on-dark bg-ink p-7 text-white">
              <p className="mono-index text-red-light">Contacto directo</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-steel-light">WhatsApp</dt>
                  <dd className="mt-1 text-white">
                    {wa ? (
                      <a href={wa} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-4 hover:underline">
                        Escribir por WhatsApp
                      </a>
                    ) : (
                      <Pending label="número por confirmar" className="ml-0" />
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="text-steel-light">Correo</dt>
                  <dd className="mt-1 text-white">
                    {company.contact.email ? <a href={`mailto:${company.contact.email}`}>{company.contact.email}</a> : <Pending className="ml-0" />}
                  </dd>
                </div>
                <div>
                  <dt className="text-steel-light">Ubicación</dt>
                  <dd className="mt-1 text-white">{company.coverage}</dd>
                </div>
              </dl>
            </div>

            <div className="border border-line bg-white p-7">
              <p className="mono-index text-red">Para cotizar más rápido</p>
              <ul className="mt-5 space-y-3">
                {tips.map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-ink/80">
                    <span className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rotate-45 bg-red" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 text-sm text-ink/70">
                ¿No sabes la medida? Podemos visitar tu planta y levantarla en terreno.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
