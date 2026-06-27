import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/navigation/header";
import { HeroSection } from "@/components/sections/hero-section";
import { HomePreviewSection } from "@/components/sections/home-preview-section";
import { MobileMockupsSection } from "@/components/sections/mobile-mockups-section";

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />
      <HeroSection />
      <HomePreviewSection />
      <MobileMockupsSection />
      <Footer />
    </main>
  );
}
