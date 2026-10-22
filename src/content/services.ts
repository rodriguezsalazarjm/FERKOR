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
  /** Fotografía real de producto (fondo blanco) usada en las tarjetas. */
  product: { src: string; alt: string };
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
      "Fabricamos herramientas de corte en diversas geometrías y configuraciones, según planos, muestras, medidas y la aplicación de cada proceso.",
    icon: "fabricacion",
    image: images.fabricacion,
    product: { src: "/images/herramientas/47eca6.webp", alt: "Cuchillo circular dentado fabricado por FERKOR" },
    tools: [
      "Rectangulares lisos",
      "Circulares lisos",
      "Dentados y zigzag",
      "Flow pack",
      "Orbitales de gran diámetro",
      "Tipo guillotina",
      "Picado y prepicado",
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
    product: { src: "/images/herramientas/4f632e.webp", alt: "Cuchillo circular liso rectificado" },
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
      "Cuchillos lisos, dentados y zigzag para envasadoras flow pack, procesamiento de alimentos y líneas de empaque.",
    icon: "herramientas",
    image: images.envasado,
    product: { src: "/images/herramientas/107800.webp", alt: "Cuchillo recto de dentado zigzag para envasadora" },
    tools: ["Flow pack", "Corte liso", "Corte dentado", "Picado y prepicado"],
  },
];

export const complementaryServices = [
  {
    slug: "soluciones-a-medida",
    href: "/servicios/soluciones-a-medida",
    code: "FK-04",
    title: "Mecanizado de piezas",
    summary: "Ejes, piñones, resortes y piezas según requerimiento: electroerosión, fresado y torno.",
  },
  {
    slug: "soluciones-a-medida",
    href: "/servicios/soluciones-a-medida",
    code: "FK-05",
    title: "Repuestos y componentes",
    summary: "Correas de arrastre y rodamientos de carro, de bolas y de fricción.",
  },
  {
    slug: "soluciones-a-medida",
    href: "/servicios/soluciones-a-medida",
    code: "FK-06",
    title: "Asesoría técnica",
    summary: "Planos técnicos, visitas a planta, levantamiento de medidas en terreno y asesoría online.",
  },
];

export const specialties = [
  "Herramientas de corte",
  "Rectificación",
  "Mecanizado y repuestos",
  "Asesoría técnica",
];
