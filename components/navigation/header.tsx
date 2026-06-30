"use client";

import {
  ArrowRight,
  ChevronRight,
  CircleEllipsis,
  EyeOff,
  Home,
  LockKeyhole,
  Search,
  ShieldAlert,
  WalletCards
} from "lucide-react";
import Link from "next/link";
import { useAuthSession } from "@/hooks/use-auth-session";
import { sidebarItems } from "@/data/home";
import { Logo } from "@/components/navigation/logo";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { useChilehubMode } from "@/components/theme/chilehub-mode-provider";

const headerItems = sidebarItems.filter((item) => item.label !== "Buscar");
const mainNavItems = headerItems.filter((item) => item.label !== "Mis tramites");

const darkMainNavItems = [
  { label: "Inicio", href: "/", icon: Home, active: true },
  { label: "Privacidad", href: "/guias?tema=privacidad", icon: EyeOff },
  { label: "Plataformas", href: "/guias?tema=plataformas", icon: CircleEllipsis },
  { label: "Dinero online", href: "/guias?tema=dinero", icon: WalletCards },
  { label: "Seguridad", href: "/guias?tema=seguridad", icon: LockKeyhole },
  { label: "Denuncias", href: "/guias?tema=denuncias", icon: ShieldAlert }
];

export function Header() {
  const { isDarkMode } = useChilehubMode();
  const { ready, user } = useAuthSession();
  const activeNavItems = isDarkMode ? darkMainNavItems : mainNavItems;
  const showProfileAction = ready && Boolean(user);

  return (
    <header className="absolute left-0 right-0 top-5 z-20 sm:top-8">
      <div className="container-page">
        <div className="flex h-[52px] items-center justify-between rounded-full border border-[#e4eaf4] bg-white/88 px-2.5 shadow-[0_18px_50px_rgba(35,49,86,0.06)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#0d1326]/[0.88] dark:shadow-[0_22px_58px_rgba(0,0,0,0.28)] sm:h-[64px] sm:px-4 lg:px-5">
          <Logo compact />

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 px-3 xl:flex">
            {activeNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch={false}
                className={
                  item.active
                    ? "rounded-full bg-[#eef2ff] px-3 py-2 text-[12px] font-bold text-primary dark:bg-white/10 dark:text-[#dce6ff]"
                    : "rounded-full px-3 py-2 text-[12px] font-bold text-[#5f6b88] transition hover:bg-[#f3f6fb] hover:text-[#081642] dark:text-[#9aa8c7] dark:hover:bg-white/[0.08] dark:hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <ModeToggle />
            <Link
              href="/buscar"
              prefetch={false}
              aria-label="Buscar un tramite o guia"
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-full border border-[#e3e9f4] bg-white px-2.5 text-[11px] font-bold text-[#4d5b7f] transition hover:bg-[#f3f6fb] hover:text-primary dark:border-white/10 dark:bg-white/[0.04] dark:text-[#c8d3ee] dark:hover:bg-white/[0.08] dark:hover:text-white sm:h-10 sm:px-3 sm:text-[13px] lg:px-4"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">Necesito un tramite</span>
            </Link>
            <Link href={isDarkMode ? "/guardados" : "/mis-tramites"} prefetch={false} className="grid h-9 place-items-center rounded-full px-2.5 text-[11px] font-bold text-[#4d5b7f] transition hover:bg-[#f3f6fb] dark:text-[#c8d3ee] dark:hover:bg-white/[0.08] sm:h-10 sm:px-4 sm:text-[13px]">
              {isDarkMode ? "Mis guias" : "Mis tramites"}
            </Link>
            <Link href={showProfileAction ? "/mis-tramites" : "/registrarte"} prefetch={false} className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-3 text-[11px] font-bold text-white shadow-[0_12px_24px_rgba(42,81,232,0.22)] sm:h-10 sm:gap-2 sm:px-4 sm:text-[13px]">
              {showProfileAction ? "Mi perfil" : "Activar gratis"}
              <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
            </Link>
          </div>
        </div>
        <div className="relative mt-1.5 xl:hidden">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center rounded-r-full bg-gradient-to-l from-white via-white/90 to-transparent pl-8 pr-2 dark:from-[#090e1b] dark:via-[#090e1b]/90">
            <div className="flex items-center gap-0.5 rounded-full bg-[#f3f6fb] px-2 py-1 text-[9px] font-bold text-[#6b7692] shadow-[0_8px_18px_rgba(35,49,86,0.05)] dark:bg-white/10 dark:text-[#c8d3ee]">
              Desliza
              <ChevronRight className="h-3 w-3" />
            </div>
          </div>
          <nav className="flex gap-1.5 overflow-x-auto rounded-full border border-[#e8edf6] bg-white/90 p-1 pr-20 shadow-[0_12px_30px_rgba(35,49,86,0.045)] backdrop-blur-xl dark:border-white/10 dark:bg-[#0d1326]/90 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {activeNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  prefetch={false}
                  className={
                    item.active
                      ? "flex shrink-0 items-center gap-1.5 rounded-full bg-[#eef2ff] px-2.5 py-1.5 text-[10.5px] font-bold text-primary dark:bg-white/10 dark:text-[#dce6ff] sm:px-3 sm:py-2 sm:text-[11px]"
                      : "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10.5px] font-bold text-[#5f6b88] dark:text-[#9aa8c7] sm:px-3 sm:py-2 sm:text-[11px]"
                  }
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

