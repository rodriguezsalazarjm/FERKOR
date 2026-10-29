"use server";

import nodemailer from "nodemailer";
import { company } from "@/content/company";
import { quoteFields, quoteSummary, validateQuote, type QuoteValues } from "@/lib/quote";

export type SendQuoteResult = { ok: true } | { ok: false; reason: "invalid" | "unavailable" | "failed" };

/**
 * Envía la solicitud de cotización al correo de FERKOR por SMTP (buzón Titan de HostGator).
 * Requiere `SMTP_PASS` en Vercel; host, puerto y usuario tienen valores por defecto.
 * Sin contraseña responde "unavailable" y el formulario ofrece WhatsApp.
 */
export async function sendQuote(input: QuoteValues, consent: boolean, honeypot: string): Promise<SendQuoteResult> {
  // Bots: el campo oculto llega lleno. Se responde ok sin enviar.
  if (honeypot) return { ok: true };

  const values = Object.fromEntries(quoteFields.map((k) => [k, String(input?.[k] ?? "").slice(0, k === "descripcion" ? 4000 : 200)])) as QuoteValues;
  if (Object.keys(validateQuote(values, consent === true)).length) return { ok: false, reason: "invalid" };

  const to = company.contact.email;
  const user = process.env.SMTP_USER || to;
  const pass = process.env.SMTP_PASS;
  if (!to || !user || !pass) return { ok: false, reason: "unavailable" };

  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.titan.email",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    await transport.sendMail({
      from: { name: "Web FERKOR", address: user },
      to,
      replyTo: { name: values.nombre, address: values.correo.trim() },
      subject: `Cotización web · ${values.servicio} · ${values.empresa}`.replace(/[\r\n]+/g, " "),
      text: `${quoteSummary(values)}\n\n— Enviado desde el formulario de ferkor.cl/contacto`,
    });
    return { ok: true };
  } catch (err) {
    console.error("sendQuote: fallo SMTP", err);
    return { ok: false, reason: "failed" };
  }
}
