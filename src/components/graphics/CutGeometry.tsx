/**
 * Cortes diagonales de la marca (28°, el ángulo del isotipo).
 * Bandas rojas y de acero que cruzan composiciones, como en la lámina de identidad.
 */
type Variant = "hero" | "band" | "corner" | "stack";

type Props = { variant?: Variant; className?: string };

export function CutGeometry({ variant = "band", className = "" }: Props) {
  const base = `pointer-events-none select-none ${className}`;
  switch (variant) {
    case "hero":
      return (
        <svg viewBox="0 0 400 800" preserveAspectRatio="none" className={base} aria-hidden="true" focusable="false">
          <polygon points="250,0 330,0 110,800 30,800" className="fill-red" />
          <polygon points="352,0 368,0 148,800 132,800" className="fill-red/70" />
          <polygon points="210,0 222,0 2,800 -10,800" className="fill-white/10" />
        </svg>
      );
    case "corner":
      return (
        <svg viewBox="0 0 200 200" className={base} aria-hidden="true" focusable="false">
          <polygon points="120,0 200,0 200,46 80,200 0,200 0,154" className="fill-red" />
        </svg>
      );
    case "stack":
      return (
        <svg viewBox="0 0 120 60" className={base} aria-hidden="true" focusable="false">
          <polygon points="28,0 60,0 32,60 0,60" className="fill-red" />
          <polygon points="76,0 92,0 64,60 48,60" className="fill-current" />
          <polygon points="108,0 116,0 88,60 80,60" className="fill-current opacity-50" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 600 120" preserveAspectRatio="none" className={base} aria-hidden="true" focusable="false">
          <polygon points="420,0 600,0 600,0 536,120 356,120" className="fill-red" />
          <polygon points="380,0 396,0 332,120 316,120" className="fill-red/60" />
        </svg>
      );
  }
}
