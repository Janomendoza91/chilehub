"use client";

import {
  BadgeCheck,
  HeartHandshake,
  MonitorSmartphone,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { darkModeFooterItems } from "@/data/dark-mode";
import { useChilehubMode } from "@/components/theme/chilehub-mode-provider";

const footerItems = [
  {
    title: "Fuentes visibles",
    text: "Informacion referencial con fuentes para confirmar.",
    icon: ShieldCheck,
    tone: "bg-[#eef0ff] text-primary"
  },
  {
    title: "Siempre contigo",
    text: "Usalo desde tu celular, tablet o computador.",
    icon: MonitorSmartphone,
    tone: "bg-[#eaf7ff] text-[#1597b6]"
  },
  {
    title: "Gratis",
    text: "ChileHub no cobra ni realiza tramites por ti.",
    icon: BadgeCheck,
    tone: "bg-[#e9f8ef] text-[#20a660]"
  },
  {
    title: "Hecho en Chile",
    text: "Pensado para personas que viven procesos en Chile.",
    icon: HeartHandshake,
    tone: "bg-[#ffeaf0] text-[#e43d5a]"
  }
];

const legalLinks = [
  { label: "Metodologia", href: "/metodologia" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Terminos", href: "/terminos" },
  { label: "Contacto", href: "/contacto" }
];

export function Footer() {
  const { isDarkMode } = useChilehubMode();
  const activeFooterItems = isDarkMode ? darkModeFooterItems : footerItems;

  return (
    <footer className="bg-[#fbfcff] pb-12 pt-0 transition-colors dark:bg-[#090e1b]">
      <div className="container-page">
        <div className="rounded-[22px] bg-white px-7 py-8 shadow-[0_18px_58px_rgba(35,49,86,0.055)] transition-colors dark:border dark:border-white/10 dark:bg-[#10172b] dark:shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {activeFooterItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <div
                    className={`grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[13px] ${item.tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold tracking-[-0.01em] text-[#081642] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12px] font-medium leading-5 text-[#6f7a96] dark:text-[#aeb9d4]">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-7 flex flex-col gap-3 border-t border-[#edf1f7] pt-5 text-[12px] font-bold text-[#6f7a96] dark:border-white/10 dark:text-[#aeb9d4] sm:flex-row sm:items-center sm:justify-between">
            <p>ChileHub entrega informacion referencial y gratuita.</p>
            <nav className="flex flex-wrap gap-4" aria-label="Legal">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-primary dark:hover:text-[#ff9b4f]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

