import {
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  FileText
} from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

const steps = [
  { label: "Revisar requisitos", done: true },
  { label: "Juntar documentos", done: true },
  { label: "Agendar hora", done: false },
  { label: "Finalizar tramite", done: false }
];

export function HeroPhone() {
  return (
    <PhoneShell>
      <div className="flex h-full flex-col bg-white px-5 pb-5 pt-10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-muted-foreground">
              Tramite activo
            </p>
            <h3 className="mt-1 text-xl font-bold tracking-tight">
              Renovar licencia
            </h3>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-primary">
            <BadgeCheck className="h-5 w-5" />
          </div>
        </div>
        <div className="rounded-[24px] bg-slate-50 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Progreso
            </span>
            <span className="text-xs font-bold text-primary">52%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-200">
            <div className="h-full w-[52%] rounded-full bg-primary" />
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-white p-3"
            >
              {step.done ? (
                <CheckCircle2 className="h-5 w-5 text-success" />
              ) : (
                <span className="h-5 w-5 rounded-full border border-slate-300" />
              )}
              <span className="flex-1 text-sm font-semibold text-slate-700">
                {step.label}
              </span>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </div>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-blue-50 p-3">
            <FileText className="mb-4 h-5 w-5 text-primary" />
            <p className="text-xs font-bold">3 documentos</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-3">
            <CalendarDays className="mb-4 h-5 w-5 text-success" />
            <p className="text-xs font-bold">Hora sugerida</p>
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}
