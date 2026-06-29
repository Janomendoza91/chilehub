import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { AccountAccessPanel } from "@/components/account/account-access-panel";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Registrarte",
  description: "Registro local gratuito en ChileHub.",
  path: "/registrarte",
  noIndex: true
});

export default function RegistrartePage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Registro"
        title="Activa tu espacio personal gratuito."
        description="Guarda tramites, documentos, historial y recordatorios en este navegador, sin cobros ni subida de archivos."
      />
      <ReferenceNotice />
      <AccountAccessPanel mode="register" />
    </ProductShell>
  );
}
