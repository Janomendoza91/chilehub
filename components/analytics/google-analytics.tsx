"use client";

import { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const analyticsReadyEvent = "chilehub:analytics-ready";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function GoogleAnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId) {
      return;
    }

    function trackPageView() {
      window.gtag?.("config", measurementId, {
        page_path: pathname,
        page_location: `${window.location.origin}${pathname}`,
        page_title: document.title
      });
    }

    if (window.gtag) {
      trackPageView();
      return;
    }

    window.addEventListener(analyticsReadyEvent, trackPageView, { once: true });

    return () => window.removeEventListener(analyticsReadyEvent, trackPageView);
  }, [pathname]);

  return null;
}

export function GoogleAnalytics() {
  useEffect(() => {
    if (!measurementId) {
      return;
    }

    let loaded = false;
    let timeoutId: number | undefined;
    let idleId: number | undefined;
    const events = ["pointerdown", "keydown", "scroll", "touchstart"];

    function cleanupTriggers() {
      events.forEach((eventName) => {
        window.removeEventListener(eventName, loadAnalytics);
      });
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      if (idleId && window.cancelIdleCallback) {
        window.cancelIdleCallback(idleId);
      }
    }

    function loadAnalytics() {
      if (loaded || window.gtag) {
        return;
      }

      loaded = true;
      cleanupTriggers();

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", measurementId, {
        send_page_view: false
      });

      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.onload = () => window.dispatchEvent(new Event(analyticsReadyEvent));
      document.head.appendChild(script);
    }

    events.forEach((eventName) => {
      window.addEventListener(eventName, loadAnalytics, {
        once: true,
        passive: true
      });
    });

    if (window.requestIdleCallback) {
      idleId = window.requestIdleCallback(() => {
        timeoutId = window.setTimeout(loadAnalytics, 10000);
      });
    } else {
      timeoutId = window.setTimeout(loadAnalytics, 10000);
    }

    return cleanupTriggers;
  }, []);

  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsPageView />
    </Suspense>
  );
}
