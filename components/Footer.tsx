import Link from "next/link";

const links = [
  { label: "Interzone", href: "/#story" },
  { label: "Lost Times Library", href: "/#library" },
  { label: "Events", href: "/#workshops" },
  { label: "Contact", href: "/join" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2535] text-[#8FA8C0] border-t border-[#4A6080] px-6 md:px-[4.5rem] pt-16 pb-12">
      <div className="max-w-[64rem] mx-auto flex flex-col items-center gap-8 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Interzone"
          className="h-[2.1rem] w-auto invert"
        />

        <nav className="flex flex-wrap justify-center gap-6 md:gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading font-semibold text-[0.66rem] uppercase tracking-[0.24em] text-[#8FA8C0] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="w-full border-t border-[#4A6080]" />

        <span className="font-heading font-semibold text-[0.66rem] uppercase tracking-[0.24em] text-[#8FA8C0]">
          &copy; {year} Camp Interzone &middot; Black Rock City
        </span>
      </div>
    </footer>
  );
}
