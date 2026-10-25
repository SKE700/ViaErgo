import { placeholderLinks } from "./site";

export type CourseFormat = "Live" | "Online" | "Aufzeichnung";

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string[];
  audience: string[];
  audienceShort: string;
  outcomes: string[];
  modules: string[];
  format: CourseFormat;
  duration: string;
  date: string;
  prerequisites: string;
  price: string;
  points: string;
  speaker: string;
  bookingUrl: string;
  faq: { q: string; a: string }[];
};

/**
 * Kursinhalte sind fachliche Entwürfe und müssen von Daniel geprüft werden.
 * Dauer, Termine, Preise und Fortbildungspunkte sind bewusst Platzhalter.
 */
export const courses: Course[] = [
  {
    slug: "mutter-kind-begleitung-ergotherapie",
    title: "Mutter-Kind-Begleitung in der Ergotherapie",
    subtitle: "Bindung, Regulation und Alltag stärken",
    summary:
      "Der Grundlagenkurs für die ergotherapeutische Arbeit mit Mutter und Kind: Bindung, Regulation und Alltagsgestaltung verstehen und die Dyade gezielt begleiten.",
    description: [
      "Wenn Mütter mit ihren Säuglingen oder Kleinkindern in die Praxis kommen, geht es selten nur um das Kind. Unruhe, Erschöpfung und Unsicherheit betreffen die ganze Beziehung – und genau dort setzt ergotherapeutische Mutter-Kind-Arbeit an.",
      "In diesem Kurs lernst du, Mutter und Kind als Dyade zu sehen: Du ordnest die Grundlagen von Bindung und Regulation ein, beobachtest Interaktion gezielt und entwickelst alltagsnahe Interventionen, die Familien tatsächlich umsetzen können.",
      "Der Kurs ist als fundierter Einstieg konzipiert und bildet die Basis für alle weiteren Mutter-Kind-Fortbildungen auf ViaErgo Campus.",
    ],
    audience: [
      "Ergotherapeut:innen, die mit Säuglingen, Kleinkindern und ihren Familien arbeiten oder arbeiten möchten",
      "Therapeut:innen aus Pädiatrie und Frühförderung, die ihren Blick auf die Eltern-Kind-Beziehung erweitern wollen",
      "Praxisinhaber:innen, die einen Mutter-Kind-Schwerpunkt aufbauen möchten",
    ],
    audienceShort: "Ergotherapeut:innen · Einstieg",
    outcomes: [
      "Grundlagen von Bindung und kindlicher Selbstregulation verständlich einordnen",
      "Mutter und Kind als Dyade beobachten und Ressourcen erkennen",
      "Alltagsnahe ergotherapeutische Interventionen planen",
      "Elterngespräche wertschätzend und klar führen",
      "Die Grenzen der eigenen Rolle erkennen und passend weiterverweisen",
    ],
    modules: [
      "Grundlagen: Bindungstheorie und frühe Entwicklung im Überblick",
      "Regulation verstehen: Co-Regulation zwischen Mutter und Kind",
      "Die Dyade im Blick: Beobachtung in der Praxis",
      "Alltag als Interventionsraum: Routinen, Rituale, Umgebung",
      "Elterngespräche führen und Ziele gemeinsam formulieren",
      "Netzwerk und Abgrenzung: Zusammenarbeit mit Hebammen, Kinderärzt:innen und Beratungsstellen",
      "Fallbeispiele und Transfer in den eigenen Praxisalltag",
    ],
    format: "Live",
    duration: "[DAUER]",
    date: "[TERMIN]",
    prerequisites:
      "Keine speziellen Vorkenntnisse. Eine ergotherapeutische Ausbildung oder ein vergleichbarer therapeutischer Hintergrund wird vorausgesetzt.",
    price: "[KURSPREIS]",
    points: "[FORTBILDUNGSPUNKTE]",
    speaker: "Daniel",
    bookingUrl: placeholderLinks.booking,
    faq: [
      {
        q: "Ist dieser Kurs der richtige Einstieg?",
        a: "Ja. Der Kurs vermittelt die Grundlagen, auf denen alle weiteren Mutter-Kind-Fortbildungen aufbauen.",
      },
      {
        q: "Wie läuft der Live-Kurs ab?",
        a: "Der Kurs findet live statt. Termin: [TERMIN]. Alle Details zum Ablauf erhältst du nach der Buchung.",
      },
      {
        q: "Erhalte ich eine Teilnahmebescheinigung?",
        a: "[ANGABE ZUR TEILNAHMEBESCHEINIGUNG]",
      },
    ],
  },
  {
    slug: "schreien-unruhe-schlafprobleme",
    title: "Schreien, Unruhe und Schlafprobleme",
    subtitle: "Ergotherapie bei Regulationsstörungen im Säuglingsalter",
    summary:
      "Wie du exzessives Schreien, Unruhe und Schlafprobleme im Säuglingsalter ergotherapeutisch einordnest und Familien mit alltagstauglichen Strategien begleitest.",
    description: [
      "Ein Baby, das viel schreit, schlecht schläft oder kaum zur Ruhe kommt, bringt Familien schnell an ihre Grenzen. Eltern suchen Orientierung – und Therapeut:innen brauchen ein klares, strukturiertes Vorgehen.",
      "Dieser Kurs zeigt dir, wie du frühkindliche Regulationsprobleme systematisch erfasst, sensorische und interaktionelle Faktoren berücksichtigst und gemeinsam mit den Eltern einen realistischen Plan für den Alltag entwickelst.",
      "Ein besonderer Fokus liegt auf der Entlastung der Eltern und auf der Frage, wann eine ärztliche Abklärung oder weitere Unterstützung notwendig ist.",
    ],
    audience: [
      "Ergotherapeut:innen, die Säuglinge und ihre Familien begleiten",
      "Therapeut:innen aus Frühförderung und Pädiatrie",
      "Teilnehmende des Grundlagenkurses, die ihr Wissen vertiefen möchten",
    ],
    audienceShort: "Arbeit mit Säuglingen · Vertiefung",
    outcomes: [
      "Regulationsprobleme im Säuglingsalter fachlich einordnen",
      "Schrei-, Schlaf- und Fütterkontexte strukturiert erfassen",
      "Sensorische Faktoren und Reizverarbeitung berücksichtigen",
      "Beruhigungs- und Alltagsstrategien gemeinsam mit Eltern entwickeln",
      "Warnzeichen erkennen und rechtzeitig weiterverweisen",
    ],
    modules: [
      "Was sind Regulationsstörungen? Begriffe und Einordnung",
      "Schreien, Schlafen, Füttern: die typischen Problemfelder",
      "Anamnese und Beobachtung: strukturiert erfassen",
      "Sensorische Verarbeitung und Umgebungsgestaltung",
      "Beruhigungsstrategien und Tagesstruktur",
      "Eltern entlasten: Erschöpfung ernst nehmen",
      "Warnzeichen und interdisziplinäre Zusammenarbeit",
    ],
    format: "Online",
    duration: "[DAUER]",
    date: "[TERMIN]",
    prerequisites:
      "Erfahrung in der Arbeit mit Säuglingen ist hilfreich. Der Grundlagenkurs wird empfohlen, ist aber keine Voraussetzung.",
    price: "[KURSPREIS]",
    points: "[FORTBILDUNGSPUNKTE]",
    speaker: "Daniel",
    bookingUrl: placeholderLinks.booking,
    faq: [
      {
        q: "Brauche ich den Grundlagenkurs vorher?",
        a: "Nicht zwingend. Er erleichtert aber den Einstieg, weil wir auf den dort vermittelten Grundlagen aufbauen.",
      },
      {
        q: "Wie lange habe ich Zugriff auf die Inhalte?",
        a: "[ANGABE ZUR ZUGANGSDAUER]",
      },
      {
        q: "Geht es auch um medizinische Ursachen?",
        a: "Der Kurs bleibt im ergotherapeutischen Rahmen. Wir besprechen, welche Warnzeichen eine ärztliche Abklärung erfordern – eine Diagnose stellen wir nicht.",
      },
    ],
  },
  {
    slug: "eltern-kind-interaktion",
    title: "Eltern-Kind-Interaktion in der Ergotherapie",
    subtitle: "Beobachten, verstehen und gezielt begleiten",
    summary:
      "Interaktion sichtbar machen: Wie du Eltern-Kind-Interaktionen systematisch beobachtest, Stärken erkennst und Eltern gezielt in ihrer Feinfühligkeit unterstützt.",
    description: [
      "Die Qualität der Interaktion zwischen Eltern und Kind ist ein zentraler Faktor für Entwicklung und Wohlbefinden. In der Therapie ist sie jedoch oft schwer greifbar.",
      "In diesem Kurs lernst du, Interaktion strukturiert zu beobachten, Signale von Kind und Eltern zu deuten und Rückmeldungen so zu geben, dass Eltern sich gestärkt statt bewertet fühlen.",
      "Du arbeitest mit Fallbeispielen und Übungen, die sich direkt in deine Therapieeinheiten übertragen lassen.",
    ],
    audience: [
      "Ergotherapeut:innen in Pädiatrie, Frühförderung und Familienarbeit",
      "Therapeut:innen, die Eltern stärker in die Therapie einbeziehen möchten",
      "Teilnehmende, die ihre Beobachtungskompetenz schärfen möchten",
    ],
    audienceShort: "Pädiatrie · Familienarbeit",
    outcomes: [
      "Eltern-Kind-Interaktion strukturiert beobachten und beschreiben",
      "Kindliche Signale und elterliche Feinfühligkeit einordnen",
      "Ressourcenorientiertes Feedback an Eltern geben",
      "Spiel- und Alltagssituationen gezielt als Intervention nutzen",
      "Videogestützte Arbeit datenschutzbewusst planen",
    ],
    modules: [
      "Grundlagen der Eltern-Kind-Interaktion",
      "Feinfühligkeit: Signale wahrnehmen, deuten, beantworten",
      "Strukturierte Beobachtung im Therapiesetting",
      "Ressourcenorientiertes Feedback an Eltern",
      "Spiel und Alltagssituationen als Interventionsraum",
      "Videogestützte Arbeit: Möglichkeiten, Einwilligung und Datenschutz",
      "Fallbeispiele und Übungen",
    ],
    format: "Live",
    duration: "[DAUER]",
    date: "[TERMIN]",
    prerequisites:
      "Grundkenntnisse in der Arbeit mit Kindern und Familien. Der Grundlagenkurs wird empfohlen.",
    price: "[KURSPREIS]",
    points: "[FORTBILDUNGSPUNKTE]",
    speaker: "Daniel",
    bookingUrl: placeholderLinks.booking,
    faq: [
      {
        q: "Arbeiten wir mit echten Videoaufnahmen?",
        a: "Wir arbeiten mit aufbereiteten Fallbeispielen. Echte Patientendaten werden im Kurs nicht verwendet.",
      },
      {
        q: "Gibt es Raum für eigene Fälle?",
        a: "Ja, in anonymisierter Form. Details zum Ablauf: [ABLAUF FALLBESPRECHUNG].",
      },
      {
        q: "Für welches Alter der Kinder ist der Kurs gedacht?",
        a: "Der Schwerpunkt liegt auf Säuglingen und Kleinkindern. Viele Prinzipien lassen sich auf ältere Kinder übertragen.",
      },
    ],
  },
  {
    slug: "bindung-staerken-bonding",
    title: "Bindung stärken",
    subtitle: "Mutter-Kind-Interaktion bei Bonding-Schwierigkeiten begleiten",
    summary:
      "Wenn Nähe nicht von allein entsteht: Wie du Mütter und Kinder nach einem schweren Start sensibel begleitest und gemeinsame Momente im Alltag förderst.",
    description: [
      "Nicht jede Mutter erlebt nach der Geburt sofort eine tiefe Verbundenheit mit ihrem Kind. Frühgeburt, Klinikaufenthalte oder eine belastende Geburt können den Start erschweren – und Schuldgefühle verstärken die Unsicherheit.",
      "Dieser Kurs zeigt dir, wie du Bonding-Schwierigkeiten erkennst, ohne zu bewerten, und wie du Nähe, Körperkontakt und gemeinsame Rituale behutsam in den Alltag der Familie bringst.",
      "Im Mittelpunkt steht die Stärkung der mütterlichen Selbstwirksamkeit – in enger Abstimmung mit dem Netzwerk aus Hebammen, Kliniken und Beratungsstellen.",
    ],
    audience: [
      "Ergotherapeut:innen, die Familien in der frühen Lebensphase begleiten",
      "Therapeut:innen mit Bezug zu Frühgeborenen und Nachsorge",
      "Teilnehmende, die ihre Arbeit mit der Dyade vertiefen möchten",
    ],
    audienceShort: "Frühe Lebensphase · Vertiefung",
    outcomes: [
      "Bonding und Bindung fachlich unterscheiden und einordnen",
      "Belastende Startbedingungen im Verlauf berücksichtigen",
      "Bonding-Schwierigkeiten wertfrei ansprechen",
      "Nähe und gemeinsame Momente im Alltag gezielt fördern",
      "Mütterliche Selbstwirksamkeit stärken",
    ],
    modules: [
      "Bonding und Bindung: Begriffe und Unterschiede",
      "Wenn der Start schwer war: Frühgeburt, Klinikaufenthalt, belastete Geburt",
      "Bonding-Schwierigkeiten erkennen, ohne zu bewerten",
      "Nähe ermöglichen: Körperkontakt, Rituale, gemeinsame Momente",
      "Die Rolle der Mutter stärken: Selbstwirksamkeit fördern",
      "Zusammenarbeit mit Hebammen, Kliniken und Beratungsstellen",
      "Fallbeispiele",
    ],
    format: "Aufzeichnung",
    duration: "[DAUER]",
    date: "Jederzeit verfügbar",
    prerequisites: "Der Grundlagenkurs wird empfohlen. Erfahrung in der Arbeit mit Familien ist hilfreich.",
    price: "[KURSPREIS]",
    points: "[FORTBILDUNGSPUNKTE]",
    speaker: "Daniel",
    bookingUrl: placeholderLinks.booking,
    faq: [
      {
        q: "Kann ich den Kurs in meinem eigenen Tempo bearbeiten?",
        a: "Ja. Als Aufzeichnung kannst du die Inhalte flexibel ansehen. Zugangsdauer: [ANGABE ZUR ZUGANGSDAUER].",
      },
      {
        q: "Gibt es Arbeitsmaterialien?",
        a: "[ANGABE ZU ARBEITSMATERIALIEN]",
      },
      {
        q: "Kann ich Fragen an Daniel stellen?",
        a: "[ANGABE ZU FRAGEMÖGLICHKEITEN]",
      },
    ],
  },
  {
    slug: "postpartale-belastung",
    title: "Wenn die Freude auf das Baby fehlt",
    subtitle: "Ergotherapeutische Begleitung bei postpartaler Belastung",
    summary:
      "Postpartale Belastung erkennen, sensibel ansprechen und Mütter im Alltag begleiten – mit klarer Abgrenzung zur ärztlichen und psychotherapeutischen Behandlung.",
    description: [
      "Erschöpfung, Rückzug, Überforderung: Viele Mütter erleben nach der Geburt eine Zeit, die so gar nicht zu den Erwartungen passt. In der Therapie begegnen dir diese Belastungen oft indirekt – über das Kind.",
      "In diesem Kurs lernst du, Warnzeichen zu erkennen, sie respektvoll anzusprechen und die Handlungsfähigkeit der Mutter im Alltag ergotherapeutisch zu unterstützen.",
      "Ein zentrales Thema ist die Abgrenzung: Was gehört in die Ergotherapie, und wann ist eine Weiterverweisung an Ärzt:innen, Psychotherapeut:innen oder Beratungsstellen notwendig?",
    ],
    audience: [
      "Ergotherapeut:innen, die Mütter und Familien nach der Geburt begleiten",
      "Therapeut:innen, die sich im Umgang mit belasteten Eltern sicherer fühlen möchten",
      "Teilnehmende der Mutter-Kind-Reihe, die ihr Wissen abrunden möchten",
    ],
    audienceShort: "Familien nach der Geburt",
    outcomes: [
      "Formen postpartaler Belastung fachlich einordnen",
      "Warnzeichen erkennen und sensibel ansprechen",
      "Ergotherapeutische Ansatzpunkte im Alltag nutzen",
      "Mutter-Kind-Interaktion unter Belastung begleiten",
      "Grenzen klar ziehen und im Netzwerk weiterverweisen",
    ],
    modules: [
      "Postpartale Belastung: Formen, Verläufe, Einordnung",
      "Warnzeichen erkennen und sensibel ansprechen",
      "Ergotherapeutische Ansatzpunkte: Alltag, Struktur, Handlungsfähigkeit",
      "Mutter-Kind-Interaktion unter Belastung",
      "Selbstfürsorge und Entlastung im Familienalltag",
      "Grenzen der Ergotherapie und Weiterverweisung im Netzwerk",
      "Fallbeispiele und Gesprächsleitfäden",
    ],
    format: "Online",
    duration: "[DAUER]",
    date: "[TERMIN]",
    prerequisites: "Der Grundlagenkurs wird empfohlen. Erfahrung in der Arbeit mit Familien ist hilfreich.",
    price: "[KURSPREIS]",
    points: "[FORTBILDUNGSPUNKTE]",
    speaker: "Daniel",
    bookingUrl: placeholderLinks.booking,
    faq: [
      {
        q: "Ersetzt der Kurs eine psychotherapeutische Qualifikation?",
        a: "Nein. Der Kurs vermittelt ergotherapeutische Ansätze im Rahmen deines Berufsbilds und legt großen Wert auf Abgrenzung und rechtzeitige Weiterverweisung.",
      },
      {
        q: "Bekomme ich Gesprächsleitfäden an die Hand?",
        a: "Ja, der Kurs enthält Leitfäden für das Ansprechen von Belastungen. Format der Materialien: [ANGABE ZU ARBEITSMATERIALIEN].",
      },
      {
        q: "Wie gehe ich mit akuten Krisen um?",
        a: "Der Kurs behandelt, wie du Warnzeichen erkennst und welche Stellen in akuten Situationen zuständig sind. Die Krisenintervention selbst gehört nicht zum ergotherapeutischen Auftrag.",
      },
    ],
  },
];

export function getCourse(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export const featuredCourses = courses.slice(0, 3);
