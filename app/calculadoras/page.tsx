import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { CalculatorPanel } from "@/components/calculators/calculator-panel";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Calculadoras referenciales para tramites en Chile",
  description:
    "Calculadoras gratuitas y referenciales para estimar variables antes de confirmar valores oficiales en la fuente correspondiente.",
  path: "/calculadoras"
});

export default function CalculadorasPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Calculadoras"
        title="Estimaciones simples antes de avanzar."
        description="Herramientas gratuitas para ordenar numeros y variables antes de revisar el valor final en la fuente correspondiente."
      />
      <ReferenceNotice />
      <section className="pb-8 pt-4">
        <CalculatorPanel />
      </section>
    </ProductShell>
  );
}
