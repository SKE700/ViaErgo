# Xola SlideRoof hochkant - Vorauslegung (Konzept)

> Automatisch erzeugt von `calc/hochkant_calc.py`. Ersetzt keine statische Berechnung.

## Geometrie

| Groesse | Wert |
|---|---:|
| PV ausgefahren / bei Fahrt | 1740 / 1740 Wp |
| Module gesamt / Laufschienen | 3 / 4 |
| Solarflaeche | 8.26 m2 |
| Dach ausgefahren: Breite x Ausladung | 3.81 x 2.48 m |
| Dachflaeche ausserhalb Fahrzeug | 9.42 m2 |
| Kassette quer x laengs x hoch | 2370 x 3987 x 120 mm |
| Ueberstand ueber Karosserie je Seite | 175 mm |
| Gesamtbreite (zul. 2550) | 2370 mm -> OK |
| Kassettenlaenge auf Dach (nutzbar 4300) | OK |
| Fahrzeughoehe + | 150 mm |
| Hub Fluegel / Zwischenwagen | 2345 / 1172 mm |
| Ueberdeckung je Stufe in Endlage | 1138 mm |
| Absenkung Vorderkante / Anhebung Innenende bei 7 Grad | 302 / 268 mm |
| Stuetzfusslaenge geneigt / waagerecht | 2.39 / 2.69 m |

## Gewicht

| Groesse | Wert |
|---|---:|
| Module Fluegel (3x) | 27.3 kg |
| Traegerrahmen Fluegel | 21.8 kg |
| Kassette (Rahmen, Laufschienen fest, Boden) | 30.9 kg |
| Zwischenwagen Vollauszug (4x) | 11.1 kg |
| Stuetzfuesse | 6.9 kg |
| Neigungsstreben/Gasfedern | 1.8 kg |
| Dach-Ankeradapter | 1.6 kg |
| Markisenhalter-Konsolen | 3.0 kg |
| E-Ketten, Leitungen, Stecker | 2.2 kg |
| GESAMT | 106.6 kg |
| Fluegel komplett | 49.1 kg |
| Dachlast (Platzhalter 150 kg) | OK |

## Vollauszug (freier Kragzustand)

| Groesse | Wert |
|---|---:|
| Kragmoment um Austrittsrolle | 718 Nm |
| Hebel Rollenpaar (Ueberdeckung) | 1058 mm |
| Rolle vorn / hinten je Laufschiene | 542 / 287 N |
| Erf. C0 je Rolle (S=2.0) | 1084 N |

## Statik ausgefahren

| Groesse | Wert |
|---|---:|
| Gewichtsmoment um Drehachse | 432 Nm |
| Sog / Druck bei 10.8 m/s | 1030 / 687 N |
| Zug-Gasfeder je Stueck | 70 N |
| Ohne Fuesse: Strebe Zug / Halter | 200 / 1170 N |
| Sog, Fuesse lose: Strebe / Halter (- = Abheben) | -389 / -450 N |
| Sog, Strebe frei: Ankerzug je Fuss | 156 N |
| Druck: Last je Fuss / Halter | 134 / 1396 N |
| Missbrauch 500 N: Strebe / Halter | 771 / 2241 N |
| Abheben ohne Anker/Strebe ab | 8.3 m/s |
| Abheben mit Ankern (ohne Strebe) ab | 14.3 m/s |
| Querholm vorn, Spannweite 1904 mm | 15 / 136 MPa, f = 4.0 mm |

## Fahrt (eingefahren)

| Groesse | Wert |
|---|---:|
| Staudruck 130 km/h / Flaeche | 815 Pa / 9.45 m2 |
| Netto nach oben (c_lift 0.5, 2 g) | 4851 N |
| je Seite (Halter / Gegenseite) | 2425 N |
| Crash 10 g | 10003 N |

## Elektrik (Modulwerte = ANNAHMEN)

| Groesse | Wert |
|---|---:|
| Voc kalt je Modul / je Strang (3 in Reihe) | 57.9 / 173.6 V |
| Straenge / MPPT-Klasse | 1 / 250 V |
| Ladestrom je Strang @ 12V | 121 A |
| Ladestrom je Strang @ 24V | 60 A |
| Ladestrom je Strang @ 48V | 30 A |
