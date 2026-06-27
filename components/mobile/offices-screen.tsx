import { MapPin } from "lucide-react";
import { PhoneShell } from "@/components/mobile/phone-shell";

export function OfficesScreen() {
  return (
    <PhoneShell className="h-[474px] w-[230px]">
      <div className="h-full px-5 pt-10">
        <p className="text-xs font-semibold text-primary">Oficinas</p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight">Cerca de ti</h3>
        <div className="mt-6 h-36 rounded-[26px] bg-blue-50 p-4">
          <div className="relative h-full rounded-[20px] bg-white">
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-white shadow-air">
              <MapPin className="h-6 w-6" />
            </span>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {["Municipalidad Providencia", "Registro Civil Nunoa"].map(
            (office) => (
              <div key={office} className="rounded-2xl border border-border p-3">
                <p className="text-sm font-bold">{office}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Hora disponible esta semana
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </PhoneShell>
  );
}
