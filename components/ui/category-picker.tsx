"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type CategoryPickerProps = {
  categories: string[];
  value: string;
  onChange: (category: string) => void;
  label: string;
  tone?: "light" | "dark";
  categoryCounts?: Record<string, number>;
};

export function CategoryPicker({
  categories,
  value,
  onChange,
  label,
  tone = "light",
  categoryCounts = {}
}: CategoryPickerProps) {
  const [open, setOpen] = useState(false);
  const isDark = tone === "dark";
  const orderedCategories = orderCategories(categories);
  const visibleCategories = open
    ? orderedCategories
    : getCollapsedCategories(orderedCategories, value);
  const hiddenCount = Math.max(0, orderedCategories.length - visibleCategories.length);
  const hasManyCategories = hiddenCount > 0;

  function selectCategory(category: string) {
    onChange(category);
  }

  return (
    <div
      className={
        isDark
          ? "rounded-[18px] border border-[#2a3654] bg-[#0f172a] p-2 shadow-[0_14px_30px_rgba(0,0,0,0.12)]"
          : "rounded-[18px] border border-[#dfe6f4] bg-white p-2 shadow-[0_14px_30px_rgba(35,49,86,0.045)]"
      }
    >
      <div className="mb-1.5 flex items-center justify-between gap-2 px-1">
        <p
          className={
            isDark
              ? "text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#ff9b4f]"
              : "text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary"
          }
        >
          {label}
        </p>
        {hasManyCategories ? (
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            className={
              isDark
                ? "inline-flex items-center gap-1 rounded-full bg-[#17213d] px-2.5 py-1 text-[10px] font-extrabold text-[#d8e2ff]"
                : "inline-flex items-center gap-1 rounded-full bg-[#f1f5ff] px-2.5 py-1 text-[10px] font-extrabold text-[#52607f]"
            }
          >
            {open ? "Menos" : `Mas ${hiddenCount}`}
            <ChevronDown
              className={
                open
                  ? "h-3.5 w-3.5 rotate-180 transition"
                  : "h-3.5 w-3.5 transition"
              }
            />
          </button>
        ) : null}
      </div>

      <div
        className={
          open
            ? "flex max-h-[260px] flex-wrap gap-1.5 overflow-y-auto pr-1"
            : "flex max-h-[76px] flex-wrap gap-1.5 overflow-hidden sm:max-h-[36px]"
        }
        role="listbox"
        aria-label={label}
      >
        {visibleCategories.map((category) => {
          const selected = category === value;
          const count = categoryCounts[category];

          return (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              role="option"
              aria-selected={selected}
              title={category}
              className={
                selected
                  ? "inline-flex min-h-[30px] max-w-full items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-extrabold leading-tight text-white dark:bg-[#ff8a3d] dark:text-[#111827]"
                  : "inline-flex min-h-[30px] max-w-full items-center gap-1.5 rounded-full border border-[#e5ebf5] bg-[#fbfcff] px-3 py-1.5 text-[11px] font-bold leading-tight text-[#52607f] transition hover:border-[#cfd9ec] hover:bg-white dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff] dark:hover:bg-[#17213d]"
              }
            >
              <span className="truncate">{category}</span>
              {typeof count === "number" ? (
                <span
                  className={
                    selected
                      ? "rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-extrabold"
                      : "rounded-full bg-white px-1.5 py-0.5 text-[9px] font-extrabold text-[#8a94ad] dark:bg-[#0f172a] dark:text-[#9aa8c7]"
                  }
                >
                  {count}
                </span>
              ) : null}
              {selected ? <Check className="h-3.5 w-3.5 shrink-0" /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}

const categoryOrder = [
  "Todos",
  "Todas",
  "Autos",
  "Documentos",
  "Trabajo",
  "Familia",
  "Vivienda",
  "Salud",
  "Impuestos",
  "Empresas",
  "Municipalidad",
  "Transporte",
  "Viajes",
  "Viajes y aduanas",
  "Migracion",
  "Educacion",
  "Beneficios sociales",
  "Justicia y familia",
  "Seguridad y denuncias",
  "Consumo",
  "Telecomunicaciones",
  "Servicios basicos",
  "Finanzas",
  "Compras publicas",
  "Propiedad intelectual",
  "Agricultura y alimentos",
  "Medio ambiente",
  "Privacidad digital",
  "Seguridad digital",
  "Dinero online",
  "Plataformas",
  "Plataformas adultas",
  "Denuncias digitales",
  "Reputacion online",
  "Consumo adulto legal"
];

function orderCategories(categories: string[]) {
  const priority = new Map(categoryOrder.map((category, index) => [category, index]));

  return [...categories].sort((first, second) => {
    const firstIndex = priority.get(first);
    const secondIndex = priority.get(second);

    if (firstIndex !== undefined && secondIndex !== undefined) {
      return firstIndex - secondIndex;
    }

    if (firstIndex !== undefined) {
      return -1;
    }

    if (secondIndex !== undefined) {
      return 1;
    }

    return first.localeCompare(second, "es");
  });
}

function getCollapsedCategories(categories: string[], value: string) {
  const visibleLimit = 9;
  const visible = categories.slice(0, visibleLimit);

  if (!value || visible.includes(value) || !categories.includes(value)) {
    return visible;
  }

  return [...visible.slice(0, visibleLimit - 1), value];
}
