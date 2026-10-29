# Elektrik – Xola SlideRoof 1160

> ⚠ Im vorliegenden Datenblatt fehlen die elektrischen Moduldaten. Gerechnet wird mit
> **Annahmen** für ein 144-Halbzellen-TOPCon-Modul mit 580 Wp: Voc 52,0 V, Isc 14,3 A, Vmp 43,5 V,
> Imp 13,4 A, TK(Voc) −0,25 %/K. Vor der Komponentenfreigabe durch Datenblattwerte ersetzen
> (`--set module_voc_v=… module_isc_a=…`).

## 1. Systemkonzept

* **1 Modul = 1 String = 1 MPPT.** Die Module sind unterschiedlich verschattet: Eingefahren liegt
  Modul 2 unter Modul 1, ausgefahren haben sie verschiedene Neigung und Kanten. Getrennte MPPTs
  holen deshalb mehr Ertrag als eine Reihen- oder Parallelschaltung. Ein einzelner String braucht
  keine Strangsicherung.
* **Laden während der Fahrt:** Modul 1 bildet den Kassettendeckel und liefert auch eingefahren Strom.
  Modul 2 liefert nur ausgefahren. Beide bleiben fest verdrahtet.
* Systemspannung frei wählbar (12/24/48 V). Die Auslegung erfolgt je Modul.

| Größe | Wert (Annahme) |
|---|---:|
| Voc bei −20 °C | 57,9 V → MPPT-Klasse **100 V** ausreichend |
| Bemessungsstrom 1,25 × Isc | 17,9 A |
| Ladestrom je Modul @ 12 / 24 / 48 V | 40 / 20 / 10 A |
| Spannungsfall 6 m einfach, 4 mm² | 0,72 V (1,6 %) |

## 2. Schaltplan (einpolig vereinfacht, je Modul identisch)

```
 AUSSENFLÜGEL                 INNENFLÜGEL               KASSETTE                    FAHRZEUG (innen)
 ┌──────────────┐  MC4   ┌──────────────────┐     ┌───────────────────┐     ┌─────────────────────────────────┐
 │ Modul 2      │═══════►│ E-Kette 2        │════►│ E-Kette 1         │═══► │ Q2 DC-Trenner 2-pol ─ F2 SPD ─┐ │
 │ 580 Wp  JB   │ 500 mm │ (liegend, Kabel- │     │ (liegend, Kas-    │     │                               │ │
 │ IP68         │        │  seite)          │     │  settenrückzone)  │     │      ┌── MPPT 2 100/50 ───────┘ │
 └──────────────┘        └──────────────────┘     │                   │     │      │                          │
                         ┌──────────────────┐     │  Klemmkasten X1   │     │      └─ F12 60 A ─┐             │
                         │ Modul 1 580 Wp   │════►│  IP67, PE-Schiene │     │                   ├─► Batterie- │
                         │ JB IP68  500 mm  │     │                   │     │      ┌─ F11 60 A ─┘   Verteiler│
                         └──────────────────┘     └─────────┬─────────┘     │      │                          │
                                                            │ Dach-/Wand-   │      └── MPPT 1 100/50 ───────┐ │
                                                            └─durchführung─►│ Q1 DC-Trenner 2-pol ─ F1 SPD ─┘ │
                                                              (vorhanden)   └─────────────────────────────────┘
 Potentialausgleich:  Außenflügel ─(4 mm² in E-Kette 2)─ Innenflügel ─(4 mm² in E-Kette 1)─ Kassette ─(6 mm²)─ Fahrzeugmasse
 Sensorik:            Reed S1/S2 „Transportriegel zu“  ·  Endschalter „Bolzen eingefallen“  ·  opt. Anemometer W1
```

## 3. Komponenten

| Pos. | Bauteil | Spezifikation | Beispiel / Hinweis |
|---|---|---|---|
| MPPT 1/2 | Solarladeregler | PV ≥ 100 V, Ladestrom nach System: 12 V → 50 A, 24 V → 30 A, 48 V → 20 A. Bluetooth/VE.Direct, Remote-On/Off-Eingang, E1-Kennzeichnung (ECE R10) | z. B. Victron SmartSolar 100/50 (12 V), 100/30 (24 V), 100/20 (48 V) oder gleichwertig. Isc-Grenze des Reglers ≥ 17,9 A prüfen. |
| Q1/Q2 | DC-Lasttrennschalter PV | 2-polig, Gebrauchskategorie DC-PV2, ≥ 100 V DC / ≥ 25 A, abschließbar, IP65 bei Einbau im Staukasten | separat je Modul (Lastenheft) |
| F1/F2 | Überspannungsschutz DC | Typ 2/3, **Uc ≥ 70 V DC** (≥ 1,2 × Voc kalt), Up ≤ 0,5 kV. Kein 600/1000-V-PV-Ableiter, dessen Schutzpegel liegt über der Festigkeit eines 100-V-Reglers. | Fahrzeug = kein Blitzschutz; Betriebsregel: **bei Gewitter einfahren** |
| F11/F12 | Batterieseitige Sicherung | MIDI/ANL 60 A (12 V) bzw. 40/25 A, möglichst nah an der Batterie | Leitung 10–16 mm² (12 V) nach Länge |
| X1 | Klemmkasten Kassette | IP67, Polyamid, Druckausgleichselement, PE-Schiene M6, Durchführung mit Kabelverschraubungen M16 | alle Übergänge von E-Kette zu Festverlegung |
| E1 | E-Kette Stufe 1 | Kunststoff-Energiekette **liegend** in Führungsrinne (Kassetten-Rückzone), Innenhöhe ≥ 13 mm, Biegeradius R 38, Verfahrweg 1.294 mm, Kettenlänge ≈ 0,8 m | Kette bleibt auch ausgefahren in der Kassette (Rahmenschwanz bei x = −160) |
| E2 | E-Kette Stufe 2 | wie E1, Verfahrweg 1.249 mm, liegt in der einseitig verbreiterten Kabelseite des Innenflügels (+30 mm, in der Berechnung berücksichtigt) | Alternative: Federleitungstrommel flach (Ø 120 × 35) im Rahmenschwanz |
| W | Leitungen bewegt | **energiekettentaugliche** DC-Solarleitung 2,5 mm², Feinstdraht Kl. 6, ≥ 1 kV DC, UV- und ozonbeständig, −40 °C flexibel, Ø ≤ 5,2 mm, Biegeradius ≤ 7,5 × d | Standard-PV-Leitung H1Z2Z2-K (EN 50618) ist **nicht** für Ketten freigegeben. Typ und Zyklenfreigabe beim Leitungshersteller (z. B. igus chainflex, LAPP ÖLFLEX) bestätigen lassen. |
| W | Leitungen fest | H1Z2Z2-K 4 mm² (6 mm² ab 8 m) bis MPPT | Spannungsfall ≤ 2 % |
| Stecker | MC4-kompatibel | **ein** Steckerhersteller je Steckverbindung (keine Fremdpaarung), IP68 gesteckt, mit Sicherungsclip | Modul-Anschlusskabel 500 mm → Verlängerung vom gleichen Steckersystem |
| Zugentlastung | | Kabelschellen mit EPDM-Einlage am Querholm hinten, Abstand ≤ 150 mm vom Stecker. Stecker selbst liegen **nicht** in der Kette. | Modulkabel 500 mm reichen bis zum Kettenanschluss |
| Durchführung | | vorhandene Dach-Kabeldurchführung der Solaranlage nutzen. Wenn keine vorhanden ist, eine Wanddurchführung im Bereich der Markisenhalter (IP68, Doppelkabel), **keine neue Dachbohrung** | |

## 4. Potentialausgleich und Schutz

* Alle leitfähigen Teile (Kassette, Flügelrahmen, Füße über das Gelenk) werden mit **Kupfer-Flachlitze
  bzw. 4 mm² grün-gelb in den E-Ketten** verbunden. Rollen und Gleitlager gelten **nicht** als
  Schutzleiterverbindung. Kassette → Fahrzeugmasse mit 6 mm² an einem karosserieseitigen
  Massebolzen.
* Die Module sind rahmenlos, es gibt also keinen Modulrahmen zum Erden. Der Potentialausgleich dient
  dem Schutz bei Isolationsfehlern der DC-Leitungen und der statischen Ableitung.
* Bei nicht galvanisch getrennten MPPTs (PV− = Batterie− = Fahrzeugmasse) gilt die Anlage als
  geerdetes DC-System. Leitungen kurzschluss- und erdschlusssicher verlegen (Einzeladern in
  separaten Kammern der E-Kette, Schutzschlauch an Kanten).
* Normenbezug: DIN VDE 0100-712 (PV) und DIN VDE 0100-721 (Caravans/Reisemobile) sinngemäß,
  ISO 16750 (Umwelt Fahrzeug), ECE R10 (EMV) für Elektronik.

## 5. Kabelrouting

```
 Modul 2 JB ─500 mm─► MC4 ─► Verl. 0,3 m ─► Zugentlastung Querholm hinten (Außenflügel)
                                          ─► E2 (bewegt, 2,5 mm²) ─► Übergabe Rahmenschwanz Innenflügel
 Modul 1 JB ─500 mm─► MC4 ─► Verl. 0,3 m ─┐
                                          ├► E1 (bewegt, 2,5 mm²) ─► X1 Klemmkasten ─► fest 4 mm² ─► Durchführung ─► Q/F/MPPT
 PE Außen ─────────────────── E2 ─────────┘
```

Die Leitungen in den Ketten sind in Kammern getrennt: Modul 1 ±, Modul 2 ±, PE, Sensorleitung
4 × 0,25 mm² geschirmt. Keine Schlaufen außerhalb der Kassette, Fahrtwind darf nirgends angreifen.

## 6. Bedien- und Warnelektronik (Marktstart)

| Funktion | Umsetzung |
|---|---|
| Zustand „fahrbereit“ | 2 Reedkontakte an den Transportriegeln S1/S2, 1 Endschalter „ganz eingefahren“ (Reihe = UND) |
| Warnung beim Starten | Eingang Kl. 15 (Zündung) bzw. D+ des Fahrzeugs. Wenn Zündung an und nicht fahrbereit: Summer 85 dB plus rote LED am Armaturenbrett plus Push über Bluetooth |
| Zündsperre | **nicht** im Marktstart: Eingriff in die Start- bzw. Wegfahrsperre ist fahrzeugspezifisch und berührt die Typgenehmigung. Option für OEM-Kooperation. |
| Windsensor (optional) | Schalensternanemometer an der Kassettenstirn, Auswertung 3-s-Böe. Ab 8 m/s Vorwarnung (Ton/App), ab 10,8 m/s Daueralarm „JETZT EINFAHREN“. Beim manuellen System gibt es keine Automatik. |
| Energiebedarf | < 5 mA Ruhestrom, Versorgung aus Bordbatterie über 1-A-Sicherung |

## 7. Variante 1740 (drittes Modul in der Kassette)

* Modul 3 liegt fest. Seine Leitung geht ohne Energiekette über Zugentlastung direkt zum Klemmkasten X1.
* Es braucht einen dritten Strang mit eigenem MPPT 3, Trenner Q3, Überspannungsschutz F3 und
  Batteriesicherung F13, dimensioniert wie Modul 1/2.
* Eingefahren ist Modul 3 voll verschattet. Der MPPT geht dann in Standby, Rückströme gibt es
  wegen der getrennten Stränge keine.

## 8. Motorisierte Ausbaustufe (später)

Ein 12-V-Rohr- oder Getriebemotor, etwa 20 Nm und IP67, wird auf den Kurbelsechskant gesetzt.
Dazu kommen Endschalter und Stromüberwachung als Klemmschutz. Bei Wind ≥ 10,8 m/s fährt die
Automatik **nur** ein, wenn die Füße und Heringe gelöst sind. Weil das nicht sicher erkennbar ist,
bleibt es auch dann bei einer Warnung (siehe risk_analysis.md).
