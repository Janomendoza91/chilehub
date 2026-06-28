import type { CalculatorCard as CalculatorCardType } from "@/types/chilehub";

export function CalculatorCard({ item }: { item: CalculatorCardType }) {
  const Icon = item.icon;

  return (
    <div className="flex items-center gap-3 text-[13px] font-semibold text-[#52607f]">
      <div className="grid h-5 w-5 place-items-center rounded-md text-[#51607f]">
        <Icon className="h-4 w-4" />
      </div>
      <span>{item.title}</span>
    </div>
  );
}
