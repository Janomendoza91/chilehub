import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { PersonalDashboard } from "@/components/account/personal-dashboard";
import { procedures } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guardados",
  description: "Procesos guardados localmente en ChileHub.",
  path: "/guardados",
  noIndex: true
});

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
