import Link from "next/link";
import { ArrowUpRight, CalendarClock, Clock, MonitorPlay, Radio, Users } from "lucide-react";
import type { Course, CourseFormat } from "@/content/courses";
import { Badge, T } from "@/components/ui/primitives";
import { buttonClasses } from "@/components/ui/Button";

const formatIcon: Record<CourseFormat, typeof Radio> = {
  Live: Radio,
  Online: MonitorPlay,
  Aufzeichnung: CalendarClock,
};

export function CourseCard({ course, headingLevel = "h3" }: { course: Course; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const FormatIcon = formatIcon[course.format];

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-line bg-white/70 p-6 transition-[border-color,box-shadow,transform] duration-300 ease-calm hover:-translate-y-0.5 hover:border-mk-200 hover:bg-white hover:shadow-[0_24px_48px_-28px_rgb(47_87_77/0.35)] sm:p-7">
      <div className="flex items-center justify-between gap-3">
        <Badge tone="mk">
          <FormatIcon aria-hidden className="size-3.5" />
          {course.format}
        </Badge>
        <span className="text-xs text-muted">Mutter-Kind</span>
      </div>

      <Heading className="mt-5 text-xl font-semibold leading-snug">
        <Link href={`/kurse/${course.slug}`} className="rounded-sm hover:text-mk-700">
          {course.title}
        </Link>
      </Heading>
      <p className="mt-1 text-[15px] font-medium text-mk-700">{course.subtitle}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{course.summary}</p>

      <dl className="mt-6 grid gap-2.5 border-t border-line pt-5 text-sm">
        <div className="flex items-center gap-2.5">
          <dt className="flex items-center gap-2 text-muted">
            <Clock aria-hidden className="size-4" />
            <span className="sr-only">Dauer</span>
          </dt>
          <dd><T>{course.duration}</T></dd>
        </div>
        <div className="flex items-center gap-2.5">
          <dt className="flex items-center gap-2 text-muted">
            <Users aria-hidden className="size-4" />
            <span className="sr-only">Zielgruppe</span>
          </dt>
          <dd>{course.audienceShort}</dd>
        </div>
        <div className="flex items-center justify-between gap-2.5 pt-1">
          <dt className="text-muted">Preis</dt>
          <dd className="font-semibold"><T>{course.price}</T></dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-6">
        <Link
          href={`/kurse/${course.slug}`}
          className={buttonClasses("mk", "md")}
          aria-label={`Kurs ansehen: ${course.title}`}
        >
          Kurs ansehen
        </Link>
        <a
          href={course.bookingUrl}
          data-placeholder="buchungslink"
          className="inline-flex items-center gap-1 text-sm text-muted underline-offset-4 hover:text-ink hover:underline"
          aria-label={`Direkt buchen: ${course.title} (Platzhalter für Buchungslink)`}
        >
          Direkt buchen <ArrowUpRight aria-hidden className="size-3.5" />
        </a>
      </div>
    </article>
  );
}
