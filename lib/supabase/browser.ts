import { createClient } from "@supabase/supabase-js";

function cleanPublicEnv(value: string | undefined) {
  return value?.replace(/^\uFEFF/, "").trim();
}

const supabaseUrl = cleanPublicEnv(process.env.NEXT_PUBLIC_SUPABASE_URL);
const supabaseAnonKey = cleanPublicEnv(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const googleAuthFlag = cleanPublicEnv(process.env.NEXT_PUBLIC_ENABLE_GOOGLE_AUTH);

function isAllowedSupabaseUrl(value: string | undefined) {
  if (!value) {
    return false;
  }

  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" && parsed.hostname.endsWith(".supabase.co");
  } catch {
    return false;
  }
}

export const isSupabaseConfigured = Boolean(
  isAllowedSupabaseUrl(supabaseUrl) && supabaseAnonKey
);
export const isGoogleAuthEnabled =
  googleAuthFlag === "true" && isSupabaseConfigured;

export const supabaseBrowserClient = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    })
  : null;
