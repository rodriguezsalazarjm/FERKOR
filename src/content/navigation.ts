export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Industrias", href: "/industrias" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const quoteCta: NavItem = { label: "Solicitar cotización", href: "/contacto" };
