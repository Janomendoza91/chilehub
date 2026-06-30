import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { ChilehubModeProvider } from "@/components/theme/chilehub-mode-provider";
import { absoluteUrl, jsonLd, siteConfig } from "@/lib/seo";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "information",
  title: {
    default: "ChileHub | Prepara tramites y procesos importantes en Chile",
    template: "%s | ChileHub"
  },
  description: siteConfig.description,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon",
    apple: "/apple-icon"
  },
  alternates: {
    canonical: absoluteUrl("/")
  },
  openGraph: {
    title: "ChileHub | Prepara tramites y procesos importantes en Chile",
    description: siteConfig.description,
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ChileHub | Prepara tramites y procesos importantes en Chile",
    description: siteConfig.description
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: absoluteUrl("/icon"),
            sameAs: ["https://github.com/Janomendoza91/chilehub"],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "security and content reports",
              url: absoluteUrl("/contacto"),
              availableLanguage: ["es-CL", "en"]
            }
          })}
        />
        <ChilehubModeProvider>{children}</ChilehubModeProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
