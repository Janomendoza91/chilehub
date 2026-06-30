"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import {
  isGoogleAuthEnabled,
  isSupabaseConfigured,
  supabaseBrowserClient
} from "@/lib/supabase/browser";

const allowedRedirectPaths = new Set(["/mis-tramites", "/guardados"]);

function safeRedirectPath(path: string) {
  return allowedRedirectPaths.has(path) ? path : "/mis-tramites";
}

export function useAuthSession() {
  const [ready, setReady] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!supabaseBrowserClient) {
      setReady(true);
      return;
    }

    supabaseBrowserClient.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setReady(true);
    });

    const { data } = supabaseBrowserClient.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setReady(true);
    });

    return () => data.subscription.unsubscribe();
  }, []);

  async function signInWithGoogle(redirectPath = "/mis-tramites") {
    if (!supabaseBrowserClient || !isGoogleAuthEnabled) {
      return { error: "Google se activara cuando publiquemos el dominio final." };
    }

    const redirectTo = `${window.location.origin}${safeRedirectPath(redirectPath)}`;
    const { error } = await supabaseBrowserClient.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo }
    });

    return { error: error?.message };
  }

  async function signOut() {
    if (!supabaseBrowserClient) {
      return;
    }

    await supabaseBrowserClient.auth.signOut();
    setUser(null);
  }

  return {
    configured: isSupabaseConfigured,
    googleEnabled: isGoogleAuthEnabled,
    ready,
    user,
    signInWithGoogle,
    signOut
  };
}
