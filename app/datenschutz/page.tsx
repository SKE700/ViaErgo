import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/primitives";

export const metadata = {
  ...pageMeta({ title: "Datenschutz", description: "Datenschutzerklärung von ViaErgo Campus.", path: "/datenschutz" }),
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <Container className="max-w-3xl pb-24 pt-14 sm:pt-20">
      <h1 className="text-[clamp(2.2rem,1.6rem+2.6vw,3.4rem)] font-semibold leading-[1.05]">Datenschutzerklärung</h1>
      <p className="mt-4 rounded-xl border border-dashed border-ink/25 bg-white/70 p-4 font-mono text-sm text-muted">
        Grundstruktur als Platzhalter – vor Veröffentlichung an die tatsächlich eingesetzten Dienste anpassen und rechtlich prüfen
        lassen.
      </p>
      <div className="legal">
        <h2>1. Verantwortliche Stelle</h2>
        <p>[NAME / FIRMA, ANSCHRIFT, E-MAIL-ADRESSE]</p>

        <h2>2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, unserer Inhalte und Leistungen
          erforderlich ist oder du eingewilligt hast.
        </p>

        <h2>3. Hosting und Server-Logfiles</h2>
        <p>
          Diese Website wird bei Hostinger International Ltd. (61 Lordou Vironos Street, 6023 Larnaca, Zypern) betrieben. Beim Aufruf werden technisch notwendige Daten (z. B. IP-Adresse,
          Zeitpunkt, aufgerufene Seite, Browsertyp) in Server-Logfiles verarbeitet. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
          Speicherdauer: [SPEICHERDAUER].
        </p>

        <h2>4. Schriftarten</h2>
        <p>
          Die verwendeten Schriftarten sind lokal auf unserem Server eingebunden. Es findet keine Verbindung zu externen
          Font-Servern statt.
        </p>

        <h2>5. Cookies und lokale Speicherung</h2>
        <p>
          Wir verwenden ausschließlich technisch notwendige Speicherungen. Im lokalen Speicher deines Browsers merken wir uns, dass
          du den Cookie-Hinweis gesehen hast. Analyse- oder Marketing-Tools setzen wir derzeit nicht ein.
        </p>
        <p>[BEI EINSATZ VON ANALYSE-TOOLS: CONSENT-LÖSUNG UND ANGABEN ERGÄNZEN]</p>

        <h2>6. Kontaktformular und E-Mail</h2>
        <p>
          Wenn du uns kontaktierst, verarbeiten wir deine Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage: Art. 6 Abs. 1 lit. b
          bzw. lit. f DSGVO. [ANGABEN ZUM FORMULAR-DIENSTLEISTER UND ZUR SPEICHERDAUER]
        </p>

        <h2>7. Newsletter</h2>
        <p>
          Für den Newsletter nutzen wir das Double-Opt-in-Verfahren. Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO), die du jederzeit widerrufen kannst. Versanddienstleister ist Brevo (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin). [AUFTRAGSVERARBEITUNGSVERTRAG MIT BREVO, SPEICHERDAUER UND ÖFFNUNGS-/KLICKTRACKING PRÜFEN]
        </p>

        <h2>8. Kursbuchung über externe Anbieter</h2>
        <p>
          Buchung und Bezahlung erfolgen über [BUCHUNGSPARTNER, z. B. elopage]. Beim Klick auf einen Buchungslink verlässt du diese
          Website; es gilt die Datenschutzerklärung des jeweiligen Anbieters.
        </p>

        <h2>9. Deine Rechte</h2>
        <ul>
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>

        <h2>10. Stand</h2>
        <p>[DATUM]</p>
      </div>
    </Container>
  );
}
