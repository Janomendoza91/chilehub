import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PhoneShell({
  children,
  className,
  innerClassName
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[700px] w-[342px] rounded-[48px] border-[3px] border-[#161922] bg-[#11131a] p-[7px] shadow-phone",
        className
      )}
    >
      <div className="absolute left-1/2 top-[10px] z-20 h-[18px] w-[66px] -translate-x-1/2 rounded-full bg-[#080a10] sm:top-[18px] sm:h-[26px] sm:w-[96px]" />
      <div
        className={cn(
          "h-full overflow-hidden rounded-[40px] bg-white transition-colors dark:bg-[#0b1120]",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

