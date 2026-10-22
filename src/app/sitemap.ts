import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { products } from "@/content/products";
import { allServices } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/productos", ...products.map((p) => p.href), "/servicios", ...allServices.map((s) => s.href), "/industrias", "/nosotros", "/contacto"];
  return paths.map((p) => ({ url: `${site.url}${p}`, priority: p === "/" ? 1 : p.startsWith("/productos") ? 0.9 : 0.7 }));
}
