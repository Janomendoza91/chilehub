import { CompletedScreen } from "@/components/mobile/completed-screen";
import { DocumentsScreen } from "@/components/mobile/documents-screen";
import { OfficesScreen } from "@/components/mobile/offices-screen";
import { ProgressScreen } from "@/components/mobile/progress-screen";
import { SectionReveal } from "@/components/layout/section-reveal";

export function MobileMockupsSection() {
  return (
    <section id="oficinas" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-page">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-primary">Experiencia movil</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Cada tramite se convierte en una ruta visual.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Progreso, documentos, confirmaciones y oficinas aparecen como pasos
            claros, sin lenguaje confuso.
          </p>
        </SectionReveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          <SectionReveal delay={0.04}>
            <ProgressScreen />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <DocumentsScreen />
          </SectionReveal>
          <SectionReveal delay={0.12}>
            <CompletedScreen />
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <OfficesScreen />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
