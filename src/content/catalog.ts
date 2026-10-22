/**
 * Catálogo de productos fotografiados por FERKOR (fotos reales del cliente,
 * recortadas sobre fondo blanco). Los nombres son genéricos por familia,
 * asignados a partir de las fotos: PENDIENTE validar con FERKOR.
 */
export type CatalogCategoryId = "dentados" | "zigzag" | "circulares" | "rectangulares" | "rodamientos" | "correas" | "mecanizado";

/** Orden = prioridad comercial (dentados y zigzag primero). */
export const catalogCategories: { id: CatalogCategoryId; label: string; short: string }[] = [
  { id: "dentados", label: "Cuchillos dentados", short: "Dentados" },
  { id: "zigzag", label: "Cuchillos zigzag", short: "Zigzag" },
  { id: "circulares", label: "Cuchillos circulares", short: "Circulares" },
  { id: "rectangulares", label: "Rectangulares y guillotina", short: "Rectangulares" },
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
};

const img = (id: string) => `/images/herramientas/${id}.webp`;

export const catalog: CatalogItem[] = [
  // Cuchillos circulares
  { ref: "FK-CI-01", src: img("4f632e"), category: "circulares", title: "Cuchillo circular liso", alt: "Cuchillo circular liso de acero con perforación central" },
  { ref: "FK-CI-02", src: img("84cf79"), category: "circulares", title: "Cuchillo circular liso", alt: "Cuchillos circulares lisos de acero apilados" },
  { ref: "FK-CI-03", src: img("675685"), category: "circulares", title: "Cuchillo circular partido", alt: "Cuchillo circular en dos mitades con perforaciones de montaje" },
  { ref: "FK-CI-04", src: img("e952f6"), category: "circulares", title: "Cuchillo circular", alt: "Cuchillo circular de acero con chavetero" },
  { ref: "FK-CI-05", src: img("d96ed1"), category: "circulares", title: "Disco de corte", alt: "Disco de corte circular rectificado" },
  // Dentados y zigzag (PENDIENTE: el cliente validará qué modelos son zigzag)
  { ref: "FK-DE-01", src: img("47eca6"), category: "dentados", title: "Cuchillo circular dentado", alt: "Cuchillo circular de dentado fino con estrías de arrastre" },
  { ref: "FK-ZZ-01", src: img("107800"), category: "zigzag", title: "Cuchillo zigzag", alt: "Cuchillo recto de dentado zigzag para máquina flow pack" },
  { ref: "FK-DE-03", src: img("e8fa22"), category: "dentados", title: "Cuchillo dentado ranurado", alt: "Cuchillo dentado recto con ranuras de fijación" },
  { ref: "FK-DE-04", src: img("3e2823"), category: "dentados", title: "Cuchillo dentado curvo", alt: "Cuchillo dentado de perfil curvo" },
  { ref: "FK-DE-05", src: img("6d4fe8"), category: "dentados", title: "Cuchillo dentado curvo", alt: "Cuchillo dentado curvo con abertura central" },
  { ref: "FK-DE-06", src: img("f714cd"), category: "dentados", title: "Cuchillo dentado curvo", alt: "Cuchillo dentado curvo de acero" },
  // Rectangulares y guillotina
  { ref: "FK-RE-01", src: img("bf96c3"), category: "rectangulares", title: "Cuchilla rectangular ranurada", alt: "Par de cuchillas rectangulares con ranura central" },
  { ref: "FK-RE-02", src: img("7d8617"), category: "rectangulares", title: "Cuchillo rectangular", alt: "Cuchillo rectangular de acero con perforaciones" },
  { ref: "FK-RE-03", src: img("b818e5"), category: "rectangulares", title: "Cuchillos rectos largos", alt: "Juego de cuchillos rectos largos de acero" },
  { ref: "FK-RE-04", src: img("6378b1"), category: "rectangulares", title: "Cuchillos rectangulares", alt: "Cuchillos rectangulares de acero con perforaciones" },
  { ref: "FK-RE-05", src: img("ef3d57"), category: "rectangulares", title: "Cuchilla poligonal", alt: "Cuchilla de acero de perfil poligonal con filo" },
  // Mecanizado de piezas
  { ref: "FK-ME-01", src: img("9d328c"), category: "mecanizado", title: "Piñón", alt: "Piñón de acero mecanizado con chavetero" },
  { ref: "FK-ME-02", src: img("f72470"), category: "mecanizado", title: "Eje torneado", alt: "Eje de acero torneado" },
  { ref: "FK-ME-03", src: img("cfb6a2"), category: "mecanizado", title: "Piezas mecanizadas", alt: "Tres piezas mecanizadas con vástago roscado" },
  { ref: "FK-ME-04", src: img("67b7e9"), category: "mecanizado", title: "Pieza torneada partida", alt: "Pieza torneada en segmentos" },
  { ref: "FK-ME-05", src: img("23c2b8"), category: "mecanizado", title: "Componente torneado", alt: "Componente circular torneado con buje" },
  { ref: "FK-ME-06", src: img("63f956"), category: "mecanizado", title: "Componente torneado", alt: "Componente circular torneado de acero" },
  { ref: "FK-ME-07", src: img("506b23"), category: "mecanizado", title: "Componente torneado", alt: "Componente circular torneado con buje central" },
  { ref: "FK-ME-08", src: img("ed54dd"), category: "mecanizado", title: "Componente torneado", alt: "Componente torneado con base" },
  { ref: "FK-ME-09", src: img("c06d6d"), category: "mecanizado", title: "Juego de componentes", alt: "Juego de componentes circulares torneados" },
  // Rodamientos
  { ref: "FK-RP-01", src: img("7946f4"), category: "rodamientos", title: "Rodamiento de fricción", alt: "Rodamiento lineal con buje de fricción" },
  { ref: "FK-RP-02", src: img("84d875"), category: "rodamientos", title: "Rodamiento lineal y buje", alt: "Rodamiento lineal junto a su buje de fricción" },
  { ref: "FK-RP-03", src: img("c8f3cd"), category: "rodamientos", title: "Rodamiento lineal", alt: "Rodamiento lineal de carro" },
  { ref: "FK-RP-04", src: img("fdb4b3"), category: "rodamientos", title: "Buje de fricción", alt: "Buje de fricción polimérico" },
];

/** Selección para la home: una muestra variada de familias. */
export const featuredRefs = ["FK-ZZ-01", "FK-DE-03", "FK-DE-01", "FK-DE-04", "FK-RP-01", "FK-RP-04", "FK-CI-03", "FK-ME-01"];
