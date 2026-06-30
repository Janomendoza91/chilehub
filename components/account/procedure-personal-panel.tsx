"use client";

import { useEffect, useMemo, useState } from "react";
import { Bell, CheckCircle2, Heart, History, ListChecks } from "lucide-react";
import type { ProcedureDetail } from "@/types/chilehub";
import { useAuthSession } from "@/hooks/use-auth-session";
import { useLocalAccount } from "@/hooks/use-local-account";

export function ProcedurePersonalPanel({ procedure }: { procedure: ProcedureDetail }) {
  const {
    ready,
    state,
    activate,
    addHistory,
    toggleSaved,
    toggleDocument,
    addReminder
  } = useLocalAccount();
  const auth = useAuthSession();
  const [error, setError] = useState("");
  const [note, setNote] = useState("Revisar requisitos y documentos");
  const [date, setDate] = useState("");

  const userName =
    auth.user?.user_metadata?.full_name ||
    auth.user?.user_metadata?.name ||
    auth.user?.email ||
    "Mi espacio";

  useEffect(() => {
    if (ready && state.active) {
      addHistory(procedure.slug);
    }
  }, [addHistory, procedure.slug, ready, state.active]);

  useEffect(() => {
    if (auth.user && ready && !state.active) {
      activate(String(userName));
    }
  }, [activate, auth.user, ready, state.active, userName]);

  const completed = state.completedDocuments[procedure.slug] ?? [];
  const isSaved = state.savedSlugs.includes(procedure.slug);
  const progress = useMemo(() => {
    if (procedure.documents.length === 0) {
      return 0;
    }

    return Math.round((completed.length / procedure.documents.length) * 100);
  }, [completed.length, procedure.documents.length]);

  if (!ready || !auth.ready) {
    return null;
  }

  if (!state.active && !auth.user) {
    return (
      <section className="pb-5">
        <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)] dark:border-[#26324f] dark:bg-[#111a31]">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
            Espacio personal gratis
          </p>
          <h2 className="mt-2 text-[22px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
            Guarda este tramite y prepara tus documentos
          </h2>
          <p className="mt-2 text-[13px] font-semibold leading-6 text-[#66718f] dark:text-[#aeb9d4]">
            {auth.googleEnabled
              ? "Entra con Google para activar tu espacio. No subas documentos ni datos sensibles; por ahora la preparacion queda en este navegador."
              : "Google se activara cuando publiquemos el dominio final. Por ahora puedes usar el espacio local en este navegador."}
          </p>
          <button
            onClick={async () => {
              setError("");
              const result = await auth.signInWithGoogle("/mis-tramites");
              if (result.error) {
                setError(result.error);
              }
            }}
            disabled={!auth.googleEnabled}
            className="mt-4 rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white disabled:cursor-not-allowed disabled:bg-[#9aa5bd]"
          >
            Continuar con Google
          </button>
          {!auth.googleEnabled ? (
            <button
              onClick={() => {
                activate("Mi espacio local");
                toggleSaved(procedure.slug);
              }}
              className="ml-0 mt-2 rounded-full border border-[#e3e9f4] bg-white px-5 py-3 text-[13px] font-bold text-[#52607f] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff] sm:ml-2"
            >
              Usar espacio local
            </button>
          ) : null}
          {!auth.configured ? (
            <p className="mt-3 rounded-[14px] bg-[#fff7ed] px-3 py-2 text-[11px] font-bold leading-5 text-[#8a4b12] dark:bg-[#3b2814] dark:text-[#ffcf9f]">
              Falta configurar Supabase Auth para activar Google.
            </p>
          ) : !auth.googleEnabled ? (
            <p className="mt-3 rounded-[14px] bg-[#eef2ff] px-3 py-2 text-[11px] font-bold leading-5 text-primary dark:bg-[#243461] dark:text-[#d8e2ff]">
              OAuth queda preparado, pero se encendera con Vercel y el dominio
              definitivo.
            </p>
          ) : null}
          {error ? (
            <p className="mt-3 rounded-[14px] bg-[#fff7ed] px-3 py-2 text-[11px] font-bold leading-5 text-[#8a4b12] dark:bg-[#3b2814] dark:text-[#ffcf9f]">
              {error}
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="pb-5">
      <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
        <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
              Mi preparacion
            </p>
            <h2 className="mt-1 text-[22px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
              {procedure.title}
            </h2>
            <p className="mt-2 text-[13px] font-semibold leading-6 text-[#66718f] dark:text-[#aeb9d4]">
              Checklist local, guardado en este navegador. ChileHub no recibe
              estos datos.
            </p>
          </div>
          <button
            onClick={() => toggleSaved(procedure.slug)}
            className={
              isSaved
                ? "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white"
                : "inline-flex items-center justify-center gap-2 rounded-full border border-[#e3e9f4] bg-white px-5 py-3 text-[13px] font-bold text-[#52607f] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff]"
            }
          >
            <Heart className="h-4 w-4" />
            {isSaved ? "Guardado" : "Guardar tramite"}
          </button>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[18px] bg-[#f7f9ff] p-3.5 dark:bg-[#121b32]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-primary dark:text-[#ff9b4f]" />
                <p className="text-[13px] font-extrabold text-[#081642] dark:text-white">
                  Documentos, formularios y respaldos
                </p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                {progress}%
              </span>
            </div>
            <div className="mt-3 grid gap-2">
              {procedure.documents.map((document) => {
                const checked = completed.includes(document.title);
                return (
                  <button
                    key={document.title}
                    onClick={() => toggleDocument(procedure.slug, document.title)}
                    className="flex items-start gap-3 rounded-[14px] bg-white px-3 py-3 text-left dark:bg-[#10172b]"
                  >
                    <span
                      className={
                        checked
                          ? "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white"
                          : "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#cfd9ec] bg-white text-transparent dark:border-[#3a4a70] dark:bg-[#10172b]"
                      }
                    >
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block text-[13px] font-bold text-[#283451] dark:text-[#d8e2ff]">
                        {document.title}
                      </span>
                      <span className="mt-1 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-[#eef2ff] px-2 py-0.5 text-[9.5px] font-extrabold uppercase tracking-[0.08em] text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                          {documentPrepKind(document.title)}
                        </span>
                        <span className="rounded-full bg-[#f4f7fc] px-2 py-0.5 text-[9.5px] font-extrabold uppercase tracking-[0.08em] text-[#7b86a3] dark:bg-[#17213d] dark:text-[#aeb9d4]">
                          {document.required ? "Requerido" : "Condicional"}
                        </span>
                      </span>
                      <span className="mt-1.5 block text-[11px] font-semibold leading-5 text-[#7b86a3] dark:text-[#9aa8c7]">
                        {document.detail}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[18px] border border-[#e3e9f4] bg-white p-3.5 dark:border-[#2a3654] dark:bg-[#121b32]">
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-primary dark:text-[#ff9b4f]" />
                <p className="text-[13px] font-extrabold text-[#081642] dark:text-white">
                  Recordatorio
                </p>
              </div>
              <input
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="mt-3 h-10 w-full rounded-[13px] border border-[#e3e9f4] bg-[#fbfcff] px-3 text-[12px] font-semibold outline-none focus:border-primary dark:border-[#2a3654] dark:bg-[#10172b] dark:text-[#d8e2ff]"
              />
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="mt-2 h-10 w-full rounded-[13px] border border-[#e3e9f4] bg-[#fbfcff] px-3 text-[12px] font-semibold outline-none focus:border-primary dark:border-[#2a3654] dark:bg-[#10172b] dark:text-[#d8e2ff]"
              />
              <button
                onClick={() => addReminder(procedure.slug, note, date)}
                className="mt-2 w-full rounded-full bg-primary px-4 py-2.5 text-[12px] font-bold text-white"
              >
                Crear recordatorio
              </button>
            </div>
            <div className="rounded-[18px] bg-[#fff7ed] p-3.5 dark:bg-[#3b2814]">
              <div className="flex items-center gap-2">
                <History className="h-4 w-4 text-[#b46b14]" />
                <p className="text-[13px] font-extrabold text-[#081642] dark:text-white">
                  Historial activo
                </p>
              </div>
              <p className="mt-2 text-[12px] font-semibold leading-5 text-[#8a4b12] dark:text-[#ffcf9f]">
                Este tramite ya quedo en tu historial local para volver desde
                Mis tramites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function documentPrepKind(title: string) {
  const lowerTitle = title.toLowerCase();

  if (lowerTitle.includes("formulario") || lowerTitle.includes("solicitud")) {
    return "Formulario";
  }

  if (lowerTitle.includes("certificado") || lowerTitle.includes("resolucion")) {
    return "Certificado";
  }

  if (lowerTitle.includes("comprobante") || lowerTitle.includes("folio") || lowerTitle.includes("boleta") || lowerTitle.includes("pago")) {
    return "Comprobante";
  }

  if (lowerTitle.includes("cedula") || lowerTitle.includes("rut") || lowerTitle.includes("run") || lowerTitle.includes("pasaporte")) {
    return "Identidad";
  }

  if (lowerTitle.includes("contrato") || lowerTitle.includes("escritura") || lowerTitle.includes("poder")) {
    return "Legal";
  }

  if (lowerTitle.includes("foto") || lowerTitle.includes("captura") || lowerTitle.includes("evidencia")) {
    return "Evidencia";
  }

  return "Respaldo";
}
