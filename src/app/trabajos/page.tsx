import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Trabajos", description: "Familias de herramientas y trabajos documentados." };

export default function Page() {
  return <PagePending index="P8" label="Trabajos" title="Portafolio" accent="técnico." text="Familias de herramientas y trabajos documentados." />;
}
