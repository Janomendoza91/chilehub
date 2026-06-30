import { Suspense } from "react";
import {
  PageIntro,
  ProductShell,
  ReferenceNotice
} from "@/components/layout/product-shell";
import { GuidesBrowser } from "@/components/guides/guides-browser";
import { allGuidesContent, guidesContent } from "@/data/content";
import { guideCollectionJsonLd, jsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guias rapidas para tramites en Chile",
  description:
    "Guias accionables y referenciales para preparar documentos, costos, plazos y preguntas antes de avanzar en Chile.",
  path: "/guias",
  keywords: [
    "guias de tramites Chile",
    "como hacer tramites en Chile",
    "preparacion de documentos",
    "errores comunes tramites"
  ]
});

export default function GuidesPage() {
  return (
    <ProductShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(guideCollectionJsonLd(allGuidesContent))}
      />
      <PageIntro
        eyebrow="Guias rapidas"
        title="Lee lo justo antes de avanzar."
        description="Guias cortas, accionables y referenciales para saber que revisar, que riesgos evitar y donde confirmar el siguiente paso."
      />
      <ReferenceNotice />
      <Suspense fallback={null}>
        <GuidesBrowser guides={guidesContent} />
      </Suspense>
    </ProductShell>
  );
}
