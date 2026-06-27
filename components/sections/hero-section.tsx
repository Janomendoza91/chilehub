import { CalendarCheck2, FileCheck2 } from "lucide-react";
import { FloatingStatusCard } from "@/components/cards/floating-status-card";
import { SectionReveal } from "@/components/layout/section-reveal";
import { HeroPhone } from "@/components/mobile/hero-phone";
import { SearchBar } from "@/components/search/search-bar";

export function HeroSection() {
  return (
    <section className="relative pt-[138px]">
      <div className="container-page">
        <SectionReveal className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-line">
            <span className="h-2 w-2 rounded-full bg-success" />
            Plataforma visual para tramites en Chile
          </div>
          <h1 className="text-balance text-[48px] font-bold leading-[0.98] tracking-tight text-slate-950 sm:text-[68px] lg:text-[82px]">
            Completa cualquier tramite en Chile sin perder tiempo.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-8 text-muted-foreground sm:text-xl">
            ChileHub organiza requisitos, documentos, costos y oficinas en una
            experiencia guiada, visual y simple.
          </p>
        </SectionReveal>
        <SectionReveal className="mt-9" delay={0.08}>
          <SearchBar />
        </SectionReveal>
        <div className="relative mx-auto mt-16 min-h-[580px] max-w-5xl">
          <SectionReveal className="absolute left-0 top-20 hidden lg:block" delay={0.15}>
            <FloatingStatusCard
              icon={FileCheck2}
              eyebrow="Documentos"
              title="Checklist claro"
              caption="Solo ves lo que necesitas para avanzar."
            />
          </SectionReveal>
          <SectionReveal className="relative z-10" delay={0.2}>
            <HeroPhone />
          </SectionReveal>
          <SectionReveal className="absolute right-0 top-40 hidden lg:block" delay={0.25}>
            <FloatingStatusCard
              icon={CalendarCheck2}
              eyebrow="Agenda"
              title="Siguiente paso"
              caption="Recibe la accion exacta para continuar."
            />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
