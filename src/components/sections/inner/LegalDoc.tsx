import Link from "next/link";
import type { ReactNode } from "react";
import { company } from "@/content/company";
import { Pending } from "@/components/ui/Pending";

export const legalUpdated = "28 de octubre de 2026";

export const legalDocs = [
  { href: "/privacidad", label: "Política de privacidad" },
  { href: "/tratamiento-de-datos", label: "Tratamiento de datos personales" },
  { href: "/cookies", label: "Política de cookies" },
] as const;

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Cuerpo de un documento legal: índice, secciones numeradas y enlaces a los demás documentos. */
export function LegalDoc({ current, intro, sections }: { current: string; intro: ReactNode; sections: LegalSection[] }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="wrap max-w-3xl">
        <p className="font-mono text-xs tracking-[0.04em] text-steel">Última actualización: {legalUpdated}</p>
        <div className="mt-6 border-l-2 border-red pl-5 text-ink/80">{intro}</div>

        <nav aria-label="Contenido" className="mt-10 bg-paper p-5">
          <p className="mono-index text-red">Contenido</p>
          <ol className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-ink/80 hover:text-red">
                  <span className="mr-2 font-mono text-xs text-red">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <ol className="mt-12 border-t-2 border-ink">
          {sections.map((s, i) => (
            <li key={s.id} id={s.id} className="scroll-mt-24 border-b border-line py-8">
              <h2 className="flex items-baseline gap-4 font-display text-2xl leading-none font-extrabold text-ink uppercase">
                <span className="font-mono text-xs text-red">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              <div className="legal-body mt-4 space-y-3 pl-9 text-[15px] leading-relaxed text-ink/80">{s.body}</div>
            </li>
          ))}
        </ol>

        <nav aria-label="Documentos legales" className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {legalDocs
            .filter((d) => d.href !== current)
            .map((d) => (
              <Link key={d.href} href={d.href} className="font-semibold text-ink underline underline-offset-2 hover:text-red">
                {d.label}
              </Link>
            ))}
        </nav>
      </div>
    </section>
  );
}

/** Identificación del responsable con los datos pendientes marcados. */
export function Controller() {
  const { legal, contact } = company;
  return (
    <ul>
      <li>
        <strong>Nombre comercial:</strong> {company.name} — {company.descriptor}
      </li>
      <li>
        <strong>Razón social:</strong> {legal.razonSocial ?? <Pending label="por confirmar" />}
      </li>
      <li>
        <strong>RUT:</strong> {legal.rut ?? <Pending label="por confirmar" />}
      </li>
      <li>
        <strong>Domicilio:</strong> {company.city}, {company.country}
      </li>
      <li>
        <strong>Correo para privacidad:</strong> <MailLink />
      </li>
      {contact.whatsapp && (
        <li>
          <strong>WhatsApp:</strong> +{contact.whatsapp}
        </li>
      )}
    </ul>
  );
}

export function MailLink() {
  const email = company.contact.email;
  return email ? (
    <a href={`mailto:${email}`} className="font-semibold text-ink underline underline-offset-2 hover:text-red">
      {email}
    </a>
  ) : (
    <Pending />
  );
}
