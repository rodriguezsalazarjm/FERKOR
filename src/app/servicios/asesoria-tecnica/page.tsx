import type { Metadata } from "next";
import { getService } from "@/content/services";
import { ServiceDetail } from "@/components/sections/inner/ServiceDetail";

const service = getService("asesoria-tecnica")!;

export const metadata: Metadata = { title: service.title, description: service.summary };

export default function Page() {
  return <ServiceDetail service={service} />;
}
