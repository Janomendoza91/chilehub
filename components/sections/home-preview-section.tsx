"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  guides,
  popularProcedures,
} from "@/data/home";
import { darkModeGuides, darkModeProcedures } from "@/data/dark-mode";
import { GuideCard } from "@/components/cards/guide-card";
import { ProcedureCard } from "@/components/cards/procedure-card";
import { SectionReveal } from "@/components/layout/section-reveal";
import { useChilehubMode } from "@/components/theme/chilehub-mode-provider";

export function HomePreviewSection() {
  const { isDarkMode } = useChilehubMode();
  const activeProcedures = isDarkMode ? darkModeProcedures : popularProcedures;
  const activeGuides = isDarkMode ? darkModeGuides : guides;

  return (
    <section id="tramites" className="pb-6 pt-0 transition-colors dark:bg-[#090e1b] sm:pb-10">
      <div className="container-page">
        <SectionReveal>
          <div className="overflow-hidden rounded-[18px] border border-[#dfe5f0] bg-white shadow-[0_22px_58px_rgba(35,49,86,0.06)] transition-colors dark:border-[#26324f] dark:bg-[#10172b] dark:shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:rounded-[24px]">
            <div className="min-h-[540px] bg-white transition-colors dark:bg-[#10172b] sm:min-h-[610px]">
              <div className="min-w-0 bg-white px-3 py-3 transition-colors dark:bg-[#10172b] sm:px-7 sm:py-5 lg:px-9 lg:py-6">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-primary dark:text-[#9fb1ff] sm:text-[11px]">
                      {isDarkMode ? "Vista modo oscuro" : "Vista previa del producto"}
                    </p>
                    <h2 className="mt-1 text-[17px] font-extrabold leading-tight tracking-[-0.03em] text-[#081642] dark:text-white sm:text-[24px] lg:text-[28px]">
                      {isDarkMode
                        ? "Guias discretas para decidir mejor"
                        : "Preparacion organizada para avanzar"}
                    </h2>
                    <p className="mt-1.5 hidden max-w-[560px] text-[12px] font-medium leading-5 text-[#6c7897] dark:text-[#aeb9d4] sm:block sm:text-[13px]">
                      {isDarkMode
                        ? "Al activar el modo oscuro, ChileHub prioriza temas legales de vida digital, plataformas, privacidad, cobros y reputacion."
                        : "Despues de elegir un proceso, ChileHub ordena requisitos, riesgos, documentos y proximos pasos en una sola vista."}
                    </p>
                  </div>
                </div>

                <div className="mb-2.5 mt-4 flex items-center justify-between sm:mb-4 sm:mt-6">
                  <h3 className="text-[13px] font-extrabold tracking-[-0.02em] text-[#081642] dark:text-white sm:text-[17px]">
                    {isDarkMode ? "Temas sensibles mas buscados" : "Tramites mas buscados"}
                  </h3>
                  <Link href="/tramites" prefetch={false} className="text-[12px] font-bold text-primary">
                    Ver todos
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 xl:grid-cols-4">
                  {activeProcedures.map((item) => (
                    <ProcedureCard key={item.title} item={item} />
                  ))}
                </div>

                <div id="guias" className="mt-4 grid gap-3 lg:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-[13px] font-extrabold tracking-[-0.02em] text-[#081642] dark:text-white sm:text-[17px]">
                        {isDarkMode ? "Privacidad y plataformas" : "Guias destacadas"}
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {activeGuides.slice(0, 3).map((item) => (
                        <GuideCard key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-[13px] font-extrabold tracking-[-0.02em] text-[#081642] dark:text-white sm:text-[17px]">
                        {isDarkMode ? "Riesgos y dinero online" : "Mas guias utiles"}
                      </h3>
                      <Link href="/guias" prefetch={false} className="flex items-center gap-1 text-[11px] font-bold text-primary sm:text-[12px]">
                        Ver todas
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {activeGuides.slice(3, 6).map((item) => (
                        <GuideCard key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

