"use client";

import { useMemo, useState } from "react";

type CalculatorType = "iva" | "permiso" | "finiquito";

const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  maximumFractionDigits: 0
});

export function CalculatorPanel() {
  const [type, setType] = useState<CalculatorType>("iva");
  const [amount, setAmount] = useState("100000");

  const numericAmount = Number(amount) || 0;

  const result = useMemo(() => {
    if (type === "iva") {
      const net = Math.round(numericAmount / 1.19);
      const tax = numericAmount - net;
      return [
        ["Total ingresado", formatter.format(numericAmount)],
        ["Neto aprox.", formatter.format(net)],
        ["IVA aprox.", formatter.format(tax)]
      ];
    }

    if (type === "permiso") {
      const municipal = Math.round(numericAmount * 0.012);
      const buffer = Math.round(municipal * 0.15);
      return [
        ["Tasacion ingresada", formatter.format(numericAmount)],
        ["Referencia base", formatter.format(municipal)],
        ["Margen para revisar", formatter.format(buffer)]
      ];
    }

    const days = Math.max(1, Math.round(numericAmount / 30000));
    return [
      ["Monto base ingresado", formatter.format(numericAmount)],
      ["Dias referenciales", `${days} dias`],
      ["Dato clave", "Contrato, sueldo, causal y vacaciones"]
    ];
  }, [numericAmount, type]);

  return (
    <div className="rounded-[22px] border border-[#dfe6f4] bg-white p-3.5 shadow-[0_16px_38px_rgba(35,49,86,0.05)] sm:p-5">
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
        {[
          ["iva", "IVA"],
          ["permiso", "Permiso"],
          ["finiquito", "Finiquito"]
        ].map(([value, label]) => (
          <button
            key={value}
            onClick={() => setType(value as CalculatorType)}
            className={
              type === value
                ? "rounded-full bg-primary px-2 py-2.5 text-[11px] font-bold text-white sm:px-4 sm:py-3 sm:text-[13px]"
                : "rounded-full border border-[#e3e9f4] bg-[#fbfcff] px-2 py-2.5 text-[11px] font-bold text-[#52607f] sm:px-4 sm:py-3 sm:text-[13px]"
            }
          >
            {label}
          </button>
        ))}
      </div>

      <label className="mt-4 block sm:mt-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#66718f] sm:text-[12px]">
          Monto referencial
        </span>
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          inputMode="numeric"
          className="mt-2 h-12 w-full rounded-[14px] border border-[#dfe6f4] bg-[#fbfcff] px-4 text-[16px] font-extrabold text-[#081642] outline-none focus:border-primary focus:ring-2 focus:ring-[#dfe6ff] sm:h-14 sm:rounded-[16px] sm:text-[18px]"
          aria-label="Monto referencial"
        />
      </label>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-5 sm:gap-3">
        {result.map(([label, value]) => (
          <div key={label} className="rounded-[14px] bg-[#f7f9ff] p-2.5 sm:rounded-[18px] sm:p-4">
            <p className="line-clamp-2 text-[9px] font-bold uppercase tracking-[0.08em] text-[#8a94ad] sm:text-[11px] sm:tracking-[0.12em]">
              {label}
            </p>
            <p className="mt-1.5 break-words text-[12px] font-extrabold tracking-[-0.03em] text-[#081642] sm:mt-2 sm:text-[17px]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-3 text-[11px] font-semibold leading-5 text-[#66718f] sm:mt-4 sm:text-[12px]">
        Resultado referencial. No reemplaza el valor oficial, liquidacion,
        calculo legal ni revision profesional.
      </p>
    </div>
  );
}
