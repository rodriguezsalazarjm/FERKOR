/**
 * Configuración de publicación y SEO.
 * `indexable: false` mientras sea maqueta: robots.txt bloquea y las páginas llevan noindex.
 * Al pasar a producción: cambiar `url` al dominio definitivo y `indexable` a true.
 * TODO(publicación): dominio previsto https://www.ferkor.cl — cambiar `url` cuando el dominio esté
 * registrado y conectado al hosting (DNS), y recién entonces activar `indexable`.
 */
export const site = {
  url: "https://ferkor.vercel.app",
  indexable: false,
  /** Términos con que los clientes buscan en Google (audios del cliente, oct. 2026). */
  keywords: [
    "cuchillos dentados",
    "cuchillo zigzag",
    "cuchillo zigzag flow pack",
    "cuchillos para envasadora",
    "cuchillos para selladora",
    "cuchillos flow pack",
    "rodamientos lineales",
    "rodamientos de fricción",
    "correas de arrastre",
    "afilado de cuchillos industriales",
    "cuchillos industriales Santiago",
    "cuchillos industriales en Chile",
    "fabricación de cuchillos industriales a medida",
    "cuchillos dentados industriales",
    "afilado y rectificación industrial",
    "mecanizado de piezas",
    "herramientas de corte industriales",
  ],
} as const;
