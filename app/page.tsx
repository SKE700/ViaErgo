import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarRange,
  FileText,
  HeartHandshake,
  LayoutTemplate,
  Megaphone,
  MonitorPlay,
  Radio,
  Sparkles,
  Stethoscope,
  Workflow,
} from "lucide-react";
import { featuredCourses } from "@/content/courses";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Badge, Container, Eyebrow, PhotoPlaceholder, Section, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { HeroVisual } from "@/components/sections/Visuals";
import { CourseCard } from "@/components/sections/CourseCard";
import { FinalCta, TestimonialPlaceholders } from "@/components/sections/Blocks";
import { NewsletterForm } from "@/components/sections/Forms";

const reasons = [
  { icon: Stethoscope, title: "Praxisnah statt rein theoretisch", text: "Jede Einheit endet mit dem, was du am nächsten Therapietag anders machen kannst." },
  { icon: HeartHandshake, title: "Aus erfahrener Praxis für den Praxisalltag", text: "Entwickelt von einem Ergotherapeuten mit 15 Jahren Praxisleitung – nicht am Schreibtisch." },
  { icon: LayoutTemplate, title: "Klare Struktur, sofort umsetzbare Werkzeuge", text: "Leitfäden, Checklisten und Vorlagen, die du direkt in deinen Alltag übernehmen kannst." },
  { icon: CalendarRange, title: "Flexibel: online, live und als Aufzeichnung", text: "Lerne so, wie es zu deinem Praxisalltag und deinem Kalender passt." },
  { icon: Sparkles, title: "Zukunftssicher durch KI und digitale Prozesse", text: "Moderne Werkzeuge verständlich erklärt – mit klaren Regeln für den Datenschutz." },
];

const praxisTeaser = [
  { icon: Bot, title: "KI für Therapiepraxen", text: "Prompt-Vorlagen, Texte und Organisation – sicher und ohne Patientendaten in ungeprüften Tools.", href: "/praxis#ki" },
  { icon: FileText, title: "Arztberichte & Dokumentation", text: "Strukturierte Berichte, klare Formulierungen und Vorlagen für die Kommunikation mit Zuweisern.", href: "/praxis#berichte" },
  { icon: Megaphone, title: "Marketing & Sichtbarkeit", text: "Google-Profil, Website und Kooperationen – damit die richtigen Patient:innen dich finden.", href: "/praxis#marketing" },
];

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  url: site.url,
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* 1 · Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 h-[640px] bg-[radial-gradient(60%_60%_at_20%_20%,var(--color-mk-100),transparent_70%),radial-gradient(50%_50%_at_90%_10%,var(--color-px-100),transparent_70%)] opacity-80" />
        <Container className="relative grid items-center gap-16 pb-20 pt-12 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:pb-28">
          <Reveal>
            <Badge>
              <span className="size-1.5 rounded-full bg-mk-500" aria-hidden />
              Fortbildungsplattform für Therapieprofis
            </Badge>
            <h1 className="mt-6 text-[clamp(2.6rem,1.5rem+4.6vw,4.9rem)] font-semibold leading-[1.02]">
              Fortbildung, die im Praxisalltag wirklich weiterbringt.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Praxisnahe Fortbildungen für Ergotherapeut:innen – mit spezialisiertem Fokus auf Mutter-Kind-Arbeit sowie KI,
              Organisation und Marketing für die Therapiepraxis.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/mutter-kind" variant="mk" size="lg" arrow>
                Mutter-Kind-Kurse entdecken
              </Button>
              <Button href="/praxis" variant="outline" size="lg">
                Praxis-Schiene entdecken
              </Button>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5"><Radio aria-hidden className="size-4" /> Live</span>
              <span className="inline-flex items-center gap-1.5"><MonitorPlay aria-hidden className="size-4" /> Online</span>
              <span className="inline-flex items-center gap-1.5"><CalendarRange aria-hidden className="size-4" /> Aufzeichnung</span>
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <HeroVisual />
          </Reveal>
        </Container>
      </section>

      {/* 2 · Vertrauensleiste */}
      <section aria-label="Unser Versprechen" className="border-y border-line bg-surface/50">
        <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            <p className="font-display text-[17px] font-semibold">Von Ergotherapeut:innen. Für Ergotherapeut:innen.</p>
            <p className="text-[17px] text-muted">Fachlich fundiert. Praxisnah. Zukunftssicher.</p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Formate und Materialien">
            {["Live-Workshops", "Online-Kurse", "Fallbeispiele", "Vorlagen"].map((b) => (
              <li key={b}>
                <Badge>{b}</Badge>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3 · Zwei Wege */}
      <Section labelledBy="wege">
        <Container>
          <SectionHeader id="wege" eyebrow="Zwei Wege, ein Campus" title="Fachliche Tiefe und ein moderner Praxisalltag." lead="ViaErgo Campus verbindet spezialisierte Fortbildungen in der Mutter-Kind-Arbeit mit praktischer Unterstützung für die Organisation deiner Praxis." />
          <div className="mt-14 grid gap-5 lg:grid-cols-[1.12fr_1fr]">
            <Reveal>
              <PathCard
                tone="mk"
                eyebrow="Mutter-Kind-Fortbildungen"
                title="Mutter-Kind-Arbeit verstehen. Familien wirksam begleiten."
                text="Bindung, Regulation, Eltern-Kind-Interaktion und postpartale Belastung praxisnah verstehen und begleiten."
                points={["Bindung & Bonding", "Regulationsstörungen", "Schlaf, Schreien, Unruhe", "Postpartale Belastung"]}
                href="/mutter-kind"
                cta="Zu den Mutter-Kind-Kursen"
                large
              />
            </Reveal>
            <Reveal delay={0.08}>
              <PathCard
                tone="px"
                eyebrow="Praxis-Schiene"
                title="Mehr Zeit für Therapie. Weniger Zeit für Verwaltung."
                text="KI sinnvoll einsetzen, Arztberichte effizienter erstellen, Abläufe optimieren und die Praxis sichtbarer machen."
                points={["KI im Praxisalltag", "Arztberichte", "Praxisoptimierung", "Marketing"]}
                href="/praxis"
                cta="Zur Praxis-Schiene"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 4 · Warum ViaErgo Campus */}
      <Section labelledBy="warum" className="bg-surface/50">
        <Container className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader id="warum" eyebrow="Warum ViaErgo Campus" title="Gemacht für Menschen, die jeden Tag in der Therapie stehen." lead="Keine Theorie um der Theorie willen. Sondern Wissen, das in deiner nächsten Therapieeinheit trägt." />
          </div>
          <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {reasons.map((r, i) => (
              <li key={r.title} className="bg-ivory">
                <Reveal delay={i * 0.04} className="flex gap-5 p-6 sm:p-7">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-line">
                    <r.icon aria-hidden className="size-5 text-ink" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <p className="mt-1.5 text-[16px] leading-relaxed text-muted">{r.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* 5 · Kurs-Highlights */}
      <Section labelledBy="kurse">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader id="kurse" eyebrow="Kurs-Highlights" tone="mk" title="Starte dort, wo deine Arbeit beginnt." lead="Ausgewählte Fortbildungen aus der Mutter-Kind-Reihe." />
            <Link href="/mutter-kind#kurse" className="inline-flex shrink-0 items-center gap-1.5 text-[15px] font-medium text-mk-700 hover:underline hover:underline-offset-4">
              Alle Kurse ansehen <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.06}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6 · Über Daniel */}
      <Section labelledBy="daniel" className="pt-0 sm:pt-0">
        <Container>
          <div className="grid items-center gap-10 rounded-[2rem] border border-line bg-gradient-to-br from-mk-50 to-surface p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-14">
            <Reveal>
              <PhotoPlaceholder label="FOTO DANIEL" className="aspect-[4/5] w-full max-w-sm" />
            </Reveal>
            <Reveal delay={0.08}>
              <Eyebrow tone="mk">Dein Referent</Eyebrow>
              <h2 id="daniel" className="mt-4 text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.1]">
                Daniel
              </h2>
              <p className="mt-2 text-lg text-muted">Ergotherapeut · 15 Jahre Praxisleitung · Spezialist für Mutter-Kind-Therapie</p>
              <blockquote className="mt-8 border-l-2 border-mk-500 pl-6 font-display text-[clamp(1.25rem,1rem+1vw,1.6rem)] font-medium leading-snug tracking-[-0.015em]">
                „Ich möchte Ergotherapeut:innen Sicherheit geben, Familien früher und besser zu begleiten.“
              </blockquote>
              <div className="mt-10">
                <Button href="/ueber-daniel" variant="outline" arrow>
                  Mehr über Daniel
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* 7 · Praxis-Schiene Teaser */}
      <Section labelledBy="praxis-teaser" className="bg-px-50/70">
        <Container>
          <SectionHeader id="praxis-teaser" tone="px" eyebrow="Praxis-Schiene" title="Mehr Zeit für Therapie. Weniger Zeit für Verwaltung." lead="Für Ergotherapeut:innen, Physiotherapeut:innen, Logopäd:innen und Praxisleitungen." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {praxisTeaser.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded-3xl border border-px-200/70 bg-white/80 p-7 transition-[border-color,box-shadow,transform] duration-300 ease-calm hover:-translate-y-0.5 hover:border-px-200 hover:bg-white hover:shadow-[0_24px_48px_-28px_rgb(45_44_122/0.35)]"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-px-100 text-px-700">
                    <p.icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{p.text}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-px-700">
                    Mehr erfahren <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Button href="/praxis" variant="px" size="lg" arrow>
              Praxis-Schiene entdecken
            </Button>
          </div>
        </Container>
      </Section>

      {/* 8 · Testimonials */}
      <Section labelledBy="stimmen">
        <Container>
          <SectionHeader id="stimmen" eyebrow="Stimmen aus der Praxis" title="Was Teilnehmende sagen." lead="Hier erscheinen echte Rückmeldungen, sobald die ersten Kurse gelaufen sind." />
          <div className="mt-12">
            <TestimonialPlaceholders />
          </div>
        </Container>
      </Section>

      {/* 9 · Newsletter */}
      <Section labelledBy="newsletter" className="pt-0 sm:pt-0">
        <Container>
          <div className="grid gap-10 rounded-[2rem] border border-line bg-white/70 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
            <div>
              <Eyebrow>Newsletter</Eyebrow>
              <h2 id="newsletter" className="mt-4 text-[clamp(1.875rem,1.4rem+2vw,2.5rem)] font-semibold leading-[1.1]">
                Bleib auf dem Laufenden.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                Neue Kurstermine, praxisnahe Impulse aus der Mutter-Kind-Arbeit und konkrete Tipps für KI, Organisation und Marketing.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Container>
      </Section>

      {/* 10 · Final CTA */}
      <FinalCta
        title="Bereit für den nächsten Schritt?"
        lead="Finde die Fortbildung, die zu deiner Arbeit passt – fachlich vertiefend oder ganz praktisch für deinen Praxisalltag."
        primary={{ href: "/mutter-kind", label: "Mutter-Kind-Kurse entdecken" }}
        secondary={{ href: "/praxis", label: "Praxis-Schiene entdecken" }}
      />
    </>
  );
}

function PathCard({
  tone,
  eyebrow,
  title,
  text,
  points,
  href,
  cta,
  large,
}: {
  tone: "mk" | "px";
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
  href: string;
  cta: string;
  large?: boolean;
}) {
  const mk = tone === "mk";
  return (
    <article
      className={
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 transition-[box-shadow,transform] duration-300 ease-calm hover:-translate-y-0.5 sm:p-10 " +
        (mk
          ? "border-mk-200 bg-gradient-to-br from-mk-100 via-mk-50 to-ivory hover:shadow-[0_32px_64px_-36px_rgb(47_87_77/0.45)]"
          : "border-px-200/80 bg-gradient-to-br from-px-100 via-px-50 to-ivory hover:shadow-[0_32px_64px_-36px_rgb(45_44_122/0.45)]")
      }
    >
      <div aria-hidden className={"absolute -right-16 -top-16 size-56 rounded-full blur-2xl " + (mk ? "bg-mk-500/20" : "bg-px-500/15")} />
      <div className="relative flex items-center gap-2">
        <span className={"inline-flex size-9 items-center justify-center rounded-xl " + (mk ? "bg-mk-600 text-white" : "bg-px-600 text-white")}>
          {mk ? <HeartHandshake aria-hidden className="size-4.5" /> : <Workflow aria-hidden className="size-4.5" />}
        </span>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      </div>
      <h3 className={"relative mt-8 font-semibold leading-[1.12] " + (large ? "text-[clamp(1.75rem,1.3rem+1.6vw,2.4rem)]" : "text-[clamp(1.5rem,1.2rem+1.2vw,2rem)]")}>
        {title}
      </h3>
      <p className="relative mt-4 max-w-lg text-[17px] leading-relaxed text-muted">{text}</p>
      <ul className="relative mt-8 flex flex-wrap gap-2">
        {points.map((p) => (
          <li key={p} className={"rounded-full px-3 py-1 text-[13px] font-medium " + (mk ? "bg-white/80 text-mk-700" : "bg-white/80 text-px-700")}>
            {p}
          </li>
        ))}
      </ul>
      <div className="relative mt-auto pt-10">
        <Button href={href} variant={tone} arrow>
          {cta}
        </Button>
      </div>
      {!mk && <BarChart3 aria-hidden className="absolute bottom-8 right-8 hidden size-16 text-px-200 sm:block" strokeWidth={1} />}
    </article>
  );
}
