/**
 * Portafolio de trabajos reales de FERKOR (fotos entregadas por el cliente).
 * Solo `piece`, `work` e `image` son obligatorios: el resto se muestra cuando existe.
 * No completar campos con supuestos.
 * TODO(cliente): por cada trabajo, confirmar industria, material, medidas, proceso y problema/solución.
 */
export type WorkType = "Fabricación a medida" | "Afilado y rectificación" | "Mecanizado";

export type PortfolioItem = {
  piece: string;
  work: WorkType;
  image: { src: string; alt: string };
  industry?: string;
  material?: string;
  dimensions?: string;
  process?: string;
  problem?: string;
  solution?: string;
};

const job = (id: string) => `/images/trabajos/${id}.webp`;

export const portfolio: PortfolioItem[] = [
  { piece: "Cuchillos zigzag", work: "Fabricación a medida", image: { src: job("zigzag-recto"), alt: "Juego de cuchillos zigzag rectos" } },
  { piece: "Cuchillo circular dentado", work: "Fabricación a medida", image: { src: job("circular-dentado"), alt: "Cuchillo circular dentado" } },
  { piece: "Cuchillo circular cóncavo", work: "Fabricación a medida", image: { src: job("circular-concavo"), alt: "Cuchillo circular cóncavo tipo anillo" } },
  { piece: "Cuchillo circular microdentado", work: "Fabricación a medida", image: { src: job("circular-microdentado"), alt: "Cuchillo circular de dentado fino" } },
  { piece: "Cuchillos dentados rectos", work: "Fabricación a medida", image: { src: job("dentado-recto-par"), alt: "Par de cuchillos dentados rectos" } },
  { piece: "Cuchilla curva tipo hoz", work: "Fabricación a medida", image: { src: job("cutter-hoz"), alt: "Cuchilla curva de acero en forma de hoz" } },
  { piece: "Cuchillas rectas con ranuras", work: "Fabricación a medida", image: { src: job("rectangular-escalonado"), alt: "Par de cuchillas rectas con ranuras de montaje" } },
  { piece: "Piezas planas", work: "Afilado y rectificación", image: { src: job("rectificado-placas"), alt: "Piezas planas de acero montadas para rectificado" } },
  { piece: "Piñones", work: "Mecanizado", image: { src: job("pinones"), alt: "Dos piñones de acero con chavetero" } },
  { piece: "Piezas mecanizadas en serie", work: "Mecanizado", image: { src: job("piezas-mecanizadas-serie"), alt: "Piezas de acero mecanizadas apiladas" } },
];
