"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export type HeroSearchSuggestion = {
  type: "Tramite" | "Guia";
  title: string;
  description: string;
  category: string;
  href: string;
};

export function HeroPredictiveSearch({
  suggestions,
  placeholder = "Que proceso necesitas preparar?"
}: {
  suggestions: HeroSearchSuggestion[];
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");

  const matches = useMemo(() => {
    const normalized = normalize(query);

    if (normalized.length < 2) {
      return [];
    }

    return suggestions
      .map((item) => ({
        item,
        score: getScore(item, normalized)
      }))
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((result) => result.item);
  }, [query, suggestions]);

  return (
    <div className="relative">
      <form action="/buscar" className="flex items-center gap-2 rounded-[16px] bg-[#f7f9ff] p-2 transition-colors dark:bg-[#070c18]">
        <Search className="ml-1.5 h-4 w-4 shrink-0 text-[#7a86a6] dark:text-[#9aa8c7] sm:ml-2 sm:h-5 sm:w-5" />
        <input
          name="q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
          placeholder={placeholder}
          className="h-10 min-w-0 flex-1 bg-transparent text-left text-[13px] font-semibold text-[#081642] outline-none placeholder:text-[#7b86a0] dark:text-white dark:placeholder:text-[#7f8cab] sm:h-11 sm:text-[15px]"
          aria-label="Buscar proceso en ChileHub"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={matches.length > 0}
          aria-controls="hero-search-suggestions"
        />
        <button type="submit" className="flex h-10 shrink-0 items-center gap-1.5 rounded-[12px] bg-primary px-3 text-[12px] font-bold text-white shadow-[0_12px_24px_rgba(42,81,232,0.22)] transition hover:bg-[#1f48e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-11 sm:gap-2 sm:px-5 sm:text-[13px]">
          Buscar
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </form>

      {matches.length > 0 ? (
        <div
          id="hero-search-suggestions"
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 grid gap-2 rounded-[18px] border border-[#dfe6f4] bg-white p-2 text-left shadow-[0_24px_60px_rgba(35,49,86,0.12)] dark:border-[#2a3654] dark:bg-[#10172b] dark:shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
        >
          {matches.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="group flex items-start gap-3 rounded-[14px] px-3 py-3 transition hover:bg-[#f7f9ff] dark:hover:bg-[#17213d]"
            >
              <span className="mt-0.5 rounded-full bg-[#eef2ff] px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.1em] text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                {item.type}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-extrabold text-[#081642] dark:text-white sm:text-[14px]">
                  {item.title}
                </span>
                <span className="mt-1 line-clamp-2 block text-[11px] font-semibold leading-5 text-[#6b7590] dark:text-[#aeb9d4] sm:text-[12px]">
                  {item.description}
                </span>
              </span>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function getScore(item: HeroSearchSuggestion, query: string) {
  const title = normalize(item.title);
  const category = normalize(item.category);
  const description = normalize(item.description);

  if (title.startsWith(query)) {
    return 100;
  }

  if (title.includes(query)) {
    return 80;
  }

  if (category.includes(query)) {
    return 55;
  }

  if (description.includes(query)) {
    return 35;
  }

  return 0;
}

