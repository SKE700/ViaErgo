# Anforderungen – Xola SlideRoof 1160

Status: ✔ erfüllt · ◐ mit Einschränkung/Interpretation · ✘ nicht erfüllt (Zielkonflikt) · ? offen

## 1. Produkt und Einsatz

| ID | Anforderung | Status | Nachweis / Anmerkung |
|---|---|:---:|---|
| P-01 | Ersatz einer Seitenmarkise an deren Montageposition | ◐ | Vorderkante sitzt auf den Markisenhaltern, das Innenende zusätzlich auf Dachpunkten (README, Abweichung 2) |
| P-02 | Fahrzeuge: Sprinter, Transit, Crafter, Vito, vergleichbare Hochdachfahrzeuge | ◐ | Voraussetzung: nutzbare Dachbreite ≥ 1,55 m und keine Dachluke oder kein Lüfter im Kassettenfeld 1,49 × 2,49 m. Vito ist nur mit Hochdach/Aufstelldach-Sonderlösung möglich. |
| P-03 | Marktstart: 2 Module, manueller Teleskopauszug, 2 Bodenstützen | ✔ | |
| P-04 | Betrieb nur im Stand | ✔ | Mechanische Fahrverriegelung, Sensor und Warnung (electrical.md §7) |
| P-05 | Nicht für Sturm, Schneelast ausgefahren oder Wintermontage ausgefahren | ✔ | Betriebsanleitung, Warnschild, Windsensor optional |

## 2. Photovoltaik

| ID | Anforderung | Zielwert | Status | Anmerkung |
|---|---|---:|:---:|---|
| E-01 | PV-Leistung | 1.160 Wp | ✔ | 2 × 580 Wp |
| E-02 | Module ohne Verschattung im ausgefahrenen Zustand | 0 mm Zellüberdeckung | ✔ | Glasspalt 30 mm, die Überlappung liegt nur im modulfreien Rahmenschwanz |
| E-03 | 1 MPPT je Modul | 2 | ✔ | electrical.md |
| E-04 | DC-Trenner je Modul, Überspannungsschutz, Potentialausgleich | – | ✔ | electrical.md |
| E-05 | Kabelführung geschützt, Energiekette, Zugentlastung, IP68, MC4-kompatibel | – | ✔ | 2 liegende E-Ketten |
| E-06 | Laden während der Fahrt | (neu) | ✔ | Der obere Flügel liegt frei: 580 Wp eingefahren |
| E-07 | Elektrische Moduldaten (Voc, Isc, TK) | – | ? | **Fehlen im Datenblatt.** Gerechnet wurde mit Annahmen: Voc 52 V, Isc 14,3 A, TK −0,25 %/K |

## 3. Mechanik und Geometrie

| ID | Anforderung | Zielwert | Ist (Serie) | Status |
|---|---|---:|---:|:---:|
| M-01 | Solardachfläche | ≥ 5,5 m² | 5,51 m² (Module), 6,07 m² (gesamt) | ✔ |
| M-02 | Ausfahrbreite × -tiefe | 2,44 × 2,26 m | 2,43 (Breite) × 2,50 m (Ausladung) | ✔ |
| M-03 | Kassettentiefe eingefahren | < 120 mm | 110 mm Bauhöhe + 30 mm Halter | ◐ als Höhe interpretiert, Grundfläche 1,49 × 2,49 m |
| M-04 | Teleskopauszug, horizontal, ≥ 3 Stufen | – | Kassette → Innenflügel → Außenflügel | ✔ |
| M-05 | Hohe statische Reserve der Führung | S ≥ 2 | C₀ ≥ 6,8 kN je Rolle gefordert | ✔ Auslegungsregel |
| M-06 | Gasfedern 60–80 % Ausgleich | 60–80 % | 70 % an der Neigungsverstellung | ◐ (README, Abweichung 4) |
| M-07 | Rastung eingefahren, Bolzenverriegelung ausgefahren | – | Kugelrastung, federbelastete Doppelbolzen, Spannverschlüsse | ✔ |
| M-08 | Funktion bei Dachgefälle und Vibration | 5° quer | Hangabtrieb 34 N, Rollwiderstand 4 N → **Rastung und Rutschbremse nötig** | ✔ mit Bremse |
| M-09 | Modul vollflächig gestützt, keine Punktklemmen | – | Rippenrost ≤ 250 mm + durchgehende Klebebänder + EPDM-U-Kantenprofil | ✔ |
| M-10 | Trägerrahmen | ≤ 5 kg | 10,1 / 6,9 kg (Alu), 6,2 / 4,5 kg (CFK) | ✘ |
| M-11 | Flügel komplett | ≤ 15 kg | 19,2 / 16,0 kg (Alu), 15,3 / 13,6 kg (CFK) | ✘ / ◐ |
| M-12 | Gesamtgewicht | < 40 kg | 62 kg (Alu), 48 kg (CFK) | ✘ |
| M-13 | Gefälle nach außen | 5–10° | einstellbar 0/5/7/10° über Füße | ✔ |
| M-14 | Tropfkante / Rinne außen, überlappende Fugen mit EPDM | – | Schuppenprinzip, Rinne 40 × 25 mm | ✔ |
| M-15 | Stoffflügel optional | bis 7,5 m² | 6,1 + 2,0 m² = 8,1 m² | ✔ (erhöht die Windlast, siehe calc `fabric_wing`) |
| M-16 | Füße einzeln höhenverstellbar, breite rutschfeste Platten, Heringaufnahme | – | 2,24–2,84 m, Platte 200 × 200 mm, 4 Löcher Ø 12 | ✔ |
| M-17 | Montagezeit | < 60 min | ≈ 50 min bei fahrzeugspezifischem Adapterkit (2 Personen wegen 62 kg) | ◐ |
| M-18 | Regen-, staub-, waschanlagenfest | – | Siehe mechanics.md §4.4. Waschanlage nur mit Freigabe, Bürsten an der Glasoberfläche prüfen. | ◐ Test nötig |

## 4. Sicherheit und Bedienung

| ID | Anforderung | Status | Umsetzung |
|---|---|:---:|---|
| S-01 | Ausfahren nur im Stand | ✔ | Fahrverriegelung mit Schlüssel und Sensor, Warnsummer bei Zündung |
| S-02 | Sicherung gegen Ausfahren während der Fahrt | ✔ | 2 Transportriegel am Innenende + 2 Rastbolzen an der Kassettenfront, formschlüssig |
| S-03 | Manuelle Notbedienung | ✔ | System ist manuell, die Kurbel funktioniert stromlos |
| S-04 | Kennzeichnung „Bei starkem Wind einfahren“ | ✔ | Warnschild an der Vorderkante und am Kurbelanschluss, Betriebsanleitung |
| S-05 | Bedienung durch eine Person | ✔ | Zugkraft ≤ 165 N (Spitze) bzw. Kurbel ≤ 30 N am Griff, alles vom Boden aus |
| S-06 | Zündsperre (optional) | ◐ | Für den Marktstart nur Warnung. Eine echte Startsperre greift in die Fahrzeugelektrik ein (Typgenehmigung). |

## 5. Lastannahmen (Vorschlag – mit Fachplaner festlegen)

| Lastfall | Wert | Quelle / Begründung |
|---|---|---|
| Betriebswind | v = 10,8 m/s (Böe, Bft 5), q = 73 Pa | Markisenpraxis: ab Bft 6 einfahren. Analog EN 13561 Windwiderstandsklasse 2. |
| Netto-Druckbeiwert | Sog c_p = 1,5, Druck c_p = 1,0 | konservativ für ein an die Wand angelehntes Vordach, nach EN 1991-1-4 zu präzisieren |
| Missbrauchslast | 500 N an der Vorderkante | Person hängt sich an das Dach |
| Fahrt | 130 km/h, c_lift = 0,8, ±2 g vertikal, 1 g Bremsen, 10 g Crash | Prüfbasis analog ISO 11154 (Dachlastträger) |
| Vibration | Fahrzeugspektrum, Rauschen | ISO 16750-3 als Referenz |
| Temperatur | −20 … +85 °C (Modul in der Kassette) | |
| Schnee / Eis | **nicht** im ausgefahrenen Zustand | eingefahren ist er wie ein normales Dachmodul |

## 6. Offene Punkte

1. Elektrische Moduldaten sowie zulässige Durchbiegung, Lagerungs- und Klebefreigabe des Xola-Moduls.
2. Lochbilder und Tragfähigkeit der Markisenhalter je Fahrzeug (Fiamma, Thule, Dometic). Die Hersteller geben Halter für **ihre** Markise frei, nicht für Fremdlasten.
3. Zulässige Dachlast und Belastbarkeit der werkseitigen Dachbefestigungspunkte je Fahrzeug.
4. Zulassung: Bewertung durch Prüfstelle (Teilegutachten / Anbauabnahme, Fahrzeughöhe +140 mm).
5. Entscheidung Zielgewicht: 40 kg aufgeben oder auf CFK-Leichtbau (48 kg) und kleinere Module gehen.
