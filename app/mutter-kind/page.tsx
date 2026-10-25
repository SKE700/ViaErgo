import { Baby, Check, Eye, HeartHandshake, Home, Moon, Sprout, Users } from "lucide-react";
import { courses } from "@/content/courses";
import { mutterKindFaq } from "@/content/faq";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, PhotoPlaceholder, Section, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { MutterKindVisual } from "@/components/sections/Visuals";
import { CourseCard } from "@/components/sections/CourseCard";
import { Faq, FinalCta, PageHero } from "@/components/sections/Blocks";

export const metadata = pageMeta({
  title: "Mutter-Kind-Fortbildungen für Ergotherapeut:innen",
  description:
    "Praxisnahe Fortbildungen zu Bindung, Regulationsstörungen, Schlaf- und Schreiproblemen, Eltern-Kind-Interaktion und postpartaler Belastung – für Ergotherapeut:innen.",
  path: "/mutter-kind",
});

const situations = ["Überforderte Mütter", "Unruhige Säuglinge", "Schlaf- und Schreiprobleme", "Bonding-Schwierigkeiten"];

const pillars = [
  { icon: Eye, title: "Verstehen", text: "Bindung, Regulation und frühe Entwicklung fachlich sicher einordnen." },
  { icon: Users, title: "Beobachten", text: "Mutter und Kind gemeinsam sehen – Interaktion, Signale, Ressourcen." },
  { icon: HeartHandshake, title: "Begleiten", text: "Alltagsnahe Interventionen und Elterngespräche, die wirklich ankommen." },
];

const topics = [
  { icon: HeartHandshake, title: "Bindung und Bonding", text: "Wie Verbundenheit entsteht – und wie du sie behutsam stärkst, wenn der Start schwer war." },
  { icon: Sprout, title: "Regulationsstörungen", text: "Frühkindliche Regulation verstehen und Co-Regulation zwischen Mutter und Kind fördern." },
  { icon: Moon, title: "Schlaf, Schreien und Unruhe", text: "Typische Problemfelder strukturiert erfassen und alltagstaugliche Strategien entwickeln." },
  { icon: Users, title: "Eltern-Kind-Interaktion", text: "Interaktion beobachten, Feinfühligkeit stärken und ressourcenorientiert rückmelden." },
  { icon: Baby, title: "Postpartale Belastung", text: "Warnzeichen erkennen, sensibel ansprechen und klar im Netzwerk weiterverweisen." },
  { icon: Home, title: "Elternberatung und Alltagsgestaltung", text: "Routinen, Rituale und Umgebung so gestalten, dass Familien entlastet werden." },
];

const trust = [
  "Ergotherapeut und Praxisleiter mit 15 Jahren Erfahrung",
  "Spezialisiert auf die Arbeit mit Mutter und Kind",
  "Inhalte aus dem echten Praxisalltag – mit Fallbeispielen",
  "[WEITERE QUALIFIKATIONEN]",
];

export default function MutterKindPage() {
  return (
    <>
      <PageHero
        tone="mk"
        eyebrow="Mutter-Kind-Fortbildungen"
        title="Mutter-Kind-Arbeit verstehen. Familien wirksam begleiten."
        lead="Fundierte, praxisnahe Fortbildungen für Ergotherapeut:innen, die Mütter, Säuglinge, Kleinkinder und ihre Familien sicher und einfühlsam begleiten möchten."
        visual={<MutterKindVisual />}
      >
        <Button href="#kurse" variant="mk" size="lg" arrow>
          Kurse ansehen
        </Button>
        <Button href="/ueber-daniel" variant="outline" size="lg">
          Mehr über Daniel
        </Button>
      </PageHero>

      {/* Problem */}
      <Section labelledBy="problem" className="border-t border-line bg-surface/50">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Eyebrow tone="mk">Die Ausgangslage</Eyebrow>
            <h2 id="problem" className="mt-4 text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.1]">
              Du spürst, dass es um mehr geht als um das Kind.
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-lg leading-relaxed text-muted">
              Viele Therapeut:innen begegnen überforderten Müttern, unruhigen Säuglingen, Schlaf- und Schreiproblemen oder
              Bonding-Schwierigkeiten – ohne ein klares, praktisches Handlungskonzept. Das Bauchgefühl ist da, die Struktur fehlt.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {situations.map((s) => (
                <li key={s} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* Lösung */}
      <Section labelledBy="loesung">
        <Container>
          <SectionHeader
            id="loesung"
            tone="mk"
            eyebrow="Der Ansatz"
            title="Mutter und Kind als Dyade begleiten."
            lead="Unsere Fortbildungen geben dir ein klares Konzept für die gemeinsame Begleitung von Mutter und Kind – fachlich fundiert und direkt im Praxisalltag anwendbar."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-line bg-white/70 p-7">
                  <span className="text-sm font-medium text-mk-600">0{i + 1}</span>
                  <p.icon aria-hidden className="mt-6 size-6 text-mk-600" />
                  <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Themen */}
      <Section labelledBy="themen" className="bg-mk-50/70">
        <Container>
          <SectionHeader id="themen" tone="mk" eyebrow="Themenbereiche" title="Was dich in den Fortbildungen erwartet." />
          <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-mk-200/70 bg-mk-200/70 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <li key={t.title} className="bg-ivory p-7 sm:p-8">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-mk-100 text-mk-700">
                  <t.icon aria-hidden className="size-5" />
                </span>
                <h3 className="mt-6 text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{t.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Kurse */}
      <Section id="kurse" labelledBy="kurse-title">
        <Container>
          <SectionHeader
            id="kurse-title"
            tone="mk"
            eyebrow="Kursübersicht"
            title="Alle Mutter-Kind-Fortbildungen."
            lead="Starte mit dem Grundlagenkurs oder vertiefe gezielt ein Thema, das dir im Praxisalltag begegnet."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.06}>
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Daniel */}
      <Section labelledBy="referent" className="pt-0 sm:pt-0">
        <Container>
          <div className="grid items-center gap-10 rounded-[2rem] border border-line bg-gradient-to-br from-mk-50 to-surface p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:p-14">
            <PhotoPlaceholder label="FOTO DANIEL" className="aspect-[4/5] w-full max-w-sm" />
            <div>
              <Eyebrow tone="mk">Dein Referent</Eyebrow>
              <h2 id="referent" className="mt-4 text-[clamp(1.875rem,1.4rem+2vw,2.75rem)] font-semibold leading-[1.1]">
                Lernen von jemandem, der täglich in der Praxis steht.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Daniel ist Ergotherapeut und leitet seit 15 Jahren seine eigene Praxis. Sein Schwerpunkt ist die Begleitung von
                Müttern und Kindern – und genau diese Erfahrung gibt er in seinen Fortbildungen weiter.
              </p>
              <ul className="mt-8 grid gap-3">
                {trust.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[16px]">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-mk-600 text-white">
                      <Check aria-hidden className="size-3" strokeWidth={3} />
                    </span>
                    {t.startsWith("[") ? <span className="font-mono text-sm text-muted">{t}</span> : t}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button href="/ueber-daniel" variant="outline" arrow>
                  Mehr über Daniel
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section labelledBy="faq" className="pt-0 sm:pt-0">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader id="faq" tone="mk" eyebrow="Häufige Fragen" title="Gut zu wissen." />
          <Faq items={mutterKindFaq} />
        </Container>
      </Section>

      <FinalCta
        title="Familien früher und sicherer begleiten."
        lead="Finde die Fortbildung, die zu deiner Arbeit mit Müttern und Kindern passt."
        primary={{ href: "/mutter-kind#kurse", label: "Jetzt Mutter-Kind-Kurs entdecken" }}
        secondary={{ href: "/kontakt?thema=mutter-kind", label: "Frage stellen" }}
      />
    </>
  );
}
