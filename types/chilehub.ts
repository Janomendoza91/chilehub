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
  nextReviewAt: string;
  cost: string;
  duration: string;
  channel: string;
  preparationScore: number;
  documents: Array<{
    title: string;
    detail: string;
    required: boolean;
  }>;
  beforeYouStart: string[];
  keyQuestions: string[];
  estimatedCosts: Array<{
    label: string;
    amount: string;
    detail: string;
  }>;
  steps: string[];
  commonMistakes: string[];
  redFlags: string[];
  variations: string[];
  whatToAsk: string[];
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
  keyTakeaways?: string[];
  decisionCards?: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
  fiveMinutePlan?: string[];
  commonMistakes?: string[];
  whenToGetHelp?: string[];
  sections: Array<{
    title: string;
    body: string;
  }>;
  checklist: string[];
  relatedProcedureSlug?: string;
  sources: ContentSource[];
};
