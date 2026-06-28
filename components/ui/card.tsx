import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export function Card({
  asChild = false,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn("rounded-[22px] border border-border bg-card", className)}
      {...props}
    />
  );
}
