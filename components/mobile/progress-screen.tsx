import { ArrowLeft, Check } from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

const documents = [
  { label: "Permiso circulacion", done: true },
  { label: "Revision tecnica", done: true },
  { label: "SOAP vigente", done: true },
  { label: "Cedula identidad", done: false },
  { label: "Certificado multas", done: false, hideOnMobile: true }
];

export function ProgressScreen() {
  return (
    <PhoneShell
      className="h-[440px] w-full max-w-[166px] rounded-[24px] p-[3px] sm:h-[520px] sm:max-w-[220px] sm:rounded-[28px] sm:p-[4px] xl:h-[560px] xl:max-w-[236px]"
      innerClassName="rounded-[21px] sm:rounded-[24px] xl:rounded-[26px]"
    >
      <div className="flex h-full flex-col bg-white px-3 pb-2.5 pt-3 sm:px-4 sm:pb-3 sm:pt-4">
        <div className="flex items-center justify-between text-[10px] font-bold text-[#111936]">
          <span>9:41</span>
          <span>•••</span>
        </div>

        <div className="mt-3 flex items-center gap-2 sm:mt-4">
          <button className="text-[#6d7895]" aria-label="Volver">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-extrabold tracking-[-0.02em] text-[#081642] sm:text-[17px]">
              Vender un auto
            </h3>
            <p className="mt-0.5 truncate text-[8.5px] font-medium text-[#6f7a96] sm:text-[10px]">
              Preparacion segura
            </p>
          </div>
        </div>

        <div className="mt-3 rounded-[12px] bg-[#f7f9ff] p-2.5 sm:mt-4 sm:p-3">
          <div className="flex items-center justify-between text-[9.5px] sm:text-[10.5px]">
            <span className="font-bold text-[#52607f]">Paso 1 de 6</span>
            <span className="font-bold text-[#8a94ad]">16%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-[#e1e8f5]">
            <div className="h-full w-[16%] rounded-full bg-primary" />
          </div>
          <div className="mt-3 rounded-[10px] border border-[#e6ebf4] bg-white p-2">
            <p className="text-[8.5px] font-bold text-[#6b7692] sm:text-[10px]">
              Paso actual
            </p>
            <h4 className="mt-0.5 text-[11px] font-extrabold text-[#081642] sm:text-[12px]">
              Reune documentos
            </h4>
          </div>
        </div>

        <div className="mt-3 sm:mt-4">
          <h4 className="text-[10.5px] font-extrabold text-[#081642] sm:text-[11.5px]">
            Documentos necesarios
          </h4>
          <div className="mt-2 space-y-1 sm:mt-2.5 sm:space-y-1.5">
            {documents.map((document) => (
              <div
                key={document.label}
                className={
                  document.hideOnMobile
                    ? "hidden items-center gap-1.5 rounded-[8px] bg-[#f8faff] px-2 py-1 text-[8px] font-semibold text-[#6f7a96] sm:flex sm:gap-2 sm:rounded-[9px] sm:px-2.5 sm:py-1.5 sm:text-[9px]"
                    : "flex items-center gap-1.5 rounded-[8px] bg-[#f8faff] px-2 py-1 text-[8px] font-semibold text-[#6f7a96] sm:gap-2 sm:rounded-[9px] sm:px-2.5 sm:py-1.5 sm:text-[9px]"
                }
              >
                <span className="h-3 w-3 shrink-0 rounded-full border border-[#cfd6e5]" />
                <span className="min-w-0 flex-1 truncate">
                  {document.label}
                </span>
                {document.done ? (
                  <Check className="h-3.5 w-3.5 shrink-0 text-success" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <button className="mt-auto h-8 rounded-[7px] bg-primary text-[10px] font-bold text-white sm:h-9 sm:text-[11px]">
          Siguiente paso
        </button>
      </div>
    </PhoneShell>
  );
}
