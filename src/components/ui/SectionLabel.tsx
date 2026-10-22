type Props = {
  index?: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Rótulo de sección "01 / ETIQUETA" con línea roja corta debajo (sistema de diseño: Label). */
export function SectionLabel({ index, children, tone = "light", className = "" }: Props) {
  const color = tone === "dark" ? "text-white" : "text-ink";
  const indexColor = tone === "dark" ? "text-red-light" : "text-red";
  return (
    <div className={`section-label inline-flex flex-col gap-3 ${className}`}>
      <p className={`eyebrow flex items-baseline gap-2 ${color}`}>
        {index && <span className={`font-mono font-semibold tracking-[0.08em] ${indexColor}`}>{index} /</span>}
        <span>{children}</span>
      </p>
      <span className="rule-grow block h-0.5 w-8 bg-red" aria-hidden="true" />
    </div>
  );
}
