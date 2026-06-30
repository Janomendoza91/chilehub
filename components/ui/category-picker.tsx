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

  function selectCategory(category: string) {
    onChange(category);
    setOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className={
          isDark
            ? "flex min-h-[52px] w-full items-center justify-between gap-3 rounded-[18px] border border-[#2a3654] bg-[#0f172a] px-4 py-3 text-left shadow-[0_14px_30px_rgba(0,0,0,0.14)] transition hover:bg-[#121b32]"
            : "flex min-h-[52px] w-full items-center justify-between gap-3 rounded-[18px] border border-[#dfe6f4] bg-white px-4 py-3 text-left shadow-[0_14px_30px_rgba(35,49,86,0.045)] transition hover:bg-[#fbfcff]"
        }
      >
        <span className="min-w-0">
          <span
            className={
              isDark
                ? "block text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#ff9b4f]"
                : "block text-[10px] font-extrabold uppercase tracking-[0.14em] text-primary"
            }
          >
            {label}
          </span>
          <span
            className={
              isDark
                ? "mt-0.5 block truncate text-[14px] font-extrabold text-white"
                : "mt-0.5 block truncate text-[14px] font-extrabold text-[#081642]"
            }
          >
            {value}
          </span>
        </span>
        <span className="flex shrink-0 items-center gap-2">
          <span
            className={
              isDark
                ? "hidden rounded-full bg-[#17213d] px-2.5 py-1 text-[10px] font-bold text-[#aeb9d4] min-[380px]:inline"
                : "hidden rounded-full bg-[#f1f5ff] px-2.5 py-1 text-[10px] font-bold text-[#66718f] min-[380px]:inline"
            }
          >
            {categories.length}
          </span>
          <ChevronDown
            className={
              open
                ? "h-4 w-4 rotate-180 text-primary transition dark:text-[#ff9b4f]"
                : "h-4 w-4 text-[#7a86a6] transition dark:text-[#9aa8c7]"
            }
          />
        </span>
      </button>

      {open ? (
        <div
          className={
            isDark
              ? "absolute left-0 right-0 z-30 mt-2 max-h-[320px] overflow-y-auto rounded-[20px] border border-[#2a3654] bg-[#111a31] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
              : "absolute left-0 right-0 z-30 mt-2 max-h-[320px] overflow-y-auto rounded-[20px] border border-[#dfe6f4] bg-white p-2 shadow-[0_24px_70px_rgba(35,49,86,0.14)]"
          }
          role="listbox"
          aria-label={label}
        >
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const selected = category === value;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => selectCategory(category)}
                  role="option"
                  aria-selected={selected}
                  className={
                    selected
                      ? "flex min-h-[38px] items-center justify-between gap-2 rounded-[13px] bg-primary px-3 py-2 text-left text-[12px] font-extrabold leading-tight text-white dark:bg-[#ff8a3d] dark:text-[#111827]"
                      : "flex min-h-[38px] items-center justify-between gap-2 rounded-[13px] px-3 py-2 text-left text-[12px] font-bold leading-tight text-[#52607f] transition hover:bg-[#f7f9ff] dark:text-[#d8e2ff] dark:hover:bg-[#17213d]"
                  }
                >
                  <span>{category}</span>
                  {selected ? <Check className="h-3.5 w-3.5 shrink-0" /> : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
