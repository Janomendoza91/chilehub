import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { AccountAccessPanel } from "@/components/account/account-access-panel";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ingresar",
  description: "Acceso local gratuito a ChileHub.",
  path: "/ingresar",
  noIndex: true
});

export default function IngresarPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Cuenta"
        title="Vuelve a tu preparacion."
        description="Activa o revisa tu espacio personal gratuito guardado localmente en este navegador."
      />
      <ReferenceNotice />
      <AccountAccessPanel mode="login" />
    </ProductShell>
  );
}
