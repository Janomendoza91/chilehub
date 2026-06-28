import Link from "next/link";
import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";

export const metadata = {
  title: "Guardados | ChileHub",
  description: "Procesos guardados en ChileHub."
};

export default function GuardadosPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Guardados"
        title="Guarda claridad, no ruido."
        description="El guardado personal requiere cuenta y persistencia. Por ahora puedes navegar las guias y tramites disponibles."
      />
      <ReferenceNotice />
      <div className="pb-10 pt-6">
        <Link href="/guias" className="inline-flex rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white">
          Revisar guias
        </Link>
      </div>
    </ProductShell>
  );
}
