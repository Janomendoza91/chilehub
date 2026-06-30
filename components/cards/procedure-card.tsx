import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ProcedureCard as ProcedureCardType } from "@/types/chilehub";
import { Card } from "@/components/ui/card";

const iconTone = {
  popular: "bg-[#eee7ff] text-[#7d4ce6] dark:bg-[#271b48] dark:text-[#b9a4ff]",
  new: "bg-[#e9efff] text-primary dark:bg-[#1c2a55] dark:text-[#9fb1ff]",
  fast: "bg-[#fff1df] text-[#f07b22] dark:bg-[#3b2814] dark:text-[#ffb46f]"
};

export function ProcedureCard({ item }: { item: ProcedureCardType }) {
  const Icon = item.icon;
  const content = (
    <>
      <div className="mb-3 flex items-start justify-between gap-3 sm:mb-5">
        <div className={`grid h-8 w-8 place-items-center rounded-[9px] sm:h-10 sm:w-10 ${iconTone[item.status]}`}>
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </div>
      </div>
      <h3 className="text-[11px] font-bold leading-[1.12] tracking-[-0.02em] text-[#081642] dark:text-white sm:text-[15px]">
        {item.title}
      </h3>
      <p className="mt-1.5 hidden min-h-[32px] text-[10.5px] leading-4 text-[#6c7897] dark:text-[#aeb9d4] sm:block sm:text-[12px] sm:leading-5">
        {item.description}
      </p>
      <div className="mt-3 flex items-center gap-1 text-[10.5px] font-bold text-primary sm:mt-5 sm:text-[12px]">
        <span>{item.meta}</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </>
  );

  const className =
    "group block min-h-[112px] p-2.5 shadow-[0_8px_24px_rgba(38,52,94,0.035)] transition-all hover:-translate-y-0.5 hover:shadow-air dark:border-[#26324f] dark:bg-[#111a31] dark:hover:bg-[#151f3a] sm:min-h-[170px] sm:p-4 xl:min-h-[190px]";

  return item.href ? (
    <Card asChild className={className}>
      <Link href={item.href} prefetch={false}>{content}</Link>
    </Card>
  ) : (
    <Card className={className}>{content}</Card>
  );
}

