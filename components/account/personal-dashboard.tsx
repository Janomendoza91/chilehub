"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  AlertTriangle,
  Bell,
  CheckCircle2,
  FileText,
  Heart,
  History,
  Trash2
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import type { ProcedureDetail } from "@/types/chilehub";
import { useAuthSession } from "@/hooks/use-auth-session";
import { useLocalAccount } from "@/hooks/use-local-account";

export function PersonalDashboard({
  procedures,
  view
}: {
  procedures: ProcedureDetail[];
  view: "dashboard" | "saved";
}) {
  const auth = useAuthSession();
  const { ready, state, activate, clear, toggleSaved, toggleReminder } = useLocalAccount();

  const userName =
    auth.user?.user_metadata?.full_name ||
    auth.user?.user_metadata?.name ||
    auth.user?.email ||
    "Mi espacio";

  useEffect(() => {
    if (auth.user && ready && !state.active) {
      activate(String(userName));
    }
  }, [activate, auth.user, ready, state.active, userName]);

  if (!ready || !auth.ready) {
    return null;
  }

  const bySlug = new Map(procedures.map((procedure) => [procedure.slug, procedure]));
  const saved = state.savedSlugs.map((slug) => bySlug.get(slug)).filter(Boolean) as ProcedureDetail[];
  const history = state.historySlugs.map((slug) => bySlug.get(slug)).filter(Boolean) as ProcedureDetail[];
  const documentQueue = saved.flatMap((procedure) => {
    const completed = state.completedDocuments[procedure.slug] ?? [];
    return procedure.documents
      .filter((document) => !completed.includes(document.title))
      .slice(0, 3)
      .map((document) => ({ procedure, document }));
  });
  const monthlyAlerts = saved.filter((procedure) => Boolean(procedure.nextReviewAt));

  if (!state.active && !auth.user) {
    return (
      <section className="pb-10 pt-5">
        <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-5 shadow-[0_18px_46px_rgba(35,49,86,0.05)]">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
            Espacio personal gratis
          </p>
          <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.05em] text-[#081642]">
            Activa guardados, checklist e historial
          </h2>
          <p className="mt-3 max-w-[680px] text-[13px] font-semibold leading-6 text-[#66718f]">
            {auth.googleEnabled
              ? "Entra con Google para usar ChileHub como una app web normal. No hay cobros, no se suben documentos y ChileHub no realiza tramites."
              : "Google se activara con Vercel y el dominio final. Mientras tanto puedes probar el espacio local en este navegador."}
          </p>
          <button
            onClick={() => auth.signInWithGoogle(view === "saved" ? "/guardados" : "/mis-tramites")}
            disabled={!auth.googleEnabled}
            className="mt-5 rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white disabled:cursor-not-allowed disabled:bg-[#9aa5bd]"
          >
            Continuar con Google
          </button>
          {!auth.googleEnabled ? (
            <button
              onClick={() => activate("Mi espacio local")}
              className="ml-0 mt-3 rounded-full border border-[#e3e9f4] bg-white px-5 py-3 text-[13px] font-bold text-[#52607f] sm:ml-2"
            >
              Usar espacio local
            </button>
          ) : null}
          {!auth.configured ? (
            <p className="mt-3 rounded-[14px] bg-[#fff7ed] px-3 py-2 text-[11px] font-bold leading-5 text-[#8a4b12]">
              Falta configurar NEXT_PUBLIC_SUPABASE_URL,
              NEXT_PUBLIC_SUPABASE_ANON_KEY y Google en Supabase Auth.
            </p>
          ) : !auth.googleEnabled ? (
            <p className="mt-3 rounded-[14px] bg-[#eef2ff] px-3 py-2 text-[11px] font-bold leading-5 text-primary">
              OAuth esta preparado y queda apagado hasta autorizar el dominio de
              produccion.
            </p>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="pb-10 pt-5">
      <div className="grid gap-3 md:grid-cols-3">
        <Metric label="Guardados" value={saved.length} icon={Heart} />
        <Metric label="Historial" value={history.length} icon={History} />
        <Metric label="Recordatorios" value={state.reminders.length} icon={Bell} />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel
          title={view === "saved" ? "Tramites guardados" : "Mis tramites recientes"}
          icon={view === "saved" ? Heart : History}
          emptyTitle={view === "saved" ? "Aun no guardas tramites." : "Aun no tienes historial."}
          emptyAction="Explorar tramites"
          emptyHref="/tramites"
        >
          {(view === "saved" ? saved : history).slice(0, 8).map((procedure) => (
            <ProcedureRow
              key={procedure.slug}
              procedure={procedure}
              saved={state.savedSlugs.includes(procedure.slug)}
              onToggleSaved={() => toggleSaved(procedure.slug)}
            />
          ))}
        </Panel>

        <Panel
          title="Documentos por preparar"
          icon={FileText}
          emptyTitle="Guarda un tramite para ver documentos pendientes."
          emptyAction="Ver tramites"
          emptyHref="/tramites"
        >
          {documentQueue.slice(0, 8).map(({ procedure, document }) => (
            <Link
              key={`${procedure.slug}-${document.title}`}
              href={`/tramites/${procedure.slug}`}
              className="block rounded-[14px] bg-[#f7f9ff] p-3"
            >
              <p className="text-[12px] font-extrabold text-[#081642]">
                {document.title}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-[#66718f]">
                {procedure.title}
              </p>
            </Link>
          ))}
        </Panel>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Panel
          title="Recordatorios"
          icon={Bell}
          emptyTitle="No tienes recordatorios."
          emptyAction="Crear desde un tramite"
          emptyHref="/tramites"
        >
          {state.reminders.slice(0, 8).map((reminder) => {
            const procedure = bySlug.get(reminder.procedureSlug);
            return (
              <button
                key={reminder.id}
                onClick={() => toggleReminder(reminder.id)}
                className="flex w-full items-start gap-3 rounded-[14px] bg-[#f7f9ff] p-3 text-left"
              >
                <span
                  className={
                    reminder.done
                      ? "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white"
                      : "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#cfd9ec]"
                  }
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </span>
                <span>
                  <span className="block text-[12px] font-extrabold text-[#081642]">
                    {reminder.note}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold text-[#66718f]">
                    {procedure?.title ?? "Tramite"} / {reminder.date}
                  </span>
                </span>
              </button>
            );
          })}
        </Panel>

        <Panel
          title="Alertas de cambios"
          icon={AlertTriangle}
          emptyTitle="Guarda tramites para ver revisiones mensuales."
          emptyAction="Guardar tramites"
          emptyHref="/tramites"
        >
          {monthlyAlerts.slice(0, 8).map((procedure) => (
            <Link
              key={procedure.slug}
              href={`/tramites/${procedure.slug}`}
              className="block rounded-[14px] bg-[#fff7ed] p-3"
            >
              <p className="text-[12px] font-extrabold text-[#081642]">
                {procedure.title}
              </p>
              <p className="mt-1 text-[11px] font-semibold text-[#8a4b12]">
                Proxima revision referencial: {procedure.nextReviewAt}
              </p>
            </Link>
          ))}
        </Panel>
      </div>

      <button
        onClick={clear}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e3e9f4] bg-white px-4 py-2.5 text-[12px] font-bold text-[#52607f]"
      >
        <Trash2 className="h-4 w-4" />
        Borrar datos locales
      </button>
    </section>
  );
}

function Metric({
  label,
  value,
  icon: Icon
}: {
  label: string;
  value: number;
  icon: LucideIcon;
}) {
  return (
    <div className="rounded-[20px] border border-[#e3e9f4] bg-white p-4 shadow-[0_12px_28px_rgba(35,49,86,0.035)]">
      <Icon className="h-4 w-4 text-primary" />
      <p className="mt-3 text-[26px] font-extrabold tracking-[-0.05em] text-[#081642]">
        {value}
      </p>
      <p className="text-[12px] font-bold text-[#66718f]">{label}</p>
    </div>
  );
}

function Panel({
  title,
  icon: Icon,
  children,
  emptyTitle,
  emptyAction,
  emptyHref
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  emptyTitle: string;
  emptyAction: string;
  emptyHref: string;
}) {
  const hasChildren = Array.isArray(children) ? children.length > 0 : Boolean(children);

  return (
    <div className="rounded-[22px] border border-[#e3e9f4] bg-white p-4 shadow-[0_12px_28px_rgba(35,49,86,0.035)]">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <h2 className="text-[17px] font-extrabold tracking-[-0.03em] text-[#081642]">
          {title}
        </h2>
      </div>
      <div className="grid gap-2">
        {hasChildren ? (
          children
        ) : (
          <div className="rounded-[16px] bg-[#f7f9ff] p-4">
            <p className="text-[13px] font-bold text-[#66718f]">{emptyTitle}</p>
            <Link href={emptyHref} className="mt-3 inline-flex text-[12px] font-bold text-primary">
              {emptyAction}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

function ProcedureRow({
  procedure,
  saved,
  onToggleSaved
}: {
  procedure: ProcedureDetail;
  saved: boolean;
  onToggleSaved: () => void;
}) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-[14px] bg-[#f7f9ff] p-3">
      <Link href={`/tramites/${procedure.slug}`} className="min-w-0">
        <p className="text-[12px] font-extrabold text-[#081642]">
          {procedure.title}
        </p>
        <p className="mt-1 line-clamp-2 text-[11px] font-semibold leading-5 text-[#66718f]">
          {procedure.summary}
        </p>
      </Link>
      <button
        onClick={onToggleSaved}
        className={saved ? "text-primary" : "text-[#9aa5bd]"}
        aria-label={saved ? "Quitar de guardados" : "Guardar tramite"}
      >
        <Heart className="h-4 w-4" />
      </button>
    </div>
  );
}
