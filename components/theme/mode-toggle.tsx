"use client";

import { Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useChilehubMode } from "@/components/theme/chilehub-mode-provider";

export function ModeToggle() {
  const { isDarkMode, toggleMode } = useChilehubMode();
  const router = useRouter();
  const [showConsent, setShowConsent] = useState(false);

  function handleToggle() {
    if (isDarkMode) {
      toggleMode();
      router.push("/");
      return;
    }

    if (window.localStorage.getItem("chilehub-dark-mode-18-consent") === "true") {
      toggleMode();
      router.push("/");
      return;
    }

    setShowConsent(true);
  }

  function confirmConsent() {
    window.localStorage.setItem("chilehub-dark-mode-18-consent", "true");
    setShowConsent(false);
    toggleMode();
    router.push("/");
  }

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#e6ebf4] bg-white text-[#4d5b7f] transition hover:bg-[#f3f6fb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-white/10 dark:bg-white/[0.08] dark:text-[#d8e2ff] dark:hover:bg-white/[0.12] sm:h-10 sm:w-10"
        aria-label={
          isDarkMode
            ? "Volver al modo clasico de ChileHub"
            : "Activar modo oscuro de guias digitales"
        }
        title={isDarkMode ? "Modo clasico" : "Modo oscuro"}
      >
        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      {showConsent
        ? createPortal(
            <div
              className="fixed inset-0 z-[999] grid min-h-[100svh] w-full place-items-center overflow-y-auto bg-[#08111f]/70 px-4 py-6 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="dark-mode-consent-title"
            >
              <div className="w-full max-w-[430px] overflow-hidden rounded-[22px] border border-[#26324f] bg-[#10172b] text-left shadow-[0_28px_90px_rgba(0,0,0,0.5)]">
                <div className="max-h-[calc(100svh-48px)] overflow-y-auto p-5 sm:max-h-[calc(100svh-72px)] sm:p-6">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-[14px] bg-[#243461] text-[#ff9b4f]">
                    <Moon className="h-5 w-5" />
                  </div>
                  <h2
                    id="dark-mode-consent-title"
                    className="text-[21px] font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-[23px]"
                  >
                    Contenido para mayores de 18
                  </h2>
                  <p className="mt-3 text-[13px] font-semibold leading-6 text-[#b8c3dc]">
                    El modo oscuro muestra guias sobre plataformas, privacidad,
                    dinero online y temas adultos legales. Para continuar debes
                    confirmar que tienes 18 anos o mas.
                  </p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setShowConsent(false)}
                      className="h-11 rounded-full border border-[#34415f] px-4 text-[13px] font-bold text-[#d8e2ff] transition hover:bg-white/[0.06]"
                    >
                      Cancelar
                    </button>
                    <button
                      type="button"
                      onClick={confirmConsent}
                      className="h-11 rounded-full bg-[#ff8a3d] px-4 text-[13px] font-extrabold text-[#111827] shadow-[0_16px_34px_rgba(255,138,61,0.24)] transition hover:bg-[#ff9b4f]"
                    >
                      Confirmo que soy +18
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

