import { Search } from "lucide-react";

export function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "flex h-9 w-full min-w-0 items-center gap-2 rounded-[9px] bg-white px-2 sm:h-10 sm:gap-3 sm:px-3"
          : "flex h-[62px] w-full items-center gap-4 rounded-[14px] border border-[#e8ecf5] bg-white px-5 shadow-[0_12px_34px_rgba(40,55,100,0.08)]"
      }
    >
      <Search className="h-4 w-4 shrink-0 text-[#7a86a6] sm:h-5 sm:w-5" />
      <span className="min-w-0 flex-1 truncate text-left text-[11px] text-[#8a94ad] sm:text-[13px]">
        {compact
          ? "Ej: sacar licencia, renovar pasaporte, comprar casa..."
          : "Ej: vender un auto, sacar pasaporte, abrir empresa..."}
      </span>
      {!compact ? (
        <button
          className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-[12px] bg-primary text-white shadow-[0_14px_24px_rgba(42,81,232,0.24)] transition hover:bg-[#1f48e8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Buscar"
        >
          <Search className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  );
}
