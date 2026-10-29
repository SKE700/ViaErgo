# Xola SlideRoof 1160 - Vorauslegung (Konzept)

> Automatisch erzeugt von `calc/slideroof_calc.py`. Handrechnung, Starrkoerper. Ersetzt keine statische Berechnung durch einen Fachplaner.

## Ausfahrgeometrie

| Groesse | Wert |
|---|---:|
| PV-Leistung ausgefahren / eingefahren (Fahrt) | 3480 / 1160 Wp |
| Anzahl Module / Laufschienen | 6 / 3 |
| Drittes Modul passt in Kassette | ja |
| Solarflaeche (Module) | 16.53 m2 |
| Dachflaeche ausgefahren (inkl. Rahmen) | 11.77 m2 |
| Ausladung ab Fahrzeugwand | 2498 mm |
| Breite (Fahrzeuglaengs) | 4710 mm |
| Fluegellaenge in Auszugsrichtung | 1409 mm |
| Hub Innenfluegel / Aussenfluegel | 1294 / 2543 mm |
| Kassette L x B x H (x, y, z) | 1489 x 4770 x 150 mm |
| Fahrzeughoehe + (Kassette + Halter) | 180 mm |
| Rahmen-Ueberlappung (Stoss Fluegel) | 160 mm |
| Spalt Glas-Glas (keine Verschattung) | 30 mm |
| Absenkung Vorderkante bei 7 Grad | 304 mm |
| Anhebung Kassetten-Innenende | 181 mm |
| Stuetzfusslaenge geneigt / waagerecht | 2.39 / 2.69 m |
| Erforderlicher Verstellbereich Fuss | 2.24 ... 2.84 m |
| Max. Klapplaenge Fuss (2 Fuesse laengs) | 1.10 m |
| Rollenabstand Endlage | 120 mm |

## Gewicht

| Groesse | Wert |
|---|---:|
| Module Fluegel (4x) | 36.4 kg |
| Traegerrahmen Innenfluegel | 17.9 kg |
| Traegerrahmen Aussenfluegel | 13.1 kg |
| Kassette inkl. Laufprofile/Gelenke | 28.5 kg |
| Stuetzfuesse | 6.9 kg |
| Neigungsstreben/Gasfedern | 1.8 kg |
| Dach-Ankeradapter | 1.6 kg |
| Markisenhalter-Adapter | 2.4 kg |
| E-Ketten, Leitungen, Stecker | 1.4 kg |
| Kassettenmodul fest inkl. Auflage | 21.8 kg |
| GESAMT | 131.7 kg |
| Innenfluegel komplett (Ziel <= 15 kg) | 36.1 kg -> NICHT ERFUELLT |
| Aussenfluegel komplett (Ziel <= 15 kg) | 31.3 kg -> NICHT ERFUELLT |
| Traegerrahmen innen / aussen (Ziel <= 5 kg) | 17.9 / 13.1 kg -> NICHT ERFUELLT |
| Gesamt (Ziel < 40 kg) | NICHT ERFUELLT |

## Teleskopfuehrung (freier Kragzustand, Endlage, unverriegelt)

| Groesse | Wert |
|---|---:|
| Moment Stufe 1 (Kassette -> Innenfluegel) | 879 Nm |
| Moment Stufe 2 (Innen -> Aussenfluegel) | 211 Nm |
| Rolle Stufe 1 vorn / hinten je Laufschiene | 4188 / 3809 N |
| Rolle Stufe 2 vorn / hinten je Laufschiene | 1111 / 916 N |
| Erf. statische Tragzahl C0 je Rolle (S=2.0) | 8376 N |
| Aequiv. Schubladenlast (Mitte) Schienenpaar | 72 kg |
| Endverriegelung Moment je Seite (inkl. Stoss) | 571 Nm |
| Hangabtrieb bei 5 Grad Querneigung | 63 N |
| Rollwiderstand eingefahren | 7 N |
| Rollt selbsttaetig -> Rastung/Bremse noetig | JA |
| Zugkraft an der Bedienstange (max.) | 286 N |

## Statik ausgefahren

| Groesse | Wert |
|---|---:|
| Eigengewicht bewegt + Kassette | 1231 N |
| Gewichtsmoment um Drehachse | 491 Nm |
| Staudruck bei 10.8 m/s | 73 Pa |
| Windflaeche | 11.77 m2 |
| Sog (cp=1.5) / Druck (cp=1.0) | 1287 / 858 N |
| Zug-Gasfedern gesamt (70 % Ausgleich) | 235 N (118 N je Feder) |
| Handkraft Vorderkante beim Neigen | 59 N |
| A Eigengewicht, Fuesse: Last je Fuss | 20 N |
| A Eigengewicht, Fuesse: Halter gesamt | 1406 N |
| B ohne Fuesse: Strebe Zug / Halter | 336 / 1567 N |
| C Sog, Fuesse lose: Strebe (+Zug/-Druck) | -765 N |
| C Sog, Fuesse lose: Halter (- = Abheben) | -821 N |
| C' Sog, Strebe frei: Ankerzug je Fuss | 197 N |
| D Druck von oben: Last je Fuss | 165 N |
| D Druck von oben: Halter gesamt | 1830 N |
| E Missbrauch 500 N Vorderkante: Strebe / Halter | 1192 / 2923 N |
| Abheben ohne Anker/Strebe ab | 8.1 m/s (29 km/h) |
| Abheben mit Ankern (ohne Strebe) ab | 13.2 m/s (48 km/h) |
| Grenzwind Halter (3000 N Abheben, PLATZHALTER) | 14.9 m/s (54 km/h) |

## Querholm Aussenfluegel

| Groesse | Wert |
|---|---:|
| Spannweite | 2295 mm |
| Biegemoment | 49 Nm |
| Spannung / zulaessig | 13 / 136 MPa -> OK |
| Durchbiegung | 5.2 mm (L/440) |

## Stuetzfuesse

| Groesse | Wert |
|---|---:|
| Bemessungslast je Fuss (D + Missbrauch) | 331 N |
| Euler-Knicklast kleinstes Rohr | 1988 N |
| Knicksicherheit | 6.0 -> OK |
| Bodenpressung Fussplatte | 8 kPa |

## Fahrt (eingefahren)

| Groesse | Wert |
|---|---:|
| Staudruck 130 km/h | 815 Pa |
| Aerodyn. Auftrieb Kassette | 4631 N |
| Netto nach oben inkl. 2 g vertikal | 5884 N |
| Halter vorn gesamt / Riegel hinten gesamt | 2942 / 2942 N |
| Schub Bremsung 1 g / Crash 10 g | 1253 / 12531 N |

## Elektrik (Modul-Elektrowerte = ANNAHMEN)

| Groesse | Wert |
|---|---:|
| Voc bei -20 C | 57.9 V |
| Bemessungsstrom 1,25 x Isc | 17.9 A |
| Strang-Voc kalt je Fluegel (Module in Reihe) | 115.7 V -> MPPT-Klasse 150 V |
| Spannungsfall 6.0 m / 4.0 mm2 | 0.72 V (1.6 %) |
| MPPT-Ladestrom je Fluegel @ 12V | 81 A |
| MPPT-Ladestrom je Fluegel @ 24V | 40 A |
| MPPT-Ladestrom je Fluegel @ 48V | 20 A |
