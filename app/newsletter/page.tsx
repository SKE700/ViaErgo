import { CalendarDays, HeartHandshake, Sparkles } from "lucide-react";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/Blocks";
import { NewsletterForm } from "@/components/sections/Forms";

export const metadata = pageMeta({
  title: "Newsletter",
  description:
    "Neue Kurstermine, praxisnahe Impulse aus der Mutter-Kind-Arbeit und konkrete Tipps für KI, Organisation und Marketing – kostenlos per E-Mail.",
  path: "/newsletter",
});

const items = [
  { icon: CalendarDays, title: "Neue Kurstermine", text: "Erfahre als Erste:r, wann neue Live-Kurse starten." },
  { icon: HeartHandshake, title: "Impulse aus der Mutter-Kind-Arbeit", text: "Fachliche Gedanken und Praxisbeispiele für deinen Therapiealltag." },
  { icon: Sparkles, title: "Tipps für die Praxis", text: "Konkrete Ideen zu KI, Organisation und Marketing – kurz und umsetzbar." },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title="Bleib auf dem Laufenden."
        lead="Neue Kurstermine, praxisnahe Impulse aus der Mutter-Kind-Arbeit und konkrete Tipps für KI, Organisation und Marketing."
      />
      <Container className="pb-24">
        <div className="rounded-[2rem] border border-line bg-white/70 p-6 sm:p-10">
          <NewsletterForm className="max-w-xl" />
          <ul className="mt-12 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
            {items.map((i) => (
              <li key={i.title}>
                <i.icon aria-hidden className="size-5 text-mk-600" />
                <p className="mt-4 font-semibold">{i.title}</p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{i.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}
