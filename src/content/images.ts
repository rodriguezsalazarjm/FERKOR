/**
 * Fotografía del sitio.
 *
 * `provisional: true` = referencia visual de Unsplash
 * (licencia Unsplash): no son trabajos, herramientas ni instalaciones de FERKOR.
 * La interfaz las marca como "Ref. visual". Las fotos reales de productos están en
 * `catalog.ts` (public/images/herramientas). Reemplazar estas por fotografía propia
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
    src: "/images/trabajos/circular-dentado.webp",
    alt: "Cuchillo circular dentado fabricado por FERKOR",
    provisional: false,
  },
  fabricacion: {
    src: unsplash("1666634157070-6fd830fb5672"),
    alt: "Pieza de acero sujeta en el mandril de un torno durante el mecanizado",
    provisional: true,
  },
  rectificacion: {
    src: "/images/trabajos/rectificado-placas.webp",
    alt: "Piezas planas de acero montadas para rectificado en el taller",
    provisional: false,
  },
  envasado: {
    src: unsplash("1779517935247-d6596bd653bf"),
    alt: "Línea de envasado industrial con cinta transportadora",
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
} satisfies Record<string, SiteImage>;
