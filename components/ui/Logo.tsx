import Link from "next/link";
import { cn } from "@/lib/cn";

/* eslint-disable @next/next/no-img-element -- statischer Export, Bilder sind bereits optimiert */

export function LogoMark({ className }: { className?: string }) {
  return <img src="/brand/viaergo-fuchs.png" alt="" width={121} height={112} className={cn("h-9 w-auto", className)} />;
}

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="ViaErgo Campus – Startseite" className={cn("inline-flex shrink-0 items-center gap-2 rounded-md", className)}>
      <LogoMark />
      <img
        src="/brand/viaergo-schriftzug.png"
        alt=""
        width={562}
        height={72}
        className={cn("h-[17px] w-auto sm:h-[19px]", light && "brightness-0 invert")}
      />
    </Link>
  );
}
