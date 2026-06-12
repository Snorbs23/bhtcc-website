type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

// Fire a GA4 event; no-ops when gtag hasn't loaded (blocked, SSR, dev).
export function track(event: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  (window as GtagWindow).gtag?.("event", event, params);
}
