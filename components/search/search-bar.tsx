import { Search, Sparkles } from "lucide-react";

export function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "flex h-12 w-full items-center gap-3 rounded-2xl border border-border bg-white px-4 shadow-line"
          : "mx-auto flex h-[64px] w-full max-w-2xl items-center gap-4 rounded-[24px] border border-border bg-white px-5 shadow-air"
      }
    >
      <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
      <span className="min-w-0 flex-1 truncate text-left text-sm text-muted-foreground sm:text-base">
        Que tramite necesitas completar?
      </span>
      <span className="hidden items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-primary sm:flex">
        <Sparkles className="h-3.5 w-3.5" />
        Guiado
      </span>
    </div>
  );
}
