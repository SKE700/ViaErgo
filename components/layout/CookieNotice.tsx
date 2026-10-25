"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { buttonClasses } from "@/components/ui/Button";

const KEY = "viaergo-cookie-hinweis";
const OPEN_EVENT = "viaergo:cookie-hinweis";

/**
 * Platzhalter-Hinweis. Aktuell werden nur technisch notwendige Speicherungen
 * verwendet. Beim Einsatz von Analyse- oder Marketing-Tools durch eine echte
 * Consent-Lösung ersetzen.
 */
export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(KEY) !== "ok") setVisible(true);
    } catch {
      setVisible(true);
    }
    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(KEY, "ok");
    } catch {}
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Hinweis zu Cookies"
      className="fixed inset-x-3 bottom-3 z-40 flex items-center gap-4 rounded-2xl border border-line bg-white/95 py-3 pl-4 pr-3 shadow-[0_12px_40px_-16px_rgb(34_37_42/0.3)] backdrop-blur sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-sm"
    >
      <p className="text-[13px] leading-snug text-muted">
        Nur technisch notwendige Speicherungen.{" "}
        <Link href="/datenschutz" className="text-ink underline underline-offset-4">
          Datenschutz
        </Link>
      </p>
      <button type="button" onClick={dismiss} className={buttonClasses("ink", "sm", "shrink-0")}>
        Verstanden
      </button>
    </div>
  );
}

export function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))} className={className}>
      Cookie-Hinweis
    </button>
  );
}
