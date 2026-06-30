"use client";

import {
  Building2,
  Car,
  FileText,
  Info,
  Plane,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { SectionReveal } from "@/components/layout/section-reveal";
import {
  HeroPredictiveSearch,
  type HeroSearchSuggestion
} from "@/components/search/hero-predictive-search";
import {
  darkModeQuickActions,
  darkModeSuggestions,
  darkModeTrustItems
} from "@/data/dark-mode";
import { useChilehubMode } from "@/components/theme/chilehub-mode-provider";

const quickActions = [
  { label: "Vender auto", icon: Car },
  { label: "Sacar pasaporte", icon: Plane },
  { label: "Abrir empresa", icon: Building2 },
  { label: "Documentos", icon: FileText }
];

const trustItems = [
  "Fuentes oficiales",
  "Costos estimados",
  "Errores frecuentes",
  "Donde continuar"
];

const heroSuggestions: HeroSearchSuggestion[] = [
  {
    type: "Tramite",
    title: "Renovar licencia de conducir",
    description: "Documentos, costos y examenes que conviene revisar antes de ir a la municipalidad.",
    category: "Autos",
    href: "/tramites/renovar-licencia-conducir"
  },
  {
    type: "Tramite",
    title: "Vender un auto",
    description: "Ordena multas, contrato, pago y transferencia antes de entregar el vehiculo.",
    category: "Autos",
    href: "/tramites/vender-un-auto"
  },
  {
    type: "Tramite",
    title: "Sacar pasaporte",
    description: "Revisa documentos, agenda, costos referenciales y vigencia antes de asistir.",
    category: "Viajes",
    href: "/tramites/sacar-pasaporte"
  },
  {
    type: "Tramite",
    title: "Permiso de circulacion",
    description: "Prepara SOAP, revision tecnica, multas y pagos antes de renovar.",
    category: "Autos",
    href: "/tramites/permiso-circulacion"
  },
  {
    type: "Tramite",
    title: "Abrir una empresa",
    description: "Define tipo de empresa, socios, giro, domicilio y permisos antes de constituir.",
    category: "Empresas",
    href: "/tramites/abrir-empresa"
  },
  {
    type: "Tramite",
    title: "Obtener ClaveUnica",
    description: "Prepara identidad, canal de atencion y recuperacion segura de acceso.",
    category: "Documentos",
    href: "/tramites/obtener-clave-unica"
  },
  {
    type: "Tramite",
    title: "Certificado de antecedentes",
    description: "Revisa para que lo necesitas, vigencia esperada y donde continuar.",
    category: "Documentos",
    href: "/tramites/certificado-antecedentes"
  },
  {
    type: "Tramite",
    title: "Ratificar finiquito",
    description: "Compara contrato, liquidaciones y pagos antes de firmar.",
    category: "Trabajo",
    href: "/tramites/ratificar-finiquito"
  },
  {
    type: "Tramite",
    title: "Registro Social de Hogares",
    description: "Ordena datos del hogar, documentos y cambios antes de actualizar tu registro.",
    category: "Familia",
    href: "/tramites/registro-social-hogares"
  },
  {
    type: "Guia",
    title: "Como vender un auto en Chile?",
    description: "Checklist para documentos, pago, contrato y riesgos frecuentes.",
    category: "Autos",
    href: "/guias/como-vender-un-auto-en-chile"
  },
  {
    type: "Guia",
    title: "Que necesito para comprar una casa?",
    description: "Ordena ahorro, financiamiento, promesa, documentos y gastos iniciales.",
    category: "Vivienda",
    href: "/guias/que-necesito-para-comprar-una-casa"
  },
  {
    type: "Guia",
    title: "Como abrir una empresa?",
    description: "Decisiones clave antes de elegir tipo de empresa, giro y domicilio.",
    category: "Empresas",
    href: "/guias/como-abrir-una-empresa"
  },
  {
    type: "Guia",
    title: "Documentos que suelen faltar",
    description: "Checklist rapido para llegar preparado a procesos comunes.",
    category: "Documentos",
    href: "/guias/documentos-que-suelen-faltar"
  }
];

export function HeroSection() {
  const { isDarkMode } = useChilehubMode();
  const activeQuickActions = isDarkMode ? darkModeQuickActions : quickActions;
  const activeTrustItems = isDarkMode ? darkModeTrustItems : trustItems;
  const activeSuggestions = isDarkMode ? darkModeSuggestions : heroSuggestions;

  return (
    <section className="relative bg-[#fbfcff] pb-6 pt-[136px] transition-colors dark:bg-[#090e1b] sm:pb-9 sm:pt-[164px] xl:pt-[126px] lg:pb-10">
      <div className="container-page">
        <SectionReveal className="mx-auto max-w-[920px] text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#dfe6f4] bg-white px-3 py-1.5 text-[11px] font-bold text-primary shadow-[0_10px_24px_rgba(35,49,86,0.05)] transition-colors dark:border-white/10 dark:bg-white/[0.08] dark:text-[#9fb1ff] sm:text-[12px]">
            <ShieldCheck className="h-3.5 w-3.5" />
            {isDarkMode
              ? "Guias legales para vida digital"
              : "Preparacion clara antes de avanzar"}
          </div>
          <h1 className="mx-auto max-w-[820px] text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#081642] transition-colors dark:text-white min-[375px]:text-[38px] sm:text-[56px] lg:text-[68px]">
            {isDarkMode
              ? "Entiende lo que no quieres preguntar en publico."
              : "Entiende que necesitas antes de empezar."}
          </h1>
          <p className="mx-auto mt-3 max-w-[650px] text-[14px] font-medium leading-[1.5] text-[#4d5b7f] transition-colors dark:text-[#aeb9d4] sm:mt-4 sm:text-[18px]">
            {isDarkMode
              ? "Claridad privada para revisar riesgos, cobros y proximos pasos antes de actuar."
              : "ChileHub ordena documentos, costos, tiempos, errores frecuentes y el siguiente paso para que llegues preparado."}
          </p>
        </SectionReveal>

        <SectionReveal
          className="mx-auto mt-5 max-w-[850px] rounded-[20px] border border-[#dfe5f0] bg-white p-2.5 shadow-[0_24px_70px_rgba(35,49,86,0.08)] transition-colors dark:border-[#26324f] dark:bg-[#10172b] dark:shadow-[0_28px_80px_rgba(0,0,0,0.35)] sm:mt-7 sm:rounded-[28px] sm:p-4"
          delay={0.12}
        >
          <HeroPredictiveSearch
            suggestions={activeSuggestions}
            placeholder={
              isDarkMode
                ? "Que tema digital o adulto necesitas entender?"
                : "Que proceso necesitas preparar?"
            }
          />

          <div className="mt-2.5 grid grid-cols-2 gap-2 sm:mt-3 sm:grid-cols-4">
            {activeQuickActions.map((action) => {
              const Icon = action.icon;
              const href =
                "href" in action && typeof action.href === "string"
                  ? action.href
                  : `/buscar?q=${encodeURIComponent(action.label)}`;

              return (
                <Link
                  key={action.label}
                  href={href}
                  prefetch={false}
                  className="flex items-center gap-2 rounded-[14px] border border-[#e5ebf5] bg-white px-3 py-3 text-left text-[12px] font-bold text-[#283451] transition hover:border-[#cfd9ec] hover:bg-[#fbfcff] dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#f2f6ff] dark:hover:border-[#3a4a70] dark:hover:bg-[#17213d]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#eef2ff] text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                    <Icon className="h-4 w-4" />
                  </span>
                  {action.label}
                </Link>
              );
            })}
          </div>
        </SectionReveal>

        <SectionReveal
          className="mx-auto mt-4 grid max-w-[850px] grid-cols-2 gap-2 sm:grid-cols-4"
          delay={0.18}
        >
          {activeTrustItems.map((item) => (
            <div
              key={item}
              className="rounded-[14px] border border-[#e8edf6] bg-white px-3 py-2.5 text-center text-[11px] font-bold text-[#66718f] shadow-[0_10px_24px_rgba(35,49,86,0.035)] transition-colors dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#e8eeff] sm:text-[12px]"
            >
              {item}
            </div>
          ))}
        </SectionReveal>

        <SectionReveal
          className="mx-auto mt-3 flex max-w-[850px] items-start gap-2 rounded-[16px] border border-[#e5ebf5] bg-white/80 px-3.5 py-3 text-left text-[11px] font-semibold leading-[1.45] text-[#6b7590] shadow-[0_10px_24px_rgba(35,49,86,0.03)] transition-colors dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#e8eeff] sm:items-center sm:px-4 sm:text-[12px]"
          delay={0.22}
        >
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary dark:text-[#ff9b4f] sm:mt-0" />
          <span>
            {isDarkMode
              ? "Informacion referencial recopilada con IA para prepararte mejor. No damos instrucciones para evadir la ley, no hacemos tramites, no vendemos servicios y ChileHub es gratuito."
              : "Informacion referencial recopilada con IA para prepararte mejor. Los tramites no se realizan en este sitio, no generamos cobros y ChileHub es una plataforma gratuita."}
          </span>
        </SectionReveal>
      </div>
    </section>
  );
}

