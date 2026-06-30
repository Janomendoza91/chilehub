import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/navigation/header";
import { FloatingHelpAssistant } from "@/components/search/floating-help-assistant";
import { HeroSection } from "@/components/sections/hero-section";
import { HomePreviewSection } from "@/components/sections/home-preview-section";
import { MobileMockupsSection } from "@/components/sections/mobile-mockups-section";
import { absoluteUrl, jsonLd, pageMetadata, siteConfig } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Prepara tramites y procesos importantes en Chile",
  description:
    "ChileHub organiza documentos, costos referenciales, plazos, errores frecuentes y donde continuar antes de hacer un tramite en Chile.",
  path: "/",
  keywords: [
    "preparar tramites en Chile",
    "documentos para tramites",
    "costos de tramites",
    "ChileAtiende",
    "Registro Civil"
  ]
});

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcff] text-foreground transition-colors dark:bg-[#090e1b]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          inLanguage: "es-CL",
          potentialAction: {
            "@type": "SearchAction",
            target: `${absoluteUrl("/buscar")}?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description
        })}
      />
      <Header />
      <HeroSection />
      <HomePreviewSection />
      <MobileMockupsSection />
      <FloatingHelpAssistant />
      <Footer />
    </main>
  );
}
