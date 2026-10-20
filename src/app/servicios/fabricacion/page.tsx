import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Fabricación a medida", description: "Herramientas de corte fabricadas a partir de planos, medidas, muestras o fotografías." };

export default function Page() {
  return <PagePending index="P3" label="Fabricación a medida" title="Fabricación" accent="según tu especificación." text="Herramientas de corte fabricadas a partir de planos, medidas, muestras o fotografías." />;
}
