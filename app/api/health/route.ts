export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    {
      ok: true,
      service: "chilehub",
      version: "0.1.0"
    },
    {
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}
