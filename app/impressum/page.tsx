import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/primitives";

export const metadata = {
  ...pageMeta({ title: "Impressum", description: "Impressum von ViaErgo Campus.", path: "/impressum" }),
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <Container className="max-w-3xl pb-24 pt-14 sm:pt-20">
      <h1 className="text-[clamp(2.2rem,1.6rem+2.6vw,3.4rem)] font-semibold leading-[1.05]">Impressum</h1>
      <p className="mt-4 rounded-xl border border-dashed border-ink/25 bg-white/70 p-4 font-mono text-sm text-muted">
        Dummy-Daten – alle Angaben sind fiktiv und müssen vor dem Livegang durch die echten Anbieterdaten ersetzt und rechtlich geprüft werden.
      </p>
      <div className="legal">
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          ViaErgo Campus
          <br />
          Inhaber: Max Mustermann
          <br />
          Musterstraße 1
          <br />
          12345 Musterstadt
        </p>

        <h2>Vertreten durch</h2>
        <p>Max Mustermann</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 01234 567890
          <br />
          E-Mail: kontakt@example.com
        </p>

        <h2>Registereintrag</h2>
        <p>Kein Eintrag im Handelsregister.</p>

        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE000000000</p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>Berufsbezeichnung: Ergotherapeut (verliehen in der Bundesrepublik Deutschland). Es gilt das Ergotherapeutengesetz (ErgThG).</p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>Max Mustermann, Musterstraße 1, 12345 Musterstadt</p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    </Container>
  );
}
