import type { FerkorIconName } from "@/components/graphics/FerkorIcon";

export const processSteps = [
  {
    n: "01",
    title: "Evaluamos",
    text: "Envíanos foto, plano o muestra por WhatsApp o formulario. Revisamos la pieza, la máquina y la aplicación; si hace falta, levantamos medidas en tu planta.",
  },
  {
    n: "02",
    title: "Cotizamos",
    text: "Te proponemos fabricar, afilar o reemplazar, con material, cantidad y plazo según el caso. Si la pieza no es viable, te lo decimos.",
  },
  {
    n: "03",
    title: "Fabricamos",
    text: "Fabricamos, afilamos o mecanizamos según lo acordado y te mantenemos informado durante el proceso.",
  },
  {
    n: "04",
    title: "Entregamos",
    text: "Coordinamos la entrega desde Santiago para que tu línea vuelva a producir.",
  },
];

export const differentials: { icon: FerkorIconName; title: string; text: string }[] = [
  {
    icon: "asesoria",
    title: "Atención personalizada",
    text: "Hablas directamente con quien conoce tu requerimiento, sin intermediarios.",
  },
  {
    icon: "materiales",
    title: "Conocimiento técnico",
    text: "Aceros, tratamientos térmicos y lectura de planos al servicio de cada caso.",
  },
  {
    icon: "precision",
    title: "Precisión",
    text: "Cada medida importa. Trabajamos sobre especificaciones, no sobre supuestos.",
  },
  {
    icon: "respuesta",
    title: "Capacidad de respuesta",
    text: "Respondemos con agilidad para que tu línea no espere más de lo necesario.",
  },
  {
    icon: "planos",
    title: "Soluciones según necesidad",
    text: "Fabricar, adaptar o rectificar: proponemos lo que tu operación requiere.",
  },
];
