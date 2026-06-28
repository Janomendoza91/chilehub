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
      <div className="mt-6 grid gap-3 rounded-[22px] border border-[#dfe6f4] bg-white p-3 shadow-[0_18px_46px_rgba(35,49,86,0.05)] sm:grid-cols-[1fr_auto]">
        <div className="flex items-center gap-3 rounded-[16px] bg-[#f7f9ff] px-3">
          <Search className="h-4 w-4 shrink-0 text-[#7a86a6]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filtrar por nombre, categoria o duda..."
            className="h-12 min-w-0 flex-1 bg-transparent text-[14px] font-semibold text-[#081642] outline-none placeholder:text-[#8a94ad]"
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
                  ? "shrink-0 rounded-full bg-primary px-4 py-2 text-[12px] font-bold text-white"
                  : "shrink-0 rounded-full border border-[#e5ebf5] bg-white px-4 py-2 text-[12px] font-bold text-[#52607f]"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <section className="grid gap-3 pb-10 pt-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((procedure) => (
          <Link
            key={procedure.slug}
            href={`/tramites/${procedure.slug}`}
            className="group rounded-[22px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.045)] transition hover:-translate-y-0.5 hover:shadow-air"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                  {procedure.category}
                </p>
                <h2 className="mt-2 text-[19px] font-extrabold leading-tight tracking-[-0.03em] text-[#081642]">
                  {procedure.title}
                </h2>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-[#eef2ff] text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </span>
            </div>
            <p className="mt-3 line-clamp-3 text-[13px] font-medium leading-6 text-[#66718f]">
              {procedure.summary}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-[11px] font-bold text-[#66718f]">
              <span className="rounded-[12px] bg-[#f7f9ff] px-3 py-2">
                {procedure.cost}
              </span>
              <span className="rounded-[12px] bg-[#f7f9ff] px-3 py-2">
                {procedure.duration}
              </span>
            </div>
            <div className="mt-5 flex items-center gap-1 text-[13px] font-bold text-primary">
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
