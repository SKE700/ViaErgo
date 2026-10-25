import { Bot, Check, FileText, Megaphone, ShieldCheck, Workflow } from "lucide-react";
import { praxisOffers } from "@/content/praxis";
import { praxisFaq } from "@/content/faq";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Ph, Section, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { PraxisVisual } from "@/components/sections/Visuals";
import { Faq, FinalCta, PageHero } from "@/components/sections/Blocks";

export const metadata = pageMeta({
  title: "Praxis-Schiene: KI, Organisation und Marketing für Therapiepraxen",
  description:
    "KI, Arztberichte, Praxisoptimierung und Marketing für Therapiepraxen – praxisnah, sicher und sofort umsetzbar. Für Ergo-, Physio- und Logopädie-Praxen.",
  path: "/praxis",
});

const icons = { ki: Bot, berichte: FileText, organisation: Workflow, marketing: Megaphone } as const;

const steps = [
  { title: "Verstehen", text: "Kompakte Impulse zu dem, was wirklich Zeit spart – ohne Fachchinesisch." },
  { title: "Anwenden", text: "Vorlagen, Checklisten und Beispiele, die du direkt in deiner Praxis nutzt." },
  { title: "Verankern", text: "Abläufe im Team etablieren, damit Verbesserungen auch bleiben." },
];

export default function PraxisPage() {
  return (
    <>
      <PageHero
        tone="px"
        eyebrow="Praxis-Schiene · KI, Organisation und Marketing"
        title="Mehr Zeit für Therapie. Weniger Zeit für Verwaltung."
        lead="KI, Arztberichte, Praxisoptimierung und Marketing für Therapiepraxen – praxisnah, sicher und sofort umsetzbar."
        visual={<PraxisVisual />}
      >
        <Button href="#angebote" variant="px" size="lg" arrow>
          Praxis-Schiene entdecken
        </Button>
        <Button href="/kontakt?thema=praxis" variant="outline" size="lg">
          Beratung anfragen
        </Button>
      </PageHero>

      <section aria-label="Zielgruppe" className="border-y border-line bg-surface/50">
        <Container className="flex flex-col gap-3 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[15px] text-muted">Für Ergotherapeut:innen, Physiotherapeut:innen, Logopäd:innen und Praxisleitungen.</p>
          <p className="text-[15px] font-medium">Mit Dan, Praxis-Schiene</p>
        </Container>
      </section>

      {/* Angebote */}
      <Section id="angebote" labelledBy="angebote-title">
        <Container>
          <SectionHeader
            id="angebote-title"
            tone="px"
            eyebrow="Angebote"
            title="Vier Hebel für einen leichteren Praxisalltag."
            lead="Wähle den Bereich, der dich gerade am meisten Zeit kostet – oder arbeite dich Schritt für Schritt durch alle vier."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {praxisOffers.map((o, i) => {
              const Icon = icons[o.id as keyof typeof icons];
              return (
                <Reveal key={o.id} delay={(i % 2) * 0.06}>
                  <article id={o.id} className="flex h-full scroll-mt-24 flex-col rounded-[2rem] border border-line bg-white/75 p-7 transition-[border-color,box-shadow] duration-300 ease-calm hover:border-px-200 hover:shadow-[0_28px_56px_-36px_rgb(45_44_122/0.4)] sm:p-9">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-px-100 text-px-700">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <span className="font-mono text-sm text-px-600">0{i + 1}</span>
                    </div>
                    <h3 className="mt-7 text-2xl font-semibold">{o.title}</h3>
                    <p className="mt-2 text-[17px] leading-relaxed text-muted">{o.lead}</p>
                    <ul className="mt-7 grid gap-2.5">
                      {o.points.map((p) => (
                        <li key={p} className="flex gap-3 text-[16px]">
                          <Check aria-hidden className="mt-1 size-4 shrink-0 text-px-600" strokeWidth={2.5} />
                          {p}
                        </li>
                      ))}
                    </ul>
                    {o.note && (
                      <div className="mt-8 flex gap-3 rounded-2xl border border-px-200 bg-px-50 p-4 text-[15px] leading-relaxed">
                        <ShieldCheck aria-hidden className="mt-0.5 size-5 shrink-0 text-px-600" />
                        <p>
                          <strong className="font-semibold">Datenschutz zuerst.</strong> {o.note}
                        </p>
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Vorgehen */}
      <Section labelledBy="vorgehen" className="bg-px-50/70">
        <Container>
          <SectionHeader id="vorgehen" tone="px" eyebrow="So arbeiten wir" title="Klar, effizient, umsetzbar." />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.06} className="h-full rounded-3xl border border-px-200/70 bg-white/80 p-7">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-px-600 font-mono text-sm text-white">{i + 1}</span>
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-[15px] text-muted">
            Formate und Termine: <Ph>[FORMATE PRAXIS-SCHIENE]</Ph> · <Ph>[TERMIN]</Ph> · Preise: <Ph>[KURSPREIS]</Ph>
          </p>
        </Container>
      </Section>

      {/* Anbieter */}
      <Section labelledBy="dan">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow tone="px">Dein Ansprechpartner</Eyebrow>
            <h2 id="dan" className="mt-4 text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.1]">
              Dan
            </h2>
          </div>
          <div className="text-lg leading-relaxed text-muted">
            <p>
              Die Praxis-Schiene wird von Dan verantwortet. Der Fokus: Lösungen, die im Alltag einer Therapiepraxis tatsächlich
              funktionieren – nicht Technik um der Technik willen.
            </p>
            <p className="mt-4">
              <Ph>[KURZPROFIL DAN]</Ph>
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq-praxis" className="pt-0 sm:pt-0">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader id="faq-praxis" tone="px" eyebrow="Häufige Fragen" title="Gut zu wissen." />
          <Faq items={praxisFaq} tone="px" />
        </Container>
      </Section>

      <FinalCta
        title="Weniger Verwaltung beginnt mit einem Gespräch."
        lead="Erzähl uns, wo es in deiner Praxis hakt – wir zeigen dir, welcher Hebel am meisten bringt."
        primary={{ href: "/kontakt?thema=praxis", label: "Beratung anfragen", variant: "px" }}
        secondary={{ href: "#angebote", label: "Praxis-Schiene entdecken" }}
      />
    </>
  );
}
