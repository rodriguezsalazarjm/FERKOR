import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Servicios", description: "Fabricación, rectificación y afilado, herramientas para envasado y soluciones complementarias." };

export default function Page() {
  return <PagePending index="P2" label="Servicios" title="Soluciones de corte" accent="a medida." text="Fabricación, rectificación y afilado, herramientas para envasado y soluciones complementarias." />;
}
