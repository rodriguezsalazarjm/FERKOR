import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Nosotros", description: "Quiénes somos, nuestra especialización y la experiencia detrás de cada solución de corte." };

export default function Page() {
  return <PagePending index="P1" label="Nosotros" title="Conocimiento técnico," accent="atención directa." text="Quiénes somos, nuestra especialización y la experiencia detrás de cada solución de corte." />;
}
