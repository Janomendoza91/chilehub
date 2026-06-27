import { ArrowRight } from "lucide-react";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/navigation/logo";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/70 bg-white/86 backdrop-blur-2xl">
      <div className="container-page flex h-[74px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Ingresar
          </Button>
          <Button>
            Empezar
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
