import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Metodologia editorial",
  description:
    "Como ChileHub organiza, marca y revisa informacion referencial sobre tramites, guias, costos, plazos y fuentes.",
  path: "/metodologia",
  keywords: [
    "metodologia ChileHub",
    "fuentes tramites Chile",
    "revision editorial tramites",
    "contenido referencial"
  ]
});

const principles = [
  {
    title: "Referencial primero",
    text: "ChileHub prioriza claridad practica, pero no presenta requisitos, costos o plazos como definitivos si pueden variar por institucion, comuna, fecha o caso personal."
  },
  {
    title: "Fuentes visibles",
    text: "Cada ficha debe apuntar a fuentes o canales donde el usuario pueda confirmar antes de pagar, firmar, reservar hora o presentar documentos."
  },
  {
    title: "Revision mensual",
    text: "El contenido publicado incluye fecha de revision y debe mantenerse bajo una rutina mensual, especialmente cuando hay costos, plazos o reglas variables."
  },
  {
    title: "Sin asesoria personalizada",
    text: "ChileHub no reemplaza profesionales ni instituciones. En temas legales, tributarios, medicos o financieros, el usuario debe confirmar con la entidad o profesional correspondiente."
  }
];

const levels = [
  {
    label: "Enriquecido referencial",
    text: "Contenido ordenado con apoyo editorial y datos estructurados, util para prepararse, pero no verificado uno a uno contra una fuente oficial concreta."
  },
  {
    label: "Revisado",
    text: "Contenido contrastado por producto/editorial contra fuentes preferidas y ajustado para mantener lenguaje claro y advertencias visibles."
  },
  {
    label: "Verificado",
    text: "Contenido validado contra fuente oficial o autoritativa vigente. Este nivel debe reservarse para procesos revisados individualmente."
  },
  {
    label: "Por revisar",
    text: "Contenido que puede estar vencido, depender de reglas recientes o necesitar confirmacion antes de recomendarlo con mas fuerza."
  }
];

export default function MetodologiaPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Metodologia"
        title="Como ChileHub protege claridad sin fingir oficialidad."
        description="El contenido se organiza para ayudarte a llegar preparado al proceso real, con limites visibles y fuentes para confirmar."
      />
      <ReferenceNotice />
      <section className="grid gap-3 pb-6 pt-6 md:grid-cols-2">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-[18px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)] transition-colors dark:border-[#26324f] dark:bg-[#10172b]"
          >
            <h2 className="text-[17px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
              {principle.title}
            </h2>
            <p className="mt-2 text-[13px] font-medium leading-6 text-[#66718f] dark:text-[#b8c3dc]">
              {principle.text}
            </p>
          </article>
        ))}
      </section>
      <section className="pb-12 pt-2">
        <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-5 shadow-[0_16px_42px_rgba(35,49,86,0.045)] transition-colors dark:border-[#26324f] dark:bg-[#10172b] sm:p-6">
          <h2 className="text-[22px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
            Estados editoriales
          </h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {levels.map((level) => (
              <div
                key={level.label}
                className="rounded-[16px] border border-[#e8edf6] bg-[#fbfcff] p-4 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <h3 className="text-[14px] font-extrabold text-[#081642] dark:text-white">
                  {level.label}
                </h3>
                <p className="mt-2 text-[12px] font-medium leading-5 text-[#66718f] dark:text-[#b8c3dc]">
                  {level.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProductShell>
  );
}
