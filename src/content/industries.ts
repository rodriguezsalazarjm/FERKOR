import { images, type SiteImage } from "./images";

export type Industry = {
  slug: string;
  code: string;
  title: string;
  /** Una línea: qué le resolvemos a este sector. */
  summary: string;
  needs: string[];
  /** Servicios relacionados (slugs de services.ts). */
  serviceSlugs: string[];
  /** Piezas del catálogo que ilustran el sector. */
  catalogRefs: string[];
  image?: SiteImage;
  featured?: boolean;
};

/** Sectores y aplicaciones. Los clientes atendidos están en `clients.ts`. */
export const industries: Industry[] = [
  {
    slug: "envasado",
    code: "IND-01",
    title: "Envasado alimentario",
    summary: "Cuchillos dentados y zigzag para envasadoras, selladoras y flow pack, más sus repuestos.",
    needs: [
      "Cuchillos dentados para envasadoras de arroz, harina y pasta",
      "Cuchillos zigzag para máquinas flow pack",
      "Rodamientos lineales y correas de arrastre",
      "Afilado de los cuchillos de la envasadora",
      "Cuchillos de recambio para no detener la línea por desgaste",
    ],
    serviceSlugs: ["cuchillos-dentados-envasadora", "cuchillos-zigzag-flow-pack", "rodamientos-lineales"],
    catalogRefs: ["FK-ZZ-02", "FK-DE-07", "FK-DE-10", "FK-CO-01"],
    image: images.envasado,
    featured: true,
  },
  {
    slug: "alimentos",
    code: "IND-02",
    title: "Procesamiento de alimentos",
    summary: "Cuchillos y cuchillas para el corte de productos alimenticios, su afilado y repuestos para las líneas.",
    needs: [
      "Cuchillos circulares y rectos para corte de producto",
      "Cuchillas especiales según muestra o plano",
      "Rectificación de cuchillos en uso",
      "Rodamientos y correas de arrastre",
    ],
    serviceSlugs: ["fabricacion", "rectificacion", "rodamientos-lineales"],
    catalogRefs: ["FK-ES-01", "FK-ES-02", "FK-CI-10", "FK-RP-01"],
  },
  {
    slug: "papel",
    code: "IND-03",
    title: "Papel y cartón",
    summary: "Cuchillos orbitales de gran diámetro, circulares y guillotinas para transformación de papel.",
    needs: ["Cuchillos orbitales para corte de grandes rollos", "Cuchillos circulares de corte y ranurado", "Cuchillos tipo guillotina"],
    serviceSlugs: ["fabricacion", "rectificacion"],
    catalogRefs: ["FK-CI-09", "FK-CI-04", "FK-RE-03"],
    image: images.papel,
  },
  {
    slug: "empaques",
    code: "IND-04",
    title: "Empaques y bolsas",
    summary: "Corte y prepicado de film para fabricación de empaques y bolsas.",
    needs: ["Cuchillos de corte y prepicado de film", "Cuchillos rectos y dentados para confección"],
    serviceSlugs: ["cuchillos-dentados-envasadora", "fabricacion"],
    catalogRefs: ["FK-DE-03", "FK-RE-01"],
    image: images.empaques,
  },
  {
    slug: "otras",
    code: "IND-05",
    title: "Otras aplicaciones industriales",
    summary: "Herramientas de corte, piezas mecanizadas y repuestos según requerimiento.",
    needs: [
      "Cuchillos especiales según plano o muestra",
      "Ejes, piñones y piezas mecanizadas en acero, aluminio o polímero",
      "Copia de repuestos que ya no se consiguen",
      "Rodamientos y correas de arrastre",
    ],
    serviceSlugs: ["fabricacion", "mecanizado-y-repuestos", "asesoria-tecnica"],
    catalogRefs: ["FK-ME-10", "FK-ME-12", "FK-ME-13", "FK-ME-03"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug)!;
