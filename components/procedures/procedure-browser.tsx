"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Search } from "lucide-react";
import type { ProcedureDetail } from "@/types/chilehub";

export function ProcedureBrowser({ procedures }: { procedures: ProcedureDetail[] }) {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const categories = ["Todos", ...Array.from(new Set(procedures.map((item) => item.category)))];

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return procedures.filter((procedure) => {
      const matchesCategory = category === "Todos" || procedure.category === category;
      const matchesQuery =
        !normalized ||
        `${procedure.title} ${procedure.category} ${procedure.summary}`
          .toLowerCase()
          .includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [category, procedures, query]);

  return (
    <>
      <div className="mt-4 grid gap-2.5 rounded-[20px] border border-[#dfe6f4] bg-white p-2.5 shadow-[0_16px_38px_rgba(35,49,86,0.045)] sm:grid-cols-[1fr_auto] sm:p-3">
        <div className="flex items-center gap-2 rounded-[14px] bg-[#f7f9ff] px-3">
          <Search className="h-4 w-4 shrink-0 text-[#7a86a6]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filtrar por nombre, categoria o duda..."
            className="h-10 min-w-0 flex-1 bg-transparent text-[12px] font-semibold text-[#081642] outline-none placeholder:text-[#8a94ad] sm:h-12 sm:text-[14px]"
            aria-label="Filtrar tramites"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={
                category === item
                  ? "shrink-0 rounded-full bg-primary px-3 py-2 text-[11px] font-bold text-white sm:px-4 sm:text-[12px]"
                  : "shrink-0 rounded-full border border-[#e5ebf5] bg-white px-3 py-2 text-[11px] font-bold text-[#52607f] sm:px-4 sm:text-[12px]"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <section className="grid grid-cols-2 gap-2.5 pb-8 pt-3 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((procedure) => (
          <Link
            key={procedure.slug}
            href={`/tramites/${procedure.slug}`}
            className="group rounded-[16px] border border-[#e3e9f4] bg-white p-3 shadow-[0_10px_26px_rgba(35,49,86,0.04)] transition hover:-translate-y-0.5 hover:shadow-air sm:rounded-[20px] sm:p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-[9px] font-bold uppercase tracking-[0.1em] text-primary sm:text-[11px]">
                  {procedure.category}
                </p>
                <h2 className="mt-1.5 line-clamp-2 text-[13px] font-extrabold leading-tight tracking-[-0.02em] text-[#081642] sm:mt-2 sm:text-[17px]">
                  {procedure.title}
                </h2>
              </div>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#eef2ff] text-primary sm:h-10 sm:w-10 sm:rounded-[12px]">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </div>
            <p className="mt-2 hidden text-[12px] font-medium leading-5 text-[#66718f] sm:line-clamp-2">
              {procedure.summary}
            </p>
            <div className="mt-3 grid gap-1.5 text-[9.5px] font-bold text-[#66718f] sm:mt-4 sm:grid-cols-2 sm:gap-2 sm:text-[11px]">
              <span className="line-clamp-1 rounded-[10px] bg-[#f7f9ff] px-2 py-1.5 sm:rounded-[12px] sm:px-3 sm:py-2">
                Costo: {procedure.cost}
              </span>
              <span className="line-clamp-1 rounded-[10px] bg-[#f7f9ff] px-2 py-1.5 sm:rounded-[12px] sm:px-3 sm:py-2">
                Plazo: {procedure.duration}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-primary sm:mt-4 sm:text-[13px]">
              Ver preparacion
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </section>

      {filtered.length === 0 ? (
        <div className="pb-10">
          <div className="rounded-[20px] border border-[#e3e9f4] bg-white p-5 text-[14px] font-semibold text-[#66718f]">
            No hay resultados en la biblioteca local actual.
          </div>
        </div>
      ) : null}
    </>
  );
}
