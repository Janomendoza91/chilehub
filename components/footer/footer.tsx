import { Building2, CircleHelp, ShieldCheck, Sparkles } from "lucide-react";
import { Logo } from "@/components/navigation/logo";

const footerItems = [
  {
    title: "Tramites",
    text: "Procesos populares convertidos en pasos accionables.",
    icon: Sparkles
  },
  {
    title: "Documentos",
    text: "Checklist simple para preparar todo antes de salir.",
    icon: ShieldCheck
  },
  {
    title: "Instituciones",
    text: "Municipalidades, Registro Civil, SII y servicios publicos.",
    icon: Building2
  },
  {
    title: "Ayuda",
    text: "Guias claras para usuarios que quieren avanzar sin friccion.",
    icon: CircleHelp
  }
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              ChileHub acompana a las personas a completar tramites en Chile con
              claridad, velocidad y una experiencia premium.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {footerItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-slate-50 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
