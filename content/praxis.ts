export type PraxisOffer = {
  id: string;
  title: string;
  lead: string;
  points: string[];
  note?: string;
};

export const praxisOffers: PraxisOffer[] = [
  {
    id: "ki",
    title: "KI für Therapiepraxen",
    lead: "Künstliche Intelligenz verständlich, sicher und mit klarem Nutzen im Praxisalltag einsetzen.",
    points: [
      "KI-Basics: Was die Tools können – und was nicht",
      "Prompt-Vorlagen für wiederkehrende Aufgaben",
      "Texte für Website, Aushänge und Patienteninformationen",
      "Kommunikation mit Patient:innen, Angehörigen und Zuweisern",
      "KI in der Praxisorganisation",
    ],
    note: "Keine Patientendaten in ungeprüfte KI-Tools. Wir arbeiten ausschließlich mit anonymisierten Beispielen und klaren Regeln.",
  },
  {
    id: "berichte",
    title: "Arztberichte & Dokumentation",
    lead: "Berichte, die schneller entstehen und von Zuweisern gern gelesen werden.",
    points: [
      "Strukturierte Berichte mit klarem Aufbau",
      "Präzise, verständliche Formulierungen",
      "Vorlagen und Textbausteine",
      "Effiziente Kommunikation mit Zuweisern",
    ],
  },
  {
    id: "organisation",
    title: "Praxisoptimierung",
    lead: "Abläufe, die funktionieren – damit im Alltag mehr Zeit für Therapie bleibt.",
    points: [
      "Abläufe und Zuständigkeiten klären",
      "Anfragen und Terminmanagement strukturieren",
      "Checklisten für wiederkehrende Prozesse",
      "Interne Prozesse und Teamkommunikation",
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Sichtbarkeit",
    lead: "Lokal gefunden werden – von den Patient:innen und Kooperationspartnern, die zu deiner Praxis passen.",
    points: [
      "Google-Unternehmensprofil optimieren",
      "Website: klar, aktuell, auffindbar",
      "Social Media mit vertretbarem Aufwand",
      "Kooperationen und lokale Netzwerke",
      "Lokale Patientengewinnung",
    ],
  },
];
