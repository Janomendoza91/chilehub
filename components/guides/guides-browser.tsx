"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { CategoryPicker } from "@/components/ui/category-picker";
import type { GuideDetail } from "@/types/chilehub";
import { darkGuidesContent } from "@/data/dark-guides";
import { useChilehubMode } from "@/components/theme/chilehub-mode-provider";

const prioritySlugs = [
  "como-proteger-tu-clave-unica",
  "que-revisar-antes-de-firmar-finiquito",
  "como-preparar-registro-social-hogares"
];

const darkPrioritySlugs = [
  "crear-cuenta-onlyfans-con-privacidad",
  "proteger-identidad-vendiendo-contenido",
  "recuperar-instagram-hackeado"
];

const darkTopicMap: Record<string, string[]> = {
  privacidad: ["Privacidad digital"],
  plataformas: ["Plataformas adultas", "Plataformas"],
  dinero: ["Dinero online"],
  seguridad: ["Seguridad digital"],
  denuncias: ["Denuncias digitales", "Reputacion online"]
};

export function GuidesBrowser({ guides }: { guides: GuideDetail[] }) {
  const { isDarkMode } = useChilehubMode();
  const searchParams = useSearchParams();
  const activeGuides = isDarkMode ? darkGuidesContent : guides;
  const [category, setCategory] = useState("Todas");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const categories = useMemo(
    () => {
      const uniqueCategories = Array.from(new Set(activeGuides.map((guide) => guide.category)));
      return ["Todas", ...uniqueCategories];
    },
    [activeGuides]
  );
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { Todas: activeGuides.length };

    activeGuides.forEach((guide) => {
      counts[guide.category] = (counts[guide.category] ?? 0) + 1;
    });

    return counts;
  }, [activeGuides]);
  const pageSize = isDesktop ? 8 : 6;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);

    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const topic = searchParams.get("tema");
    const nextCategory = searchParams.get("categoria");
    const nextQuery = searchParams.get("q") ?? "";

    const topicCategory = topic
      ? darkTopicMap[topic]?.find((item) => categories.includes(item))
      : undefined;

    if (isDarkMode && topicCategory) {
      setCategory(topicCategory);
    } else if (nextCategory && categories.includes(nextCategory)) {
      setCategory(nextCategory);
    } else {
      setCategory("Todas");
    }

    setQuery(nextQuery);
    setPage(1);
  }, [categories, isDarkMode, searchParams]);

  const filtered = useMemo(() => {
    const activePrioritySlugs = isDarkMode ? darkPrioritySlugs : prioritySlugs;
    const normalized = isDarkMode ? "" : query.trim().toLowerCase();

    return activeGuides.filter((guide) => {
      const isFeatured = activePrioritySlugs.includes(guide.slug);
      const showingFeatured = category === "Todas" && !normalized;
      const matchesCategory = category === "Todas" || guide.category === category;
      const matchesQuery =
        !normalized ||
        `${guide.title} ${guide.category} ${guide.summary} ${guide.sections
          .map((section) => `${section.title} ${section.body}`)
          .join(" ")}`
          .toLowerCase()
          .includes(normalized);

      return matchesCategory && matchesQuery && (showingFeatured ? !isFeatured : true);
    });
  }, [activeGuides, category, isDarkMode, query]);

  const featured = (isDarkMode ? darkPrioritySlugs : prioritySlugs)
    .map((slug) => activeGuides.find((guide) => guide.slug === slug))
    .filter((guide): guide is GuideDetail => Boolean(guide));
  const showFeatured = category === "Todas" && query.trim().length === 0;
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

  if (isDarkMode) {
    return (
      <>
        <div className="mt-4">
          <CategoryPicker
            categories={categories}
            value={category}
            onChange={updateCategory}
            label="Categoria"
            tone="dark"
            categoryCounts={categoryCounts}
          />
        </div>

        <section className="grid grid-cols-1 gap-2.5 pb-8 pt-3 min-[430px]:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
          {paginated.map((guide) => (
            <DarkGuideLibraryCard key={guide.slug} guide={guide} />
          ))}
        </section>

        {filtered.length > pageSize ? (
          <div className="mb-8 flex flex-col items-center justify-between gap-3 rounded-[18px] border border-[#26324f] bg-[#111a31] p-3 shadow-[0_10px_24px_rgba(0,0,0,0.16)] sm:flex-row">
            <p className="text-[12px] font-bold text-[#aeb9d4]">
              Mostrando {(currentPage - 1) * pageSize + 1}-
              {Math.min(currentPage * pageSize, filtered.length)} de{" "}
              {filtered.length} guias
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((value) => Math.max(1, value - 1))}
                disabled={currentPage === 1}
                className="rounded-full border border-[#2a3654] bg-[#0f172a] px-4 py-2 text-[12px] font-bold text-[#e8eeff] disabled:opacity-40"
              >
                Anterior
              </button>
              <span className="rounded-full bg-[#243461] px-3 py-2 text-[12px] font-extrabold text-[#ff9b4f]">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
                disabled={currentPage === totalPages}
                className="rounded-full bg-[#ff8a3d] px-4 py-2 text-[12px] font-bold text-[#111827] disabled:opacity-40"
              >
                Siguiente
              </button>
            </div>
          </div>
        ) : null}

        {filtered.length === 0 ? (
          <div className="pb-10">
            <div className="rounded-[20px] border border-[#26324f] bg-[#111a31] p-5 text-[14px] font-semibold text-[#aeb9d4]">
              No hay resultados en la biblioteca local actual.
            </div>
          </div>
        ) : null}
      </>
    );
  }

  return (
    <>
      {showFeatured ? (
        <section className="grid gap-2.5 py-4 sm:grid-cols-3 sm:gap-3 sm:py-5">
          {featured.map((guide) => (
            <GuideFeatureCard key={guide.slug} guide={guide} />
          ))}
        </section>
      ) : null}

      <section className={showFeatured ? "rounded-[20px] border border-[#dfe6f4] bg-white p-3.5 shadow-[0_16px_38px_rgba(35,49,86,0.045)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-4" : "mt-4 rounded-[20px] border border-[#dfe6f4] bg-white p-3.5 shadow-[0_16px_38px_rgba(35,49,86,0.045)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-4"}>
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
              Biblioteca
            </p>
            <h2 className="mt-1 text-[19px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white sm:text-[22px]">
              {getCategoryTitle(category, isDarkMode)}
            </h2>
          </div>
        </div>

        <div className="mt-3 grid gap-2.5 lg:grid-cols-[minmax(260px,1fr)_minmax(240px,360px)]">
          <div className="flex items-center gap-2 rounded-[14px] bg-[#f7f9ff] px-3 dark:bg-[#070c18]">
            <Search className="h-4 w-4 shrink-0 text-[#7a86a6] dark:text-[#9aa8c7]" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder={
                isDarkMode
                  ? "Filtrar guias por plataforma, riesgo o duda..."
                  : "Filtrar guias por tramite, documento o duda..."
              }
              className="h-10 min-w-0 flex-1 bg-transparent text-[12px] font-semibold text-[#081642] outline-none placeholder:text-[#8a94ad] dark:text-white dark:placeholder:text-[#7f8cab] sm:h-12 sm:text-[14px]"
              aria-label="Filtrar guias"
            />
          </div>
          <CategoryPicker
            categories={categories}
            value={category}
            onChange={updateCategory}
            label="Categoria"
            tone={isDarkMode ? "dark" : "light"}
            categoryCounts={categoryCounts}
          />
        </div>

        <div className="mt-3 grid grid-cols-1 gap-2.5 min-[430px]:grid-cols-2 sm:mt-4 lg:grid-cols-3 xl:grid-cols-4">
          {paginated.map((guide) => (
            <GuideCompactCard key={guide.slug} guide={guide} />
          ))}
        </div>

        {filtered.length > pageSize ? (
          <div className="mt-4 flex flex-col items-center justify-between gap-3 rounded-[16px] border border-[#e3e9f4] bg-[#fbfcff] p-3 dark:border-[#2a3654] dark:bg-[#121b32] sm:flex-row">
            <p className="text-[12px] font-bold text-[#66718f] dark:text-[#aeb9d4]">
              Mostrando {(currentPage - 1) * pageSize + 1}-
              {Math.min(currentPage * pageSize, filtered.length)} de{" "}
              {filtered.length} guias
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((value) => Math.max(1, value - 1))}
                disabled={currentPage === 1}
                className="rounded-full border border-[#e3e9f4] bg-white px-4 py-2 text-[12px] font-bold text-[#52607f] disabled:opacity-40 dark:border-[#2a3654] dark:bg-[#0f172a] dark:text-[#e8eeff]"
              >
                Anterior
              </button>
              <span className="rounded-full bg-[#eef2ff] px-3 py-2 text-[12px] font-extrabold text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
                disabled={currentPage === totalPages}
                className="rounded-full bg-primary px-4 py-2 text-[12px] font-bold text-white disabled:opacity-40 dark:bg-[#ff8a3d] dark:text-[#111827]"
              >
                Siguiente
              </button>
            </div>
          </div>
        ) : null}

        {filtered.length === 0 ? (
          <div className="mt-4 rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-4 text-[13px] font-semibold text-[#66718f] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#aeb9d4]">
            No hay guias para ese filtro por ahora.
          </div>
        ) : null}
      </section>
    </>
  );
}

function getCategoryTitle(category: string, isDarkMode: boolean) {
  if (category === "Todas") {
    return isDarkMode ? "Todas las guias del modo oscuro" : "Todas las guias rapidas";
  }

  const topicTitle: Record<string, string> = {
    privacidad: "Privacidad",
    plataformas: "Plataformas",
    dinero: "Dinero online",
    seguridad: "Seguridad",
    denuncias: "Denuncias y reputacion"
  };

  return topicTitle[category] ?? category;
}

function GuideFeatureCard({ guide }: { guide: GuideDetail }) {
  return (
    <Link
      href={`/guias/${guide.slug}`}
      className="group rounded-[18px] border border-[#e3e9f4] bg-white p-4 shadow-[0_10px_26px_rgba(35,49,86,0.04)] transition hover:-translate-y-0.5 hover:shadow-air dark:border-[#26324f] dark:bg-[#111a31] dark:hover:bg-[#151f3a] sm:rounded-[22px] sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px] bg-[#eef7ff] text-[#1597b6] dark:bg-[#243461] dark:text-[#ff9b4f] sm:h-11 sm:w-11 sm:rounded-[14px]">
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#f7f9ff] px-2.5 py-1 text-[10px] font-bold text-[#66718f] dark:bg-[#121b32] dark:text-[#aeb9d4]">
          <Clock3 className="h-3 w-3" />
          {guide.readingTime}
        </span>
      </div>
      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-primary dark:text-[#ff9b4f]">
        {guide.category}
      </p>
      <h2 className="mt-2 line-clamp-2 text-[16px] font-extrabold leading-tight tracking-[-0.03em] text-[#081642] dark:text-white sm:text-[20px]">
        {guide.title}
      </h2>
      <p className="mt-2 line-clamp-2 text-[12px] font-medium leading-5 text-[#66718f] dark:text-[#aeb9d4] sm:mt-3 sm:line-clamp-3 sm:text-[13px] sm:leading-6">
        {guide.summary}
      </p>
      <div className="mt-4 flex items-center gap-1 text-[12px] font-bold text-primary sm:mt-5 sm:text-[13px]">
        Leer guia
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function GuideCompactCard({ guide }: { guide: GuideDetail }) {
  return (
    <Link
      href={`/guias/${guide.slug}`}
      className="group rounded-[14px] border border-[#e7edf6] bg-[#fbfcff] p-3 transition hover:border-[#cfd9ec] hover:bg-white dark:border-[#26324f] dark:bg-[#121b32] dark:hover:bg-[#17213d] sm:rounded-[16px] sm:p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary dark:text-[#ff9b4f]">
          {guide.category}
        </p>
        <span className="shrink-0 text-[10px] font-bold text-[#8a94ad] dark:text-[#9aa8c7]">
          {guide.readingTime}
        </span>
      </div>
      <h3 className="mt-2 line-clamp-2 text-[12.5px] font-extrabold leading-tight tracking-[-0.02em] text-[#081642] dark:text-white sm:text-[15px]">
        {guide.title}
      </h3>
      <p className="mt-1.5 hidden text-[12px] font-medium leading-5 text-[#66718f] dark:text-[#aeb9d4] sm:line-clamp-2">
        {guide.summary}
      </p>
      <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-primary sm:mt-3 sm:text-[12px]">
        Abrir
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function DarkGuideLibraryCard({ guide }: { guide: GuideDetail }) {
  return (
    <Link
      href={`/guias/${guide.slug}`}
      className="group rounded-[16px] border border-[#26324f] bg-[#111a31] p-3.5 shadow-[0_10px_26px_rgba(0,0,0,0.13)] transition hover:-translate-y-0.5 hover:bg-[#151f3a] sm:rounded-[20px] sm:p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#ff9b4f] sm:text-[11px]">
            {guide.category}
          </p>
          <h2 className="mt-1.5 text-[14px] font-extrabold leading-tight tracking-[-0.02em] text-white min-[430px]:line-clamp-2 sm:mt-2 sm:text-[17px]">
            {guide.title}
          </h2>
        </div>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#243461] text-[#ff9b4f] sm:h-10 sm:w-10 sm:rounded-[12px]">
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
      </div>
      <p className="mt-2 line-clamp-2 text-[12px] font-medium leading-5 text-[#aeb9d4]">
        {guide.summary}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-1.5 sm:mt-4 sm:gap-2">
        <GuideMetaPill label="Lectura" value={guide.readingTime} />
        <GuideMetaPill label="Tipo" value="Referencial" />
      </div>
      <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#ff9b4f] sm:mt-4 sm:text-[13px]">
        Leer guia
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

function GuideMetaPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-[10px] bg-[#121b32] px-2 py-2 sm:rounded-[12px] sm:px-3">
      <p className="text-[8.5px] font-extrabold uppercase tracking-[0.1em] text-[#7f8cab] sm:text-[9.5px]">
        {label}
      </p>
      <p className="mt-1 line-clamp-2 text-[10.5px] font-extrabold leading-[1.2] tracking-[-0.01em] text-[#e8eeff] sm:text-[11.5px]">
        {value}
      </p>
    </div>
  );
}
