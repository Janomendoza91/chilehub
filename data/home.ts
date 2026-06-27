import {
  BadgeCheck,
  Building2,
  Calculator,
  Car,
  FileText,
  Home,
  IdCard,
  Landmark,
  ReceiptText,
  Ship,
  Sparkles,
  WalletCards
} from "lucide-react";
import type {
  CalculatorCard,
  GuideCard,
  ProcedureCard
} from "@/types/chilehub";

export const popularProcedures: ProcedureCard[] = [
  {
    title: "Renovar licencia",
    description: "Requisitos, documentos y pasos para renovar sin errores.",
    meta: "Municipalidad",
    status: "popular",
    icon: BadgeCheck
  },
  {
    title: "Comprar auto",
    description: "Checklist completo antes de pagar y transferir.",
    meta: "Registro Civil",
    status: "fast",
    icon: Car
  },
  {
    title: "Abrir empresa",
    description: "Constitucion, inicio de actividades y permisos.",
    meta: "SII",
    status: "new",
    icon: Building2
  },
  {
    title: "Sacar pasaporte",
    description: "Reserva, documentos y costos actualizados.",
    meta: "Registro Civil",
    status: "popular",
    icon: IdCard
  }
];

export const guides: GuideCard[] = [
  {
    title: "Vender un auto usado",
    label: "Guia paso a paso",
    time: "12 min",
    icon: WalletCards
  },
  {
    title: "Comprar casa",
    label: "Documentos clave",
    time: "18 min",
    icon: Home
  },
  {
    title: "Importar desde China",
    label: "Aduanas y costos",
    time: "15 min",
    icon: Ship
  }
];

export const calculators: CalculatorCard[] = [
  {
    title: "Permiso de circulacion",
    value: "$146.200",
    caption: "Estimado para sedan 2021",
    icon: Calculator
  },
  {
    title: "Gastos notariales",
    value: "$38.900",
    caption: "Transferencia vehicular",
    icon: ReceiptText
  },
  {
    title: "Inicio de actividades",
    value: "3 pasos",
    caption: "Ruta recomendada",
    icon: FileText
  }
];

export const sidebarItems = [
  { label: "Inicio", icon: Sparkles, active: true },
  { label: "Tramites", icon: Landmark },
  { label: "Guias", icon: FileText },
  { label: "Calculadoras", icon: Calculator },
  { label: "Documentos", icon: WalletCards }
];
