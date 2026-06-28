import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { guidesContent } from "@/data/content";

export const metadata = {
  title: "Guias | ChileHub",
  description: "Guias simples para entender procesos importantes en Chile."
};

export default function GuidesPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Guias utiles"
        title="Explicaciones simples para tomar mejores decisiones."
        description="Guias referenciales para entender que revisar, que preparar y cuando confirmar informacion en una fuente oficial o externa."
      />
      <ReferenceNotice />

      <section className="grid gap-3 pb-10 pt-6 sm:grid-cols-2">
        {guidesContent.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guias/${guide.slug}`}
            className="group rounded-[22px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.045)] transition hover:-translate-y-0.5 hover:shadow-air"
          >
            <div className="flex items-start gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#eef7ff] text-[#1597b6]">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
                  {guide.category} · {guide.readingTime}
                </p>
                <h2 className="mt-2 text-[20px] font-extrabold leading-tight tracking-[-0.03em] text-[#081642]">
                  {guide.title}
                </h2>
              </div>
            </div>
            <p className="mt-4 text-[13px] font-medium leading-6 text-[#66718f]">
              {guide.summary}
            </p>
            <div className="mt-5 flex items-center gap-1 text-[13px] font-bold text-primary">
              Leer guia
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </div>
          </Link>
        ))}
      </section>
    </ProductShell>
  );
}
