import type { Service } from "./services";

/**
 * Líneas de productos FERKOR. Prioridad comercial (audios del cliente, oct. 2026):
 * dentados y zigzag son los más vendidos y de mayor margen; rodamientos y correas
 * complementan la venta. Los títulos usan los términos con que el cliente dice
 * que la gente busca en Google: envasadora, selladora, zigzag, flow pack.
 */
const img = (id: string) => `/images/herramientas/${id}.webp`;

export const products: Service[] = [
  {
    kind: "producto",
    slug: "cuchillos-dentados-envasadora",
    href: "/productos/cuchillos-dentados-envasadora",
    code: "PR-01",
    need: "Para envasadoras y selladoras",
    title: "Cuchillos dentados",
    summary: "Cortan la bolsa al envasar arroz, harina, pasta y otros productos. Fabricados a medida y afilados.",
    icon: "herramientas",
    product: { src: img("e8fa22"), alt: "Cuchillo dentado con ranuras de fijación para envasadora" },
    headline: ["Cuchillos dentados", "para envasadoras y selladoras."],
    intro:
      "Son los cuchillos que cortan la bolsa en las máquinas envasadoras: pasa el film con la cantidad de producto, el cuchillo dentado corta y la bolsa queda envasada y sellada. Los fabricamos según tu modelo y los afilamos cuando pierden el corte.",
    uses: [
      { title: "Envasadoras verticales", text: "Envasado de arroz, harina, pasta, legumbres y otros productos en bolsa." },
      { title: "Selladoras", text: "Corte y sellado del film al cerrar cada bolsa." },
      { title: "Líneas de empaque", text: "Corte de film en procesos de envasado de alimentos y productos." },
    ],
    includes: [
      { title: "Muchas formas, un mismo principio", text: "Rectos, curvos o circulares: lo que importa es el dentado. Lo fabricamos según tu modelo." },
      { title: "Fabricación a medida", text: "A partir de una muestra, una foto con medidas o el plano." },
      { title: "Afilado y rectificación", text: "Recuperamos el filo de tus cuchillos cuando la pieza lo permite." },
      { title: "Reposición", text: "Te ayudamos a tener cuchillos de recambio para no detener la línea." },
    ],
    catalogRefs: ["FK-DE-03", "FK-DE-01", "FK-DE-04", "FK-DE-05", "FK-DE-06"],
    quoteNeeds: [
      "Fotografía del cuchillo, ojalá con una huincha al lado",
      "Marca o tipo de envasadora, si lo sabes",
      "Largo, ancho, espesor y tipo de dentado",
      "Cantidad que necesitas",
    ],
    faqs: [
      {
        q: "¿Cómo sé si mi cuchillo es dentado?",
        a: "Si el filo tiene dientes, es dentado. Hay muchas formas y medidas; envíanos una foto y lo identificamos.",
      },
      {
        q: "Mi envasadora corta mal la bolsa, ¿es el cuchillo?",
        a: "Muchas veces sí: un dentado gastado o dañado rompe o no corta el film. Envíanos fotos del cuchillo y de la bolsa cortada y lo evaluamos.",
      },
      {
        q: "¿Pueden copiar mi cuchillo actual?",
        a: "Sí, a partir de una muestra o de fotos con medidas evaluamos su fabricación.",
      },
    ],
    tags: ["Envasadora", "Selladora", "Dentado", "Afilado"],
    priority: true,
    seo: {
      title: "Cuchillos dentados para envasadoras y selladoras",
      description:
        "Fabricación y afilado de cuchillos dentados para máquinas envasadoras y selladoras en Santiago de Chile. Cotiza con una foto de tu cuchillo.",
    },
  },
  {
    kind: "producto",
    slug: "cuchillos-zigzag-flow-pack",
    href: "/productos/cuchillos-zigzag-flow-pack",
    code: "PR-02",
    need: "Para máquinas flow pack",
    title: "Cuchillos zigzag",
    summary: "Cuchillos zigzag para máquinas flow pack: cortan y sellan cada empaque. A medida y con afilado.",
    icon: "afilado",
    product: { src: img("107800"), alt: "Cuchillo zigzag para máquina flow pack" },
    headline: ["Cuchillos zigzag", "para máquinas flow pack."],
    intro:
      "Las máquinas flow pack, muy usadas en Chile, envasan en horizontal y cortan cada empaque con un cuchillo de dentado en zigzag que también ayuda a sellar. Fabricamos estos cuchillos a medida y los afilamos para que tu máquina vuelva a cortar limpio.",
    uses: [
      { title: "Flow pack horizontal", text: "Envasado de galletas, golosinas, panificados, barras y otros productos." },
      { title: "Corte y sellado", text: "El zigzag corta el film y deja el borde del empaque sellado." },
      { title: "Envasadoras y selladoras", text: "Otras máquinas que usan cuchillos de corte en zigzag." },
    ],
    includes: [
      { title: "Fabricación a medida", text: "Según el largo, el paso y la altura del zigzag de tu cuchillo actual." },
      { title: "Afilado", text: "Recuperamos el filo del zigzag cuando la pieza lo permite." },
      { title: "Juegos de recambio", text: "Cuchillos de reposición para no detener la producción." },
      { title: "Identificación", text: "Si no sabes la medida, la levantamos desde tu cuchillo o en tu planta." },
    ],
    catalogRefs: ["FK-ZZ-01", "FK-DE-03"],
    quoteNeeds: [
      "Fotografía del cuchillo zigzag con una huincha al lado",
      "Marca y modelo de la flow pack, si lo sabes",
      "Largo, ancho y espesor",
      "Cantidad que necesitas",
    ],
    faqs: [
      {
        q: "¿Qué es un cuchillo zigzag?",
        a: "Es un cuchillo con dentado en forma de zigzag que usan las máquinas flow pack para cortar y sellar cada empaque.",
      },
      {
        q: "¿Trabajan con cualquier marca de flow pack?",
        a: "Evaluamos cada caso a partir de tu cuchillo actual o de sus medidas. Con una muestra o fotos revisamos si es posible fabricarlo.",
      },
      {
        q: "¿Se puede afilar un cuchillo zigzag?",
        a: "Depende del desgaste del dentado. Lo evaluamos y, si no conviene afilarlo, te cotizamos uno nuevo.",
      },
    ],
    tags: ["Flow pack", "Zigzag", "Corte y sellado", "Afilado"],
    priority: true,
    seo: {
      title: "Cuchillos zigzag para máquinas flow pack",
      description:
        "Cuchillos zigzag para flow pack, envasadoras y selladoras: fabricación a medida y afilado en Santiago de Chile. Cotiza con una foto.",
    },
  },
  {
    kind: "producto",
    slug: "rodamientos-lineales",
    href: "/productos/rodamientos-lineales",
    code: "PR-03",
    need: "Repuestos para envasadoras",
    title: "Rodamientos lineales",
    summary: "Rodamientos de carro, lineales de bolas y de fricción, y el repuesto interior que se desgasta.",
    icon: "precision",
    product: { src: img("7946f4"), alt: "Rodamiento lineal de fricción" },
    headline: ["Rodamientos lineales,", "de carro y de fricción."],
    intro:
      "Suministramos rodamientos para los carros y guías de tus máquinas. En los rodamientos de fricción no hay bolas: la parte interior blanca es la que se desgasta, y basta con cambiar ese inserto para que la carcasa siga trabajando.",
    uses: [
      { title: "Envasadoras y selladoras", text: "Carros y guías lineales de las mordazas y sistemas de corte." },
      { title: "Maquinaria industrial", text: "Movimientos lineales en equipos de producción." },
    ],
    includes: [
      { title: "Rodamientos de carro", text: "Para los carros que se desplazan sobre guías." },
      { title: "Lineales de bolas", text: "Rodamientos lineales con recirculación de bolas." },
      { title: "De fricción", text: "Sin bolas: deslizan sobre un inserto interior de bajo roce." },
      { title: "Insertos de recambio", text: "La parte interior del rodamiento de fricción, para cambiar solo lo que se gasta." },
    ],
    catalogRefs: ["FK-RP-01", "FK-RP-02", "FK-RP-03", "FK-RP-04"],
    quoteNeeds: ["Fotografía del rodamiento", "Diámetro del eje y medidas exteriores", "Referencia, si la tiene grabada", "Cantidad"],
    faqs: [
      {
        q: "¿Puedo cambiar solo la parte interior del rodamiento de fricción?",
        a: "Sí. La parte blanca interior es la que se desgasta; se reemplaza y la carcasa se mantiene.",
      },
      {
        q: "No sé qué rodamiento es, ¿cómo cotizo?",
        a: "Envíanos una foto con medidas o la pieza, y lo identificamos.",
      },
    ],
    tags: ["De carro", "Lineales de bolas", "De fricción", "Insertos"],
    seo: {
      title: "Rodamientos lineales, de carro y de fricción",
      description:
        "Rodamientos lineales de bolas, de carro y de fricción, e insertos de recambio para envasadoras y selladoras. Santiago de Chile.",
    },
  },
  {
    kind: "producto",
    slug: "correas-de-arrastre",
    href: "/productos/correas-de-arrastre",
    code: "PR-04",
    need: "Repuestos para envasadoras",
    title: "Correas de arrastre",
    summary: "Correas con goma de arrastre que desplazan el film en las envasadoras.",
    icon: "materiales",
    // Sin foto real de correas todavía (PENDIENTE: fotos del cliente).
    headline: ["Correas de arrastre", "para envasadoras."],
    intro:
      "Las correas de arrastre llevan una goma, normalmente roja, que toma el film y lo desplaza dentro de la envasadora. Cuando se gastan, el film patina y la bolsa sale mal. Trabajamos con los tipos más usados.",
    uses: [
      { title: "Envasadoras verticales", text: "Arrastre del film hacia el formador y las mordazas." },
      { title: "Líneas de empaque", text: "Desplazamiento de film en equipos de envasado." },
    ],
    includes: [
      { title: "Correas con goma de arrastre", text: "Los tipos más usados en envasadoras." },
      { title: "Identificación", text: "Te ayudamos a identificar la correa a partir de una foto o de la pieza gastada." },
    ],
    catalogRefs: [],
    quoteNeeds: ["Fotografía de la correa", "Largo, ancho y tipo de dentado interior", "Marca de la envasadora, si la sabes", "Cantidad"],
    faqs: [
      {
        q: "¿Cómo sé si tengo que cambiar la correa?",
        a: "Si el film patina, se desplaza disparejo o la goma se ve lisa o cortada, la correa probablemente está gastada.",
      },
    ],
    tags: ["Arrastre de film", "Goma", "Envasadoras"],
    seo: {
      title: "Correas de arrastre para envasadoras",
      description: "Correas de arrastre para mover el film en envasadoras. Cotiza con una foto de tu correa. Santiago de Chile.",
    },
  },
];

export const featuredProducts = products.filter((p) => p.priority);
export const complementaryProducts = products.filter((p) => !p.priority);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
