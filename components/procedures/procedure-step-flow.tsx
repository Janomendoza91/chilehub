"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin
} from "lucide-react";
import type { ProcedureDetail } from "@/types/chilehub";

type ProcedureStepFlowProps = {
  procedure: ProcedureDetail;
};

export function ProcedureStepFlow({ procedure }: ProcedureStepFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedDocuments, setCompletedDocuments] = useState<string[]>(
    procedure.documents
      .slice(0, Math.min(2, procedure.documents.length))
      .map((document) => document.title)
  );

  const progress = useMemo(() => {
    if (procedure.steps.length === 0) {
      return 0;
    }

    return Math.round(((currentStep + 1) / procedure.steps.length) * 100);
  }, [currentStep, procedure.steps.length]);

  const completed = currentStep >= procedure.steps.length - 1;
  const currentInstruction =
    procedure.steps[currentStep] ??
    "Confirma requisitos y canal vigente antes de avanzar.";
  const currentDocument =
    procedure.documents[currentStep % Math.max(1, procedure.documents.length)];
  const stepContext = buildStepContext(procedure, currentStep);
  const readyDocuments = completedDocuments.length;

  function toggleDocument(title: string) {
    setCompletedDocuments((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  }

  return (
    <section className="pb-5 pt-1">
      <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_18px_46px_rgba(35,49,86,0.05)] sm:p-5">
        <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
              Preparacion guiada
            </p>
            <h2 className="mt-1 text-[22px] font-extrabold tracking-[-0.05em] text-[#081642] sm:text-[30px]">
              {procedure.title} paso a paso
            </h2>
            <p className="mt-2 max-w-[760px] text-[13px] font-semibold leading-6 text-[#66718f]">
              Ordena documentos, riesgos y siguiente accion antes de continuar
              fuera de ChileHub.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-[18px] bg-[#f7f9ff] p-2">
            <FlowStat
              label="Paso"
              value={`${currentStep + 1}/${procedure.steps.length}`}
            />
            <FlowStat label="Avance" value={`${progress}%`} />
            <FlowStat label="Docs" value={String(procedure.documents.length)} />
          </div>
        </div>

        <div className="mt-4 grid gap-2 md:grid-cols-4">
          <MiniPlanItem label="1" text="Confirma canal y requisitos vigentes." />
          <MiniPlanItem label="2" text="Prepara documentos requeridos." />
          <MiniPlanItem label="3" text="Revisa costo, plazo y posibles bloqueos." />
          <MiniPlanItem label="4" text="Continua solo por el canal externo." />
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[20px] border border-[#e3e9f4] bg-[#fbfcff] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                  Paso actual
                </p>
                <h3 className="mt-1 text-[18px] font-extrabold tracking-[-0.04em] text-[#081642] sm:text-[20px]">
                  {currentInstruction}
                </h3>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-primary">
                {progress}%
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-[#e1e8f5]">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <StepMicroCard label="Por que importa" value={stepContext.why} />
              <StepMicroCard label="Resultado" value={stepContext.result} />
              <StepMicroCard label="Bloqueo" value={stepContext.blocker} />
            </div>

            <div className="mt-4 rounded-[16px] bg-white p-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-[#eef2ff] text-primary">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a94ad]">
                    Documento clave
                  </p>
                  <h4 className="text-[15px] font-extrabold text-[#081642]">
                    {currentDocument?.title ?? "Confirma documento aplicable"}
                  </h4>
                </div>
              </div>
              <p className="mt-3 text-[12px] font-semibold leading-5 text-[#66718f]">
                {currentDocument?.detail ??
                  "Revisa la fuente oficial antes de continuar."}
              </p>
            </div>

            <div className="mt-5">
              <h4 className="text-[14px] font-extrabold text-[#081642]">
                Documentos por preparar
              </h4>
              <p className="mt-1 text-[11px] font-bold text-[#8a94ad]">
                {readyDocuments} de {procedure.documents.length} marcados en
                esta pantalla.
              </p>
              <div className="mt-3 grid gap-2">
                {procedure.documents.map((document) => {
                  const checked = completedDocuments.includes(document.title);

                  return (
                    <button
                      key={document.title}
                      onClick={() => toggleDocument(document.title)}
                      className="flex items-center gap-3 rounded-[14px] bg-white px-3 py-3 text-left"
                    >
                      <span
                        className={
                          checked
                            ? "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white"
                            : "grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#cfd9ec] text-transparent"
                        }
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[12.5px] font-bold text-[#283451] sm:text-[13px]">
                          {document.title}
                        </span>
                        <span className="mt-0.5 block text-[11px] font-bold text-[#8a94ad]">
                          {document.required ? "Requerido" : "Puede aplicar"}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[20px] border border-[#e3e9f4] bg-white p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                Ruta de preparacion
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {procedure.steps.map((step, index) => (
                  <button
                    key={`${step}-${index}`}
                    onClick={() => setCurrentStep(index)}
                    aria-label={`Ver paso ${index + 1}`}
                    className={
                      index === currentStep
                        ? "grid h-8 w-8 place-items-center rounded-full bg-primary text-[12px] font-extrabold text-white"
                        : index < currentStep
                          ? "grid h-8 w-8 place-items-center rounded-full bg-[#eaf0ff] text-[12px] font-extrabold text-primary"
                          : "grid h-8 w-8 place-items-center rounded-full bg-[#eef2f8] text-[12px] font-extrabold text-[#8b96ae]"
                    }
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="mt-5 rounded-[16px] bg-[#f7f9ff] p-4">
                <p className="text-[12px] font-bold text-primary">
                  Paso {currentStep + 1}
                </p>
                <h3 className="mt-1 text-[19px] font-extrabold tracking-[-0.04em] text-[#081642]">
                  {currentInstruction}
                </h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#66718f]">
                  {stepContext.detail}
                </p>
              </div>
            </div>

            <div
              className={
                completed
                  ? "rounded-[20px] border border-[#dceee4] bg-[#f4fbf7] p-5"
                  : "rounded-[20px] border border-[#e3e9f4] bg-white p-5"
              }
            >
              <div className="flex items-start gap-3">
                <span
                  className={
                    completed
                      ? "grid h-10 w-10 shrink-0 place-items-center rounded-[13px] bg-white text-success"
                      : "grid h-10 w-10 shrink-0 place-items-center rounded-[13px] bg-[#eef2ff] text-primary"
                  }
                >
                  {completed ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <MapPin className="h-5 w-5" />
                  )}
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                    {completed ? "Preparacion lista" : "Siguiente accion"}
                  </p>
                  <h3 className="mt-1 text-[20px] font-extrabold tracking-[-0.04em] text-[#081642]">
                    {completed
                      ? "Ya tienes una ruta clara para continuar."
                      : "Avanza al siguiente paso cuando tengas esto revisado."}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-[13px] font-semibold leading-6 text-[#66718f]">
                El tramite no se realiza en ChileHub. Cuando termines esta
                preparacion, continua en el canal externo correspondiente.
              </p>
              <p className="mt-4 rounded-[14px] bg-white px-3 py-2 text-[12px] font-bold leading-5 text-[#52607f]">
                El enlace oficial para continuar esta al final de la ficha,
                despues de costos, alertas, checklist y fuentes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() => setCurrentStep((value) => Math.max(0, value - 1))}
            disabled={currentStep === 0}
            className="rounded-full border border-[#e3e9f4] bg-white px-5 py-3 text-[13px] font-bold text-[#52607f] disabled:opacity-40"
          >
            Paso anterior
          </button>
          <button
            onClick={() =>
              setCurrentStep((value) =>
                Math.min(procedure.steps.length - 1, value + 1)
              )
            }
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white"
          >
            {completed ? "Finalizar preparacion" : "Siguiente paso"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function FlowStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-[72px] rounded-[13px] bg-white px-3 py-2">
      <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#8a94ad]">
        {label}
      </p>
      <p className="mt-1 text-[17px] font-extrabold tracking-[-0.04em] text-[#081642]">
        {value}
      </p>
    </div>
  );
}

function MiniPlanItem({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-[14px] bg-[#f7f9ff] px-3 py-2.5">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-[11px] font-extrabold text-primary">
        {label}
      </span>
      <p className="text-[11px] font-bold leading-4 text-[#66718f]">{text}</p>
    </div>
  );
}

function StepMicroCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[14px] bg-white px-3 py-3">
      <p className="text-[9px] font-extrabold uppercase tracking-[0.12em] text-[#8a94ad]">
        {label}
      </p>
      <p className="mt-1 text-[11px] font-bold leading-4 text-[#52607f]">
        {value}
      </p>
    </div>
  );
}

function buildStepContext(procedure: ProcedureDetail, index: number) {
  const document = procedure.documents[index % Math.max(1, procedure.documents.length)];
  const risk = procedure.redFlags[index % Math.max(1, procedure.redFlags.length)];
  const question =
    procedure.keyQuestions[index % Math.max(1, procedure.keyQuestions.length)];

  return {
    why:
      question ??
      "Este punto define si puedes avanzar sin repetir visitas o corregir datos.",
    result:
      document?.title ??
      "Canal, documento o comprobante listo para continuar.",
    blocker:
      risk ??
      "Documento vencido, dato inconsistente, costo no confirmado o canal incorrecto.",
    detail:
      risk
        ? `Antes de pasar al siguiente paso, revisa este riesgo: ${risk}`
        : "Si este paso depende de comuna, institucion o perfil, confirma la condicion antes de pagar, firmar o reservar hora."
  };
}
