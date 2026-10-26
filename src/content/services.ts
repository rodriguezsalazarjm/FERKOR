import type { FerkorIconName } from "@/components/graphics/FerkorIcon";
import type { ProductDrawingKey } from "@/components/graphics/ProductDrawings";

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
  /** Fotografía real de producto (fondo blanco). Opcional: sin foto se muestra un placeholder técnico. */
  product?: { src: string; alt: string };
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
  /** "producto" para las líneas de productos (src/content/products.ts). */
  kind?: "servicio" | "producto";
  /** En qué máquinas/aplicaciones se usa (productos). */
  uses?: { title: string; text: string }[];
  /** Esquemas y planos referenciales a mostrar (ProductDrawings). */
  drawings?: ProductDrawingKey[];
  /** Título y descripción SEO con los términos que busca el cliente. */
  seo?: { title: string; description: string };
  /**
   * Ficha técnica: parámetros con que se especifica la pieza. `value: null` = se define
   * por requerimiento (no es un catálogo cerrado de medidas). No inventar valores.
   */
  specs?: { intro: string; rows: { label: string; value: string | null; note?: string }[] };
  /**
   * Compatibilidad con maquinaria (marcas que el cliente indica). FERKOR fabrica o suministra
   * piezas compatibles: no es distribuidor oficial ni fabricante autorizado de esas marcas.
   */
  compatibility?: { brands: string[]; note: string };
  /** Galería de fotos reales del servicio. Sin `src` = espacio reservado (foto pendiente del cliente). */
  gallery?: { label: string; src?: string; alt?: string }[];
};

const job = (id: string) => `/images/trabajos/${id}.webp`;

/** Servicios principales, ordenados por la necesidad del cliente. */
export const services: Service[] = [
  {
    slug: "fabricacion",
    href: "/servicios/fabricacion",
    code: "FK-01",
    need: "Necesito un cuchillo nuevo",
    title: "Fabricación a medida",
    summary: "Fabricamos cuchillos industriales según plano, muestra o medidas: dentados, zigzag, circulares, prepicadores, rectangulares y guillotina.",
    icon: "fabricacion",
    product: { src: job("circular-dentado"), alt: "Cuchillo circular dentado fabricado por FERKOR" },
    headline: ["Cuchillos industriales", "fabricados a tu medida."],
    intro:
      "Fabricamos herramientas de corte en diversas geometrías y configuraciones, de acuerdo con la máquina y la aplicación de cada proceso. Puedes enviarnos un plano, una muestra, fotografías o medidas: con eso evaluamos y te cotizamos. Cuando conviene, fabricamos una alternativa compatible a la pieza original de tu máquina.",
    includes: [
      { title: "Cuchillos dentados", text: "Rectos o circulares, para cortar film en envasadoras y selladoras." },
      { title: "Cuchillos zigzag", text: "Para corte y sellado en máquinas flow pack y envasadoras." },
      { title: "Cuchillos circulares", text: "Lisos, dentados, microdentados y cóncavos, en distintos diámetros y perforaciones." },
      { title: "Cuchillos prepicadores", text: "Para perforar o prepicar film, papel y empaques; se especifican por dientes por pulgada." },
      { title: "Rectangulares y guillotina", text: "Cuchillos rectos, incluso de gran longitud, para corte por presión." },
      { title: "Piezas especiales", text: "Cuchillas de geometría especial y orbitales de gran diámetro, según plano o muestra." },
    ],
    specs: {
      intro:
        "Estos son los datos con que definimos un cuchillo a fabricar. Las medidas se ajustan a cada máquina: no trabajamos con un catálogo cerrado.",
      rows: [
        { label: "Tipo de filo", value: "Liso, dentado, zigzag o prepicado" },
        { label: "Paso o dientes por pulgada", value: null, note: "Prepicadores y dentados: según la muestra o el plano" },
        { label: "Largo / diámetro", value: null, note: "Según requerimiento" },
        { label: "Ancho y espesor", value: null, note: "Según requerimiento" },
        { label: "Perforaciones y fijación", value: null, note: "Se copian de la pieza original o del plano" },
        { label: "Material y tratamiento", value: null, note: "Se propone según la aplicación al cotizar" },
      ],
    },
    catalogRefs: ["FK-DE-10", "FK-ZZ-02", "FK-DE-07", "FK-CI-10", "FK-DE-11", "FK-RE-06", "FK-CI-09", "FK-ES-01"],
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
    tags: ["Dentados y zigzag", "Circulares", "Prepicadores", "Rectangulares", "Guillotina"],
    seo: {
      title: "Fabricación de cuchillos industriales a medida",
      description:
        "Fabricación de cuchillos industriales a medida en Chile: dentados, zigzag, circulares, prepicadores y guillotina según plano, muestra o medidas.",
    },
  },
  {
    slug: "rectificacion",
    href: "/servicios/rectificacion",
    code: "FK-02",
    need: "Mi cuchillo perdió el filo",
    title: "Afilado y rectificación",
    summary: "Evaluamos tus cuchillos y, cuando es viable, recuperamos su filo y geometría para que vuelvan a trabajar.",
    icon: "rectificacion",
    product: { src: job("rectificado-disco-grande"), alt: "Cuchillo circular de gran diámetro montado para rectificado" },
    headline: ["El filo importa.", "La continuidad también."],
    intro:
      "Un cuchillo sin filo detiene líneas, rompe empaques y aumenta el desperdicio. Afilamos y rectificamos cuchillos industriales siempre sobre una evaluación técnica previa: si una pieza no conviene recuperarla, te lo decimos antes de trabajar.",
    includes: [
      { title: "Evaluación del estado", text: "Revisamos desgaste, daños, material y geometría de cada pieza." },
      { title: "Afilado", text: "Recuperamos el filo según el ángulo y la aplicación del cuchillo." },
      { title: "Rectificado", text: "Corregimos superficies y geometría para devolver la precisión de montaje." },
      { title: "Alternativa de reposición", text: "Si la pieza no es recuperable, te cotizamos una nueva." },
      { title: "Herramientas que recibimos", text: "Cuchillos circulares, rectos, dentados y zigzag, cuchillas de guillotina y piezas planas." },
      { title: "Cómo solicitarlo", text: "Envíanos fotos del filo y las medidas; evaluamos y te confirmamos si conviene antes de cotizar." },
    ],
    gallery: [
      { label: "Rectificado de piezas planas", src: job("rectificado-placas"), alt: "Piezas planas de acero montadas para rectificado" },
      { label: "Cuchillo circular en rectificado", src: job("rectificado-disco-grande"), alt: "Cuchillo circular de gran diámetro montado para rectificado" },
      { label: "Antes y después del afilado" },
    ],
    catalogRefs: ["FK-CI-01", "FK-CI-06", "FK-CI-07", "FK-CI-08"],
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
    seo: {
      title: "Afilado y rectificación de cuchillos industriales",
      description:
        "Afilado y rectificación industrial de cuchillos circulares, rectos, dentados y zigzag, con evaluación técnica previa. Desde Santiago a todo Chile.",
    },
    priority: true,
  },
  {
    slug: "mecanizado-y-repuestos",
    href: "/servicios/mecanizado-y-repuestos",
    code: "FK-03",
    need: "Necesito una pieza a medida",
    title: "Mecanizado de piezas",
    summary: "Ejes, piñones, resortes y piezas a medida por electroerosión, fresado y torno.",
    icon: "materiales",
    product: { src: job("pinones"), alt: "Piñones de acero mecanizados" },
    headline: ["Piezas mecanizadas", "para tu línea."],
    intro:
      "Complementamos la fabricación de herramientas de corte con mecanizado de piezas industriales: repuestos de máquina que se gastan, se quiebran o ya no se consiguen. Trabajamos según los requerimientos de cada cliente, a partir de una pieza existente o de un plano.",
    includes: [
      { title: "Ejes y piñones", text: "Piezas mecanizadas según medida o muestra." },
      { title: "Resortes", text: "Fabricación según especificación." },
      { title: "Electroerosión, fresado y torno", text: "Procesos para piezas a medida y tornería en general." },
      { title: "Copia de piezas", text: "Reproducimos piezas existentes a partir de una muestra." },
      { title: "Piezas en acero, aluminio y polímeros", text: "El material se define según la función de la pieza en la máquina." },
      { title: "Unidades o series", text: "Desde una pieza de reposición hasta series cortas." },
    ],
    gallery: [
      { label: "Piezas mecanizadas en serie", src: job("piezas-mecanizadas-serie"), alt: "Piezas de acero mecanizadas apiladas" },
      { label: "Pieza terminada", src: job("pieza-mecanizada-buje"), alt: "Pieza de aluminio mecanizada con rebajes y perforaciones" },
      { label: "Equipos utilizados" },
      { label: "Pieza durante el mecanizado" },
    ],
    catalogRefs: ["FK-ME-10", "FK-ME-12", "FK-ME-13", "FK-ME-11", "FK-ME-02", "FK-ME-03", "FK-ME-05", "FK-ME-04"],
    quoteNeeds: ["Pieza de muestra, plano o fotografías con medidas", "Material, si lo conoces", "Cantidad requerida"],
    faqs: [
      {
        q: "¿Pueden copiar una pieza que ya no se fabrica?",
        a: "Podemos evaluarla a partir de la pieza existente: levantamos medidas, elaboramos el plano y te proponemos su fabricación.",
      },
      {
        q: "¿Venden rodamientos y correas?",
        a: "Sí: rodamientos lineales, de carro, de bolas y de fricción, y correas de arrastre. Los encuentras en Productos.",
      },
    ],
    tags: ["Ejes", "Piñones", "Resortes", "Electroerosión", "Torno"],
    seo: {
      title: "Mecanizado de piezas industriales a medida",
      description:
        "Mecanizado de piezas y repuestos industriales: ejes, piñones y piezas a medida por torno, fresado y electroerosión, según muestra o plano.",
    },
  },
];

/** Asesoría técnica: transversal a todos los servicios. */
export const advisory: Service = {
  slug: "asesoria-tecnica",
  href: "/servicios/asesoria-tecnica",
  code: "FK-04",
  need: "No sé qué pieza necesito",
  title: "Asesoría técnica",
  summary: "Planos técnicos, visitas a tu planta, levantamiento de medidas en terreno y asesoría online.",
  icon: "planos",
  product: { src: job("circular-partido-perforado"), alt: "Cuchillo circular partido con perforaciones de montaje" },
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

export const allServices: Service[] = [...services, advisory];

export function getService(slug: string) {
  return allServices.find((s) => s.slug === slug);
}

export const specialties = ["Cuchillos dentados", "Cuchillos zigzag flow pack", "Rodamientos y correas", "Afilado y rectificación"];
