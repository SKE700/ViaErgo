# Risikoanalyse – Xola SlideRoof 1160

Bewertung: **S** Schwere, **W** Wahrscheinlichkeit ohne Maßnahme, **E** Entdeckbarkeit
(je 1 = gering … 5 = hoch, bei E: 5 = schwer zu entdecken). RPZ = S × W × E.

## 1. Die fünf kritischsten Punkte

1. **Lösen der Kassette bei Fahrt.** Rund 3 kN Auftrieb und Vertikalbeschleunigung wirken auf die
   Markisenhalter und Dachpunkte, im Crashfall 5,8 kN Schub. Ein Teil von 62 kg auf der Autobahn
   ist das höchste Personenrisiko.
2. **Wind im ausgefahrenen Zustand.** 6 m² Fläche: Bei nicht blockierter Strebe und ohne Anker hebt
   das Dach schon bei ≈ 30 km/h Böe ab. Camper lassen Markisen erfahrungsgemäß stehen.
3. **Endlage des Teleskops.** Systembedingt bleiben nur 120 mm Rollenabstand. Rollen und Laufbahnen
   werden hoch beansprucht (3,4 kN), Kaltfluss oder Rollenbruch lässt den Flügel abkippen.
4. **Rahmenloses 3-mm-Modul.** Die Rückseitenlast ist nicht spezifiziert, die Klebung muss Sog,
   Vibration und Temperaturwechsel dauerhaft aushalten. Mikrorisse in den Zellen verursachen
   Ertragsverlust und Hotspots.
5. **Gewicht 62 kg statt 40 kg.** Das verfehlt das Lastenheft, erschwert die Montage und
   verschiebt Achs- und Dachlast. Bei 3,5-t-Vans bleibt weniger Zuladung.

## 2. FMEA

| # | Fehler / Gefährdung | Ursache | Folge | S | W | E | RPZ | Gegenmaßnahme | S | W | E | RPZ neu |
|---|---|---|---|--:|--:|--:|--:|---|--:|--:|--:|--:|
| 1 | Kassette löst sich bei Fahrt | Halter nicht für Fremdlast freigegeben, Schrauben lockern sich, Riegel nicht geschlossen | Unfall, Personenschaden | 5 | 3 | 3 | 45 | fahrzeugspezifisches Adapterkit mit Prüfnachweis (Zug, Vibration, City-Crash analog ISO 11154), Hybridfügung, formschlüssige Transportriegel mit Sicherungsbügel, Reed-Überwachung plus Warnung bei Zündung, Nachziehintervall in der Anleitung | 5 | 1 | 2 | 10 |
| 2 | Flügel fährt bei Fahrt aus | Rastung versagt bei Vibration | Unfall | 5 | 2 | 3 | 30 | Transportriegel formschlüssig (nicht nur Raste), selbsthemmendes Kurbelgetriebe, Deckleiste hält oberen Flügel, Endschalter „ganz eingefahren“ | 5 | 1 | 2 | 10 |
| 3 | Dach hebt bei Wind ab bzw. schlägt um | Böe > Betriebsgrenze, Heringe nicht gesetzt, Strebe nicht blockiert | Sachschaden, Verletzung Dritter | 4 | 4 | 2 | 32 | blockierbare Strebe ist Pflichtzustand (Kulisse: Neigen nur über Blockierfeder), Heringe im Lieferumfang, Warnschild, Anemometer-Warnung, Sollbruchstelle bzw. Kniehebel am Fuß statt Bruch am Fahrzeug | 4 | 2 | 2 | 16 |
| 4 | Halterüberlast durch Missbrauch (Person hängt sich an) | Kinder, Hängematte, Zubehör | Halter- oder Karosserieschaden | 3 | 3 | 2 | 18 | Missbrauchslast 500 N in der Bemessung, Warnpiktogramm, keine Befestigungspunkte für Zubehör am Außenflügel | 3 | 2 | 2 | 12 |
| 5 | Rolle oder Laufbahn versagt in der Endlage | 3,4 kN Linienlast, Kaltfluss im Al, Korrosion | Flügel kippt ab, fällt evtl. herunter | 4 | 3 | 3 | 36 | Stahllaufbahn, C₀ ≥ 6,8 kN, exzentrische Spieleinstellung, Endlagen-Fanghaken (zweiter Lastpfad), Dauerlauftest 5.000 Zyklen, Option Rahmenschwanz 200 mm | 4 | 1 | 2 | 8 |
| 6 | Verriegelungsbolzen nicht eingefallen | Verschmutzung, Eis, Bedienfehler | Flügel rutscht unter Last zurück, Gelenk-/Quetschgefahr | 4 | 3 | 3 | 36 | selbsttätig einfallende Federbolzen, Sichtanzeige (rote Fahne), Endschalter, Füße nur bei Bolzen-OK ausklappbar (mechanische Sperre) | 4 | 1 | 2 | 8 |
| 7 | Quetschen und Scheren beim Ein-/Ausfahren | Hand an Überlappung oder Fußgelenk | Fingerverletzung | 3 | 3 | 1 | 9 | Kurbelbedienung vom Boden, Abdeckleisten an der Überlappung, Fußgelenk mit Fingerschutz, Spalte ≤ 8 bzw. ≥ 25 mm (EN ISO 13854) | 3 | 1 | 1 | 3 |
| 8 | Modul-Mikrorisse / Delamination | Biegung zwischen Rippen, Vibration bei Fahrt, Klebeversagen | Ertragsverlust, Hotspot, Brandrisiko | 4 | 3 | 4 | 48 | Rippenabstand ≤ 250 mm, Freigabe des Modulherstellers, EL-Prüfung (Elektrolumineszenz) nach Prototyp-Tests, Bypassdioden, Eckkrallen als Redundanz | 4 | 2 | 3 | 24 |
| 9 | Wasser dringt in die Kassette, Vereisung | Lippen undicht, Waschanlage, Frost | Korrosion, Rollen frieren fest | 3 | 3 | 3 | 27 | Labyrinth plus Entwässerung, Edelstahl-/2RS-Lager, Winterhinweis „nicht ausfahren bei Eis“, Waschanlagentest | 3 | 2 | 2 | 12 |
| 10 | Kabelbruch in der E-Kette, Lichtbogen | falsche Leitung (PV-Standard), zu kleiner Radius | Ertragsausfall, Brand | 4 | 3 | 3 | 36 | ketten-zertifizierte Leitung, R ≥ 7,5 d, keine Stecker in der Kette, Isolationsüberwachung über MPPT-App, Zyklentest | 4 | 1 | 2 | 8 |
| 11 | Überspannung, Blitz | Gewitter bei ausgefahrenem Dach | MPPT-Defekt | 3 | 2 | 2 | 12 | SPD Uc ≥ 70 V, Betriebsregel „bei Gewitter einfahren“, Potentialausgleich | 3 | 1 | 2 | 6 |
| 12 | Ausfahren bei laufendem Motor bzw. Losfahren ausgefahren | Bedienfehler | Unfall, Totalschaden | 5 | 2 | 2 | 20 | Zündungswarnung, Kurbelanschluss mit Schlüssel, Aufkleber am Lenkrad-Hänger | 5 | 1 | 2 | 10 |
| 13 | Fahrzeughöhe +140 mm unterschätzt | Parkhaus, Fähre, Durchfahrt | Kollision | 3 | 3 | 2 | 18 | Höhenaufkleber im Cockpit, Hinweis in Anleitung und Zulassungspapieren | 3 | 2 | 2 | 12 |
| 14 | Kontaktkorrosion Al/Edelstahl/CFK | Salz, Feuchte | Festfressen, Festigkeitsverlust | 3 | 3 | 3 | 27 | Isolierung, Eloxal, Salzsprühnebeltest 480 h (ISO 9227) | 3 | 1 | 2 | 6 |
| 15 | Kippen über die Drehachse unkontrolliert | Gasfeder entladen bzw. undicht | Vorderkante schlägt auf Füße bzw. Boden | 3 | 2 | 3 | 18 | Blockierfeder plus mechanische Lochraster-Rückfallebene, Gasfedertausch alle 5 Jahre | 3 | 1 | 2 | 6 |
| 16 | Schnee/Eislast eingefahren | Wintercamping | Kassette überlastet? | 2 | 2 | 2 | 8 | eingefahren wie ein normales Dachmodul, Last geht flächig über Pads ins Dach. Ausgefahren verboten. | 2 | 1 | 2 | 4 |

## 3. Konstruktive Schwachstellen und Gegenmaßnahmen

| Schwachstelle | Warum | Maßnahme im Konzept | Weiter offen |
|---|---|---|---|
| Kleine Stufenüberdeckung in Endlage | Bei 2× Hub aus 1× Einbaulänge bleibt keine Überdeckung | 160-mm-Rahmenschwanz, biegesteife Spannverschluss-Überlappung, Rollen für den freien Kragzustand ausgelegt | Fanghaken als zweiter Lastpfad, Parameter `tail_mm` je Fahrzeug |
| Geringe Bauhöhe 110 mm | Profile niedrig, daher Biegesteifigkeit und Momentenstöße begrenzt | Doppel-C-Profil 70 mm nutzt die Höhe beider Ebenen; Querholme 40 mm | FEM des Stoßes mit Fachplaner |
| Markisenhalter als Drehlager | Halter sind für ihre Markise freigegeben | Adapterkit, eigene Xola-Halter auf denselben Karosseriepunkten als Rückfallebene | Prüfung je Fahrzeugtyp |
| Rahmenloses Leichtmodul | Rückseitenstatik unbekannt | Rippenrost + Klebung + EPDM-Kante | Herstellerfreigabe |
| Gewicht | Siehe BOM §5 | CFK-Leichtbau 48 kg | Zielgewicht neu festlegen |
| Statisch unbestimmte Lagerung (Halter, Strebe, Füße) | Lastanteil hängt von der Fußeinstellung ab | Bemessung für beide Grenzfälle (Füße lose / Füße tragen) | Einstellanweisung „Fuß handfest + ½ Umdrehung“ |

## 4. Empfehlung manuell vs. motorisch

| Kriterium | Manuell (Kurbel) | Motorisch 12 V |
|---|---|---|
| Gewicht | Basis | +2,5–3,5 kg (Motor, Steuerung, Kabel) |
| Kosten Herstellkosten | Basis | +250–400 € |
| Ausfallrisiko | gering, rein mechanisch | Motor, Elektronik, Feuchte in der Kassette |
| Notbedienung | entfällt (ist schon manuell) | Kurbel-Notbetrieb nötig |
| Bediensicherheit | Bediener sieht die Füße und Heringe | Automatisches Einfahren bei Wind **gegen gesetzte Heringe** würde Füße oder Mechanik zerstören. Füße müssen ohnehin manuell gelöst werden. |
| Zulassung / Normen | Produktsicherheit (GPSR), keine Maschinenrichtlinie-Steuerung | Maschinenverordnung (EU) 2023/1230 mit Risikobeurteilung, EMV ECE R10, Klemmschutz |
| Komfort | ≈ 41 Kurbelumdrehungen, < 10 N | Knopfdruck |
| Kundenerwartung | wie Fiamma F45 / Thule 6300 Standard | Premium |

**Empfehlung: Marktstart manuell mit Kurbelgetriebe, Antriebswelle motorvorbereitet.**
Die Füße, Heringe und die Neigung muss der Nutzer ohnehin von Hand bedienen. Ein Motor spart nur
den einfachsten Teil der Bedienung und bringt mit dem Wind-Autoeinfahren ein neues
Sicherheitsproblem. Erst wenn Füße entfallen (z. B. Kragarm-Version für kleinere Module) wird der
Motor zum echten Mehrwert.

## 5. Fachplaner- und Prüfpflichten

Diese Nachweise **müssen** durch einen qualifizierten Tragwerksplaner bzw. eine Prüfstelle erbracht
werden. Die Handrechnungen in `calc/` dienen nur der Vordimensionierung:

| # | Nachweis | Grundlage |
|---|---|---|
| F1 | Windlastannahmen (c_p für ein Vordach am Fahrzeug, Böen, Strömungsablösung am Dachrand) | EN 1991-1-4, ggf. CFD oder Windkanal |
| F2 | Tragfähigkeit und Ermüdung: Markisenhalter, Adapter, Karosseriepunkte, Dachpunkte (Fahrt, Crash, Missbrauch, Betrieb) | Fahrzeughersteller-Aufbaurichtlinie (z. B. Mercedes-Benz Aufbaurichtlinien Sprinter), ISO 11154 analog |
| F3 | Aluminiumtragwerk: Profile, Stöße, Endverriegelung, Überlappung, Ermüdung unter Böen und Vibration | EN 1999-1-1 / -1-3, FEM |
| F4 | Rollen, Laufbahnen, Bolzen (Hertz-Pressung, Lochleibung, Kaltfluss) | Hersteller-Tragzahlen, EN 1999-1-1 |
| F5 | Modulklebung und Rückseitenlast | Modulhersteller, IEC 61215 (mechanische Last, TC, DH), ETAG 002 / EAD Strukturverglasung sinngemäß |
| F6 | Stützfüße (Knicken mit Imperfektion, Teleskopspiel) | EN 1999-1-1 |
| F7 | Fahrzeugzulassung: Höhe, Dachlast, Anbauteile, ggf. Teilegutachten | StVZO / UN-R, Prüfstelle (TÜV/DEKRA) |
| F8 | Elektrische Sicherheit und EMV | DIN VDE 0100-712/-721, ECE R10 |

## 6. Prüfplan Prototyp (Vorschlag)

1. Statischer Belastungstest ausgefahren: 1,5 × Missbrauchslast an der Vorderkante, 1,5 × Sog per Sandsack-Umkehrlast bzw. Zugzylinder.
2. Dauerlauf Auszug: 5.000 Zyklen, Rollen- und Laufbahnverschleiß messen, Kraftverlauf aufzeichnen.
3. Vibration eingefahren auf dem Shaker (ISO 16750-3, Profil Karosserie), danach EL-Bild der Module.
4. Fahrversuch 130 km/h mit Kraftmessbolzen in den Haltern.
5. Regen- und Waschanlagentest, Salzsprühnebel 480 h an Beschlägen.
6. Temperaturwechsel −20/+85 °C an Klebeproben, Zug-Scherversuch.
