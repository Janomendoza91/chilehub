import { ArrowUpRight } from "lucide-react";
import type { ProcedureCard as ProcedureCardType } from "@/types/chilehub";
import { Card } from "@/components/ui/card";

const statusLabel = {
  popular: "Popular",
  new: "Nuevo",
  fast: "Rapido"
};

export function ProcedureCard({ item }: { item: ProcedureCardType }) {
  const Icon = item.icon;

  return (
    <Card className="group p-4 transition-all hover:-translate-y-0.5 hover:shadow-air">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-bold text-slate-500">
          {statusLabel[item.status]}
        </span>
      </div>
      <h3 className="text-base font-bold tracking-tight">{item.title}</h3>
      <p className="mt-2 min-h-[42px] text-sm leading-5 text-muted-foreground">
        {item.description}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <span className="text-xs font-semibold text-slate-500">{item.meta}</span>
        <ArrowUpRight className="h-4 w-4 text-slate-400 transition-colors group-hover:text-primary" />
      </div>
    </Card>
  );
}
