import { images, type SiteImage } from "./images";

/**
 * Familias de herramientas para la sección de trabajos.
 * PENDIENTE: reemplazar por trabajos documentados de FERKOR (foto real,
 * aplicación y, si el cliente lo autoriza, especificaciones).
 */
export type ToolFamily = {
  code: string;
  title: string;
  application: string;
  image: SiteImage;
  documented: boolean;
};

export const toolFamilies: ToolFamily[] = [
  {
    code: "TF-01",
    title: "Cuchillas rectas",
    application: "Guillotinas, corte de papel, film y cartón",
    image: images.recta,
    documented: false,
  },
  {
    code: "TF-02",
    title: "Cuchillas circulares",
    application: "Corte continuo y ranurado de bobinas",
    image: images.circular,
    documented: false,
  },
  {
    code: "TF-03",
    title: "Cuchillas dentadas",
    application: "Corte y prepicado en envasadoras",
    image: images.dentada,
    documented: false,
  },
  {
    code: "TF-04",
    title: "Punzones",
    application: "Perforación y troquelado",
    image: images.punzon,
    documented: false,
  },
  {
    code: "TF-05",
    title: "Herramientas especiales",
    application: "Desarrollos según plano o muestra",
    image: images.especial,
    documented: false,
  },
  {
    code: "TF-06",
    title: "Rectificación",
    application: "Recuperación de filo y geometría",
    image: images.rectificacionDetalle,
    documented: false,
  },
];
