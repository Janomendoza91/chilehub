import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { PersonalDashboard } from "@/components/account/personal-dashboard";
import { procedures } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Mis tramites",
  description: "Preparacion local de procesos en ChileHub.",
  path: "/mis-tramites",
  noIndex: true
});

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
