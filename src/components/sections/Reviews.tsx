import { reviews, MIN_REVIEWS, googleReviewsUrl } from "@/content/reviews";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Reseñas de clientes reales. No se renderiza hasta tener al menos MIN_REVIEWS
 * en `src/content/reviews.ts`: nunca mostrar testimonios de relleno.
 */
export function Reviews({ index = "08" }: { index?: string }) {
  if (reviews.length < MIN_REVIEWS) return null;
  const [lead, ...rest] = reviews;
  return (
    <section aria-labelledby="reviews-title" className="bg-paper py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index={index}>Clientes</SectionLabel>
            <h2 id="reviews-title" className="display mt-6 text-[clamp(2.6rem,6vw,4.75rem)] text-ink">
              Lo que dicen{" "}
              <span className="block text-red">quienes producen con FERKOR.</span>
            </h2>
          </div>
          {googleReviewsUrl && (
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-ink underline-offset-4 hover:text-red hover:underline">
              Ver reseñas en Google →
            </a>
          )}
        </div>

        <div className="mt-14 grid gap-px border border-line bg-line md:mt-20 lg:grid-cols-3">
          <figure className="on-dark flex flex-col justify-between bg-ink p-8 text-white md:p-10 lg:row-span-2">
            <blockquote className="font-display text-3xl leading-[1.05] font-bold md:text-4xl">“{lead.quote}”</blockquote>
            <ReviewAuthor review={lead} dark />
          </figure>
          {rest.map((r) => (
            <figure key={r.name} className="flex flex-col justify-between gap-8 bg-white p-7 md:p-8">
              <blockquote className="text-lg leading-relaxed text-ink">“{r.quote}”</blockquote>
              <ReviewAuthor review={r} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewAuthor({ review: r, dark = false }: { review: (typeof reviews)[number]; dark?: boolean }) {
  return (
    <figcaption className="mt-8">
      <p className={`font-semibold ${dark ? "text-white" : "text-ink"}`}>{r.name}</p>
      <p className={`text-sm ${dark ? "text-white/70" : "text-ink/70"}`}>
        {r.role}
        {r.company ? ` · ${r.company}` : ""}
      </p>
      <p className={`mt-3 font-mono text-[11px] tracking-[0.06em] uppercase ${dark ? "text-red-light" : "text-red"}`}>
        {r.service} · {r.industry}
        {r.source === "google" ? " · Reseña en Google" : ""}
      </p>
    </figcaption>
  );
}
