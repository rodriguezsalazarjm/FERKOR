import type { FerkorIconName } from "@/components/graphics/FerkorIcon";

export const processSteps = [
  {
    n: "01",
    title: "Envíanos foto, plano o muestra",
    text: "Por WhatsApp o formulario. Si lo necesitas, vamos a tu planta y levantamos medidas en terreno.",
  },
  {
    n: "02",
    title: "Evaluamos y te cotizamos",
    text: "Revisamos material, geometría y la aplicación en tu máquina, y te proponemos fabricar, afilar o reemplazar.",
  },
  {
    n: "03",
    title: "Fabricamos y entregamos",
    text: "Coordinamos el trabajo y la entrega, y te mantenemos informado durante el proceso.",
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
