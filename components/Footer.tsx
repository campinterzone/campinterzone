import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1E120A] border-t border-[#B85C38] py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.svg"
          alt="Interzone"
          className="mx-auto mb-8 h-8 w-auto"
          style={{ filter: "brightness(0) invert(1)" }}
        />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { label: "The Story", href: "#story" },
            { label: "Library", href: "#library" },
            { label: "Loud Hours", href: "#loud-hours" },
            { label: "Workshops", href: "#workshops" },
            { label: "Gallery", href: "/gallery" },
            { label: "Join", href: "/join" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading uppercase tracking-widest text-xs text-[#6B4C35] hover:text-[#C4891A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-[#B85C38] mb-8" />

        {/* Tagline + copyright */}
        <p className="font-body text-[#6B4C35] text-sm mb-2">
          Find us on the playa.
        </p>
        <p className="font-heading uppercase tracking-widest text-xs text-[#6B4C35]">
          &copy; {year} Camp Interzone &mdash; Black Rock City
        </p>
      </div>
    </footer>
  );
}
