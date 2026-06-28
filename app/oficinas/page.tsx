import { ArrowUpRight, MapPin } from "lucide-react";
import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { officeChannels } from "@/data/content";

export const metadata = {
  title: "Oficinas y canales | ChileHub",
  description: "Canales externos donde continuar procesos fuera de ChileHub."
};

export default function OficinasPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Oficinas y canales"
        title="Donde continuar fuera de ChileHub."
        description="ChileHub no ejecuta tramites. Esta vista te ayuda a identificar canales externos frecuentes para confirmar requisitos y avanzar."
      />
      <ReferenceNotice />
      <section className="grid gap-3 pb-10 pt-6 sm:grid-cols-2">
        {officeChannels.map((channel) => (
          <a
            key={channel.url}
            href={channel.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[22px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.045)] transition hover:-translate-y-0.5 hover:shadow-air"
          >
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#eef2ff] text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                  {channel.type}
                </p>
                <h2 className="mt-2 text-[20px] font-extrabold leading-tight tracking-[-0.03em] text-[#081642]">
                  {channel.title}
                </h2>
              </div>
            </div>
            <p className="mt-4 text-[13px] font-medium leading-6 text-[#66718f]">
              {channel.description}
            </p>
            <div className="mt-5 flex items-center gap-1 text-[13px] font-bold text-primary">
              {channel.action}
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </a>
        ))}
      </section>
    </ProductShell>
  );
}
