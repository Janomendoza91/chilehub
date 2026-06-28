import type { LucideIcon } from "lucide-react";

export type ProcedureCard = {
  title: string;
  description: string;
  meta: string;
  status: "popular" | "new" | "fast";
  icon: LucideIcon;
  href?: string;
};

export type GuideCard = {
  title: string;
  label: string;
  time: string;
  icon: LucideIcon;
  href?: string;
};

export type CalculatorCard = {
  title: string;
  value: string;
  caption: string;
  icon: LucideIcon;
};

export type ContentSource = {
  label: string;
  url: string;
};

export type ProcedureDetail = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  updatedAt: string;
  cost: string;
  duration: string;
  channel: string;
  preparationScore: number;
  documents: Array<{
    title: string;
    detail: string;
    required: boolean;
  }>;
  steps: string[];
  commonMistakes: string[];
  variations: string[];
  externalAction: {
    label: string;
    url: string;
  };
  sources: ContentSource[];
};

export type GuideDetail = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  updatedAt: string;
  readingTime: string;
  sections: Array<{
    title: string;
    body: string;
  }>;
  checklist: string[];
  relatedProcedureSlug?: string;
  sources: ContentSource[];
};
