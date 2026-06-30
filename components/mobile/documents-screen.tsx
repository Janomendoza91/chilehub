import { ArrowLeft, FileText } from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

export function DocumentsScreen() {
  return (
    <PhoneShell
      className="h-[440px] w-full max-w-[166px] rounded-[24px] p-[3px] sm:h-[520px] sm:max-w-[220px] sm:rounded-[28px] sm:p-[4px] xl:h-[560px] xl:max-w-[236px]"
      innerClassName="rounded-[21px] sm:rounded-[24px] xl:rounded-[26px]"
    >
      <div className="flex h-full flex-col bg-white px-3 pb-2.5 pt-3 transition-colors dark:bg-[#0b1120] sm:px-5 sm:pb-4 sm:pt-4">
        <div className="flex items-center justify-between text-[10px] font-bold text-[#111936] dark:text-[#e8eeff]">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="mt-4 flex items-center justify-between sm:mt-6">
          <ArrowLeft className="h-3.5 w-3.5 text-[#6d7895] dark:text-[#aeb9d4] sm:h-4 sm:w-4" />
          <h3 className="text-[10.5px] font-extrabold text-[#081642] dark:text-white sm:text-[12px]">
            Paso a paso
          </h3>
          <span className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
        <div className="mt-4 flex items-center justify-between sm:mt-7">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div
              key={step}
              className={`grid h-4 w-4 place-items-center rounded-full text-[8px] font-bold sm:h-5 sm:w-5 sm:text-[9px] ${step === 2 ? "bg-primary text-white" : step < 2 ? "bg-[#eaf0ff] text-primary dark:bg-[#1c2a55] dark:text-[#9fb1ff]" : "bg-[#eef2f8] text-[#8b96ae] dark:bg-white/[0.08] dark:text-[#9aa8c7]"}`}
            >
              {step}
            </div>
          ))}
        </div>
        <p className="mt-5 text-[11px] font-bold text-primary sm:mt-9 sm:text-[13px]">
          Paso 2
        </p>
        <h3 className="mt-2 text-[15px] font-extrabold tracking-[-0.02em] text-[#081642] dark:text-white sm:mt-3 sm:text-[18px]">
          Firma del contrato
        </h3>
        <p className="mt-2 text-[9px] font-medium leading-3 text-[#5d6883] dark:text-[#aeb9d4] sm:mt-4 sm:text-[11px] sm:leading-5">
          Firma el contrato de compraventa con datos correctos.
        </p>
        <div className="mt-4 rounded-[11px] border border-[#e4e9f2] bg-white p-2.5 dark:border-white/10 dark:bg-white/[0.08] sm:mt-7 sm:rounded-[12px] sm:p-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#eef0ff] text-primary sm:h-10 sm:w-10 sm:rounded-[10px]">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
            <div className="min-w-0">
              <h4 className="text-[9.5px] font-extrabold text-[#081642] dark:text-white sm:text-[11px]">
                Contrato de compraventa
              </h4>
              <p className="mt-0.5 text-[8.5px] font-medium text-[#5d6883] dark:text-[#9aa8c7] sm:mt-1 sm:text-[10px]">
                Formato oficial.
              </p>
            </div>
          </div>
          <button className="mt-3 flex h-8 w-full items-center justify-center gap-1 rounded-[7px] bg-[#f4f6ff] text-[9.5px] font-bold text-primary dark:bg-[#1c2a55] dark:text-[#9fb1ff] sm:mt-4 sm:h-10 sm:gap-2 sm:text-[11px]">
            Revisar datos
          </button>
        </div>
        <div className="mt-4 sm:mt-8">
          <h4 className="text-[10.5px] font-extrabold text-[#081642] dark:text-white sm:text-[12px]">
            Consejo util
          </h4>
          <div className="mt-2 rounded-[10px] bg-[#f7fbff] p-2.5 text-[8.5px] font-medium leading-3 text-[#5d6883] dark:bg-white/[0.07] dark:text-[#aeb9d4] sm:mt-4 sm:rounded-[12px] sm:p-4 sm:text-[10px] sm:leading-4">
            Verifica los datos del comprador antes de firmar.
          </div>
        </div>
        <button className="mt-auto h-8 rounded-[7px] bg-primary text-[10px] font-bold text-white sm:h-10 sm:text-[11px]">
          Siguiente paso
        </button>
      </div>
    </PhoneShell>
  );
}

