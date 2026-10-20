type Props = {
  /** Texto mono a la izquierda (ej. "02 / 11"). */
  label?: string;
  /** Texto mono a la derecha (ej. una referencia). */
  meta?: string;
  tone?: "light" | "dark";
  className?: string;
};

/** Separador tipo regla técnica: línea fina con marcas de medida y cota central. */
export function TechnicalDivider({ label, meta, tone = "light", className = "" }: Props) {
  const color = tone === "dark" ? "text-white/25" : "text-ink/25";
  const text = tone === "dark" ? "text-steel-light" : "text-steel";
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      {label && <span className={`mono-index shrink-0 ${text}`}>{label}</span>}
      <svg className={`h-3 min-w-0 flex-1 ${color}`} preserveAspectRatio="none" focusable="false">
        <defs>
          <pattern id={`ruler-${tone}`} width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M0.5 0V5" stroke="currentColor" strokeWidth="1" />
          </pattern>
          <pattern id={`ruler-major-${tone}`} width="120" height="12" patternUnits="userSpaceOnUse">
            <path d="M0.5 0V11" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="1" fill="currentColor" />
        <rect width="100%" height="12" fill={`url(#ruler-${tone})`} />
        <rect width="100%" height="12" fill={`url(#ruler-major-${tone})`} />
      </svg>
      <span className="block h-2 w-2 shrink-0 rotate-45 bg-red" />
      {meta && <span className={`mono-index shrink-0 ${text}`}>{meta}</span>}
    </div>
  );
}
