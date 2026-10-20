import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Rectificación y afilado", description: "Evaluación técnica, rectificación y afilado de herramientas de corte industrial." };

export default function Page() {
  return <PagePending index="P4" label="Rectificación y afilado" title="El filo importa." accent="La continuidad también." text="Evaluación técnica, rectificación y afilado de herramientas de corte industrial." />;
}
