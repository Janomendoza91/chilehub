import { cn } from "@/lib/utils";

export function Logo({
  compact = false,
  responsiveText = false,
  className
}: {
  compact?: boolean;
  responsiveText?: boolean;
  className?: string;
}) {
  return (
    <a
      href="#"
      className={cn("flex min-w-0 items-center gap-2.5", className)}
      aria-label="ChileHub"
    >
      <span
        className={cn(
          "relative grid place-items-center rounded-[13px] bg-gradient-to-br from-[#204bff] to-[#e33b54] text-white shadow-[0_14px_28px_rgba(37,99,235,0.24)]",
          compact
            ? "h-8 w-8 shrink-0 rounded-[10px] text-[16px]"
            : "h-[58px] w-[58px] shrink-0 text-[28px]"
        )}
      >
        ★
      </span>
      <span
        className={cn(
          "font-bold tracking-[-0.02em] text-[#081642]",
          compact ? "text-[18px] lg:text-[22px]" : "text-[42px]",
          responsiveText ? "hidden sm:inline" : "inline"
        )}
      >
        ChileHub
      </span>
    </a>
  );
}
