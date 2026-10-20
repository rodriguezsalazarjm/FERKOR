import { TechnicalGrid } from "./TechnicalGrid";
import { CircularBladeDrawing, StraightBladeDrawing, TitleBlock } from "./TechnicalDrawings";

type Tone = "blueprint" | "dark" | "light";
type Drawing = "circular" | "straight" | "composite" | "none";

type Props = {
  tone?: Tone;
  drawing?: Drawing;
  grid?: boolean;
  titleBlock?: boolean;
  code?: string;
  className?: string;
  /** Clases de posición/tamaño del dibujo principal. */
  drawingClassName?: string;
};

const toneStyles: Record<Tone, { grid: string; drawing: string; block: string }> = {
  blueprint: { grid: "text-blueprint-line/25", drawing: "text-white/70", block: "text-white/70" },
  dark: { grid: "text-white/[0.06]", drawing: "text-white/20", block: "text-white/35" },
  light: { grid: "text-ink/[0.06]", drawing: "text-ink/25", block: "text-ink/40" },
};

/**
 * Capa de patrón técnico (plano AutoCAD) para fondos de sección.
 * Se posiciona absoluta: el contenedor debe ser `relative` y `overflow-hidden`.
 * Los dibujos son decorativos (aria-hidden) y llevan cajetín "dibujo referencial".
 */
export function BlueprintPattern({
  tone = "blueprint",
  drawing = "circular",
  grid = true,
  titleBlock = false,
  code,
  className = "",
  drawingClassName,
}: Props) {
  const s = toneStyles[tone];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {grid && <TechnicalGrid className={s.grid} />}
      {drawing === "circular" && (
        <CircularBladeDrawing className={`absolute ${s.drawing} ${drawingClassName ?? "top-1/2 right-[-12%] h-[120%] -translate-y-1/2"}`} />
      )}
      {drawing === "straight" && (
        <StraightBladeDrawing className={`absolute ${s.drawing} ${drawingClassName ?? "right-0 bottom-0 w-[70%]"}`} />
      )}
      {drawing === "composite" && (
        <>
          <CircularBladeDrawing className={`absolute ${s.drawing} ${drawingClassName ?? "top-[-18%] right-[-10%] h-[115%]"}`} />
          <StraightBladeDrawing className={`absolute bottom-[-4%] left-[-6%] w-[62%] ${s.drawing}`} idPrefix={`${code ?? "cmp"}-sb`} />
        </>
      )}
      {titleBlock && <TitleBlock code={code} className={`absolute right-8 bottom-8 hidden md:block ${s.block}`} />}
    </div>
  );
}
