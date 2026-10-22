"use client";

import { useId, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Paperclip, X } from "lucide-react";
import { allServices } from "@/content/services";
import { whatsappHref } from "@/content/company";

const toolTypes = [
  "Cuchillo circular",
  "Cuchillo dentado / zigzag",
  "Cuchillo rectangular / guillotina",
  "Picado y prepicado",
  "Pieza mecanizada",
  "Repuesto (rodamiento, correa)",
  "Otro / no estoy seguro",
];

const MAX_FILE_MB = 15;

type Values = {
  nombre: string;
  empresa: string;
  correo: string;
  whatsapp: string;
  servicio: string;
  herramienta: string;
  descripcion: string;
  cantidad: string;
  material: string;
};
type Errors = Partial<Record<keyof Values | "archivos", string>>;

function validate(v: Values, files: File[]): Errors {
  const e: Errors = {};
  if (!v.nombre.trim()) e.nombre = "Ingresa tu nombre.";
  if (!v.empresa.trim()) e.empresa = "Ingresa el nombre de tu empresa.";
  if (!/^\S+@\S+\.\S+$/.test(v.correo.trim())) e.correo = "Ingresa un correo válido.";
  if (v.whatsapp.trim() && !/^[+\d\s()-]{8,}$/.test(v.whatsapp.trim())) e.whatsapp = "Revisa el número (ej. +56 9 1234 5678).";
  if (!v.servicio) e.servicio = "Elige el servicio.";
  if (v.descripcion.trim().length < 15) e.descripcion = "Cuéntanos un poco más (mínimo 15 caracteres).";
  if (v.cantidad.trim() && !/^\d+$/.test(v.cantidad.trim())) e.cantidad = "Usa solo números.";
  if (files.some((f) => f.size > MAX_FILE_MB * 1024 * 1024)) e.archivos = `Cada archivo debe pesar menos de ${MAX_FILE_MB} MB.`;
  return e;
}

/**
 * Formulario de cotización B2B (maqueta).
 * El envío al servidor está PENDIENTE de integración: al validar se muestra un
 * resumen y la alternativa por WhatsApp. No se simula un envío exitoso.
 */
export function QuoteForm() {
  const params = useSearchParams();
  const pre = params.get("servicio") ?? "";
  const preService = allServices.find((s) => s.title === pre || s.slug === pre)?.title ?? "";

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
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [ready, setReady] = useState(false);
  const fileId = useId();

  const set = (k: keyof Values) => (ev: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate(values, files);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`q-${first}`)?.focus();
      return;
    }
    setReady(true);
    requestAnimationFrame(() => {
      const el = document.getElementById("q-summary");
      el?.scrollIntoView({ block: "start" });
      el?.focus({ preventScroll: true });
    });
  };

  if (ready) {
    const summary = [
      `Cotización FERKOR`,
      `Nombre: ${values.nombre}`,
      `Empresa: ${values.empresa}`,
      `Correo: ${values.correo}`,
      values.whatsapp && `WhatsApp: ${values.whatsapp}`,
      `Servicio: ${values.servicio}`,
      values.herramienta && `Herramienta: ${values.herramienta}`,
      values.cantidad && `Cantidad: ${values.cantidad}`,
      values.material && `Material: ${values.material}`,
      `Descripción: ${values.descripcion}`,
      files.length ? `Archivos: ${files.map((f) => f.name).join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const wa = whatsappHref(summary);
    return (
      <div id="q-summary" tabIndex={-1} className="scroll-mt-24 border-2 border-ink bg-white p-7 outline-none md:p-10" role="status">
        <p className="mono-index text-red">Solicitud lista · envío pendiente de integración</p>
        <h2 className="display mt-4 text-4xl text-ink md:text-5xl">Revisa tu solicitud</h2>
        <p className="mt-4 max-w-xl text-ink/75">
          Esta versión del sitio todavía no envía formularios a FERKOR. Tus datos no se han enviado ni guardado.
          {wa ? " Puedes enviarlos ahora por WhatsApp con un clic." : " Pronto podrás enviarlos desde aquí o por WhatsApp."}
        </p>
        <pre className="mt-6 overflow-x-auto bg-paper p-5 font-mono text-[13px] leading-relaxed whitespace-pre-wrap text-ink">{summary}</pre>
        <div className="mt-6 flex flex-col gap-3 xs:flex-row">
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="chamfer-sm inline-flex min-h-12 items-center justify-center bg-red px-6 font-semibold text-white hover:bg-red-hover">
              Enviar por WhatsApp
            </a>
          )}
          <button type="button" onClick={() => setReady(false)} className="inline-flex min-h-12 items-center justify-center border border-ink px-6 font-semibold text-ink hover:bg-ink hover:text-white">
            Editar solicitud
          </button>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="bg-white p-6 md:p-10" aria-describedby="q-note">
      <fieldset>
        <legend className="mono-index text-red">01 · Tus datos</legend>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Field id="nombre" label="Nombre" required value={values.nombre} onChange={set("nombre")} error={errors.nombre} autoComplete="name" />
          <Field id="empresa" label="Empresa" required value={values.empresa} onChange={set("empresa")} error={errors.empresa} autoComplete="organization" />
          <Field id="correo" label="Correo" type="email" required value={values.correo} onChange={set("correo")} error={errors.correo} autoComplete="email" />
          <Field id="whatsapp" label="WhatsApp" type="tel" value={values.whatsapp} onChange={set("whatsapp")} error={errors.whatsapp} autoComplete="tel" hint="Opcional. Te respondemos más rápido." />
        </div>
      </fieldset>

      <fieldset className="mt-10">
        <legend className="mono-index text-red">02 · Tu requerimiento</legend>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Select id="servicio" label="Servicio" required value={values.servicio} onChange={set("servicio")} error={errors.servicio} options={allServices.map((s) => s.title)} />
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
        <label
          htmlFor={fileId}
          className="mt-5 flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-steel-line bg-paper px-6 py-8 text-center transition-colors hover:border-ink focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ink"
        >
          <Paperclip size={22} strokeWidth={1.75} aria-hidden="true" />
          <span className="font-semibold text-ink">Adjuntar fotografías o planos</span>
          <span className="text-sm text-steel">JPG, PNG, PDF, DWG o DXF · máx. {MAX_FILE_MB} MB por archivo</span>
          <input
            id={fileId}
            type="file"
            multiple
            accept="image/*,.pdf,.dwg,.dxf"
            className="sr-only"
            aria-describedby={errors.archivos ? "q-archivos-msg" : undefined}
            onChange={(ev) => {
              const list = Array.from(ev.target.files ?? []);
              setFiles((f) => [...f, ...list]);
              ev.target.value = "";
              setErrors((e) => ({ ...e, archivos: undefined }));
            }}
          />
        </label>
        {files.length > 0 && (
          <ul className="mt-3 divide-y divide-line border border-line" aria-label="Archivos seleccionados">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-4 px-4 py-2.5 text-sm">
                <span className="truncate font-mono text-ink">{f.name}</span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="font-mono text-xs text-steel">{(f.size / 1024 / 1024).toFixed(1)} MB</span>
                  <button type="button" onClick={() => setFiles((all) => all.filter((_, j) => j !== i))} className="p-1 text-steel hover:text-red" aria-label={`Quitar ${f.name}`}>
                    <X size={16} />
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}
        {errors.archivos && (
          <p id="q-archivos-msg" className="mt-2 text-sm font-medium text-danger">
            Error: {errors.archivos}
          </p>
        )}
      </fieldset>

      <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
        <p id="q-note" className="max-w-md text-sm text-steel">
          Los campos marcados con * son obligatorios. Maqueta: el envío a FERKOR está pendiente de integración.
        </p>
        <button type="submit" className="chamfer-sm inline-flex min-h-13 items-center justify-center bg-red px-8 font-semibold text-white transition-colors hover:bg-red-hover">
          Revisar solicitud
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
