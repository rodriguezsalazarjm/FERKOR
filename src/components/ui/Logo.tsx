import { brand } from "@/config/brand";

type Variant = "wordmark-blanco" | "wordmark-negro" | "rojo-blanco" | "rojo-negro" | "blanco" | "negro";

const files: Record<Variant, { src: string; ratio: number }> = {
  "wordmark-blanco": { src: brand.logos.wordmarkBlanco, ratio: brand.logoRatios.wordmark },
  "wordmark-negro": { src: brand.logos.wordmarkNegro, ratio: brand.logoRatios.wordmark },
  "rojo-blanco": { src: brand.logos.rojoBlanco, ratio: brand.logoRatios.principal },
  "rojo-negro": { src: brand.logos.rojoNegro, ratio: brand.logoRatios.principal },
  blanco: { src: brand.logos.principalBlanco, ratio: brand.logoRatios.principal },
  negro: { src: brand.logos.principalNegro, ratio: brand.logoRatios.principal },
};

/**
 * Logotipo oficial FERKOR (SVG del sistema de diseño). Nunca recrear con tipografía.
 * `height` en px; el ancho se calcula con la proporción del archivo.
 */
export function Logo({ variant = "wordmark-blanco", height = 28, className = "" }: { variant?: Variant; height?: number; className?: string }) {
  const f = files[variant];
  return (
    // SVG vectorial local: <img> evita el optimizador y conserva nitidez.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={f.src}
      alt="FERKOR — Soluciones de Corte Industrial"
      width={Math.round(height * f.ratio)}
      height={height}
      className={`block h-auto max-w-full ${className}`}
      style={{ height, width: "auto" }}
    />
  );
}
