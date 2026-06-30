import type { GuideCard as GuideCardType } from "@/types/chilehub";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function GuideCard({ item }: { item: GuideCardType }) {
  const Icon = item.icon;
  const content = (
    <>
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[9px] bg-[#eef7ff] text-[#1597b6] dark:bg-[#153044] dark:text-[#7dd7ff] sm:h-9 sm:w-9">
        <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </div>
      <div className="min-w-0">
        <h3 className="line-clamp-2 text-[11px] font-bold leading-tight tracking-[-0.01em] text-[#101a3f] dark:text-white sm:truncate sm:text-[13px]">
          {item.title}
        </h3>
        <p className="mt-1 line-clamp-1 text-[9.5px] font-semibold text-[#5d6883] dark:text-[#aeb9d4] sm:truncate sm:text-[11.5px]">
          {item.label}
        </p>
      </div>
      <span className={`shrink-0 rounded-full px-2 py-1 text-[9.5px] font-extrabold leading-none sm:px-2.5 sm:text-[10px] ${item.time === "Nuevo" ? "bg-[#ffeaf0] text-[#b4233c] dark:bg-[#3a2330] dark:text-[#ff98b4]" : "bg-[#e5f8ec] text-[#137a46] dark:bg-[#173527] dark:text-[#81e6b0]"}`}>
        {item.time}
      </span>
    </>
  );

  const className =
    "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 rounded-[12px] border-[#e7ebf3] p-2.5 transition-all hover:shadow-air dark:border-[#26324f] dark:bg-[#111a31] dark:hover:bg-[#151f3a] sm:gap-4 sm:p-3.5";

  return item.href ? (
    <Card asChild className={className}>
      <Link href={item.href} prefetch={false}>{content}</Link>
    </Card>
  ) : (
    <Card className={className}>{content}</Card>
  );
}

