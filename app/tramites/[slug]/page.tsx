import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  Clock,
  MapPin,
  WalletCards
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ProductShell, ReferenceNotice } from "@/components/layout/product-shell";
import { ProcedurePersonalPanel } from "@/components/account/procedure-personal-panel";
import { ProcedureInsightTabs } from "@/components/procedures/procedure-insight-tabs";
import { ProcedureStepFlow } from "@/components/procedures/procedure-step-flow";
import { SellCarPreparationFlow } from "@/components/procedures/sell-car-preparation-flow";
import { getProcedure, procedures } from "@/data/content";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  contentDate,
  jsonLd,
  pageMetadata,
  siteConfig
} from "@/lib/seo";

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
    ...(procedure
      ? pageMetadata({
          title: `${procedure.title} en Chile`,
          description: procedure.summary,
          path: `/tramites/${procedure.slug}`,
          type: "article",
          keywords: [
            procedure.title,
            procedure.category,
            procedure.channel,
            "requisitos",
            "documentos",
            "costos referenciales"
          ]
        })
      : pageMetadata({
          title: "Tramite",
          description: "Ficha referencial de tramite en ChileHub.",
          path: "/tramites"
        }))
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: `${procedure.title} en Chile`,
          description: procedure.summary,
          mainEntityOfPage: absoluteUrl(`/tramites/${procedure.slug}`),
          datePublished: contentDate(procedure.updatedAt).toISOString(),
          dateModified: contentDate(procedure.updatedAt).toISOString(),
          inLanguage: siteConfig.language,
          author: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url
          },
          about: procedure.category,
          isAccessibleForFree: true
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Tramites", path: "/tramites" },
            { name: procedure.title, path: `/tramites/${procedure.slug}` }
          ])
        )}
      />
      <section className="grid gap-5 pb-5 pt-3 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div className="flex min-h-full flex-col">
          <Link href="/tramites" className="text-[13px] font-bold text-primary dark:text-[#9fb1ff]">
            Volver a tramites
          </Link>
          <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary dark:text-[#ff9b4f]">
            {procedure.category}
          </p>
          <h1 className="mt-2 max-w-[820px] text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#081642] dark:text-white sm:text-[56px]">
            {procedure.title}
          </h1>
          <p className="mt-4 max-w-[720px] text-[15px] font-medium leading-7 text-[#56617f] dark:text-[#aeb9d4] sm:text-[18px]">
            {procedure.summary}
          </p>
          <div className="mt-5">
            <ReferenceNotice />
          </div>
        </div>

        <aside className="rounded-[24px] border border-[#dfe6f4] bg-white p-5 shadow-[0_18px_46px_rgba(35,49,86,0.06)] dark:border-[#26324f] dark:bg-[#111a31]">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
            Resumen para prepararte
          </p>
          <h2 className="mt-2 text-[28px] font-extrabold leading-tight tracking-[-0.05em] text-[#081642] dark:text-white">
            Orden recomendado
          </h2>
          <p className="mt-2 text-[13px] font-semibold leading-6 text-[#66718f] dark:text-[#aeb9d4]">
            Empieza por la ruta guiada, confirma documentos y costos, revisa
            alertas y luego continua fuera de ChileHub.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <SummaryStat label="Docs" value={String(procedure.documents.length)} />
            <SummaryStat label="Alertas" value={String(procedure.redFlags.length)} />
            <SummaryStat label="Revision" value={procedure.nextReviewAt} compact />
          </div>
          <ol className="mt-4 grid gap-2">
            {[
              "Entiende el paso actual.",
              "Marca documentos preparados.",
              "Confirma costos, plazos y bloqueos.",
              "Usa la fuente externa al final."
            ].map((item, index) => (
              <li
                key={item}
                className="flex gap-2 rounded-[14px] bg-[#f7f9ff] px-3 py-2.5 text-[12px] font-bold leading-5 text-[#52607f] dark:bg-[#121b32] dark:text-[#d8e2ff]"
              >
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-[10px] font-extrabold text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <dl className="mt-5 grid gap-2 text-[12px] font-semibold text-[#66718f]">
            <InfoRow icon={WalletCards} label="Costo" value={procedure.cost} />
            <InfoRow icon={Clock} label="Tiempo" value={procedure.duration} />
            <InfoRow icon={MapPin} label="Donde" value={procedure.channel} />
          </dl>
          <div className="mt-3 rounded-[14px] bg-[#fff7ed] px-3 py-2 text-[11px] font-bold leading-5 text-[#8a4b12] dark:bg-[#3b2814] dark:text-[#ffcf9f]">
            Montos estimados. Confirma antes de pagar; ChileHub no cobra ni
            realiza el tramite.
          </div>
          <div className="mt-5 rounded-[16px] border border-[#e3e9f4] bg-[#fbfcff] px-4 py-3 text-[12px] font-bold leading-5 text-[#52607f] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff]">
            Primero revisa la preparacion completa. El enlace oficial para
            continuar esta al final de esta ficha.
          </div>
        </aside>
      </section>

      {procedure.slug === "vender-un-auto" ? (
        <SellCarPreparationFlow />
      ) : (
        <ProcedureStepFlow procedure={procedure} />
      )}

      <ProcedurePersonalPanel procedure={procedure} />

      {procedure.preparationBrief ? (
        <section className="pb-5">
          <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[22px] border border-[#f2dfc7] bg-[#fffaf3] p-4 shadow-[0_14px_34px_rgba(35,49,86,0.035)] dark:border-[#5a3b1d] dark:bg-[#2b1d12] sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#b46b14]">
                Punto critico
              </p>
              <h2 className="mt-2 text-[20px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
                {procedure.preparationBrief.primaryRisk}
              </h2>
              <p className="mt-3 text-[13px] font-semibold leading-6 text-[#8a4b12] dark:text-[#ffcf9f]">
                {procedure.preparationBrief.confirmBeforePaying}
              </p>
            </div>

            <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.035)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                Checklist de confirmacion
              </p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {(procedure.confirmationChecklist ?? []).map((item) => (
                  <div
                    key={item}
                    className="rounded-[14px] bg-[#f7f9ff] px-3 py-3 text-[12px] font-semibold leading-5 text-[#56617f] dark:bg-[#121b32] dark:text-[#d8e2ff]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="pb-5 pt-1">
        <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-4 shadow-[0_18px_46px_rgba(35,49,86,0.05)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                Costos estimados
              </p>
              <h2 className="mt-1 text-[22px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
                Cuanto deberias considerar
              </h2>
            </div>
            <p className="text-[12px] font-bold text-[#66718f] dark:text-[#aeb9d4]">
              Revisado: {procedure.updatedAt} / Proxima revision:{" "}
              {procedure.nextReviewAt}
            </p>
          </div>
          <div className="mt-4 grid gap-2 md:grid-cols-3">
            {procedure.estimatedCosts.map((cost) => (
              <div
                key={cost.label}
                className="rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-3.5 dark:border-[#2a3654] dark:bg-[#121b32]"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a94ad] dark:text-[#9aa8c7]">
                  {cost.label}
                </p>
                <p className="mt-2 text-[20px] font-extrabold leading-tight tracking-[-0.04em] text-[#081642] dark:text-white">
                  {cost.amount}
                </p>
                <p className="mt-2 line-clamp-3 text-[12px] font-semibold leading-5 text-[#66718f] dark:text-[#aeb9d4]">
                  {cost.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcedureInsightTabs procedure={procedure} />

      <section className="pb-10">
        <div className="rounded-[22px] border border-[#e3e9f4] bg-white p-5 dark:border-[#26324f] dark:bg-[#111a31]">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
            Fuentes y revision
          </p>
          <p className="mt-2 text-[13px] font-semibold text-[#66718f] dark:text-[#aeb9d4]">
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
                className="rounded-full border border-[#e3e9f4] bg-[#fbfcff] px-3 py-2 text-[12px] font-bold text-[#52607f] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff]"
              >
                {source.label}
              </a>
            ))}
          </div>
          <a
            href={procedure.externalAction.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-[13px] font-bold text-white shadow-[0_14px_28px_rgba(42,81,232,0.24)] sm:w-auto"
          >
            {procedure.externalAction.label}
            <ArrowUpRight className="h-4 w-4" />
          </a>
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
    <div className="rounded-[14px] bg-[#f7f9ff] p-2.5 dark:bg-[#121b32]">
      <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#8a94ad] dark:text-[#9aa8c7]">
        {label}
      </p>
      <p
        className={
          compact
            ? "mt-1 text-[10.5px] font-extrabold leading-tight text-[#283451] dark:text-[#d8e2ff]"
            : "mt-1 text-[19px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white"
        }
      >
        {value}
      </p>
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
    <div className="flex gap-3 rounded-[14px] bg-[#f7f9ff] p-3 dark:bg-[#121b32]">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-[#ff9b4f]" />
      <div>
        <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a94ad] dark:text-[#9aa8c7]">
          {label}
        </dt>
        <dd className="mt-1 text-[12px] font-bold leading-5 text-[#283451] dark:text-[#d8e2ff]">
          {value}
        </dd>
      </div>
    </div>
  );
}
