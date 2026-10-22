import Link from "next/link";
import type { Service } from "@/content/services";
import { ProductImage } from "@/components/ui/ProductImage";
import { Arrow } from "@/components/ui/Button";

/** Tarjeta de línea de producto. `lg` = líneas principales (dentados, zigzag). */
export function ProductLineCard({ product: p, size = "md" }: { product: Service; size?: "md" | "lg" }) {
  const lg = size === "lg";
  return (
    <article
      className={`group chamfer-md relative grid h-full bg-white transition-shadow duration-300 hover:shadow-[0_0_0_1px_var(--color-ink)] ${
        lg ? "" : "sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
      }`}
    >
      <div className={`relative overflow-hidden border-line ${lg ? "aspect-[16/10] border-b" : "aspect-[4/3] border-b sm:aspect-auto sm:min-h-[220px] sm:border-r sm:border-b-0"}`}>
        <ProductImage product={p.product} icon={p.icon} sizes={lg ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 20vw, 100vw"} />
        {lg && <span className="absolute top-4 left-4 bg-red px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-white uppercase">Más solicitados</span>}
      </div>
      <div className={`flex flex-col ${lg ? "p-7 md:p-9" : "p-6"}`}>
        <p className="mono-index text-red">{p.need}</p>
        <h3 className={`mt-3 font-display leading-[0.95] font-extrabold text-ink uppercase ${lg ? "text-4xl md:text-5xl" : "text-3xl"}`}>{p.title}</h3>
        <p className={`mt-3 text-ink/75 ${lg ? "text-lg" : "text-[15px]"}`}>{p.summary}</p>
        {lg && (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <li key={t} className="rounded-sm border border-line px-2 py-1 font-mono text-[11px] text-ink/80">
                {t}
              </li>
            ))}
          </ul>
        )}
        <Link href={p.href} className="mt-auto inline-flex items-center gap-3 pt-7 text-sm font-semibold text-ink after:absolute after:inset-0 hover:text-red">
          Ver {p.title.toLowerCase()}
          <Arrow />
        </Link>
      </div>
    </article>
  );
}
