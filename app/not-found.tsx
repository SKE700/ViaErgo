import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="mt-4 text-[clamp(2.2rem,1.6rem+2.6vw,3.4rem)] font-semibold leading-[1.05]">Diese Seite gibt es nicht.</h1>
      <p className="mt-4 max-w-lg text-lg text-muted">Vielleicht hilft dir einer dieser Wege weiter.</p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="ink" arrow>Zur Startseite</Button>
        <Button href="/mutter-kind" variant="outline">Mutter-Kind-Kurse</Button>
      </div>
    </Container>
  );
}
