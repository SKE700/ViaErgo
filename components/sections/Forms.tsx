"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { buttonClasses } from "@/components/ui/Button";

const inputCls =
  "h-12 w-full rounded-xl border border-line bg-white px-4 text-[16px] text-ink placeholder:text-muted/70 transition-colors focus:border-ink/40 focus:outline-2 focus:outline-offset-2 focus:outline-ink";

function Notice({ children }: { children: React.ReactNode }) {
  return (
    <div role="status" className="flex items-start gap-3 rounded-2xl border border-line bg-white p-5 text-[15px] leading-relaxed">
      <CheckCircle2 aria-hidden className="mt-0.5 size-5 shrink-0 text-mk-600" />
      <div>{children}</div>
    </div>
  );
}

/**
 * Newsletter-Formular. Noch ohne Anbindung: Es werden keine Daten übertragen.
 * Später an den Newsletter-Anbieter (mit Double-Opt-in) anbinden.
 */
export function NewsletterForm({ dark, className }: { dark?: boolean; className?: string }) {
  const id = useId();
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Notice>
        <strong className="font-semibold">Fast geschafft.</strong> Hier folgt später die Bestätigungs-E-Mail (Double-Opt-in).
        <span className="mt-1 block font-mono text-xs text-muted">[PLATZHALTER: Newsletter-Anbieter noch nicht angebunden – es wurden keine Daten übertragen.]</span>
      </Notice>
    );
  }

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={`${id}-email`} className="sr-only">
          E-Mail-Adresse
        </label>
        <input id={`${id}-email`} type="email" name="email" required autoComplete="email" placeholder="Deine E-Mail-Adresse" className={cn(inputCls, "sm:flex-1")} />
        <button type="submit" className={buttonClasses("ink", "lg", "h-12")}>
          Kostenlos anmelden
        </button>
      </div>
      <p className={cn("mt-3 text-sm", dark ? "text-ivory/60" : "text-muted")}>
        Kein Spam. Jederzeit abbestellbar. Hinweise zum Datenschutz findest du in der{" "}
        <Link href="/datenschutz" className="underline underline-offset-4 hover:text-ink">
          Datenschutzerklärung
        </Link>
        .
      </p>
    </form>
  );
}

const topics = [
  { value: "mutter-kind", label: "Mutter-Kind-Fortbildungen" },
  { value: "praxis", label: "Praxis-Schiene: Beratung anfragen" },
  { value: "kooperation", label: "Kooperation" },
  { value: "sonstiges", label: "Sonstiges" },
];

export function ContactForm() {
  const params = useSearchParams();
  const initialTopic = topics.some((t) => t.value === params.get("thema")) ? params.get("thema")! : "mutter-kind";
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <Notice>
        <strong className="font-semibold">Danke für deine Nachricht.</strong> Wir melden uns so bald wie möglich.
        <span className="mt-1 block font-mono text-xs text-muted">[PLATZHALTER: Formular noch nicht angebunden – es wurden keine Daten übertragen.]</span>
      </Notice>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name">
          <input id="name" name="name" required autoComplete="name" className={inputCls} />
        </Field>
        <Field label="E-Mail-Adresse" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
        </Field>
      </div>
      <Field label="Praxis (optional)" htmlFor="praxis">
        <input id="praxis" name="praxis" autoComplete="organization" className={inputCls} />
      </Field>
      <Field label="Worum geht es?" htmlFor="thema">
        <select id="thema" name="thema" defaultValue={initialTopic} className={cn(inputCls, "appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10")} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235c6068' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")" }}>
          {topics.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Nachricht" htmlFor="nachricht">
        <textarea id="nachricht" name="nachricht" required rows={6} className={cn(inputCls, "h-auto py-3 leading-relaxed")} />
      </Field>
      <p className="text-sm leading-relaxed text-muted">
        Bitte sende uns keine Patientendaten. Informationen zur Verarbeitung deiner Angaben findest du in der{" "}
        <Link href="/datenschutz" className="text-ink underline underline-offset-4">
          Datenschutzerklärung
        </Link>
        .
      </p>
      <div>
        <button type="submit" className={buttonClasses("ink", "lg")}>
          Nachricht senden
        </button>
      </div>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
