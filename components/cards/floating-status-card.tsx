import type { LucideIcon } from "lucide-react";

export function FloatingStatusCard({
  icon: Icon,
  eyebrow,
  title,
  caption
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  caption: string;
}) {
  return (
    <div className="glass-line w-[230px] rounded-[24px] p-4">
      <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {eyebrow}
      </p>
      <h4 className="mt-1 text-base font-bold tracking-tight">{title}</h4>
      <p className="mt-1 text-sm leading-5 text-muted-foreground">{caption}</p>
    </div>
  );
}
