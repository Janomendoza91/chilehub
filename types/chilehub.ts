import type { LucideIcon } from "lucide-react";

export type ProcedureCard = {
  title: string;
  description: string;
  meta: string;
  status: "popular" | "new" | "fast";
  icon: LucideIcon;
};

export type GuideCard = {
  title: string;
  label: string;
  time: string;
  icon: LucideIcon;
};

export type CalculatorCard = {
  title: string;
  value: string;
  caption: string;
  icon: LucideIcon;
};
