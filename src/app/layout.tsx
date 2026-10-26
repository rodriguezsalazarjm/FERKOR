import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { company } from "@/content/company";
import { site } from "@/config/site";
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
  metadataBase: new URL(site.url),
  title: {
    default: "Cuchillos dentados y zigzag para envasadoras y flow pack | FERKOR Santiago",
    template: "%s | FERKOR",
  },
  description:
    "Fabricamos y afilamos cuchillos dentados y zigzag para envasadoras, selladoras y máquinas flow pack. Rodamientos lineales y correas de arrastre. Santiago de Chile.",
  keywords: [...site.keywords],
  applicationName: "FERKOR",
  icons: { icon: "/branding/ferkor-isotipo-rojo.svg" },
  openGraph: {
    title: "FERKOR — Cuchillos dentados y zigzag para envasadoras",
    description: "Cuchillos para envasadoras, selladoras y flow pack. Afilado, rodamientos y correas. Santiago de Chile.",
    locale: "es_CL",
    type: "website",
    siteName: "FERKOR",
  },
  // Maqueta: no indexar hasta producción (ver src/config/site.ts).
  robots: site.indexable ? { index: true, follow: true } : { index: false, follow: false },
};

/** Datos estructurados: solo información confirmada. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FERKOR",
  description: "Cuchillos dentados y zigzag para envasadoras y flow pack, afilado, rodamientos lineales y correas de arrastre.",
  url: site.url,
  logo: `${site.url}/branding/ferkor-isotipo-rojo.svg`,
  telephone: company.contact.whatsapp ? `+${company.contact.whatsapp}` : undefined,
  areaServed: { "@type": "Country", name: "Chile" },
  address: { "@type": "PostalAddress", addressLocality: "Santiago", addressCountry: "CL" },
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
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
