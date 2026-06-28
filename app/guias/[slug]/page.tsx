import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductShell, ReferenceNotice } from "@/components/layout/product-shell";
import { getGuide, guidesContent } from "@/data/content";

export function generateStaticParams() {
  return guidesContent.map((guide) => ({ slug: guide.slug }));
}

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  return {
    title: guide ? `${guide.title} | ChileHub` : "Guia | ChileHub",
    description: guide?.summary
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  return (
    <ProductShell>
      <article className="mx-auto max-w-[900px] pb-10 pt-3">
        <Link href="/guias" className="text-[13px] font-bold text-primary">
          Volver a guias
        </Link>
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
          {guide.category} / {guide.readingTime}
        </p>
        <h1 className="mt-2 text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#081642] sm:text-[56px]">
          {guide.title}
        </h1>
        <p className="mt-4 text-[16px] font-medium leading-8 text-[#56617f] sm:text-[19px]">
          {guide.summary}
        </p>

        <div className="mt-6">
          <ReferenceNotice />
        </div>

        <div className="mt-6 grid gap-4">
          {guide.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[24px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)]"
            >
              <h2 className="text-[21px] font-extrabold tracking-[-0.03em] text-[#081642]">
                {section.title}
              </h2>
              <p className="mt-3 text-[14px] font-medium leading-7 text-[#66718f]">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <section className="mt-5 rounded-[24px] border border-[#dfe6f4] bg-white p-5">
          <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
            Checklist rapido
          </h2>
          <div className="mt-4 grid gap-2">
            {guide.checklist.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[14px] bg-[#f7f9ff] px-4 py-3 text-[13px] font-semibold text-[#56617f]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {guide.relatedProcedureSlug ? (
          <Link
            href={`/tramites/${guide.relatedProcedureSlug}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white shadow-[0_14px_28px_rgba(42,81,232,0.24)]"
          >
            Ver tramite relacionado
            <ArrowRight className="h-4 w-4" />
          </Link>
        ) : null}

        <section className="mt-8 rounded-[22px] border border-[#e3e9f4] bg-white p-5">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            Fuentes y revision
          </p>
          <p className="mt-2 text-[13px] font-semibold text-[#66718f]">
            Revisado: {guide.updatedAt}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {guide.sources.map((source) => (
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
        </section>
      </article>
    </ProductShell>
  );
}
