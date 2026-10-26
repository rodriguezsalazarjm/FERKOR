import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TechnicalGrid } from "@/components/graphics/TechnicalGrid";
import { CutGeometry } from "@/components/graphics/CutGeometry";

type Props = {
  index: string;
  label: string;
  title: string;
  accent: string;
  lead: string;
  /** Migas: [{label, href}] sin incluir la página actual. */
  trail?: { label: string; href: string }[];
  actions?: ReactNode;
  /** Producto real sobre blanco a la derecha (desktop). */
  product?: { src: string; alt: string };
  children?: ReactNode;
};

/** Portada de página interior: bloque negro con retícula, titular de dos tonos y producto real opcional. */
export function PageHero({ index, label, title, accent, lead, trail = [], actions, product, children }: Props) {
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink text-white">
      <TechnicalGrid className="text-white/[0.045]" minor={16} major={80} />
      <div className="wrap relative grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-24">
        <div className={product ? "lg:col-span-7" : "lg:col-span-9"}>
          <nav aria-label="Migas de pan" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] tracking-[0.06em] text-steel-light uppercase">
              <li>
                <Link href="/" className="hover:text-white">
                  Inicio
                </Link>
              </li>
              {trail.map((t) => (
                <li key={t.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href={t.href} className="hover:text-white">
                    {t.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 text-white/80" aria-current="page">
                <span aria-hidden="true">/</span>
                {label}
              </li>
            </ol>
          </nav>
          <SectionLabel index={index} tone="dark">
            {label}
          </SectionLabel>
          <h1 className="display mt-6 text-[clamp(2.9rem,7.5vw,5.75rem)] font-black">
            <span className="hero-line">
              <span style={{ "--i": 0 } as React.CSSProperties}>{title}</span>
            </span>{" "}
            <span className="hero-line text-red">
              <span style={{ "--i": 1 } as React.CSSProperties}>{accent}</span>
            </span>
          </h1>
          <p className="hero-in mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl md:leading-[1.55]" style={{ "--i": -1 } as React.CSSProperties}>
            {lead}
          </p>
          {actions && (
            <div className="hero-in mt-9 flex flex-col gap-3 xs:flex-row xs:flex-wrap" style={{ "--i": 0 } as React.CSSProperties}>
              {actions}
            </div>
          )}
          <div className="hero-in" style={{ "--i": 1 } as React.CSSProperties}>
            {children}
          </div>
        </div>
        {product && (
          <div className="hero-in relative lg:col-span-5" style={{ "--i": -2 } as React.CSSProperties}>
            <div className="chamfer-lg relative aspect-square bg-white">
              <Image src={product.src} alt={product.alt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" quality={80} className={`hero-settle ${isScene(product.src) ? "object-cover" : "object-contain p-[5%]"}`} />
            </div>
            <CutGeometry variant="corner" className="absolute -bottom-3 -left-3 h-16 w-16" />
          </div>
        )}
      </div>
    </section>
  );
}

/** Fotos en contexto (no recortadas sobre blanco) se muestran a sangre. */
const isScene = (src: string) => src.startsWith("/images/trabajos/");
