/**
 * Reseñas de clientes. SOLO reseñas reales, con autorización del cliente.
 * La sección se muestra automáticamente cuando hay al menos `MIN_REVIEWS`.
 *
 * Ejemplo de entrada (no publicar sin autorización):
 * {
 *   quote: "Texto literal del cliente.",
 *   name: "Nombre Apellido",
 *   role: "Jefe de mantención",
 *   company: "Empresa S.A.",        // o null si prefiere no nombrarla
 *   industry: "Envasado alimentario",
 *   service: "Afilado y rectificación",
 *   source: "google",                // "google" | "directa"
 *   image: "/images/clientes/ariztia.webp", // opcional: foto de la persona o logo de la empresa
 * }
 */
export type Review = {
  quote: string;
  name: string;
  role: string;
  company: string | null;
  industry: string;
  service: string;
  source: "google" | "directa";
  /** Foto de la persona o logo de la empresa (opcional, con autorización). */
  image?: string;
};

/** TODO(cliente): enviar testimonios reales autorizados (nombre, cargo, empresa, comentario). */
export const MIN_REVIEWS = 3;

export const reviews: Review[] = [];

/** Enlace al perfil de Google Business para ver y dejar reseñas. PENDIENTE. */
export const googleReviewsUrl: string | null = null;
