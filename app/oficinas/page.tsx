import { ArrowUpRight, CheckCircle2, MapPin } from "lucide-react";
import {
  PageIntro,
  ProductShell,
  ReferenceNotice
} from "@/components/layout/product-shell";
import { officeChannels } from "@/data/content";
import { nearbyRegistroCivilOffices } from "@/data/offices";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Oficinas y canales externos para tramites",
  description:
    "Canales externos referenciales donde confirmar requisitos, horarios, disponibilidad y continuar procesos fuera de ChileHub.",
  path: "/oficinas"
});

export default function OficinasPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Oficinas y canales"
        title="Donde continuar fuera de ChileHub."
        description="ChileHub no ejecuta tramites. Esta vista te ayuda a identificar canales externos frecuentes para confirmar requisitos y avanzar."
      />
      <ReferenceNotice />
      <section id="oficinas-cercanas" className="pb-8 pt-6">
        <div className="overflow-hidden rounded-[26px] border border-[#dfe6f4] bg-white shadow-[0_18px_46px_rgba(35,49,86,0.05)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[310px] bg-[#edf2f8]">
              <div className="absolute inset-0 opacity-75 [background-image:linear-gradient(90deg,#dce3ee_1px,transparent_1px),linear-gradient(#dce3ee_1px,transparent_1px)] [background-size:30px_30px]" />
              <div className="absolute left-6 top-6 max-w-[250px] rounded-[20px] bg-white/95 p-4 shadow-[0_18px_38px_rgba(35,49,86,0.09)]">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
                  Oficinas cercanas
                </p>
                <h2 className="mt-2 text-[24px] font-extrabold leading-tight tracking-[-0.05em] text-[#081642]">
                  Registro Civil para transferencia vehicular
                </h2>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#66718f]">
                  Distancias referenciales para elegir donde confirmar y continuar.
                </p>
              </div>
              <span className="absolute left-[25%] top-[56%] text-primary">
                <MapPin className="h-10 w-10 fill-current drop-shadow-sm" />
              </span>
              <span className="absolute left-[57%] top-[35%] text-success">
                <MapPin className="h-8 w-8 fill-current drop-shadow-sm" />
              </span>
              <span className="absolute right-[16%] top-[62%] text-success">
                <MapPin className="h-8 w-8 fill-current drop-shadow-sm" />
              </span>
              <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-[11px] font-extrabold text-[#52607f] shadow-[0_10px_24px_rgba(35,49,86,0.08)]">
                Ubicacion referencial
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
                    Donde seguir
                  </p>
                  <h2 className="mt-2 text-[26px] font-extrabold leading-tight tracking-[-0.05em] text-[#081642]">
                    Elige una oficina y confirma antes de ir.
                  </h2>
                </div>
                <span className="w-fit rounded-full bg-[#e5f8ec] px-3 py-1 text-[11px] font-extrabold text-[#20a660]">
                  Gratis
                </span>
              </div>

              <p className="mt-3 text-[13px] font-semibold leading-6 text-[#66718f]">
                ChileHub no agenda ni ejecuta el tramite. Te mostramos opciones
                referenciales para que confirmes direccion, horario y disponibilidad
                en el canal oficial.
              </p>

              <div className="mt-5 grid gap-3">
                {nearbyRegistroCivilOffices.map((office) => (
                  <article
                    id={office.id}
                    key={office.id}
                    className={
                      office.badge === "Mas cercana"
                        ? "scroll-mt-28 rounded-[20px] border border-[#dce8ff] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.08)]"
                        : "scroll-mt-28 rounded-[18px] border border-[#edf1f7] bg-[#f8faff] p-4"
                    }
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-[17px] font-extrabold tracking-[-0.03em] text-[#081642]">
                            {office.name}
                          </h3>
                          <span className="rounded-full bg-[#eef2ff] px-2.5 py-1 text-[10px] font-extrabold text-primary">
                            {office.badge}
                          </span>
                        </div>
                        <p className="mt-2 text-[13px] font-semibold leading-5 text-[#66718f]">
                          {office.summary}
                        </p>
                      </div>
                      <span className="w-fit rounded-full bg-[#fff7ed] px-3 py-1 text-[12px] font-extrabold text-[#f07b22]">
                        {office.distance}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-2 text-[12px] font-semibold leading-5 text-[#66718f]">
                      <div className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                        <span>{office.hours}</span>
                      </div>
                    </div>

                    <a
                      href={office.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-[13px] font-extrabold text-primary"
                    >
                      {office.action}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 pt-2">
        <div className="mb-4">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
            Canales generales
          </p>
          <h2 className="mt-2 text-[24px] font-extrabold tracking-[-0.05em] text-[#081642]">
            Cuatro sitios externos para confirmar informacion.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
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
        </div>
      </section>
    </ProductShell>
  );
}
