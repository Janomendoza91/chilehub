import type { ReactNode } from "react";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/navigation/header";
import { disclosureText } from "@/data/content";

export function ProductShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#fbfcff] text-foreground">
      <Header />
      <div className="container-page pt-[136px] sm:pt-[164px] xl:pt-[126px]">
        {children}
      </div>
      <Footer />
    </main>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="pb-6 pt-3 sm:pb-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
        {eyebrow}
      </p>
      <h1 className="mt-2 max-w-[820px] text-[34px] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#081642] sm:text-[56px]">
        {title}
      </h1>
      <p className="mt-4 max-w-[680px] text-[15px] font-medium leading-7 text-[#56617f] sm:text-[18px]">
        {description}
      </p>
    </section>
  );
}

export function ReferenceNotice() {
  return (
    <div className="rounded-[18px] border border-[#dfe6f4] bg-white px-4 py-3 text-[12px] font-semibold leading-5 text-[#66718f] shadow-[0_12px_30px_rgba(35,49,86,0.04)]">
      {disclosureText}
    </div>
  );
}
