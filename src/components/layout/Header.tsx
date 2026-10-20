"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { mainNav, quoteCta } from "@/content/navigation";
import { company } from "@/content/company";
import { Logo } from "@/components/ui/Logo";
import { Arrow } from "@/components/ui/Button";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // El menú queda abierto solo en la ruta donde se abrió: al navegar se cierra solo.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenOn(null);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Sin backdrop-filter con el menú abierto: crearía un contenedor para el panel `fixed`.
  const surface = open
    ? "border-white/10 bg-ink"
    : scrolled
      ? "border-white/10 bg-ink/95 backdrop-blur-md"
      : "border-transparent bg-ink";

  return (
    <header className={`on-dark sticky top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${surface}`}>
      <div className="wrap flex h-16 items-center justify-between gap-6 lg:h-[76px]">
        <Link href="/" className="shrink-0" aria-label="FERKOR, ir al inicio">
          <Logo variant="wordmark-blanco" height={24} className="lg:hidden" />
          <Logo variant="wordmark-blanco" height={28} className="hidden lg:block" />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block px-2 py-2 text-[12px] font-medium tracking-[0.06em] whitespace-nowrap uppercase transition-colors xl:px-3 xl:text-[13px] xl:tracking-[0.08em] ${
                      active ? "text-white" : "text-white/65 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute right-2 bottom-0.5 left-2 h-0.5 xl:right-3 xl:left-3 origin-left bg-red transition-transform duration-300 ease-cut ${
                        active ? "scale-x-100" : "scale-x-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={quoteCta.href}
            aria-label={quoteCta.label}
            className="chamfer-sm group hidden min-h-11 shrink-0 items-center gap-3 bg-red px-4 text-sm font-semibold whitespace-nowrap text-white transition-colors hover:bg-red-hover sm:inline-flex xl:px-5"
          >
            {/* Entre 1024 y 1280 px la etiqueta corta evita que el botón se parta. */}
            <span className="lg:hidden xl:inline">{quoteCta.label}</span>
            <span className="hidden lg:inline xl:hidden">Cotizar</span>
            <Arrow />
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-white/60 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="menu-movil"
        ref={panelRef}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink lg:hidden"
      >
        <nav aria-label="Principal móvil" className="wrap flex min-h-full flex-col pt-6 pb-10">
          <ul className="border-t border-white/10">
            {mainNav.map((item, i) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-mono text-xs text-red-light">{String(i + 1).padStart(2, "0")}</span>
                    <span className={`font-display text-4xl font-extrabold uppercase ${active ? "text-white" : "text-white/75"}`}>
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href={quoteCta.href}
            className="chamfer-sm group mt-8 inline-flex min-h-13 items-center justify-between gap-3 bg-red px-6 font-semibold text-white"
          >
            {quoteCta.label}
            <Arrow />
          </Link>
          <p className="mono-index mt-auto pt-10 text-steel-light">
            {company.coverage} · Atención B2B
          </p>
        </nav>
      </div>
    </header>
  );
}
