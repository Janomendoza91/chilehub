import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneShell({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[534px] w-[258px] rounded-[42px] border border-slate-200 bg-slate-950 p-2 shadow-phone",
        className
      )}
    >
      <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-950" />
      <div className="h-full overflow-hidden rounded-[34px] bg-white">
        {children}
      </div>
    </div>
  );
}
