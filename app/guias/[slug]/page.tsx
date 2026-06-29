import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  HelpCircle,
  ListChecks,
  Sparkles
} from "lucide-react";
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
      <article className="mx-auto max-w-[980px] pb-10 pt-3">
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

        {guide.keyTakeaways?.length ? (
          <section className="mt-5 rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] sm:p-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-[13px] bg-[#eef7ff] text-primary">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                  En 30 segundos
                </p>
                <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
                  Lo que no puedes pasar por alto
                </h2>
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {guide.keyTakeaways.map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-3 text-[13px] font-semibold leading-6 text-[#56617f]"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {guide.decisionCards?.length ? (
          <section className="mt-4 grid gap-3 sm:grid-cols-3">
            {guide.decisionCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[20px] border border-[#e3e9f4] bg-white p-4 shadow-[0_12px_28px_rgba(35,49,86,0.035)]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#7b86a3]">
                  {card.label}
                </p>
                <p className="mt-2 text-[17px] font-extrabold tracking-[-0.03em] text-[#081642]">
                  {card.value}
                </p>
                <p className="mt-2 text-[12.5px] font-medium leading-5 text-[#66718f]">
                  {card.detail}
                </p>
              </div>
            ))}
          </section>
        ) : null}

        {(guide.practicalScenarios?.length || guide.sourceQuestions?.length) ? (
          <section className="mt-5 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
            {guide.practicalScenarios?.length ? (
              <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                  Segun tu caso
                </p>
                <div className="mt-4 grid gap-2">
                  {guide.practicalScenarios.map((scenario) => (
                    <div
                      key={scenario.title}
                      className="rounded-[16px] bg-[#f7f9ff] p-3"
                    >
                      <h2 className="text-[14px] font-extrabold text-[#081642]">
                        {scenario.title}
                      </h2>
                      <p className="mt-1.5 text-[12.5px] font-semibold leading-5 text-[#66718f]">
                        {scenario.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {guide.sourceQuestions?.length ? (
              <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                  Preguntas para confirmar
                </p>
                <div className="mt-4 grid gap-2">
                  {guide.sourceQuestions.map((question) => (
                    <div
                      key={question}
                      className="flex gap-3 rounded-[14px] bg-[#fbfcff] px-3 py-3 text-[13px] font-semibold leading-6 text-[#56617f]"
                    >
                      <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {question}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </section>
        ) : null}

        <div className="mt-5 grid gap-3">
          {guide.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[22px] border border-[#e3e9f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] sm:p-5"
            >
              <div className="flex gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[12px] bg-[#f7f9ff] text-primary">
                  <Clock3 className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] sm:text-[20px]">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-[13.5px] font-medium leading-7 text-[#66718f] sm:text-[14px]">
                    {section.body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 sm:p-5">
            <div className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary" />
              <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
                Plan de 5 minutos
              </h2>
            </div>
            <div className="mt-4 grid gap-2">
              {(guide.fiveMinutePlan ?? guide.checklist).map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[14px] bg-[#f7f9ff] px-4 py-3 text-[13px] font-semibold leading-6 text-[#56617f]"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-[11px] font-extrabold text-primary">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 sm:p-5">
            <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
              Checklist rapido
            </h2>
            <div className="mt-4 grid gap-2">
              {guide.checklist.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[14px] bg-[#f7f9ff] px-4 py-3 text-[13px] font-semibold leading-6 text-[#56617f]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {(guide.commonMistakes?.length || guide.whenToGetHelp?.length) ? (
          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            {guide.commonMistakes?.length ? (
              <section className="rounded-[24px] border border-[#f2dfc7] bg-[#fffaf3] p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-[#b46b14]" />
                  <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
                    Errores que cuestan tiempo
                  </h2>
                </div>
                <div className="mt-4 grid gap-2">
                  {guide.commonMistakes.map((item) => (
                    <p
                      key={item}
                      className="rounded-[14px] bg-white px-4 py-3 text-[13px] font-semibold leading-6 text-[#6f5b3b]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {guide.whenToGetHelp?.length ? (
              <section className="rounded-[24px] border border-[#dce9f7] bg-[#f7fbff] p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
                    Cuando no basta una guia
                  </h2>
                </div>
                <div className="mt-4 grid gap-2">
                  {guide.whenToGetHelp.map((item) => (
                    <p
                      key={item}
                      className="rounded-[14px] bg-white px-4 py-3 text-[13px] font-semibold leading-6 text-[#52607f]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        ) : null}

        {!guide.fiveMinutePlan ? null : (
          <section className="mt-5 rounded-[24px] border border-[#dfe6f4] bg-white p-5">
            <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642]">
              Resultado esperado
            </h2>
            <p className="mt-3 text-[14px] font-medium leading-7 text-[#66718f]">
              Al terminar esta guia deberias saber que dato falta, que fuente revisar y que accion externa corresponde. Si una condicion cambia por comuna, institucion o caso personal, confirmala antes de avanzar.
            </p>
          </section>
        )}

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
