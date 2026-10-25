export const site = {
  name: "ViaErgo Campus",
  url: "https://viaergo.de",
  claim: "Fortbildung, die im Praxisalltag wirklich weiterbringt.",
  description:
    "Praxisnahe Fortbildungen für Ergotherapeut:innen – mit spezialisiertem Fokus auf Mutter-Kind-Arbeit sowie KI, Organisation und Marketing für die Therapiepraxis.",
  email: "[E-MAIL-ADRESSE]",
  locale: "de_DE",
};

export const nav = [
  { href: "/mutter-kind", label: "Mutter-Kind" },
  { href: "/praxis", label: "Praxis-Schiene" },
  { href: "/ueber-daniel", label: "Über Daniel" },
  { href: "/ueber-viaergo", label: "Über ViaErgo" },
  { href: "/kontakt", label: "Kontakt" },
];

/**
 * Platzhalter für externe Links. Vor dem Livegang durch echte
 * elopage-Links (bzw. Anbieter-Endpunkte) ersetzen.
 */
export const placeholderLinks = {
  booking: "#buchungslink-platzhalter",
  /**
   * Brevo-Anmeldeformular (Double-Opt-in): In Brevo unter „Kontakte → Formulare“
   * ein Anmeldeformular anlegen und hier die Formular-URL eintragen,
   * z. B. "https://xxxx.sibforms.com/serve/MUIF…". Solange null, werden keine Daten übertragen.
   */
  brevoFormUrl: null as string | null,
  contactEndpoint: null as string | null,
};
