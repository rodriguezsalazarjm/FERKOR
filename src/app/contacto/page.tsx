import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Contacto", description: "Formulario de cotización B2B con adjuntos de planos y fotografías." };

export default function Page() {
  return <PagePending index="P9" label="Contacto" title="Solicita tu" accent="cotización." text="Formulario de cotización B2B con adjuntos de planos y fotografías." />;
}
