type Props = {
  className?: string;
  /** Paso de la retícula menor y mayor, en px. */
  minor?: number;
  major?: number;
  /** Opacidad de las líneas menores relativa a las mayores. */
  minorOpacity?: number;
};

/**
 * Retícula técnica tipo papel milimetrado. Cubre su contenedor (position absolute).
 * El color sale de currentColor: controlarlo con clases text-* y opacity-*.
 */
export function TechnicalGrid({ className = "", minor = 16, major = 80, minorOpacity = 0.45 }: Props) {
  const id = `tg-${minor}-${major}-${String(minorOpacity).replace(".", "")}`;
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={`${id}-m`} width={minor} height={minor} patternUnits="userSpaceOnUse">
          <path d={`M${minor} 0H0V${minor}`} fill="none" stroke="currentColor" strokeWidth="0.5" opacity={minorOpacity} />
        </pattern>
        <pattern id={id} width={major} height={major} patternUnits="userSpaceOnUse">
          <rect width={major} height={major} fill={`url(#${id}-m)`} />
          <path d={`M${major} 0H0V${major}`} fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
