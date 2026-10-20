import type { FerkorIconName } from "@/components/graphics/FerkorIcon";
import { images, type SiteImage } from "./images";

export type Service = {
  slug: string;
  href: string;
  code: string;
  title: string;
  short: string;
  summary: string;
  icon: FerkorIconName;
  image: SiteImage;
  tools: string[];
  /** Línea prioritaria para el negocio (recurrencia/rentabilidad). */
  priority?: boolean;
};

export const services: Service[] = [
  {
    slug: "fabricacion",
    href: "/servicios/fabricacion",
    code: "FK-01",
    title: "Fabricación a medida",
    short: "Fabricación",
    summary:
      "Coordinamos la fabricación de herramientas de corte según planos, muestras, fotografías, medidas y especificaciones de tu operación.",
    icon: "fabricacion",
    image: images.fabricacion,
    tools: [
      "Cuchillas industriales",
      "Guillotinas",
      "Punzones",
      "Corte de cables",
      "Huinchas",
      "Corte liso",
      "Herramientas dentadas",
      "Selladores",
      "Prepicadores",
      "Herramientas especiales",
    ],
  },
  {
    slug: "rectificacion",
    href: "/servicios/rectificacion",
    code: "FK-02",
    title: "Rectificación y afilado",
    short: "Rectificación",
    summary:
      "Evaluamos cada herramienta y, cuando es técnicamente viable, recuperamos su filo y geometría para que vuelva a trabajar.",
    icon: "rectificacion",
    image: images.rectificacion,
    tools: ["Cuchillas rectas", "Cuchillas circulares", "Cuchillas dentadas", "Guillotinas"],
    priority: true,
  },
  {
    slug: "herramientas-envasado",
    href: "/servicios/herramientas-envasado",
    code: "FK-03",
    title: "Herramientas para envasado",
    short: "Envasado",
    summary:
      "Cuchillas lisas, dentadas, selladores y sistemas de prepicado para maquinaria de envasado alimentario y empaques.",
    icon: "herramientas",
    image: images.envasado,
    tools: ["Corte liso", "Corte dentado", "Prepicado", "Selladores"],
  },
];

export const complementaryServices = [
  {
    slug: "soluciones-a-medida",
    href: "/servicios/soluciones-a-medida",
    code: "FK-04",
    title: "Adaptación de herramientas",
    summary: "Soluciones desarrolladas a partir de piezas existentes o especificaciones particulares.",
  },
  {
    slug: "soluciones-a-medida",
    href: "/servicios/soluciones-a-medida",
    code: "FK-05",
    title: "Maestranza complementaria",
    summary: "Resortes, ejes, piñones, correas de arrastre y piezas mecánicas, sujetos a evaluación.",
  },
];

export const specialties = [
  "Fabricación a medida",
  "Rectificación",
  "Herramientas industriales",
  "Asesoría técnica",
];
