"use client";

import type { ReactNode } from "react";

export function SectionReveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={className}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
