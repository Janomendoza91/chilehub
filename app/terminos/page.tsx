import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terminos de uso",
  description:
    "Terminos de uso de ChileHub: alcance referencial, limites de responsabilidad y uso esperado de la plataforma.",
  path: "/terminos",
  keywords: ["terminos ChileHub", "uso ChileHub", "informacion referencial"]
});

const terms = [
  {
    title: "Uso referencial",
    text: "ChileHub organiza informacion para preparar procesos, pero no garantiza que requisitos, montos, plazos o disponibilidad sean definitivos para tu caso."
  },
  {
    title: "Fuentes oficiales",
    text: "Antes de pagar, firmar, reservar hora o presentar documentos, debes confirmar la informacion en la institucion, municipalidad, plataforma oficial o profesional correspondiente."
  },
  {
    title: "Sin ejecucion de tramites",
    text: "ChileHub no presenta solicitudes por ti, no representa instituciones publicas o privadas y no actua como gestor, abogado, contador, notario ni asesor financiero."
  },
  {
    title: "Sin datos sensibles",
    text: "No uses ChileHub para almacenar documentos, certificados, RUT, direcciones, datos bancarios, claves ni informacion medica. La preparacion actual esta pensada para datos no sensibles."
  },
  {
    title: "Contenido generado y revisiones",
    text: "Parte del contenido puede estar enriquecido con apoyo de IA y debe tratarse como referencial hasta contar con verificacion editorial individual."
  },
  {
    title: "Cambios del servicio",
    text: "ChileHub puede ajustar contenido, rutas, funciones o politicas para mejorar claridad, seguridad, privacidad y calidad editorial."
  }
];

export default function TerminosPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Terminos"
        title="ChileHub prepara, no reemplaza el proceso real."
        description="Estos terminos resumen el alcance actual: informacion referencial, preparacion local y confirmacion final siempre fuera de ChileHub."
      />
      <ReferenceNotice />
      <section className="grid gap-3 pb-12 pt-6 md:grid-cols-2">
        {terms.map((term) => (
          <article
            key={term.title}
            className="rounded-[18px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)] transition-colors dark:border-[#26324f] dark:bg-[#10172b]"
          >
            <h2 className="text-[17px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
              {term.title}
            </h2>
            <p className="mt-2 text-[13px] font-medium leading-6 text-[#66718f] dark:text-[#b8c3dc]">
              {term.text}
            </p>
          </article>
        ))}
      </section>
    </ProductShell>
  );
}
