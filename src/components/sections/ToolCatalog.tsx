"use client";

import { useState } from "react";
import { catalog, catalogCategories, type CatalogCategoryId } from "@/content/catalog";
import { ProductTile } from "@/components/ui/ProductTile";

/** Catálogo filtrable por familia (página Trabajos). */
export function ToolCatalog() {
  const [active, setActive] = useState<CatalogCategoryId | "todas">("todas");
  const items = active === "todas" ? catalog : catalog.filter((i) => i.category === active);
  const filters = [{ id: "todas" as const, label: "Todas" }, ...catalogCategories.filter((c) => catalog.some((i) => i.category === c.id)).map((c) => ({ id: c.id, label: c.label }))];

  return (
    <div>
      <div role="group" aria-label="Filtrar por familia" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:px-0">
        {filters.map((f) => {
          const on = f.id === active;
          const count = f.id === "todas" ? catalog.length : catalog.filter((i) => i.category === f.id).length;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(f.id)}
              className={`shrink-0 border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors ${
                on ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink"
              }`}
            >
              {f.label} <span className={`ml-1 font-mono text-xs ${on ? "text-white/60" : "text-steel"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {items.length} productos
      </p>

      <ul className="mt-8 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.ref}>
            <ProductTile item={item} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="h-full" />
          </li>
        ))}
      </ul>
    </div>
  );
}
