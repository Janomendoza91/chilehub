"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import type { GuideDetail } from "@/types/chilehub";

const prioritySlugs = [
  "como-proteger-tu-clave-unica",
  "que-revisar-antes-de-firmar-finiquito",
  "como-preparar-registro-social-hogares"
];

export function GuidesBrowser({ guides }: { guides: GuideDetail[] }) {
  const [category, setCategory] = useState("Todas");
  const categories = ["Todas", ...Array.from(new Set(guides.map((guide) => guide.category)))];

  const filtered = useMemo(() => {
    if (category === "Todas") {
      return guides.filter((guide) => !prioritySlugs.includes(guide.slug));
    }

    return guides.filter(
      (guide) =>
        guide.category === category && !prioritySlugs.includes(guide.slug)
    );
  }, [category, guides]);

  const featured = prioritySlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is GuideDetail => Boolean(guide));

  return (
    <>
      <section className="grid gap-2.5 py-4 sm:grid-cols-3 sm:gap-3 sm:py-5">
        {featured.map((guide) => (
          <GuideFeatureCard key={guide.slug} guide={guide} />
        ))}
      </section>

      <section className="rounded-[20px] border border-[#dfe6f4] bg-white p-3.5 shadow-[0_16px_38px_rgba(35,49,86,0.045)] sm:p-4">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              Biblioteca
            </p>
            <h2 className="mt-1 text-[19px] font-extrabold tracking-[-0.04em] text-[#081642] sm:text-[22px]">
              {category === "Todas" ? "Todas las guias rapidas" : category}
            </h2>
          </div>
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={
                  category === item
                    ? "shrink-0 rounded-full bg-primary px-3 py-2 text-[11px] font-bold text-white"
                    : "shrink-0 rounded-full border border-[#e5ebf5] bg-[#fbfcff] px-3 py-2 text-[11px] font-bold text-[#52607f] transition hover:border-[#cfd9ec] hover:bg-white"
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 xl:grid-cols-3">
          {filtered.map((guide) => (
            <GuideCompactCard key={guide.slug} guide={guide} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-4 rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-4 text-[13px] font-semibold text-[#66718f]">
            No hay mas guias en esta categoria por ahora.
          </div>
        ) : null}
      </section>
    </>
  );
}

function GuideFeatureCard({ guide }: { guide: GuideDetail }) {
  return (
    <Link
      href={`/guias/${guide.slug}`}
      className="group rounded-[18px] border border-[#e3e9f4] bg-white p-4 shadow-[0_10px_26px_rgba(35,49,86,0.04)] transition hover:-translate-y-0.5 hover:shadow-air sm:rounded-[22px] sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px] bg-[#eef7ff] text-[#1597b6] sm:h-11 sm:w-11 sm:rounded-[14px]">
          <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#f7f9ff] px-2.5 py-1 text-[10px] font-bold text-[#66718f]">
          <Clock3 className="h-3 w-3" />
          {guide.readingTime}
        </span>
      </div>
      <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
        {guide.category}
      </p>
      <h2 className="mt-2 line-clamp-2 text-[16px] font-extrabold leading-tight tracking-[-0.03em] text-[#081642] sm:text-[20px]">
        {guide.title}
      </h2>
      <p className="mt-2 line-clamp-2 text-[12px] font-medium leading-5 text-[#66718f] sm:mt-3 sm:line-clamp-3 sm:text-[13px] sm:leading-6">
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
      className="group rounded-[14px] border border-[#e7edf6] bg-[#fbfcff] p-3 transition hover:border-[#cfd9ec] hover:bg-white sm:rounded-[16px] sm:p-4"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
          {guide.category}
        </p>
        <span className="shrink-0 text-[10px] font-bold text-[#8a94ad]">
          {guide.readingTime}
        </span>
      </div>
      <h3 className="mt-2 line-clamp-2 text-[12.5px] font-extrabold leading-tight tracking-[-0.02em] text-[#081642] sm:text-[15px]">
        {guide.title}
      </h3>
      <p className="mt-1.5 hidden text-[12px] font-medium leading-5 text-[#66718f] sm:line-clamp-2">
        {guide.summary}
      </p>
      <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-primary sm:mt-3 sm:text-[12px]">
        Abrir
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
