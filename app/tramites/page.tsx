import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { procedures } from "@/data/content";
import { ProcedureBrowser } from "@/components/procedures/procedure-browser";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tramites para preparar en Chile",
  description:
    "Biblioteca referencial de tramites en Chile con documentos, costos estimados, plazos, errores comunes y donde continuar.",
  path: "/tramites",
  keywords: [
    "tramites en Chile",
    "requisitos tramites Chile",
    "documentos para tramites",
    "costos tramites Chile"
  ]
});

export default function TramitesPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Tramites"
        title="Elige un proceso y llega preparado."
        description="Cada ficha organiza requisitos, documentos, costos referenciales, errores comunes y donde continuar fuera de ChileHub."
      />
      <ReferenceNotice />
      <ProcedureBrowser procedures={procedures} />
    </ProductShell>
  );
}
