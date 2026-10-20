import Image from "next/image";
import type { SiteImage } from "@/content/images";

type Props = {
  image: SiteImage;
  sizes: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  /** Muestra la etiqueta "Ref. visual" cuando la imagen es provisional. */
  badge?: boolean;
  badgePosition?: "tl" | "tr" | "bl" | "br";
  /** Tratamiento de marca: B/N contrastado. */
  graded?: boolean;
};

const pos = { tl: "top-3 left-3", tr: "top-3 right-3", bl: "bottom-3 left-3", br: "bottom-3 right-3" };

/** Fotografía con tratamiento FERKOR y aviso de imagen provisional. Requiere contenedor con tamaño. */
export function Photo({
  image,
  sizes,
  priority,
  className = "",
  imgClassName = "",
  badge = true,
  badgePosition = "bl",
  graded = true,
}: Props) {
  const position = /\babsolute\b/.test(className) ? "" : "relative";
  return (
    <div className={`${position} overflow-hidden bg-ink-700 ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        loading={priority ? "eager" : undefined}
        fetchPriority={priority ? "high" : undefined}
        quality={70}
        className={`object-cover ${graded ? "photo-grade" : ""} ${imgClassName}`}
      />
      {badge && image.provisional && <ProvisionalBadge className={`absolute ${pos[badgePosition]}`} />}
    </div>
  );
}

export function ProvisionalBadge({ className = "", label = "Ref. visual" }: { className?: string; label?: string }) {
  return (
    <span
      className={`z-10 inline-flex items-center gap-1.5 bg-ink/80 px-2 py-1 font-mono text-[10px] leading-none tracking-[0.08em] text-white/85 uppercase backdrop-blur-sm ${className}`}
      title="Imagen de referencia provisional: no corresponde a un trabajo de FERKOR"
    >
      <span className="h-1.5 w-1.5 bg-red-light" aria-hidden="true" />
      {label}
    </span>
  );
}
