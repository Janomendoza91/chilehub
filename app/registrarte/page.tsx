import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { AccountAccessPanel } from "@/components/account/account-access-panel";

export const metadata = {
  title: "Registrarte | ChileHub",
  description: "Registro local gratuito en ChileHub."
};

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
