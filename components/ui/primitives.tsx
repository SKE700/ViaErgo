import { cn } from "@/lib/cn";

export type Tone = "mk" | "px" | "neutral";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
  labelledBy,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-20 sm:py-28", className)}>
      {children}
    </section>
  );
}

const eyebrowTone: Record<Tone, string> = {
  mk: "text-mk-600",
  px: "text-px-600",
  neutral: "text-muted",
};

export function Eyebrow({ tone = "neutral", children, className }: { tone?: Tone; children: React.ReactNode; className?: string }) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", eyebrowTone[tone], className)}>{children}</p>
  );
}

export function SectionHeader({
  id,
  eyebrow,
  title,
  lead,
  tone = "neutral",
  align = "left",
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: Tone;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 id={id} className={cn("text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.1]", eyebrow && "mt-4")}>
        {title}
      </h2>
      {lead && <p className="mt-5 text-lg leading-relaxed text-muted">{lead}</p>}
    </div>
  );
}

const badgeTone: Record<Tone, string> = {
  mk: "bg-mk-100 text-mk-700",
  px: "bg-px-100 text-px-700",
  neutral: "bg-white/80 text-ink ring-1 ring-line",
};

export function Badge({ tone = "neutral", children, className }: { tone?: Tone; children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium", badgeTone[tone], className)}>
      {children}
    </span>
  );
}

/** Sichtbar markierter Platzhalter für noch fehlende Inhalte. */
export function Ph({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-[5px] border border-dashed border-ink/25 bg-white/70 px-1.5 py-px font-mono text-[0.8em] tracking-tight text-muted">
      {children}
    </span>
  );
}

/** Rendert Text und hebt [PLATZHALTER] automatisch hervor. */
export function T({ children }: { children: string }) {
  const parts = children.split(/(\[[^\]]+\])/g);
  return (
    <>
      {parts.map((part, i) => (/^\[[^\]]+\]$/.test(part) ? <Ph key={i}>{part}</Ph> : part))}
    </>
  );
}

/** Platzhalter für Fotos – bewusst sichtbar, keine Stockfotos. */
export function PhotoPlaceholder({ label, tone = "mk", className }: { label: string; tone?: Tone; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Platzhalter: ${label}`}
      className={cn(
        "relative flex items-end overflow-hidden rounded-[1.75rem] border border-line",
        tone === "mk" ? "bg-gradient-to-br from-mk-100 via-surface to-mk-50" : "bg-gradient-to-br from-px-100 via-surface to-px-50",
        className,
      )}
    >
      <svg aria-hidden viewBox="0 0 200 250" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
        <circle cx="100" cy="95" r="34" className={tone === "mk" ? "fill-mk-200" : "fill-px-200"} />
        <path d="M30 250c4-52 34-86 70-86s66 34 70 86z" className={tone === "mk" ? "fill-mk-200" : "fill-px-200"} />
      </svg>
      <span className="relative m-4 rounded-full bg-white/85 px-3 py-1 font-mono text-xs text-muted backdrop-blur">[{label}]</span>
    </div>
  );
}
