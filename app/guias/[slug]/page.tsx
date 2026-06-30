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
import { allGuidesContent, getGuide } from "@/data/content";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  contentDate,
  jsonLd,
  pageMetadata,
  siteConfig
} from "@/lib/seo";

export function generateStaticParams() {
  return allGuidesContent.map((guide) => ({ slug: guide.slug }));
}

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  return {
    ...(guide
      ? pageMetadata({
          title: guide.title,
          description: guide.summary,
          path: `/guias/${guide.slug}`,
          type: "article",
          keywords: [
            guide.title,
            guide.category,
            "guia rapida",
            "preparacion",
            "Chile"
          ]
        })
      : pageMetadata({
          title: "Guia",
          description: "Guia referencial de ChileHub.",
          path: "/guias"
        }))
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.summary,
          mainEntityOfPage: absoluteUrl(`/guias/${guide.slug}`),
          datePublished: contentDate(guide.updatedAt).toISOString(),
          dateModified: contentDate(guide.updatedAt).toISOString(),
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
          about: guide.category,
          isAccessibleForFree: true
        })}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(
          breadcrumbJsonLd([
            { name: "Inicio", path: "/" },
            { name: "Guias", path: "/guias" },
            { name: guide.title, path: `/guias/${guide.slug}` }
          ])
        )}
      />
      <article className="mx-auto max-w-[980px] pb-10 pt-3">
        <Link href="/guias" className="text-[13px] font-bold text-primary dark:text-[#9fb1ff]">
          Volver a guias
        </Link>
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-primary dark:text-[#ff9b4f]">
          {guide.category} / {guide.readingTime}
        </p>
        <h1 className="mt-2 text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#081642] dark:text-white sm:text-[56px]">
          {guide.title}
        </h1>
        <p className="mt-4 text-[16px] font-medium leading-8 text-[#56617f] dark:text-[#aeb9d4] sm:text-[19px]">
          {guide.summary}
        </p>

        <div className="mt-6">
          <ReferenceNotice />
        </div>

        <section className="mt-5 rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-[13px] bg-[#eef2ff] text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
              <ListChecks className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                Ruta rapida
              </p>
              <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
                Como leer esta guia
              </h2>
            </div>
          </div>
          <ol className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              "Lee lo esencial y detecta que aplica a tu caso.",
              "Ordena documentos, datos o decisiones pendientes.",
              "Revisa errores y situaciones donde conviene pedir ayuda.",
              "Confirma la fuente antes de pagar, firmar o avanzar."
            ].map((item, index) => (
              <li
                key={item}
                className="flex gap-3 rounded-[14px] bg-[#f7f9ff] px-4 py-3 text-[13px] font-semibold leading-6 text-[#56617f] dark:bg-[#121b32] dark:text-[#d8e2ff]"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-[11px] font-extrabold text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </section>

        {guide.keyTakeaways?.length ? (
          <section className="mt-5 rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-[13px] bg-[#eef7ff] text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                  En 30 segundos
                </p>
                <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
                  Lo que no puedes pasar por alto
                </h2>
              </div>
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {guide.keyTakeaways.map((item) => (
                <div
                  key={item}
                  className="rounded-[16px] border border-[#e7edf6] bg-[#fbfcff] p-3 text-[13px] font-semibold leading-6 text-[#56617f] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff]"
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
                className="rounded-[20px] border border-[#e3e9f4] bg-white p-4 shadow-[0_12px_28px_rgba(35,49,86,0.035)] dark:border-[#26324f] dark:bg-[#111a31]"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#7b86a3] dark:text-[#9aa8c7]">
                  {card.label}
                </p>
                <p className="mt-2 text-[17px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
                  {card.value}
                </p>
                <p className="mt-2 text-[12.5px] font-medium leading-5 text-[#66718f] dark:text-[#aeb9d4]">
                  {card.detail}
                </p>
              </div>
            ))}
          </section>
        ) : null}

        {(guide.practicalScenarios?.length || guide.sourceQuestions?.length) ? (
          <section className="mt-5 grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
            {guide.practicalScenarios?.length ? (
              <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                  Segun tu caso
                </p>
                <div className="mt-4 grid gap-2">
                  {guide.practicalScenarios.map((scenario) => (
                    <div
                      key={scenario.title}
                      className="rounded-[16px] bg-[#f7f9ff] p-3 dark:bg-[#121b32]"
                    >
                      <h2 className="text-[14px] font-extrabold text-[#081642] dark:text-white">
                        {scenario.title}
                      </h2>
                      <p className="mt-1.5 text-[12.5px] font-semibold leading-5 text-[#66718f] dark:text-[#aeb9d4]">
                        {scenario.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {guide.sourceQuestions?.length ? (
              <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                  Preguntas para confirmar
                </p>
                <div className="mt-4 grid gap-2">
                  {guide.sourceQuestions.map((question) => (
                    <div
                      key={question}
                      className="flex gap-3 rounded-[14px] bg-[#fbfcff] px-3 py-3 text-[13px] font-semibold leading-6 text-[#56617f] dark:bg-[#121b32] dark:text-[#d8e2ff]"
                    >
                      <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-[#ff9b4f]" />
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
              className="rounded-[22px] border border-[#e3e9f4] bg-white p-4 shadow-[0_14px_34px_rgba(35,49,86,0.04)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5"
            >
              <div className="flex gap-3">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-[12px] bg-[#f7f9ff] text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                  <Clock3 className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white sm:text-[20px]">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-[13.5px] font-medium leading-7 text-[#66718f] dark:text-[#aeb9d4] sm:text-[14px]">
                    {section.body}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
            <div className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary dark:text-[#ff9b4f]" />
              <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
                Plan de 5 minutos
              </h2>
            </div>
            <div className="mt-4 grid gap-2">
              {(guide.fiveMinutePlan ?? guide.checklist).map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[14px] bg-[#f7f9ff] px-4 py-3 text-[13px] font-semibold leading-6 text-[#56617f] dark:bg-[#121b32] dark:text-[#d8e2ff]"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-[11px] font-extrabold text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
            <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
              Checklist rapido
            </h2>
            <div className="mt-4 grid gap-2">
              {guide.checklist.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[14px] bg-[#f7f9ff] px-4 py-3 text-[13px] font-semibold leading-6 text-[#56617f] dark:bg-[#121b32] dark:text-[#d8e2ff]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary dark:text-[#ff9b4f]" />
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        {(guide.commonMistakes?.length || guide.whenToGetHelp?.length) ? (
          <div className="mt-5 grid gap-3 lg:grid-cols-2">
            {guide.commonMistakes?.length ? (
              <section className="rounded-[24px] border border-[#f2dfc7] bg-[#fffaf3] p-4 dark:border-[#5a3b1d] dark:bg-[#2b1d12] sm:p-5">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-[#b46b14]" />
                  <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
                    Errores que cuestan tiempo
                  </h2>
                </div>
                <div className="mt-4 grid gap-2">
                  {guide.commonMistakes.map((item) => (
                    <p
                      key={item}
                      className="rounded-[14px] bg-white px-4 py-3 text-[13px] font-semibold leading-6 text-[#6f5b3b] dark:bg-[#3b2814] dark:text-[#ffcf9f]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </section>
            ) : null}

            {guide.whenToGetHelp?.length ? (
              <section className="rounded-[24px] border border-[#dce9f7] bg-[#f7fbff] p-4 dark:border-[#26324f] dark:bg-[#10172b] sm:p-5">
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary dark:text-[#ff9b4f]" />
                  <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
                    Cuando no basta una guia
                  </h2>
                </div>
                <div className="mt-4 grid gap-2">
                  {guide.whenToGetHelp.map((item) => (
                    <p
                      key={item}
                      className="rounded-[14px] bg-white px-4 py-3 text-[13px] font-semibold leading-6 text-[#52607f] dark:bg-[#121b32] dark:text-[#d8e2ff]"
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
          <section className="mt-5 rounded-[24px] border border-[#dfe6f4] bg-white p-5 dark:border-[#26324f] dark:bg-[#111a31]">
            <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
              Resultado esperado
            </h2>
            <p className="mt-3 text-[14px] font-medium leading-7 text-[#66718f] dark:text-[#aeb9d4]">
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

        <section className="mt-8 rounded-[22px] border border-[#e3e9f4] bg-white p-5 dark:border-[#26324f] dark:bg-[#111a31]">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
            Fuentes y revision
          </p>
          <p className="mt-2 text-[13px] font-semibold text-[#66718f] dark:text-[#aeb9d4]">
            Revisado: {guide.updatedAt}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {guide.sources.map((source, index) => (
              <a
                key={`${source.url}-${index}`}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#e3e9f4] bg-[#fbfcff] px-3 py-2 text-[12px] font-bold text-[#52607f] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#e8eeff]"
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
