import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { procedures } from "@/data/content";
import { ProcedureBrowser } from "@/components/procedures/procedure-browser";

export const metadata = {
  title: "Tramites | ChileHub",
  description: "Biblioteca referencial de procesos para prepararte mejor."
};

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
