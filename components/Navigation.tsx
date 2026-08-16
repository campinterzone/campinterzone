import Link from "next/link";

interface NavigationProps {
  /** Right-hand button — the contact page swaps it for a way back to the camp. */
  ctaLabel?: string;
  ctaHref?: string;
  /** Near-solid espresso backing, for pages where the header doesn't sit over a hero image. */
  opaque?: boolean;
}

/**
 * Fixed header — logo left, date strip + button right.
 * Sits over the hero image, so it is translucent espresso with a blur.
 */
export default function Navigation({
  ctaLabel = "Contact",
  ctaHref = "/join",
  opaque = false,
}: NavigationProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[65] flex items-center justify-between gap-4 md:gap-8 px-6 md:px-10 py-[1.15rem] backdrop-blur-[8px] border-b border-[rgba(144,101,88,0.45)] ${
        opaque ? "bg-[rgba(30,18,10,0.9)]" : "bg-[rgba(30,18,10,0.34)]"
      }`}
    >
      <Link href="/" className="block shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Interzone"
          className="block h-[1.35rem] w-auto invert"
        />
      </Link>

      <div className="flex items-center gap-4 md:gap-8">
        <span className="hidden sm:inline font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[#C4A35A]">
          Aug 31 to Sep 7 &middot; Black Rock City
        </span>
        <Link
          href={ctaHref}
          className="font-heading font-semibold text-[0.65rem] uppercase tracking-[0.24em] text-[#EDE8DF] border border-[#B08020] px-6 py-[0.6rem] whitespace-nowrap hover:bg-[#B08020] hover:text-[#1E120A]"
        >
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
