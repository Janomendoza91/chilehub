import { CheckCircle2 } from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

export function ProgressScreen() {
  return (
    <PhoneShell className="h-[474px] w-[230px]">
      <div className="h-full px-5 pt-10">
        <p className="text-xs font-semibold text-primary">Progreso</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">
          Licencia clase B
        </h3>
        <div className="my-6 rounded-[26px] bg-blue-50 p-5">
          <div className="grid h-24 w-24 place-items-center rounded-full border-[10px] border-blue-200 bg-white text-xl font-bold text-primary">
            72%
          </div>
        </div>
        <div className="space-y-3">
          {["Requisitos", "Documentos", "Pago municipal"].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-sm font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}
