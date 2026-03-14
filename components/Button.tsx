"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Universal button — one style only, used everywhere on the site.
 * Design rules:
 * - Solid 2px border
 * - Flat fill (no gradient, no shadow, no border-radius)
 * - Hover: instant background/text color inversion (no transition)
 * - Jost, all-caps, wide tracking
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "filled",
  className = "",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-block font-heading font-semibold uppercase tracking-widest text-sm py-3 px-8 border-2 cursor-pointer select-none";

  const styles =
    variant === "filled"
      ? "bg-[#C4891A] text-[#F5EDD8] border-[#C4891A] hover:bg-[#F5EDD8] hover:text-[#C4891A]"
      : "bg-transparent text-[#C4891A] border-[#C4891A] hover:bg-[#C4891A] hover:text-[#F5EDD8]";

  const combined = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
    </button>
  );
}
