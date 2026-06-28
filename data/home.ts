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
import { calculatorsContent, guideCards, procedureCards } from "@/data/content";

export const popularProcedures: ProcedureCard[] = procedureCards;

export const legacyPopularProcedures: ProcedureCard[] = [
  {
    title: "Renovar licencia de conducir",
    description: "Paso a paso, requisitos, costos y mas.",
    meta: "Ver guia",
    status: "popular",
    icon: IdCard
  },
  {
    title: "Vender un auto",
    description: "Paso a paso, requisitos, costos y mas.",
    meta: "Ver guia",
    status: "fast",
    icon: Car
  },
  {
    title: "Sacar pasaporte",
    description: "Paso a paso, requisitos, costos y mas.",
    meta: "Ver guia",
    status: "new",
    icon: BadgeCheck
  },
  {
    title: "Permiso de circulacion",
    description: "Paso a paso, requisitos, costos y mas.",
    meta: "Ver guia",
    status: "popular",
    icon: FileText
  }
];

export const guides: GuideCard[] = guideCards;

export const legacyGuides: GuideCard[] = [
  {
    title: "Como vender un auto en Chile?",
    label: "Paso a paso para hacerlo rapido y seguro.",
    time: "Popular",
    icon: Car
  },
  {
    title: "Que necesito para comprar una casa?",
    label: "Guia completa para compradores.",
    time: "Popular",
    icon: Home
  },
  {
    title: "Como abrir una empresa?",
    label: "Guia completa paso a paso.",
    time: "Nuevo",
    icon: BriefcaseBusiness
  },
  {
    title: "Que revisar antes de firmar?",
    label: "Errores frecuentes y documentos clave.",
    time: "Popular",
    icon: FileBadge
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
    icon: FileText
  }
];

export const calculators: CalculatorCard[] = calculatorsContent;

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

export const sidebarItems = [
  { label: "Inicio", icon: Home, active: true, href: "/" },
  { label: "Buscar", icon: Search, href: "/buscar" },
  { label: "Categorias", icon: UsersRound, href: "/tramites" },
  { label: "Mis tramites", icon: ShieldCheck, href: "/mis-tramites" },
  { label: "Guardados", icon: HeartPulse, href: "/guardados" },
  { label: "Calculadoras", icon: Calculator, href: "/calculadoras" },
  { label: "Noticias utiles", icon: Newspaper, href: "/guias" },
  { label: "Contacto", icon: CircleEllipsis, href: "/contacto" }
];

export const heroCategories = [
  { label: "Autos", count: "12 tramites", icon: Car, tone: "cyan" },
  { label: "Vivienda", count: "18 tramites", icon: Home, tone: "orange" },
  { label: "Familia", count: "15 tramites", icon: UsersRound, tone: "rose" },
  { label: "Trabajo", count: "20 tramites", icon: BriefcaseBusiness, tone: "indigo" },
  { label: "Impuestos", count: "15 tramites", icon: FileBadge, tone: "emerald" },
  { label: "Viajes", count: "12 tramites", icon: Plane, tone: "blue" },
  { label: "Documentos", count: "14 tramites", icon: FileText, tone: "indigo" },
  { label: "Salud", count: "9 tramites", icon: HeartPulse, tone: "rose" },
  { label: "Mas", count: "Ver todo", icon: CircleEllipsis, tone: "slate" }
];
