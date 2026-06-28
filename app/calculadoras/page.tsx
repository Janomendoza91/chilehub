import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { CalculatorPanel } from "@/components/calculators/calculator-panel";

export const metadata = {
  title: "Calculadoras | ChileHub",
  description: "Calculadoras referenciales gratuitas para preparar procesos."
};

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
