import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacidad",
  description:
    "Politica de privacidad de ChileHub: que datos se usan, que queda local y que no se debe ingresar en la plataforma.",
  path: "/privacidad",
  keywords: ["privacidad ChileHub", "datos personales ChileHub", "seguridad ChileHub"]
});

const sections = [
  {
    title: "Que es ChileHub",
    text: "ChileHub es una plataforma referencial para preparar procesos en Chile. No realiza tramites, no cobra por tramites y no reemplaza instituciones, profesionales ni fuentes oficiales."
  },
  {
    title: "Datos de cuenta",
    text: "Si usas Google para entrar, Supabase Auth puede entregar identidad basica como nombre, correo e identificador de sesion. ChileHub usa esa informacion solo para mostrar que la sesion esta iniciada."
  },
  {
    title: "Preparacion local",
    text: "Guardados, historial, checklists y recordatorios se mantienen en este navegador mediante almacenamiento local. Esa preparacion no se presenta como sincronizada entre dispositivos."
  },
  {
    title: "Datos que no debes ingresar",
    text: "No ingreses RUT, direcciones, certificados, documentos, datos bancarios, datos medicos, claves ni informacion sensible. ChileHub no solicita esos datos en esta etapa."
  },
  {
    title: "Analitica",
    text: "ChileHub puede usar analitica basica de trafico cuando existe configuracion de entorno. No se deben enviar textos escritos por usuarios, recordatorios, correos, RUT, documentos ni query strings como eventos."
  },
  {
    title: "Borrado local",
    text: "Puedes borrar tu preparacion local desde las vistas personales de ChileHub. Tambien puedes limpiar los datos del sitio desde la configuracion de tu navegador."
  }
];

export default function PrivacidadPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Privacidad"
        title="Tus datos sensibles no pertenecen a ChileHub en esta etapa."
        description="La experiencia actual esta disenada para preparar y ordenar informacion, no para recibir documentos ni datos personales delicados."
      />
      <ReferenceNotice />
      <section className="grid gap-3 pb-12 pt-6 md:grid-cols-2">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[18px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)] transition-colors dark:border-[#26324f] dark:bg-[#10172b]"
          >
            <h2 className="text-[17px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
              {section.title}
            </h2>
            <p className="mt-2 text-[13px] font-medium leading-6 text-[#66718f] dark:text-[#b8c3dc]">
              {section.text}
            </p>
          </article>
        ))}
      </section>
    </ProductShell>
  );
}
