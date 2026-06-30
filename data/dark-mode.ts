import {
  BadgeAlert,
  Cannabis,
  CreditCard,
  EyeOff,
  FileLock2,
  Gamepad2,
  Globe2,
  Landmark,
  LockKeyhole,
  MessageSquareWarning,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  WalletCards
} from "lucide-react";
import type { GuideCard, ProcedureCard } from "@/types/chilehub";
import { darkGuidesContent } from "@/data/dark-guides";

export const darkModeQuickActions = [
  { label: "Crear OnlyFans", icon: EyeOff },
  { label: "Receta cannabis", icon: Cannabis },
  { label: "Cuenta hackeada", icon: LockKeyhole },
  { label: "Ingresos online", icon: WalletCards }
];

export const darkModeTrustItems = [
  "Solo temas legales",
  "Privacidad primero",
  "Riesgos claros",
  "Sin cobros ni tramites"
];

export const darkModeProcedures: ProcedureCard[] = [
  {
    title: "Crear una cuenta en OnlyFans",
    description:
      "Privacidad, identidad, cobros, impuestos y reglas antes de publicar contenido.",
    meta: "Ver guia",
    status: "popular",
    icon: EyeOff,
    href: "/guias/crear-cuenta-onlyfans-con-privacidad"
  },
  {
    title: "Receta para cannabis medicinal",
    description:
      "Que revisar con un medico, que no reemplaza la receta y que riesgos evitar.",
    meta: "Ver guia",
    status: "new",
    icon: Cannabis,
    href: "/guias/receta-cannabis-medicinal-chile"
  },
  {
    title: "Recuperar cuenta hackeada",
    description:
      "Pasos para proteger correo, redes sociales, dispositivos y evidencia.",
    meta: "Ver guia",
    status: "fast",
    icon: LockKeyhole,
    href: "/guias/recuperar-instagram-hackeado"
  },
  {
    title: "Declarar ingresos de plataformas",
    description:
      "Que ordenar antes de hablar con SII, contador o plataforma de pago.",
    meta: "Ver guia",
    status: "popular",
    icon: Landmark,
    href: "/guias/declarar-ingresos-plataformas-digitales"
  }
];

export const darkModeGuides: GuideCard[] = [
  {
    title: "Como proteger tu identidad si vendes contenido?",
    label: "Separar cuentas, pagos, fotos, ubicacion y datos personales.",
    time: "Popular",
    icon: FileLock2,
    href: "/guias/proteger-identidad-vendiendo-contenido"
  },
  {
    title: "Que hacer si filtran imagenes sin consentimiento?",
    label: "Evidencia, denuncias, plataformas y apoyo profesional.",
    time: "Popular",
    icon: ShieldAlert,
    href: "/guias/imagenes-intimas-sin-consentimiento"
  },
  {
    title: "Como evitar estafas al cobrar por internet?",
    label: "Pagos, comprobantes falsos, contracargos y senales de riesgo.",
    time: "Nuevo",
    icon: CreditCard,
    href: "/guias/cobrar-online-sin-caer-en-estafas"
  },
  {
    title: "Que revisar antes de apostar online?",
    label: "Legalidad, limites, medios de pago y autocontrol.",
    time: "Nuevo",
    icon: Gamepad2,
    href: "/guias/apuestas-online-limites-riesgos"
  },
  {
    title: "Como cancelar suscripciones dificiles?",
    label: "Cobros recurrentes, tarjetas, soporte y reclamos.",
    time: "Popular",
    icon: Smartphone,
    href: "/guias/cancelar-suscripciones-dificiles"
  },
  {
    title: "Que hacer si te suplantan en redes?",
    label: "Reportes, pruebas, contactos, denuncia y prevencion.",
    time: "Popular",
    icon: MessageSquareWarning,
    href: "/guias/suplantacion-identidad-redes-sociales"
  }
];

export const darkModeGuideCards: GuideCard[] = darkGuidesContent.map((guide, index) => ({
  title: guide.title,
  label: guide.summary,
  time: index % 4 === 0 ? "Nuevo" : "Popular",
  icon:
    guide.category === "Dinero online"
      ? WalletCards
      : guide.category === "Seguridad digital"
        ? LockKeyhole
        : guide.category === "Reputacion online"
          ? ShieldAlert
          : guide.category === "Consumo adulto legal"
            ? BadgeAlert
            : guide.category === "Plataformas adultas"
              ? EyeOff
              : FileLock2,
  href: `/guias/${guide.slug}`
}));

export const darkModeSuggestions = [
  ...darkModeProcedures.map((item) => ({
    type: "Guia" as const,
    title: item.title,
    description: item.description,
    category: "Modo oscuro",
    href: item.href ?? "/buscar"
  })),
  ...darkModeGuides.map((item) => ({
    type: "Guia" as const,
    title: item.title,
    description: item.label,
    category: "Modo oscuro",
    href: item.href ?? "/buscar"
  })),
  {
    type: "Guia" as const,
    title: "Como limpiar privacidad antes de publicar en redes?",
    description:
      "Checklist para revisar usuario, ubicacion, metadatos, contactos y pagos.",
    category: "Privacidad digital",
    href: "/guias/limpiar-privacidad-antes-publicar"
  },
  {
    type: "Guia" as const,
    title: "Que hacer si una app de prestamos te presiona?",
    description:
      "Ordena evidencia, comunicaciones, deudas y canales de reclamo sin exponerte.",
    category: "Dinero online",
    href: "/guias/app-prestamos-presiona-contactos"
  }
];

export const darkModeFooterItems = [
  {
    title: "Legalidad primero",
    text: "Guias para entender limites, riesgos y donde confirmar.",
    icon: ShieldCheck,
    tone: "bg-[#182347] text-[#93a8ff]"
  },
  {
    title: "Privacidad real",
    text: "No pedimos datos sensibles para leer estas guias.",
    icon: EyeOff,
    tone: "bg-[#1b3240] text-[#77d7ff]"
  },
  {
    title: "Sin instrucciones riesgosas",
    text: "No ayudamos a evadir reglas ni hacer actividades ilegales.",
    icon: BadgeAlert,
    tone: "bg-[#3a2330] text-[#ff98b4]"
  },
  {
    title: "Vida digital",
    text: "Plataformas, redes, cobros y reputacion explicados con calma.",
    icon: Globe2,
    tone: "bg-[#1d332b] text-[#81e6b0]"
  }
];
