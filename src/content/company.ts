/**
 * Datos comerciales de FERKOR.
 * Todo valor `null` está PENDIENTE de confirmación por el cliente y la interfaz
 * lo muestra como pendiente; no reemplazar por datos inventados.
 */
export const company = {
  name: "FERKOR",
  descriptor: "Soluciones de Corte Industrial",
  city: "Santiago",
  country: "Chile",
  /** Cobertura confirmada. Otras regiones: objetivo, no cobertura garantizada. */
  coverage: "Santiago de Chile",
  model: "B2B",
  copyrightYear: 2026,
  contact: {
    /** Número de WhatsApp en formato internacional sin "+" (ej. 569XXXXXXXX). */
    whatsapp: null as string | null,
    email: null as string | null,
    phone: null as string | null,
    hours: null as string | null,
  },
  /** Solo redes confirmadas. Vacío hasta validar. */
  social: [] as { label: string; href: string }[],
  legal: {
    razonSocial: null as string | null,
    rut: null as string | null,
  },
  experience: {
    /** Trayectoria declarada por el responsable; no es una certificación. */
    years: 10,
    fieldSalesYears: 4,
    ventureYears: 6,
    owner: "Johel",
  },
} as const;

export function whatsappHref(message?: string): string | null {
  const n = company.contact.whatsapp;
  if (!n) return null;
  const q = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${n}${q}`;
}
