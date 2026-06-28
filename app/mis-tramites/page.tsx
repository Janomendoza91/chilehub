import Link from "next/link";
import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";

export const metadata = {
  title: "Mis tramites | ChileHub",
  description: "Preparacion local de procesos en ChileHub."
};

export default function MisTramitesPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Mis tramites"
        title="Tu preparacion empieza al elegir un proceso."
        description="En esta version puedes revisar fichas y checklists. Guardado personal y cuentas vendran cuando exista persistencia."
      />
      <ReferenceNotice />
      <div className="pb-10 pt-6">
        <Link href="/tramites" className="inline-flex rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white">
          Ver tramites disponibles
        </Link>
      </div>
    </ProductShell>
  );
}
