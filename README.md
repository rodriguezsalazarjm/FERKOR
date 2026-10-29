# FERKOR — Sitio web V1.0

Sitio corporativo B2B de **FERKOR — Soluciones de Corte Industrial** (Santiago de Chile).
Proyecto de **UPZITES**. Estado: home comercial + páginas interiores (servicios, industrias, nosotros, trabajos, contacto) construidas.

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

## Animación

Sistema en `src/app/globals.css` (sección "Sistema de movimiento"), sin librerías:
- **Entrada:** el titular sube línea a línea desde un corte (`.hero-line`), el resto aparece en cascada (`.hero-in`), el corte rojo entra en diagonal y el plano de la cuchilla se "plotea".
- **Scroll:** titulares, tarjetas, listas y rótulos aparecen con CSS scroll-driven animations (`animation-timeline: view()`); los planos se dibujan de izquierda a derecha; la línea de cota del proceso crece. Navegadores sin soporte muestran todo estático.
- **Interacción:** header que se oculta al bajar y vuelve al subir, barra roja de progreso de lectura, destello diagonal en botones principales, elevación de tarjetas, marquesina de especialidades (pausa al pasar el cursor), aparición escalonada al filtrar el catálogo, contador de trayectoria y entrada suave entre páginas.
- **Accesibilidad:** con `prefers-reduced-motion` todo queda estático.

## Pendientes del cliente

| Dato / recurso | Dónde se completa | Estado en la web |
| --- | --- | --- |
| Más modelos de dentados/zigzag y correas (Google Drive del cliente) | `public/images/herramientas` + `catalog.ts` | 1 foto de correa (tomada en auto; idealmente repetir sobre mesa) |
| Validar qué modelos son dentados y cuáles zigzag | `src/content/catalog.ts` | Solo FK-ZZ-01 marcado como zigzag |
| Dominio definitivo y activar indexación | `src/config/site.ts` (`url`, `indexable`) | robots.txt bloquea y páginas en noindex |
| Google Business Profile (SEO local + reseñas) | `src/content/reviews.ts` → `googleReviewsUrl` | Pendiente |
| Reseñas de clientes reales (mín. 3, con autorización) | `src/content/reviews.ts` | La sección no se muestra hasta tener 3 |
| Plazo de respuesta que puedan cumplir (ej. 24 h hábiles) | textos de Contacto / Proceso | No se promete plazo |
| Confirmar si fabrican en taller propio o aliado | `src/app/nosotros/page.tsx` | Textos neutros ("fabricamos", según documento del cliente) |
| Contraseña SMTP del buzón contacto@ferkor.cl | Vercel → env `SMTP_PASS` (opcional `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`) | Sin ella el formulario ofrece WhatsApp/correo como alternativa |
| Número de WhatsApp | `src/content/company.ts` → `contact.whatsapp` | Marcado "número por confirmar"; el botón se activa solo al cargarlo |
| Teléfono, horario | `src/content/company.ts` → `contact` | Marcado "pendiente" (correo: contacto@ferkor.cl) |
| Razón social, RUT, textos legales | `src/content/company.ts` → `legal` | "Información legal por validar" |
| Redes sociales confirmadas | `src/content/company.ts` → `social` | No se muestran |
| Fotografía de ambiente propia (rectificación, taller, medición, Johel si autoriza) | `public/images` + `src/content/images.ts` | Hero, rectificación e industrias siguen con imágenes de Unsplash marcadas "Ref. visual" |
| Validar nombres y familias de los productos fotografiados | `src/content/catalog.ts` | Nombres genéricos por familia, asignados a partir de las fotos |
| Foto `IMG_3080.HEIC` del zip | — | No incluida: formato HEIC sin soporte en el pipeline; enviar en JPG |
| Validación de iconos redibujados | `src/components/graphics/FerkorIcon.tsx` | Set propio en el trazo de la lámina |
| Logos vectoriales finales del diseñador | `public/branding` | Se usan los SVG vectorizados del sistema de diseño |
| Dominio y metadatos de producción | `src/app/layout.tsx` (`robots` está en `noindex`) | Maqueta no indexable |

## Fotografía real de productos

Las fotos del cliente (zip de oct. 2026) se recortaron con `rembg` (modelo isnet-general-use) y se compusieron sobre fondo blanco 1:1 con sombra de contacto suave. Resultado en `public/images/herramientas/*.webp` y datos en `src/content/catalog.ts`. Se descartaron fotos personales, capturas de pantalla y tomas cuyo recorte no quedó limpio (piezas sostenidas con la mano o sobre tela).

### Planos y esquemas propios

`src/components/graphics/ProductDrawings.tsx`: esquemas de envasadora vertical y flow pack (dónde trabaja cada pieza) y planos referenciales de cuchillo zigzag, cuchillo dentado, rodamiento de fricción y correa de arrastre. Se muestran en las páginas de producto ("Cómo funciona"). No son planos de fabricación.

Búsqueda de fotos en internet (oct. 2026): no se encontraron imágenes con licencia libre de estos productos específicos; las de catálogos de fabricantes tienen derechos y mostrarlas como productos de FERKOR sería engañoso. Las fotos débiles del cliente se mejoraron (color, contraste, nitidez) sin alterar la pieza.

## Fotografía provisional

Las fotos de ambiente (no los productos) vienen de `images.unsplash.com` (licencia Unsplash) y se cargan desde su CDN vía `next/image` (`remotePatterns` en `next.config.ts`). **No son trabajos ni instalaciones de FERKOR.** Al recibir fotografía propia, reemplazar en `src/content/images.ts`, marcar `provisional: false` y quitar el dominio de `next.config.ts`.

## Próximas fases

- **C — Revisión:** ajustes de la home según observaciones.
- **D — Páginas interiores:** Nosotros, Servicios (+ 4 detalles), Industrias, Trabajos y Contacto con formulario de cotización B2B (validación, adjuntos, estado "envío pendiente de integración", alternativa WhatsApp).
- **E — Auditoría:** accesibilidad, rendimiento, contenido pendiente, integridad de activos.
