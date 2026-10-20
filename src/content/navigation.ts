export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Industrias", href: "/industrias" },
  { label: "Trabajos", href: "/trabajos" },
  { label: "Contacto", href: "/contacto" },
];

export const quoteCta: NavItem = { label: "Solicitar cotización", href: "/contacto" };
