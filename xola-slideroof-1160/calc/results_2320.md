# Xola SlideRoof 1160 - Vorauslegung (Konzept)

> Automatisch erzeugt von `calc/slideroof_calc.py`. Handrechnung, Starrkoerper. Ersetzt keine statische Berechnung durch einen Fachplaner.

## Ausfahrgeometrie

| Groesse | Wert |
|---|---:|
| PV-Leistung ausgefahren / eingefahren (Fahrt) | 2320 / 1160 Wp |
| Anzahl Module / Laufschienen | 4 / 3 |
| Solarflaeche (Module) | 11.02 m2 |
| Dachflaeche ausgefahren (inkl. Rahmen) | 11.77 m2 |
| Ausladung ab Fahrzeugwand | 2498 mm |
| Breite (Fahrzeuglaengs) | 4710 mm |
| Fluegellaenge in Auszugsrichtung | 1409 mm |
| Hub Innenfluegel / Aussenfluegel | 1294 / 2543 mm |
| Kassette L x B x H (x, y, z) | 1489 x 4770 x 110 mm |
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
| Module Fluegel (4x) | 36.4 kg |
| Traegerrahmen Innenfluegel | 17.9 kg |
| Traegerrahmen Aussenfluegel | 13.1 kg |
| Kassette inkl. Laufprofile/Gelenke | 28.5 kg |
| Stuetzfuesse | 6.9 kg |
| Neigungsstreben/Gasfedern | 1.8 kg |
| Dach-Ankeradapter | 1.6 kg |
| Markisenhalter-Adapter | 2.4 kg |
| E-Ketten, Leitungen, Stecker | 1.4 kg |
| GESAMT | 109.9 kg |
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
| Eigengewicht bewegt + Kassette | 1017 N |
| Gewichtsmoment um Drehachse | 650 Nm |
| Staudruck bei 10.8 m/s | 73 Pa |
| Windflaeche | 11.77 m2 |
| Sog (cp=1.5) / Druck (cp=1.0) | 1287 / 858 N |
| Zug-Gasfedern gesamt (70 % Ausgleich) | 312 N (156 N je Feder) |
| Handkraft Vorderkante beim Neigen | 78 N |
| A Eigengewicht, Fuesse: Last je Fuss | 26 N |
| A Eigengewicht, Fuesse: Halter gesamt | 1249 N |
| B ohne Fuesse: Strebe Zug / Halter | 445 / 1462 N |
| C Sog, Fuesse lose: Strebe (+Zug/-Druck) | -656 N |
| C Sog, Fuesse lose: Halter (- = Abheben) | -926 N |
| C' Sog, Strebe frei: Ankerzug je Fuss | 191 N |
| D Druck von oben: Last je Fuss | 171 N |
| D Druck von oben: Halter gesamt | 1673 N |
| E Missbrauch 500 N Vorderkante: Strebe / Halter | 1301 / 2818 N |
| Abheben ohne Anker/Strebe ab | 8.1 m/s (29 km/h) |
| Abheben mit Ankern (ohne Strebe) ab | 13.2 m/s (48 km/h) |
| Grenzwind Halter (3000 N Abheben, PLATZHALTER) | 14.8 m/s (53 km/h) |

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
| Bemessungslast je Fuss (D + Missbrauch) | 338 N |
| Euler-Knicklast kleinstes Rohr | 1988 N |
| Knicksicherheit | 5.9 -> OK |
| Bodenpressung Fussplatte | 8 kPa |

## Fahrt (eingefahren)

| Groesse | Wert |
|---|---:|
| Staudruck 130 km/h | 815 Pa |
| Aerodyn. Auftrieb Kassette | 4631 N |
| Netto nach oben inkl. 2 g vertikal | 5670 N |
| Halter vorn gesamt / Riegel hinten gesamt | 2835 / 2835 N |
| Schub Bremsung 1 g / Crash 10 g | 1039 / 10393 N |

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
