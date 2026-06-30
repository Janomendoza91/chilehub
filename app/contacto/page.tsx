import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { ContactReportPanel } from "@/components/contact/contact-report-panel";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contacto y reportes",
  description:
    "Contacta a ChileHub para reportar informacion, sugerir procesos o pedir revision de contenido referencial.",
  path: "/contacto"
});

export default function ContactoPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Contacto"
        title="Ayudanos a detectar informacion confusa."
        description="ChileHub organiza informacion referencial. Si una fuente cambio, falta un proceso o detectas un problema tecnico, reportalo sin incluir datos sensibles."
      />
      <ReferenceNotice />
      <ContactReportPanel />
    </ProductShell>
  );
}
