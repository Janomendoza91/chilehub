import { ArrowRight, ChevronRight } from "lucide-react";
import { sidebarItems } from "@/data/home";
import { Logo } from "@/components/navigation/logo";

export function Header() {
  return (
    <header className="absolute left-0 right-0 top-5 z-20 sm:top-8">
      <div className="container-page">
        <div className="flex h-[52px] items-center justify-between rounded-full border border-[#e4eaf4] bg-white/88 px-2.5 shadow-[0_18px_50px_rgba(35,49,86,0.06)] backdrop-blur-xl sm:h-[64px] sm:px-4 lg:px-5">
          <Logo compact />

          <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 px-3 xl:flex">
            {sidebarItems.map((item) => (
              <a
                key={item.label}
                href="#tramites"
                className={
                  item.active
                    ? "rounded-full bg-[#eef2ff] px-3 py-2 text-[12px] font-bold text-primary"
                    : "rounded-full px-3 py-2 text-[12px] font-bold text-[#5f6b88] transition hover:bg-[#f3f6fb] hover:text-[#081642]"
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button className="h-9 rounded-full px-2.5 text-[11px] font-bold text-[#4d5b7f] transition hover:bg-[#f3f6fb] sm:h-10 sm:px-4 sm:text-[13px]">
              Ingresar
            </button>
            <button className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-3 text-[11px] font-bold text-white shadow-[0_12px_24px_rgba(42,81,232,0.22)] sm:h-10 sm:gap-2 sm:px-4 sm:text-[13px]">
              Registrarte
              <ArrowRight className="hidden h-3.5 w-3.5 sm:block" />
            </button>
          </div>
        </div>
        <div className="relative mt-1.5 xl:hidden">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center rounded-r-full bg-gradient-to-l from-white via-white/90 to-transparent pl-8 pr-2">
            <div className="flex items-center gap-0.5 rounded-full bg-[#f3f6fb] px-2 py-1 text-[9px] font-bold text-[#6b7692] shadow-[0_8px_18px_rgba(35,49,86,0.05)]">
              Desliza
              <ChevronRight className="h-3 w-3" />
            </div>
          </div>
          <nav className="flex gap-1.5 overflow-x-auto rounded-full border border-[#e8edf6] bg-white/90 p-1 pr-20 shadow-[0_12px_30px_rgba(35,49,86,0.045)] backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href="#tramites"
                  className={
                    item.active
                      ? "flex shrink-0 items-center gap-1.5 rounded-full bg-[#eef2ff] px-2.5 py-1.5 text-[10.5px] font-bold text-primary sm:px-3 sm:py-2 sm:text-[11px]"
                      : "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10.5px] font-bold text-[#5f6b88] sm:px-3 sm:py-2 sm:text-[11px]"
                  }
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
