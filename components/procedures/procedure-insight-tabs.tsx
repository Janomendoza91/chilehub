"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  CircleHelp,
  MapPin,
  ShieldAlert
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ProcedureDetail } from "@/types/chilehub";

type InsightKey = "start" | "risks" | "questions" | "changes" | "mistakes";

type InsightTab = {
  key: InsightKey;
  label: string;
  title: string;
  icon: LucideIcon;
  tone: "blue" | "warning" | "neutral";
  items: string[];
};

export function ProcedureInsightTabs({
  procedure
}: {
  procedure: ProcedureDetail;
}) {
  const tabs = useMemo<InsightTab[]>(
    () => [
      {
        key: "start",
        label: "Antes",
        title: "Revisa antes de empezar",
        icon: CheckCircle2,
        tone: "blue",
        items: procedure.beforeYouStart
      },
      {
        key: "risks",
        label: "Alertas",
        title: "Senales para detenerte",
        icon: ShieldAlert,
        tone: "warning",
        items: procedure.redFlags
      },
      {
        key: "questions",
        label: "Preguntas",
        title: "Que confirmar",
        icon: CircleHelp,
        tone: "neutral",
        items: procedure.keyQuestions
      },
      {
        key: "changes",
        label: "Cambia",
        title: "Que puede variar",
        icon: MapPin,
        tone: "neutral",
        items: procedure.variations
      },
      {
        key: "mistakes",
        label: "Errores",
        title: "Errores comunes",
        icon: AlertTriangle,
        tone: "warning",
        items: procedure.commonMistakes
      }
    ],
    [procedure]
  );
  const [activeKey, setActiveKey] = useState<InsightKey>("start");
  const activeTab = tabs.find((tab) => tab.key === activeKey) ?? tabs[0];
  const Icon = activeTab.icon;

  const toneClass = {
    blue: "bg-[#f1f5ff] text-[#36476f]",
    neutral: "bg-[#f7f9ff] text-[#56617f]",
    warning: "bg-[#fff7ed] text-[#8a4b12]"
  };

  return (
    <section className="pb-5">
      <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-4 shadow-[0_18px_46px_rgba(35,49,86,0.05)] sm:p-5">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              Lo importante
            </p>
            <h2 className="mt-1 text-[22px] font-extrabold tracking-[-0.04em] text-[#081642]">
              Informacion ordenada para no perderte
            </h2>
          </div>
          <p className="max-w-[360px] text-[12px] font-semibold leading-5 text-[#66718f]">
            Menos lectura lineal: elige que necesitas revisar ahora y vuelve a
            lo demas cuando corresponda.
          </p>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveKey(tab.key)}
              className={
                activeKey === tab.key
                  ? "shrink-0 rounded-full bg-primary px-4 py-2.5 text-[12px] font-extrabold text-white"
                  : "shrink-0 rounded-full border border-[#e3e9f4] bg-[#fbfcff] px-4 py-2.5 text-[12px] font-extrabold text-[#66718f]"
              }
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[18px] bg-[#f7f9ff] p-4">
            <div className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[13px] bg-white text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-[18px] font-extrabold tracking-[-0.04em] text-[#081642]">
                  {activeTab.title}
                </h3>
                <p className="mt-2 text-[12px] font-semibold leading-5 text-[#66718f]">
                  {activeTab.items[0] ??
                    "Confirma el punto critico antes de continuar."}
                </p>
              </div>
            </div>
          </div>

          <ul className="grid gap-2 md:grid-cols-2">
            {activeTab.items.slice(0, 4).map((item) => (
              <li
                key={item}
                className={`rounded-[14px] px-3 py-3 text-[12px] font-semibold leading-5 ${toneClass[activeTab.tone]}`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
