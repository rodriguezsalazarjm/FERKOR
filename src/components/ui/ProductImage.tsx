import Image from "next/image";
import { TechnicalGrid } from "@/components/graphics/TechnicalGrid";
import { FerkorIcon, type FerkorIconName } from "@/components/graphics/FerkorIcon";

type Props = {
  product?: { src: string; alt: string };
  icon: FerkorIconName;
  sizes: string;
  /** Padding interno de la foto (porcentaje del contenedor). */
  pad?: string;
  className?: string;
  /** Foto en contexto: llena el contenedor. */
  cover?: boolean;
};

/** Foto real de producto sobre blanco; sin foto, placeholder técnico identificado. Requiere contenedor posicionado con tamaño. */
export function ProductImage({ product, icon, sizes, pad = "p-[4%]", className = "", cover = false }: Props) {
  if (product) {
    return (
      <Image
        src={product.src}
        alt={product.alt}
        fill
        sizes={sizes}
        quality={80}
        className={`${cover ? "object-cover" : `object-contain ${pad}`} transition-transform duration-700 ease-cut group-hover:scale-[1.04] ${className}`}
      />
    );
  }
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white text-ink/40">
      <TechnicalGrid className="text-ink/[0.06]" minor={12} major={60} />
      <FerkorIcon name={icon} size={72} strokeWidth={1.25} className="relative" />
      <span className="relative font-mono text-[10px] tracking-[0.08em] uppercase">Foto pendiente</span>
    </div>
  );
}
