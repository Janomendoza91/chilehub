import { ArrowLeft, MapPin } from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

const offices = [
  ["Registro Civil Providencia", "2.1 km"],
  ["Registro Civil Nunoa", "3.6 km"],
  ["Registro Civil Santiago", "5.4 km"]
] as const;

export function OfficesScreen() {
  return (
    <PhoneShell
      className="h-[440px] w-full max-w-[166px] rounded-[24px] p-[3px] sm:h-[520px] sm:max-w-[220px] sm:rounded-[28px] sm:p-[4px] xl:h-[560px] xl:max-w-[236px]"
      innerClassName="rounded-[21px] sm:rounded-[24px] xl:rounded-[26px]"
    >
      <div className="flex h-full flex-col bg-white pt-3 sm:pt-4">
        <div className="flex items-center justify-between px-3 text-[10px] font-bold text-[#111936] sm:px-5">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="mt-4 flex items-center justify-between px-3 sm:mt-6 sm:px-5">
          <ArrowLeft className="h-3.5 w-3.5 text-[#6d7895] sm:h-4 sm:w-4" />
          <h3 className="text-[10px] font-extrabold text-[#081642] sm:text-[12px]">
            Oficinas cercanas
          </h3>
          <span className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </div>
        <div className="relative mt-4 h-[118px] overflow-hidden bg-[#edf2f8] sm:mt-5 sm:h-[168px]">
          <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(90deg,#dce3ee_1px,transparent_1px),linear-gradient(#dce3ee_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:28px_28px]" />
          {[
            "left-6 top-14 text-primary sm:left-8 sm:top-20",
            "left-20 top-9 text-success sm:left-28 sm:top-14",
            "right-6 top-16 text-success sm:right-10 sm:top-24"
          ].map((pos) => (
            <span key={pos} className={`absolute ${pos}`}>
              <MapPin className="h-5 w-5 fill-current sm:h-6 sm:w-6" />
            </span>
          ))}
        </div>
        <div className="-mt-3 space-y-2 px-3 sm:-mt-4 sm:space-y-3 sm:px-5">
          {offices.map(([name, distance]) => (
            <div
              key={name}
              className="relative rounded-[10px] border border-[#e4e9f2] bg-white p-2.5 shadow-[0_10px_26px_rgba(35,49,86,0.06)] sm:rounded-[11px] sm:p-4"
            >
              <h4 className="truncate text-[9.5px] font-extrabold text-[#081642] sm:text-[11px]">
                {name}
              </h4>
              <div className="mt-1.5 flex items-center justify-between sm:mt-2">
                <span className="text-[8.5px] font-bold text-[#f07b22] sm:text-[9px]">
                  {distance}
                </span>
                <span className="text-[8.5px] font-bold text-primary sm:text-[9px]">
                  Ver detalles
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto grid h-10 grid-cols-4 border-t border-[#e9edf6] px-2 pt-1.5 text-center text-[7px] font-semibold text-[#8791aa] sm:h-[48px] sm:px-4 sm:pt-2 sm:text-[8px]">
          {["Inicio", "Tramites", "Guardados", "Perfil"].map((item, index) => (
            <div key={item} className={index === 0 ? "text-primary" : ""}>
              <div className="mx-auto mb-1 h-2.5 w-2.5 rounded-[4px] bg-current sm:h-3 sm:w-3" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}
