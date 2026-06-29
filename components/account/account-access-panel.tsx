"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, LogOut, ShieldCheck } from "lucide-react";
import { useAuthSession } from "@/hooks/use-auth-session";
import { useLocalAccount } from "@/hooks/use-local-account";

export function AccountAccessPanel({ mode }: { mode: "login" | "register" }) {
  const { ready, state, activate, clear } = useLocalAccount();
  const auth = useAuthSession();
  const [error, setError] = useState("");

  const userName =
    auth.user?.user_metadata?.full_name ||
    auth.user?.user_metadata?.name ||
    auth.user?.email ||
    "Mi espacio";

  useEffect(() => {
    if (auth.user && ready && !state.active) {
      activate(String(userName));
    }
  }, [activate, auth.user, ready, state.active, userName]);

  if (!ready || !auth.ready) {
    return null;
  }

  if (auth.user || state.active) {
    return (
      <section className="grid gap-3 pb-10 pt-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-5 shadow-[0_18px_46px_rgba(35,49,86,0.05)]">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#e5f8ec] text-[#20a660]">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary">
                Espacio activo
              </p>
              <h2 className="text-[22px] font-extrabold tracking-[-0.04em] text-[#081642]">
                {auth.user ? String(userName) : state.name}
              </h2>
            </div>
          </div>
          <p className="mt-4 text-[13px] font-semibold leading-6 text-[#66718f]">
            Tu acceso es gratuito. Por ahora, tus guardados, checklist,
            historial y recordatorios quedan en este navegador hasta activar
            sincronizacion segura.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/mis-tramites" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white">
              Ir a mi espacio
              <ArrowRight className="h-4 w-4" />
            </Link>
            {auth.user ? (
              <button
                onClick={auth.signOut}
                className="inline-flex items-center gap-2 rounded-full border border-[#e3e9f4] bg-white px-5 py-3 text-[13px] font-bold text-[#52607f]"
              >
                <LogOut className="h-4 w-4" />
                Cerrar sesion
              </button>
            ) : null}
            <button
              onClick={clear}
              className="rounded-full border border-[#e3e9f4] bg-white px-5 py-3 text-[13px] font-bold text-[#52607f]"
            >
              Borrar datos locales
            </button>
          </div>
        </div>
        <BenefitGrid />
      </section>
    );
  }

  return (
    <section className="grid gap-3 pb-10 pt-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[24px] border border-[#dfe6f4] bg-white p-5 shadow-[0_18px_46px_rgba(35,49,86,0.05)]">
        <span className="grid h-11 w-11 place-items-center rounded-[15px] bg-[#eef2ff] text-primary">
          <ShieldCheck className="h-5 w-5" />
        </span>
        <h2 className="mt-4 text-[26px] font-extrabold tracking-[-0.05em] text-[#081642]">
          {auth.googleEnabled
            ? mode === "register"
              ? "Activa tu espacio con Google"
              : "Entra con Google"
            : "Espacio personal en preparacion"}
        </h2>
        <p className="mt-3 text-[13px] font-semibold leading-6 text-[#66718f]">
          {auth.googleEnabled
            ? "ChileHub es gratuito. Usa Google para identificarte como en una app web normal; tu preparacion todavia queda guardada localmente en este navegador."
            : "Google se activara cuando publiquemos ChileHub en Vercel y conectemos el dominio final. Mientras tanto puedes probar el espacio local en este navegador."}
        </p>
        <button
          onClick={async () => {
            setError("");
            const result = await auth.signInWithGoogle("/mis-tramites");
            if (result.error) {
              setError(result.error);
            }
          }}
          disabled={!auth.googleEnabled}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-white shadow-[0_14px_28px_rgba(42,81,232,0.24)] disabled:cursor-not-allowed disabled:bg-[#9aa5bd] sm:w-auto"
        >
          Continuar con Google
          <ArrowRight className="h-4 w-4" />
        </button>
        {!auth.googleEnabled ? (
          <button
            onClick={() => activate("Mi espacio local")}
            className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#e3e9f4] bg-white px-5 py-3 text-[13px] font-bold text-[#52607f] sm:ml-2 sm:mt-5 sm:w-auto"
          >
            Usar espacio local
          </button>
        ) : null}
        {!auth.configured ? (
          <p className="mt-3 rounded-[14px] bg-[#fff7ed] px-3 py-2 text-[11px] font-bold leading-5 text-[#8a4b12]">
            Falta configurar NEXT_PUBLIC_SUPABASE_URL y
            NEXT_PUBLIC_SUPABASE_ANON_KEY, y habilitar Google en Supabase Auth.
          </p>
        ) : !auth.googleEnabled ? (
          <p className="mt-3 rounded-[14px] bg-[#eef2ff] px-3 py-2 text-[11px] font-bold leading-5 text-primary">
            Google OAuth esta preparado, pero queda apagado hasta publicar con
            Vercel y autorizar el dominio definitivo.
          </p>
        ) : null}
        {error ? (
          <p className="mt-3 rounded-[14px] bg-[#fff7ed] px-3 py-2 text-[11px] font-bold leading-5 text-[#8a4b12]">
            {error}
          </p>
        ) : null}
        <p className="mt-3 text-[11px] font-semibold leading-5 text-[#7b86a3]">
          No se suben documentos y no hay cobros. La cuenta identifica al
          usuario; la sincronizacion de datos personales se implementara cuando
          exista backend seguro.
        </p>
      </div>
      <BenefitGrid />
    </section>
  );
}

function BenefitGrid() {
  const benefits = [
    "Guardar tramites importantes.",
    "Marcar documentos listos.",
    "Ver historial consultado.",
    "Crear recordatorios propios.",
    "Preparar documentos pendientes.",
    "Detectar fichas con revision mensual."
  ];

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {benefits.map((benefit) => (
        <div key={benefit} className="rounded-[18px] border border-[#e3e9f4] bg-white p-4">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <p className="mt-3 text-[13px] font-bold leading-5 text-[#283451]">
            {benefit}
          </p>
        </div>
      ))}
    </div>
  );
}
