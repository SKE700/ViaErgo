import Link from "next/link";
import { cn } from "@/lib/cn";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 32 32" className={cn("size-7", className)}>
      <circle cx="12.5" cy="16" r="8.5" className="fill-mk-500" />
      <circle cx="19.5" cy="16" r="8.5" className="fill-px-500" fillOpacity="0.85" style={{ mixBlendMode: "multiply" }} />
    </svg>
  );
}

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="ViaErgo Campus – Startseite" className={cn("inline-flex items-center gap-2.5 rounded-md", className)}>
      <LogoMark />
      <span className={cn("font-display text-[17px] font-semibold tracking-[-0.02em]", light ? "text-ivory" : "text-ink")}>
        ViaErgo <span className={cn("font-medium", light ? "text-ivory/60" : "text-muted")}>Campus</span>
      </span>
    </Link>
  );
}
