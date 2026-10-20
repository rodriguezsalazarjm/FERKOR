/**
 * Primitivas de dibujo técnico (estilo plano CAD) para los dibujos decorativos.
 * Todas usan currentColor y trazo que no escala, para líneas finas a cualquier tamaño.
 */
import type { SVGProps } from "react";

export const hair = {
  vectorEffect: "non-scaling-stroke" as const,
  fill: "none",
  stroke: "currentColor",
};

/** Línea de eje (trazo-punto). */
export function CenterLine(props: SVGProps<SVGPathElement>) {
  return <path {...hair} strokeWidth={0.75} strokeDasharray="18 4 3 4" {...props} />;
}

/** Línea oculta (discontinua). */
export function HiddenLine(props: SVGProps<SVGPathElement>) {
  return <path {...hair} strokeWidth={0.75} strokeDasharray="6 5" {...props} />;
}

export function Line(props: SVGProps<SVGPathElement>) {
  return <path {...hair} strokeWidth={1} {...props} />;
}

type Label = { label: string; size?: number };

const arrow = (x: number, y: number, dir: "l" | "r" | "u" | "d", s = 7) => {
  const k = s * 0.42;
  switch (dir) {
    case "l":
      return `M${x + s} ${y - k}L${x} ${y}L${x + s} ${y + k}`;
    case "r":
      return `M${x - s} ${y - k}L${x} ${y}L${x - s} ${y + k}`;
    case "u":
      return `M${x - k} ${y + s}L${x} ${y}L${x + k} ${y + s}`;
    case "d":
      return `M${x - k} ${y - s}L${x} ${y}L${x + k} ${y - s}`;
  }
};

/** Cota horizontal con líneas de referencia desde `fromY` hasta `y`. */
export function DimH({ x1, x2, y, fromY, label, size = 13 }: { x1: number; x2: number; y: number; fromY?: number } & Label) {
  const ext = fromY ?? y;
  const dir = ext > y ? 1 : -1;
  return (
    <g>
      {fromY !== undefined && (
        <Line d={`M${x1} ${ext - dir * 4}V${y - dir * 6}M${x2} ${ext - dir * 4}V${y - dir * 6}`} strokeWidth={0.6} />
      )}
      <Line d={`M${x1} ${y}H${x2}`} strokeWidth={0.75} />
      <Line d={`${arrow(x1, y, "l")}${arrow(x2, y, "r")}`} strokeWidth={0.75} />
      <text x={(x1 + x2) / 2} y={y - 6} textAnchor="middle" fontSize={size} className="dw-text">
        {label}
      </text>
    </g>
  );
}

/** Cota vertical. */
export function DimV({ y1, y2, x, fromX, label, size = 13 }: { y1: number; y2: number; x: number; fromX?: number } & Label) {
  const ext = fromX ?? x;
  const dir = ext > x ? 1 : -1;
  return (
    <g>
      {fromX !== undefined && (
        <Line d={`M${ext - dir * 4} ${y1}H${x - dir * 6}M${ext - dir * 4} ${y2}H${x - dir * 6}`} strokeWidth={0.6} />
      )}
      <Line d={`M${x} ${y1}V${y2}`} strokeWidth={0.75} />
      <Line d={`${arrow(x, y1, "u")}${arrow(x, y2, "d")}`} strokeWidth={0.75} />
      <text
        x={x - 7}
        y={(y1 + y2) / 2}
        textAnchor="middle"
        fontSize={size}
        className="dw-text"
        transform={`rotate(-90 ${x - 7} ${(y1 + y2) / 2})`}
      >
        {label}
      </text>
    </g>
  );
}

/** Llamada con línea de referencia quebrada. */
export function Callout({ x, y, x2, y2, label, size = 13, align = "start" }: { x: number; y: number; x2: number; y2: number; align?: "start" | "end" } & Label) {
  const shelf = align === "start" ? 54 : -54;
  return (
    <g>
      <circle cx={x} cy={y} r={2.2} fill="currentColor" />
      <Line d={`M${x} ${y}L${x2} ${y2}h${shelf}`} strokeWidth={0.75} />
      <text x={x2 + (align === "start" ? 2 : -2)} y={y2 - 6} textAnchor={align} fontSize={size} className="dw-text">
        {label}
      </text>
    </g>
  );
}

/** Achurado a 45° dentro de un trazado (vistas en corte). */
export function Hatch({ id, d, spacing = 7 }: { id: string; d: string; spacing?: number }) {
  return (
    <g>
      <defs>
        <pattern id={id} width={spacing} height={spacing} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2={spacing} stroke="currentColor" strokeWidth={0.6} vectorEffect="non-scaling-stroke" />
        </pattern>
      </defs>
      <path d={d} fill={`url(#${id})`} />
      <Line d={d} strokeWidth={1.1} />
    </g>
  );
}

/** Marca de centro (cruz corta). */
export function CenterMark({ x, y, s = 10 }: { x: number; y: number; s?: number }) {
  return <Line d={`M${x - s} ${y}H${x + s}M${x} ${y - s}V${y + s}`} strokeWidth={0.75} />;
}
