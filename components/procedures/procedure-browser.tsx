"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CategoryPicker } from "@/components/ui/category-picker";
import type { ProcedureDetail } from "@/types/chilehub";

export function ProcedureBrowser({ procedures }: { procedures: ProcedureDetail[] }) {
  const [category, setCategory] = useState("Todos");
  const [page, setPage] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const categories = ["Todos", ...Array.from(new Set(procedures.map((item) => item.category)))];
  const pageSize = isDesktop ? 8 : 6;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const filtered = useMemo(() => {
    if (category === "Todos") {
      return procedures;
    }

    return procedures.filter((procedure) => procedure.category === category);
  }, [category, procedures]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function updateCategory(nextCategory: string) {
    setCategory(nextCategory);
    setPage(1);
  }

  return (
    <>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-[minmax(0,360px)_1fr] sm:items-center">
        <CategoryPicker
          categories={categories}
          value={category}
          onChange={updateCategory}
          label="Categoria"
        />
        <div className="hidden rounded-[18px] border border-[#e5ebf5] bg-[#fbfcff] px-4 py-3 text-[12px] font-semibold leading-5 text-[#66718f] sm:block">
          {category === "Todos"
            ? `Explorando ${procedures.length} procesos organizados por tema.`
            : `${filtered.length} procesos en ${category}.`}
        </div>
      </div>

      <section className="grid grid-cols-1 gap-2.5 pb-8 pt-3 min-[430px]:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
        {paginated.map((procedure) => (
          <Link
            key={procedure.slug}
            href={`/tramites/${procedure.slug}`}
            className="group rounded-[16px] border border-[#e3e9f4] bg-white p-3.5 shadow-[0_10px_26px_rgba(35,49,86,0.04)] transition hover:-translate-y-0.5 hover:shadow-air sm:rounded-[20px] sm:p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-primary sm:text-[11px]">
                  {procedure.category}
                </p>
                <h2 className="mt-1.5 text-[14px] font-extrabold leading-tight tracking-[-0.02em] text-[#081642] min-[430px]:line-clamp-2 sm:mt-2 sm:text-[17px]">
                  {procedure.title}
                </h2>
              </div>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#eef2ff] text-primary sm:h-10 sm:w-10 sm:rounded-[12px]">
                <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </div>
            <p className="mt-2 line-clamp-2 text-[12px] font-medium leading-5 text-[#66718f]">
              {procedure.summary}
            </p>
            <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-2">
              <MetaPill label="Costo" value={procedure.cost} />
              <MetaPill label="Plazo" value={procedure.duration} />
            </div>
            <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-primary sm:mt-4 sm:text-[13px]">
              Ver preparacion
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </section>

      {filtered.length > pageSize ? (
        <div className="mb-8 flex flex-col items-center justify-between gap-3 rounded-[18px] border border-[#e3e9f4] bg-white p-3 shadow-[0_10px_24px_rgba(35,49,86,0.035)] sm:flex-row">
          <p className="text-[12px] font-bold text-[#66718f]">
            Mostrando {(currentPage - 1) * pageSize + 1}-
            {Math.min(currentPage * pageSize, filtered.length)} de{" "}
            {filtered.length} tramites
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((value) => Math.max(1, value - 1))}
              disabled={currentPage === 1}
              className="rounded-full border border-[#e3e9f4] bg-[#fbfcff] px-4 py-2 text-[12px] font-bold text-[#52607f] disabled:opacity-40"
            >
              Anterior
            </button>
            <span className="rounded-full bg-[#eef2ff] px-3 py-2 text-[12px] font-extrabold text-primary">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full bg-primary px-4 py-2 text-[12px] font-bold text-white disabled:opacity-40"
            >
              Siguiente
            </button>
          </div>
        </div>
      ) : null}

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

function MetaPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-[10px] bg-[#f7f9ff] px-2 py-2 sm:rounded-[12px] sm:px-3">
      <p className="text-[8.5px] font-extrabold uppercase tracking-[0.1em] text-[#8a94ad] sm:text-[9.5px]">
        {label}
      </p>
      <p className="mt-1 line-clamp-2 text-[10.5px] font-extrabold leading-[1.2] tracking-[-0.01em] text-[#283451] sm:text-[11.5px]">
        {value}
      </p>
    </div>
  );
}
