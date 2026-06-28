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
    <div className="rounded-[26px] border border-[#dfe6f4] bg-white p-4 shadow-[0_18px_46px_rgba(35,49,86,0.06)] sm:p-6">
      <div className="grid gap-2 sm:grid-cols-3">
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
                ? "rounded-full bg-primary px-4 py-3 text-[13px] font-bold text-white"
                : "rounded-full border border-[#e3e9f4] bg-[#fbfcff] px-4 py-3 text-[13px] font-bold text-[#52607f]"
            }
          >
            {label}
          </button>
        ))}
      </div>

      <label className="mt-5 block">
        <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#66718f]">
          Monto referencial
        </span>
        <input
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          inputMode="numeric"
          className="mt-2 h-14 w-full rounded-[16px] border border-[#dfe6f4] bg-[#fbfcff] px-4 text-[18px] font-extrabold text-[#081642] outline-none focus:border-primary focus:ring-2 focus:ring-[#dfe6ff]"
          aria-label="Monto referencial"
        />
      </label>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {result.map(([label, value]) => (
          <div key={label} className="rounded-[18px] bg-[#f7f9ff] p-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8a94ad]">
              {label}
            </p>
            <p className="mt-2 text-[17px] font-extrabold tracking-[-0.03em] text-[#081642]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[12px] font-semibold leading-5 text-[#66718f]">
        Resultado referencial. No reemplaza el valor oficial, liquidacion,
        calculo legal ni revision profesional.
      </p>
    </div>
  );
}
