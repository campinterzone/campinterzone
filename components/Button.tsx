"use client";

import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "filled" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

/**
 * Universal button — one style only, used everywhere on the site.
 * Design rules:
 * - Solid 1px border in #B08020
 * - Flat fill (no gradient, no shadow, no border-radius)
 * - Hover: instant background/text color inversion (no transition)
 * - Jost 600, all-caps, 0.65rem, tracking 0.24em
 *
 * The outline variant inherits its text color from the surrounding section, so
 * the same component reads correctly on parchment and on the dark header.
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "filled",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-block text-center font-heading font-semibold uppercase tracking-[0.24em] text-[0.65rem] py-[0.6rem] px-6 border cursor-pointer select-none";

  const styles =
    variant === "filled"
      ? "bg-[#B08020] text-[#1E120A] border-[#B08020] hover:bg-transparent hover:text-[#B08020]"
      : "bg-transparent text-inherit border-[#B08020] hover:bg-[#B08020] hover:text-[#1E120A]";

  const combined = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${combined} disabled:opacity-50 disabled:cursor-not-allowed`}>
      {children}
    </button>
  );
}
