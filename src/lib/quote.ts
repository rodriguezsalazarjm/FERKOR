/** Formulario de cotización: tipos y validación compartidos entre cliente y servidor. */

export type QuoteValues = {
  nombre: string;
  empresa: string;
  correo: string;
  whatsapp: string;
  servicio: string;
  herramienta: string;
  descripcion: string;
  cantidad: string;
  material: string;
};

export type QuoteErrors = Partial<Record<keyof QuoteValues | "consentimiento", string>>;

export const quoteFields: (keyof QuoteValues)[] = ["nombre", "empresa", "correo", "whatsapp", "servicio", "herramienta", "descripcion", "cantidad", "material"];

export function validateQuote(v: QuoteValues, consent: boolean): QuoteErrors {
  const e: QuoteErrors = {};
  if (!v.nombre.trim()) e.nombre = "Ingresa tu nombre.";
  if (!v.empresa.trim()) e.empresa = "Ingresa el nombre de tu empresa.";
  if (!/^\S+@\S+\.\S+$/.test(v.correo.trim())) e.correo = "Ingresa un correo válido.";
  if (v.whatsapp.trim() && !/^[+\d\s()-]{8,}$/.test(v.whatsapp.trim())) e.whatsapp = "Revisa el número (ej. +56 9 1234 5678).";
  if (!v.servicio) e.servicio = "Elige el servicio.";
  if (v.descripcion.trim().length < 15) e.descripcion = "Cuéntanos un poco más (mínimo 15 caracteres).";
  if (v.cantidad.trim() && !/^\d+$/.test(v.cantidad.trim())) e.cantidad = "Usa solo números.";
  if (!consent) e.consentimiento = "Necesitamos tu autorización para responderte.";
  return e;
}

/** Resumen en texto plano (correo y mensaje de WhatsApp). */
export function quoteSummary(v: QuoteValues): string {
  return [
    `Cotización FERKOR`,
    `Nombre: ${v.nombre}`,
    `Empresa: ${v.empresa}`,
    `Correo: ${v.correo}`,
    v.whatsapp && `WhatsApp: ${v.whatsapp}`,
    `Servicio: ${v.servicio}`,
    v.herramienta && `Herramienta: ${v.herramienta}`,
    v.cantidad && `Cantidad: ${v.cantidad}`,
    v.material && `Material: ${v.material}`,
    `Descripción: ${v.descripcion}`,
  ]
    .filter(Boolean)
    .join("\n");
}
