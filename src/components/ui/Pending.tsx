/** Marca visible de dato pendiente de confirmación por el cliente. */
export function Pending({ label = "pendiente", className = "" }: { label?: string; className?: string }) {
  return (
    <span
      className={`ml-1 inline-block border border-dashed border-current/50 px-1.5 py-px align-middle font-mono text-[10px] leading-tight tracking-[0.06em] uppercase opacity-80 ${className}`}
    >
      {label}
    </span>
  );
}
