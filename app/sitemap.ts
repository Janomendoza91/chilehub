import type { MetadataRoute } from "next";
import { guidesContent, procedures } from "@/data/content";
import { absoluteUrl, contentDate } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/tramites",
  "/guias",
  "/calculadoras",
  "/oficinas",
  "/contacto",
  "/metodologia",
  "/privacidad",
  "/terminos"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticLastModified = contentDate("29 junio 2026");

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: staticLastModified,
    changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "/" ? 1 : 0.75
  }));

  const procedureEntries = procedures.map((procedure) => ({
    url: absoluteUrl(`/tramites/${procedure.slug}`),
    lastModified: contentDate(procedure.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.72
  }));

  const guideEntries = guidesContent.map((guide) => ({
    url: absoluteUrl(`/guias/${guide.slug}`),
    lastModified: contentDate(guide.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.68
  }));

  return [...staticEntries, ...procedureEntries, ...guideEntries];
}
