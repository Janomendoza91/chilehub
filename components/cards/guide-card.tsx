import type { GuideCard as GuideCardType } from "@/types/chilehub";
import { Card } from "@/components/ui/card";

export function GuideCard({ item }: { item: GuideCardType }) {
  const Icon = item.icon;

  return (
    <Card className="flex items-center gap-4 p-4 transition-all hover:shadow-air">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-50 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold text-muted-foreground">
          {item.label}
        </p>
        <h3 className="truncate text-sm font-bold tracking-tight">
          {item.title}
        </h3>
      </div>
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary">
        {item.time}
      </span>
    </Card>
  );
}
