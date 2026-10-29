import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/inner/PageHero";
import { Controller, LegalDoc, MailLink, type LegalSection } from "@/components/sections/inner/LegalDoc";

export const metadata: Metadata = {
  title: "Política de tratamiento de datos personales",
  description: "Bases de licitud, finalidades, encargados, transferencias, plazos de conservación y ejercicio de derechos en FERKOR.",
  alternates: { canonical: "/tratamiento-de-datos" },
};

/**
 * Política de tratamiento de datos personales (documento detallado).
 * Marco: Ley 19.628 modificada por la Ley 21.719. Encargados según la infraestructura real del sitio.
 * TODO(cliente): completar razón social y RUT en src/content/company.ts y revisar con asesoría legal.
 */
const sections: LegalSection[] = [
  {
    id: "responsable",
    title: "Responsable del tratamiento",
    body: <Controller />,
  },
  {
    id: "alcance",
    title: "Alcance",
    body: (
      <p>
        Esta política se aplica a los datos personales que FERKOR trata a través de su sitio web, su correo electrónico y su canal de
        WhatsApp, en relación con potenciales clientes, clientes y personas de contacto de empresas.
      </p>
    ),
  },
  {
    id: "finalidades",
    title: "Finalidades y bases de licitud",
    body: (
      <table>
        <thead>
          <tr>
            <th scope="col">Finalidad</th>
            <th scope="col">Datos</th>
            <th scope="col">Base de licitud</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Responder solicitudes y preparar cotizaciones</td>
            <td>Identificación, contacto, empresa y detalle del requerimiento</td>
            <td>Consentimiento del titular y medidas precontractuales a su solicitud</td>
          </tr>
          <tr>
            <td>Ejecutar el trabajo, despachar, facturar y dar postventa</td>
            <td>Identificación, contacto, empresa, datos tributarios</td>
            <td>Ejecución del contrato</td>
          </tr>
          <tr>
            <td>Cumplir obligaciones tributarias y contables</td>
            <td>Datos de facturación</td>
            <td>Obligación legal</td>
          </tr>
          <tr>
            <td>Seguridad del sitio y prevención de abuso</td>
            <td>Registros técnicos (IP, navegador, fecha)</td>
            <td>Interés legítimo</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: "origen",
    title: "Origen de los datos",
    body: (
      <p>
        Los datos los entrega directamente el titular o la empresa para la que trabaja. FERKOR no compra bases de datos ni obtiene datos
        de fuentes de terceros para fines comerciales.
      </p>
    ),
  },
  {
    id: "encargados",
    title: "Encargados y destinatarios",
    body: (
      <>
        <p>Para operar, FERKOR utiliza los siguientes proveedores, que tratan datos por cuenta de FERKOR o como servicios independientes:</p>
        <table>
          <thead>
            <tr>
              <th scope="col">Proveedor</th>
              <th scope="col">Servicio</th>
              <th scope="col">Ubicación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vercel Inc.</td>
              <td>Hosting del sitio y envío del formulario</td>
              <td>Estados Unidos</td>
            </tr>
            <tr>
              <td>Titan (Flock FZ-LLC), vía HostGator</td>
              <td>Correo electrónico contacto@ferkor.cl</td>
              <td>Estados Unidos / otros</td>
            </tr>
            <tr>
              <td>WhatsApp (Meta Platforms)</td>
              <td>Mensajería, cuando eliges escribirnos por WhatsApp</td>
              <td>Estados Unidos / otros</td>
            </tr>
          </tbody>
        </table>
        <p>
          WhatsApp se rige además por sus propias condiciones y política de privacidad. FERKOR también puede comunicar datos a
          autoridades cuando una ley o resolución lo exija.
        </p>
      </>
    ),
  },
  {
    id: "transferencias",
    title: "Transferencias internacionales",
    body: (
      <p>
        Por los proveedores indicados, algunos datos se almacenan o procesan fuera de Chile. FERKOR elige proveedores que declaran
        medidas de seguridad y protección de datos adecuadas, y limita lo transferido a lo necesario para prestar el servicio.
      </p>
    ),
  },
  {
    id: "conservacion",
    title: "Plazos de conservación",
    body: (
      <ul>
        <li>
          <strong>Solicitudes sin venta:</strong> hasta 24 meses desde el último contacto, para dar seguimiento y responder consultas
          relacionadas.
        </li>
        <li>
          <strong>Clientes:</strong> mientras dure la relación comercial y luego durante los plazos de prescripción y los que exige la
          normativa tributaria y contable.
        </li>
        <li>
          <strong>Registros técnicos del sitio:</strong> según los plazos del proveedor de hosting, por lo general semanas.
        </li>
      </ul>
    ),
  },
  {
    id: "derechos",
    title: "Derechos del titular",
    body: (
      <>
        <p>Como titular de los datos puedes ejercer los derechos de:</p>
        <ul>
          <li>
            <strong>Acceso:</strong> saber qué datos tuyos tratamos, para qué y con quién los compartimos.
          </li>
          <li>
            <strong>Rectificación:</strong> corregir datos inexactos o incompletos.
          </li>
          <li>
            <strong>Supresión:</strong> pedir que se eliminen cuando ya no sean necesarios o retires tu consentimiento.
          </li>
          <li>
            <strong>Oposición:</strong> oponerte a un tratamiento determinado.
          </li>
          <li>
            <strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.
          </li>
          <li>
            <strong>Bloqueo:</strong> pedir la suspensión temporal del tratamiento mientras se resuelve otra solicitud.
          </li>
        </ul>
        <p>
          <strong>Cómo ejercerlos:</strong> escribe a <MailLink /> con el asunto “Datos personales”, indicando tu nombre, el derecho que
          quieres ejercer y un medio de contacto. Podemos pedirte información adicional para verificar tu identidad. El trámite es
          gratuito y responderemos en un máximo de 30 días corridos.
        </p>
        <p>
          Si tu solicitud es rechazada o no recibes respuesta, puedes reclamar ante la Agencia de Protección de Datos Personales, sin
          perjuicio de las demás acciones que te correspondan.
        </p>
      </>
    ),
  },
  {
    id: "consentimiento",
    title: "Retiro del consentimiento",
    body: (
      <p>
        Puedes retirar tu consentimiento en cualquier momento, sin efecto retroactivo, escribiendo a <MailLink />. Las preferencias de
        cookies se cambian desde la{" "}
        <Link href="/cookies" className="font-semibold text-ink underline underline-offset-2 hover:text-red">
          política de cookies
        </Link>
        .
      </p>
    ),
  },
  {
    id: "seguridad",
    title: "Medidas de seguridad",
    body: (
      <ul>
        <li>Conexión cifrada (HTTPS) en todo el sitio y en el envío del formulario.</li>
        <li>Acceso al correo y a WhatsApp limitado al personal que atiende las solicitudes.</li>
        <li>Validación de datos y filtros contra envíos automatizados en el formulario.</li>
        <li>
          Si ocurre una vulneración de seguridad que afecte tus datos, la informaremos a la autoridad y a los afectados cuando la ley lo
          exija.
        </li>
      </ul>
    ),
  },
  {
    id: "decisiones",
    title: "Decisiones automatizadas",
    body: <p>FERKOR no toma decisiones basadas únicamente en tratamientos automatizados ni elabora perfiles de los titulares.</p>,
  },
  {
    id: "cambios",
    title: "Actualizaciones",
    body: (
      <p>
        Esta política puede actualizarse por cambios legales o en nuestros servicios. La versión vigente es siempre la publicada en esta
        página, con su fecha de última actualización.
      </p>
    ),
  },
];

export default function TratamientoDatosPage() {
  return (
    <>
      <PageHero
        index="L2"
        label="Legal"
        title="Tratamiento de"
        accent="datos personales."
        lead="El detalle de cómo FERKOR trata los datos personales: finalidades, bases legales, proveedores, plazos y cómo ejercer tus derechos."
      />
      <LegalDoc
        current="/tratamiento-de-datos"
        intro={
          <p>
            Esta política complementa la{" "}
            <Link href="/privacidad" className="font-semibold text-ink underline underline-offset-2 hover:text-red">
              política de privacidad
            </Link>{" "}
            y se rige por la Ley N° 19.628 sobre protección de datos personales, modificada por la Ley N° 21.719.
          </p>
        }
        sections={sections}
      />
    </>
  );
}
