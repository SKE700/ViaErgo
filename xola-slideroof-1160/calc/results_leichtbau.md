# Xola SlideRoof 1160 - Vorauslegung (Konzept)

> Automatisch erzeugt von `calc/slideroof_calc.py`. Handrechnung, Starrkoerper. Ersetzt keine statische Berechnung durch einen Fachplaner.

## Ausfahrgeometrie

| Groesse | Wert |
|---|---:|
| PV-Leistung ausgefahren / eingefahren (Fahrt) | 1160 / 580 Wp |
| Anzahl Module / MPPT | 2 |
| Solarflaeche (Module) | 5.51 m2 |
| Dachflaeche ausgefahren (inkl. Rahmen) | 6.07 m2 |
| Ausladung ab Fahrzeugwand | 2498 mm |
| Breite (Fahrzeuglaengs) | 2430 mm |
| Fluegellaenge in Auszugsrichtung | 1409 mm |
| Hub Innenfluegel / Aussenfluegel | 1294 / 2543 mm |
| Kassette L x B x H (x, y, z) | 1489 x 2490 x 110 mm |
| Fahrzeughoehe + (Kassette + Halter) | 140 mm |
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
| Module Fluegel (2x) | 18.2 kg |
| Traegerrahmen Innenfluegel | 6.3 kg |
| Traegerrahmen Aussenfluegel | 4.5 kg |
| Kassette inkl. Laufprofile/Gelenke | 9.9 kg |
| Stuetzfuesse | 3.2 kg |
| Neigungsstreben/Gasfedern | 1.8 kg |
| Dach-Ankeradapter | 1.6 kg |
| Markisenhalter-Adapter | 1.6 kg |
| E-Ketten, Leitungen, Stecker | 1.4 kg |
| GESAMT | 48.5 kg |
| Innenfluegel komplett (Ziel <= 15 kg) | 15.4 kg -> NICHT ERFUELLT |
| Aussenfluegel komplett (Ziel <= 15 kg) | 13.6 kg -> OK |
| Traegerrahmen innen / aussen (Ziel <= 5 kg) | 6.3 / 4.5 kg -> NICHT ERFUELLT |
| Gesamt (Ziel < 40 kg) | NICHT ERFUELLT |

## Teleskopfuehrung (freier Kragzustand, Endlage, unverriegelt)

| Groesse | Wert |
|---|---:|
| Moment Stufe 1 (Kassette -> Innenfluegel) | 384 Nm |
| Moment Stufe 2 (Innen -> Aussenfluegel) | 93 Nm |
| Rolle Stufe 1 vorn / hinten je Seite | 2742 / 2496 N |
| Rolle Stufe 2 vorn / hinten je Seite | 733 / 605 N |
| Erf. statische Tragzahl C0 je Rolle (S=2.0) | 5484 N |
| Aequiv. Schubladenlast (Mitte) Schienenpaar | 31 kg |
| Endverriegelung Moment je Seite (inkl. Stoss) | 250 Nm |
| Hangabtrieb bei 5 Grad Querneigung | 28 N |
| Rollwiderstand eingefahren | 3 N |
| Rollt selbsttaetig -> Rastung/Bremse noetig | JA |
| Zugkraft an der Bedienstange (max.) | 139 N |

## Statik ausgefahren

| Groesse | Wert |
|---|---:|
| Eigengewicht bewegt + Kassette | 422 N |
| Gewichtsmoment um Drehachse | 299 Nm |
| Staudruck bei 10.8 m/s | 73 Pa |
| Windflaeche | 6.07 m2 |
| Sog (cp=1.5) / Druck (cp=1.0) | 664 / 443 N |
| Zug-Gasfedern gesamt (70 % Ausgleich) | 143 N (72 N je Feder) |
| Handkraft Vorderkante beim Neigen | 36 N |
| A Eigengewicht, Fuesse: Last je Fuss | 18 N |
| A Eigengewicht, Fuesse: Halter gesamt | 529 N |
| B ohne Fuesse: Strebe Zug / Halter | 205 / 626 N |
| C Sog, Fuesse lose: Strebe (+Zug/-Druck) | -363 N |
| C Sog, Fuesse lose: Halter (- = Abheben) | -606 N |
| C' Sog, Strebe frei: Ankerzug je Fuss | 150 N |
| D Druck von oben: Last je Fuss | 130 N |
| D Druck von oben: Halter gesamt | 747 N |
| E Missbrauch 500 N Vorderkante: Strebe / Halter | 1061 / 1982 N |
| Abheben ohne Anker/Strebe ab | 7.4 m/s (27 km/h) |
| Abheben mit Ankern (ohne Strebe) ab | 14.0 m/s (50 km/h) |
| Grenzwind Halter (2000 N Abheben, PLATZHALTER) | 15.8 m/s (57 km/h) |

## Querholm Aussenfluegel

| Groesse | Wert |
|---|---:|
| Spannweite | 2310 mm |
| Biegemoment | 49 Nm |
| Spannung / zulaessig | 16 / 364 MPa -> OK |
| Durchbiegung | 4.2 mm (L/554) |

## Stuetzfuesse

| Groesse | Wert |
|---|---:|
| Bemessungslast je Fuss (D + Missbrauch) | 380 N |
| Euler-Knicklast kleinstes Rohr | 3125 N |
| Knicksicherheit | 8.2 -> OK |
| Bodenpressung Fussplatte | 10 kPa |

## Fahrt (eingefahren)

| Groesse | Wert |
|---|---:|
| Staudruck 130 km/h | 815 Pa |
| Aerodyn. Auftrieb Kassette | 2417 N |
| Netto nach oben inkl. 2 g vertikal | 2862 N |
| Halter vorn gesamt / Riegel hinten gesamt | 1431 / 1431 N |
| Schub Bremsung 1 g / Crash 10 g | 444 / 4442 N |

## Elektrik (Modul-Elektrowerte = ANNAHMEN)

| Groesse | Wert |
|---|---:|
| Voc bei -20 C | 57.9 V |
| Bemessungsstrom 1,25 x Isc | 17.9 A |
| Spannungsfall 6.0 m / 4.0 mm2 | 0.72 V (1.6 %) |
| MPPT-Ladestrom je Modul @ 12V | 40 A |
| MPPT-Ladestrom je Modul @ 24V | 20 A |
| MPPT-Ladestrom je Modul @ 48V | 10 A |
