"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { whatsappHref, waMessages } from "@/content/company";

const DISMISS_KEY = "fk-wa-bubble";

/** Logotipo oficial de WhatsApp (glifo de marca). */
export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

/** Botón flotante de WhatsApp con burbuja de bienvenida (se cierra y no reaparece en la sesión). */
export function WhatsAppFloat() {
  const href = whatsappHref(waMessages.general);
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(DISMISS_KEY) === "1";
    } catch {}
    if (dismissed) return;
    const t = setTimeout(() => setBubble(true), 3500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setBubble(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  };

  if (!href) return null;
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 md:right-6 md:bottom-6">
      {bubble && (
        <div role="status" className="wa-bubble relative w-[min(17rem,calc(100vw-2rem))] rounded-lg bg-white p-4 pr-9 text-ink shadow-[0_10px_30px_-8px_rgb(0_0_0/0.35)] ring-1 ring-black/5">
          <button type="button" onClick={close} className="absolute top-2 right-2 p-1 text-steel hover:text-ink" aria-label="Cerrar mensaje">
            <X size={16} />
          </button>
          <p className="font-semibold">¡Hola! ¿Podemos ayudarte?</p>
          <p className="mt-1 text-sm text-ink/75">Envíanos una foto de tu cuchillo o pieza y te cotizamos por WhatsApp.</p>
          <a href={href} target="_blank" rel="noopener noreferrer" onClick={close} className="mt-3 inline-flex text-sm font-semibold text-[#128C7E] hover:underline">
            Escribir ahora →
          </a>
          <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-white" aria-hidden="true" />
        </div>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={close}
        aria-label="Escribir a FERKOR por WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-6px_rgb(0_0_0/0.45)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        <WhatsAppGlyph className="h-8 w-8" />
      </a>
    </div>
  );
}
