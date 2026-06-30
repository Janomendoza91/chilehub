import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

export function CompletedScreen() {
  return (
    <PhoneShell
      className="h-[440px] w-full max-w-[166px] rounded-[24px] p-[3px] sm:h-[520px] sm:max-w-[220px] sm:rounded-[28px] sm:p-[4px] xl:h-[560px] xl:max-w-[236px]"
      innerClassName="rounded-[21px] sm:rounded-[24px] xl:rounded-[26px]"
    >
      <div className="relative flex h-full flex-col bg-white px-3 pb-2.5 pt-3 text-center transition-colors dark:bg-[#0b1120] sm:px-5 sm:pb-3 sm:pt-4">
        <div className="flex w-full items-center justify-between text-[10px] font-bold text-[#111936] dark:text-[#e8eeff]">
          <span>9:41</span>
          <span>•••</span>
        </div>

        <div className="pointer-events-none absolute left-8 top-16 h-1.5 w-1.5 rounded-full bg-[#3ac37e]" />
        <div className="pointer-events-none absolute right-8 top-20 h-1.5 w-1.5 rounded-full bg-[#f35a68]" />
        <div className="pointer-events-none absolute left-12 top-28 h-1.5 w-1.5 rounded-full bg-[#f5b43c]" />

        <div className="mx-auto mt-11 grid h-[62px] w-[62px] place-items-center rounded-full bg-success text-white shadow-[0_18px_38px_rgba(34,168,99,0.24)] sm:mt-16 sm:h-[78px] sm:w-[78px]">
          <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10" />
        </div>

        <h3 className="mt-5 text-[16px] font-extrabold tracking-[-0.02em] text-[#081642] dark:text-white sm:mt-7 sm:text-[19px]">
          Tramite completado
        </h3>
        <p className="mx-auto mt-1.5 max-w-[135px] text-[9px] font-medium leading-3 text-[#5d6883] dark:text-[#aeb9d4] sm:mt-2 sm:max-w-[155px] sm:text-[10.5px] sm:leading-4">
          Ya tienes la preparacion lista para vender tu auto.
        </p>

        <div className="mt-5 rounded-[12px] border border-[#e4eaf5] bg-[#fbfcff] p-2.5 text-left dark:border-white/10 dark:bg-[#111a31] sm:mt-7 sm:rounded-[14px] sm:p-3">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#eef2ff] text-primary sm:h-9 sm:w-9 sm:rounded-[11px]">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </div>
            <div>
              <h4 className="text-[10.5px] font-extrabold text-[#081642] dark:text-white sm:text-[12px]">
                Que sigue?
              </h4>
              <p className="mt-0.5 text-[8.5px] font-medium leading-3 text-[#5d6883] dark:text-[#aeb9d4] sm:text-[9.5px] sm:leading-4">
                Continua en Registro Civil para transferir el vehiculo.
              </p>
            </div>
          </div>
          <button className="mt-2.5 flex h-8 w-full items-center justify-center gap-1 rounded-[8px] border border-[#dfe5f3] bg-white text-[9.5px] font-bold text-primary dark:border-white/10 dark:bg-white/[0.08] dark:text-[#9fb1ff] sm:mt-3 sm:h-9 sm:text-[10.5px]">
            Ver oficinas cercanas
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <button className="mt-auto h-8 w-full rounded-[7px] bg-primary text-[10px] font-bold text-white sm:h-9 sm:text-[11px]">
          Finalizar
        </button>
      </div>
    </PhoneShell>
  );
}

