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
};

export const MIN_REVIEWS = 3;

export const reviews: Review[] = [];

/** Enlace al perfil de Google Business para ver y dejar reseñas. PENDIENTE. */
export const googleReviewsUrl: string | null = null;
