"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { CONSENT_EVENT, OPEN_SETTINGS_EVENT, openCookieSettings, readConsent, saveConsent, type OptionalCategory } from "@/lib/consent";

function subscribe(cb: () => void) {
  window.addEventListener(CONSENT_EVENT, cb);
  return () => window.removeEventListener(CONSENT_EVENT, cb);
}

const categories: { id: OptionalCategory | "necesarias"; title: string; text: string }[] = [
  {
    id: "necesarias",
    title: "Necesarias",
    text: "Permiten que el sitio funcione y recuerdan tu elección sobre cookies. No se pueden desactivar.",
  },
  {
    id: "analitica",
    title: "Analítica",
    text: "Medirían de forma agregada cómo se usa el sitio para mejorarlo. Hoy no usamos ninguna; solo se activarían con tu permiso.",
  },
  {
    id: "marketing",
    title: "Marketing",
    text: "Permitirían medir campañas o mostrar publicidad relacionada. Hoy no usamos ninguna; solo se activarían con tu permiso.",
  },
];

/** Banner de cookies (aceptar todas, rechazar opcionales, configurar) y panel de preferencias. */
export function CookieConsent() {
  // En el servidor se asume "ya decidido" para no pintar el banner antes de leer la cookie.
  const decided = useSyncExternalStore(subscribe, () => readConsent() !== null, () => true);
  const [choice, setChoice] = useState<Record<OptionalCategory, boolean>>({ analitica: false, marketing: false });
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const open = () => {
      const c = readConsent();
      if (c) setChoice({ analitica: c.analitica, marketing: c.marketing });
      dialog.current?.showModal();
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, open);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open);
  }, []);

  const decide = (c: Record<OptionalCategory, boolean>) => {
    saveConsent(c);
    setChoice(c);
    dialog.current?.close();
  };

  return (
    <>
      {!decided && (
        <section
          aria-label="Aviso de cookies"
          className="on-dark fixed inset-x-0 bottom-0 z-[60] border-t-2 border-red bg-ink text-white shadow-[0_-12px_40px_rgba(0,0,0,0.35)] md:inset-x-auto md:bottom-5 md:left-5 md:max-w-md md:border-2"
        >
          <div className="p-5 md:p-6">
            <p className="mono-index text-red-light">Cookies</p>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              Usamos solo cookies necesarias para que el sitio funcione. Si en el futuro sumamos analítica o marketing, se
              activarán solo con tu permiso. Más información en la{" "}
              <Link href="/cookies" className="font-semibold text-white underline underline-offset-2 hover:text-red-light">
                política de cookies
              </Link>
              .
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button type="button" onClick={() => decide({ analitica: true, marketing: true })} className="chamfer-sm col-span-2 min-h-11 bg-red px-4 text-sm font-semibold text-white hover:bg-red-hover">
                Aceptar todas
              </button>
              <button type="button" onClick={() => decide({ analitica: false, marketing: false })} className="min-h-11 border border-white/40 px-4 text-sm font-semibold text-white hover:bg-white hover:text-ink">
                Solo necesarias
              </button>
              <button type="button" onClick={() => dialog.current?.showModal()} className="min-h-11 border border-white/40 px-4 text-sm font-semibold text-white hover:bg-white hover:text-ink">
                Configurar
              </button>
            </div>
          </div>
        </section>
      )}

      <dialog
        ref={dialog}
        aria-labelledby="ck-title"
        className="m-auto w-[min(100%-2rem,34rem)] bg-white p-0 text-ink backdrop:bg-ink/70"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line p-6">
          <div>
            <p className="mono-index text-red">Preferencias</p>
            <h2 id="ck-title" className="display mt-2 text-3xl">
              Configurar cookies
            </h2>
          </div>
          <button type="button" onClick={() => dialog.current?.close()} aria-label="Cerrar" className="-m-2 p-2 text-steel hover:text-ink">
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <ul className="divide-y divide-line px-6">
          {categories.map((c) => {
            const fixed = c.id === "necesarias";
            const checked = fixed || choice[c.id as OptionalCategory];
            return (
              <li key={c.id} className="flex items-start justify-between gap-5 py-5">
                <div>
                  <label htmlFor={`ck-${c.id}`} className="font-semibold">
                    {c.title}
                  </label>
                  <p id={`ck-${c.id}-desc`} className="mt-1 text-sm text-ink/70">
                    {c.text}
                  </p>
                </div>
                <input
                  id={`ck-${c.id}`}
                  type="checkbox"
                  role="switch"
                  checked={checked}
                  disabled={fixed}
                  aria-describedby={`ck-${c.id}-desc`}
                  onChange={(ev) => setChoice((s) => ({ ...s, [c.id]: ev.target.checked }))}
                  className="mt-1 h-5 w-5 shrink-0 accent-red disabled:opacity-60"
                />
              </li>
            );
          })}
        </ul>
        <div className="grid gap-2 border-t border-line p-6 xs:grid-cols-3">
          <button type="button" onClick={() => decide({ analitica: false, marketing: false })} className="min-h-11 border border-ink px-3 text-sm font-semibold hover:bg-ink hover:text-white">
            Solo necesarias
          </button>
          <button type="button" onClick={() => decide(choice)} className="min-h-11 border border-ink px-3 text-sm font-semibold hover:bg-ink hover:text-white">
            Guardar selección
          </button>
          <button type="button" onClick={() => decide({ analitica: true, marketing: true })} className="chamfer-sm min-h-11 bg-red px-3 text-sm font-semibold text-white hover:bg-red-hover">
            Aceptar todas
          </button>
        </div>
      </dialog>
    </>
  );
}

/** Enlace para reabrir el panel de cookies (footer, política de cookies). */
export function CookieSettingsButton({ className = "", children = "Configurar cookies" }: { className?: string; children?: React.ReactNode }) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {children}
    </button>
  );
}
