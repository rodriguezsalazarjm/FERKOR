/**
 * Consentimiento de cookies (solo cliente).
 * Las cookies técnicas no requieren consentimiento. Analítica y marketing hoy no se usan;
 * cualquier script de esas categorías debe cargarse solo si `hasConsent(...)` es true y
 * escuchar `CONSENT_EVENT` para activarse o desactivarse.
 */

export type OptionalCategory = "analitica" | "marketing";
export type Consent = Record<OptionalCategory, boolean> & { v: number; at: string };

export const CONSENT_COOKIE = "fk-consent";
/** Subir la versión si cambian las categorías o la política: el banner vuelve a aparecer. */
export const CONSENT_VERSION = 1;
export const CONSENT_MAX_AGE_DAYS = 365;
export const CONSENT_EVENT = "fk-consent-change";
export const OPEN_SETTINGS_EVENT = "fk-open-cookie-settings";

export function readConsent(): Consent | null {
  try {
    const raw = document.cookie.split("; ").find((c) => c.startsWith(`${CONSENT_COOKIE}=`));
    if (!raw) return null;
    const c = JSON.parse(decodeURIComponent(raw.slice(CONSENT_COOKIE.length + 1))) as Consent;
    return c.v === CONSENT_VERSION ? c : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: Record<OptionalCategory, boolean>): Consent {
  const c: Consent = { v: CONSENT_VERSION, at: new Date().toISOString(), analitica: choice.analitica, marketing: choice.marketing };
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(c))}; Max-Age=${CONSENT_MAX_AGE_DAYS * 86400}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: c }));
  return c;
}

export function hasConsent(category: OptionalCategory): boolean {
  return readConsent()?.[category] === true;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
