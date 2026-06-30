import type { Metadata } from "next";
import type { GuideDetail, ProcedureDetail } from "@/types/chilehub";

export const siteConfig = {
  name: "ChileHub",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chilehub.info",
  description:
    "Guias referenciales para preparar tramites, documentos, costos, plazos y pasos importantes en Chile.",
  locale: "es_CL",
  language: "es-CL",
  ogImagePath: "/opengraph-image"
};

const chileanMonthIndex: Record<string, number> = {
  enero: 0,
  febrero: 1,
  marzo: 2,
  abril: 3,
  mayo: 4,
  junio: 5,
  julio: 6,
  agosto: 7,
  septiembre: 8,
  setiembre: 8,
  octubre: 9,
  noviembre: 10,
  diciembre: 11
};

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(cleanPath, siteConfig.url).toString();
}

export function seoText(value: string, maxLength = 155) {
  const normalized = value.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const clipped = normalized.slice(0, maxLength - 3);
  const lastSpace = clipped.lastIndexOf(" ");

  return `${clipped.slice(0, lastSpace > 80 ? lastSpace : clipped.length)}...`;
}

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  type = "website",
  keywords = []
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  type?: "website" | "article";
  keywords?: string[];
}): Metadata {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(siteConfig.ogImagePath);
  const cleanDescription = seoText(description);

  return {
    title,
    description: cleanDescription,
    applicationName: siteConfig.name,
    creator: siteConfig.name,
    publisher: siteConfig.name,
    keywords: [
      "ChileHub",
      "tramites Chile",
      "guias Chile",
      "documentos Chile",
      ...keywords
    ],
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description: cleanDescription,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cleanDescription,
      images: [ogImage]
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          googleBot: {
            index: false,
            follow: true
          }
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true
          }
        }
  };
}

export function contentDate(value: string): Date {
  const [dayText, monthText, yearText] = value.trim().toLowerCase().split(/\s+/);
  const day = Number(dayText);
  const month = chileanMonthIndex[monthText ?? ""];
  const year = Number(yearText);

  if (!day || month === undefined || !year) {
    return new Date(Date.UTC(2026, 5, 29));
  }

  return new Date(Date.UTC(year, month, day));
}

export function jsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data).replace(/</g, "\\u003c")
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  updatedAt,
  section,
  keywords
}: {
  title: string;
  description: string;
  path: string;
  updatedAt: string;
  section: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: seoText(description),
    mainEntityOfPage: absoluteUrl(path),
    datePublished: contentDate(updatedAt).toISOString(),
    dateModified: contentDate(updatedAt).toISOString(),
    inLanguage: siteConfig.language,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    articleSection: section,
    keywords,
    isAccessibleForFree: true
  };
}

export function procedureHowToJsonLd(procedure: ProcedureDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `Como preparar ${procedure.title} en Chile`,
    description: seoText(procedure.summary),
    inLanguage: siteConfig.language,
    mainEntityOfPage: absoluteUrl(`/tramites/${procedure.slug}`),
    supply: procedure.documents.map((document) => ({
      "@type": "HowToSupply",
      name: document.title
    })),
    step: procedure.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step,
      text: step
    }))
  };
}

export function procedureCollectionJsonLd(procedures: ProcedureDetail[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tramites para preparar en Chile",
    description: siteConfig.description,
    url: absoluteUrl("/tramites"),
    inLanguage: siteConfig.language,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: procedures.map((procedure, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/tramites/${procedure.slug}`),
        name: procedure.title,
        description: seoText(procedure.summary, 120)
      }))
    }
  };
}

export function guideCollectionJsonLd(guides: GuideDetail[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guias rapidas para tramites en Chile",
    description: "Guias accionables para preparar procesos importantes en Chile.",
    url: absoluteUrl("/guias"),
    inLanguage: siteConfig.language,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/guias/${guide.slug}`),
        name: guide.title,
        description: seoText(guide.summary, 120)
      }))
    }
  };
}
