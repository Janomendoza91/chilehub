import type { Metadata } from "next";

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

  return {
    title,
    description,
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
      description,
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
      description,
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
