import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
] as const;

export function Header(): JSX.Element {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav aria-label="Main" className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-base font-bold transition-colors hover:text-gray-600 dark:hover:text-gray-300 sm:text-xl"
          >
            Braulio De Leon
          </Link>
          <div className="-mr-2 flex items-center gap-1 sm:gap-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-2 py-2 text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
