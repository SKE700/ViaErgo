# Xola SlideRoof 1160 - Vorauslegung (Konzept)

> Automatisch erzeugt von `calc/slideroof_calc.py`. Handrechnung, Starrkoerper. Ersetzt keine statische Berechnung durch einen Fachplaner.

## Ausfahrgeometrie

| Groesse | Wert |
|---|---:|
| PV-Leistung ausgefahren / eingefahren (Fahrt) | 1740 / 580 Wp |
| Anzahl Module / Laufschienen | 3 / 2 |
| Drittes Modul passt in Kassette | ja |
| Solarflaeche (Module) | 8.26 m2 |
| Dachflaeche ausgefahren (inkl. Rahmen) | 6.07 m2 |
| Ausladung ab Fahrzeugwand | 2498 mm |
| Breite (Fahrzeuglaengs) | 2430 mm |
| Fluegellaenge in Auszugsrichtung | 1409 mm |
| Hub Innenfluegel / Aussenfluegel | 1294 / 2543 mm |
| Kassette L x B x H (x, y, z) | 1489 x 2490 x 150 mm |
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
| Module Fluegel (2x) | 18.2 kg |
| Traegerrahmen Innenfluegel | 10.1 kg |
| Traegerrahmen Aussenfluegel | 6.9 kg |
| Kassette inkl. Laufprofile/Gelenke | 16.1 kg |
| Stuetzfuesse | 4.6 kg |
| Neigungsstreben/Gasfedern | 1.8 kg |
| Dach-Ankeradapter | 1.6 kg |
| Markisenhalter-Adapter | 1.6 kg |
| E-Ketten, Leitungen, Stecker | 1.4 kg |
| Kassettenmodul fest inkl. Auflage | 10.9 kg |
| GESAMT | 73.3 kg |
| Innenfluegel komplett (Ziel <= 15 kg) | 19.2 kg -> NICHT ERFUELLT |
| Aussenfluegel komplett (Ziel <= 15 kg) | 16.0 kg -> NICHT ERFUELLT |
| Traegerrahmen innen / aussen (Ziel <= 5 kg) | 10.1 / 6.9 kg -> NICHT ERFUELLT |
| Gesamt (Ziel < 40 kg) | NICHT ERFUELLT |

## Teleskopfuehrung (freier Kragzustand, Endlage, unverriegelt)

| Groesse | Wert |
|---|---:|
| Moment Stufe 1 (Kassette -> Innenfluegel) | 473 Nm |
| Moment Stufe 2 (Innen -> Aussenfluegel) | 114 Nm |
| Rolle Stufe 1 vorn / hinten je Laufschiene | 3381 / 3076 N |
| Rolle Stufe 2 vorn / hinten je Laufschiene | 900 / 742 N |
| Erf. statische Tragzahl C0 je Rolle (S=2.0) | 6762 N |
| Aequiv. Schubladenlast (Mitte) Schienenpaar | 39 kg |
| Endverriegelung Moment je Seite (inkl. Stoss) | 308 Nm |
| Hangabtrieb bei 5 Grad Querneigung | 34 N |
| Rollwiderstand eingefahren | 4 N |
| Rollt selbsttaetig -> Rastung/Bremse noetig | JA |
| Zugkraft an der Bedienstange (max.) | 165 N |

## Statik ausgefahren

| Groesse | Wert |
|---|---:|
| Eigengewicht bewegt + Kassette | 665 N |
| Gewichtsmoment um Drehachse | 262 Nm |
| Staudruck bei 10.8 m/s | 73 Pa |
| Windflaeche | 6.07 m2 |
| Sog (cp=1.5) / Druck (cp=1.0) | 664 / 443 N |
| Zug-Gasfedern gesamt (70 % Ausgleich) | 125 N (63 N je Feder) |
| Handkraft Vorderkante beim Neigen | 31 N |
| A Eigengewicht, Fuesse: Last je Fuss | 16 N |
| A Eigengewicht, Fuesse: Halter gesamt | 759 N |
| B ohne Fuesse: Strebe Zug / Halter | 179 / 844 N |
| C Sog, Fuesse lose: Strebe (+Zug/-Druck) | -389 N |
| C Sog, Fuesse lose: Halter (- = Abheben) | -388 N |
| C' Sog, Strebe frei: Ankerzug je Fuss | 152 N |
| D Druck von oben: Last je Fuss | 128 N |
| D Druck von oben: Halter gesamt | 977 N |
| E Missbrauch 500 N Vorderkante: Strebe / Halter | 1035 / 2200 N |
| Abheben ohne Anker/Strebe ab | 8.3 m/s (30 km/h) |
| Abheben mit Ankern (ohne Strebe) ab | 14.5 m/s (52 km/h) |
| Grenzwind Halter (2000 N Abheben, PLATZHALTER) | 16.4 m/s (59 km/h) |

## Querholm Aussenfluegel

| Groesse | Wert |
|---|---:|
| Spannweite | 2310 mm |
| Biegemoment | 49 Nm |
| Spannung / zulaessig | 13 / 136 MPa -> OK |
| Durchbiegung | 5.4 mm (L/431) |

## Stuetzfuesse

| Groesse | Wert |
|---|---:|
| Bemessungslast je Fuss (D + Missbrauch) | 378 N |
| Euler-Knicklast kleinstes Rohr | 1988 N |
| Knicksicherheit | 5.3 -> OK |
| Bodenpressung Fussplatte | 9 kPa |

## Fahrt (eingefahren)

| Groesse | Wert |
|---|---:|
| Staudruck 130 km/h | 815 Pa |
| Aerodyn. Auftrieb Kassette | 2417 N |
| Netto nach oben inkl. 2 g vertikal | 3105 N |
| Halter vorn gesamt / Riegel hinten gesamt | 1552 / 1552 N |
| Schub Bremsung 1 g / Crash 10 g | 687 / 6874 N |

## Elektrik (Modul-Elektrowerte = ANNAHMEN)

| Groesse | Wert |
|---|---:|
| Voc bei -20 C | 57.9 V |
| Bemessungsstrom 1,25 x Isc | 17.9 A |
| Strang-Voc kalt je Fluegel (Module in Reihe) | 57.9 V -> MPPT-Klasse 100 V |
| Spannungsfall 6.0 m / 4.0 mm2 | 0.72 V (1.6 %) |
| MPPT-Ladestrom je Fluegel @ 12V | 40 A |
| MPPT-Ladestrom je Fluegel @ 24V | 20 A |
| MPPT-Ladestrom je Fluegel @ 48V | 10 A |
