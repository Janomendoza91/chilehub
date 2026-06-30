import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = [
    "# ChileHub",
    "",
    "ChileHub es un portal referencial para preparar tramites, guias y procesos importantes en Chile.",
    "No realiza tramites, no cobra por tramites y no reemplaza instituciones, profesionales ni fuentes oficiales.",
    "",
    "## Paginas principales",
    `- Inicio: ${siteConfig.url}`,
    `- Tramites: ${siteConfig.url}/tramites`,
    `- Guias: ${siteConfig.url}/guias`,
    `- Calculadoras: ${siteConfig.url}/calculadoras`,
    `- Metodologia editorial: ${siteConfig.url}/metodologia`,
    `- Privacidad: ${siteConfig.url}/privacidad`,
    `- Terminos: ${siteConfig.url}/terminos`,
    "",
    "## Uso responsable",
    "El contenido debe tratarse como informacion referencial. Los requisitos, costos, plazos y canales deben confirmarse en fuentes oficiales o profesionales cuando corresponda.",
    ""
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
