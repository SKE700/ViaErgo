import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { courses, getCourse } from "@/content/courses";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { buttonClasses } from "@/components/ui/Button";
import { Badge, Container, Eyebrow, PhotoPlaceholder, Section, T } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/Reveal";
import { CourseCard } from "@/components/sections/CourseCard";
import { Faq } from "@/components/sections/Blocks";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourse((await params).slug);
  if (!course) return {};
  return pageMeta({ title: `${course.title}: ${course.subtitle}`, description: course.summary, path: `/kurse/${course.slug}` });
}

function BookingLink({ href, className }: { href: string; className?: string }) {
  return (
    <a href={href} data-placeholder="buchungslink" className={buttonClasses("mk", "lg", className)}>
      Jetzt Platz sichern
      <ArrowUpRight aria-hidden className="size-4" />
    </a>
  );
}

export default async function CoursePage({ params }: Props) {
  const course = getCourse((await params).slug);
  if (!course) notFound();

  const facts: [string, string][] = [
    ["Format", course.format],
    ["Termin", course.date],
    ["Dauer", course.duration],
    ["Zielgruppe", course.audienceShort],
    ["Fortbildungspunkte", course.points],
    ["Referent", course.speaker],
  ];

  const related = courses.filter((c) => c.slug !== course.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${course.title}: ${course.subtitle}`,
    description: course.summary,
    inLanguage: "de",
    url: `${site.url}/kurse/${course.slug}`,
    provider: { "@type": "EducationalOrganization", name: site.name, url: site.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-16 h-[480px] bg-gradient-to-b from-mk-100/80 to-transparent" />
        <Container className="relative pt-8 sm:pt-10">
          <nav aria-label="Brotkrumen" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-ink">Start</Link></li>
              <li aria-hidden><ChevronRight className="size-3.5" /></li>
              <li><Link href="/mutter-kind" className="hover:text-ink">Mutter-Kind</Link></li>
              <li aria-hidden><ChevronRight className="size-3.5" /></li>
              <li aria-current="page" className="max-w-[16rem] truncate text-ink">{course.title}</li>
            </ol>
          </nav>

          <div className="grid gap-12 pb-20 pt-10 lg:grid-cols-[1fr_22rem] lg:gap-16 lg:pb-28">
            {/* Inhalt */}
            <div className="min-w-0">
              <Reveal>
                <div className="flex flex-wrap gap-2">
                  <Badge tone="mk">{course.format}</Badge>
                  <Badge>Mutter-Kind-Fortbildung</Badge>
                </div>
                <h1 className="mt-6 text-[clamp(2.2rem,1.5rem+3vw,3.6rem)] font-semibold leading-[1.06]">{course.title}</h1>
                <p className="mt-3 text-xl font-medium text-mk-700 sm:text-2xl">{course.subtitle}</p>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{course.summary}</p>
              </Reveal>

              <div className="mt-16 space-y-16">
                <Block title="Über den Kurs">
                  <div className="space-y-4 text-[17px] leading-relaxed text-muted">
                    {course.description.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </Block>

                <Block title="Für wen ist der Kurs?">
                  <ul className="grid gap-3">
                    {course.audience.map((a) => (
                      <li key={a} className="flex gap-3 text-[17px] leading-relaxed">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-mk-500" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </Block>

                <Block title="Was lernst du?">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {course.outcomes.map((o) => (
                      <li key={o} className="flex gap-3 rounded-2xl border border-line bg-white/70 p-4 text-[16px] leading-snug">
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-mk-600 text-white">
                          <Check aria-hidden className="size-3" strokeWidth={3} />
                        </span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </Block>

                <Block title="Kursinhalte">
                  <ol className="divide-y divide-line border-y border-line">
                    {course.modules.map((m, i) => (
                      <li key={m} className="flex gap-5 py-4 text-[16px]">
                        <span className="w-7 shrink-0 font-mono text-sm leading-7 text-mk-600">{String(i + 1).padStart(2, "0")}</span>
                        <span className="leading-7">{m}</span>
                      </li>
                    ))}
                  </ol>
                </Block>

                <Block title="Vorkenntnisse">
                  <p className="text-[17px] leading-relaxed text-muted">{course.prerequisites}</p>
                </Block>

                <Block title="Dein Referent">
                  <div className="flex flex-col gap-6 rounded-3xl border border-line bg-gradient-to-br from-mk-50 to-surface p-6 sm:flex-row sm:items-center">
                    <PhotoPlaceholder label="FOTO DANIEL" className="aspect-square w-28 shrink-0 rounded-2xl" />
                    <div>
                      <p className="font-display text-xl font-semibold">Daniel</p>
                      <p className="mt-1 text-muted">Ergotherapeut · 15 Jahre Praxisleitung · Spezialist für Mutter-Kind-Therapie</p>
                      <Link href="/ueber-daniel" className="mt-3 inline-block text-sm font-medium text-mk-700 underline-offset-4 hover:underline">
                        Mehr über Daniel
                      </Link>
                    </div>
                  </div>
                </Block>

                <Block title="Häufige Fragen zum Kurs">
                  <Faq items={course.faq} />
                </Block>
              </div>
            </div>

            {/* Buchungskarte */}
            <aside aria-label="Kursdetails und Buchung" className="lg:pt-2">
              <div className="rounded-3xl border border-line bg-white p-6 shadow-[0_24px_60px_-36px_rgb(34_37_42/0.35)] lg:sticky lg:top-24">
                <Eyebrow tone="mk">Kursdetails</Eyebrow>
                <p className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em]">
                  <T>{course.price}</T>
                </p>
                <dl className="mt-6 divide-y divide-line border-y border-line text-[15px]">
                  {facts.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-3">
                      <dt className="text-muted">{k}</dt>
                      <dd className="text-right font-medium"><T>{v}</T></dd>
                    </div>
                  ))}
                </dl>
                <BookingLink href={course.bookingUrl} className="mt-6 w-full" />
                <p className="mt-3 text-center text-xs leading-relaxed text-muted">
                  Buchung über externen Anbieter <span className="font-mono">[BUCHUNGSLINK]</span>
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </div>

      {/* Weitere Kurse */}
      <Section labelledBy="weitere" className="border-t border-line bg-surface/50">
        <Container>
          <h2 id="weitere" className="text-[clamp(1.6rem,1.3rem+1.4vw,2.2rem)] font-semibold">Weitere Mutter-Kind-Fortbildungen</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Mobile Buchungsleiste */}
      <div className="sticky bottom-0 z-40 border-t border-line bg-ivory/90 backdrop-blur-xl lg:hidden">
        <Container className="flex items-center justify-between gap-4 py-3">
          <div className="min-w-0 text-sm">
            <p className="truncate font-medium">{course.title}</p>
            <p className="text-muted"><T>{course.price}</T></p>
          </div>
          <a href={course.bookingUrl} data-placeholder="buchungslink" className={buttonClasses("mk", "md", "shrink-0")}>
            Platz sichern
          </a>
        </Container>
      </div>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
