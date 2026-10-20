/**
 * Tokens de marca FERKOR.
 *
 * Fuente: sistema de diseño FERKOR (lámina de identidad en rojo, V2.0).
 * El brief inicial proponía valores aproximados (#17191C, #C92F32, #142B3A);
 * se usan los de la lámina aprobada. Para cambiarlos, editar aquí y en
 * `src/app/globals.css` (bloque @theme), que es donde Tailwind los consume.
 */
export const brand = {
  name: "FERKOR",
  descriptor: "Soluciones de Corte Industrial",
  concept: "La precisión no es opcional.",
  claim: ["Precisión para cortar.", "Respuesta para producir."],
  colors: {
    negroIndustrial: "#0B0B0D",
    negro800: "#16171A",
    negro700: "#22242A",
    rojoTecnico: "#D11B1B",
    rojoHover: "#B01515",
    rojoClaro: "#FF5247",
    grisAcero: "#6B6F76",
    blancoTecnico: "#F4F5F6",
    azulBlueprint: "#0E2A47",
    blueprintLinea: "#5C98D6",
  },
  logos: {
    principalNegro: "/branding/ferkor-logo-negro.svg",
    principalBlanco: "/branding/ferkor-logo-blanco.svg",
    rojoBlanco: "/branding/ferkor-logo-rojo-blanco.svg",
    rojoNegro: "/branding/ferkor-logo-rojo-negro.svg",
    wordmarkBlanco: "/branding/ferkor-wordmark-blanco.svg",
    wordmarkNegro: "/branding/ferkor-wordmark-negro.svg",
    isotipoRojo: "/branding/ferkor-isotipo-rojo.svg",
    isotipoBlanco: "/branding/ferkor-isotipo-blanco.svg",
    isotipoNegro: "/branding/ferkor-isotipo-negro.svg",
  },
  /** Proporciones de los SVG oficiales (viewBox), para reservar espacio sin deformar. */
  logoRatios: {
    principal: 7921 / 1370,
    wordmark: 6407 / 883,
    isotipo: 1778 / 1370,
  },
} as const;
