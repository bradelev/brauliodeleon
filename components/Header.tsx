import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto max-w-5xl px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-base font-bold hover:text-gray-600 dark:hover:text-gray-300 sm:text-xl"
          >
            Braulio De Leon
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="text-xs font-medium hover:text-gray-600 dark:hover:text-gray-300 sm:text-sm"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-xs font-medium hover:text-gray-600 dark:hover:text-gray-300 sm:text-sm"
            >
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
