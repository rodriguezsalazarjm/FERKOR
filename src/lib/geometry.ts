/** Utilidades geométricas para los dibujos técnicos SVG (deterministas: sin hydration mismatch). */

const r2 = (n: number) => Math.round(n * 100) / 100;

export function polar(cx: number, cy: number, r: number, deg: number) {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: r2(cx + r * Math.cos(a)), y: r2(cy + r * Math.sin(a)) };
}

/** Contorno de una cuchilla circular dentada (diente con cara recta y dorso inclinado). */
export function sawBladePath(cx: number, cy: number, rTip: number, depth: number, teeth: number) {
  const step = 360 / teeth;
  let d = "";
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    const tip = polar(cx, cy, rTip, a);
    const face = polar(cx, cy, rTip - depth, a);
    const back = polar(cx, cy, rTip - depth * 0.35, a + step * 0.62);
    d += `${i === 0 ? "M" : "L"}${face.x} ${face.y}L${tip.x} ${tip.y}L${back.x} ${back.y}`;
  }
  return `${d}Z`;
}

/** Arco SVG entre dos ángulos (grados, 0 = arriba, sentido horario). */
export function arcPath(cx: number, cy: number, r: number, from: number, to: number) {
  const s = polar(cx, cy, r, from);
  const e = polar(cx, cy, r, to);
  const large = to - from > 180 ? 1 : 0;
  return `M${s.x} ${s.y}A${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

/** Filo dentado recto (borde inferior de una cuchilla de envasado). */
export function serratedEdge(x0: number, x1: number, y: number, pitch: number, depth: number) {
  let d = `M${x0} ${y}`;
  for (let x = x0; x < x1; x += pitch) {
    d += `L${r2(x + pitch / 2)} ${y + depth}L${r2(Math.min(x + pitch, x1))} ${y}`;
  }
  return d;
}
