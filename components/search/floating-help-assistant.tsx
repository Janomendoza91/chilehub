"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Search,
  Send,
  X
} from "lucide-react";
import { useChilehubMode } from "@/components/theme/chilehub-mode-provider";
import type { SearchIndexItem } from "@/data/search-index";

const lightPrompts = ["licencia", "pasaporte", "vender auto", "empresa"];
const darkPrompts = ["privacidad", "cuenta hackeada", "cobros", "plataformas"];

export function FloatingHelpAssistant() {
  const { isDarkMode } = useChilehubMode();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState<SearchIndexItem[]>([]);
  const prompts = isDarkMode ? darkPrompts : lightPrompts;

  useEffect(() => {
    if (!open || items.length > 0) {
      return;
    }

    let active = true;

    async function loadItems() {
      const { searchIndexItems } = await import("@/data/search-index");

      if (!active) {
        return;
      }

      setItems(searchIndexItems);
    }

    loadItems();

    return () => {
      active = false;
    };
  }, [items.length, open]);

  const results = useMemo(() => {
    const normalized = normalizeSearchText(query);
    const activeItems = items.filter((item) =>
      isDarkMode ? item.mode === "dark" : item.mode === "light"
    );

    if (!normalized) {
      return activeItems.slice(0, 4);
    }

    return activeItems
      .map((item) => ({
        item,
        score: getHelpScore(item, normalized)
      }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6)
      .map((result) => result.item);
  }, [isDarkMode, items, query]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3">
      {open ? (
        <section
          aria-label="Ayuda para buscar en ChileHub"
          className="w-[min(390px,calc(100vw-2.5rem))] overflow-hidden rounded-[24px] border border-[#dfe6f4] bg-white shadow-[0_24px_80px_rgba(35,49,86,0.18)] dark:border-white/10 dark:bg-[#10172b] dark:shadow-[0_28px_90px_rgba(0,0,0,0.42)]"
        >
          <div className="flex items-start justify-between gap-3 border-b border-[#edf1f7] px-4 py-4 dark:border-white/10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                Ayuda rapida
              </p>
              <h2 className="mt-1 text-[18px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
                Que necesitas encontrar?
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar ayuda"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#f3f6fb] text-[#52607f] transition hover:bg-[#e8edf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-white/10 dark:text-[#d8e2ff] dark:hover:bg-white/[0.14]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-4">
            <div className="flex items-center gap-2 rounded-[18px] border border-[#dfe6f4] bg-[#fbfcff] px-3 py-2 dark:border-[#2a3654] dark:bg-[#121b32]">
              <Search className="h-4 w-4 shrink-0 text-[#7a86a6] dark:text-[#9aa8c7]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={isDarkMode ? "Ej: cuenta hackeada" : "Ej: renovar licencia"}
                className="h-10 min-w-0 flex-1 bg-transparent text-[14px] font-semibold text-[#081642] outline-none placeholder:text-[#8a94ad] dark:text-white dark:placeholder:text-[#7f8cab]"
                aria-label="Buscar tramite o guia"
              />
              <Send className="h-4 w-4 shrink-0 text-primary dark:text-[#ff9b4f]" />
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {prompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setQuery(prompt)}
                  className="rounded-full bg-[#eef2ff] px-3 py-1.5 text-[11px] font-bold text-primary transition hover:bg-[#e3e9ff] dark:bg-white/10 dark:text-[#ffb077] dark:hover:bg-white/[0.14]"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="mt-4 grid max-h-[330px] gap-2 overflow-y-auto pr-1">
              {items.length === 0 ? (
                <div className="rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-3 text-[12px] font-semibold text-[#66718f] dark:border-[#26324f] dark:bg-[#111a31] dark:text-[#aeb9d4]">
                  Preparando resultados...
                </div>
              ) : null}
              {results.map((item) => (
                <Link
                  key={`${item.type}-${item.href}`}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group rounded-[16px] border border-[#e7edf6] bg-white p-3 transition hover:border-primary/30 hover:bg-[#f7f9ff] dark:border-[#26324f] dark:bg-[#111a31] dark:hover:bg-[#151f3a]"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-primary dark:text-[#ff9b4f]">
                    {item.type}
                  </p>
                  <h3 className="mt-1 text-[14px] font-extrabold leading-5 text-[#081642] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[12px] font-medium leading-5 text-[#66718f] dark:text-[#aeb9d4]">
                    {item.description}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-[12px] font-bold text-primary dark:text-[#9fb1ff]">
                    Abrir
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>

            {items.length > 0 && results.length === 0 ? (
              <div className="mt-4 rounded-[16px] bg-[#fff7ed] p-3 text-[12px] font-semibold leading-5 text-[#8a4b12] dark:bg-[#2b1d12] dark:text-[#ffcf9f]">
                No encontre coincidencias. Puedes probar otra palabra o sugerir el proceso en contacto.
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Cerrar ayuda" : "Abrir ayuda"}
        className="flex h-12 items-center gap-2 rounded-full bg-primary px-4 text-[13px] font-bold text-white shadow-[0_18px_40px_rgba(42,81,232,0.28)] transition hover:bg-[#1f48e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:bg-[#ff8a3d] dark:text-[#111827] dark:hover:bg-[#ff9b4f]"
      >
        <MessageCircle className="h-4 w-4" />
        Ayuda
      </button>
    </div>
  );
}

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getHelpScore(item: SearchIndexItem, query: string) {
  const title = normalizeSearchText(item.title);
  const category = normalizeSearchText(item.category);
  const description = normalizeSearchText(item.description);

  if (title.startsWith(query)) {
    return 120;
  }

  if (title.includes(query)) {
    return 100;
  }

  if (category.includes(query)) {
    return 70;
  }

  if (description.includes(query)) {
    return 50;
  }

  if (item.keywords.includes(query)) {
    return 25;
  }

  return 0;
}
