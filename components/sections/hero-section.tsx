import {
  ArrowRight,
  Building2,
  Car,
  FileText,
  Plane,
  Search,
  ShieldCheck
} from "lucide-react";
import { SectionReveal } from "@/components/layout/section-reveal";

const quickActions = [
  { label: "Vender auto", icon: Car },
  { label: "Sacar pasaporte", icon: Plane },
  { label: "Abrir empresa", icon: Building2 },
  { label: "Documentos", icon: FileText }
];

const trustItems = [
  "Fuentes oficiales",
  "Costos estimados",
  "Errores frecuentes",
  "Donde continuar"
];

export function HeroSection() {
  return (
    <section className="relative bg-[#fbfcff] pb-6 pt-[136px] sm:pb-9 sm:pt-[164px] xl:pt-[126px] lg:pb-10">
      <div className="container-page">
        <SectionReveal className="mx-auto max-w-[920px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dfe6f4] bg-white px-3 py-1.5 text-[11px] font-bold text-primary shadow-[0_10px_24px_rgba(35,49,86,0.05)] sm:text-[12px]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Preparacion clara antes de avanzar
          </div>
          <h1 className="mx-auto max-w-[820px] text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#081642] min-[375px]:text-[38px] sm:text-[56px] lg:text-[68px]">
            Entiende que necesitas antes de empezar.
          </h1>
          <p className="mx-auto mt-3 max-w-[620px] text-[14px] font-medium leading-[1.5] text-[#4d5b7f] sm:mt-4 sm:text-[18px]">
            ChileHub ordena documentos, costos, tiempos, errores frecuentes y
            el siguiente paso para que llegues preparado.
          </p>
        </SectionReveal>

        <SectionReveal
          className="mx-auto mt-5 max-w-[850px] rounded-[20px] border border-[#dfe5f0] bg-white p-2.5 shadow-[0_24px_70px_rgba(35,49,86,0.08)] sm:mt-7 sm:rounded-[28px] sm:p-4"
          delay={0.12}
        >
          <div className="flex items-center gap-2 rounded-[16px] bg-[#f7f9ff] p-2">
            <Search className="ml-1.5 h-4 w-4 shrink-0 text-[#7a86a6] sm:ml-2 sm:h-5 sm:w-5" />
            <span className="min-w-0 flex-1 truncate text-left text-[13px] font-medium text-[#7b86a0] sm:text-[15px]">
              Que proceso necesitas preparar?
            </span>
            <button className="flex h-10 shrink-0 items-center gap-1.5 rounded-[12px] bg-primary px-3 text-[12px] font-bold text-white shadow-[0_12px_24px_rgba(42,81,232,0.22)] sm:h-11 sm:gap-2 sm:px-5 sm:text-[13px]">
              Buscar
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-2.5 grid grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  className="flex items-center gap-2 rounded-[14px] border border-[#e5ebf5] bg-white px-3 py-3 text-left text-[12px] font-bold text-[#283451] transition hover:border-[#cfd9ec] hover:bg-[#fbfcff]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#eef2ff] text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {action.label}
                </button>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal
          className="mx-auto mt-4 grid max-w-[850px] grid-cols-2 gap-2 sm:grid-cols-4"
          delay={0.18}
        >
          {trustItems.map((item) => (
            <div
              key={item}
              className="rounded-[14px] border border-[#e8edf6] bg-white px-3 py-2.5 text-center text-[11px] font-bold text-[#66718f] shadow-[0_10px_24px_rgba(35,49,86,0.035)] sm:text-[12px]"
            >
              {item}
            </div>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
