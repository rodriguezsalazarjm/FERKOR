import { images, type SiteImage } from "./images";

export type Industry = {
  code: string;
  title: string;
  needs: string[];
  image?: SiteImage;
  featured?: boolean;
};

/** Sectores y aplicaciones. Sin nombres de clientes. */
export const industries: Industry[] = [
  {
    code: "IND-01",
    title: "Envasado alimentario",
    needs: [
      "Cuchillas de corte liso y dentado para envasadoras",
      "Sistemas de prepicado",
      "Selladores y herramientas de reposición",
    ],
    image: images.envasado,
    featured: true,
  },
  {
    code: "IND-02",
    title: "Empaques y bolsas",
    needs: ["Corte y prepicado de film", "Cuchillas para confección de bolsas"],
    image: images.empaques,
  },
  {
    code: "IND-03",
    title: "Papel y cartón",
    needs: ["Cuchillas rectas y circulares", "Guillotinas y corte de bobinas"],
    image: images.papel,
  },
  {
    code: "IND-04",
    title: "Envasado de productos",
    needs: ["Herramientas para líneas de envasado no alimentario"],
  },
  {
    code: "IND-05",
    title: "Otras aplicaciones industriales",
    needs: ["Punzones, corte de cables y herramientas especiales según requerimiento"],
  },
];
