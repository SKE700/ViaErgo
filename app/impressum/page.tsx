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
        Platzhalter – alle Angaben vor Veröffentlichung vervollständigen und rechtlich prüfen lassen.
      </p>
      <div className="legal">
        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          [NAME / FIRMA]
          <br />
          [STRASSE UND HAUSNUMMER]
          <br />
          [PLZ ORT]
        </p>

        <h2>Vertreten durch</h2>
        <p>[VERTRETUNGSBERECHTIGTE PERSON]</p>

        <h2>Kontakt</h2>
        <p>
          Telefon: [TELEFON]
          <br />
          E-Mail: [E-MAIL-ADRESSE]
        </p>

        <h2>Registereintrag</h2>
        <p>[REGISTERGERICHT UND REGISTERNUMMER, falls vorhanden]</p>

        <h2>Umsatzsteuer-ID</h2>
        <p>[UMSATZSTEUER-IDENTIFIKATIONSNUMMER gemäß § 27a UStG, falls vorhanden]</p>

        <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
        <p>[BERUFSBEZEICHNUNG, VERLEIHENDER STAAT, ZUSTÄNDIGE STELLEN, falls zutreffend]</p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>[NAME, ANSCHRIFT]</p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>[ANGABE ZUR TEILNAHME AN STREITBEILEGUNGSVERFAHREN VOR EINER VERBRAUCHERSCHLICHTUNGSSTELLE]</p>
      </div>
    </Container>
  );
}
