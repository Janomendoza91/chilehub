"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  MapPin
} from "lucide-react";
import { nearbyRegistroCivilOffices } from "@/data/offices";

const documents = [
  "Permiso circulacion",
  "Revision tecnica",
  "SOAP vigente",
  "Cedula identidad",
  "Certificado multas"
];

const steps = [
  {
    title: "Reune documentos",
    detail: "Ordena los documentos base antes de acordar entrega o firma."
  },
  {
    title: "Firma del contrato",
    detail: "Firma el contrato de compraventa con datos correctos."
  },
  {
    title: "Confirma el pago",
    detail: "Verifica que el pago este recibido antes de entregar llaves."
  },
  {
    title: "Transferencia",
    detail: "Continua en Registro Civil, notaria o canal autorizado."
  },
  {
    title: "Guarda respaldos",
    detail: "Conserva contrato, comprobantes, folios y correos."
  },
  {
    title: "Cierre",
    detail: "Revisa que la transferencia quede reflejada correctamente."
  }
];

export function SellCarPreparationFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedDocuments, setCompletedDocuments] = useState<string[]>([
    "Permiso circulacion",
    "Revision tecnica",
    "SOAP vigente"
  ]);
  const completed = currentStep >= steps.length - 1;

  const progress = useMemo(() => {
    return Math.round(((currentStep + 1) / steps.length) * 100);
  }, [currentStep]);

  function toggleDocument(document: string) {
    setCompletedDocuments((current) =>
      current.includes(document)
        ? current.filter((item) => item !== document)
        : [...current, document]
    );
  }

  return (
    <section className="pb-6 pt-1">
      <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-4 shadow-[0_18px_46px_rgba(35,49,86,0.05)] dark:border-[#26324f] dark:bg-[#111a31] sm:p-5">
        <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
              Preparacion segura
            </p>
            <h2 className="mt-1 text-[24px] font-extrabold tracking-[-0.05em] text-[#081642] dark:text-white sm:text-[30px]">
              Vender un auto paso a paso
            </h2>
            <p className="mt-2 max-w-[720px] text-[13px] font-semibold leading-6 text-[#66718f] dark:text-[#aeb9d4]">
              Sigue el orden: documentos, contrato, pago, transferencia,
              respaldos y cierre antes de continuar fuera de ChileHub.
            </p>
          </div>
          <div className="rounded-[18px] bg-[#f7f9ff] px-4 py-3 dark:bg-[#121b32]">
            <p className="text-[11px] font-bold text-[#66718f] dark:text-[#aeb9d4]">
              Paso {currentStep + 1} de {steps.length}
            </p>
            <p className="mt-1 text-[24px] font-extrabold tracking-[-0.05em] text-primary">
              {progress}%
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[20px] border border-[#e3e9f4] bg-[#fbfcff] p-4 dark:border-[#2a3654] dark:bg-[#121b32]">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                  Paso actual
                </p>
                <h3 className="mt-1 text-[20px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
                  {steps[currentStep].title}
                </h3>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                {currentStep + 1}/{steps.length}
              </span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-[#e1e8f5] dark:bg-[#26324f]">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-4 text-[13px] font-semibold leading-6 text-[#66718f] dark:text-[#aeb9d4]">
              {steps[currentStep].detail}
            </p>

            <div className="mt-5">
              <h4 className="text-[14px] font-extrabold text-[#081642] dark:text-white">
                Documentos necesarios
              </h4>
              <div className="mt-3 grid gap-2">
                {documents.map((document) => {
                  const checked = completedDocuments.includes(document);
                  return (
                    <button
                      key={document}
                      onClick={() => toggleDocument(document)}
                      className="flex items-center gap-3 rounded-[14px] bg-white px-3 py-3 text-left dark:bg-[#10172b]"
                    >
                      <span
                        className={
                          checked
                            ? "grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary text-white"
                            : "grid h-5 w-5 shrink-0 place-items-center rounded-full border border-[#cfd9ec] dark:border-[#3a4a70]"
                        }
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-[13px] font-bold text-[#283451] dark:text-[#d8e2ff]">
                        {document}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[20px] border border-[#e3e9f4] bg-white p-4 dark:border-[#2a3654] dark:bg-[#121b32]">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary dark:text-[#ff9b4f]">
                Paso a paso
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {steps.map((step, index) => (
                  <button
                    key={step.title}
                    onClick={() => setCurrentStep(index)}
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
              <div className="mt-5 rounded-[16px] bg-[#f7f9ff] p-4 dark:bg-[#10172b]">
                <p className="text-[12px] font-bold text-primary dark:text-[#ff9b4f]">
                  Paso {currentStep + 1}
                </p>
                <h3 className="mt-1 text-[19px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
                  {steps[currentStep].title}
                </h3>
                <p className="mt-2 text-[13px] font-semibold leading-6 text-[#66718f] dark:text-[#aeb9d4]">
                  {steps[currentStep].detail}
                </p>
              </div>
            </div>

            <div className="rounded-[20px] border border-[#e3e9f4] bg-white p-4 dark:border-[#2a3654] dark:bg-[#121b32]">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-[#eef2ff] text-primary dark:bg-[#243461] dark:text-[#ff9b4f]">
                  <FileText className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-extrabold text-[#081642] dark:text-white">
                    Pauta de compraventa
                  </h3>
                  <p className="text-[12px] font-semibold text-[#66718f] dark:text-[#aeb9d4]">
                    Referencial para preparar datos antes de firmar.
                  </p>
                </div>
              </div>
              <div className="mt-4 rounded-[14px] bg-[#f7fbff] p-3 text-[12px] font-semibold leading-5 text-[#66718f] dark:bg-[#10172b] dark:text-[#d8e2ff]">
                Revisa que contrato, patente, VIN, RUT, precio, fecha de pago y
                datos de ambas partes coincidan antes de firmar.
              </div>
              <div className="mt-3 rounded-[14px] bg-[#fff7ed] p-3 text-[12px] font-semibold leading-5 text-[#8a4b12] dark:bg-[#3b2814] dark:text-[#ffcf9f]">
                Consejo util: verifica los datos del comprador antes de firmar.
              </div>
            </div>
          </div>
        </div>

        {completed ? (
          <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[20px] border border-[#dceee4] bg-[#f4fbf7] p-5 dark:border-[#214d35] dark:bg-[#10271b]">
              <CheckCircle2 className="h-9 w-9 text-success" />
              <h3 className="mt-4 text-[22px] font-extrabold tracking-[-0.04em] text-[#081642] dark:text-white">
                Tramite completado
              </h3>
              <p className="mt-2 text-[13px] font-semibold leading-6 text-[#66718f] dark:text-[#aeb9d4]">
                Ya tienes la preparacion lista para vender tu auto.
              </p>
              <div className="mt-4 rounded-[16px] bg-white p-4 dark:bg-[#10172b]">
                <p className="text-[13px] font-extrabold text-[#081642] dark:text-white">
                  Que sigue?
                </p>
                <p className="mt-1 text-[12px] font-semibold leading-5 text-[#66718f] dark:text-[#aeb9d4]">
                  Continua en Registro Civil para transferir el vehiculo.
                </p>
                <Link
                  href="/oficinas#oficinas-cercanas"
                  className="mt-3 inline-flex items-center gap-2 text-[13px] font-bold text-primary"
                >
                  Ver oficinas cercanas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[20px] border border-[#e3e9f4] bg-white dark:border-[#2a3654] dark:bg-[#121b32]">
              <div className="flex items-center justify-between gap-3 p-5 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-[18px] font-extrabold tracking-[-0.03em] text-[#081642] dark:text-white">
                    Oficinas cercanas
                  </h3>
                </div>
                <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-[11px] font-extrabold text-primary">
                  Mas cercana
                </span>
              </div>

              <div className="relative h-[150px] overflow-hidden bg-[#edf2f8] dark:bg-[#10172b]">
                <div className="absolute inset-0 opacity-75 [background-image:linear-gradient(90deg,#dce3ee_1px,transparent_1px),linear-gradient(#dce3ee_1px,transparent_1px)] [background-size:28px_28px]" />
                <span className="absolute left-[22%] top-[48%] text-primary">
                  <MapPin className="h-8 w-8 fill-current drop-shadow-sm" />
                </span>
                <span className="absolute left-[56%] top-[28%] text-success">
                  <MapPin className="h-7 w-7 fill-current drop-shadow-sm" />
                </span>
                <span className="absolute right-[15%] top-[58%] text-success">
                  <MapPin className="h-7 w-7 fill-current drop-shadow-sm" />
                </span>
                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold text-[#52607f] shadow-[0_10px_24px_rgba(35,49,86,0.08)] dark:bg-[#121b32]/90 dark:text-[#d8e2ff]">
                  Ubicacion referencial
                </div>
              </div>

              <div className="-mt-4 grid gap-2 p-4 pt-0">
                {nearbyRegistroCivilOffices.map((office) => (
                  <Link
                    key={office.id}
                    href={`/oficinas#${office.id}`}
                    className={
                      office.badge === "Mas cercana"
                        ? "relative flex items-center justify-between rounded-[16px] border border-[#dce8ff] bg-white p-3 shadow-[0_14px_30px_rgba(35,49,86,0.08)] dark:border-[#3a4a70] dark:bg-[#10172b]"
                        : "relative flex items-center justify-between rounded-[14px] border border-[#edf1f7] bg-[#f7f9ff] p-3 dark:border-[#2a3654] dark:bg-[#10172b]"
                    }
                  >
                    <span>
                      <span className="flex items-center gap-2">
                        <span className="block text-[13px] font-extrabold text-[#081642] dark:text-white">
                          {office.name}
                        </span>
                        {office.badge === "Mas cercana" ? (
                          <span className="rounded-full bg-[#e5f8ec] px-2 py-0.5 text-[9px] font-extrabold text-[#20a660]">
                            Recomendada
                          </span>
                        ) : null}
                      </span>
                      <span className="mt-1 block text-[11px] font-bold text-[#f07b22]">
                        {office.distance}
                      </span>
                    </span>
                    <span className="text-[12px] font-bold text-primary">
                      Ver detalles
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() => setCurrentStep((value) => Math.max(0, value - 1))}
            disabled={currentStep === 0}
            className="rounded-full border border-[#e3e9f4] bg-white px-5 py-3 text-[13px] font-bold text-[#52607f] disabled:opacity-40 dark:border-[#2a3654] dark:bg-[#121b32] dark:text-[#d8e2ff]"
          >
            Paso anterior
          </button>
          <button
            onClick={() =>
              setCurrentStep((value) => Math.min(steps.length - 1, value + 1))
            }
            className="rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white"
          >
            {currentStep === steps.length - 1 ? "Finalizar" : "Siguiente paso"}
          </button>
        </div>
      </div>
    </section>
  );
}
