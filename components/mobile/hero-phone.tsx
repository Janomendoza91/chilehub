import { Menu, Search } from "lucide-react";
import { heroCategories } from "@/data/home";
import { Logo } from "@/components/navigation/logo";
import { PhoneShell } from "@/components/mobile/phone-shell";

const toneClass = {
  cyan: "bg-[#e9f9ff] text-[#2294b6]",
  orange: "bg-[#fff1df] text-[#a94b00]",
  rose: "bg-[#ffe9ef] text-[#e3425d]",
  indigo: "bg-[#eef0ff] text-primary",
  emerald: "bg-[#e9f8ef] text-[#22a863]",
  blue: "bg-[#eaf0ff] text-[#3155df]",
  slate: "bg-[#f1f4fb] text-[#68728d]"
};

export function HeroPhone() {
  return (
    <PhoneShell>
      <div className="flex h-full flex-col bg-white px-6 pb-0 pt-6">
        <div className="flex h-8 items-center justify-between text-[13px] font-bold text-[#090f2f]">
          <span>9:41</span>
          <span className="tracking-[-0.2em]">▮▮▮</span>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <Logo compact />
          <button className="text-[#566181]" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-9">
          <p className="text-[15px] font-bold text-[#0a1437]">¡Hola, Diego! 👋</p>
          <h2 className="mt-4 text-[22px] font-extrabold leading-tight tracking-[-0.03em] text-[#081642]">
            ¿Qué necesitas hacer hoy?
          </h2>
        </div>
        <div className="mt-6 flex h-[62px] items-center rounded-[14px] border border-[#e8ecf5] bg-white pl-5 shadow-[0_12px_28px_rgba(32,45,82,0.08)]">
          <span className="flex-1 text-[12px] leading-5 text-[#9aa4ba]">
            Ej: vender un auto, sacar pasaporte,
            <br />
            abrir empresa...
          </span>
          <button
            className="mr-1 grid h-[54px] w-[54px] place-items-center rounded-[12px] bg-primary text-white"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-9 flex items-center justify-between">
          <h3 className="text-[13px] font-extrabold text-[#081642]">
            Categorías populares
          </h3>
          <button className="text-[12px] font-bold text-primary">Ver todas</button>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {heroCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.label}
                className="flex h-[88px] flex-col items-center justify-center rounded-[12px] border border-[#e8ecf5] bg-white text-center shadow-[0_7px_18px_rgba(33,49,92,0.035)]"
              >
                <div
                  className={`grid h-9 w-9 place-items-center rounded-[10px] ${toneClass[category.tone as keyof typeof toneClass]}`}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <p className="mt-2 text-[12px] font-extrabold text-[#101a3f]">
                  {category.label}
                </p>
                <p className="mt-0.5 text-[9px] font-semibold text-[#8993ad]">
                  {category.count}
                </p>
              </div>
            );
          })}
        </div>
        <div className="-mx-6 mt-auto grid h-[74px] grid-cols-4 border-t border-[#e9edf6] bg-white px-5 pt-3 text-center text-[10px] font-semibold text-[#8993ad]">
          {["Inicio", "Mis trámites", "Guardados", "Perfil"].map((item, index) => (
            <div
              key={item}
              className={index === 0 ? "text-primary" : "text-[#5d6883]"}
            >
              <div className="mx-auto mb-1 h-4 w-4 rounded-[5px] bg-current opacity-90" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}
