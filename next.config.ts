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
