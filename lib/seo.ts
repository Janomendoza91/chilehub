import type { Metadata } from "next";

export const siteConfig = {
  name: "ChileHub",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chilehub.cl",
  description:
    "Guias referenciales para preparar tramites, documentos, costos, plazos y pasos importantes en Chile.",
  locale: "es_CL"
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
  type = "website"
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  type?: "website" | "article";
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path)
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false
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
