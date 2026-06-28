import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileText,
  MapPin,
  WalletCards
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ProductShell, ReferenceNotice } from "@/components/layout/product-shell";
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
      <section className="grid gap-5 pb-8 pt-3 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
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
        </div>

        <aside className="rounded-[24px] border border-[#dfe6f4] bg-white p-5 shadow-[0_18px_46px_rgba(35,49,86,0.06)]">
          <p className="text-[12px] font-bold text-[#66718f]">
            Preparacion estimada
          </p>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-[42px] font-extrabold tracking-[-0.05em] text-[#081642]">
              {procedure.preparationScore}%
            </span>
            <span className="mb-2 rounded-full bg-[#e5f8ec] px-2.5 py-1 text-[11px] font-bold text-[#20a660]">
              Referencial
            </span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-[#edf1f8]">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${procedure.preparationScore}%` }}
            />
          </div>
          <dl className="mt-5 grid gap-2 text-[12px] font-semibold text-[#66718f]">
            <InfoRow icon={WalletCards} label="Costo" value={procedure.cost} />
            <InfoRow icon={Clock} label="Tiempo" value={procedure.duration} />
            <InfoRow icon={MapPin} label="Donde" value={procedure.channel} />
          </dl>
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

      <ReferenceNotice />

      <section className="grid gap-4 py-8 lg:grid-cols-2">
        <ContentBlock title="Documentos que debes revisar" icon={FileText}>
          <div className="space-y-3">
            {procedure.documents.map((document) => (
              <div
                key={document.title}
                className="rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-[14px] font-extrabold text-[#081642]">
                    {document.title}
                  </h2>
                  <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-[#66718f]">
                    {document.required ? "Requerido" : "Puede aplicar"}
                  </span>
                </div>
                <p className="mt-2 text-[13px] font-medium leading-6 text-[#66718f]">
                  {document.detail}
                </p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Paso a paso" icon={CheckCircle2}>
          <ol className="space-y-3">
            {procedure.steps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#eef2ff] text-[12px] font-extrabold text-primary">
                  {index + 1}
                </span>
                <p className="pt-1 text-[13px] font-semibold leading-6 text-[#56617f]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </ContentBlock>

        <ContentBlock title="Errores frecuentes" icon={AlertTriangle}>
          <ul className="space-y-3">
            {procedure.commonMistakes.map((mistake) => (
              <li key={mistake} className="rounded-[14px] bg-[#fff7ed] px-4 py-3 text-[13px] font-semibold leading-6 text-[#8a4b12]">
                {mistake}
              </li>
            ))}
          </ul>
        </ContentBlock>

        <ContentBlock title="Lo que puede cambiar segun tu caso" icon={MapPin}>
          <ul className="space-y-3">
            {procedure.variations.map((variation) => (
              <li key={variation} className="rounded-[14px] bg-[#f7f9ff] px-4 py-3 text-[13px] font-semibold leading-6 text-[#56617f]">
                {variation}
              </li>
            ))}
          </ul>
        </ContentBlock>
      </section>

      <section className="pb-10">
        <div className="rounded-[22px] border border-[#e3e9f4] bg-white p-5">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Fuentes y revision
          </p>
          <p className="mt-2 text-[13px] font-semibold text-[#66718f]">
            Revisado: {procedure.updatedAt}
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

function ContentBlock({
  title,
  icon: Icon,
  children
}: {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)]">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-[12px] bg-[#eef2ff] text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
