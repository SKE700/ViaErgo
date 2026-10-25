import { Check, FileText, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

/** Organische Formen: zwei Formen, die sich annähern – die Dyade. */
function Blobs({ withIndigo = true }: { withIndigo?: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 400 320" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="22" />
        </filter>
      </defs>
      <g filter="url(#soft)">
        <path className="blob-a fill-mk-500" fillOpacity="0.42" d="M118 70c46-30 112-14 134 34 22 47-6 108-60 122-55 14-110-14-122-60-9-36 14-70 48-96z" />
        <path className="blob-b fill-mk-200" d="M232 132c40-22 98-6 112 38 15 44-18 92-66 98-46 6-84-22-86-62-2-30 14-58 40-74z" />
        {withIndigo && (
          <path className="blob-c fill-px-500" fillOpacity="0.2" d="M286 30c30-8 62 10 66 40 4 28-18 52-46 54-30 2-52-20-50-46 1-22 11-42 30-48z" />
        )}
      </g>
      <g fill="none" strokeWidth="1.25" className="stroke-mk-700/30">
        <circle cx="178" cy="166" r="62" />
        <circle cx="232" cy="166" r="44" />
      </g>
    </svg>
  );
}

export function HeroVisual() {
  return (
    <div aria-hidden className="relative mx-auto aspect-[5/4] w-full max-w-xl">
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-mk-100 via-surface to-px-100/70">
        <Blobs />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(34_37_42/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(34_37_42/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_left,black,transparent_60%)]" />
      </div>

      {/* Mutter-Kind-Karte */}
      <div className="float-soft absolute -top-3 right-4 w-52 rounded-2xl border border-line bg-white/90 p-4 shadow-[0_18px_40px_-20px_rgb(34_37_42/0.35)] backdrop-blur sm:right-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-mk-600">Mutter-Kind</p>
        <p className="mt-1.5 font-display text-[15px] font-semibold leading-snug">Die Dyade im Blick</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Bindung", "Regulation", "Alltag"].map((t) => (
            <span key={t} className="rounded-full bg-mk-100 px-2 py-0.5 text-[11px] font-medium text-mk-700">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Praxis-Karte */}
      <div className="absolute -bottom-5 left-3 w-60 rounded-2xl border border-line bg-white/95 p-4 shadow-[0_18px_40px_-20px_rgb(34_37_42/0.35)] sm:left-6 sm:w-64">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-px-600">
            <FileText className="size-3.5" /> Arztbericht
          </p>
          <span className="rounded-full bg-px-100 px-2 py-0.5 text-[10px] font-medium text-px-700">Vorlage</span>
        </div>
        <ul className="mt-3 space-y-2">
          {["Anlass & Verlauf", "Befund strukturiert", "Empfehlung"].map((t) => (
            <li key={t} className="flex items-center gap-2 text-[13px] text-ink">
              <span className="inline-flex size-4 items-center justify-center rounded-full bg-px-600 text-white">
                <Check className="size-2.5" strokeWidth={3} />
              </span>
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-px-100">
          <div className="h-full w-2/3 rounded-full bg-px-500" />
        </div>
      </div>
    </div>
  );
}

export function MutterKindVisual({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-mk-100 via-mk-50 to-surface", className)}>
      <Blobs withIndigo={false} />
    </div>
  );
}

export function PraxisVisual({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-px-100 via-px-50 to-surface p-5 sm:p-8", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(59_58_153/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(59_58_153/0.07)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="relative h-full rounded-2xl border border-line bg-white/95 shadow-[0_24px_50px_-28px_rgb(45_44_122/0.45)]">
        <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="ml-3 text-[11px] text-muted">Praxis-Cockpit</span>
        </div>
        <div className="grid grid-cols-5 gap-3 p-4">
          <div className="col-span-3 space-y-2.5">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-px-600">
              <Sparkles className="size-3.5" /> Entwurf mit KI
            </p>
            <div className="h-2 w-11/12 rounded-full bg-ink/10" />
            <div className="h-2 w-10/12 rounded-full bg-ink/10" />
            <div className="h-2 w-8/12 rounded-full bg-ink/10" />
            <div className="h-2 w-9/12 rounded-full bg-ink/10" />
            <p className="pt-1 text-[10px] text-muted">Nur anonymisierte Inhalte</p>
          </div>
          <div className="col-span-2 space-y-2">
            {["Anfragen", "Termine", "Berichte"].map((t, i) => (
              <div key={t} className="rounded-lg border border-line px-2.5 py-2">
                <p className="text-[10px] text-muted">{t}</p>
                <div className="mt-1.5 h-1.5 rounded-full bg-px-100">
                  <div className="h-full rounded-full bg-px-500" style={{ width: `${[72, 48, 86][i]}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
