import type { Metadata } from "next";
import { PagePending } from "@/components/sections/PagePending";

export const metadata: Metadata = { title: "Industrias", description: "Envasado alimentario, empaques y bolsas, papel y cartón, y otras aplicaciones industriales." };

export default function Page() {
  return <PagePending index="P7" label="Industrias" title="Donde el corte" accent="no puede fallar." text="Envasado alimentario, empaques y bolsas, papel y cartón, y otras aplicaciones industriales." />;
}
