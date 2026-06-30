"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { getSearchResults, searchIndexItems } from "@/data/search-index";
import { useChilehubMode } from "@/components/theme/chilehub-mode-provider";

export function SearchResults({ initialQuery = "" }: { initialQuery?: string }) {
  const { isDarkMode } = useChilehubMode();
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    return getSearchResults(
      searchIndexItems,
      query,
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode, query]);

  return (
    <div>
      <div className="flex items-center gap-3 rounded-[22px] border border-[#dfe6f4] bg-white p-3 shadow-[0_18px_46px_rgba(35,49,86,0.06)] transition-colors dark:border-[#2a3654] dark:bg-[#10172b] dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
        <Search className="h-5 w-5 shrink-0 text-[#7a86a6] dark:text-[#9aa8c7]" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={
            isDarkMode
              ? "Ej: privacidad, plataformas, dinero online..."
              : "Ej: vender auto, pasaporte, empresa..."
          }
          className="h-11 min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-[#081642] outline-none placeholder:text-[#8a94ad] dark:text-white dark:placeholder:text-[#7f8cab]"
          aria-label="Buscar en ChileHub"
        />
      </div>

      <div className="mt-5 grid gap-3">
        {results.map((item) => (
          <Link
            key={`${item.type}-${item.href}`}
            href={item.href}
            className="group rounded-[20px] border border-[#e3e9f4] bg-white p-5 shadow-[0_12px_30px_rgba(35,49,86,0.04)] transition hover:-translate-y-0.5 hover:shadow-air dark:border-[#26324f] dark:bg-[#111a31] dark:hover:bg-[#151f3a] dark:hover:shadow-[0_18px_50px_rgba(0,0,0,0.3)]"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
              {item.type}
            </p>
            <h2 className="mt-2 text-[19px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
              {item.title}
            </h2>
            <p className="mt-2 text-[13px] font-medium leading-6 text-[#66718f] dark:text-[#aeb9d4]">
              {item.description}
            </p>
            <div className="mt-4 flex items-center gap-1 text-[13px] font-bold text-primary dark:text-[#9fb1ff]">
              Abrir
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="mt-5 rounded-[20px] border border-[#e3e9f4] bg-white p-5 text-[14px] font-semibold text-[#66718f] dark:border-[#26324f] dark:bg-[#111a31] dark:text-[#aeb9d4]">
          No encontramos una coincidencia local. Prueba con otra palabra o
          revisa la biblioteca disponible.
        </div>
      ) : null}
    </div>
  );
}
