import type { CalculatorCard as CalculatorCardType } from "@/types/chilehub";
import { Card } from "@/components/ui/card";

export function CalculatorCard({ item }: { item: CalculatorCardType }) {
  const Icon = item.icon;

  return (
    <Card className="p-4">
      <div className="mb-5 flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-success">
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="text-xs font-semibold text-muted-foreground">
        {item.title}
      </p>
      <h3 className="mt-1 text-2xl font-bold tracking-tight">{item.value}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
    </Card>
  );
}
