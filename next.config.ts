import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Fotografía de referencia provisional (Unsplash). Reemplazar por fotografía
    // propia de FERKOR y eliminar este dominio cuando esté disponible.
    remotePatterns: [new URL("https://images.unsplash.com/**")],
    qualities: [70, 80],
  },
  async redirects() {
    return [
      { source: "/servicios/soluciones-a-medida", destination: "/servicios/mecanizado-y-repuestos", permanent: true },
      { source: "/servicios/herramientas-envasado", destination: "/productos/cuchillos-dentados-envasadora", permanent: true },
      { source: "/trabajos", destination: "/productos#catalogo", permanent: false },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
