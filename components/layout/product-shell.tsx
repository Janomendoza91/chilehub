import type { ReactNode } from "react";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/navigation/header";
import { disclosureText } from "@/data/content";

export function ProductShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fbfcff] text-foreground">
      <Header />
      <div className="container-page pt-[128px] sm:pt-[154px] xl:pt-[122px]">
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
    <section className="pb-4 pt-2 sm:pb-6">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary sm:text-[11px]">
        {eyebrow}
      </p>
      <h1 className="mt-1.5 max-w-[820px] text-[30px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#081642] sm:text-[48px] lg:text-[54px]">
        {title}
      </h1>
      <p className="mt-3 max-w-[680px] text-[13px] font-medium leading-6 text-[#56617f] sm:text-[17px] sm:leading-7">
        {description}
      </p>
    </section>
  );
}

export function ReferenceNotice() {
  return (
    <div className="rounded-[16px] border border-[#dfe6f4] bg-white px-3.5 py-2.5 text-[11px] font-semibold leading-5 text-[#66718f] shadow-[0_10px_24px_rgba(35,49,86,0.035)] sm:px-4 sm:py-3 sm:text-[12px]">
      {disclosureText}
    </div>
  );
}
