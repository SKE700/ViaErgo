# Xola SlideRoof 1160 – technisches Konzept

Ausziehbares Solar-Markisendach für Hochdach-Vans (Sprinter, Transit, Crafter, Vito u. ä.).
Zwei rahmenlose 580-Wp-Module fahren wie bei einem Ausziehtisch aus einer flachen Kassette
an der Markisenposition aus. Sie bilden ein 2,50 m ausladendes PV-Vordach mit **1.160 Wp** auf **5,51 m²**.

> **Status:** Konzeptphase (Vorauslegung). Alle Zahlen sind Handrechnungen aus
> `calc/slideroof_calc.py`. Sie ersetzen **keine** statische Berechnung durch einen Fachplaner
> und keine Fahrzeug- oder Produktprüfung (siehe [risk_analysis.md](risk_analysis.md#5-fachplaner--und-prüfpflichten)).

> **Aktueller Leitentwurf: Hochkant-Variante 3480** (3 Module hochkant im Flügel plus 3 fest in der
> Kassette, Dach 3,81 × 2,48 m wie eine Standardmarkise, 3.480 Wp ausgefahren, 1.740 Wp während der Fahrt).
> Details in [hochkant.md](hochkant.md). Die folgenden Abschnitte beschreiben den ersten Konzeptstand im
> Querformat (1160/1740). Mechanik-, Elektrik- und Risikogrundlagen gelten sinngemäß weiter.

## Projektstruktur

| Datei | Inhalt |
|---|---|
| [hochkant.md](hochkant.md) | **Leitentwurf** Hochkant-Variante 3480/1740: Prinzip, Mechanik, Elektrik, neue Risiken, Variantenvergleich |
| `calc/hochkant_calc.py` | Berechnung der Hochkant-Variante (`results_hochkant_3480.md`, `results_hochkant_1740.md`) |
| `calc/results_2320.md`, `results_3480.md` | Querformat mit 2 Modulen nebeneinander (nur lange Vans) |
| [requirements.md](requirements.md) | Anforderungen mit IDs, Zielwerte, Erfüllungsstatus, offene Punkte |
| [mechanics.md](mechanics.md) | Ansichten und Schnitte, Teleskopmechanik, Modulträger, Kassette und Adapter, Abdichtung, Stützfüße, Lastpfade, Bedienablauf |
| [electrical.md](electrical.md) | PV-Schema, MPPT, Trenner, Überspannungsschutz, Potentialausgleich, Energiekette, Verriegelungslogik |
| [bill_of_materials.md](bill_of_materials.md) | Stückliste mit Material, Profil, Dichtung, Lager, Verbindungstechnik, Gewicht |
| `visual/slideroof-van.html` | Maßstäbliches 3D-Modell am Van mit Ablauf und Ansichten |
| [risk_analysis.md](risk_analysis.md) | FMEA-Risikotabelle, Gegenmaßnahmen, Empfehlung manuell/motorisch, Fachplaner-Pflichten |
| `calc/slideroof_calc.py` | Parametrische Berechnung von Geometrie, Gewicht, Rollen- und Schienenlasten, Wind, Füßen, Haltern, Fahrt und PV |
| `calc/results.md` | Ergebnisse Serienvariante Aluminium (automatisch erzeugt) |
| `calc/results_1740.md` | Ergebnisse Variante 1740 mit drittem Modul fest in der Kassette (`params_1740.json`) |
| `calc/results_leichtbau.md` | Ergebnisse Leichtbauvariante (CFK-Profile), Parameter in `calc/params_leichtbau.json` |
| `calc/test_slideroof_calc.py` | Plausibilitätstests (Gleichgewicht, Geometrie, Verschattung) |

```bash
cd calc
python3 slideroof_calc.py                              # Bericht im Terminal
python3 slideroof_calc.py --set tilt_deg=10 --set v_operating_ms=8
python3 slideroof_calc.py --params params_leichtbau.json --markdown > results_leichtbau.md
python3 slideroof_calc.py --json                       # alle Werte maschinenlesbar
python3 -m unittest test_slideroof_calc.py
```

Nur Python ≥ 3.9 und die Standardbibliothek sind nötig. Jeder Parameter lässt sich mit `--set name=wert` überschreiben.

## Das Konzept in fünf Sätzen

1. Eine **1.489 × 2.490 × 110 mm** große Aluminium-Kassette liegt flach auf dem Dachrand. Ihre
   Vorderkante sitzt drehbar auf den vorhandenen Markisenhaltern, ihr Innenende auf zwei
   werkseitigen Dach-Befestigungspunkten bzw. Dachträgern. Es entsteht keine neue Dachbohrung.
2. Darin liegen die zwei Modulflügel übereinander. Der **obere Innenflügel bildet den Deckel** und
   lädt auch während der Fahrt (580 Wp).
3. Die Flügelprofile sind selbst die Teleskopstufen (Kassette → Innenflügel → Außenflügel). Die Last
   läuft über Kurvenrollen auf gehärteten Stahllaufbahnen. In Endlage verriegeln Doppelbolzen und
   Spannverschlüsse über eine **160 mm Rahmenüberlappung** biegesteif.
4. Zwei klappbare 3-teilige Teleskopfüße an der Vorderkante (2,24–2,84 m) tragen die Vorderkante und
   nehmen Heringe auf. Mit den Füßen wird die Neigung von 5–10° eingestellt; dabei kippt die ganze
   Kassette um die Halterachse.
5. Zwei Zug-Gasfedern gleichen 70 % des Kippmoments aus, und zwei blockierbare Gasfedern halten die
   Neigung. Der Auszug ist manuell (Kurbel oder Zugstange) und **nur im Stand** möglich.

## Klarstellungen und Abweichungen gegenüber dem Lastenheft

Diese Punkte haben sich bei der Auslegung als **physikalisch zwingend** erwiesen und müssen vom
Produktmanagement bestätigt werden:

| # | Lastenheft | Konzept | Grund |
|---|---|---|---|
| 1 | Kassette an der Seite, „Kassettentiefe < 120 mm“ | Kassette liegt **flach auf dem Dachrand**, Bauhöhe 110 mm (+30 mm Halter). Die Tiefe von 1,49 m geht über das Dach. | Eine 2,26 m tiefe Fläche passt in keine 120-mm-Wandkassette. Eine senkrechte Wandkassette (Variante A in mechanics.md) würde Fenster und Schiebetür verdecken. |
| 2 | Befestigung nur an Markisenhaltern | Vorn Markisenhalter als **Drehachse**, hinten **2 Streben/Riegel auf werkseitige Dachpunkte oder Dachträger** | 1,5 m Kassette mit 2,5 m Ausladung ist ein Hebel. Bei Fahrt mit 130 km/h wirken rund 1,5 kN Auftrieb je Seite. Markisenhalter allein reichen nicht. |
| 3 | Fläche 2,44 × 2,26 m | Ausladung **2,50 m** (x) × Breite **2,43 m** (y), Modul-Längsseite in Fahrzeugrichtung | So entspricht die Fläche einer üblichen Markise (2,5 m Ausladung). Die Kassette passt auf die Dachbreite. |
| 4 | Gasfedern gleichen 60–80 % des Flügels beim Auszug aus | Beim **waagerechten** Auszug wirkt das Gewicht quer zur Bewegung, dort gleicht eine Gasfeder nichts aus. Die Gasfedern sitzen deshalb an der **Neigungsverstellung** und gleichen 70 % aus (2 × ~82 N Zug). | Physik: Ausgleich ist nur dort möglich, wo das Gewicht in Bewegungsrichtung wirkt. |
| 5 | Gesamtgewicht < 40 kg, Träger ≤ 5 kg, Flügel ≤ 15 kg | **62 kg** in Aluminium-Serie, **48 kg** in CFK-Leichtbau, Träger 6–10 kg | Allein die Module wiegen 18,2 kg. Für 2,3 m Spannweite, Rollenlaufbahnen und Verriegelung bleiben bei 40 kg keine 22 kg übrig. Vergleich: eine 4-m-Kassettenmarkise wiegt allein 30–37 kg. |
| 6 | Teleskopschienen, mindestens 3 Stufen | 3 Stufen, aber **integrierte Rollenführung** statt Kauf-Teleskopschiene | Kaufschienen mit 2,5 m Hub passen nicht in 110 mm Bauhöhe. Rollen „auf Kante“ tragen radial, damit entfällt die Abminderung flach liegender Schienen. |
| 7 | Füße tragen die Hauptlast | Die Füße tragen Winddruck, Regen und Missbrauchslast und verankern gegen Sog. Das **Eigengewicht** tragen Halter und Strebe. | Statisch unbestimmt. Der Lastanteil wird beim Spannen der Fußspindel eingestellt. |

## Wichtigste Ergebnisse (Serienvariante, Standardparameter)

| Größe | Wert | Ziel | Status |
|---|---:|---:|:---:|
| PV-Leistung | 1.160 Wp | 1.160 Wp | ✔ |
| Solarfläche / Dachfläche | 5,51 / 6,07 m² | ≥ 5,5 m² | ✔ |
| Ausladung × Breite | 2,50 × 2,43 m | 2,44 × 2,26 m | ✔ |
| Bauhöhe Kassette | 110 mm (+30 Halter) | < 120 mm | ✔ (als Höhe interpretiert) |
| Gesamtgewicht | 62 kg (Leichtbau 48 kg) | < 40 kg | ✘ |
| Erf. Rollentragzahl C₀ | ≥ 6,8 kN je Rolle | – | Kurvenrolle Ø 35–40 mm |
| Zugkraft Bedienung (Spitze) | 165 N | eine Person | ✔ mit Kurbel |
| Betriebsgrenze Wind | Bft 5 (10,8 m/s Böe), Heringe Pflicht | – | Einfahren ab Bft 6 |
| Halter-Auftrieb bei Fahrt (130 km/h) | ≈ 1,5 kN vorn + 1,5 kN hinten | – | Fachplaner/Prüfung |

Alle Werte stehen in [calc/results.md](calc/results.md).

## Variante 1740: drittes Modul fest in der Kassette

Ausgefahren ist die Kassette leer. Ihre Innenfläche von 1.429 × 2.430 mm nimmt ein drittes
2.260 × 1.219-Modul auf, das fest im Kassettenboden liegt. Eingefahren liegen die beiden Flügel
geschützt darüber, ausgefahren liegt es frei und lädt mit.

| Größe | 1160 (2 Module) | 1740 (3 Module) |
|---|---:|---:|
| PV ausgefahren / bei Fahrt | 1.160 / 580 Wp | **1.740** / 580 Wp |
| Modulfläche | 5,51 m² | 8,26 m² |
| Kassettenhöhe / Fahrzeughöhe + | 110 / 140 mm | 150 / 180 mm |
| Gesamtgewicht (Alu) | 62 kg | 73 kg |
| Kippmoment um die Drehachse | 341 Nm | 262 Nm (Kassettenmodul wirkt als Gegengewicht) |
| Fahrt 130 km/h: Halter vorn | 1,50 kN | 1,55 kN |
| Crash 10 g | 5,8 kN | 6,9 kN |

Die Variante bringt 50 % mehr Leistung für 11 kg und 40 mm Höhe. Neue Punkte dafür:
- **Entwässerung:** Bei 7° Neigung fällt auch das Kassettenmodul nach außen. Die Frontschwelle
  braucht Ablaufschlitze bzw. eine Rinne unter der Austrittskante des Innenflügels.
- **Kratzschutz:** 6–8 mm Luft zwischen Außenflügel-Unterseite und Kassettenmodul, Gleitpads an
  der Rahmenunterseite.
- **Dritter MPPT,** Trenner und Überspannungsschutz (electrical.md).
- **Dachlast und Zulassung** mit 73 kg und +180 mm Höhe neu prüfen.

Berechnung: `python3 slideroof_calc.py --params params_1740.json` → `calc/results_1740.md`.

## Empfehlung Marktstart

**Manuell mit Kurbelantrieb, motorvorbereitet.** Ein Zahnriemen in der Kassette wird über eine
Markisenkurbel mit Stange bedient, so wie Camper es von Fiamma oder Thule kennen. Der Kurbelsechskant
ist so ausgeführt, dass später ein 12-V-Getriebemotor auf dieselbe Welle passt. Die Begründung steht
in [risk_analysis.md](risk_analysis.md#4-empfehlung-manuell-vs-motorisch).

## Nächste Schritte

1. Datenblatt des Xola-Moduls vervollständigen: Voc, Isc, Temperaturkoeffizienten, zulässige
   Durchbiegung und Rückseitenlast, Freigabe für vollflächige Klebung bzw. Lagerung.
2. Musterfahrzeug (Sprinter W907 L2H2) aufmessen: Halter-Lochbilder, Dachpunkte, Dachbreite,
   Lüfterpositionen.
3. Fachplaner beauftragen (siehe Liste in risk_analysis.md) und Lastannahmen gemeinsam festlegen.
4. Funktionsmuster 1:1 mit Dummy-Modulen (Sandwichplatte 9,1 kg) bauen, Rollen und Verriegelung testen.
