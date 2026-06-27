import { CheckCircle2 } from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

export function CompletedScreen() {
  return (
    <PhoneShell className="h-[474px] w-[230px]">
      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="grid h-24 w-24 place-items-center rounded-full bg-emerald-50 text-success">
          <CheckCircle2 className="h-12 w-12" />
        </div>
        <h3 className="mt-7 text-2xl font-bold tracking-tight">
          Tramite listo
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Guardamos el resumen y los documentos para tu proximo paso.
        </p>
        <button className="mt-8 h-11 rounded-full bg-primary px-6 text-sm font-bold text-white">
          Ver resumen
        </button>
      </div>
    </PhoneShell>
  );
}
