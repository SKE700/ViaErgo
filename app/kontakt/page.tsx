import { Suspense } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { Container, T } from "@/components/ui/primitives";
import { PageHero } from "@/components/sections/Blocks";
import { ContactForm } from "@/components/sections/Forms";

export const metadata = pageMeta({
  title: "Kontakt",
  description: "Fragen zu Mutter-Kind-Fortbildungen, Beratung zur Praxis-Schiene oder Kooperationen – schreib uns.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Schreib uns."
        lead="Fragen zu einem Kurs, eine Beratung für deine Praxis oder eine Idee für eine Kooperation – wir freuen uns auf deine Nachricht."
      />
      <Container className="grid gap-12 pb-24 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
        <div className="rounded-[2rem] border border-line bg-white/70 p-6 sm:p-10">
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
        <aside className="space-y-8 text-[16px]">
          <div>
            <p className="text-sm font-semibold">E-Mail</p>
            <p className="mt-2 flex items-center gap-2 text-muted">
              <Mail aria-hidden className="size-4" /> <T>{site.email}</T>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Antwortzeit</p>
            <p className="mt-2 text-muted">
              <T>[ANTWORTZEIT, z. B. innerhalb von zwei Werktagen]</T>
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Schnell gefunden</p>
            <ul className="mt-2 space-y-1.5">
              <li><Link href="/mutter-kind#kurse" className="text-mk-700 underline-offset-4 hover:underline">Alle Mutter-Kind-Kurse</Link></li>
              <li><Link href="/praxis" className="text-px-700 underline-offset-4 hover:underline">Praxis-Schiene</Link></li>
              <li><Link href="/newsletter" className="text-ink underline-offset-4 hover:underline">Newsletter</Link></li>
            </ul>
          </div>
        </aside>
      </Container>
    </>
  );
}
