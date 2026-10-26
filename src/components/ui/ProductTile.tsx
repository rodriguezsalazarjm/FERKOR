import Image from "next/image";
import type { CatalogItem } from "@/content/catalog";
import { catalogCategories } from "@/content/catalog";

type Props = { item: CatalogItem; sizes: string; className?: string };

/** Ficha de producto: fotografía real sobre fondo blanco, referencia y familia. */
export function ProductTile({ item, sizes, className = "" }: Props) {
  const category = catalogCategories.find((c) => c.id === item.category);
  return (
    <figure className={`group relative flex flex-col bg-white ${className}`}>
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          quality={80}
          className={`${item.scene ? "object-cover" : "object-contain p-[6%]"} transition-transform duration-700 ease-cut group-hover:scale-[1.04]`}
        />
        <span
          className="absolute top-0 right-0 h-8 w-8 origin-top-right scale-0 bg-red transition-transform duration-300 ease-cut [clip-path:polygon(0_0,100%_0,100%_100%)] group-hover:scale-100"
          aria-hidden="true"
        />
        <span className={`absolute top-3 left-3 font-mono text-[10px] tracking-[0.08em] ${item.scene ? "bg-white/85 px-1.5 py-0.5 text-ink" : "text-steel"}`}>{item.ref}</span>
      </div>
      <figcaption className="border-t border-line px-4 py-3.5 sm:px-5 sm:py-4">
        <p className="font-mono text-[10px] tracking-[0.08em] text-red uppercase sm:text-[11px]">{category?.short}</p>
        <p className="mt-1 font-display text-lg leading-none font-extrabold text-ink uppercase sm:text-xl">{item.title}</p>
      </figcaption>
    </figure>
  );
}
