import { ProductShell, PageIntro, ReferenceNotice } from "@/components/layout/product-shell";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Contacto y reportes",
  description:
    "Contacta a ChileHub para reportar informacion, sugerir procesos o pedir revision de contenido referencial.",
  path: "/contacto"
});

const contactOptions = [
  {
    title: "Reportar informacion",
    text: "Indica el tramite o guia, que dato cambio y cual fuente oficial lo respalda. No incluyas RUT, documentos ni datos personales.",
    action: "Ver politica de privacidad",
    href: "/privacidad"
  },
  {
    title: "Sugerir tramite",
    text: "Propone un proceso que deberia estar en ChileHub y explica que parte genera confusion: documentos, costos, plazos, oficina o requisitos.",
    action: "Explorar tramites actuales",
    href: "/tramites"
  },
  {
    title: "Avisar un problema del sitio",
    text: "Si algo no carga, ves un error raro o crees que hay un problema de seguridad, avisanos sin incluir claves, documentos ni datos personales.",
    action: "Ver como reportar",
    href: "/contacto#reportes"
  }
];

export default function ContactoPage() {
  return (
    <ProductShell>
      <PageIntro
        eyebrow="Contacto"
        title="Ayudanos a detectar informacion confusa."
        description="ChileHub organiza informacion referencial. Si una fuente cambio, falta un proceso o detectas un problema tecnico, reportalo sin incluir datos sensibles."
      />
      <ReferenceNotice />
      <section id="reportes" className="grid gap-3 pb-10 pt-6 sm:grid-cols-3">
        {contactOptions.map((item) => (
          <article
            key={item.title}
            className="rounded-[18px] border border-[#e3e9f4] bg-white p-5 shadow-[0_14px_34px_rgba(35,49,86,0.04)] transition-colors dark:border-[#26324f] dark:bg-[#10172b]"
          >
            <h2 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
              {item.title}
            </h2>
            <p className="mt-2 text-[13px] font-medium leading-6 text-[#66718f] dark:text-[#b8c3dc]">
              {item.text}
            </p>
            <Link
              href={item.href}
              className="mt-4 inline-flex h-10 items-center rounded-full bg-[#eef2ff] px-4 text-[12px] font-extrabold text-primary transition hover:bg-[#e3e9ff] dark:bg-white/10 dark:text-[#ff9b4f] dark:hover:bg-white/[0.14]"
            >
              {item.action}
            </Link>
          </article>
        ))}
      </section>
    </ProductShell>
  );
}
