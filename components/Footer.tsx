import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2535] border-t border-[#4A6080] py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Interzone"
          className="mx-auto mb-8 h-8 w-auto"
          style={{ filter: "invert(1)" }}
        />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { label: "Interzone", href: "/#story" },
            { label: "Lost Times Library", href: "/#library" },
            { label: "Events", href: "/#workshops" },
            { label: "Contact", href: "/join" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading uppercase tracking-widest text-xs text-[#8FA8C0] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-[#4A6080] mb-8" />

        {/* Tagline + copyright */}
        <p className="font-body text-[#8FA8C0] text-sm mb-2">
          Find us on the playa.
        </p>
        <p className="font-heading uppercase tracking-widest text-xs text-[#8FA8C0]">
          &copy; {year} Camp Interzone &mdash; Black Rock City
        </p>
      </div>
    </footer>
  );
}
