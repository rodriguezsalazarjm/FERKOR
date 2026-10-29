import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/inner/PageHero";
import { LegalDoc, MailLink, type LegalSection } from "@/components/sections/inner/LegalDoc";
import { CookieSettingsButton } from "@/components/ui/CookieConsent";
import { CONSENT_COOKIE, CONSENT_MAX_AGE_DAYS } from "@/lib/consent";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies y almacenamiento usa el sitio de FERKOR, para qué sirven y cómo cambiar tus preferencias.",
  alternates: { canonical: "/cookies" },
};

/**
 * Política de cookies. Mantener la tabla al día con lo que el sitio realmente guarda:
 * hoy solo la cookie de consentimiento y el aviso de WhatsApp en sessionStorage.
 */
const sections: LegalSection[] = [
  {
    id: "que-son",
    title: "Qué son las cookies",
    body: (
      <p>
        Las cookies son pequeños archivos que un sitio guarda en tu navegador para recordar información entre visitas. Tecnologías
        parecidas, como el almacenamiento local del navegador, cumplen funciones similares; esta política se aplica a todas ellas.
      </p>
    ),
  },
  {
    id: "usamos",
    title: "Cookies que usamos",
    body: (
      <>
        <p>El sitio de FERKOR solo usa cookies y almacenamiento propios y necesarios:</p>
        <table>
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Tipo</th>
              <th scope="col">Finalidad</th>
              <th scope="col">Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-mono text-xs">{CONSENT_COOKIE}</td>
              <td>Cookie propia, necesaria</td>
              <td>Guarda tu elección sobre cookies para no volver a preguntarte.</td>
              <td>{CONSENT_MAX_AGE_DAYS} días</td>
            </tr>
            <tr>
              <td className="font-mono text-xs">fk-wa-bubble</td>
              <td>Almacenamiento de sesión propio, necesario</td>
              <td>Recuerda que cerraste el aviso de WhatsApp.</td>
              <td>Hasta cerrar la pestaña</td>
            </tr>
          </tbody>
        </table>
        <p>Estas cookies no requieren consentimiento porque sin ellas el sitio no puede recordar tus elecciones.</p>
      </>
    ),
  },
  {
    id: "no-usamos",
    title: "Cookies que no usamos",
    body: (
      <>
        <p>
          Hoy no usamos cookies de analítica, publicidad ni redes sociales. Las imágenes y fuentes se sirven desde nuestro propio dominio,
          sin cookies de terceros.
        </p>
        <p>
          Si en el futuro incorporamos herramientas de analítica o marketing, las agregaremos a esta tabla y solo se activarán si las
          aceptas en el aviso de cookies.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    title: "Enlaces a terceros",
    body: (
      <p>
        Los botones de WhatsApp abren el servicio de WhatsApp (Meta), que aplica sus propias cookies y políticas desde ese momento. FERKOR
        no controla esas cookies.
      </p>
    ),
  },
  {
    id: "preferencias",
    title: "Cambiar tus preferencias",
    body: (
      <>
        <p>Puedes aceptar, rechazar o configurar las cookies opcionales en cualquier momento:</p>
        <p>
          <CookieSettingsButton className="chamfer-sm inline-flex min-h-11 items-center bg-red px-5 text-sm font-semibold text-white hover:bg-red-hover" />
        </p>
        <p>
          También puedes borrar o bloquear las cookies desde la configuración de tu navegador. Si bloqueas la cookie de consentimiento,
          el aviso volverá a aparecer en cada visita.
        </p>
      </>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    body: (
      <p>
        Si tienes dudas sobre esta política escríbenos a <MailLink />. Para saber cómo tratamos tus datos personales revisa la{" "}
        <Link href="/privacidad" className="font-semibold text-ink underline underline-offset-2 hover:text-red">
          política de privacidad
        </Link>
        .
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero
        index="L3"
        label="Legal"
        title="Política de"
        accent="cookies."
        lead="Qué guarda este sitio en tu navegador, para qué sirve y cómo cambiar tus preferencias."
      />
      <LegalDoc
        current="/cookies"
        intro={<p>En resumen: el sitio de FERKOR solo usa cookies necesarias para funcionar. No usamos cookies de analítica ni de publicidad.</p>}
        sections={sections}
      />
    </>
  );
}
