import {
  BadgeCheck,
  Calculator,
  Car,
  CalendarDays,
  CircleEllipsis,
  FileBadge,
  FileText,
  HeartPulse,
  Home,
  IdCard,
  Newspaper,
  Plane,
  Search,
  ShieldCheck,
  UsersRound,
  ReceiptText,
  WalletCards,
  BriefcaseBusiness
} from "lucide-react";
import type {
  CalculatorCard,
  GuideCard,
  ProcedureCard
} from "@/types/chilehub";

export const legacyPopularProcedures: ProcedureCard[] = [
  {
    title: "Renovar licencia de conducir",
    description: "Paso a paso, requisitos, costos y mas.",
    meta: "Ver guia",
    status: "popular",
    icon: IdCard,
    href: "/tramites/renovar-licencia-conducir"
  },
  {
    title: "Vender un auto",
    description: "Paso a paso, requisitos, costos y mas.",
    meta: "Ver guia",
    status: "fast",
    icon: Car,
    href: "/tramites/vender-un-auto"
  },
  {
    title: "Sacar pasaporte",
    description: "Paso a paso, requisitos, costos y mas.",
    meta: "Ver guia",
    status: "new",
    icon: BadgeCheck,
    href: "/tramites/sacar-pasaporte"
  },
  {
    title: "Permiso de circulacion",
    description: "Paso a paso, requisitos, costos y mas.",
    meta: "Ver guia",
    status: "popular",
    icon: FileText,
    href: "/tramites/permiso-circulacion"
  }
];

export const popularProcedures: ProcedureCard[] = legacyPopularProcedures;

export const legacyGuides: GuideCard[] = [
  {
    title: "Como vender un auto en Chile?",
    label: "Paso a paso para hacerlo rapido y seguro.",
    time: "Popular",
    icon: Car,
    href: "/guias/como-vender-un-auto-en-chile"
  },
  {
    title: "Que necesito para comprar una casa?",
    label: "Guia completa para compradores.",
    time: "Popular",
    icon: Home,
    href: "/guias/que-necesito-para-comprar-una-casa"
  },
  {
    title: "Como abrir una empresa?",
    label: "Guia completa paso a paso.",
    time: "Nuevo",
    icon: BriefcaseBusiness,
    href: "/guias/como-abrir-una-empresa"
  },
  {
    title: "Que revisar antes de firmar?",
    label: "Errores frecuentes y documentos clave.",
    time: "Popular",
    icon: FileBadge,
    href: "/guias/que-revisar-antes-de-firmar-finiquito"
  },
  {
    title: "Como preparar un viaje?",
    label: "Pasaporte, permisos y costos estimados.",
    time: "Nuevo",
    icon: Plane
  },
  {
    title: "Documentos que suelen faltar",
    label: "Checklist rapido antes de avanzar.",
    time: "Popular",
    icon: FileText,
    href: "/guias/documentos-que-suelen-faltar"
  }
];

export const guides: GuideCard[] = legacyGuides;

export const legacyCalculators: CalculatorCard[] = [
  {
    title: "Calculadora de finiquito",
    value: "",
    caption: "",
    icon: Calculator
  },
  {
    title: "Calculadora de horas extra",
    value: "",
    caption: "",
    icon: CalendarDays
  },
  {
    title: "Calculadora de IVA",
    value: "",
    caption: "",
    icon: ReceiptText
  },
  {
    title: "Calculadora de permiso de circulacion",
    value: "",
    caption: "",
    icon: FileText
  }
];

export const calculators: CalculatorCard[] = legacyCalculators;

export const sidebarItems = [
  { label: "Inicio", icon: Home, active: true, href: "/" },
  { label: "Buscar", icon: Search, href: "/buscar" },
  { label: "Tramites", icon: UsersRound, href: "/tramites" },
  { label: "Mis tramites", icon: ShieldCheck, href: "/mis-tramites" },
  { label: "Guardados", icon: HeartPulse, href: "/guardados" },
  { label: "Calculadoras", icon: Calculator, href: "/calculadoras" },
  { label: "Guias rapidas", icon: Newspaper, href: "/guias" },
  { label: "Contacto", icon: CircleEllipsis, href: "/contacto" }
];

export const heroCategories = [
  { label: "Autos", count: "45+ tramites", icon: Car, tone: "cyan" },
  { label: "Vivienda", count: "55+ tramites", icon: Home, tone: "orange" },
  { label: "Familia", count: "45+ tramites", icon: UsersRound, tone: "rose" },
  { label: "Trabajo", count: "45+ tramites", icon: BriefcaseBusiness, tone: "indigo" },
  { label: "Empresas", count: "45+ tramites", icon: BriefcaseBusiness, tone: "emerald" },
  { label: "Impuestos", count: "45+ tramites", icon: FileBadge, tone: "emerald" },
  { label: "Viajes", count: "45+ tramites", icon: Plane, tone: "blue" },
  { label: "Documentos", count: "45+ tramites", icon: FileText, tone: "indigo" },
  { label: "Salud", count: "40+ tramites", icon: HeartPulse, tone: "rose" },
  { label: "Mas", count: "Ver todo", icon: CircleEllipsis, tone: "slate" }
];
