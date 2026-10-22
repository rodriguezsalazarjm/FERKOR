import type { FerkorIconName } from "@/components/graphics/FerkorIcon";

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  href: string;
  code: string;
  /** Necesidad del cliente con la que se presenta el servicio ("puerta de entrada"). */
  need: string;
  title: string;
  summary: string;
  icon: FerkorIconName;
  /** Fotografía real de producto (fondo blanco). */
  product: { src: string; alt: string };
  /** Titular de la página de detalle: línea en negro + remate en rojo. */
  headline: [string, string];
  intro: string;
  /** Qué incluye / qué resolvemos. */
  includes: { title: string; text: string }[];
  /** Referencias del catálogo (catalog.ts) que ilustran el servicio. */
  catalogRefs: string[];
  /** Qué necesitamos para cotizar. */
  quoteNeeds: string[];
  faqs: Faq[];
  /** Etiquetas cortas para tarjetas. */
  tags: string[];
  priority?: boolean;
};

const img = (id: string) => `/images/herramientas/${id}.webp`;

/** Servicios principales, ordenados por la necesidad del cliente. */
export const services: Service[] = [
  {
    slug: "fabricacion",
    href: "/servicios/fabricacion",
    code: "FK-01",
    need: "Necesito un cuchillo nuevo",
    title: "Fabricación a medida",
    summary: "Fabricamos cuchillos industriales según plano, muestra o medidas: circulares, dentados, rectangulares y guillotina.",
    icon: "fabricacion",
    product: { src: img("47eca6"), alt: "Cuchillo circular dentado fabricado por FERKOR" },
    headline: ["Cuchillos industriales", "fabricados a tu medida."],
    intro:
      "Fabricamos herramientas de corte en diversas geometrías y configuraciones, de acuerdo con la máquina y la aplicación de cada proceso. Puedes enviarnos un plano, una muestra, fotografías o medidas: con eso evaluamos y te cotizamos.",
    includes: [
      { title: "Cuchillos rectangulares lisos", text: "Para corte recto en líneas de envasado, papel y procesos industriales." },
      { title: "Cuchillos circulares lisos", text: "Para corte continuo y ranurado, en distintos diámetros y perforaciones." },
      { title: "Dentados y zigzag", text: "Incluidos los utilizados en máquinas envasadoras flow pack." },
      { title: "Orbitales de gran diámetro", text: "Para el corte de grandes rollos de papel." },
      { title: "Tipo guillotina", text: "Cuchillos rectos de gran longitud para corte por presión." },
      { title: "Picado y prepicado", text: "Cuchillos para perforar o prepicar film, papel y empaques." },
    ],
    catalogRefs: ["FK-DE-01", "FK-CI-03", "FK-DE-02", "FK-RE-01", "FK-CI-01", "FK-DE-03", "FK-RE-03", "FK-DE-04"],
    quoteNeeds: [
      "Plano, muestra o fotografías del cuchillo",
      "Medidas principales (largo, ancho, espesor o diámetro)",
      "Máquina y producto que corta",
      "Cantidad requerida",
    ],
    faqs: [
      {
        q: "¿Necesito un plano para cotizar?",
        a: "No es obligatorio. Podemos trabajar desde una muestra, fotografías con medidas o un levantamiento en terreno. Con un plano el proceso es más rápido.",
      },
      {
        q: "¿Fabrican una sola unidad o solo series?",
        a: "Evaluamos cada caso. La cantidad influye en el costo unitario y en el plazo, por eso la pedimos al cotizar.",
      },
      {
        q: "¿Qué materiales utilizan?",
        a: "El material y su tratamiento térmico se definen según la aplicación: qué corta, a qué velocidad y en qué condiciones. Te lo proponemos en la cotización.",
      },
    ],
    tags: ["Circulares", "Dentados y zigzag", "Rectangulares", "Guillotina", "Picado y prepicado"],
  },
  {
    slug: "rectificacion",
    href: "/servicios/rectificacion",
    code: "FK-02",
    need: "Mi cuchillo perdió el filo",
    title: "Afilado y rectificación",
    summary: "Evaluamos tus cuchillos y, cuando es viable, recuperamos su filo y geometría para que vuelvan a trabajar.",
    icon: "rectificacion",
    product: { src: img("4f632e"), alt: "Cuchillo circular liso rectificado" },
    headline: ["El filo importa.", "La continuidad también."],
    intro:
      "Un cuchillo sin filo detiene líneas, rompe empaques y aumenta el desperdicio. Afilamos y rectificamos cuchillos industriales siempre sobre una evaluación técnica previa: si una pieza no conviene recuperarla, te lo decimos antes de trabajar.",
    includes: [
      { title: "Evaluación del estado", text: "Revisamos desgaste, daños, material y geometría de cada pieza." },
      { title: "Afilado", text: "Recuperamos el filo según el ángulo y la aplicación del cuchillo." },
      { title: "Rectificado", text: "Corregimos superficies y geometría para devolver la precisión de montaje." },
      { title: "Alternativa de reposición", text: "Si la pieza no es recuperable, te cotizamos una nueva." },
    ],
    catalogRefs: ["FK-CI-01", "FK-CI-04", "FK-DE-02", "FK-RE-02"],
    quoteNeeds: [
      "Fotografías del cuchillo y de su filo",
      "Medidas principales",
      "Cantidad de piezas",
      "Máquina en la que trabaja",
    ],
    faqs: [
      {
        q: "¿Se pueden rectificar todos los cuchillos?",
        a: "No. Depende del desgaste, de daños como fisuras o quiebres y del material restante. Por eso evaluamos cada pieza antes de cotizar el trabajo.",
      },
      {
        q: "¿Cuántas veces se puede afilar un cuchillo?",
        a: "Depende de cuánto material se retira en cada afilado y de la tolerancia que acepta la máquina. Te lo indicamos al evaluar la pieza.",
      },
      {
        q: "¿Conviene más afilar o comprar uno nuevo?",
        a: "Cuando la pieza es recuperable, el afilado suele ser la opción más económica. Si no lo es, te cotizamos la fabricación de un reemplazo.",
      },
    ],
    tags: ["Evaluación técnica", "Afilado", "Rectificado"],
    priority: true,
  },
  {
    slug: "mecanizado-y-repuestos",
    href: "/servicios/mecanizado-y-repuestos",
    code: "FK-03",
    need: "Necesito una pieza o repuesto",
    title: "Mecanizado y repuestos",
    summary: "Ejes, piñones, resortes y piezas a medida, más correas de arrastre y rodamientos para tus equipos.",
    icon: "materiales",
    product: { src: img("9d328c"), alt: "Piñón mecanizado" },
    headline: ["Piezas mecanizadas", "y repuestos para tu línea."],
    intro:
      "Complementamos la fabricación de herramientas de corte con mecanizado de piezas industriales y suministro de repuestos. Trabajamos según los requerimientos de cada cliente, a partir de una pieza existente o de un plano.",
    includes: [
      { title: "Ejes y piñones", text: "Piezas mecanizadas según medida o muestra." },
      { title: "Resortes", text: "Fabricación según especificación." },
      { title: "Electroerosión, fresado y torno", text: "Procesos para piezas a medida y tornería en general." },
      { title: "Correas de arrastre", text: "Para equipos de envasado y transporte." },
      { title: "Rodamientos", text: "De carro, de bolas y de fricción." },
    ],
    catalogRefs: ["FK-ME-01", "FK-ME-02", "FK-ME-03", "FK-ME-04", "FK-RP-01", "FK-RP-02", "FK-RP-03", "FK-RP-04"],
    quoteNeeds: ["Pieza de muestra, plano o fotografías con medidas", "Material, si lo conoces", "Cantidad requerida"],
    faqs: [
      {
        q: "¿Pueden copiar una pieza que ya no se fabrica?",
        a: "Podemos evaluarla a partir de la pieza existente: levantamos medidas, elaboramos el plano y te proponemos su fabricación.",
      },
      {
        q: "¿Venden repuestos estándar?",
        a: "Suministramos correas de arrastre y rodamientos de carro, de bolas y de fricción. Indícanos la referencia o envíanos una foto de la pieza.",
      },
    ],
    tags: ["Ejes", "Piñones", "Resortes", "Rodamientos", "Correas"],
  },
];

/** Línea especializada (sector principal). */
export const packagingLine: Service = {
  slug: "herramientas-envasado",
  href: "/servicios/herramientas-envasado",
  code: "FK-04",
  need: "Tengo una envasadora",
  title: "Cuchillos para envasadoras",
  summary: "Cuchillos lisos, dentados y zigzag para envasadoras flow pack, verticales y líneas de empaque.",
  icon: "herramientas",
  product: { src: img("107800"), alt: "Cuchillo recto de dentado zigzag para envasadora" },
  headline: ["Cuchillos para", "envasadoras flow pack."],
  intro:
    "El envasado es nuestro sector principal. Fabricamos y recuperamos los cuchillos que cortan tus empaques: lisos, dentados y zigzag, además de cuchillos de picado y prepicado.",
  includes: [
    { title: "Cuchillos zigzag flow pack", text: "Dentado para corte de film en envasadoras horizontales." },
    { title: "Cuchillos lisos", text: "Rectos y circulares para corte limpio de film y empaques." },
    { title: "Picado y prepicado", text: "Para perforar el empaque y facilitar su apertura." },
    { title: "Afilado y rectificación", text: "Recuperamos los cuchillos de tu envasadora cuando es viable." },
  ],
  catalogRefs: ["FK-DE-02", "FK-DE-03", "FK-DE-01", "FK-RE-01"],
  quoteNeeds: [
    "Marca y modelo de la envasadora, si lo conoces",
    "Fotografía del cuchillo actual o del portacuchillo",
    "Medidas y tipo de dentado",
    "Cantidad requerida",
  ],
  faqs: [
    {
      q: "¿Trabajan con cualquier marca de envasadora?",
      a: "Evaluamos cada caso a partir del cuchillo actual o de sus medidas. Con una muestra o fotografías podemos revisar si es posible fabricarlo.",
    },
    {
      q: "Mi cuchillo zigzag corta mal, ¿qué hago?",
      a: "Envíanos fotografías del filo y del empaque cortado. Evaluamos si corresponde afilar, rectificar o reemplazar la pieza.",
    },
  ],
  tags: ["Flow pack", "Zigzag", "Liso", "Prepicado"],
};

/** Asesoría técnica: transversal a todos los servicios. */
export const advisory: Service = {
  slug: "asesoria-tecnica",
  href: "/servicios/asesoria-tecnica",
  code: "FK-05",
  need: "No sé exactamente qué necesito",
  title: "Asesoría técnica",
  summary: "Planos técnicos, visitas a tu planta, levantamiento de medidas en terreno y asesoría online.",
  icon: "planos",
  product: { src: img("675685"), alt: "Cuchillo circular partido con perforaciones de montaje" },
  headline: ["Te ayudamos a definir", "la pieza correcta."],
  intro:
    "Además de fabricar y suministrar, te apoyamos para entender cada requerimiento y definir la solución adecuada: identificamos medidas y características de las piezas y preparamos la información técnica para su fabricación o reposición.",
  includes: [
    { title: "Elaboración de planos", text: "Planos técnicos de piezas y componentes." },
    { title: "Visitas técnicas", text: "Revisamos el equipo y la aplicación en tus instalaciones." },
    { title: "Levantamiento en terreno", text: "Tomamos medidas de la pieza directamente en la máquina." },
    { title: "Asesoría online", text: "Consultas y orientación sobre soluciones industriales." },
  ],
  catalogRefs: [],
  quoteNeeds: ["Descripción del problema o de la pieza", "Fotografías del equipo", "Ubicación de la planta (para visitas)"],
  faqs: [
    {
      q: "¿Las visitas técnicas tienen costo?",
      a: "Depende de la ubicación y del alcance. Consúltanos y te lo indicamos antes de coordinar.",
    },
  ],
  tags: ["Planos", "Visitas", "Medición en terreno", "Online"],
};

export const allServices: Service[] = [...services, packagingLine, advisory];

export function getService(slug: string) {
  return allServices.find((s) => s.slug === slug);
}

export const specialties = ["Cuchillos a medida", "Afilado y rectificación", "Mecanizado y repuestos", "Asesoría técnica"];
