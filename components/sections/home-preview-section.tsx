import { Bell, ChevronRight } from "lucide-react";
import {
  calculators,
  guides,
  popularProcedures,
  sidebarItems
} from "@/data/home";
import { CalculatorCard } from "@/components/cards/calculator-card";
import { GuideCard } from "@/components/cards/guide-card";
import { ProcedureCard } from "@/components/cards/procedure-card";
import { SectionReveal } from "@/components/layout/section-reveal";
import { SearchBar } from "@/components/search/search-bar";

export function HomePreviewSection() {
  return (
    <section id="tramites" className="pb-16 pt-8 sm:pb-24">
      <div className="container-page">
        <SectionReveal>
          <div className="glass-line overflow-hidden rounded-[34px] p-3 sm:p-4">
            <div className="grid min-h-[720px] grid-cols-1 rounded-[26px] bg-slate-50/70 lg:grid-cols-[248px_1fr]">
              <aside className="hidden border-r border-border bg-white/70 p-5 lg:block">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-bold">ChileHub</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-success" />
                </div>
                <div className="space-y-2">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={
                          item.active
                            ? "flex items-center gap-3 rounded-2xl bg-blue-50 px-3 py-3 text-primary"
                            : "flex items-center gap-3 rounded-2xl px-3 py-3 text-slate-500"
                        }
                      >
                        <Icon className="h-4 w-4" />
                        <span className="text-sm font-semibold">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </aside>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <SearchBar compact />
                  <button
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-white text-slate-500 shadow-line"
                    aria-label="Notificaciones"
                  >
                    <Bell className="h-5 w-5" />
                  </button>
                </div>
                <div className="mb-7 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      Panel principal
                    </p>
                    <h2 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
                      Que necesitas resolver?
                    </h2>
                  </div>
                  <button className="hidden items-center gap-1 text-sm font-semibold text-primary sm:flex">
                    Ver todo
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {popularProcedures.map((item) => (
                    <ProcedureCard key={item.title} item={item} />
                  ))}
                </div>
                <div
                  id="guias"
                  className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold tracking-tight">
                        Guias destacadas
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {guides.map((item) => (
                        <GuideCard key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                  <div id="calculadoras">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold tracking-tight">
                        Calculadoras
                      </h3>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                      {calculators.map((item) => (
                        <CalculatorCard key={item.title} item={item} />
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
