import type { FerkorIconName } from "@/components/graphics/FerkorIcon";

export const processSteps = [
  {
    n: "01",
    title: "Recibimos tu requerimiento",
    text: "Envíanos planos, medidas, fotografías o una muestra. Si lo necesitas, levantamos medidas en terreno.",
  },
  {
    n: "02",
    title: "Analizamos las especificaciones",
    text: "Revisamos material, geometría, tolerancias y la aplicación en tu máquina.",
  },
  {
    n: "03",
    title: "Evaluamos la solución",
    text: "Definimos si corresponde fabricar, adaptar o rectificar, y te cotizamos.",
  },
  {
    n: "04",
    title: "Coordinamos trabajo y entrega",
    text: "Gestionamos la fabricación con nuestro taller aliado y te mantenemos informado.",
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
