import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";
const configuredSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://chilehub.supabase.co";

function getSupabaseOrigin(value: string) {
  try {
    const parsed = new URL(value);

    if (parsed.protocol === "https:" && parsed.hostname.endsWith(".supabase.co")) {
      return parsed.origin;
    }
  } catch {
    return "https://chilehub.supabase.co";
  }

  return "https://chilehub.supabase.co";
}

const supabaseOrigin = getSupabaseOrigin(configuredSupabaseUrl);
const supabaseRealtimeOrigin = supabaseOrigin.replace("https://", "wss://");

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://vercel.live https://www.googletagmanager.com`,
  "style-src 'self' 'unsafe-inline'",
  [
    "img-src 'self' data: blob:",
    "https://www.google-analytics.com",
    "https://stats.g.doubleclick.net",
    "https://www.googletagmanager.com",
    "https://lh3.googleusercontent.com"
  ].join(" "),
  "font-src 'self' data:",
  [
    "connect-src 'self'",
    supabaseOrigin,
    supabaseRealtimeOrigin,
    "https://accounts.google.com",
    "https://www.googleapis.com",
    "https://vercel.live",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://analytics.google.com",
    "https://region1.google-analytics.com",
    "https://stats.g.doubleclick.net",
    isDev ? "ws:" : ""
  ].filter(Boolean).join(" "),
  "frame-src https://accounts.google.com https://*.supabase.co",
  "manifest-src 'self'",
  "media-src 'self' data: blob:",
  "worker-src 'self' blob:",
  ...(isDev ? [] : ["upgrade-insecure-requests"])
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-Frame-Options",
    value: "DENY"
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "off"
  },
  {
    key: "X-Permitted-Cross-Domain-Policies",
    value: "none"
  },
  {
    key: "Origin-Agent-Cluster",
    value: "?1"
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), autoplay=(), encrypted-media=(), fullscreen=(self), gyroscope=(), magnetometer=(), midi=(), picture-in-picture=(), publickey-credentials-get=(), screen-wake-lock=(), sync-xhr=(), browsing-topics=()"
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin"
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin"
  },
  ...(isDev
    ? []
    : [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload"
        }
      ])
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders
      }
    ];
  }
};

export default nextConfig;
