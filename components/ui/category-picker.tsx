"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type CategoryPickerProps = {
  categories: string[];
  value: string;
  onChange: (category: string) => void;
  label: string;
  tone?: "light" | "dark";
};

export function CategoryPicker({
  categories,
  value,
  onChange,
  label,
  tone = "light"
}: CategoryPickerProps) {
  const [open, setOpen] = useState(false);
  const isDark = tone === "dark";
  const hasManyCategories = categories.length > 6;

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
            {open ? "Menos" : "Mas"}
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
        {categories.map((category) => {
          const selected = category === value;

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
              {selected ? <Check className="h-3.5 w-3.5 shrink-0" /> : null}
            </button>
          );
        })}
      </div>

      {!open && hasManyCategories ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={
            isDark
              ? "mt-1.5 hidden w-full rounded-full bg-[#17213d] px-3 py-1.5 text-[10px] font-extrabold text-[#aeb9d4] sm:block"
              : "mt-1.5 hidden w-full rounded-full bg-[#f7f9ff] px-3 py-1.5 text-[10px] font-extrabold text-[#66718f] sm:block"
          }
        >
          Ver todas las categorias
        </button>
      ) : null}
    </div>
  );
}
