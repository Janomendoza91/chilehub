import { Bell, ChevronDown, ChevronRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import {
  guides,
  popularProcedures,
} from "@/data/home";
import { GuideCard } from "@/components/cards/guide-card";
import { ProcedureCard } from "@/components/cards/procedure-card";
import { SectionReveal } from "@/components/layout/section-reveal";

export function HomePreviewSection() {
  return (
    <section id="tramites" className="pb-6 pt-0 sm:pb-10">
      <div className="container-page">
        <SectionReveal>
          <div className="overflow-hidden rounded-[18px] border border-[#dfe5f0] bg-white shadow-[0_22px_58px_rgba(35,49,86,0.06)] sm:rounded-[24px]">
            <div className="min-h-[540px] bg-white sm:min-h-[610px]">
              <div className="min-w-0 bg-white px-3 py-3 sm:px-7 sm:py-5 lg:px-9 lg:py-6">
                <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-primary sm:text-[11px]">
                      Vista previa del producto
                    </p>
                    <h2 className="mt-1 text-[17px] font-extrabold leading-tight tracking-[-0.03em] text-[#081642] sm:text-[24px] lg:text-[28px]">
                      Preparacion organizada para avanzar
                    </h2>
                    <p className="mt-1.5 hidden max-w-[520px] text-[12px] font-medium leading-5 text-[#6c7897] sm:block sm:text-[13px]">
                      Despues de elegir un proceso, ChileHub ordena requisitos,
                      riesgos, documentos y proximos pasos en una sola vista.
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-2 sm:justify-end">
                    <div className="grid grid-cols-3 gap-1.5 rounded-[12px] bg-[#f6f8ff] p-1.5 sm:gap-2 sm:rounded-[14px] sm:p-2">
                      {[
                        ["Listo", "68%"],
                        ["Docs", "5"],
                        ["Riesgos", "3"]
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="rounded-[9px] bg-white px-2 py-1.5 text-center shadow-[0_8px_20px_rgba(35,49,86,0.04)] sm:rounded-[10px] sm:px-3 sm:py-2"
                        >
                          <p className="text-[9px] font-bold text-[#7b86a0] sm:text-[10px]">
                            {label}
                          </p>
                          <p className="mt-0.5 text-[12px] font-extrabold text-[#081642] sm:text-[13px]">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <button
                        className="grid h-9 w-9 place-items-center rounded-full border border-[#e6ebf4] bg-white text-[#52607f]"
                        aria-label="Notificaciones"
                      >
                        <Bell className="h-4 w-4" />
                      </button>
                      <button className="flex h-9 items-center gap-1.5 rounded-full border border-[#e6ebf4] bg-white px-2.5 text-[0px] font-bold text-[#283451] sm:gap-2 sm:px-3 sm:text-[12px]">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-[#e8f1ff] text-[10px]">
                          DS
                        </span>
                        <span className="hidden sm:inline">Diego Silva</span>
                        <ChevronDown className="h-3.5 w-3.5 text-[#7b86a0]" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mb-2.5 mt-4 flex items-center justify-between sm:mb-4 sm:mt-6">
                  <h3 className="text-[13px] font-extrabold tracking-[-0.02em] text-[#081642] sm:text-[17px]">
                    Tramites mas buscados
                  </h3>
                  <Link href="/tramites" className="text-[12px] font-bold text-primary">
                    Ver todos
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 xl:grid-cols-4">
                  {popularProcedures.map((item) => (
                    <ProcedureCard key={item.title} item={item} />
                  ))}
                </div>

                <div id="guias" className="mt-4 grid gap-3 lg:grid-cols-2">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-[13px] font-extrabold tracking-[-0.02em] text-[#081642] sm:text-[17px]">
                        Guias destacadas
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {guides.slice(0, 3).map((item) => (
                        <GuideCard key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-[13px] font-extrabold tracking-[-0.02em] text-[#081642] sm:text-[17px]">
                        Mas guias utiles
                      </h3>
                      <Link href="/guias" className="flex items-center gap-1 text-[11px] font-bold text-primary sm:text-[12px]">
                        Ver todas
                        <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      {guides.slice(3, 6).map((item) => (
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
      <button className="fixed bottom-5 right-5 z-40 flex h-12 items-center gap-2 rounded-full bg-primary px-4 text-[13px] font-bold text-white shadow-[0_18px_40px_rgba(42,81,232,0.28)] transition hover:bg-[#1f48e8]">
        <MessageCircle className="h-4 w-4" />
        Ayuda
      </button>
    </section>
  );
}
