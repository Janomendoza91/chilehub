import Link from "next/link";
import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";

export const metadata = {
  title: "Ingresar | ChileHub",
  description: "Acceso futuro a ChileHub."
};

export default function IngresarPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Cuenta"
        title="El acceso personal todavia no esta activo."
        description="ChileHub es gratuito. Las cuentas se habilitaran cuando guardar progreso aporte valor real y exista manejo de datos adecuado."
      />
      <ReferenceNotice />
      <div className="pb-10 pt-6">
        <Link href="/tramites" className="inline-flex rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white">
          Usar ChileHub gratis
        </Link>
      </div>
    </ProductShell>
  );
}
