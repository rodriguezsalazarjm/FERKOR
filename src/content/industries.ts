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

/** Sectores y aplicaciones. Sin nombres de clientes. */
export const industries: Industry[] = [
  {
    slug: "envasado",
    code: "IND-01",
    title: "Envasado alimentario",
    summary: "Cuchillos para envasadoras flow pack, verticales y líneas de empaque de alimentos.",
    needs: [
      "Cuchillos zigzag para envasadoras flow pack",
      "Cuchillos lisos y dentados de corte de film",
      "Cuchillos de picado y prepicado",
      "Afilado de los cuchillos de la envasadora",
    ],
    serviceSlugs: ["herramientas-envasado", "rectificacion"],
    catalogRefs: ["FK-DE-02", "FK-DE-03", "FK-DE-01"],
    image: images.envasado,
    featured: true,
  },
  {
    slug: "alimentos",
    code: "IND-02",
    title: "Procesamiento de alimentos",
    summary: "Cuchillos para el corte de productos alimenticios y repuestos para las líneas.",
    needs: ["Cuchillos circulares y rectos para corte de producto", "Rectificación de cuchillos en uso", "Repuestos: rodamientos y correas de arrastre"],
    serviceSlugs: ["fabricacion", "rectificacion", "mecanizado-y-repuestos"],
    catalogRefs: ["FK-CI-01", "FK-DE-04", "FK-RP-01"],
  },
  {
    slug: "papel",
    code: "IND-03",
    title: "Papel y cartón",
    summary: "Cuchillos orbitales de gran diámetro, circulares y guillotinas para transformación de papel.",
    needs: ["Cuchillos orbitales para corte de grandes rollos", "Cuchillos circulares de corte y ranurado", "Cuchillos tipo guillotina"],
    serviceSlugs: ["fabricacion", "rectificacion"],
    catalogRefs: ["FK-CI-03", "FK-CI-04", "FK-RE-03"],
    image: images.papel,
  },
  {
    slug: "empaques",
    code: "IND-04",
    title: "Empaques y bolsas",
    summary: "Corte y prepicado de film para fabricación de empaques y bolsas.",
    needs: ["Cuchillos de corte y prepicado de film", "Cuchillos rectos y dentados para confección"],
    serviceSlugs: ["fabricacion", "herramientas-envasado"],
    catalogRefs: ["FK-DE-03", "FK-RE-01"],
    image: images.empaques,
  },
  {
    slug: "otras",
    code: "IND-05",
    title: "Otras aplicaciones industriales",
    summary: "Herramientas de corte, piezas mecanizadas y repuestos según requerimiento.",
    needs: ["Cuchillos especiales según plano o muestra", "Ejes, piñones y piezas mecanizadas", "Rodamientos y correas de arrastre"],
    serviceSlugs: ["fabricacion", "mecanizado-y-repuestos", "asesoria-tecnica"],
    catalogRefs: ["FK-ME-01", "FK-ME-03"],
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug)!;
