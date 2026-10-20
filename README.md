# FERKOR — Sitio web V1.0

Sitio corporativo B2B de **FERKOR — Soluciones de Corte Industrial** (Santiago de Chile).
Proyecto de **UPZITES**. Estado: **Fases A y B completas** (fundación + home de alta fidelidad). Las páginas interiores son provisionales hasta aprobar la home (Fase D).

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Stack: Next.js 16.4 (App Router, Cache Components), React 19, TypeScript estricto, Tailwind CSS 4, Lucide React. Sin CMS, base de datos ni servicios externos.

## Estructura

```
public/
  branding/     Logos e isotipos oficiales (SVG del sistema de diseño FERKOR). No modificar.
  patterns/     Patrones oficiales de la lámina (referencia; la web dibuja los suyos en SVG).
  images/       Vacío: aquí va la fotografía propia de FERKOR.
docs/referencias/  Lámina de identidad en rojo y lámina de exploración del logo (solo consulta).
src/
  app/          Rutas. `page.tsx` = home; el resto usan `PagePending` (Fase D).
  config/brand.ts      Colores, rutas de logos y proporciones.
  content/             Datos comerciales centralizados (company, services, industries, projects, images, home, navigation).
  components/
    layout/     Header (sticky + menú móvil accesible), Footer.
    sections/   Secciones de la home y la página provisional.
    ui/         Button, SectionLabel, Photo (+ aviso "Ref. visual"), Logo, Pending.
    graphics/   BlueprintPattern, TechnicalGrid, TechnicalDivider, CutGeometry,
                TechnicalDrawings (cuchilla circular, cuchilla recta, cajetín), FerkorIcon.
  fonts/        Barlow Condensed, IBM Plex Sans, IBM Plex Mono (woff2 del sistema de diseño, vía next/font/local).
  lib/geometry.ts      Geometría determinista para los dibujos SVG.
```

## Sistema visual

- **Fuente de verdad:** sistema de diseño FERKOR (lámina de identidad en rojo V2.0).
  Colores: negro industrial `#0B0B0D`, rojo técnico `#D11B1B`, gris acero `#6B6F76`, blanco técnico `#F4F5F6`, azul blueprint `#0E2A47`.
  El brief proponía valores aproximados (`#17191C`, `#C92F32`, `#142B3A`); se usaron los de la lámina. Se cambian en `src/app/globals.css` (`@theme`) y `src/config/brand.ts`.
- Rojo para texto pequeño sobre negro: `red-light` `#FF5247` (contraste AA). `rojo-tecnico` sobre negro solo en titulares grandes.
- Tipografía: Barlow Condensed 700–900 (titulares, mayúsculas), IBM Plex Sans (lectura/UI), IBM Plex Mono (códigos, cotas, numeración).
- Forma: aristas vivas, chaflán a 45° en esquina superior derecha (`chamfer-*`), cortes diagonales a 28° (ángulo del isotipo), sin sombras decorativas.
- Fotografía: B/N contrastada (`photo-grade`); el rojo lo aporta la gráfica.
- Dibujos técnicos: SVG con trazo que no escala, cotas, ejes, achurados y cajetín "DIBUJO REFERENCIAL" para que no se confundan con planos de fabricación.

## Pendientes del cliente

| Dato / recurso | Dónde se completa | Estado en la web |
| --- | --- | --- |
| Número de WhatsApp | `src/content/company.ts` → `contact.whatsapp` | Marcado "número por confirmar"; el botón se activa solo al cargarlo |
| Correo, teléfono, horario | `src/content/company.ts` → `contact` | Marcado "pendiente" |
| Razón social, RUT, textos legales | `src/content/company.ts` → `legal` | "Información legal por validar" |
| Redes sociales confirmadas | `src/content/company.ts` → `social` | No se muestran |
| Fotografía propia (herramientas, rectificación, medición, Johel si autoriza) | `public/images` + `src/content/images.ts` | 15 imágenes provisionales de Unsplash con etiqueta "Ref. visual" |
| Trabajos documentados | `src/content/projects.ts` | Familias de herramientas con imágenes referenciales |
| Validación de iconos redibujados | `src/components/graphics/FerkorIcon.tsx` | Set propio en el trazo de la lámina |
| Logos vectoriales finales del diseñador | `public/branding` | Se usan los SVG vectorizados del sistema de diseño |
| Dominio y metadatos de producción | `src/app/layout.tsx` (`robots` está en `noindex`) | Maqueta no indexable |

## Fotografía provisional

Todas las fotos vienen de `images.unsplash.com` (licencia Unsplash) y se cargan desde su CDN vía `next/image` (`remotePatterns` en `next.config.ts`). **No son trabajos ni instalaciones de FERKOR.** Al recibir fotografía propia, reemplazar en `src/content/images.ts`, marcar `provisional: false` y quitar el dominio de `next.config.ts`.

## Próximas fases

- **C — Revisión:** ajustes de la home según observaciones.
- **D — Páginas interiores:** Nosotros, Servicios (+ 4 detalles), Industrias, Trabajos y Contacto con formulario de cotización B2B (validación, adjuntos, estado "envío pendiente de integración", alternativa WhatsApp).
- **E — Auditoría:** accesibilidad, rendimiento, contenido pendiente, integridad de activos.
