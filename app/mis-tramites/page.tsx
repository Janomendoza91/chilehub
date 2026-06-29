import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { PersonalDashboard } from "@/components/account/personal-dashboard";
import { procedures } from "@/data/content";

export const metadata = {
  title: "Mis tramites | ChileHub",
  description: "Preparacion local de procesos en ChileHub."
};

export default function MisTramitesPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Mis tramites"
        title="Tu preparacion en un solo lugar."
        description="Historial, documentos pendientes, recordatorios y alertas referenciales guardadas localmente en este navegador."
      />
      <ReferenceNotice />
      <PersonalDashboard procedures={procedures} view="dashboard" />
    </ProductShell>
  );
}
