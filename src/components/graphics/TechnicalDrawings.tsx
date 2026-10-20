/**
 * Dibujos técnicos decorativos inspirados en herramientas de corte.
 * NO son planos de fabricación: el cajetín lo declara ("DIBUJO REFERENCIAL").
 */
import { arcPath, polar, sawBladePath, serratedEdge } from "@/lib/geometry";
import { Callout, CenterLine, CenterMark, DimH, DimV, Hatch, HiddenLine, Line } from "./drawing-primitives";

type DrawingProps = { className?: string; idPrefix?: string };

/** Cuchilla circular dentada: vista frontal con cotas, radios y ángulo de paso. */
export function CircularBladeDrawing({ className }: Pick<DrawingProps, "className">) {
  const c = 320;
  const R = 230;
  const teeth = 40;
  const holes = [45, 135, 225, 315].map((a) => polar(c, c, 112, a));
  const t0 = polar(c, c, R + 46, 0);
  const t1 = polar(c, c, R + 46, 360 / teeth);
  return (
    <svg viewBox="0 0 640 640" className={className} aria-hidden="true" focusable="false">
      <CenterLine d={`M${c} 40V600M40 ${c}H600`} />
      <Line d={sawBladePath(c, c, R, 16, teeth)} strokeWidth={1.25} />
      <HiddenLine d={arcPath(c, c, R - 22, 0, 359.9)} />
      <Line d={arcPath(c, c, 150, 0, 359.9)} strokeWidth={0.6} strokeDasharray="2 6" />
      <circle cx={c} cy={c} r={44} {...{ fill: "none", stroke: "currentColor", strokeWidth: 1.1, vectorEffect: "non-scaling-stroke" }} />
      <Line d={`M${c - 9} ${c - 44}v-12h18v12`} strokeWidth={1.1} />
      <CenterLine d={arcPath(c, c, 112, 0, 359.9)} />
      {holes.map((h, i) => (
        <g key={i}>
          <circle cx={h.x} cy={h.y} r={11} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
          <CenterMark x={h.x} y={h.y} s={16} />
        </g>
      ))}
      {/* Ángulo de paso entre dientes */}
      <Line d={`M${c} ${c}L${t0.x} ${t0.y}M${c} ${c}L${t1.x} ${t1.y}`} strokeWidth={0.5} strokeDasharray="4 4" />
      <Line d={arcPath(c, c, R + 30, 0, 360 / teeth)} strokeWidth={0.75} />
      <text x={t1.x + 10} y={t1.y + 16} fontSize={13} className="dw-text">
        9°
      </text>
      <DimH x1={c - R} x2={c + R} y={610} fromY={c} label="Ø 460" />
      <DimV y1={c - 44} y2={c + 44} x={c - 74} label="Ø 88" size={12} />
      <Callout x={holes[0].x + 8} y={holes[0].y - 8} x2={500} y2={110} label="4× Ø 22" />
      <Callout x={polar(c, c, 150, 250).x} y={polar(c, c, 150, 250).y} x2={110} y2={150} label="R 150" align="end" />
      <text x={c + 8} y={34} fontSize={12} className="dw-text">
        A
      </text>
    </svg>
  );
}

/** Cuchilla recta dentada con perforaciones de montaje, corte A-A y detalle de filo. */
export function StraightBladeDrawing({ className, idPrefix = "sb" }: DrawingProps) {
  const x0 = 60;
  const x1 = 820;
  const top = 96;
  const bottom = 186;
  const slots = [150, 330, 550, 730];
  return (
    <svg viewBox="0 0 960 380" className={className} aria-hidden="true" focusable="false">
      <CenterLine d={`M30 ${(top + bottom) / 2 - 18}H850`} />
      <Line d={`M${x0} ${top}H${x1}L${x1} ${bottom}`} strokeWidth={1.25} />
      <Line d={`M${x0} ${top}V${bottom}`} strokeWidth={1.25} />
      <Line d={serratedEdge(x0, x1, bottom, 12, 9)} strokeWidth={1} />
      <HiddenLine d={`M${x0} ${bottom - 18}H${x1}`} />
      {slots.map((x) => (
        <g key={x}>
          <Line
            d={`M${x - 16} ${top + 22}h32a9 9 0 0 1 0 18h-32a9 9 0 0 1 0-18z`}
            strokeWidth={1}
          />
          <CenterLine d={`M${x} ${top - 16}V${top + 58}`} />
        </g>
      ))}
      <DimH x1={x0} x2={x1} y={52} fromY={top} label="L 760" />
      <DimH x1={slots[0]} x2={slots[1]} y={74} fromY={top + 22} label="180" size={12} />
      <DimV y1={top} y2={bottom} x={862} fromX={x1} label="90" />
      {/* Marcas de corte A-A */}
      <Line d={`M440 ${top - 26}v14M440 ${bottom + 12}v14`} strokeWidth={1.5} />
      <text x={448} y={top - 16} fontSize={13} className="dw-text">A</text>
      <text x={448} y={bottom + 34} fontSize={13} className="dw-text">A</text>
      {/* Corte A-A: sección con bisel y achurado */}
      <g transform="translate(150 250)">
        <Hatch id={`${idPrefix}-hatch`} d="M0 0H210V22L250 58H0Z" />
        <Line d={arcPath(250, 58, 46, 270, 312)} strokeWidth={0.75} />
        <text x={182} y={46} fontSize={12} className="dw-text">30°</text>
        <DimV y1={0} y2={58} x={-24} fromX={0} label="3,2" size={12} />
        <text x={0} y={96} fontSize={12} className="dw-text">CORTE A-A</text>
      </g>
      {/* Detalle B: diente ampliado */}
      <g transform="translate(560 248)">
        <circle cx={70} cy={50} r={58} fill="none" stroke="currentColor" strokeWidth={0.75} strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
        <Line d={serratedEdge(20, 120, 40, 50, 34)} strokeWidth={1.1} />
        <Line d="M20 40V10M120 40V10" strokeWidth={0.6} />
        <text x={0} y={128} fontSize={12} className="dw-text">DETALLE B · 4:1</text>
      </g>
    </svg>
  );
}

/** Cajetín de plano: deja explícito que el dibujo es referencial. */
export function TitleBlock({ code = "FK-DW-01", className }: { code?: string; className?: string }) {
  return (
    <div
      className={`font-mono text-[10px] leading-tight tracking-[0.08em] uppercase ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="grid grid-cols-[auto_auto] border border-current/40">
        <span className="border-r border-b border-current/40 px-2 py-1">FERKOR</span>
        <span className="border-b border-current/40 px-2 py-1">{code}</span>
        <span className="border-r border-current/40 px-2 py-1">Dibujo referencial</span>
        <span className="px-2 py-1">Esc. s/e</span>
      </div>
    </div>
  );
}
