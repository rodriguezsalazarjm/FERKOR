import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Soluciones a medida", description: "Adaptación de herramientas y requerimientos de maestranza complementaria, sujetos a evaluación." };

export default function Page() {
  return <PagePending index="P6" label="Soluciones a medida" title="Adaptación y" accent="maestranza." text="Adaptación de herramientas y requerimientos de maestranza complementaria, sujetos a evaluación." />;
}
