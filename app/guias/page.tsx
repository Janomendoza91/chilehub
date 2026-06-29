import {
  PageIntro,
  ProductShell,
  ReferenceNotice
} from "@/components/layout/product-shell";
import { GuidesBrowser } from "@/components/guides/guides-browser";
import { guidesContent } from "@/data/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Guias rapidas para tramites en Chile",
  description:
    "Guias accionables y referenciales para preparar documentos, costos, plazos y preguntas antes de avanzar en Chile.",
  path: "/guias"
});

export default function GuidesPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Guias rapidas"
        title="Lee lo justo para no equivocarte."
        description="Guias cortas, accionables y referenciales para saber que revisar antes de avanzar en un tramite, postulacion o decision importante."
      />
      <ReferenceNotice />
      <GuidesBrowser guides={guidesContent} />
    </ProductShell>
  );
}
