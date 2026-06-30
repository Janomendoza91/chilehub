import { siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = [
    `Contact: ${siteConfig.url}/contacto`,
    `Policy: ${siteConfig.url}/privacidad`,
    "Preferred-Languages: es, en",
    `Canonical: ${siteConfig.url}/.well-known/security.txt`,
    ""
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400"
    }
  });
}
