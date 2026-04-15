"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.toString();
    const page = query ? `${pathname}?${query}` : pathname;
    const key = "drape_analytics_pageviews";
    const existing = window.localStorage.getItem(key);
    const parsed = existing ? JSON.parse(existing) : [];
    const next = [...parsed, { page, ts: new Date().toISOString() }].slice(-50);

    window.localStorage.setItem(key, JSON.stringify(next));
    window.dispatchEvent(new CustomEvent("drape:pageview", { detail: { page } }));
  }, [pathname, searchParams]);

  return null;
}
