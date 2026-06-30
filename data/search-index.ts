import { guidesContent, procedures } from "@/data/content";
import { darkGuidesContent } from "@/data/dark-guides";

export type SearchIndexItem = {
  type: "Tramite" | "Guia";
  mode: "light" | "dark";
  title: string;
  description: string;
  category: string;
  href: string;
  keywords: string;
};

export const searchIndexItems: SearchIndexItem[] = [
  ...procedures.map((item) => ({
    type: "Tramite" as const,
    mode: "light" as const,
    title: item.title,
    description: item.summary,
    category: item.category,
    href: `/tramites/${item.slug}`,
    keywords: normalizeSearchText(
      [
        item.title,
        item.category,
        item.summary,
        item.channel,
        item.steps.join(" "),
        item.documents.map((document) => `${document.title} ${document.detail}`).join(" ")
      ].join(" ")
    )
  })),
  ...guidesContent.map((item) => ({
    type: "Guia" as const,
    mode: "light" as const,
    title: item.title,
    description: item.summary,
    category: item.category,
    href: `/guias/${item.slug}`,
    keywords: normalizeSearchText(
      [
        item.title,
        item.category,
        item.summary,
        item.checklist.join(" "),
        item.sections.map((section) => `${section.title} ${section.body}`).join(" ")
      ].join(" ")
    )
  })),
  ...darkGuidesContent.map((item) => ({
    type: "Guia" as const,
    mode: "dark" as const,
    title: item.title,
    description: item.summary,
    category: item.category,
    href: `/guias/${item.slug}`,
    keywords: normalizeSearchText(
      [
        item.title,
        item.category,
        item.summary,
        item.checklist.join(" "),
        item.sections.map((section) => `${section.title} ${section.body}`).join(" ")
      ].join(" ")
    )
  }))
];

export function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function getSearchResults(
  items: SearchIndexItem[],
  query: string,
  mode: "light" | "dark",
  limit?: number
) {
  const normalized = normalizeSearchText(query);
  const activeItems = items.filter((item) => item.mode === mode);

  if (!normalized) {
    return typeof limit === "number" ? activeItems.slice(0, limit) : activeItems;
  }

  const results = activeItems
    .map((item) => ({
      item,
      score: getSearchScore(item, normalized)
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((result) => result.item);

  return typeof limit === "number" ? results.slice(0, limit) : results;
}

function getSearchScore(item: SearchIndexItem, query: string) {
  const title = normalizeSearchText(item.title);
  const category = normalizeSearchText(item.category);
  const description = normalizeSearchText(item.description);

  if (title.startsWith(query)) {
    return 120;
  }

  if (title.includes(query)) {
    return 100;
  }

  if (category.includes(query)) {
    return 70;
  }

  if (description.includes(query)) {
    return 50;
  }

  if (item.keywords.includes(query)) {
    return 25;
  }

  return 0;
}
