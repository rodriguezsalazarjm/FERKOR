/**
 * Catálogo de productos fotografiados por FERKOR (fotos reales del cliente).
 * - `herramientas/`: recortadas sobre fondo blanco.
 * - `trabajos/`: fotos en contexto (oct. 2026), con grabados de terceros retocados
 *   o descartados; se muestran a sangre (`scene: true`).
 * Los nombres son genéricos por familia, asignados a partir de las fotos: PENDIENTE validar con FERKOR.
 */
export type CatalogCategoryId =
  | "dentados"
  | "zigzag"
  | "circulares"
  | "rectangulares"
  | "especiales"
  | "rodamientos"
  | "correas"
  | "mecanizado";

/** Orden = prioridad comercial (dentados y zigzag primero). */
export const catalogCategories: { id: CatalogCategoryId; label: string; short: string }[] = [
  { id: "dentados", label: "Cuchillos dentados", short: "Dentados" },
  { id: "zigzag", label: "Cuchillos zigzag", short: "Zigzag" },
  { id: "circulares", label: "Cuchillos circulares", short: "Circulares" },
  { id: "rectangulares", label: "Rectangulares y guillotina", short: "Rectangulares" },
  { id: "especiales", label: "Cuchillas especiales", short: "Especiales" },
  { id: "rodamientos", label: "Rodamientos", short: "Rodamientos" },
  { id: "correas", label: "Correas de arrastre", short: "Correas" },
  { id: "mecanizado", label: "Mecanizado de piezas", short: "Mecanizado" },
];

export type CatalogItem = {
  ref: string;
  src: string;
  title: string;
  alt: string;
  category: CatalogCategoryId;
  /** Foto en contexto (no recortada): se muestra a sangre. */
  scene?: boolean;
};

const img = (id: string) => `/images/herramientas/${id}.webp`;
const job = (id: string) => `/images/trabajos/${id}.webp`;

export const catalog: CatalogItem[] = [
  // Dentados y zigzag (PENDIENTE: el cliente validará qué modelos son zigzag)
  { ref: "FK-ZZ-02", src: job("zigzag-recto"), category: "zigzag", title: "Cuchillo zigzag", alt: "Juego de cuchillos rectos de dentado zigzag" },
  { ref: "FK-DE-07", src: job("dentado-recto-par"), category: "dentados", title: "Cuchillo dentado recto", alt: "Par de cuchillos dentados rectos para envasadora", scene: true },
  { ref: "FK-DE-08", src: job("dentado-recto-espuma"), category: "dentados", title: "Cuchillos dentados rectos", alt: "Dos cuchillos dentados rectos de acero", scene: true },
  { ref: "FK-DE-09", src: job("dentado-envasadora-perfil"), category: "dentados", title: "Cuchillo dentado para envasadora", alt: "Cuchillo dentado largo con horquilla de montaje, visto de perfil", scene: true },
  { ref: "FK-DE-10", src: job("circular-dentado"), category: "dentados", title: "Cuchillo circular dentado", alt: "Cuchillo circular de acero con dentado perimetral", scene: true },
  { ref: "FK-DE-11", src: job("circular-microdentado"), category: "dentados", title: "Cuchillo circular microdentado", alt: "Cuchillo circular de dentado fino", scene: true },
  // Cuchillos circulares
  { ref: "FK-CI-10", src: job("circular-concavo"), category: "circulares", title: "Cuchillo circular cóncavo", alt: "Cuchillo circular cóncavo tipo anillo", scene: true },
  { ref: "FK-CI-01", src: img("4f632e"), category: "circulares", title: "Cuchillo circular liso", alt: "Cuchillo circular liso de acero con perforación central" },
  { ref: "FK-CI-06", src: job("circular-chavetero"), category: "circulares", title: "Cuchillo circular con chavetero", alt: "Cuchillo circular liso con chavetero", scene: true },
  { ref: "FK-CI-07", src: job("circular-discos-lisos"), category: "circulares", title: "Discos de corte lisos", alt: "Dos discos de corte lisos de acero", scene: true },
  { ref: "FK-CI-08", src: job("circular-poligonal"), category: "circulares", title: "Cuchillo poligonal", alt: "Cuchillo de corte de contorno poligonal", scene: true },
  { ref: "FK-CI-09", src: job("circular-partido-perforado"), category: "circulares", title: "Cuchillo circular partido", alt: "Cuchillo circular en segmentos con perforaciones de montaje", scene: true },
  { ref: "FK-CI-04", src: img("e952f6"), category: "circulares", title: "Cuchillo circular", alt: "Cuchillo circular de acero con chavetero" },
  { ref: "FK-CI-05", src: img("d96ed1"), category: "circulares", title: "Disco de corte", alt: "Disco de corte circular rectificado" },
  // Rectangulares y guillotina
  { ref: "FK-RE-06", src: job("rectangular-escalonado"), category: "rectangulares", title: "Cuchillas rectas con ranuras", alt: "Par de cuchillas rectas de acero con ranuras y perforaciones de montaje", scene: true },
  { ref: "FK-RE-03", src: img("b818e5"), category: "rectangulares", title: "Cuchillos rectos largos", alt: "Juego de cuchillos rectos largos de acero" },
  { ref: "FK-RE-05", src: img("ef3d57"), category: "rectangulares", title: "Cuchilla poligonal", alt: "Cuchilla de acero de perfil poligonal con filo" },
  // Cuchillas especiales. PENDIENTE validar: por su forma de hoz corresponderían a cuchillas de cutter (procesamiento de alimentos).
  { ref: "FK-ES-01", src: job("cutter-hoz"), category: "especiales", title: "Cuchilla curva tipo hoz", alt: "Cuchilla curva de acero en forma de hoz con perforaciones de montaje", scene: true },
  { ref: "FK-ES-02", src: job("cutter-dentadas"), category: "especiales", title: "Cuchillas curvas dentadas", alt: "Dos cuchillas curvas de filo dentado con perforaciones de montaje", scene: true },
  // Mecanizado de piezas
  { ref: "FK-ME-10", src: job("pinones"), category: "mecanizado", title: "Piñones", alt: "Dos piñones de acero mecanizados con chavetero", scene: true },
  { ref: "FK-ME-11", src: job("pieza-mecanizada-buje"), category: "mecanizado", title: "Pieza mecanizada", alt: "Pieza de aluminio mecanizada con rebajes y perforaciones", scene: true },
  { ref: "FK-ME-12", src: job("piezas-mecanizadas-serie"), category: "mecanizado", title: "Piezas mecanizadas en serie", alt: "Piezas de acero mecanizadas apiladas", scene: true },
  { ref: "FK-ME-13", src: job("pieza-polimero"), category: "mecanizado", title: "Pieza de polímero", alt: "Pieza de polímero blanco mecanizada", scene: true },
  { ref: "FK-ME-02", src: img("f72470"), category: "mecanizado", title: "Eje torneado", alt: "Eje de acero torneado" },
  { ref: "FK-ME-03", src: img("cfb6a2"), category: "mecanizado", title: "Piezas mecanizadas", alt: "Tres piezas mecanizadas con vástago roscado" },
  { ref: "FK-ME-04", src: img("67b7e9"), category: "mecanizado", title: "Pieza torneada partida", alt: "Pieza torneada en segmentos" },
  { ref: "FK-ME-05", src: img("23c2b8"), category: "mecanizado", title: "Componente torneado", alt: "Componente circular torneado con buje" },
  { ref: "FK-ME-07", src: img("506b23"), category: "mecanizado", title: "Componente torneado", alt: "Componente circular torneado con buje central" },
  { ref: "FK-ME-08", src: img("ed54dd"), category: "mecanizado", title: "Componente torneado", alt: "Componente torneado con base" },
  // Rodamientos
  { ref: "FK-RP-01", src: img("7946f4"), category: "rodamientos", title: "Rodamiento de fricción", alt: "Rodamiento lineal con buje de fricción" },
  { ref: "FK-RP-02", src: img("84d875"), category: "rodamientos", title: "Rodamiento lineal y buje", alt: "Rodamiento lineal junto a su buje de fricción" },
  { ref: "FK-RP-04", src: img("fdb4b3"), category: "rodamientos", title: "Buje de fricción", alt: "Buje de fricción polimérico" },
  // Correas de arrastre
  { ref: "FK-CO-01", src: img("correa-arrastre"), category: "correas", title: "Correa de arrastre", alt: "Correas dentadas de arrastre con recubrimiento de goma roja para envasadora" },
];

/** Selección para la home: una muestra variada de familias. */
export const featuredRefs = ["FK-ZZ-02", "FK-DE-07", "FK-DE-10", "FK-CI-10", "FK-RE-06", "FK-RP-01", "FK-CO-01", "FK-ME-10"];
