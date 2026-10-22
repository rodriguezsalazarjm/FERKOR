import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "cotizar" | "contorno" | "contorno-claro" | "solido" | "texto" | "texto-claro";
type Size = "md" | "lg";

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

const variants: Record<Variant, string> = {
  // Acción comercial principal: una por vista.
  cotizar: "btn-sweep chamfer-sm bg-red text-white hover:bg-red-hover",
  solido: "btn-sweep chamfer-sm bg-ink text-white hover:bg-ink-700",
  contorno: "border border-ink/80 text-ink hover:bg-ink hover:text-white",
  "contorno-claro": "on-dark border border-white/60 text-white hover:border-white hover:bg-white hover:text-ink",
  texto: "px-0! text-ink underline-offset-[6px] hover:text-red hover:underline",
  "texto-claro": "on-dark px-0! text-white underline-offset-[6px] hover:text-red-light hover:underline",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-13 px-7 text-[15px]",
};

export function Button({ href, variant = "cotizar", size = "md", arrow = false, children, className = "", ...rest }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-3 font-semibold tracking-[0.02em] transition-colors duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      {arrow && <Arrow />}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-cut group-hover:translate-x-1 ${className}`}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    </svg>
  );
}
