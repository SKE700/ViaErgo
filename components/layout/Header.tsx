"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";
import { Logo } from "@/components/ui/Logo";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ease-calm",
          scrolled ? "border-line/80 bg-ivory/75 backdrop-blur-xl backdrop-saturate-150" : "border-transparent bg-ivory/0",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-full px-3.5 py-2 text-[15px] transition-colors duration-200",
                        active ? "text-ink" : "text-muted hover:text-ink",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button href="/mutter-kind#kurse" size="sm" variant="ink">
              <span className="sm:hidden">Kurse</span>
              <span className="hidden sm:inline">Kurse entdecken</span>
            </Button>
            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Menü öffnen"
              className="inline-flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
            >
              <Menu aria-hidden className="size-5" />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>{open && <MobileMenu pathname={pathname} onClose={close} />}</AnimatePresence>
    </>
  );
}

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menü"
      className="fixed inset-0 z-[60] flex flex-col bg-ivory lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-mk-100/70 via-px-50/40 to-transparent" />
      <Container className="relative flex h-16 shrink-0 items-center justify-between">
        <Logo />
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Menü schließen"
          className="inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-ink/5"
        >
          <X aria-hidden className="size-5" />
        </button>
      </Container>

      <Container className="relative flex flex-1 flex-col justify-between overflow-y-auto pb-10 pt-8">
        <nav aria-label="Mobile Navigation">
          <ul className="space-y-1">
            {[{ href: "/", label: "Startseite" }, ...nav].map((item, i) => {
              const active = item.href === "/" ? pathname === "/" : isActive(pathname, item.href);
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block py-2.5 font-display text-[2rem] font-semibold leading-tight tracking-[-0.025em]",
                      active ? "text-ink" : "text-ink/55 hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-10 grid gap-3">
          <Button href="/mutter-kind" variant="mk" size="lg" arrow>
            Mutter-Kind-Kurse entdecken
          </Button>
          <Button href="/praxis" variant="outline" size="lg">
            Praxis-Schiene entdecken
          </Button>
        </div>
      </Container>
    </motion.div>
  );
}
