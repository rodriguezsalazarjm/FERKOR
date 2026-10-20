/**
 * Fotografía del sitio.
 *
 * TODAS las imágenes actuales son REFERENCIAS VISUALES PROVISIONALES de Unsplash
 * (licencia Unsplash): no son trabajos, herramientas ni instalaciones de FERKOR.
 * La interfaz las marca como "Ref. visual". Reemplazar por fotografía propia
 * (subir a /public/images y cambiar `src` + `provisional: false`).
 */
export type SiteImage = {
  src: string;
  alt: string;
  provisional: boolean;
};

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const images = {
  hero: {
    src: unsplash("1727292486169-33eba0865c99"),
    alt: "Macro de una herramienta de corte dentada de acero montada en máquina",
    provisional: true,
  },
  fabricacion: {
    src: unsplash("1666634157070-6fd830fb5672"),
    alt: "Pieza de acero sujeta en el mandril de un torno durante el mecanizado",
    provisional: true,
  },
  rectificacion: {
    src: unsplash("1522322512347-a0e57fd1744c"),
    alt: "Chispas durante el rectificado de una pieza metálica",
    provisional: true,
  },
  rectificacionDetalle: {
    src: unsplash("1564182998523-6923112e7d6b"),
    alt: "Esmerilado de un componente de acero con proyección de chispas",
    provisional: true,
  },
  envasado: {
    src: unsplash("1779517935247-d6596bd653bf"),
    alt: "Línea de envasado industrial con cinta transportadora",
    provisional: true,
  },
  planos: {
    src: unsplash("1769147339214-076740872485"),
    alt: "Piezas mecanizadas sobre planos técnicos de ingeniería",
    provisional: true,
  },
  dentada: {
    src: unsplash("1785063175681-dcd40b54d90e"),
    alt: "Detalle del filo dentado de una cuchilla de acero",
    provisional: true,
  },
  circular: {
    src: unsplash("1702200047649-ddefe9d4faa9"),
    alt: "Primer plano de los dientes de una cuchilla circular",
    provisional: true,
  },
  recta: {
    src: unsplash("1673450486206-3453bfbd8059"),
    alt: "Pieza de acero de filo recto sobre fondo negro",
    provisional: true,
  },
  punzon: {
    src: unsplash("1551868561-de29bc57af4f"),
    alt: "Herramienta de acero de punta en primer plano",
    provisional: true,
  },
  especial: {
    src: unsplash("1730571627650-af7aefef89d0"),
    alt: "Componente mecanizado de acero con perforación central",
    provisional: true,
  },
  papel: {
    src: unsplash("1641853988042-5443649c4319"),
    alt: "Bobina de papel en una línea de conversión",
    provisional: true,
  },
  empaques: {
    src: unsplash("1606037150583-fb842a55bae7"),
    alt: "Bolsas plásticas de envasado",
    provisional: true,
  },
  maestranza: {
    src: unsplash("1745571479517-7331ad90aea3"),
    alt: "Torno mecanizando una varilla de acero",
    provisional: true,
  },
  lineaProductiva: {
    src: unsplash("1764745021344-317b80f09e40"),
    alt: "Maquinaria industrial con cinta transportadora y piezas metálicas",
    provisional: true,
  },
} satisfies Record<string, SiteImage>;
