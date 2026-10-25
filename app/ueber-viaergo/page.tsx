import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section, SectionHeader } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCta, PageHero } from "@/components/sections/Blocks";

export const metadata = pageMeta({
  title: "Über ViaErgo Campus",
  description:
    "ViaErgo Campus ist eine Fortbildungsplattform für Ergotherapeut:innen und andere Therapieprofis – mit Mutter-Kind-Fortbildungen und einer Praxis-Schiene für KI, Organisation und Marketing.",
  path: "/ueber-viaergo",
});

const principles = [
  { title: "Praxisnah", text: "Inhalte entstehen aus dem Therapiealltag und kehren dorthin zurück – mit Werkzeugen, die du direkt nutzen kannst." },
  { title: "Fachlich fundiert", text: "Wir arbeiten sorgfältig, benennen Grenzen und machen keine Heilversprechen." },
  { title: "Ehrlich", text: "Keine erfundenen Bewertungen, keine leeren Versprechen. Was wir nicht wissen, sagen wir." },
  { title: "Datenschutzbewusst", text: "Gerade beim Thema KI: Patientendaten gehören nicht in ungeprüfte Tools." },
];

export default function UeberViaErgoPage() {
  return (
    <>
      <PageHero
        eyebrow="Über ViaErgo Campus"
        title="Ein Campus für Therapieprofis, die weiterkommen wollen."
        lead="ViaErgo Campus ist eine Fortbildungsplattform für Ergotherapeut:innen und andere Therapieprofis. Unser Anspruch: Fortbildung, die im Praxisalltag wirklich weiterbringt."
      />

      <Section labelledBy="wege" className="border-t border-line">
        <Container>
          <SectionHeader id="wege" eyebrow="Zwei Bereiche" title="Klar getrennt. Mit einem gemeinsamen Ziel." />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[2rem] border border-mk-200 bg-gradient-to-br from-mk-100 to-ivory p-8 sm:p-10">
                <Eyebrow tone="mk">Das Herzstück</Eyebrow>
                <h3 className="mt-4 text-2xl font-semibold">Mutter-Kind-Fortbildungen</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">
                  Fachliche Fortbildungen mit Daniel für die ergotherapeutische Begleitung von Müttern, Säuglingen, Kleinkindern und
                  Familien.
                </p>
                <Button href="/mutter-kind" variant="mk" arrow className="mt-8">
                  Zu den Mutter-Kind-Kursen
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="h-full rounded-[2rem] border border-px-200/80 bg-gradient-to-br from-px-100 to-ivory p-8 sm:p-10">
                <Eyebrow tone="px">Der Mehrwert</Eyebrow>
                <h3 className="mt-4 text-2xl font-semibold">Praxis-Schiene</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-muted">
                  KI, Organisation und Marketing mit Dan – für Ergo-, Physio- und Logopädie-Praxen, die mehr Zeit für Therapie wollen.
                </p>
                <Button href="/praxis" variant="px" arrow className="mt-8">
                  Zur Praxis-Schiene
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section labelledBy="prinzipien" className="bg-surface/50">
        <Container>
          <SectionHeader id="prinzipien" eyebrow="Unsere Prinzipien" title="Woran wir uns messen lassen." />
          <dl className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.title} className="bg-ivory p-7 sm:p-9">
                <dt className="text-xl font-semibold">{p.title}</dt>
                <dd className="mt-2 text-[16px] leading-relaxed text-muted">{p.text}</dd>
              </div>
            ))}
          </dl>
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
