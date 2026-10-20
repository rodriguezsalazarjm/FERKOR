/**
 * Iconografía propia FERKOR.
 * Retícula de 48px, trazo 1.75, puntas y uniones cuadradas, en currentColor.
 * `precision`, `rectificacion`, `materiales` y `respuesta` vienen del set de la
 * lámina (sistema de diseño); el resto se dibujó en el mismo trazo.
 * Evitar engranajes genéricos: se usan perfiles de filo, cotas y planos.
 */
import { sawBladePath } from "@/lib/geometry";

const ICONS = {
  // Retícula de mira + cruz de centro.
  precision: (
    <>
      <circle cx="24" cy="24" r="14" />
      <circle cx="24" cy="24" r="3" />
      <path d="M24 4v12M24 32v12M4 24h12M32 24h12" />
    </>
  ),
  // Perfil de cuchilla con cota superior: fabricar según medida.
  fabricacion: (
    <>
      <path d="M6 30h30l6-8H6z" />
      <path d="M6 36v4M42 22v18M6 38h36" />
      <path d="M14 30v-8M22 30v-8" />
      <path d="M6 12h36M6 9v6M42 9v6" />
    </>
  ),
  // Muela de rectificar sobre su eje y la pieza.
  rectificacion: (
    <>
      <circle cx="24" cy="21" r="15" />
      <circle cx="24" cy="21" r="6" />
      <circle cx="24" cy="21" r="1.5" />
      <path d="M8 43h32M24 36v7" />
    </>
  ),
  // Filo en bisel con ángulo de afilado.
  afilado: (
    <>
      <path d="M6 34h36L18 14H6z" />
      <path d="M30 34a12 12 0 0 0-3.5-8.5" />
      <path d="M6 40h36" strokeDasharray="3 3" />
    </>
  ),
  // Cuchilla circular dentada con agujero de montaje.
  herramientas: (
    <>
      <path d={sawBladePath(24, 24, 19, 4.5, 14)} />
      <circle cx="24" cy="24" r="5" />
      <path d="M24 19v-2" />
    </>
  ),
  // Láminas de material apiladas.
  materiales: (
    <>
      <path d="M24 7l17 8.5L24 24 7 15.5z" />
      <path d="M7 23l17 8.5L41 23" />
      <path d="M7 30.5l17 8.5 17-8.5" />
    </>
  ),
  // Hoja de plano con vista y cota.
  planos: (
    <>
      <path d="M8 6h24l8 8v28H8z" />
      <path d="M32 6v8h8" />
      <path d="M14 30h20v-8H20l-6 4z" />
      <path d="M14 36h20M14 34v4M34 34v4" />
    </>
  ),
  // Dos interlocutores: atención directa / asesoría.
  asesoria: (
    <>
      <path d="M6 8h24v16H16l-6 5v-5H6z" />
      <path d="M34 18h8v16h-4v5l-6-5H20v-6" />
      <path d="M12 14h12M12 19h8" />
    </>
  ),
  // Documento de cotización con línea de total.
  cotizacion: (
    <>
      <path d="M10 4h28v40l-5-3-5 3-4-3-4 3-5-3-5 3z" />
      <path d="M16 13h16M16 20h16M16 27h8" />
      <path d="M26 33h6" />
    </>
  ),
  // Cronómetro: capacidad de respuesta.
  respuesta: (
    <>
      <circle cx="24" cy="27" r="15" />
      <path d="M24 27v-8M19 5h10M24 5v7M35.5 15.5l3-3" />
    </>
  ),
} as const;

export type FerkorIconName = keyof typeof ICONS;

type Props = {
  name: FerkorIconName;
  size?: number;
  className?: string;
  /** Si se entrega, el ícono es informativo; si no, decorativo. */
  title?: string;
  strokeWidth?: number;
};

export function FerkorIcon({ name, size = 40, className, title, strokeWidth = 1.75 }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {ICONS[name]}
    </svg>
  );
}

export const ferkorIconNames = Object.keys(ICONS) as FerkorIconName[];
