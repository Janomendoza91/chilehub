import { Suspense } from "react";
import { SearchPageContent } from "@/components/search/search-page-content";
import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";

export const metadata = {
  title: "Buscar | ChileHub",
  description: "Busca tramites y guias referenciales en ChileHub."
};

export default function BuscarPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Buscar"
        title="Encuentra una ruta para prepararte."
        description="Busqueda local sobre las guias y tramites disponibles en esta version. No representa cobertura oficial completa."
      />
      <ReferenceNotice />
      <section className="pb-10 pt-6">
        <Suspense fallback={null}>
          <SearchPageContent />
        </Suspense>
      </section>
    </ProductShell>
  );
}
