"use client";

import { useMemo, useState } from "react";
import {
  Clipboard,
  ExternalLink,
  ShieldAlert,
  Sparkles
} from "lucide-react";

const reportTypes = [
  {
    value: "contenido",
    label: "Reportar informacion",
    description: "Un dato, fuente, costo, plazo o requisito parece confuso o desactualizado."
  },
  {
    value: "sugerencia",
    label: "Sugerir tramite",
    description: "Falta un proceso que deberia estar en ChileHub."
  },
  {
    value: "sitio",
    label: "Problema del sitio",
    description: "Algo no carga, se ve mal o aparece un error tecnico."
  },
  {
    value: "seguridad",
    label: "Seguridad",
    description: "Posible vulnerabilidad o exposicion de informacion."
  }
] as const;

type ReportType = (typeof reportTypes)[number]["value"];

const githubIssueUrl = "https://github.com/Janomendoza91/chilehub/issues/new";

export function ContactReportPanel() {
  const [type, setType] = useState<ReportType>("contenido");
  const [subject, setSubject] = useState("");
  const [route, setRoute] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const selectedType = reportTypes.find((item) => item.value === type) ?? reportTypes[0];
  const isSecurity = type === "seguridad";

  const reportBody = useMemo(() => {
    return [
      `Tipo: ${selectedType.label}`,
      `Tema: ${subject || "Sin titulo"}`,
      `Ruta o pagina: ${route || "No indicada"}`,
      "",
      "Detalle:",
      details || "Sin detalle",
      "",
      "Nota: no incluir RUT, claves, documentos, tokens, correos privados ni datos personales."
    ].join("\n");
  }, [details, route, selectedType.label, subject]);

  const githubHref = `${githubIssueUrl}?title=${encodeURIComponent(
    `[${selectedType.label}] ${subject || "Reporte ChileHub"}`
  )}&body=${encodeURIComponent(reportBody)}`;

  async function copyReport() {
    try {
      await navigator.clipboard.writeText(reportBody);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="reportes" className="grid gap-4 pb-10 pt-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)] transition-colors dark:border-[#26324f] dark:bg-[#10172b]">
        <span className="grid h-11 w-11 place-items-center rounded-[15px] bg-[#eef2ff] text-primary dark:bg-white/10 dark:text-[#ff9b4f]">
          <Sparkles className="h-5 w-5" />
        </span>
        <h2 className="mt-4 text-[24px] font-extrabold tracking-[-0.05em] text-[#081642] dark:text-white">
          Arma un reporte claro
        </h2>
        <p className="mt-3 text-[13px] font-semibold leading-6 text-[#66718f] dark:text-[#b8c3dc]">
          Esto no guarda datos en servidor. Preparamos un texto ordenado para que puedas copiarlo o abrir un issue publico cuando no sea seguridad.
        </p>
        <div className="mt-4 rounded-[16px] bg-[#fff7ed] p-3 text-[12px] font-semibold leading-5 text-[#8a4b12] dark:bg-[#2b1d12] dark:text-[#ffcf9f]">
          No incluyas RUT, claves, documentos, tokens, direcciones, correos privados ni datos personales.
        </div>
      </div>

      <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] transition-colors dark:border-[#26324f] dark:bg-[#10172b] sm:p-5">
        <div className="grid gap-2 sm:grid-cols-2">
          {reportTypes.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setType(item.value)}
              className={
                item.value === type
                  ? "rounded-[16px] border border-primary bg-[#eef2ff] p-3 text-left text-primary dark:border-[#ff9b4f] dark:bg-white/10 dark:text-[#ffb077]"
                  : "rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-3 text-left text-[#52607f] transition hover:bg-[#f3f6fb] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff] dark:hover:bg-[#17213c]"
              }
            >
              <span className="text-[12px] font-extrabold">{item.label}</span>
              <span className="mt-1 block text-[11px] font-semibold leading-4 opacity-80">
                {item.description}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-3">
          <label className="grid gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7b86a3] dark:text-[#9aa8c7]">
              Titulo breve
            </span>
            <input
              value={subject}
              onChange={(event) => setSubject(event.target.value.slice(0, 90))}
              placeholder="Ej: falta tramite para duplicado de patente"
              className="h-11 rounded-[14px] border border-[#dfe6f4] bg-white px-3 text-[13px] font-semibold text-[#081642] outline-none transition focus:border-primary dark:border-[#2a3654] dark:bg-[#121b32] dark:text-white"
            />
          </label>

          <label className="grid gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7b86a3] dark:text-[#9aa8c7]">
              Ruta o pagina
            </span>
            <input
              value={route}
              onChange={(event) => setRoute(event.target.value.slice(0, 120))}
              placeholder="Ej: /tramites/renovar-licencia-conducir"
              className="h-11 rounded-[14px] border border-[#dfe6f4] bg-white px-3 text-[13px] font-semibold text-[#081642] outline-none transition focus:border-primary dark:border-[#2a3654] dark:bg-[#121b32] dark:text-white"
            />
          </label>

          <label className="grid gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#7b86a3] dark:text-[#9aa8c7]">
              Que deberiamos revisar
            </span>
            <textarea
              value={details}
              onChange={(event) => setDetails(event.target.value.slice(0, 1200))}
              placeholder="Describe la confusion: documentos, costos, plazos, oficina, requisito, error visual o pasos para reproducir."
              rows={6}
              className="resize-none rounded-[14px] border border-[#dfe6f4] bg-white px-3 py-3 text-[13px] font-semibold leading-6 text-[#081642] outline-none transition focus:border-primary dark:border-[#2a3654] dark:bg-[#121b32] dark:text-white"
            />
          </label>
        </div>

        {isSecurity ? (
          <div className="mt-4 flex gap-3 rounded-[16px] border border-[#f2dfc7] bg-[#fffaf3] p-3 text-[12px] font-semibold leading-5 text-[#8a4b12] dark:border-[#5a3b1d] dark:bg-[#2b1d12] dark:text-[#ffcf9f]">
            <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
            No abras un issue publico con detalles explotables. Copia el reporte y compartelo por un canal privado con el equipo.
          </div>
        ) : null}

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copyReport}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#dfe6f4] bg-white px-4 text-[12px] font-extrabold text-[#52607f] transition hover:bg-[#f3f6fb] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff] dark:hover:bg-[#17213c]"
          >
            <Clipboard className="h-4 w-4" />
            {copied ? "Copiado" : "Copiar reporte"}
          </button>

          {!isSecurity ? (
            <a
              href={githubHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-4 text-[12px] font-extrabold text-white shadow-[0_14px_28px_rgba(42,81,232,0.24)] transition hover:bg-[#1f48e8]"
            >
              Abrir reporte
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
