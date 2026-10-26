import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/content/company";
import { Pending } from "@/components/ui/Pending";
import { PageHero } from "@/components/sections/inner/PageHero";

export const metadata: Metadata = {
  title: "Privacidad y cookies",
  description: "Tratamiento de datos personales y uso de cookies en el sitio de FERKOR.",
  robots: { index: false, follow: true },
};

/**
 * Estructura de la política de privacidad y cookies.
 * TODO(cliente/legal): redactar y revisar cada sección con asesoría legal antes de publicar
 * (Ley 19.628 y Ley 21.719 de protección de datos personales). No completar con texto genérico.
 */
const sections = [
  { id: "responsable", title: "Responsable del tratamiento", items: ["Razón social y RUT", "Domicilio", "Correo de contacto para privacidad"] },
  { id: "datos", title: "Datos que recopilamos", items: ["Datos del formulario de cotización: nombre, empresa, correo, teléfono y descripción del requerimiento", "Mensajes y archivos enviados por WhatsApp"] },
  { id: "finalidad", title: "Finalidad y base de tratamiento", items: ["Responder solicitudes de cotización y consultas comerciales"] },
  { id: "conservacion", title: "Conservación y destinatarios", items: ["Plazo de conservación", "Proveedores que intervienen (mensajería, hosting, correo)"] },
  { id: "derechos", title: "Derechos de las personas", items: ["Cómo ejercer acceso, rectificación, supresión, oposición y portabilidad"] },
  { id: "cookies", title: "Uso de cookies", items: ["Cookies técnicas del sitio", "Herramientas de analítica, si se incorporan, y cómo desactivarlas"] },
];

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        index="L1"
        label="Legal"
        title="Privacidad"
        accent="y cookies."
        lead="Cómo trata FERKOR los datos que nos envías al cotizar. Este documento está en preparación y será revisado antes de su publicación definitiva."
      />
      <section className="bg-white py-16 md:py-24">
        <div className="wrap max-w-3xl">
          <p className="border-l-2 border-red pl-5 text-ink/80">
            Mientras se completa esta política: los datos del formulario de cotización se usan solo para responder tu
            solicitud. Para consultas sobre tus datos, escríbenos por los canales de{" "}
            <Link href="/contacto" className="font-semibold text-ink underline underline-offset-2 hover:text-red">
              contacto
            </Link>
            .
          </p>
          <ol className="mt-12 border-t-2 border-ink">
            {sections.map((s, i) => (
              <li key={s.id} id={s.id} className="scroll-mt-24 border-b border-line py-7">
                <h2 className="flex items-baseline gap-4 font-display text-2xl leading-none font-extrabold text-ink uppercase">
                  <span className="font-mono text-xs text-red">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                  <Pending label="en redacción" />
                </h2>
                <ul className="mt-4 space-y-1.5 pl-9 text-sm text-ink/70">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-mono text-xs text-steel">
            {company.name} · {company.descriptor}
          </p>
        </div>
      </section>
    </>
  );
}
