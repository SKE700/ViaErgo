# Mechanik – Xola SlideRoof 1160

Koordinaten wie in der Berechnung: **x** = Auszugsrichtung (0 = Drehachse an der Kassettenfront,
positiv nach außen), **y** = Fahrzeuglängsrichtung, **z** = vertikal. Maße in mm, gerundet.
Alle Lastwerte stammen aus [calc/results.md](calc/results.md) (Serienvariante).

---

## 0. Variantenentscheidung Einbaulage

| Variante | Prinzip | Bewertung |
|---|---|---|
| A – Wandkassette senkrecht | Module stehen senkrecht an der Seitenwand (1,3 m hoch × 2,3 m lang) und werden hochgeklappt und ausgezogen | ✘ verdeckt Fenster und Schiebetür, 2 Bewegungen, hoher Luftwiderstand. **Verworfen.** |
| B – Dachrand-Kassette flach | Kassette liegt flach auf dem Dach an der Markisenseite, Auszug waagerecht über die Fahrzeugwand hinaus | ✔ Ausziehtisch-Prinzip, 110 mm hoch, oberes Modul lädt während der Fahrt. **Gewählt.** |
| C – Dachkassette quer, Auszug in Längsrichtung | Module fahren nach hinten oder vorn aus | ✘ falscher Schattenbereich, Konflikt mit Hecktüren. Verworfen. |

Voraussetzung für B: nutzbare Dachbreite ≥ 1,55 m und keine Dachluke, kein Lüfter und keine
vorhandenen Module im Feld 1.489 × 2.490 mm an der Markisenseite.

---

## 1. Ansichten

### 1.1 Draufsicht ausgefahren

```
  Fahrzeug-Längsrichtung  y ─────────────────────────────────────────►
 ┌──────────────────────────────── Fahrzeugdach ────────────────────────────────┐
 │                                                                               │
 │        S1 ◄─ Neigungsstrebe + Transportriegel (Dachpunkt/Dachträger) ─► S2     │
 │      ┌──────────────── Kassette 2 490 (y) × 1 489 (x) ─────────────────┐       │
 │      │ ┌ E-Kette 1 ┐             (leer, offen nach oben)                │       │
 │      │ └───────────┘                                                    │       │
 │      └──H1═══════════H2══════ Drehachse D (x = 0) ═══════H3═══════════H4┘       │
 └════════════════════════════ Fahrzeugwand (Markisenseite) ═════════════════════┘
        ┌────────────────────── Innenflügel 2 430 × 1 409 ─────────────────────┐
        │  ┌──────────────────── Modul 1   2 260 × 1 219 ──────────────────┐  │  x
        │  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  │  │
        │  └───────────────────────────────────────────────────────────────┘  │  ▼
        ╞══ Überlappung 160 mm · 4 Spannverschlüsse · Glasspalt 30 mm ════════╡ Auszug
        │  ┌──────────────────── Modul 2   2 260 × 1 219 ──────────────────┐  │
        │  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  │
        │  └───────────────────────────────────────────────────────────────┘  │
        └F1═════════════════ Regenrinne / Tropfkante ═════════════════════F2─┘
             F1, F2 = klappbare Teleskopfüße           Ausladung 2 498 mm
```

H1–H4: Adapterplatten auf den vorhandenen Markisenhaltern, zugleich Lagerböcke der Drehachse D.
Der Außenflügel ist 2.310 mm breit (y) und läuft innerhalb der Seitenprofile des Innenflügels.

### 1.2 Seitenansicht ausgefahren (Blick in Fahrzeuglängsrichtung, Neigung 7°)

```
                       Kassette (kippt mit, Innenende +181 mm)
      S ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━● D  Drehachse auf Markisenhalter
        ┃╲ blockierbare                          ╲
        ┃  Gasfeder + Zug-GF                       ╲  Innenflügel (obere Ebene)
  ══════╧═══════ Dach ══════════════════╗            ╲━━━━━━━━━━━━━━━━━━━┓
                                        ║ Wand                            ┗━━ Außenflügel (untere Ebene)
                                        ║                                       ╲━━━━━━━━━━━━━━━━━━━┓
            Fahrzeug                    ║ Drehachse                                                  ┗┓ Rinne
                                        ║ 2 750 über Boden                                            ┃
                                        ║                                                Fuß F1/F2   ┃ 2 240…2 840
                                        ║                                                            ┃
 ═══════════════════════════════════════╩════════════════════════════════════════════════════════════╩══ Boden
                                        |◄────────────────────── Ausladung 2 498 (horizontal 2 479) ─────►|
                                                      Absenkung der Vorderkante bei 7°: 304 mm
```

### 1.3 Seitenansicht eingefahren (Fahrt)

```
            S (Transportriegel)                        D
     ┌──────●──────────────────────────────────────────●─┐  ▲
     │  ░░░░ Innenflügel = Deckel (Modul 1 lädt) ░░░░░░  │  │ 110 mm Kassette
     │  ▒▒▒▒ Außenflügel (darunter, verschattet) ▒▒▒▒▒▒  │  │ + 30 mm Halter
     └───────────────────────────────────────────────────┘  ▼
 ════ Dach ═══════════════════════════════════════════════╗
                  Kassette 1 489 mm über dem Dach          ║ Wand
```

### 1.4 Schnitt A–A (y-z, Seitenrand, Kassette eingefahren)

```
 z [mm]          Kassetten-     Doppel-C-Profil         Außenflügel-
                 seitenwand     Innenflügel 70×40×2,5   profil C 30×25
 110 ┬ ┌─ Deckleiste mit Bürsten-/EPDM-Lippe ──┐
     │ │┌──────┐                               │░░░░ Modul 1 (3 mm) in EPDM-U-Profil ░░░░
  85 │ ││      │ ┌───────────────┐             ├══ Querholm/Rippen Innenflügel (h = 25) ══
     │ ││  ◎ ──┼─┤ obere C-Nut   │  ◎ Kurvenrolle Stufe 1 (am Profilende)
     │ ││ ▔▔▔▔ │ │ (Stufe 1)     │    ▔ Stahllaufbahn Ø 6 eingerollt
  50 │ ││      │ ├───────────────┤
     │ ││      │ │ untere C-Nut  ├─◎ Kurvenrolle Stufe 2 (am Außenflügel)
     │ ││      │ │ (Stufe 2) ▔▔▔ │ ┌────┐ ░░░░ Modul 2 in EPDM-U-Profil ░░░░
  15 │ ││      │ └───────────────┘ └────┘══ Querholm/Rippen Außenflügel (h = 30) ══
     │ │└──────┘   Längsstringer (Mitte) ── PP-Hohlkammer 3 mm (Staubschutz) ──
   0 ┴ └──────── Adapterplatte / Dachpad (EPDM 10 mm) ───────────────────────────
       │◄ 25 ►│◄5►│◄──── 40 ─────►│◄5►│◄25►│
```

Die Rollen sind **auf Kante** eingebaut: Ihre Achse liegt in y-Richtung, die Last wirkt radial und
vertikal. Damit entfällt die starke Abminderung flach liegender Kugel-Teleskopschienen.

---

## 2. Teleskopmechanik

### 2.1 Kinematik

| Stufe | Feststehend | Bewegt | Hub | Führung |
|---|---|---|---:|---|
| 1 | Kassetten-Seitenwand (C-Nut) | Innenflügel (Doppel-C, obere Nut) | 1.294 | 2 Rollen fest in Kassette (vorn) + 2 Rollen am Flügelende (hinten), je Seite |
| 2 | Innenflügel (Doppel-C, untere Nut) | Außenflügel (C 30 × 25) | 1.249 relativ, 2.543 absolut | 2 Rollen am Innenflügel (vorn) + 2 Rollen am Außenflügel (hinten), je Seite |
| 3 | – | Füße | klappen | Drehgelenk, siehe §5 |

**Synchronlauf 2:1 (Gabelstapler-Prinzip):** Ein Stahlseil (Ø 3 mm, 1.4401, 7×19, Mindestbruchkraft
≈ 6 kN) ist an der Kassette befestigt, läuft über eine Umlenkrolle an der Vorderkante des
Innenflügels und endet am Außenflügel. Der Außenflügel fährt dadurch doppelt so schnell wie der
Innenflügel. Ein zweites Seil über eine Rolle am Innenflügel-Ende zieht beim Einfahren zurück.
Das Hubverhältnis ist konstruktiv 1.294 : 2.543 (1 : 1,965). Die Differenz von 45 mm gleicht ein
Seilspanner mit Federpaket aus, die Endlagen setzen die Anschläge. So gibt es keine Sequenzriegel
und keine Klemmgefahr durch halbe Auszüge.

**Antrieb (Empfehlung):** Ein Zahnriemen AT5, 16 mm breit, mit Stahlcord läuft in der
Kassettenfront über ein Ritzel z = 25 (r ≈ 20 mm). Er greift über ein Kurbelgetriebe mit
Übersetzung 1 : 4 und Schlingfederbremse (selbsthemmend wie bei Markisengetrieben) am
Innenflügel an. Der Sechskant-Kurbelanschluss sitzt an der Kassetten-Stirnseite und ist vom Boden
mit Standard-Markisenkurbel erreichbar. Kennwerte: ≈ 41 Kurbelumdrehungen, Spitzenkraft am Riemen
165 N, dazu ≈ 3,3 Nm am Ritzel bzw. < 10 N an einer Kurbel mit 150 mm Radius.
Die Bremse verhindert, dass der Auszug bei Querneigung selbst rollt (Hangabtrieb 34 N gegen
4 N Rollwiderstand) und ersetzt so eine separate Rutschbremse.

### 2.2 Rollen und Laufbahnen

| Bauteil | Ausführung | Auslegung |
|---|---|---|
| Laufrollen Stufe 1 | Kurvenrolle (Stützrolle mit Zapfen) Ø 35–40 mm, Nadel- oder zweireihiges Kugellager, Edelstahl oder Zink-Lamelle, abgedichtet (2RS), exzentrischer Zapfen zur Spielfreistellung | erf. C₀ ≥ **6,8 kN** je Rolle (S = 2, Kipp- und Stoßfaktor eingerechnet). Typenwahl nach Herstellerkatalog, z. B. Baureihe KR/KRE 35–40. |
| Laufrollen Stufe 2 | wie oben, Ø 26–30 mm | erf. C₀ ≥ 1,8 kN |
| Laufbahnen | gehärteter Rundstab Ø 6 h6 (1.4034 bzw. Cf53) in Al-Profilnut eingerollt **oder** Flachstahl 1.4310 kaltverfestigt, geklebt und genietet | Linienkontakt mit Rolle auf **Aluminium ist unzulässig** (Hertz-Pressung bei 3,4 kN, Kaltfluss) |
| Seitenführung | 2 POM-C-Gleitstücke je Flügelende, Spiel 0,3 mm | gegen Verkanten in y |
| Endanschläge | PU-Puffer Shore 90A, 15 mm Hub | Endlage dämpfen, Einrasten |
| Rastung eingefahren | federbelastete Kugelraste (Rastkraft 60 N) + formschlüssiger Transportriegel | Vibration, Fahrt |
| Verriegelung ausgefahren | Doppelbolzen Ø 10 mm, 1.4462, je Seite und Stufe, federbelastet, selbsttätig einfallend, Entriegelung über Zugknopf. Dazu 4 Spannverschlüsse (Exzenter) an der Flügelüberlappung. | Moment je Seite ≤ 307 Nm (inkl. Stoßfaktor 1,3) |

**Warum die Endlage kritisch ist:** Beim Ausziehtisch-Prinzip schrumpft die Überdeckung der Stufen
am Hubende systembedingt. Der Rollenabstand in Endlage beträgt nur 120 mm, gesetzt durch den
modulfreien „Rahmenschwanz“ von 160 mm. Das Kragmoment von 473 Nm wird dann von zwei eng
stehenden Rollen getragen. Daraus ergeben sich rund 3,4 kN je Rolle (siehe calc).
Gegenmaßnahmen:

1. Die Rollen sind für den **freien, unverriegelten Kragzustand** mit S = 2 ausgelegt, weil der
   Bediener die Vorderkante in 2,8 m Höhe nicht tragen kann.
2. Die Dauerlast nach dem Verriegeln übernehmen die Bolzen und die 160-mm-Überlappung mit
   Spannverschlüssen. Die Momentenkopplung erfolgt über das vertikale Kräftepaar mit 160 mm Hebel
   und nicht über die Rollen.
3. Parameterstudie `--set tail_mm=200`: Der Rollenabstand steigt auf 160 mm, das erforderliche C₀
   sinkt auf ≈ 5,2 kN, dafür wird die Kassette 1.529 mm tief. Die Entscheidung hängt von der
   Dachbreite des Zielfahrzeugs ab.

### 2.3 Verriegelungslogik (mechanisch)

```
 EINGEFAHREN ──[Schlüssel: Transportriegel S1/S2 öffnen]──► FREI
 FREI ──[Kurbeln]──► AUSFAHREN ──[Endlage: Bolzen fallen ein, Klick + rote Fahne verschwindet]──► VERRIEGELT
 VERRIEGELT ──[Füße ausklappen, auf Boden stellen, Heringe]──► GESTÜTZT
 GESTÜTZT ──[Bloc-Gasfeder per Bowdenzug lösen, Füße kürzen → 5/7/10°]──► GENEIGT (Betrieb)
 Einfahren in umgekehrter Reihenfolge: zuerst waagerecht (0°-Raste), dann Füße, dann Bolzen, dann kurbeln.
```

Die Bolzen lassen sich nur bei 0° Neigung ziehen. Eine Kulisse am Strebenkopf sperrt den Zugknopf,
damit nicht mit gekippter Kassette eingefahren wird.

---

## 3. Modulträger und Rückenabstützung

### 3.1 Aufbau je Flügel

```
   Draufsicht Innenflügel (Rippen in x, Abstand ≤ 250 mm in y)
   ┌──┬────┬────┬────┬────┬────┬──┐  ← Querholm vorn 40×40×2 (6060-T66)
   │  │    │    │    │    │    │  │
   │  R1   R2   R3   R4   R5      │  Rippen: Hutprofil 30×15×1,2 (6063-T6), 5 Stk.
   │  │    │    │    │    │    │  │  Doppel-C-Seitenprofil links/rechts
   ├──┴────┴────┴────┴────┴────┴──┤  ← Querholm hinten
   │   Rahmenschwanz 160 mm (Rollen, Bolzen, Spannverschluss-Gegenstücke)
   └──────────────────────────────┘
```

| Element | Ausführung |
|---|---|
| Seitenprofile | Innenflügel: Doppel-C 70 × 40 × 2,5, EN AW-6082-T6 (Strangpress-Sonderprofil, Nut für Stahllaufbahn). Außenflügel: C 30 × 25 × 1,8, EN AW-6082-T6. |
| Querholme | Rechteckrohr 40 × 40 × 2 (Innen) bzw. 40 × 30 × 2 (Außen), EN AW-6060-T66. Spannweite 2,31–2,43 m; unter Winddruck plus Eigengewicht σ ≈ 13 MPa und f ≈ 5,4 mm (L/431). |
| Rippen | Hutprofil 30 × 15 × 1,2, Abstand ≤ 250 mm, oben flache 25-mm-Auflage |
| Modulauflage | **durchgehende** Strukturklebebänder auf jeder Rippe und auf den Querholmen, VHB-Acrylschaum 2,3 mm (z. B. 3M VHB 5952) **oder** 2K-Strukturklebstoff auf Silikon/MS-Polymer-Basis, je nach Freigabe des Modulherstellers. Ergibt eine Linienauflage alle 250 mm und keine Punktklemmen. |
| Kantenschutz | Umlaufendes EPDM-U-Profil (Glasfalzdichtung) für 3-mm-Laminat, 70 Shore A, auf das Rahmenprofil geklipst. Es dichtet zugleich die Fuge zwischen Modul und Rahmen. |
| Sogsicherung | Die Klebung trägt den Sog. Zusätzlich hält an den Ecken je eine EPDM-belegte Krallenleiste formschlüssig (Redundanz bei Klebeversagen, **keine** Klemmkraft auf das Laminat). |
| Anschlussdose | liegt in der Aussparung zwischen zwei Rippen; Kabel per Kabelclip am Rippenrücken geführt, Zugentlastung am Querholm hinten |

**Alternative Rückenabstützung:** Eine Alu-Verbundplatte von 3 mm, perforiert, wiegt ≈ 2,5 kg/m²,
also ≈ 7 kg je Modul, und sprengt das Gewichtsbudget. Eine GFK-PET-Schaum-Sandwichplatte von 8 mm
(≈ 2,6 kg/m²) bietet sich an, wenn der Modulhersteller eine vollflächige Auflage fordert. Der
Rippenrost ist leichter und hinterlüftet das Modul (weniger Temperaturverlust).

> **Fachplaner/Modulhersteller:** Die zulässige Durchbiegung und Rückseitenlast des rahmenlosen
> Moduls ist nicht spezifiziert. Rippenabstand und Klebung erst nach Freigabe durch Xola festlegen
> (Zyklentest Sog/Druck ±1.000 Pa, Temperaturwechsel −40/+85 °C, Vibration).

### 3.2 Gewicht Trägerrahmen

| Variante | Innenflügel | Außenflügel | Ziel |
|---|---:|---:|---:|
| Aluminium (Serie) | 10,1 kg | 6,9 kg | ≤ 5 kg |
| CFK-Seitenprofile/-Holme (Leichtbau) | 6,2 kg | 4,5 kg | ≤ 5 kg |

Der Innenflügel ist schwerer, weil sein Doppel-C-Profil beide Teleskopstufen trägt und die
Endverriegelung aufnimmt.

---

## 4. Kassette, Wandadapter, Abdichtung

### 4.1 Kassette

| Element | Ausführung |
|---|---|
| Frontprofil (Drehachse) | Sonderprofil 120 × 35, EN AW-6082-T6, mit integriertem Lagerrohr Ø 25 für die Drehachse (Edelstahlwelle 1.4404 Ø 20, PTFE-Gleitbuchsen) und Nut für die Kurbelgetriebe-Aufnahme |
| Rückprofil | 110 × 25, EN AW-6063-T6, Aufnahmen für Transportriegel und Streben |
| Seitenwände | C-Profil 110 × 25, Stahllaufbahn eingerollt, Endlagenpuffer |
| Längsstringer | Mitte (y = 0), 30 × 20. Stützt die eingefahrenen Flügel bei Vibration, mit EPDM-Pads |
| Boden | PP-Hohlkammerplatte 3 mm, nur Staubschutz, mit Entwässerungsschlitzen. Kein tragender Boden. |
| Deckleiste | umlaufende Leiste mit Bürsten- und EPDM-Lippe über dem Rand des Innenflügels. Hält den Flügel bei Fahrt formschlüssig nieder (Auftrieb). |
| Eckverbindungen | Eckwinkel aus 6082-T6, Blindnietmuttern M6, Senkschrauben A4 mit Schraubensicherung, Klebung mit 2K-PU |
| Oberfläche | eloxiert E6/EV1 20 µm bzw. pulverbeschichtet (Qualicoat Kl. 2), Kontaktstellen Edelstahl/Alu mit Isolierscheiben (Kontaktkorrosion) |

Hauptmaße: 1.489 (x) × 2.490 (y) × 110 (z) mm. Gewicht ≈ 16 kg (Serie) bzw. ≈ 10 kg (Leichtbau).

### 4.2 Befestigung am Fahrzeug – Lastpfad

```
   Fahrt:   Auftrieb 2,4 kN + 2 g ─► Deckleiste ─► Kassette ─┬─► Halter H1–H4 (vorn) ≈ 1,5 kN
                                                             └─► Riegel S1/S2 (hinten) ≈ 1,5 kN
   Betrieb: Flügel ─► Bolzen/Überlappung ─► Kassette ─┬─► Drehachse D ─► Halter H1–H4
                                                     ├─► Strebe S (Zug/Druck) ─► Dachpunkte
                                                     └─► (Flügel) ─► Füße F1/F2 ─► Boden
```

| Stelle | Ausführung | Hinweis |
|---|---|---|
| Vorn H1–H4 | **Adapterplatte je Hersteller** (6082-T6, 8 mm) mit Lagerbock für die Drehachse. Unterseitig ein Langlochfeld im 25-mm-Raster, damit die Halterbohrbilder von Fiamma F45s (fahrzeugspezifische Kits), Thule Omnistor (Wand- und Dachrinnen-Adapter) und Dometic (PerfectWall) aufgenommen werden. | Die **Lochbilder** werden am Fahrzeug bzw. nach Herstellerzeichnung aufgenommen und sind hier nicht verifiziert. Die Halter sind für die jeweilige Markise freigegeben. Für 2,1 kN (Missbrauch) bzw. 1,5 kN (Fahrt-Auftrieb) muss der Fachplaner oder der Halterhersteller die Tragfähigkeit bestätigen. Wo das nicht möglich ist, wird ein eigener Xola-Halter auf denselben Karosseriepunkten verwendet. |
| Hinten S1/S2 | Adapter auf werkseitige Dachbefestigungspunkte (z. B. Sprinter-Dachrinne M6) **oder** Klemmung an Dachträger-Querträger | keine neue Dachbohrung. Transportriegel als Spannverschluss mit Sicherungsbügel, Vorspannung ≥ 1 kN |
| Dachpads | EPDM 10 mm, 4 Stück unter der Kassette | Lackschutz, Entkopplung |

**Montage (Ziel < 60 min, 2 Personen):** Adapterplatten auf die Halter schrauben (15 min).
Kassette mit 2 Personen auflegen (62 kg) und Drehachse einschieben (10 min). Hintere Adapter
setzen, Riegel einstellen (15 min). Elektrik am vorbereiteten Dachdurchführungsstecker anschließen
(10 min). Funktionsprobe (5 min).

### 4.3 Abdichtungskonzept

| Fuge | Lösung |
|---|---|
| Modul ↔ Rahmen | EPDM-U-Kantenprofil umlaufend plus durchgehende Klebebänder, kein Wasser unter dem Laminat |
| Innenflügel ↔ Außenflügel (ausgefahren) | **Schuppenprinzip:** Der Innenflügel liegt oben, das Gefälle führt nach außen. Seine Vorderkante endet als Tropfkante 15 mm über dem Außenflügel. Darunter liegt eine EPDM-Hohlkammerdichtung (Ø 12) auf dem Rahmenschwanz, die die Spannverschlüsse anpressen. Eine Gegenneigung von 0° bis 10° bleibt dicht, weil die Überlappung 160 mm beträgt. |
| Innenflügel ↔ Kassette | Deckleiste mit doppelter Bürsten- und EPDM-Lippe. Ausgefahren: EPDM-Lippe an der Kassettenfront auf den Rahmenschwanz des Innenflügels. |
| Außenkante | Regenrinne 40 × 25 aus Al, am Querholm vorn angeklipst, Gefälle 1 % zu beiden Ecken, Ablauf in die Fußrohre oder per Schlauch |
| Seitenränder (y) | Tropfkante am Seitenprofil, kein Dichtanspruch (offene Seiten wie bei einer Markise) |
| Eingefahren, Fahrt | Deckleiste dichtet nach oben. Der Boden hat Entwässerungsschlitze mit Labyrinth. Eindringendes Spritzwasser läuft ab; Rollen und Lager sind abgedichtet (2RS) und korrosionsfest. |

**Waschanlage:** Das Glas ist bündig, die Lippen sind bürstenfest. Freigabe erst nach Test
(Bürstenwaschanlage, 10 Zyklen, Hochdruck 80 bar / 30 cm Abstand an den Lippen).

---

## 5. Stützfüße

| Merkmal | Ausführung |
|---|---|
| Aufbau | 3-teiliges Teleskop, Vierkantrohr 40/35/30 × 1,5, EN AW-6063-T66, eloxiert |
| Länge | eingeklappt ≤ 1.100 mm, Verstellbereich **2.240–2.840 mm** (Neigung 7° bis 0° plus ±150 mm Bodenausgleich) |
| Verstellung | grob: Federbolzen im Lochraster 50 mm; fein: Trapezgewindespindel Tr16×4 im Fußteil ±60 mm mit Knebel |
| Klappgelenk | Gelenkbock am Querholm vorn, Achse in x-Richtung, Edelstahlbolzen Ø 10. Fuß klappt in Querrichtung (y) unter den Außenflügel und wird mit Federklemme gehalten. Beide Füße zeigen zur Mitte (2 × 1.100 < 2.310). |
| Fußplatte | 200 × 200 × 5, Al mit Kugelgelenk (±15°), Gummiauflage mit Profil, 4 Löcher Ø 12 für Heringe/Erdanker |
| Lastpfad | Außenflügel-Querholm vorn → Gelenkbock → Rohr → Kugelgelenk → Platte → Boden. Bei Sog: Hering → Platte → Rohr (Zug) → Querholm. |
| Bemessung | max. 383 N je Fuß (Winddruck + Missbrauch), Euler-Knicklast kleinstes Rohr 1,99 kN → Sicherheit 5,2. Bodenpressung 10 kPa (auch auf Wiese unkritisch). Ankerzug bei Sog ohne Strebenblockierung: 147 N je Fuß. |

**Betriebsregel:** Heringe immer setzen. Ohne Blockierstrebe und ohne Anker hebt das Dach ab
≈ 8,3 m/s (30 km/h, Bft 4–5) ab. Mit Ankern hält es bis ≈ 14,6 m/s, ohne Strebe gerechnet.
Mit blockierter Strebe trägt der Kassettenhebel den Sog, die Halter werden dann bei Bft 5 mit
≈ 440 N nach oben belastet.

---

## 6. Wetterdach-Funktion und Neigung

* **Neigung 0 / 5 / 7 / 10°** über die Füße einstellen. Die Kassette kippt um die Drehachse, das
  Innenende hebt sich um bis zu 260 mm (bei 10°).
* **Zug-Gasfedern:** 2 × ≈ 82 N (Ausgleich 70 % des Kippmoments von 341 Nm). Die Handkraft an der
  Vorderkante beim Neigen sinkt auf ≈ 41 N und lässt sich mit der Bedienstange aufbringen.
* **Blockierbare Gasfedern** (Bloc-Prinzip, starr blockierend in Zug **und** Druck, mit Bowdenzug zur
  Kassettenfront): Sie halten die Neigung und tragen im Fall „Sog, Füße lose“ ≈ 335 N Druck und im
  Missbrauchsfall ≈ 1,1 kN Zug. Ist eine bidirektional starre Blockierung nicht lieferbar, wird eine
  mechanische Lochrasterstrebe (0/5/7/10°) parallel geschaltet.
* Die **Tropfkante und Rinne** an der Außenkante leiten das Wasser zu den Ecken.
* Der **Stoffflügel** (optional) ist ein PVC-beschichtetes Polyestergewebe von 400 g/m², in einer
  Kederschiene an der Rinne eingezogen, 2,4 × ≈ 0,85 m Zusatzfläche, und erhöht die Windlast.
  Rechnen mit `--set fabric_wing=true`.

---

## 6a. Variante 1740: Modul im Kassettenboden

Unter den beiden Flügeln liegt eine dritte Ebene mit einem fest eingeklebten Modul auf einem
Rippenrost. Die Kassette wird dadurch 40 mm höher (150 mm). Beim Kippen auf 5–10° neigt sich das
Modul mit nach außen. Das Wasser läuft zur Kassettenfront und muss dort durch Ablaufschlitze in
der Frontschwelle in die Rinne unter der Austrittskante. Das Gewicht hinter der Drehachse wirkt als
Gegengewicht: Das Kippmoment sinkt von 341 auf 262 Nm, die Zug-Gasfedern werden kleiner
(2 × 63 N statt 2 × 82 N). Ergebnisse in `calc/results_1740.md`.

## 7. Lastannahmen und Ergebnisse (Auszug)

| Lastfall | Wert |
|---|---:|
| Gewichtsmoment um die Drehachse, ausgefahren | 341 Nm |
| Kragmoment Stufe 1, freie Endlage | 473 Nm |
| Rollenlast Stufe 1 vorn/hinten je Seite | 3,4 / 3,1 kN |
| Sog bei Bft 5 (c_p 1,5, 6,07 m²) | 664 N |
| Halter, Missbrauch 500 N an der Vorderkante | 2,15 kN Druck |
| Halter, Sog Bft 5, Füße lose | 0,44 kN Zug |
| Fahrt 130 km/h + 2 g, Halter vorn gesamt | 1,50 kN Zug |
| Crash 10 g längs | 5,8 kN Schub |
| Querholm σ / f | 13 MPa / 5,4 mm |

> ⚠ **Statische Berechnung durch einen Fachplaner ist erforderlich für:** Markisenhalter und
> Adapter samt Karosserieanbindung (Fahrt, Crash, Missbrauch); Dachbefestigungspunkte;
> Endverriegelung und Überlappungsstoß (Ermüdung nach EN 1999-1-3, Böen); Rollen und Laufbahnen
> (Hertz-Pressung, Kaltfluss); Klebung des Moduls; Windlastbeiwerte für ein Vordach am Fahrzeug
> (EN 1991-1-4, ggf. Windkanal oder CFD); Stützfuß-Knicken mit Imperfektionen.
> Siehe [risk_analysis.md §5](risk_analysis.md#5-fachplaner--und-prüfpflichten).
