import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Herramientas para envasado", description: "Cuchillas lisas, dentadas, prepicadores y selladores para maquinaria de envasado." };

export default function Page() {
  return <PagePending index="P5" label="Herramientas para envasado" title="Corte para" accent="envasado." text="Cuchillas lisas, dentadas, prepicadores y selladores para maquinaria de envasado." />;
}
