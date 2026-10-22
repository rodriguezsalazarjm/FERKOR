/**
 * Planos y esquemas referenciales por línea de producto (dibujo propio, no planos de fabricación).
 * Trazo en currentColor; la pieza que vende FERKOR se destaca en rojo.
 */
import { arcPath, serratedEdge } from "@/lib/geometry";
import { CenterLine, DimH, DimV, Hatch, HiddenLine, Line } from "./drawing-primitives";

const RED = "var(--color-red)";

function Label({ x, y, children, anchor = "start", red = false, size = 13 }: { x: number; y: number; children: string; anchor?: "start" | "middle" | "end"; red?: boolean; size?: number }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} className="dw-text" style={red ? { fill: RED } : undefined}>
      {children}
    </text>
  );
}

function Leader({ d, red = false }: { d: string; red?: boolean }) {
  return <path d={d} fill="none" stroke={red ? RED : "currentColor"} strokeWidth={0.8} vectorEffect="non-scaling-stroke" />;
}

/** Sierra asimétrica (dentado de corte) sobre el borde superior. */
function sawTop(x0: number, x1: number, y: number, pitch: number, depth: number) {
  let d = `M${x0} ${y}`;
  for (let x = x0; x < x1; x += pitch) d += `L${Math.min(x + pitch * 0.8, x1)} ${y - depth}L${Math.min(x + pitch, x1)} ${y}`;
  return d;
}

/** Cuchillo zigzag para flow pack: vista frontal, detalle del diente y corte. */
export function ZigzagKnifeDrawing({ className }: { className?: string }) {
  const x0 = 80, x1 = 860, top = 120, base = 230;
  return (
    <svg viewBox="0 0 960 440" className={className} role="img" aria-label="Plano referencial de cuchillo zigzag para flow pack">
      <CenterLine d={`M40 175H900`} />
      <path d={`M${x0} ${top}H${x1}V${base}`} fill="none" stroke="currentColor" strokeWidth={1.3} vectorEffect="non-scaling-stroke" />
      <Line d={`M${x0} ${top}V${base}`} strokeWidth={1.3} />
      <path d={serratedEdge(x0, x1, base, 26, 24)} fill="none" stroke={RED} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
      {[230, 470, 710].map((x) => (
        <g key={x}>
          <circle cx={x} cy={160} r={11} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
          <CenterLine d={`M${x} 136V184M${x - 24} 160H${x + 24}`} />
        </g>
      ))}
      <DimH x1={x0} x2={x1} y={80} fromY={top} label="L" size={22} />
      <DimV y1={top} y2={base + 24} x={900} fromX={x1} label="H" size={22} />
      <DimH x1={x0} x2={x0 + 26} y={292} fromY={base + 24} label="paso" size={18} />
      <Label x={x0} y={34} size={18}>VISTA FRONTAL · DENTADO ZIGZAG</Label>
      {/* Detalle del diente */}
      <g transform="translate(520 300)">
        <circle cx={90} cy={50} r={62} fill="none" stroke="currentColor" strokeWidth={0.75} strokeDasharray="5 4" vectorEffect="non-scaling-stroke" />
        <path d={serratedEdge(40, 140, 40, 50, 44)} fill="none" stroke={RED} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
        <Line d={arcPath(65, 84, 24, 330, 390)} strokeWidth={0.75} />
        <Label x={166} y={30} size={16}>DETALLE · ÁNGULO DEL ZIGZAG</Label>
      </g>
      {/* Corte del filo */}
      <g transform="translate(120 320)">
        <Hatch id="zz-hatch" d="M0 0H180V18L220 50H0Z" />
        <Label x={0} y={82} size={16}>CORTE · BISEL DEL FILO</Label>
      </g>
    </svg>
  );
}

/** Cuchillo dentado para envasadora vertical: dentado de corte y ranuras de montaje. */
export function SerratedKnifeDrawing({ className }: { className?: string }) {
  const x0 = 80, x1 = 860, top = 140, base = 250;
  return (
    <svg viewBox="0 0 960 400" className={className} role="img" aria-label="Plano referencial de cuchillo dentado para envasadora">
      <CenterLine d="M40 195H900" />
      <path d={sawTop(x0, x1, top, 12, 11)} fill="none" stroke={RED} strokeWidth={1.4} vectorEffect="non-scaling-stroke" />
      <path
        d={`M${x0} ${top}V${base}H${x0 + 140}v-40h40v40H${x0 + 520}v-40h40v40H${x1}V${top}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.3}
        vectorEffect="non-scaling-stroke"
      />
      <HiddenLine d={`M${x0} ${top + 22}H${x1}`} />
      <DimH x1={x0} x2={x1} y={88} fromY={top - 11} label="L" size={22} />
      <DimV y1={top - 11} y2={base} x={900} fromX={x1} label="H" size={22} />
      <DimH x1={x0 + 140} x2={x0 + 180} y={300} fromY={base} label="ranura" size={18} />
      <Label x={x0} y={40} size={18}>VISTA FRONTAL · DENTADO DE CORTE</Label>
      <Label x={x0} y={370} size={18} red>
        EL DENTADO CORTA LA BOLSA AL CERRAR LAS MORDAZAS
      </Label>
    </svg>
  );
}

/** Envasadora vertical (VFFS): dónde trabajan el cuchillo dentado y las correas de arrastre. */
export function VerticalBaggerDiagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 560" className={className} role="img" aria-label="Esquema de envasadora vertical con cuchillo dentado y correas de arrastre">
      {/* Bobina y recorrido del film */}
      <circle cx={110} cy={110} r={56} fill="none" stroke="currentColor" strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
      <circle cx={110} cy={110} r={16} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      <Line d="M150 70L300 40H340" strokeWidth={1} />
      <Label x={40} y={196}>BOBINA DE FILM</Label>
      {/* Tolva y formador */}
      <Line d="M270 20H410L360 110H320Z" strokeWidth={1.2} />
      <Line d="M300 110L320 150H360L380 110" strokeWidth={1.2} />
      <Label x={430} y={60}>TOLVA Y FORMADOR</Label>
      {/* Tubo */}
      <Line d="M320 150V360M360 150V360" strokeWidth={1.2} />
      <CenterLine d="M340 140V470" />
      {/* Correas de arrastre */}
      {[296, 384].map((x) => (
        <g key={x}>
          <rect x={x - 10} y={180} width={20} height={110} rx={10} fill="none" stroke={RED} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
        </g>
      ))}
      <Leader d="M394 235H450" red />
      <Label x={456} y={239} red>CORREAS DE ARRASTRE</Label>
      {/* Mordazas y cuchillo */}
      <Line d="M250 368H316V392H250ZM364 368H430V392H364Z" strokeWidth={1.2} />
      <path d={serratedEdge(316, 352, 380, 6, 6)} fill="none" stroke={RED} strokeWidth={2} vectorEffect="non-scaling-stroke" />
      <Line d="M210 380H250M430 380H470" strokeWidth={0.8} strokeDasharray="4 3" />
      <Leader d="M352 380L470 420" red />
      <Label x={476} y={424} red>CUCHILLO DENTADO</Label>
      <Label x={476} y={360}>MORDAZAS DE SELLADO</Label>
      {/* Bolsa */}
      <Line d="M318 400H362L366 520H314Z" strokeWidth={1.2} />
      <Line d="M318 416H362M314 506H366" strokeWidth={0.6} strokeDasharray="3 3" />
      <Label x={300} y={548} anchor="end">BOLSA ENVASADA Y SELLADA</Label>
    </svg>
  );
}

/** Flow pack horizontal: dónde trabaja el cuchillo zigzag. */
export function FlowPackDiagram({ className }: { className?: string }) {
  const items = [40, 120, 200];
  return (
    <svg viewBox="0 0 900 450" className={className} role="img" aria-label="Esquema de máquina flow pack con cuchillo zigzag">
      {/* Bobina */}
      <circle cx={360} cy={80} r={50} fill="none" stroke="currentColor" strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
      <circle cx={360} cy={80} r={14} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      <Line d="M360 130V180L330 220" strokeWidth={1} />
      <Label x={420} y={60}>BOBINA DE FILM</Label>
      {/* Transportador de entrada */}
      <Line d="M20 290H330" strokeWidth={1.2} />
      {items.map((x) => (
        <rect key={x} x={x} y={258} width={56} height={30} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      ))}
      <Label x={20} y={330}>PRODUCTO</Label>
      {/* Túnel de film */}
      <Line d="M330 240H520M330 300H520" strokeWidth={1.2} />
      <Line d="M290 258H330M290 290H330" strokeWidth={0.6} strokeDasharray="4 3" />
      <rect x={350} y={262} width={56} height={30} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      <Label x={360} y={330}>SELLO LONGITUDINAL</Label>
      {/* Mordazas rotativas con cuchillo zigzag */}
      {[200, 340].map((cy) => (
        <g key={cy}>
          <circle cx={580} cy={cy} r={50} fill="none" stroke="currentColor" strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
          <CenterLine d={`M520 ${cy}H640M580 ${cy - 60}V${cy + 60}`} />
        </g>
      ))}
      <path d={serratedEdge(568, 592, 250, 4, 6)} fill="none" stroke={RED} strokeWidth={2} vectorEffect="non-scaling-stroke" />
      <path d={`M568 290L592 290`} fill="none" stroke={RED} strokeWidth={2} vectorEffect="non-scaling-stroke" />
      <Leader d="M592 252L700 160" red />
      <Label x={706} y={156} red>CUCHILLO ZIGZAG</Label>
      <Label x={580} y={432} anchor="middle">MORDAZAS ROTATIVAS</Label>
      {/* Salida */}
      <Line d="M640 290H880" strokeWidth={1.2} />
      {[680, 780].map((x) => (
        <path key={x} d={`M${x} 262h70v26h-70z`} fill="none" stroke="currentColor" strokeWidth={1} vectorEffect="non-scaling-stroke" />
      ))}
      <Label x={880} y={330} anchor="end">EMPAQUES CORTADOS Y SELLADOS</Label>
    </svg>
  );
}

/** Rodamiento lineal de fricción: corte longitudinal con el inserto de recambio. */
export function FrictionBearingDrawing({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 900 420" className={className} role="img" aria-label="Corte de rodamiento lineal de fricción con inserto de recambio">
      <CenterLine d="M40 210H860" />
      {/* Eje */}
      <Line d="M60 180H840M60 240H840" strokeWidth={1} />
      <Label x={60} y={170} size={17}>EJE</Label>
      {/* Carcasa (corte) */}
      <Hatch id="fb-top" d="M250 110H650V160H250Z" />
      <Hatch id="fb-bottom" d="M250 260H650V310H250Z" />
      <Line d="M270 110v-10M630 110v-10M270 310v10M630 310v10" strokeWidth={0.8} />
      {/* Inserto de fricción */}
      <path d="M250 160H650V180H250ZM250 240H650V260H250Z" fill="none" stroke={RED} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
      {[300, 380, 460, 540, 620].map((x) => (
        <path key={x} d={`M${x} 160v20M${x} 240v20`} stroke={RED} strokeWidth={0.8} vectorEffect="non-scaling-stroke" />
      ))}
      <Leader d="M560 170L620 96" red />
      <Label x={626} y={86} size={17} red>INSERTO DE FRICCIÓN</Label>
      <Label x={626} y={106} size={16} red>
        SE CAMBIA AL DESGASTARSE
      </Label>
      <Leader d="M300 135L200 70" />
      <Label x={60} y={66} size={17}>CARCASA (SE MANTIENE)</Label>
      <DimV y1={180} y2={240} x={700} fromX={650} label="Ø eje" size={16} />
      <DimH x1={250} x2={650} y={370} fromY={310} label="L" size={20} />
    </svg>
  );
}

/** Correa de arrastre: perfil con dientes y cara de goma. */
export function DriveBeltDrawing({ className }: { className?: string }) {
  const x0 = 60, x1 = 840, top = 150, gum = 40, body = 24, pitch = 52, tooth = 22;
  let teeth = `M${x0} ${top + gum + body}`;
  for (let x = x0; x < x1; x += pitch) {
    const a = x + pitch * 0.2, b = x + pitch * 0.3, c = x + pitch * 0.7, d = x + pitch * 0.8;
    teeth += `L${a} ${top + gum + body}L${b} ${top + gum + body + tooth}L${c} ${top + gum + body + tooth}L${d} ${top + gum + body}L${Math.min(x + pitch, x1)} ${top + gum + body}`;
  }
  return (
    <svg viewBox="0 0 900 380" className={className} role="img" aria-label="Perfil de correa de arrastre con goma y dientes">
      <path d={`M${x0} ${top}H${x1}V${top + gum}H${x0}Z`} fill="none" stroke={RED} strokeWidth={1.6} vectorEffect="non-scaling-stroke" />
      <Line d={`M${x0} ${top + gum}V${top + gum + body}M${x1} ${top + gum}V${top + gum + body}`} strokeWidth={1.2} />
      <path d={teeth} fill="none" stroke="currentColor" strokeWidth={1.2} vectorEffect="non-scaling-stroke" />
      <HiddenLine d={`M${x0} ${top + gum + 12}H${x1}`} />
      <Leader d={`M200 ${top + 10}L160 70`} red />
      <Label x={60} y={64} size={17} red>GOMA DE ARRASTRE (TOMA EL FILM)</Label>
      <Leader d={`M520 ${top + gum + 12}L600 80`} />
      <Label x={604} y={76} size={17}>CUERDAS DE REFUERZO</Label>
      <Leader d={`M${x0 + pitch * 2.5} ${top + gum + body + tooth}L${x0 + pitch * 2.5 + 40} 320`} />
      <Label x={x0 + pitch * 2.5 + 44} y={324} size={17}>DIENTES (ENGRANAN EN LA POLEA)</Label>
      <DimV y1={top} y2={top + gum} x={870} fromX={x1} label="goma" size={16} />
      <DimH x1={x0 + pitch} x2={x0 + pitch * 2} y={top + gum + body + tooth + 30} fromY={top + gum + body + tooth} label="paso" size={16} />
    </svg>
  );
}

export const productDrawings = {
  zigzag: { C: ZigzagKnifeDrawing, caption: "Cuchillo zigzag · plano referencial" },
  dentado: { C: SerratedKnifeDrawing, caption: "Cuchillo dentado · plano referencial" },
  vffs: { C: VerticalBaggerDiagram, caption: "Envasadora vertical · dónde trabaja cada pieza" },
  flowpack: { C: FlowPackDiagram, caption: "Máquina flow pack · dónde trabaja el cuchillo zigzag" },
  rodamiento: { C: FrictionBearingDrawing, caption: "Rodamiento de fricción · corte referencial" },
  correa: { C: DriveBeltDrawing, caption: "Correa de arrastre · perfil referencial" },
} as const;

export type ProductDrawingKey = keyof typeof productDrawings;
