import Link from "next/link";
import { courses } from "@/content/courses";
import { site } from "@/content/site";
import { Container } from "@/components/ui/primitives";
import { Logo } from "@/components/ui/Logo";
import { CookieSettingsButton } from "./CookieNotice";

const linkCls = "text-[15px] text-muted transition-colors hover:text-ink";

export function Footer() {
  const columns = [
    {
      title: "Mutter-Kind",
      links: [
        { href: "/mutter-kind", label: "Übersicht" },
        ...courses.slice(0, 4).map((c) => ({ href: `/kurse/${c.slug}`, label: c.title })),
      ],
    },
    {
      title: "Praxis-Schiene",
      links: [
        { href: "/praxis", label: "Übersicht" },
        { href: "/praxis#ki", label: "KI für Therapiepraxen" },
        { href: "/praxis#berichte", label: "Arztberichte & Dokumentation" },
        { href: "/praxis#marketing", label: "Marketing & Sichtbarkeit" },
      ],
    },
    {
      title: "Campus",
      links: [
        { href: "/ueber-daniel", label: "Über Daniel" },
        { href: "/ueber-viaergo", label: "Über ViaErgo" },
        { href: "/newsletter", label: "Newsletter" },
        { href: "/kontakt", label: "Kontakt" },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-surface/60">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{site.claim}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-sm font-semibold text-ink">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className={linkCls}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ViaErgo Campus</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/impressum" className="hover:text-ink">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-ink">
                Datenschutz
              </Link>
            </li>
            <li>
              <CookieSettingsButton className="hover:text-ink" />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
