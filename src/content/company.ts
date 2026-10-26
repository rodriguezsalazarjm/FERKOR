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
  /** Cobertura indicada por el cliente (correcciones oct. 2026): desde Santiago a todo Chile. */
  coverage: "Desde Santiago a todo Chile",
  model: "B2B",
  copyrightYear: 2026,
  contact: {
    /** WhatsApp comercial confirmado por el cliente (oct. 2026), formato internacional sin "+". */
    whatsapp: "56984907589" as string | null,
    /**
     * Correo público. Dejar en `null` hasta que el buzón exista.
     * TODO(cliente): cuando `plannedEmail` esté creado y probado, copiarlo aquí.
     */
    email: null as string | null,
    plannedEmail: "ventas@ferkor.cl",
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
    /**
     * Trayectoria declarada por el responsable; no es una certificación.
     * El cliente pidió bajarla a ≈ 7 años (antes 10). TODO(cliente): confirmar cifra definitiva.
     */
    years: 7,
    owner: "Johel",
  },
} as const;

/** Mensajes de WhatsApp prellenados según desde dónde escribe el cliente. */
export const waMessages = {
  general: "Hola FERKOR, quiero cotizar. Les envío foto o plano de la pieza.",
  fabricacion: "Hola FERKOR, necesito fabricar una herramienta de corte a medida. Les envío foto, plano o medidas.",
  rectificacion: "Hola FERKOR, quiero cotizar afilado o rectificación. Les envío fotos del cuchillo y su filo.",
  mecanizado: "Hola FERKOR, necesito mecanizar una pieza. Les envío foto, plano o muestra.",
  identificar: "Hola FERKOR, tengo una pieza que no sé identificar. Les envío una foto.",
  producto: (name: string) => `Hola FERKOR, quiero consultar por ${name}. Les envío foto y medidas.`,
} as const;

/** Mensaje de WhatsApp para una página de servicio o producto. */
export function waMessageFor(slug: string, title: string): string {
  if (slug === "fabricacion") return waMessages.fabricacion;
  if (slug === "rectificacion") return waMessages.rectificacion;
  if (slug === "mecanizado-y-repuestos") return waMessages.mecanizado;
  if (slug === "asesoria-tecnica") return waMessages.identificar;
  return waMessages.producto(title.toLowerCase());
}

export function whatsappHref(message?: string): string | null {
  const n = company.contact.whatsapp;
  if (!n) return null;
  const q = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${n}${q}`;
}
