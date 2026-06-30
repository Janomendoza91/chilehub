import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

export const alt = "ChileHub - Prepara tramites y procesos importantes en Chile";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8fbff",
          color: "#081642",
          fontFamily: "Inter, Arial, sans-serif",
          padding: 64
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid #dfe6f4",
            borderRadius: 36,
            background: "#ffffff",
            padding: 56
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 56,
                height: 56,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
                background: "#2a51e8",
                color: "#ffffff",
                fontSize: 24,
                fontWeight: 900
              }}
            >
              CH
            </div>
            <div style={{ display: "flex", fontSize: 34, fontWeight: 900 }}>
              <span>Chile</span>
              <span style={{ color: "#f07b22" }}>Hub</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                borderRadius: 999,
                background: "#eef2ff",
                color: "#2a51e8",
                padding: "12px 18px",
                fontSize: 22,
                fontWeight: 800
              }}
            >
              Informacion referencial y gratuita
            </div>
            <div
              style={{
                maxWidth: 880,
                fontSize: 72,
                lineHeight: 0.95,
                letterSpacing: -3.2,
                fontWeight: 900
              }}
            >
              Prepara tramites y procesos importantes en Chile.
            </div>
            <div
              style={{
                maxWidth: 820,
                color: "#56617f",
                fontSize: 30,
                lineHeight: 1.35,
                fontWeight: 600
              }}
            >
              Documentos, costos referenciales, plazos, errores comunes y donde
              continuar fuera de ChileHub.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              color: "#66718f",
              fontSize: 22,
              fontWeight: 800
            }}
          >
            <span>{siteConfig.url.replace("https://", "")}</span>
            <span>Gratis. No realiza tramites ni genera cobros.</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
