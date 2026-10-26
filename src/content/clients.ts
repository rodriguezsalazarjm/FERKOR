/**
 * Empresas con las que FERKOR ha trabajado (logos entregados por el cliente, oct. 2026).
 * El cliente confirma la relación comercial y el uso de los logos.
 * - `white`: SVG monocromo blanco (vectorizado desde el logo entregado) para fondos oscuros.
 * - `color`: versión a color con fondo transparente.
 * TODO(cliente): reemplazar por los SVG oficiales si cada empresa los entrega.
 */
export type Client = { name: string; white: string; color: string };

const logo = (id: string, color = `${id}.webp`): Omit<Client, "name"> => ({
  white: `/images/clientes/${id}-blanco.svg`,
  color: `/images/clientes/${color}`,
});

export const clients: Client[] = [
  { name: "Ariztía", ...logo("ariztia") },
  { name: "Ideal", ...logo("ideal") },
  { name: "Tucapel", ...logo("tucapel") },
  { name: "ICB", ...logo("icb") },
  { name: "Bakels", ...logo("bakels", "bakels.svg") },
  { name: "Lesaffre", ...logo("lesaffre") },
  { name: "Breden Master", ...logo("breden-master") },
  { name: "Minuto Verde", ...logo("minuto-verde") },
  { name: "Varsovienne", ...logo("varsovienne") },
  { name: "Scholle IPN", ...logo("scholle-ipn") },
];
