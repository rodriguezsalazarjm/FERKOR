"use client";

import { useState, useTransition, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { allServices } from "@/content/services";
import { products } from "@/content/products";
import { company, whatsappHref } from "@/content/company";
import { quoteSummary, validateQuote, type QuoteErrors, type QuoteValues } from "@/lib/quote";
import { sendQuote, type SendQuoteResult } from "@/app/contacto/actions";

const toolTypes = [
  "Cuchillo circular",
  "Cuchillo dentado / zigzag",
  "Cuchillo rectangular / guillotina",
  "Picado y prepicado",
  "Pieza mecanizada",
  "Repuesto (rodamiento, correa)",
  "Otro / no estoy seguro",
];

type Values = QuoteValues;
type Errors = QuoteErrors;

/** Servicio solicitado: servicios y líneas de producto. */
const requestOptions = [...allServices, ...products].map((s) => s.title);

/**
 * Formulario de cotización B2B.
 * Se envía por correo a FERKOR (Server Action `sendQuote`). Si el envío falla o no
 * está configurado, se muestra el resumen con la alternativa por WhatsApp.
 */
export function QuoteForm() {
  const params = useSearchParams();
  const pre = params.get("servicio") ?? "";
  const preService = [...allServices, ...products].find((s) => s.title === pre || s.slug === pre)?.title ?? "";

  const [values, setValues] = useState<Values>({
    nombre: "",
    empresa: "",
    correo: "",
    whatsapp: "",
    servicio: preService,
    herramienta: "",
    descripcion: "",
    cantidad: "",
    material: "",
  });
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<SendQuoteResult | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const [sending, startSending] = useTransition();

  const set = (k: keyof Values) => (ev: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validateQuote(values, consent);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`q-${first}`)?.focus();
      return;
    }
    startSending(async () => {
      let r: SendQuoteResult;
      try {
        r = await sendQuote(values, consent, honeypot);
      } catch {
        r = { ok: false, reason: "failed" };
      }
      setResult(r);
      requestAnimationFrame(() => {
        const el = document.getElementById("q-summary");
        el?.scrollIntoView({ block: "start" });
        el?.focus({ preventScroll: true });
      });
    });
  };

  if (result?.ok) {
    const wa = whatsappHref(`Hola FERKOR, soy ${values.nombre} de ${values.empresa}. Acabo de enviar una cotización por la web; les adjunto fotos o planos de la pieza.`);
    return (
      <div id="q-summary" tabIndex={-1} className="scroll-mt-24 border-2 border-ink bg-white p-7 outline-none md:p-10" role="status">
        <p className="mono-index text-red">Solicitud enviada</p>
        <h2 className="display mt-4 text-4xl text-ink md:text-5xl">Recibimos tu solicitud</h2>
        <p className="mt-4 max-w-xl text-ink/75">
          Gracias, {values.nombre}. Te responderemos a {values.correo}.
          {wa && " Si tienes fotos o planos de la pieza, envíalos por WhatsApp para cotizar más rápido."}
        </p>
        {wa && (
          <div className="mt-6">
            <a href={wa} target="_blank" rel="noopener noreferrer" className="chamfer-sm inline-flex min-h-12 items-center justify-center bg-red px-6 font-semibold text-white hover:bg-red-hover">
              Enviar fotos por WhatsApp
            </a>
          </div>
        )}
      </div>
    );
  }

  if (result) {
    const summary = quoteSummary(values);
    const wa = whatsappHref(summary);
    const mail = company.contact.email;
    return (
      <div id="q-summary" tabIndex={-1} className="scroll-mt-24 border-2 border-ink bg-white p-7 outline-none md:p-10" role="status">
        <p className="mono-index text-red">No se pudo enviar</p>
        <h2 className="display mt-4 text-4xl text-ink md:text-5xl">Envía tu solicitud por otra vía</h2>
        <p className="mt-4 max-w-xl text-ink/75">
          No pudimos enviar el formulario en este momento y tus datos no se guardaron.
          {wa && " Envíala por WhatsApp con un clic y adjunta en el chat las fotos o planos de la pieza."}
          {mail && (
            <>
              {" "}También puedes escribirnos a{" "}
              <a href={`mailto:${mail}`} className="font-semibold text-ink underline underline-offset-2 hover:text-red">
                {mail}
              </a>
              .
            </>
          )}
        </p>
        <pre className="mt-6 overflow-x-auto bg-paper p-5 font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-ink">{summary}</pre>
        <div className="mt-6 flex flex-col gap-3 xs:flex-row">
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="chamfer-sm inline-flex min-h-12 items-center justify-center bg-red px-6 font-semibold text-white hover:bg-red-hover">
              Enviar por WhatsApp
            </a>
          )}
          <button type="button" onClick={() => setResult(null)} className="inline-flex min-h-12 items-center justify-center border border-ink px-6 font-semibold text-ink hover:bg-ink hover:text-white">
            Editar solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="relative bg-white p-6 md:p-10" aria-describedby="q-note">
      {/* Trampa para bots: oculta para personas y lectores de pantalla. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="q-sitio">Sitio web</label>
        <input id="q-sitio" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(ev) => setHoneypot(ev.target.value)} />
      </div>
      <fieldset>
        <legend className="mono-index text-red">01 · Tus datos</legend>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Field id="nombre" label="Nombre" required value={values.nombre} onChange={set("nombre")} error={errors.nombre} autoComplete="name" />
          <Field id="empresa" label="Empresa" required value={values.empresa} onChange={set("empresa")} error={errors.empresa} autoComplete="organization" />
          <Field id="correo" label="Correo" type="email" required value={values.correo} onChange={set("correo")} error={errors.correo} autoComplete="email" />
          <Field id="whatsapp" label="Teléfono / WhatsApp" type="tel" value={values.whatsapp} onChange={set("whatsapp")} error={errors.whatsapp} autoComplete="tel" hint="Opcional. Te respondemos más rápido." />
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className="mono-index text-red">02 · Tu requerimiento</legend>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Select id="servicio" label="Servicio" required value={values.servicio} onChange={set("servicio")} error={errors.servicio} options={requestOptions} />
          <Select id="herramienta" label="Tipo de herramienta o pieza" value={values.herramienta} onChange={set("herramienta")} options={toolTypes} />
          <div className="md:col-span-2">
            <Field
              id="descripcion"
              label="Descripción"
              required
              textarea
              value={values.descripcion}
              onChange={set("descripcion")}
              error={errors.descripcion}
              hint="Qué pieza es, en qué máquina trabaja, qué problema tiene y medidas si las conoces."
            />
          </div>
          <Field id="cantidad" label="Cantidad" inputMode="numeric" value={values.cantidad} onChange={set("cantidad")} error={errors.cantidad} mono />
          <Field id="material" label="Material, si lo conoces" value={values.material} onChange={set("material")} />
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className="mono-index text-red">03 · Fotos o planos</legend>
        {/* Adjuntos por WhatsApp (decisión del cliente, oct. 2026): el formulario envía solo texto. */}
        <div className="mt-5 flex gap-4 border border-dashed border-steel-line bg-paper px-5 py-6">
          <MessageCircle size={22} strokeWidth={1.75} aria-hidden="true" className="mt-0.5 shrink-0 text-red" />
          <p className="text-sm text-ink/80">
            <span className="block font-semibold text-ink">Envía las fotos o planos de tu pieza por WhatsApp.</span>
            Después de enviar el formulario podrás mandarnos las imágenes por WhatsApp: una foto con una huincha al lado nos
            ayuda a identificar la pieza.
          </p>
        </div>
      </fieldset>

      <div className="mt-8">
        <label htmlFor="q-consentimiento" className="flex cursor-pointer gap-3 text-sm text-ink/80">
          <input
            id="q-consentimiento"
            type="checkbox"
            checked={consent}
            onChange={(ev) => {
              setConsent(ev.target.checked);
              setErrors((e) => ({ ...e, consentimiento: undefined }));
            }}
            aria-describedby={errors.consentimiento ? "q-consentimiento-msg" : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 accent-red"
          />
          <span>
            Acepto que FERKOR use mis datos para responder esta solicitud, según la{" "}
            <Link href="/privacidad" className="font-semibold text-ink underline underline-offset-2 hover:text-red">
              política de privacidad
            </Link>{" "}
            y la{" "}
            <Link href="/tratamiento-de-datos" className="font-semibold text-ink underline underline-offset-2 hover:text-red">
              política de tratamiento de datos
            </Link>
            . *
          </span>
        </label>
        {errors.consentimiento && (
          <p id="q-consentimiento-msg" className="mt-2 text-sm font-medium text-danger">
            Error: {errors.consentimiento}
          </p>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <p id="q-note" className="max-w-md text-sm text-steel">
          Los campos marcados con * son obligatorios. Tu solicitud llega por correo a FERKOR.
        </p>
        <button type="submit" disabled={sending} aria-busy={sending} className="chamfer-sm inline-flex min-h-13 items-center justify-center bg-red px-8 font-semibold text-white transition-colors hover:bg-red-hover disabled:cursor-wait disabled:opacity-70">
          {sending ? "Enviando…" : "Enviar solicitud"}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (ev: { target: { value: string } }) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  textarea?: boolean;
  mono?: boolean;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric";
};

const control =
  "w-full rounded-sm border bg-white px-3.5 py-3 text-ink outline-none transition-colors placeholder:text-steel focus-visible:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

function Field({ id, label, value, onChange, error, hint, required, textarea, mono, type = "text", autoComplete, inputMode }: FieldProps) {
  const fid = `q-${id}`;
  const msg = error || hint ? `${fid}-msg` : undefined;
  const cls = `${control} ${error ? "border-danger" : "border-steel-line"} ${mono ? "font-mono" : ""}`;
  return (
    <div>
      <label htmlFor={fid} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      {textarea ? (
        <textarea id={fid} rows={5} value={value} onChange={onChange} required={required} aria-invalid={!!error} aria-describedby={msg} className={cls} />
      ) : (
        <input id={fid} type={type} value={value} onChange={onChange} required={required} aria-invalid={!!error} aria-describedby={msg} autoComplete={autoComplete} inputMode={inputMode} className={cls} />
      )}
      {error ? (
        <p id={msg} className="mt-1.5 text-sm font-medium text-danger">
          Error: {error}
        </p>
      ) : hint ? (
        <p id={msg} className="mt-1.5 text-sm text-steel">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

function Select({ id, label, value, onChange, error, options, required }: Omit<FieldProps, "hint"> & { options: string[] }) {
  const fid = `q-${id}`;
  return (
    <div>
      <label htmlFor={fid} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-red"> *</span>}
      </label>
      <select id={fid} value={value} onChange={onChange} required={required} aria-invalid={!!error} aria-describedby={error ? `${fid}-msg` : undefined} className={`${control} ${error ? "border-danger" : "border-steel-line"}`}>
        <option value="">Selecciona…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${fid}-msg`} className="mt-1.5 text-sm font-medium text-danger">
          Error: {error}
        </p>
      )}
    </div>
  );
}
