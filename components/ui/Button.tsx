import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "mk" | "px" | "ink" | "outline" | "light" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-calm active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-3";

const variants: Record<ButtonVariant, string> = {
  mk: "bg-mk-600 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(34_37_42/0.14)] hover:bg-mk-700 focus-visible:outline-mk-600",
  px: "bg-px-600 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.14),0_1px_2px_rgb(34_37_42/0.14)] hover:bg-px-700 focus-visible:outline-px-600",
  ink: "bg-ink text-ivory hover:bg-ink/88 focus-visible:outline-ink",
  outline:
    "border border-line bg-white/70 text-ink hover:border-ink/25 hover:bg-white focus-visible:outline-ink",
  light:
    "border border-white/20 bg-white/5 text-ivory hover:border-white/40 hover:bg-white/10 focus-visible:outline-ivory",
  ghost: "text-ink underline-offset-4 hover:underline focus-visible:outline-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-[15px] sm:text-base",
};

export function buttonClasses(variant: ButtonVariant = "ink", size: Size = "md", className?: string) {
  return cn(base, variants[variant], variant === "ghost" ? "h-auto px-0" : sizes[size], className);
}

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: Size;
  arrow?: boolean;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
};

export function Button({ href, children, variant = "ink", size = "md", arrow, external, className, ...rest }: Props) {
  const cls = buttonClasses(variant, size, className);
  const icon = external ? (
    <ArrowUpRight aria-hidden className="size-4 transition-transform duration-200 ease-calm group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  ) : arrow ? (
    <ArrowRight aria-hidden className="size-4 transition-transform duration-200 ease-calm group-hover:translate-x-0.5" />
  ) : null;

  if (external) {
    const isPlaceholder = href.startsWith("#");
    return (
      <a
        href={href}
        className={cls}
        {...(isPlaceholder ? { "data-placeholder": "buchungslink" } : { target: "_blank", rel: "noopener noreferrer" })}
        {...rest}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} {...rest}>
      {children}
      {icon}
    </Link>
  );
}
