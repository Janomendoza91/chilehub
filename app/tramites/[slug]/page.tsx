import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  CircleHelp,
  MapPin,
  ShieldAlert,
  WalletCards
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ProductShell, ReferenceNotice } from "@/components/layout/product-shell";
import { ProcedurePersonalPanel } from "@/components/account/procedure-personal-panel";
import { ProcedureStepFlow } from "@/components/procedures/procedure-step-flow";
import { SellCarPreparationFlow } from "@/components/procedures/sell-car-preparation-flow";
import { getProcedure, procedures } from "@/data/content";

export function generateStaticParams() {
  return procedures.map((procedure) => ({ slug: procedure.slug }));
}

type ProcedurePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProcedurePageProps) {
  const { slug } = await params;
  const procedure = getProcedure(slug);

  return {
    title: procedure ? `${procedure.title} | ChileHub` : "Tramite | ChileHub",
    description: procedure?.summary
  };
}

export default async function ProcedureDetailPage({
  params
}: ProcedurePageProps) {
  const { slug } = await params;
  const procedure = getProcedure(slug);

  if (!procedure) {
    notFound();
  }

  return (
    <ProductShell>
      <section className="grid gap-5 pb-5 pt-3 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div className="flex min-h-full flex-col">
          <Link href="/tramites" className="text-[13px] font-bold text-primary">
            Volver a tramites
          </Link>
          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
            {procedure.category}
          </p>
          <h1 className="mt-2 max-w-[820px] text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#081642] sm:text-[56px]">
            {procedure.title}
          </h1>
          <p className="mt-4 max-w-[720px] text-[15px] font-medium leading-7 text-[#56617f] sm:text-[18px]">
            {procedure.summary}
          </p>
          <div className="mt-5 lg:mt-auto lg:pt-5">
            <ReferenceNotice />
          </div>
        </div>

        <aside className="rounded-[24px] border border-[#dfe6f4] bg-white p-5 shadow-[0_18px_46px_rgba(35,49,86,0.06)]">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Resumen para prepararte
          </p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-tight tracking-[-0.05em] text-[#081642]">
            Revisa antes de avanzar
          </h2>
          <p className="mt-2 text-[13px] font-semibold leading-6 text-[#66718f]">
            Informacion referencial para ordenar documentos, costos, plazos y
            alertas. El tramite continua fuera de ChileHub.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <SummaryStat label="Docs" value={String(procedure.documents.length)} />
            <SummaryStat label="Alertas" value={String(procedure.redFlags.length)} />
            <SummaryStat label="Revision" value={procedure.nextReviewAt} compact />
          </div>
          <dl className="mt-5 grid gap-2 text-[12px] font-semibold text-[#66718f]">
            <InfoRow icon={WalletCards} label="Costo" value={procedure.cost} />
            <InfoRow icon={Clock} label="Tiempo" value={procedure.duration} />
            <InfoRow icon={MapPin} label="Donde" value={procedure.channel} />
          </dl>
          <div className="mt-3 rounded-[14px] bg-[#fff7ed] px-3 py-2 text-[11px] font-bold leading-5 text-[#8a4b12]">
            Montos estimados. Confirma antes de pagar; ChileHub no cobra ni
            realiza el tramite.
          </div>
          <a
            href={procedure.externalAction.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-[13px] font-bold text-white shadow-[0_14px_28px_rgba(42,81,232,0.24)]"
          >
            {procedure.externalAction.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </aside>
      </section>

      <ProcedurePersonalPanel procedure={procedure} />

      {procedure.slug === "vender-un-auto" ? (
        <SellCarPreparationFlow />
      ) : (
        <ProcedureStepFlow procedure={procedure} />
      )}

      <section className="pb-5 pt-1">
        <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-4 shadow-[0_18px_46px_rgba(35,49,86,0.05)] sm:p-5">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                Costos estimados
              </p>
              <h2 className="mt-1 text-[22px] font-extrabold tracking-[-0.04em] text-[#081642]">
                Cuanto deberias considerar
              </h2>
            </div>
            <p className="text-[12px] font-bold text-[#66718f]">
              Revisado: {procedure.updatedAt} / Proxima revision:{" "}
              {procedure.nextReviewAt}
            </p>
          </div>
          <div className="mt-4 grid gap-2 md:grid-cols-3">
            {procedure.estimatedCosts.map((cost) => (
              <div
                key={cost.label}
                className="rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-3.5"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a94ad]">
                  {cost.label}
                </p>
                <p className="mt-2 text-[20px] font-extrabold leading-tight tracking-[-0.04em] text-[#081642]">
                  {cost.amount}
                </p>
                <p className="mt-2 line-clamp-3 text-[12px] font-semibold leading-5 text-[#66718f]">
                  {cost.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-3 pb-5 lg:grid-cols-3">
        <CompactList
          title="Antes de empezar"
          icon={CheckCircle2}
          items={procedure.beforeYouStart}
          tone="blue"
          limit={3}
        />
        <CompactList
          title="Preguntas clave"
          icon={CircleHelp}
          items={procedure.keyQuestions}
          tone="neutral"
          limit={3}
        />
        <CompactList
          title="Alertas"
          icon={ShieldAlert}
          items={procedure.redFlags}
          tone="warning"
          limit={3}
        />
      </section>

      <section className="grid gap-3 py-5 lg:grid-cols-3">
        <CompactList
          title="Errores frecuentes"
          icon={AlertTriangle}
          items={procedure.commonMistakes}
          tone="warning"
        />
        <CompactList
          title="Puede cambiar"
          icon={MapPin}
          items={procedure.variations}
          tone="neutral"
        />
        <CompactList
          title="Que preguntar"
          icon={CircleHelp}
          items={procedure.whatToAsk}
          tone="neutral"
        />
      </section>

      <section className="pb-10">
        <div className="rounded-[22px] border border-[#e3e9f4] bg-white p-5">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Fuentes y revision
          </p>
          <p className="mt-2 text-[13px] font-semibold text-[#66718f]">
            Revisado: {procedure.updatedAt}. Proxima revision mensual:{" "}
            {procedure.nextReviewAt}.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {procedure.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#e3e9f4] bg-[#fbfcff] px-3 py-2 text-[12px] font-bold text-[#52607f]"
              >
                {source.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </ProductShell>
  );
}

function SummaryStat({
  label,
  value,
  compact
}: {
  label: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <div className="rounded-[14px] bg-[#f7f9ff] p-2.5">
      <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#8a94ad]">
        {label}
      </p>
      <p
        className={
          compact
            ? "mt-1 text-[10.5px] font-extrabold leading-tight text-[#283451]"
            : "mt-1 text-[19px] font-extrabold tracking-[-0.04em] text-[#081642]"
        }
      >
        {value}
      </p>
    </div>
  );
}

function ListItem({
  children,
  tone
}: {
  children: ReactNode;
  tone: "blue" | "neutral" | "warning";
}) {
  const toneClass = {
    blue: "bg-[#f1f5ff] text-[#36476f]",
    neutral: "bg-[#f7f9ff] text-[#56617f]",
    warning: "bg-[#fff7ed] text-[#8a4b12]"
  };

  return (
    <li className={`rounded-[12px] px-3 py-2.5 text-[12px] font-semibold leading-5 ${toneClass[tone]}`}>
      {children}
    </li>
  );
}

function CompactList({
  title,
  icon: Icon,
  items,
  tone,
  limit
}: {
  title: string;
  icon: LucideIcon;
  items: string[];
  tone: "blue" | "neutral" | "warning";
  limit?: number;
}) {
  const visibleItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <div className="rounded-[20px] border border-[#e3e9f4] bg-white p-4 shadow-[0_12px_28px_rgba(35,49,86,0.035)]">
      <div className="mb-3 flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[#eef2ff] text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="text-[15px] font-extrabold tracking-[-0.02em] text-[#081642]">
          {title}
        </h2>
      </div>
      <ul className="space-y-2">
        {visibleItems.map((item) => (
          <ListItem key={item} tone={tone}>
            {item}
          </ListItem>
        ))}
      </ul>
      {items.length > visibleItems.length ? (
        <p className="mt-2 text-[11px] font-bold text-[#7b86a0]">
          +{items.length - visibleItems.length} punto adicional en fuentes y
          revision.
        </p>
      ) : null}
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-3 rounded-[14px] bg-[#f7f9ff] p-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
      <div>
        <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a94ad]">
          {label}
        </dt>
        <dd className="mt-1 text-[12px] font-bold leading-5 text-[#283451]">
          {value}
        </dd>
      </div>
    </div>
  );
}
