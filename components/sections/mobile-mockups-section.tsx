import { CompletedScreen } from "@/components/mobile/completed-screen";
import { DocumentsScreen } from "@/components/mobile/documents-screen";
import { OfficesScreen } from "@/components/mobile/offices-screen";
import { ProgressScreen } from "@/components/mobile/progress-screen";
import { SectionReveal } from "@/components/layout/section-reveal";

export function MobileMockupsSection() {
  return (
    <section id="oficinas" className="bg-[#fbfcff] pb-5 pt-0 sm:pb-8">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
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
