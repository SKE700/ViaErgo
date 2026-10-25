import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Ph, PhotoPlaceholder, Section, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCta } from "@/components/sections/Blocks";

export const metadata = pageMeta({
  title: "Über Daniel – Ergotherapeut und Spezialist für Mutter-Kind-Therapie",
  description:
    "Daniel ist Ergotherapeut mit 15 Jahren Praxisleitung und Spezialist für Mutter-Kind-Therapie. Er gibt Ergotherapeut:innen Sicherheit in der Begleitung von Familien.",
  path: "/ueber-daniel",
});

const values = [
  { title: "Praxisnah", text: "Alles, was ich unterrichte, habe ich selbst in der Therapie erprobt." },
  { title: "Wertschätzend", text: "Gegenüber Familien – und gegenüber Kolleg:innen, die etwas Neues lernen wollen." },
  { title: "Klar in den Grenzen", text: "Ergotherapie kann viel. Gute Begleitung heißt auch, rechtzeitig weiterzuverweisen." },
];

export default function UeberDanielPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-16 h-[520px] bg-gradient-to-b from-mk-100/80 to-transparent" />
        <Container className="relative grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:pb-28">
          <Reveal>
            <PhotoPlaceholder label="FOTO DANIEL" className="aspect-[4/5] w-full max-w-md" />
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow tone="mk">Über Daniel</Eyebrow>
            <h1 className="mt-4 text-[clamp(2.4rem,1.6rem+3.4vw,4rem)] font-semibold leading-[1.04]">
              Aus der Praxis. Für die Praxis.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              Daniel ist Ergotherapeut und leitet seit 15 Jahren seine eigene Praxis. Sein Schwerpunkt: die Begleitung von Müttern,
              Säuglingen, Kleinkindern und ihren Familien.
            </p>
            <blockquote className="mt-10 border-l-2 border-mk-500 pl-6 font-display text-[clamp(1.25rem,1rem+1vw,1.6rem)] font-medium leading-snug tracking-[-0.015em]">
              „Ich möchte Ergotherapeut:innen Sicherheit geben, Familien früher und besser zu begleiten.“
            </blockquote>
          </Reveal>
        </Container>
      </section>

      <Section labelledBy="weg" className="border-t border-line">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeader id="weg" tone="mk" eyebrow="Werdegang" title="Warum Mutter-Kind-Arbeit?" />
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              In vielen Jahren Praxisalltag hat Daniel erlebt, wie oft Kinder in die Therapie kommen, deren Schwierigkeiten eng mit
              der Situation in der Familie verbunden sind – und wie viel sich verändern kann, wenn Mutter und Kind gemeinsam in den
              Blick genommen werden.
            </p>
            <p>
              <Ph>[WERDEGANG – persönliche Geschichte, Stationen, Schwerpunkte]</Ph>
            </p>
            <p>
              <Ph>[QUALIFIKATIONEN UND WEITERBILDUNGEN]</Ph>
            </p>
          </div>
        </Container>
      </Section>

      <Section labelledBy="haltung" className="bg-mk-50/70">
        <Container>
          <SectionHeader id="haltung" tone="mk" eyebrow="Haltung" title="Wofür Daniel als Referent steht." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-mk-200/70 bg-white/80 p-7">
                  <h3 className="text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button href="/mutter-kind#kurse" variant="mk" size="lg" arrow>
              Kurse von Daniel ansehen
            </Button>
            <Button href="/kontakt" variant="outline" size="lg">
              Kontakt aufnehmen
            </Button>
          </div>
        </Container>
      </Section>

      <div className="pt-20 sm:pt-28">
        <FinalCta
          title="Bereit für den nächsten Schritt?"
          primary={{ href: "/mutter-kind", label: "Mutter-Kind-Kurse entdecken" }}
          secondary={{ href: "/praxis", label: "Praxis-Schiene entdecken" }}
        />
      </div>
    </>
  );
}
