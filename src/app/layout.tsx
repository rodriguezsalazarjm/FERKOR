import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

// Archivos oficiales del sistema de diseño FERKOR (src/fonts).
const barlow = localFont({
  src: [
    { path: "../fonts/BarlowCondensed-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/BarlowCondensed-800.woff2", weight: "800", style: "normal" },
    { path: "../fonts/BarlowCondensed-800Italic.woff2", weight: "800", style: "italic" },
    { path: "../fonts/BarlowCondensed-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-barlow",
  display: "swap",
  adjustFontFallback: "Arial",
});

const plexSans = localFont({
  src: [
    { path: "../fonts/IBMPlexSans-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/IBMPlexSans-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/IBMPlexSans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../fonts/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/IBMPlexMono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FERKOR — Soluciones de Corte Industrial | Santiago de Chile",
    template: "%s | FERKOR",
  },
  description:
    "Fabricación, adaptación y rectificación de herramientas de corte industrial según los requerimientos técnicos de cada operación. Santiago de Chile.",
  applicationName: "FERKOR",
  icons: { icon: "/branding/ferkor-isotipo-rojo.svg" },
  openGraph: {
    title: "FERKOR — Soluciones de Corte Industrial",
    description: "Precisión para cortar. Respuesta para producir.",
    locale: "es_CL",
    type: "website",
  },
  robots: { index: false, follow: false }, // Maqueta: no indexar hasta producción.
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CL" data-scroll-behavior="smooth" className={`${barlow.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenido"
          className="on-dark sr-only z-[100] bg-ink px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
