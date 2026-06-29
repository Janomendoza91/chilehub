import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { PersonalDashboard } from "@/components/account/personal-dashboard";
import { procedures } from "@/data/content";

export const metadata = {
  title: "Guardados | ChileHub",
  description: "Procesos guardados en ChileHub."
};

export default function GuardadosPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Guardados"
        title="Tus tramites guardados."
        description="Procesos importantes, documentos pendientes y alertas de revision mensual en una vista local."
      />
      <ReferenceNotice />
      <PersonalDashboard procedures={procedures} view="saved" />
    </ProductShell>
  );
}
