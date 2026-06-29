import type { MetadataRoute } from "next";
import { guidesContent, procedures } from "@/data/content";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/tramites",
  "/guias",
  "/calculadoras",
  "/oficinas",
  "/contacto"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : 0.75
  }));

  const procedureEntries = procedures.map((procedure) => ({
    url: absoluteUrl(`/tramites/${procedure.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72
  }));

  const guideEntries = guidesContent.map((guide) => ({
    url: absoluteUrl(`/guias/${guide.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.68
  }));

  return [...staticEntries, ...procedureEntries, ...guideEntries];
}
