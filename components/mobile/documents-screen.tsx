import { FileCheck2, FileText } from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

export function DocumentsScreen() {
  return (
    <PhoneShell className="h-[474px] w-[230px]">
      <div className="h-full bg-slate-50 px-5 pt-10">
        <p className="text-xs font-semibold text-primary">Documentos</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">Checklist</h3>
        <div className="mt-7 space-y-3">
          {[
            ["Cedula vigente", true],
            ["Licencia anterior", true],
            ["Certificado medico", false],
            ["Comprobante pago", false]
          ].map(([label, done]) => (
            <div
              key={String(label)}
              className="flex items-center gap-3 rounded-2xl bg-white p-3"
            >
              {done ? (
                <FileCheck2 className="h-5 w-5 text-success" />
              ) : (
                <FileText className="h-5 w-5 text-slate-400" />
              )}
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}
