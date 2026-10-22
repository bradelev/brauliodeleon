import Link from "next/link";

const navLinks = [
  { href: "/#experience", label: "work" },
  { href: "/blog", label: "writing" },
  { href: "/braulio-de-leon-cv.pdf", label: "cv.pdf" },
] as const;

export function Header(): JSX.Element {
  return (
    <header className="mx-auto w-full max-w-5xl px-6">
      <nav
        aria-label="Main"
        className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-border py-5"
      >
        <Link
          href="/"
          className="font-semibold transition-colors hover:text-accent"
        >
          Braulio De Leon
        </Link>
        <ul className="-mx-2 flex items-center font-mono text-sm">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-2 py-2.5 text-muted transition-colors hover:text-accent"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
