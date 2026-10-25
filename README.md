# ViaErgo Campus – viaergo.de

Fortbildungsplattform für Ergotherapeut:innen und Therapieprofis.
Next.js (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion.

## Entwicklung

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Produktions-Build (alle Seiten statisch)
npm run typecheck
```

## Struktur

- `app/` – Seiten: `/`, `/mutter-kind`, `/kurse/[slug]`, `/praxis`, `/ueber-daniel`, `/ueber-viaergo`, `/kontakt`, `/newsletter`, `/impressum`, `/datenschutz`, dazu `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`
- `content/` – alle Inhalte als Daten: `courses.ts` (5 Kurse), `praxis.ts`, `faq.ts`, `site.ts`
- `components/` – `layout/` (Header, Footer, Cookie-Hinweis), `ui/` (Button, Primitives, Logo), `sections/` (Kurskarte, Formulare, Visuals, Blöcke), `motion/`
- `app/globals.css` – Design-Tokens (Farben, Fonts, Easing)

Neuer Kurs: Objekt in `content/courses.ts` ergänzen – Kursseite, Sitemap und Übersichten entstehen automatisch.

## Platzhalter vor dem Livegang ersetzen

Alle Platzhalter stehen in eckigen Klammern und werden auf der Seite sichtbar markiert.

| Platzhalter | Ort |
|---|---|
| `[KURSPREIS]`, `[DAUER]`, `[TERMIN]`, `[FORTBILDUNGSPUNKTE]` | `content/courses.ts` |
| Buchungslinks (elopage) | `placeholderLinks.booking` in `content/site.ts` bzw. `bookingUrl` je Kurs |
| Newsletter- und Kontakt-Endpunkt | `components/sections/Forms.tsx` (aktuell keine Datenübertragung) |
| `[E-MAIL-ADRESSE]` | `content/site.ts` |
| `[FOTO DANIEL]`, `[WERDEGANG]`, `[QUALIFIKATIONEN]` | `app/ueber-daniel`, `app/mutter-kind` |
| `[KURZPROFIL DAN]`, `[BERATUNGSKONDITIONEN]` | `app/praxis`, `content/faq.ts` |
| `[TESTIMONIAL]`, `[NAME]` | `components/sections/Blocks.tsx` – nur echte, freigegebene Stimmen |
| Impressum und Datenschutz | `app/impressum`, `app/datenschutz` – rechtlich prüfen lassen |

Kursinhalte (Beschreibungen, Lernziele, Module) sind fachliche Entwürfe und müssen von Daniel geprüft werden.

## Datenschutz und Performance

- Schriften (Inter, Inter Tight) sind lokal eingebunden – keine Google-Fonts-Requests.
- Kein Tracking. Beim Einsatz von Analyse-Tools eine echte Consent-Lösung ergänzen.
- Animationen respektieren `prefers-reduced-motion`.
