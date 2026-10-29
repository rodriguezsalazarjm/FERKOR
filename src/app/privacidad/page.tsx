import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/inner/PageHero";
import { Controller, LegalDoc, MailLink, type LegalSection } from "@/components/sections/inner/LegalDoc";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo FERKOR recopila, usa y protege los datos personales que recibe a través de su sitio web, correo y WhatsApp.",
  alternates: { canonical: "/privacidad" },
};

/**
 * Política de privacidad (resumen para el usuario).
 * El detalle jurídico está en /tratamiento-de-datos. Marco: Ley 19.628 modificada por la Ley 21.719.
 * TODO(cliente): completar razón social y RUT en src/content/company.ts y revisar con asesoría legal.
 */
const sections: LegalSection[] = [
  {
    id: "responsable",
    title: "Quién es responsable",
    body: (
      <>
        <p>El responsable de los datos personales que recibimos por este sitio es:</p>
        <Controller />
      </>
    ),
  },
  {
    id: "datos",
    title: "Qué datos recopilamos",
    body: (
      <>
        <p>Solo los que tú nos entregas al contactarnos:</p>
        <ul>
          <li>
            <strong>Formulario de cotización:</strong> nombre, empresa, correo, teléfono o WhatsApp (opcional), servicio, tipo de pieza,
            descripción, cantidad y material.
          </li>
          <li>
            <strong>WhatsApp y correo:</strong> los mensajes, fotos, planos y archivos que nos envíes.
          </li>
          <li>
            <strong>Datos técnicos mínimos:</strong> registros del servidor (dirección IP, navegador, fecha y página visitada) que el
            proveedor de hosting genera por seguridad y funcionamiento.
          </li>
        </ul>
        <p>
          No pedimos datos sensibles ni datos bancarios por el sitio, y el sitio no está dirigido a menores de edad. Te pedimos no
          incluir datos de terceros que no sean necesarios para tu solicitud.
        </p>
      </>
    ),
  },
  {
    id: "uso",
    title: "Para qué los usamos",
    body: (
      <ul>
        <li>Responder tu solicitud, preparar la cotización y coordinar el trabajo.</li>
        <li>Mantener la relación comercial si llegas a ser cliente: despacho, facturación y postventa.</li>
        <li>Cumplir obligaciones legales, tributarias y contables.</li>
        <li>Proteger la seguridad del sitio y evitar envíos automatizados (spam).</li>
      </ul>
    ),
  },
  {
    id: "no-hacemos",
    title: "Lo que no hacemos",
    body: (
      <ul>
        <li>No vendemos ni arrendamos tus datos.</li>
        <li>No te enviamos publicidad sin tu autorización.</li>
        <li>No tomamos decisiones automatizadas ni elaboramos perfiles con tus datos.</li>
        <li>No usamos cookies de analítica ni de publicidad (ver la política de cookies).</li>
      </ul>
    ),
  },
  {
    id: "compartir",
    title: "Con quién los compartimos",
    body: (
      <p>
        Solo con proveedores que necesitamos para operar —hosting del sitio, correo electrónico y mensajería— y con autoridades
        cuando la ley lo exija. Algunos de estos proveedores procesan datos fuera de Chile. El detalle está en la{" "}
        <Link href="/tratamiento-de-datos#encargados" className="font-semibold text-ink underline underline-offset-2 hover:text-red">
          política de tratamiento de datos
        </Link>
        .
      </p>
    ),
  },
  {
    id: "plazo",
    title: "Cuánto tiempo los guardamos",
    body: (
      <p>
        Las solicitudes que no terminan en una venta se conservan hasta 24 meses. Los datos de clientes se conservan mientras dure la
        relación comercial y luego durante los plazos que exige la ley tributaria y contable. Después se eliminan o anonimizan.
      </p>
    ),
  },
  {
    id: "derechos",
    title: "Tus derechos",
    body: (
      <>
        <p>
          Puedes pedir acceso, rectificación, supresión, oposición, portabilidad y bloqueo de tus datos, y retirar tu consentimiento
          cuando quieras. Escríbenos a <MailLink /> indicando tu nombre, tu solicitud y un medio para responderte. Te contestaremos en
          un máximo de 30 días corridos.
        </p>
        <p>
          Si no quedas conforme con nuestra respuesta, puedes reclamar ante la Agencia de Protección de Datos Personales. Más detalles en
          la{" "}
          <Link href="/tratamiento-de-datos#derechos" className="font-semibold text-ink underline underline-offset-2 hover:text-red">
            política de tratamiento de datos
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "Seguridad",
    body: (
      <p>
        El sitio funciona solo con conexión cifrada (HTTPS). El acceso a los correos y mensajes está limitado a las personas de FERKOR
        que atienden tu solicitud, con cuentas protegidas por contraseña.
      </p>
    ),
  },
  {
    id: "cambios",
    title: "Cambios a esta política",
    body: <p>Si cambiamos esta política publicaremos la nueva versión en esta página con su fecha de actualización.</p>,
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <PageHero
        index="L1"
        label="Legal"
        title="Política de"
        accent="privacidad."
        lead="Cómo usamos y protegemos los datos que nos envías al cotizar por el sitio, el correo o WhatsApp."
      />
      <LegalDoc
        current="/privacidad"
        intro={
          <p>
            En FERKOR usamos tus datos solo para responder tus solicitudes y atenderte como cliente. Esta política resume cómo lo hacemos,
            conforme a la Ley N° 19.628 sobre protección de datos personales, modificada por la Ley N° 21.719.
          </p>
        }
        sections={sections}
      />
    </>
  );
}
