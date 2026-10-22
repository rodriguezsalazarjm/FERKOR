import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq } from "@/content/services";
import { catalog } from "@/content/catalog";
import { whatsappHref } from "@/content/company";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProductTile } from "@/components/ui/ProductTile";
import { Button, Arrow } from "@/components/ui/Button";
import { FerkorIcon } from "@/components/graphics/FerkorIcon";

/** Encabezado de bloque interior. */
export function BlockHeader({
  index,
  label,
  title,
  accent,
  lead,
  stacked = false,
}: {
  index: string;
  label: string;
  title: string;
  accent?: string;
  lead?: ReactNode;
  /** Sin retícula interna: para columnas angostas. */
  stacked?: boolean;
}) {
  return (
    <div className={stacked ? "" : "grid gap-6 lg:grid-cols-12 lg:items-end"}>
      <div className={stacked ? "" : "lg:col-span-7"}>
        <SectionLabel index={index}>{label}</SectionLabel>
        <h2 className="display mt-6 text-[clamp(2.3rem,5vw,3.9rem)] text-ink">
          {title}
          {accent && (
            <>
              {" "}
              <span className="block text-red">{accent}</span>
            </>
          )}
        </h2>
      </div>
      {lead && <div className="text-lg text-ink/75 lg:col-span-4 lg:col-start-9">{lead}</div>}
    </div>
  );
}

/** Lista "qué incluye" en filas numeradas con hairlines. */
export function IncludesList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="grid border-t-2 border-ink md:grid-cols-2 md:gap-x-10">
      {items.map((it, i) => (
        <li key={it.title} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-b border-line py-6">
          <span className="pt-1 font-mono text-xs text-red">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="font-display text-2xl leading-none font-extrabold text-ink uppercase">{it.title}</h3>
            <p className="mt-2 text-ink/70">{it.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Grilla de piezas reales del catálogo. */
export function CatalogStrip({ refs }: { refs: string[] }) {
  const items = refs.map((r) => catalog.find((i) => i.ref === r)).filter((i) => i !== undefined);
  if (!items.length) return null;
  return (
    <ul className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.ref}>
          <ProductTile item={item} sizes="(min-width: 1024px) 25vw, 50vw" className="h-full" />
        </li>
      ))}
    </ul>
  );
}

/** Ficha "qué necesitamos para cotizar" + CTAs. */
export function QuoteChecklist({ items, service }: { items: string[]; service?: string }) {
  const wa = whatsappHref(service ? `Hola FERKOR, quiero cotizar: ${service}.` : undefined);
  return (
    <div className="on-dark chamfer-lg grid gap-10 bg-ink p-8 text-white md:p-12 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <p className="mono-index text-red-light">Para cotizar</p>
        <h2 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.5rem)]">
          Envíanos esto{" "}
          <span className="block text-red">y te respondemos.</span>
        </h2>
        <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
          <Button href={service ? `/contacto?servicio=${encodeURIComponent(service)}` : "/contacto"} size="lg" arrow>
            Solicitar cotización
          </Button>
          {wa && (
            <Button href={wa} variant="contorno-claro" size="lg" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </Button>
          )}
        </div>
      </div>
      <ul className="lg:col-span-6 lg:col-start-7">
        {items.map((it) => (
          <li key={it} className="flex gap-4 border-b border-white/15 py-4 text-white/90 first:pt-0">
            <span className="mt-[0.55em] h-2 w-2 shrink-0 rotate-45 bg-red" aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Preguntas frecuentes con <details> nativo (accesible sin JS). */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t-2 border-ink">
      {faqs.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-2xl leading-tight font-bold text-ink uppercase">{f.q}</span>
            <span className="mt-1 font-mono text-xl leading-none text-red transition-transform group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="max-w-3xl pb-6 text-ink/75">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

/** Tarjeta de enlace a otro servicio. */
export function ServiceLink({ href, need, title, summary, icon }: { href: string; need: string; title: string; summary: string; icon: Parameters<typeof FerkorIcon>[0]["name"] }) {
  return (
    <Link href={href} className="group flex h-full items-start gap-5 bg-white p-7 transition-colors hover:bg-paper">
      <FerkorIcon name={icon} size={38} className="mt-1 shrink-0 text-ink transition-colors group-hover:text-red" />
      <span className="flex-1">
        <span className="mono-index block text-red">{need}</span>
        <span className="mt-2 block font-display text-2xl leading-none font-extrabold text-ink uppercase">{title}</span>
        <span className="mt-2 block text-sm text-ink/70">{summary}</span>
      </span>
      <Arrow className="mt-2 text-ink/60" />
    </Link>
  );
}
