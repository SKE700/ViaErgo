import { ChevronDown, Quote } from "lucide-react";
import type { FaqItem } from "@/content/faq";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container, Ph, T, type Tone } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  tone = "neutral",
  children,
  visual,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: Tone;
  children?: React.ReactNode;
  visual?: React.ReactNode;
}) {
  const glow = tone === "mk" ? "from-mk-100/80" : tone === "px" ? "from-px-100/80" : "from-surface";
  const eyebrowCls = tone === "mk" ? "text-mk-600" : tone === "px" ? "text-px-600" : "text-muted";
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className={cn("pointer-events-none absolute inset-x-0 -top-16 h-[520px] bg-gradient-to-b to-transparent", glow)} />
      <Container className={cn("relative pb-16 pt-14 sm:pb-24 sm:pt-20", !!visual && "grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16")}>
        <Reveal>
          {eyebrow && <p className={cn("text-xs font-semibold uppercase tracking-[0.14em]", eyebrowCls)}>{eyebrow}</p>}
          <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,1.6rem+3.6vw,4.25rem)] font-semibold leading-[1.04]">{title}</h1>
          {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{lead}</p>}
          {children && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{children}</div>}
        </Reveal>
        {visual && <Reveal delay={0.1}>{visual}</Reveal>}
      </Container>
    </section>
  );
}

export function Faq({ items, tone = "mk" }: { items: FaqItem[]; tone?: Tone }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-1 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-md py-5 text-left text-[17px] font-medium">
            {item.q}
            <span
              className={cn(
                "inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-calm group-open:rotate-180",
                tone === "px" ? "bg-px-100 text-px-700" : "bg-mk-100 text-mk-700",
              )}
            >
              <ChevronDown aria-hidden className="size-4" />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-12 text-[16px] leading-relaxed text-muted">
            <T>{item.a}</T>
          </p>
        </details>
      ))}
    </div>
  );
}

export function TestimonialPlaceholders() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {[1, 2, 3].map((n, i) => (
        <Reveal key={n} delay={i * 0.06}>
          <figure className="flex h-full flex-col rounded-3xl border border-dashed border-ink/20 bg-white/50 p-7">
            <Quote aria-hidden className="size-6 text-mk-500" />
            <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-muted">
              <p>
                <Ph>[TESTIMONIAL {n}]</Ph> Hier steht eine echte Rückmeldung einer Teilnehmerin oder eines Teilnehmers – erst nach
                Freigabe einfügen.
              </p>
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <Ph>[NAME]</Ph> <span className="text-muted">·</span> <Ph>[BERUF / ORT]</Ph>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

export function FinalCta({
  title,
  lead,
  primary,
  secondary,
}: {
  title: string;
  lead?: string;
  primary: { href: string; label: string; variant?: "mk" | "px" };
  secondary?: { href: string; label: string };
}) {
  return (
    <section aria-labelledby="final-cta" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink px-6 py-20 text-center sm:py-28">
        <div aria-hidden className="absolute -left-24 -top-24 -z-10 size-96 rounded-full bg-mk-500/35 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 -right-20 -z-10 size-96 rounded-full bg-px-500/30 blur-3xl" />
        <Reveal>
          <h2 id="final-cta" className="mx-auto max-w-2xl text-[clamp(2rem,1.4rem+2.6vw,3.25rem)] font-semibold leading-[1.08] text-ivory">
            {title}
          </h2>
          {lead && <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ivory/70">{lead}</p>}
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={primary.href} variant={primary.variant ?? "mk"} size="lg" arrow>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant="light" size="lg">
                {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
