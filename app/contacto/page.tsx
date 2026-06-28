import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";

export const metadata = {
  title: "Contacto | ChileHub",
  description: "Contacto y contexto de ChileHub."
};

export default function ContactoPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Contacto"
        title="Ayudanos a detectar informacion confusa."
        description="ChileHub organiza informacion referencial. Si una fuente cambio o un proceso necesita revision, el siguiente paso sera habilitar canales de reporte."
      />
      <ReferenceNotice />
      <section className="grid gap-3 pb-10 pt-6 sm:grid-cols-3">
        {["Reportar informacion", "Sugerir tramite", "Hablar con ChileHub"].map((item) => (
          <div key={item} className="rounded-[22px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)]">
            <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
              {item}
            </h2>
            <p className="mt-2 text-[13px] font-medium leading-6 text-[#66718f]">
              Canal informativo pendiente de activacion en una version posterior.
            </p>
          </div>
        ))}
      </section>
    </ProductShell>
  );
}
