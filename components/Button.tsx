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
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-block font-heading font-semibold uppercase tracking-widest text-sm py-3 px-8 border-2 cursor-pointer select-none";

  const styles =
    variant === "filled"
      ? "bg-[#B08020] text-[#EDE8DF] border-[#B08020] hover:bg-[#EDE8DF] hover:text-[#B08020]"
      : "bg-transparent text-[#B08020] border-[#B08020] hover:bg-[#B08020] hover:text-[#EDE8DF]";

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
