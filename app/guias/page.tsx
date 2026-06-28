import {
  PageIntro,
  ProductShell,
  ReferenceNotice
} from "@/components/layout/product-shell";
import { GuidesBrowser } from "@/components/guides/guides-browser";
import { guidesContent } from "@/data/content";

export const metadata = {
  title: "Guias rapidas | ChileHub",
  description: "Guias rapidas para preparar procesos importantes en Chile."
};

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
