import Link from "next/link";
import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";

export const metadata = {
  title: "Registrarte | ChileHub",
  description: "Registro futuro en ChileHub."
};

export default function RegistrartePage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Registro"
        title="No necesitas cuenta para prepararte."
        description="La plataforma es gratuita y puedes revisar tramites, guias y calculadoras sin registrarte. El registro se activara cuando tenga una utilidad clara."
      />
      <ReferenceNotice />
      <div className="pb-10 pt-6">
        <Link href="/buscar" className="inline-flex rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white">
          Buscar un proceso
        </Link>
      </div>
    </ProductShell>
  );
}
