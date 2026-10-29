# Hochkant-Variante – Xola SlideRoof 3480 (aktueller Leitentwurf)

**Ziel:** Das Solardach soll die Fläche einer Standardmarkise erreichen. Am Sprinter L2 heißt das
3,5–4,0 m Breite bei 2,5 m Ausladung (Fiamma F45s 350/400). Mit dem Xola-Modul im Querformat ging
das nicht: Ein Modul ergibt 2,26 m Breite, zwei nebeneinander 4,52 m. **Hochkant** stehen drei
Module mit ihrer kurzen Seite (1,22 m) in Fahrzeuglängsrichtung und ergeben **3,81 m** Breite.

Zahlen aus `calc/hochkant_calc.py` (Ergebnisse: `calc/results_hochkant_3480.md` und
`calc/results_hochkant_1740.md`). Das 3D-Modell steht in `visual/slideroof-van.html`.
Alle Werte sind Vorauslegung und ersetzen keine Statik durch einen Fachplaner.

## 1. Prinzip

```
  Draufsicht ausgefahren                       y (Fahrzeuglängs) ─────────────►
 ┌──────────────────────── Kassette 2 370 (quer) × 3 987 (längs) × 120 ─────────────────────┐
 │  ░░ fest 1 ░░  ┃  ░░ fest 2 ░░  ┃  ░░ fest 3 ░░   (Kassettenboden, 3 × 580 Wp)            │ ← steht ≈175 mm
 │                ┃ Mittelschiene  ┃                                                         │   über die Gegenseite
 └────────────────┸────────────────┸────────────────── Drehachse auf 6 Markisenhaltern ──────┘ ← steht ≈175 mm
 ══════════════════════════════════ Fahrzeugwand (Schiebetür) ════════════════════════════════   über die Wand
   ┌──────────────┬────────────────┬────────────────┐
   │ ▓ Flügel 1 ▓ │ ▓ Flügel 2 ▓   │ ▓ Flügel 3 ▓   │  ein Flügel, 3 Module hochkant (3 × 580 Wp)
   │  1 219       │   1 219        │   1 219        │  x: 2 260 Modul → Ausladung 2,48 m ab Wand
   └F1────────────┴───────F2───────┴─────────────F3─┘  3 Stützfüße, Regenrinne
              Breite 3,81 m
```

| Größe | 3480 (6 Module) | 1740 (nur Flügel) |
|---|---:|---:|
| PV ausgefahren / bei Fahrt | **3.480 / 1.740 Wp** | 1.740 / 1.740 Wp |
| Modulfläche | 16,5 m² | 8,3 m² |
| Dach: Breite × Ausladung | 3,81 × 2,48 m (9,4 m²) | gleich |
| Kassette quer × längs × hoch | 2.370 × 3.987 × 120 mm | gleich |
| Überstand über Karosserie je Seite | ≈ 175 mm (Gesamtbreite 2,37 m < 2,55 m zulässig) | gleich |
| Fahrzeughöhe zusätzlich | 150 mm | 150 mm |
| Gesamtgewicht (Alu) | **≈ 144 kg** | ≈ 107 kg |
| Flügel komplett | 49 kg | 49 kg |

Gegenüber den Querformat-Varianten ändert sich damit Folgendes:
- **Nur ein bewegter Flügel** statt zwei, ohne Synchronlauf 2:1 und ohne Überlappungsstoß zwischen Flügeln.
- **Vollauszug mit Zwischenwagen:** Der Flügel fährt ganz aus der Kassette. Ein Zwischenwagen fährt
  den halben Hub (1.172 mm) mit, so dass jede Stufe auch in der Endlage noch **1.138 mm** überdeckt.
  Das kritische 120-mm-Rollenpaar der Querformat-Variante entfällt. Die Rollen brauchen nur noch
  C₀ ≥ 1,1 kN statt 6,8 kN.
- **Selbstausgleich:** Die drei festen Module liegen auf der Dachseite der Drehachse und wiegen den
  ausgefahrenen Flügel fast auf. Das Kippmoment sinkt auf 64 Nm, die Gasfedern werden fast überflüssig
  und dienen nur noch als Dämpfung.
- **1.740 Wp während der Fahrt,** weil der Flügel oben liegt.

## 2. Mechanik

| Baugruppe | Ausführung |
|---|---|
| Kassette | Rahmen 6082-T6: Front mit Drehachse (35 mm), Rückwand (25 mm), Seitenwände mit Laufschiene, 2 Mittelschienen in den 60-mm-Fugen zwischen den festen Modulen, PP-Boden mit Entwässerung. Liegt quer über das ganze Dach. |
| Lagerung | Vorn 6 Markisenhalter-Konsolen mit Drehachse an der Wand (x = 0), die Kassette steht 175 mm darüber hinaus. Hinten 2 Streben bzw. Transportriegel auf den werkseitigen Dachpunkten der **Gegenseite**. Keine neue Dachbohrung. |
| Feste Module | 3 × 580 Wp hochkant auf einem Rippenrost im Kassettenboden (Klebung und EPDM-Kante wie beim Flügel), Ablaufschlitze in der Frontschwelle |
| Flügel | 3 Module hochkant auf einem Rippenrost (5 Rippen je Modul in x), 4 Laufprofile (2 außen, 2 unter den Modulfugen), Querholme 40 × 40 × 2 vorn und hinten |
| Vollauszug | 4 dreistufige Rollenschienen: fest in der Kassette, Zwischenwagen (Hub 1.172 mm), Flügel (Hub 2.345 mm). Kurvenrollen auf Stahllaufbahn, C₀ ≥ 1,1 kN je Rolle. Seil-Synchronisation für den Zwischenwagen, Kurbelantrieb wie bisher. |
| Stützfüße | 3 Stück (Ecken und Mitte), 2,24–2,84 m. Die Eckfüße klappen zur Mitte, der Mittelfuß nach hinten unter den Flügel. Querholm vorn spannt 1,90 m zwischen den Füßen (σ 15 MPa, f 4 mm). |
| Neigung | Kippen um die Halterachse wie bisher. Bei 7° hebt sich das Innenende auf der Gegenseite um 268 mm, die Vorderkante senkt sich um 302 mm. |
| Abdichtung | Flügel-Hinterkante gegen Kassettenfront mit EPDM-Lippe. Feste Module entwässern über die Frontschwelle in eine Rinne. Seiten offen wie bei einer Markise. |

## 3. Elektrik

* **2 Stränge à 3 Module in Reihe** (Flügel / Kassette). Voc kalt ≈ 174 V → **MPPT-Klasse 250 V**.
* Ladestrom je Strang: 121 A (12 V), 60 A (24 V), 30 A (48 V). **Empfehlung: 24- oder 48-V-Bordnetz.**
  Bei 12 V wären es zusammen über 240 A; das ist kaum sinnvoll.
* Der Flügel-Strang läuft über die Energiekette (Hub 2,35 m, liegend in der Kassette), der feste
  Strang ist fest verdrahtet. Trenner, Überspannungsschutz (Uc ≥ 200 V DC) und Potentialausgleich
  je Strang wie in electrical.md, angepasst auf 250 V.

## 4. Neue Risiken und offene Punkte

| Punkt | Bewertung | Maßnahme |
|---|---|---|
| **Gewicht 144 kg** | Liegt an der Grenze der Dachlast (Sprinter je nach Ausführung ca. 150 kg, **prüfen**) und erhöht den Schwerpunkt | 1740-Version ohne feste Module (107 kg) als Einstieg, CFK-Profile, Herstellerfreigabe der Dachlast |
| **Fahrt: ≈ 5,2 kN Auftrieb** (130 km/h, 9,5 m² flache Platte, c_lift 0,5 mit Windabweiser) | ≈ 2,6 kN je Seite auf Halter bzw. Gegenseite; ohne Windabweiser deutlich mehr | Windabweiser vorn, Höchstgeschwindigkeit begrenzen (z. B. 120 km/h), Windkanal oder CFD, Prüfung analog ISO 11154 |
| **Crash 10 g ≈ 13,6 kN** | Hohe Schubkraft in den Haltern | Formschlüssige Längsanschläge an mehreren Dachpunkten, Fachplaner |
| Überstand 175 mm je Seite in 2,8 m Höhe | Zulässig (2,37 m < 2,55 m), aber Kollisionsgefahr mit Ästen und Garagen. Auf der Gegenseite kein Platz für eine eigene Markise. | Kantenschutz, Kennzeichnung, Prüfstelle früh einbinden |
| Dach komplett belegt | Keine Dachluke oder Lüfter im Feld 2,37 × 3,99 m | Luken vorn oder hinten außerhalb der Kassette einplanen |
| Kippen der ganzen Kassette | 144 kg drehen um die Halterachse | Gewicht ist ausgeglichen (64 Nm), trotzdem blockierbare Streben Pflicht |
| Elektrische Moduldaten fehlen | Strangspannung hängt an der Annahme Voc = 52 V | Datenblatt Xola |

## 5. Vergleich der untersuchten Varianten

| Variante | Fläche (B × A) | PV aus / Fahrt | Gewicht | Fahrzeug |
|---|---:|---:|---:|---|
| 1160 quer (2 Flügel) | 2,43 × 2,50 m | 1.160 / 580 Wp | 62 kg | L2 |
| 1740 quer (+1 fest) | 2,43 × 2,50 m | 1.740 / 580 Wp | 73 kg | L2 |
| 3480 quer, 2 Module nebeneinander | 4,71 × 2,50 m | 3.480 / 1.160 Wp | 132 kg | nur L3/L4 |
| **1740 hochkant** | **3,81 × 2,48 m** | 1.740 / 1.740 Wp | 107 kg | L2 |
| **3480 hochkant (Leitentwurf)** | **3,81 × 2,48 m** | **3.480 / 1.740 Wp** | 144 kg | L2 |

**Empfehlung:** Hochkant als Leitentwurf. Für den Marktstart zuerst die **1740-hochkant-Version**
(107 kg, gleiche Fläche, gleiche Ladeleistung während der Fahrt). Die festen Kassettenmodule
werden als Ausbaustufe angeboten, sobald Dachlast und Fahrtlasten geprüft sind.
